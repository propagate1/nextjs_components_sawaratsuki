"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

type ComponentItem = {
  id: string;
  name: string;
  component: React.ComponentType | null;
  category: string;
  fileName?: string;
  isLoading?: boolean;
};

type ComponentManifest = {
  id: string;
  name: string;
  category: string;
  fileName: string;
};

// Dynamic component creator for placeholder/new components
const createNewComponent = (id: string, name: string): React.ComponentType => {
  return function NewComponent() {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '300px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>新規コンポーネント</h1>
        <p style={{ fontSize: '1rem', color: '#666' }}>{name}</p>
        <p style={{ fontSize: '0.875rem', color: '#999', marginTop: '1rem' }}>ID: {id}</p>
      </div>
    );
  };
};

// Loading component
const LoadingComponent: React.ComponentType = () => {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f9f9f9', minHeight: '200px' }}>
      <div style={{ fontSize: '1rem', color: '#666' }}>
        <div className="animate-pulse">読み込み中...</div>
      </div>
    </div>
  );
};

// Component renderer with dynamic loading
function ComponentRenderer({ 
  item, 
  isViewMode, 
  onRemove,
  loadComponent 
}: { 
  item: ComponentItem; 
  isViewMode: boolean; 
  onRemove: () => void;
  loadComponent: (item: ComponentItem) => Promise<React.ComponentType>;
}) {
  const [Component, setComponent] = useState<React.ComponentType | null>(item.component);
  const [isLoading, setIsLoading] = useState(!item.component);

  useEffect(() => {
    if (!Component && !isLoading) {
      setIsLoading(true);
    }
    
    if (!Component) {
      loadComponent(item).then(LoadedComponent => {
        setComponent(() => LoadedComponent);
        setIsLoading(false);
      });
    }
  }, [item.id, Component, isLoading, item, loadComponent]);

  return (
    <div className="relative group">
      {!isViewMode && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2" style={{ zIndex: 9999 }}>
          <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded shadow-lg">
            {item.category} - {item.name}
          </span>
          <button
            onClick={onRemove}
            className="px-3 py-1.5 text-xs bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg font-medium"
            title={`${item.category} - ${item.name} を削除`}
          >
            ✕ 削除
          </button>
        </div>
      )}
      {isLoading || !Component ? (
        <LoadingComponent />
      ) : (
        <Component />
      )}
    </div>
  );
}

export default function ComponentFilter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedHeader, setSelectedHeader] = useState<string | null>(null);
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hasDragged, setHasDragged] = useState(false);
  const [isFilterButtonHovered, setIsFilterButtonHovered] = useState(false);
  const [isClearButtonHovered, setIsClearButtonHovered] = useState(false);
  const [isViewMode, setIsViewMode] = useState(false);
  const [isViewModeButtonHovered, setIsViewModeButtonHovered] = useState(false);
  const [newComponentButtonHovered, setNewComponentButtonHovered] = useState<string | null>(null);
  const [isRefreshButtonHovered, setIsRefreshButtonHovered] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Dynamic component loading
  const [allComponents, setAllComponents] = useState<ComponentItem[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [isLoadingManifest, setIsLoadingManifest] = useState(true);

  // Fetch available components from API on mount
  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch('/api/scan-components');
        const data = await response.json();
        
        if (data.success) {
          const componentItems: ComponentItem[] = data.components.map((comp: ComponentManifest) => ({
            id: comp.id,
            name: comp.name,
            category: comp.category,
            fileName: comp.fileName,
            component: null, // Will be loaded dynamically when needed
            isLoading: false,
          }));
          
          setAllComponents(componentItems);
          setAllCategories(data.categories);
          console.log(`✅ Discovered ${componentItems.length} components across ${data.categories.length} categories`);
        }
      } catch (error) {
        console.error('❌ Failed to fetch components:', error);
      } finally {
        setIsLoadingManifest(false);
      }
    };
    
    fetchComponents();
  }, []);

  // Dynamically load a component when it's selected
  const loadComponent = async (componentItem: ComponentItem): Promise<React.ComponentType> => {
    if (componentItem.component) {
      return componentItem.component;
    }

    // Extract the file name without extension
    const fileName = componentItem.fileName?.replace('.tsx', '') || '';
    
    try {
      // Dynamically import the component
      const module = await import(`./${componentItem.category}/${fileName}`);
      const LoadedComponent = module.default;
      
      // Update the component in state
      setAllComponents(prev => 
        prev.map(comp => 
          comp.id === componentItem.id 
            ? { ...comp, component: LoadedComponent, isLoading: false }
            : comp
        )
      );
      
      return LoadedComponent;
    } catch (error) {
      console.error(`❌ Failed to load component ${componentItem.id}:`, error);
      // Return a placeholder component on error
      return createNewComponent(componentItem.id, `${componentItem.name} (読み込みエラー)`);
    }
  };

  // Get next available number for a category
  const getNextComponentNumber = (category: string): number => {
    const categoryComponents = allComponents.filter((c) => c.category === category);
    const numbers = categoryComponents.map((c) => {
      const match = c.id.match(/\d+$/);
      return match ? parseInt(match[0], 10) : 0;
    });
    return numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
  };

  // Refresh component list from API
  const refreshComponentList = async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch('/api/scan-components');
      const data = await response.json();
      
      if (data.success) {
        const componentItems: ComponentItem[] = data.components.map((comp: ComponentManifest) => ({
          id: comp.id,
          name: comp.name,
          category: comp.category,
          fileName: comp.fileName,
          component: null,
          isLoading: false,
        }));
        
        setAllComponents(componentItems);
        setAllCategories(data.categories);
        console.log(`🔄 Refreshed: ${componentItems.length} components found`);
      }
    } catch (error) {
      console.error('❌ Failed to refresh components:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Create new component handler
  const handleCreateNewComponent = async (category: string) => {
    const nextNumber = getNextComponentNumber(category);
    const newId = `${category.toLowerCase()}${nextNumber.toString().padStart(2, '0')}`;
    const newName = `${category} ${nextNumber.toString().padStart(2, '0')}`;
    
    try {
      // Call API to create the actual file
      const response = await fetch('/api/create-component', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category,
          componentNumber: nextNumber,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log(`✅ Component created: ${result.fileName}`);
        
        // Refresh the component list to include the new component
        await refreshComponentList();
        
        // Auto-select the new component
        setSelectedComponents([...selectedComponents, newId]);
      } else {
        console.error('❌ Failed to create component file');
      }
    } catch (error) {
      console.error('❌ Error creating component:', error);
      // Still add a placeholder component
      const newComponent: ComponentItem = {
        id: newId,
        name: newName,
        component: createNewComponent(newId, `${newName} (作成失敗)`),
        category,
      };
      
      setAllComponents([...allComponents, newComponent]);
      setSelectedComponents([...selectedComponents, newId]);
    }
  };

  // Constrain position on window resize or filter panel open
  useEffect(() => {
    const constrainPosition = () => {
      const buttonWidth = 180;
      const buttonHeight = 100;
      const margin = 20; // Same margin on both left and right
      
      const maxX = window.innerWidth - buttonWidth - margin;
      const maxY = window.innerHeight - buttonHeight - margin;
      
      setPosition((prev) => ({
        x: Math.max(margin, Math.min(prev.x, maxX)),
        y: Math.max(margin, Math.min(prev.y, maxY)),
      }));
    };

    // Constrain on initial mount and window resize
    constrainPosition();

    // Constrain on window resize
    window.addEventListener("resize", constrainPosition);
    return () => window.removeEventListener("resize", constrainPosition);
  }, []);

  const toggleComponent = (componentId: string, category: string) => {
    if (category === "Header") {
      // Header category: only one at a time
      setSelectedHeader((prev) => (prev === componentId ? null : componentId));
    } else {
      // Other categories: multiple selection
      setSelectedComponents((prev) =>
        prev.includes(componentId)
          ? prev.filter((id) => id !== componentId)
          : [...prev, componentId]
      );
    }
  };

  const selectAllInCategory = (category: string) => {
    if (category === "Header") {
      // For Header, just select the first one
      const firstHeader = allComponents.find((c) => c.category === "Header");
      if (firstHeader) {
        setSelectedHeader(firstHeader.id);
      }
      return;
    }

    const categoryComponentIds = allComponents
      .filter((c) => c.category === category)
      .map((c) => c.id);
    
    const allSelected = categoryComponentIds.every((id) =>
      selectedComponents.includes(id)
    );

    if (allSelected) {
      setSelectedComponents((prev) =>
        prev.filter((id) => !categoryComponentIds.includes(id))
      );
    } else {
      setSelectedComponents((prev) => [
        ...new Set([...prev, ...categoryComponentIds]),
      ]);
    }
  };

  const selectedHeaderComponent = selectedHeader
    ? allComponents.find((c) => c.id === selectedHeader)
    : null;

  const filteredComponents = allComponents.filter((c) =>
    selectedComponents.includes(c.id)
  );

  const getCategorySelectionStatus = (category: string) => {
    if (category === "Header") {
      const totalHeaders = allComponents.filter((c) => c.category === "Header").length;
      return {
        total: totalHeaders,
        selected: selectedHeader ? 1 : 0,
        allSelected: false,
      };
    }

    const categoryComponents = allComponents.filter((c) => c.category === category);
    const selectedCount = categoryComponents.filter((c) =>
      selectedComponents.includes(c.id)
    ).length;
    return {
      total: categoryComponents.length,
      selected: selectedCount,
      allSelected: selectedCount === categoryComponents.length && selectedCount > 0,
    };
  };

  const handleViewmode = () => {
    setIsViewMode((prev) => !prev);
    setIsFilterOpen(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setHasDragged(false);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        // Mark that actual dragging occurred
        setHasDragged(true);
        
        // Get button dimensions
        const buttonWidth = 180;
        const buttonHeight = 100;
        const margin = 20; // Same margin on both left and right
        
        // Calculate new position
        let newX = e.clientX - dragOffset.x;
        let newY = e.clientY - dragOffset.y;
        
        // Constrain to screen boundaries with equal margins
        const maxX = window.innerWidth - buttonWidth - margin;
        const maxY = window.innerHeight - buttonHeight - margin;
        
        newX = Math.max(margin, Math.min(newX, maxX));
        newY = Math.max(margin, Math.min(newY, maxY));
        
        setPosition({
          x: newX,
          y: newY,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  // Keyboard shortcut for view mode: Ctrl+O or Cmd+O
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
        e.preventDefault();
        setIsViewMode((prev) => !prev);
        setIsFilterOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Floating Filter Button */}
      {!isViewMode && (
        <div
          className="fixed"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: isDragging ? "grabbing" : "grab",
            zIndex: 9999,
          }}
        >
          <div
            onMouseDown={handleMouseDown}
            onMouseEnter={() => setIsFilterButtonHovered(true)}
            onMouseLeave={() => setIsFilterButtonHovered(false)}
            className="rounded-full shadow-lg transition-colors select-none"
            style={{
              backgroundColor: isFilterButtonHovered ? "#8DBAC3" : "#AED9E0",
              width: "180px",
            }}
          >
            <button
              onClick={() => {
                if (!hasDragged) {
                  setIsFilterOpen(!isFilterOpen);
                }
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 font-medium w-full"
              style={{ color: "#2C5F6F" }}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="flex-shrink-0">フィルター</span>
              <span 
                className="px-2 py-0.5 rounded-full text-xs font-bold flex-shrink-0 min-w-[24px] text-center"
                style={{ backgroundColor: "#FFFFFF", color: "#2C5F6F" }}
              >
                {(selectedHeader ? 1 : 0) + selectedComponents.length}
              </span>
            </button>
          </div>
          {(selectedHeader || selectedComponents.length > 0) && (
            <button
              onClick={() => {
                setSelectedHeader(null);
                setSelectedComponents([]);
              }}
              onMouseEnter={() => setIsClearButtonHovered(true)}
              onMouseLeave={() => setIsClearButtonHovered(false)}
              className="mt-2 text-xs px-3 py-1.5 rounded-full transition-colors font-medium shadow-lg flex items-center justify-center"
              style={{
                backgroundColor: isClearButtonHovered ? "#FF9AA2" : "#FFB3BA",
                color: "#8B3A3A",
                width: "180px",
              }}
            >
              すべてクリア
            </button>
          )}
          <button
            onClick={handleViewmode}
            onMouseEnter={() => setIsViewModeButtonHovered(true)}
            onMouseLeave={() => setIsViewModeButtonHovered(false)}
            className="mt-2 text-xs px-3 py-1.5 rounded-full transition-colors font-medium shadow-lg flex items-center justify-center"
            style={{
              backgroundColor: isViewModeButtonHovered ? "#B8E986" : "#D4F1A2",
              color: "#4A6741",
              width: "180px",
            }}
          >
            閲覧モード (Ctrl+O)
          </button>
        </div>
      )}

      {/* Filter Panel Popup - Next to Button */}
      {isFilterOpen && (
        <div
          className="fixed bg-white shadow-2xl overflow-y-auto border border-gray-300 rounded-lg max-h-[80vh] w-80"
          style={{
            left: position.x > window.innerWidth / 2 
              ? `${position.x - 320 - 10}px`  // Open on left if button is on right half
              : `${position.x + 190}px`,       // Open on right if button is on left half
            top: `${position.y}px`,
            zIndex: 9998,
          }}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">カテゴリー選択</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={refreshComponentList}
                  onMouseEnter={() => setIsRefreshButtonHovered(true)}
                  onMouseLeave={() => setIsRefreshButtonHovered(false)}
                  disabled={isRefreshing}
                  className="p-1.5 rounded-full transition-colors disabled:opacity-50"
                  style={{
                    backgroundColor: isRefreshButtonHovered && !isRefreshing ? "#B8E6E1" : "transparent",
                    color: isRefreshing ? "#999" : "#2C5F6F",
                  }}
                  title="コンポーネントリストを更新"
                >
                  <svg 
                    className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {allCategories.map((category) => {
                const status = getCategorySelectionStatus(category);
                const isActive = activeCategory === category;
                
                return (
                  <div key={category} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="flex items-center bg-gray-50 p-2">
                      <button
                        onClick={() => setActiveCategory(isActive ? null : category)}
                        className="flex-1 flex items-center gap-2 text-left text-sm"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            isActive ? "rotate-90" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="font-semibold">{category}</span>
                        <span className="text-xs text-gray-500">
                          ({status.selected}/{status.total})
                        </span>
                      </button>
                      {category !== "Header" && (
                        <button
                          onClick={() => selectAllInCategory(category)}
                          className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                            status.allSelected
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          {status.allSelected ? "解除" : "全選択"}
                        </button>
                      )}
                    </div>
                    {isActive && (
                      <div className="p-2 bg-white space-y-2">
                        {/* New Component Button for this category */}
                        <button
                          onClick={() => handleCreateNewComponent(category)}
                          onMouseEnter={() => setNewComponentButtonHovered(category)}
                          onMouseLeave={() => setNewComponentButtonHovered(null)}
                          className="w-full text-xs px-3 py-1.5 rounded-md transition-colors font-medium flex items-center justify-center gap-1.5"
                          style={{
                            backgroundColor: newComponentButtonHovered === category ? "#9DD4CF" : "#B8E6E1",
                            color: "#2C5F6F",
                          }}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          新規作成
                        </button>
                        
                        {/* Component list */}
                        <div className="space-y-1">
                          {allComponents
                            .filter((c) => c.category === category)
                            .map((comp) => (
                              <label
                                key={comp.id}
                                className="flex items-center gap-2 p-1.5 rounded hover:bg-gray-50 cursor-pointer"
                              >
                                {category === "Header" ? (
                                  <input
                                    type="radio"
                                    name="header-selection"
                                    checked={selectedHeader === comp.id}
                                    onChange={() => toggleComponent(comp.id, category)}
                                    className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500"
                                  />
                                ) : (
                                  <input
                                    type="checkbox"
                                    checked={selectedComponents.includes(comp.id)}
                                    onChange={() => toggleComponent(comp.id, category)}
                                    className="w-3.5 h-3.5 text-blue-600 rounded focus:ring-blue-500"
                                  />
                                )}
                                <span className="text-xs">{comp.name}</span>
                              </label>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Components Display */}
      <div>
        {isLoadingManifest ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg animate-pulse">
              コンポーネントリストを読み込んでいます...
            </p>
          </div>
        ) : !selectedHeaderComponent && selectedComponents.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              コンポーネントを選択して表示
            </p>
            <p className="text-gray-400 text-sm mt-2">
              左上の「フィルター」ボタンからコンポーネントを選択
            </p>
          </div>
        ) : (
          <div>
            {/* Header Component - Always shown first if selected */}
            {selectedHeaderComponent && (
              <ComponentRenderer
                item={selectedHeaderComponent}
                isViewMode={isViewMode}
                onRemove={() => setSelectedHeader(null)}
                loadComponent={loadComponent}
              />
            )}
            
            {/* Other Components */}
            {filteredComponents.map((item) => (
              <ComponentRenderer
                key={item.id}
                item={item}
                isViewMode={isViewMode}
                onRemove={() => toggleComponent(item.id, item.category)}
                loadComponent={loadComponent}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

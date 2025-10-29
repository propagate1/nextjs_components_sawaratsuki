import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const componentsDir = path.join(process.cwd(), 'app', 'components');
    
    // Get all directories in components folder
    const entries = fs.readdirSync(componentsDir, { withFileTypes: true });
    const categories = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
    
    const components: Array<{
      id: string;
      name: string;
      category: string;
      fileName: string;
    }> = [];
    
    // Scan each category directory
    for (const category of categories) {
      const categoryDir = path.join(componentsDir, category);
      const files = fs.readdirSync(categoryDir);
      
      // Filter for .tsx files (excluding .module.css and other non-component files)
      const componentFiles = files.filter(file => 
        file.endsWith('.tsx') && !file.endsWith('.module.tsx')
      );
      
      for (const file of componentFiles) {
        // Extract component number from filename with strict validation
        // Must match: CategoryName + Number + .tsx (e.g., "Header01.tsx")
        const match = file.match(/^[A-Z][a-z]+(\d+)\.tsx$/);
        if (match) {
          const number = match[1];
          const id = `${category.toLowerCase()}${number}`;
          const name = `${category} ${number}`;
          
          // Check for duplicates before adding
          const isDuplicate = components.some(comp => comp.id === id);
          if (!isDuplicate) {
            components.push({
              id,
              name,
              category,
              fileName: file,
            });
          } else {
            console.warn(`⚠️ Duplicate component ID detected: ${id} (file: ${file})`);
          }
        } else {
          // Log files that don't match the naming convention
          if (!file.startsWith('.')) {
            console.warn(`⚠️ Skipping file with invalid name: ${category}/${file}`);
          }
        }
      }
    }
    
    // Sort components by category and then by number
    components.sort((a, b) => {
      if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
      }
      return a.id.localeCompare(b.id);
    });
    
    return NextResponse.json({
      success: true,
      components,
      categories: Array.from(new Set(components.map(c => c.category))),
    });
  } catch (error) {
    console.error('Error scanning components:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to scan components' },
      { status: 500 }
    );
  }
}


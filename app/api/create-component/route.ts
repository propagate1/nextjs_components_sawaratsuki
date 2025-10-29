import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { category, componentNumber } = await request.json();
    
    // Create component ID and name based on category
    const componentId = `${category}${componentNumber.toString().padStart(2, '0')}`;
    const fileName = `${componentId}.tsx`;
    const categoryDir = path.join(process.cwd(), 'app', 'components', category);
    const filePath = path.join(categoryDir, fileName);
    
    // Create the category directory if it doesn't exist
    await mkdir(categoryDir, { recursive: true });
    
    // Create the component content
    const componentContent = `export default function ${componentId}() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '300px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>新規コンポーネント</h1>
      <p style={{ fontSize: '1rem', color: '#666' }}>${category} ${componentNumber.toString().padStart(2, '0')}</p>
      <p style={{ fontSize: '0.875rem', color: '#999', marginTop: '1rem' }}>ID: ${componentId}</p>
    </div>
  );
}
`;
    
    // Write the file
    await writeFile(filePath, componentContent, 'utf8');
    
    return NextResponse.json({ 
      success: true, 
      componentId,
      fileName,
      category,
      filePath: `app/components/${category}/${fileName}`,
      message: 'Component created successfully' 
    });
  } catch (error) {
    console.error('Error creating component:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create component' },
      { status: 500 }
    );
  }
}


import { NextResponse } from 'next/server';
import clientPromise, { dbName } from '@/lib/mongodb';

export async function GET() {
  try {
    console.log('API route called: Attempting to connect to MongoDB...');
    
    // Connect to MongoDB
    const client = await clientPromise;
    
    // Sử dụng tên database từ biến môi trường
    const db = client.db(dbName);
    console.log(`Connected to the ${dbName} database`);
    
    // Use the menuitems collection specifically
    const collectionName = 'menuitems';
    const menuItems = await db.collection(collectionName).find({}).toArray();
    console.log(`Retrieved ${menuItems.length} items from collection ${collectionName}`);
    
    // Return data without the debug info to match original API response structure
    return NextResponse.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items from MongoDB:', error);
    return NextResponse.json(
      { error: 'Failed to fetch menu items from database' },
      { status: 500 }
    );
  }
} 
import clientPromise from './mongodb';

// Define menu item interface based on your data structure
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category: string;
  // Add other fields as needed
}

export async function getAllMenuItems(): Promise<MenuItem[]> {
  const client = await clientPromise;
  const db = client.db();
  return await db.collection('menu-items').find({}).toArray() as MenuItem[];
}

export async function getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
  const client = await clientPromise;
  const db = client.db();
  return await db.collection('menu-items')
    .find({ category })
    .toArray() as MenuItem[];
}

export async function getMenuItemById(id: string): Promise<MenuItem | null> {
  const client = await clientPromise;
  const db = client.db();
  return await db.collection('menu-items')
    .findOne({ id }) as MenuItem | null;
} 
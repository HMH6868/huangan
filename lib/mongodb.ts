import { MongoClient } from 'mongodb';

// Add global declaration for TypeScript
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Sử dụng biến môi trường thay vì hard-code URI
const uri = process.env.MONGODB_URI;
// Database mặc định là 'test', có thể thay đổi thông qua biến môi trường
const dbName = process.env.MONGODB_DB || 'test';

const options = {
  connectTimeoutMS: 10000, // 10 seconds
  socketTimeoutMS: 45000, // 45 seconds
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    
    // Add better error handling for development
    global._mongoClientPromise = client.connect()
      .catch(err => {
        console.error('Failed to connect to MongoDB in development:', err);
        throw err;
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .catch(err => {
      console.error('Failed to connect to MongoDB in production:', err);
      throw err;
    });
}

// Xuất cả client promise và database name
export default clientPromise;
export { dbName }; 
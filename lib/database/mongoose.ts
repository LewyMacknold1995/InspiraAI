import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL;

interface MongoosConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongoosConnection = (global as any).mongoose

if(!cached) {
    cached = cached = (global as any).mongoose = { 
    conn: null, promise: null 
    }
} 

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL is not defined');

    cached.promise = 
        cached.promise || 
        mongoose.connect (MONGODB_URL, { 
            dbName: 'inspiraAi', bufferCommands: false
        })

    cached.conn = await cached.promise;

    return cached.conn;
}
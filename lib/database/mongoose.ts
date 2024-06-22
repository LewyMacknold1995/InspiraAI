import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL;

interface MongoosConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}


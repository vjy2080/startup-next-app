import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
    const client = new MongoClient(process.env.MONGODB_URL);

    try {
        await client.connect();
        const db = client.db();
        const dataCollection = db.collection('startupNextApp');

        // Fetch all data
        const data = await dataCollection.find().toArray();

        // Return the fetched data
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("MongoDB connection error:", error);
        return NextResponse.json({ message: 'Fetching data failed!' }, { status: 500 });
    } finally {
        await client.close();
    }
}
import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
        return NextResponse.json({ message: 'Email query parameter is required' }, { status: 400 });
    }

    const client = new MongoClient(process.env.MONGODB_URL);

    try {
        await client.connect();
        const db = client.db();
        const usersCollection = db.collection('usersData');
        const user = await usersCollection.findOne({ email });

        if (user) {
            return NextResponse.json(user, { status: 200 });
        } else {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('MongoDB connection error:', error);
        return NextResponse.json({ message: 'Fetching data failed!' }, { status: 500 });
    } finally {
        await client.close();
    }
}

import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    if (req.method === 'POST') {
        const data = await req.json();
        const client = new MongoClient(process.env.MONGODB_URL);

        try {
            await client.connect();
            const db = client.db();
            const usersCollection = db.collection('usersData');

            // Check if the user already exists by email
            const existingUser = await usersCollection.findOne({ email: data.email });

            if (existingUser) {
                return NextResponse.json({ message: 'User already exists!' }, { status: 409 }); // 409 Conflict
            }

            // If user does not exist, insert the new user data
            const result = await usersCollection.insertOne(data);
            return NextResponse.json({ message: 'User added successfully', result }, { status: 201 }); // 201 Created

        } catch (error) {
            console.error("MongoDB connection error:", error);
            return NextResponse.json({ message: 'Inserting data failed!' }, { status: 500 });

        } finally {
            await client.close();
        }
    } else {
        return NextResponse.json({ message: 'Only POST requests are allowed' }, { status: 405 });
    }
}

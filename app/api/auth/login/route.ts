import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { username, password } = await request.json();

    try {
        const user = await prisma.otherUser.findUnique({
            where: { username },
        });

        if (user && user.password === password) {
            return NextResponse.json({ message: 'Login successful', username: user.username });
        } else {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

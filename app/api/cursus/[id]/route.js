import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'

// GET /api/cursus/:id

export const GET = async (req, { params }) => {
    const { id } = params;
    const cursusData = await prisma.cursus.findUnique({
        where: {
            id
        }
    });
    return NextResponse.json({
        success: true,
        data: cursusData,
        message: 'Cursus found successfully'
    })
}


// Delete /api/cursus/:id

export const DELETE = async (req, { params }) => {
    const { id } = params;
    const cursusData = await prisma.cursus.delete({
        where: {
            id
        }
    });
    return NextResponse.json({
        success: true,
        data: cursusData,
        message: 'Cursus deleted successfully'
    })
}
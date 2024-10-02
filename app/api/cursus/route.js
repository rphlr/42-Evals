import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'


// GET /api/cursus

export const GET = async (req) => {
    const cursusData = await prisma.cursus_evals.findMany();
    return NextResponse.json({
        success: true,
        data: cursusData,
        message: 'Cursus found successfully'
    })
}


// POST /api/cursus


export const POST = async (req) => {
    const body = await req.json();
    const {
        cursus_name,
        cursus_id
    } = body;
    const cursusData = await prisma.cursus_evals.create({
        data: {
            cursus_name: cursus_name,
            cursus_id: cursus_id
        }
    });
    return NextResponse.json({
        success: true,
        data: cursusData,
        message: 'Cursus created successfully'
    })
}

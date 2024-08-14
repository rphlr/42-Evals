import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'

// GET /api/mandatorySection

export const GET = async (req) => {
    const mandatorySectionData = await prisma.mandatorySection.findMany();
    return NextResponse.json({
        success: true,
        data: mandatorySectionData,
        message: 'MandatorySections found successfully'
    })
}


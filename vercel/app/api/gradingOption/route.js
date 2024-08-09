import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'

// GET /api/mandatorySection

export const GET = async (req) => {
    const gradingOptionData = await prisma.gradingOption.findMany();
    return NextResponse.json({
        success: true,
        data: gradingOptionData,
        message: 'MandatorySections found successfully'
    })
}


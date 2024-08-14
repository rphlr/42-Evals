import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'

// GET /api/bonusSection

export const GET = async (req) => {
    const bonusSectionData = await prisma.bonusSection.findMany();
    return NextResponse.json({
        success: true,
        data: bonusSectionData,
        message: 'bonusSections found successfully'
    })
}


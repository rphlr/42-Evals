import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'


// GET /api/bonusSection/[id] and get bonus section by sheet id

export const GET = async (req, { params }) => {
    const { id } = params;
    const bonusSectionData = await prisma.bonusSection.findMany({
        where: {
            sheetId: id
        }
    });

    return NextResponse.json({
        success: true,
        data: bonusSectionData,
        message: 'bonus section retrieved successfully'
    })
}



// PUT /api/bonusSection/[id] and update bonus section by sheet id

export const PUT = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();

    const updatePromises = body.map(item => {
        return prisma.bonusSection.update({
            where: {
                id: item.ids,  // Ensure each item has a unique identifier
            },
            data: {
                title: item.title,
                subtitle: item.subtitle,
                description: item.description,
                yes_no: item.yes_no
            }
        });
    });

    const bonusSectionData = await Promise.all(updatePromises);

    return NextResponse.json({
        success: true,
        data: bonusSectionData,
        message: 'Bonus sections updated successfully'
    });
}






// POST /api/bonusSection/[id] and connect to sheet


export const POST = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();

    const bonusSectionData = await prisma.bonusSection.createMany({
        data: body.map((item) => {
            return {
                title: item.title,
                subtitle: item.subtitle,
                description: item.description,
                yes_no: item.yes_no,
                sheetId: id
            }
        })

    });

    return NextResponse.json({
        success: true,
        data: bonusSectionData,
        message: 'bonus section created successfully'
    })

}



// DELETE /api/bonusSection/[id] and delete bonus section by sheet id

export const DELETE = async (req, { params }) => {
    try {
        const { id } = params;
        const bonusSectionData = await prisma.bonusSection.deleteMany({
            where: {
                sheetId: id
            }

        });

        return NextResponse.json({
            success: true,
            data: bonusSectionData,
            message: 'bonus section deleted successfully'
        })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'bonus section not deleted',
            error: error
        })
    }
}
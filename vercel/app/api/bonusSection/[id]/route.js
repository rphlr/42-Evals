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
    const { title, subtitle, description, yes_no } = body;
    const bonusSectionData = await prisma.bonusSection.updateMany({
        // where: {
        //     id
        // },
        // data: {
        //     title: title,
        //     description: description,
        //     yes_no: yes_no
        // }

        where: {
            sheetId: id
        },
        data: {
            title: title,
            subtitle: subtitle,
            description: description,
            yes_no: yes_no
        }

    });

    return NextResponse.json({
        success: true,
        data: bonusSectionData,
        message: 'bonus section updated successfully'
    })

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
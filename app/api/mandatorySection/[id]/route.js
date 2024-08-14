import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'


// GET /api/mandatorySection/[id] and get mandatory section by sheet id

export const GET = async (req, { params }) => {
    const { id } = params;
    const mandatorySectionData = await prisma.mandatorySection.findMany({
        where: {
            sheetId: id
        }
    });

    return NextResponse.json({
        success: true,
        data: mandatorySectionData,
        message: 'Mandatory section retrieved successfully'
    })
}



// PUT /api/mandatorySection/[id] and update mandatory section by sheet id

export const PUT = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();

    const updatePromises = body.map(item => {
        return prisma.mandatorySection.update({
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

    const mandatorySectionData = await Promise.all(updatePromises);

    return NextResponse.json({
        success: true,
        data: mandatorySectionData,
        message: 'mandatory sections updated successfully'
    });
}






// POST /api/mandatorySection/[id] and connect to sheet


export const POST = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();

    const mandatorySectionData = await prisma.mandatorySection.createMany({
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
        data: mandatorySectionData,
        message: 'Mandatory section created successfully'
    })

}



// DELETE /api/mandatorySection/[id] and delete mandatory section by sheet id

export const DELETE = async (req, { params }) => {
    try {
        const { id } = params;
        const mandatorySectionData = await prisma.mandatorySection.deleteMany({
            where: {
                sheetId: id
            }

        });

        return NextResponse.json({
            success: true,
            data: mandatorySectionData,
            message: 'Mandatory section deleted successfully'
        })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Mandatory section not deleted',
            error: error
        })
    }
}
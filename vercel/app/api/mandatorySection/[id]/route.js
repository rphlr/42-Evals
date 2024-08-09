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
    const { title, description, yes_no } = body;
    const mandatorySectionData = await prisma.mandatorySection.update({
        where: {
            id
        },
        data: {
            title: title,
            description: description,
            yes_no: yes_no
        }
    });

    return NextResponse.json({
        success: true,
        data: mandatorySectionData,
        message: 'Mandatory section updated successfully'
    })
}






// POST /api/mandatorySection/[id] and connect to sheet


export const POST = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();
    const { title, description, yes_no } = body;
    const mandatorySectionData = await prisma.mandatorySection.create({
        data: {
            title: title,
            description: description,
            yes_no: yes_no,
            sheet: {
                connect: {
                    id: id
                }
            }
        }
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
        const mandatorySectionData = await prisma.mandatorySection.delete({
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
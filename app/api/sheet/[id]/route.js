import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'


// GET /api/sheet/[id]

export const GET = async (req, { params }) => {
    const { id } = params;
    const sheetData = await prisma.sheet.findUnique({
        where: {
            id
        },
    });
    if (!sheetData) {
        return NextResponse.error('Sheet not found', 404)
    };
    return NextResponse.json({
        success: true,
        data: sheetData,
        message: 'Sheet found successfully'
    })
}

// PUT /api/sheet/[id]

export const PUT = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();
    const {
        project_title,
        number_of_student,
        introduction,
        guidelines,
        attachments,
        optional_bonus_sections
    } = body;

    const sheetData = await prisma.sheet.update({
        where: {
            id
        },
        data: {
            project_title,
            number_of_student,
            introduction,
            guidelines,
            attachments,
            optional_bonus_sections
        }
    });
    return NextResponse.json({
        success: true,
        data: sheetData,
        message: 'Sheet updated successfully'
    })
}

// DELETE /api/sheet/[id]

export const DELETE = async (req, { params }) => {

    try {
        const { id } = params;
        const sheetData = await prisma.sheet.delete({
            where: {
                id
            }
        });
        return NextResponse.json({
            success: true,
            data: sheetData,
            message: 'Sheet deleted successfully'
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
            error: error
        })
    }


}









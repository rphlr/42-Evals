import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'



// GET /api/sheet
export const GET = async (req) => {
    const sheetData = await prisma.sheet.findMany();
    return NextResponse.json({
        success: true,
        data: sheetData,
        message: 'Sheets found successfully'
    })
}

// POST /api/sheet

export const POST = async (req) => {


    try {
        const body = await req.json();
        const {
            project_title,
            number_of_student,
            introduction,
            guidelines,
            attachments,
            optional_bonus_sections
        } = body;

        const sheetData = await prisma.sheet.create({
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
            message: 'Sheet created successfully'
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        })

    }
}


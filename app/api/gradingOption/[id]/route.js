import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'


// GET /api/gradingOption/[id] and get grading option by sheet id

export const GET = async (req, { params }) => {
    const { id } = params;
    const gradingOptionData = await prisma.gradingOption.findMany({
        where: {
            sheetId: id
        }
    });

    return NextResponse.json({
        success: true,
        data: gradingOptionData,
        message: 'Grading option retrieved successfully'
    })
}

// PUT /api/gradingOption/[id] and update grading option by sheet id

export const PUT = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();
    const {
        ok,
        outstanding,
        empty_work,
        incomplete_work,
        invalid_compilation,
        norme,
        cheat,
        crash,
        concerning_situations,
        leaks,
        forbidden_functions,
        cannot_support
    } = body;
    const gradingOptionData = await prisma.gradingOption.update({
        where: {
            id
        },
        data: {
            ok: ok,
            outstanding: outstanding,
            empty_work: empty_work,
            incomplete_work: incomplete_work,
            invalid_compilation: invalid_compilation,
            norme: norme,
            cheat: cheat,
            crash: crash,
            concerning_situations: concerning_situations,
            leaks: leaks,
            forbidden_functions: forbidden_functions,
            cannot_support: cannot_support

        }
    });

    return NextResponse.json({
        success: true,
        data: gradingOptionData,
        message: 'Grading option updated successfully'
    })
}



// POST /api/gradingOption/[id] and connect to sheet


export const POST = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();
    const {
        ok,
        outstanding,
        empty_work,
        incomplete_work,
        invalid_compilation,
        norme,
        cheat,
        crash,
        concerning_situations,
        leaks,
        forbidden_functions,
        cannot_support
    } = body;
    const gradingOptionData = await prisma.gradingOption.create({
        data: {
            ok,
            outstanding,
            empty_work,
            incomplete_work,
            invalid_compilation,
            norme,
            cheat,
            crash,
            concerning_situations,
            leaks,
            forbidden_functions,
            cannot_support,
            sheet: {
                connect: {
                    id: id
                }
            }
        }
    });

    return NextResponse.json({
        success: true,
        data: gradingOptionData,
        message: 'Grading option created successfully'
    })

}






// DELETE /api/gradingOption/[id] and delete grading option by sheet id

export const DELETE = async (req, { params }) => {
    const { id } = params;
    const gradingOptionData = await prisma.gradingOption.delete({
        where: {
            sheetId: id
        }
    });

    return NextResponse.json({
        success: true,
        data: gradingOptionData,
        message: 'Grading option deleted successfully'
    })
}
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const campus = searchParams.get('campus') || '';

    const skip = (page - 1) * limit;

    const where = campus ? { campus } : {};

    const users = await prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: { login: 'asc' },
      include: {
        cursus_users: true,
      },
    });

    const totalUsers = await prisma.user.count({ where });
    const totalPages = Math.ceil(totalUsers / limit);

    const campuses = await prisma.user.groupBy({
      by: ['campus'],
      _count: {
        campus: true,
      },
    });

    // Traitement des données pour gérer les valeurs nulles
    const processedUsers = users.map(user => ({
      ...user,
      wallet: user.wallet ?? 0,
      correction_point: user.correction_point ?? 0,
      pool_year: user.pool_year ?? null,
      pool_month: user.pool_month ?? null,
    }));

    return NextResponse.json({
      users: processedUsers,
      totalPages,
      currentPage: page,
      totalUsers,
      campuses: campuses.map(c => ({ name: c.campus || 'Unknown', count: c._count.campus })),
    });
  } catch (error) {
    console.error('Detailed error in getUsers API:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
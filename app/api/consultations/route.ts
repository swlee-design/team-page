import { getDb } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, department, type, content } = await req.json();

    if (!name || !email || !type || !content) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    const sql = getDb();
    const result = await sql`
      INSERT INTO consultations (name, email, department, type, content)
      VALUES (${name}, ${email}, ${department ?? ''}, ${type}, ${content})
      RETURNING id, created_at
    `;

    return NextResponse.json({ success: true, id: result[0].id }, { status: 201 });
  } catch (err) {
    console.error('[POST /api/consultations]', err);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const sql = getDb();
    const result = await sql`
      SELECT id, name, email, department, type, content, created_at
      FROM consultations
      ORDER BY created_at DESC
    `;
    return NextResponse.json(result);
  } catch (err) {
    console.error('[GET /api/consultations]', err);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS consultations (
        id         SERIAL PRIMARY KEY,
        name       VARCHAR(100)  NOT NULL,
        email      VARCHAR(200)  NOT NULL,
        department VARCHAR(100)  NOT NULL DEFAULT '',
        type       VARCHAR(50)   NOT NULL,
        content    TEXT          NOT NULL,
        created_at TIMESTAMPTZ   NOT NULL DEFAULT NOW()
      )
    `;
    return NextResponse.json({ success: true, message: 'consultations 테이블이 준비되었습니다.' });
  } catch (err) {
    console.error('[GET /api/setup]', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

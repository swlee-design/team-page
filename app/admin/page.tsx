import { sql } from '@vercel/postgres';

const TYPE_COLORS: Record<string, string> = {
  '교육':        'bg-blue-500/20 text-blue-300 border-blue-500/30',
  '조직문화':    'bg-green-500/20 text-green-300 border-green-500/30',
  '평가 & 보상': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  '채용':        'bg-purple-500/20 text-purple-300 border-purple-500/30',
};

async function getConsultations() {
  const result = await sql`
    SELECT id, name, email, department, type, content, created_at
    FROM consultations
    ORDER BY created_at DESC
  `;
  return result.rows;
}

export default async function AdminPage() {
  let consultations: Awaited<ReturnType<typeof getConsultations>> = [];
  let error = '';

  try {
    consultations = await getConsultations();
  } catch (e) {
    error = 'DB 연결에 실패했습니다. 환경변수 및 테이블 설정을 확인하세요.';
    console.error(e);
  }

  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#EFEFF1]">
      <header className="bg-[#18181B] border-b border-[#2D2D35] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="16" height="20" viewBox="0 0 20 24" fill="#9146FF">
              <path d="M0 3.571L1.429 0H20v16.429l-5 5H12.143L9.286 24H6.429v-2.571H0V3.571zm2.857 17.143h4.286v2.572h.714l2.857-2.572H14.5L18.57 16.43V1.43H3.286L2.143 4.286v16.428H2.857zM8.571 5.714h1.429v5.714H8.571V5.714zm4.286 0h1.429v5.714h-1.429V5.714z" />
            </svg>
            <span className="font-bold text-[#EFEFF1]">관리자 — 상담 신청 목록</span>
          </div>
          <a href="/" className="text-sm text-[#ADADB8] hover:text-[#EFEFF1] transition-colors">
            ← 메인으로
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {error ? (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-5 py-4 text-red-300 text-sm">
            {error}
          </div>
        ) : consultations.length === 0 ? (
          <div className="text-center py-20 text-[#848494]">
            <p className="text-lg">아직 접수된 상담이 없습니다.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[#ADADB8]">
                총 <span className="text-[#9146FF] font-bold">{consultations.length}건</span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {consultations.map((c) => (
                <div
                  key={c.id}
                  className="bg-[#18181B] border border-[#2D2D35] rounded-lg p-5 hover:border-[#9146FF]/50 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-[#EFEFF1]">{c.name}</span>
                      {c.department && (
                        <span className="text-xs text-[#848494] bg-[#1F1F23] border border-[#2D2D35] rounded px-2 py-0.5">
                          {c.department}
                        </span>
                      )}
                      <span
                        className={`text-xs border rounded px-2 py-0.5 ${
                          TYPE_COLORS[c.type] ?? 'bg-[#1F1F23] text-[#ADADB8] border-[#2D2D35]'
                        }`}
                      >
                        {c.type}
                      </span>
                    </div>
                    <span className="text-xs text-[#848494]">
                      {new Date(c.created_at).toLocaleString('ko-KR')}
                    </span>
                  </div>

                  <a
                    href={`mailto:${c.email}`}
                    className="text-sm text-[#9146FF] hover:underline mb-3 block"
                  >
                    {c.email}
                  </a>

                  <p className="text-sm text-[#ADADB8] leading-relaxed whitespace-pre-wrap">
                    {c.content}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

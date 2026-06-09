'use client';

import { useState } from 'react';

const CONSULTATION_TYPES = ['교육', '조직문화', '평가 & 보상', '채용'] as const;

interface FormState {
  name: string;
  email: string;
  department: string;
  type: string;
  content: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  department: '',
  type: '',
  content: '',
};

export default function ConsultationModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? '제출에 실패했습니다.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : '오류가 발생했습니다.');
    }
  }

  function handleClose() {
    setOpen(false);
    setStatus('idle');
    setForm(initialForm);
    setErrorMsg('');
  }

  return (
    <>
      {/* 트리거 버튼 */}
      <button
        onClick={() => setOpen(true)}
        className="shrink-0 inline-flex items-center gap-2 bg-[#9146FF] hover:bg-[#7D2FE0] text-white font-bold px-8 py-4 rounded transition-colors"
      >
        문의하기
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      {/* 모달 오버레이 */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.75)' }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <div className="w-full max-w-lg bg-[#18181B] border border-[#2D2D35] rounded-xl overflow-hidden shadow-2xl">

            {/* 모달 헤더 */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#2D2D35]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9146FF]" />
                <h2 className="text-base font-bold text-[#EFEFF1]">People & Culture팀 상담 신청</h2>
              </div>
              <button
                onClick={handleClose}
                className="text-[#848494] hover:text-[#EFEFF1] transition-colors"
                aria-label="닫기"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 성공 화면 */}
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 px-6 py-14 text-center">
                <div className="w-14 h-14 rounded-full bg-[#9146FF]/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9146FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-[#EFEFF1]">상담 신청이 완료되었습니다</p>
                <p className="text-sm text-[#ADADB8]">담당자가 확인 후 이메일로 연락드리겠습니다.</p>
                <button
                  onClick={handleClose}
                  className="mt-2 bg-[#9146FF] hover:bg-[#7D2FE0] text-white font-bold px-6 py-2.5 rounded transition-colors"
                >
                  닫기
                </button>
              </div>
            ) : (
              /* 폼 */
              <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#ADADB8]">이름 <span className="text-[#9146FF]">*</span></label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="홍길동"
                      className="bg-[#0E0E10] border border-[#2D2D35] rounded px-3 py-2.5 text-sm text-[#EFEFF1] placeholder-[#848494] focus:outline-none focus:border-[#9146FF] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#ADADB8]">이메일 <span className="text-[#9146FF]">*</span></label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="hong@wyattcorp.com"
                      className="bg-[#0E0E10] border border-[#2D2D35] rounded px-3 py-2.5 text-sm text-[#EFEFF1] placeholder-[#848494] focus:outline-none focus:border-[#9146FF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#ADADB8]">부서/소속</label>
                    <input
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      placeholder="소속 부서"
                      className="bg-[#0E0E10] border border-[#2D2D35] rounded px-3 py-2.5 text-sm text-[#EFEFF1] placeholder-[#848494] focus:outline-none focus:border-[#9146FF] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#ADADB8]">상담 유형 <span className="text-[#9146FF]">*</span></label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                      className="bg-[#0E0E10] border border-[#2D2D35] rounded px-3 py-2.5 text-sm text-[#EFEFF1] focus:outline-none focus:border-[#9146FF] transition-colors appearance-none"
                    >
                      <option value="" disabled>유형 선택</option>
                      {CONSULTATION_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#ADADB8]">상담 내용 <span className="text-[#9146FF]">*</span></label>
                  <textarea
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="상담하고 싶은 내용을 자유롭게 작성해 주세요."
                    className="bg-[#0E0E10] border border-[#2D2D35] rounded px-3 py-2.5 text-sm text-[#EFEFF1] placeholder-[#848494] focus:outline-none focus:border-[#9146FF] transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded px-3 py-2">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-1 w-full bg-[#9146FF] hover:bg-[#7D2FE0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded transition-colors"
                >
                  {status === 'loading' ? '제출 중...' : '상담 신청하기'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

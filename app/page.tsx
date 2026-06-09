export default function Home() {
  const services = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-8 10 8-10 8z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      title: "교육",
      description:
        "구성원의 성장을 위한 체계적인 교육 프로그램을 기획·운영합니다. 직무 역량 강화부터 리더십 개발까지 전 직원의 학습 경험을 설계합니다.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "조직문화",
      description:
        "건강하고 활기찬 조직문화를 만들어 갑니다. 구성원이 몰입하고 성장할 수 있는 환경을 조성하며, 다양한 문화 프로그램으로 팀워크를 강화합니다.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 10h2l2 3 2-6 2 3h2" />
        </svg>
      ),
      title: "평가 & 보상",
      description:
        "공정하고 투명한 성과 평가 체계를 운영합니다. 구성원의 기여를 합리적으로 인정하고 보상하는 제도를 설계·개선합니다.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
      title: "채용",
      description:
        "회사의 비전과 문화에 맞는 인재를 발굴하고 영입합니다. 후보자 경험을 중시하는 채용 프로세스로 최적의 인재와 팀을 연결합니다.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0E0E10]">

      {/* Header */}
      <header className="bg-[#18181B] border-b border-[#2D2D35] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Twitch-style logo mark */}
            <svg width="20" height="24" viewBox="0 0 20 24" fill="#9146FF" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3.571L1.429 0H20v16.429l-5 5H12.143L9.286 24H6.429v-2.571H0V3.571zm2.857 17.143h4.286v2.572h.714l2.857-2.572H14.5L18.57 16.43V1.43H3.286L2.143 4.286v16.428H2.857zM8.571 5.714h1.429v5.714H8.571V5.714zm4.286 0h1.429v5.714h-1.429V5.714z" />
            </svg>
            <span className="text-sm font-bold text-[#EFEFF1] tracking-wide">
              WYATT CORP
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-[#ADADB8]">
            <a href="#services" className="hover:text-[#EFEFF1] transition-colors">
              업무 안내
            </a>
            <a
              href="mailto:sw.lee@wyattcorp.com"
              className="bg-[#9146FF] hover:bg-[#7D2FE0] text-white px-4 py-1.5 rounded transition-colors"
            >
              문의하기
            </a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0E0E10] py-28 px-6">
          {/* purple glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(145,70,255,0.18) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1F1F23] border border-[#2D2D35] rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#9146FF] animate-pulse" />
              <span className="text-xs font-semibold text-[#BF94FF] tracking-widest uppercase">
                People & Culture Team
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#EFEFF1] leading-tight mb-6 max-w-3xl">
              사람이 먼저인<br />
              <span className="text-[#9146FF]">조직</span>을 만듭니다
            </h1>
            <p className="text-lg text-[#ADADB8] leading-relaxed max-w-xl">
              채용부터 교육, 조직문화, 평가보상까지 — 구성원이 성장하고
              몰입할 수 있는 환경을 설계합니다.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6 w-full">
          <hr className="border-[#2D2D35]" />
        </div>

        {/* Services */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-bold text-[#9146FF] tracking-widest uppercase mb-10">
              What We Do
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group bg-[#18181B] border border-[#2D2D35] rounded-lg p-6 hover:border-[#9146FF] hover:bg-[#1F1F23] transition-all"
                >
                  <div className="text-[#9146FF] mb-5 group-hover:scale-110 transition-transform origin-left">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#EFEFF1] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#ADADB8] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section id="contact" className="mt-auto px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div
              className="rounded-xl px-10 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
              style={{
                background:
                  "linear-gradient(135deg, #3D1F7A 0%, #1F1F23 60%)",
                border: "1px solid #9146FF40",
              }}
            >
              <div>
                <h2 className="text-2xl font-extrabold text-[#EFEFF1] mb-2">
                  People & Culture팀에 문의하세요
                </h2>
                <p className="text-[#BF94FF] text-sm">
                  채용, 교육, 조직문화, 평가보상 관련 문의를 편하게 남겨주세요.
                </p>
              </div>
              <a
                href="mailto:sw.lee@wyattcorp.com"
                className="shrink-0 inline-flex items-center gap-2 bg-[#9146FF] hover:bg-[#7D2FE0] text-white font-bold px-8 py-4 rounded transition-colors"
              >
                문의하기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#18181B] border-t border-[#2D2D35] py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#848494]">
          <div className="flex items-center gap-2">
            <svg width="14" height="16" viewBox="0 0 20 24" fill="#9146FF">
              <path d="M0 3.571L1.429 0H20v16.429l-5 5H12.143L9.286 24H6.429v-2.571H0V3.571zm2.857 17.143h4.286v2.572h.714l2.857-2.572H14.5L18.57 16.43V1.43H3.286L2.143 4.286v16.428H2.857zM8.571 5.714h1.429v5.714H8.571V5.714zm4.286 0h1.429v5.714h-1.429V5.714z" />
            </svg>
            <span className="text-[#ADADB8] font-medium">People & Culture Team</span>
          </div>
          <span>© 2026 Wyatt Corp. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

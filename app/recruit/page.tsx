'use client';

function StepLabel({ number, label }: { number: number; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-7 h-7 rounded-full bg-primary text-white text-[13px] font-bold flex items-center justify-center shrink-0">
        {number}
      </span>
      <h2 className="text-[16px] font-bold text-text-900">{label}</h2>
    </div>
  );
}

export default function RecruitPage() {
  return (
    <div className="bg-surface-subtle min-h-screen py-12">
      <div className="max-w-[640px] mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-[24px] font-bold text-text-900 mb-1">모집글 작성</h1>
          <p className="text-[14px] text-text-600">팀원을 모집할 공고를 작성해보세요</p>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Step 1: 공모전 선택 */}
          <section className="bg-surface rounded-2xl border border-border p-6">
            <StepLabel number={1} label="공모전 선택" />
            <div className="relative">
              <input
                type="search"
                placeholder="참가할 공모전을 검색하세요"
                className="w-full px-4 py-3 rounded-xl border border-border text-[14px] text-text-900 placeholder-text-400 outline-none focus:border-primary transition-colors bg-surface-subtle"
              />
              <svg className="absolute right-4 top-3.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="#999999" strokeWidth="1.5" />
                <path d="M12.5 12.5L16 16" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="mt-3 p-4 rounded-xl bg-primary-light border border-primary/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <polygon points="10,2 18,17 2,17" fill="#FF4D00" opacity="0.8" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-text-900 truncate">2024 공공데이터 활용 창업 경진대회</p>
                <p className="text-[11px] text-text-400">D-2 · 행정안전부</p>
              </div>
              <button type="button" className="ml-auto text-text-400 hover:text-text-900 shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </section>

          {/* Step 2: 팀 소개 */}
          <section className="bg-surface rounded-2xl border border-border p-6">
            <StepLabel number={2} label="팀 소개" />
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-text-900 mb-1.5">팀 이름 *</label>
                <input
                  type="text"
                  placeholder="팀 이름을 입력하세요"
                  className="w-full px-4 py-3 rounded-xl border border-border text-[14px] placeholder-text-400 outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-text-900 mb-1.5">팀 소개 *</label>
                <textarea
                  rows={4}
                  placeholder="팀의 목표, 분위기, 방향성을 소개해주세요"
                  className="w-full px-4 py-3 rounded-xl border border-border text-[14px] placeholder-text-400 outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-text-900 mb-1.5">기술 스택 / 태그</label>
                <input
                  type="text"
                  placeholder="예: React, Python, 기획, UX (쉼표로 구분)"
                  className="w-full px-4 py-3 rounded-xl border border-border text-[14px] placeholder-text-400 outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </section>

          {/* Step 3: 모집 역할 */}
          <section className="bg-surface rounded-2xl border border-border p-6">
            <StepLabel number={3} label="모집 역할" />
            <div className="space-y-3">
              {[
                { role: "기획자", count: 1 },
                { role: "디자이너", count: 1 },
              ].map(({ role, count }, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-muted">
                  <select className="flex-1 text-[14px] text-text-900 bg-transparent outline-none">
                    <option>{role}</option>
                    <option>개발자</option>
                    <option>마케터</option>
                    <option>PM</option>
                    <option>데이터 분석가</option>
                  </select>
                  <div className="flex items-center gap-2">
                    <button type="button" className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-600 hover:bg-surface text-[16px] leading-none">−</button>
                    <span className="text-[14px] font-medium text-text-900 w-4 text-center">{count}</span>
                    <button type="button" className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-600 hover:bg-surface text-[16px] leading-none">+</button>
                  </div>
                  <button type="button" className="text-text-400 hover:text-text-900 ml-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="w-full py-3 rounded-xl border border-dashed border-border text-[13px] text-text-400 hover:border-primary hover:text-primary transition-colors"
              >
                + 역할 추가
              </button>
            </div>
          </section>

          {/* Step 4: 모집 조건 */}
          <section className="bg-surface rounded-2xl border border-border p-6">
            <StepLabel number={4} label="모집 조건" />
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-text-900 mb-1.5">모집 마감일 *</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-border text-[14px] text-text-900 outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-text-900 mb-1.5">지원 방식</label>
                <div className="flex gap-3">
                  {["오픈 채팅", "이메일", "세모챌 DM"].map((method) => (
                    <button
                      key={method}
                      type="button"
                      className={`flex-1 py-2.5 rounded-xl border text-[13px] font-medium transition-colors ${
                        method === "오픈 채팅"
                          ? "border-primary bg-primary-light text-primary"
                          : "border-border text-text-600 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-text-900 mb-1.5">연락처</label>
                <input
                  type="text"
                  placeholder="오픈채팅 링크 또는 이메일을 입력하세요"
                  className="w-full px-4 py-3 rounded-xl border border-border text-[14px] placeholder-text-400 outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-primary text-white text-[16px] font-bold hover:bg-orange-600 transition-colors"
          >
            모집글 게시하기
          </button>
        </form>
      </div>
    </div>
  );
}

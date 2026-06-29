import AwardCard from "@/components/AwardCard";

const STACK_TAGS = ["React", "TypeScript", "Next.js", "Python", "Figma", "UI/UX"];

const HISTORY = [
  {
    contestName: "2024 공공데이터 활용 창업 경진대회",
    teamName: "데이터 드리머스",
    role: "개발자",
    result: "최우수상",
    year: 2024,
  },
  {
    contestName: "2023 AI 챌린지 해커톤",
    teamName: "AI 프론티어",
    role: "풀스택 개발자",
    result: "우수상",
    year: 2023,
  },
  {
    contestName: "제12회 K-Water 공모전",
    teamName: "그린 팀",
    role: "프론트엔드",
    result: "참가",
    year: 2023,
  },
];

const AWARDS = [
  { title: "AI 기반 공공데이터 시각화 대시보드", prize: "최우수상", year: 2024, contestName: "공공데이터 활용 창업 경진대회", thumbnailColor: "#FFF0EB" },
  { title: "실시간 이상 감지 AI 시스템", prize: "우수상", year: 2023, contestName: "AI 챌린지 해커톤", thumbnailColor: "#DFF7FF" },
];

export default function ProfilePage() {
  return (
    <div className="bg-surface-subtle min-h-screen py-8">
      <div className="max-w-[1100px] mx-auto px-6 flex gap-7">
        {/* Left: Profile card */}
        <aside className="w-[300px] shrink-0 space-y-4">
          <div className="bg-surface rounded-2xl border border-border p-6">
            {/* Avatar */}
            <div className="flex flex-col items-center text-center mb-5">
              <div className="w-20 h-20 rounded-full bg-surface-muted border-2 border-border mb-3 flex items-center justify-center overflow-hidden">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="20" r="8" fill="#CCCCCC" />
                  <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#CCCCCC" />
                </svg>
              </div>
              <h2 className="text-[18px] font-bold text-text-900">홍길동</h2>
              <p className="text-[13px] text-text-600 mt-0.5">한국대학교 컴퓨터공학과 3학년</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-5 text-center">
              {[
                { label: "참가", value: 3 },
                { label: "수상", value: 2 },
                { label: "스크랩", value: 12 },
              ].map(({ label, value }) => (
                <div key={label} className="bg-surface-subtle rounded-xl p-3">
                  <div className="text-[20px] font-bold text-text-900">{value}</div>
                  <div className="text-[11px] text-text-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mb-5">
              <h3 className="text-[12px] font-bold text-text-400 mb-2 uppercase tracking-wide">스택 · 역할</h3>
              <div className="flex flex-wrap gap-1.5">
                {STACK_TAGS.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-surface-muted text-[12px] text-text-600 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="text-[12px] font-bold text-text-400 mb-2 uppercase tracking-wide">소개</h3>
              <p className="text-[13px] text-text-600 leading-relaxed">
                UI/UX에 관심 많은 프론트엔드 개발자입니다. 사용자 경험을 개선하는 프로젝트를 좋아합니다.
              </p>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl border border-border text-[13px] font-medium text-text-600 bg-surface hover:bg-surface-muted transition-colors">
            프로필 편집
          </button>
        </aside>

        {/* Right: Content */}
        <div className="flex-1 min-w-0 space-y-6">
          {/* Tabs */}
          <div className="flex gap-0 border-b border-border">
            {["수상 이력", "수상작", "스크랩"].map((tab, i) => (
              <button
                key={tab}
                className={`px-5 py-3 text-[14px] font-medium border-b-2 -mb-px transition-colors ${
                  i === 0
                    ? "border-primary text-primary"
                    : "border-transparent text-text-400 hover:text-text-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Activity */}
          <section>
            <h2 className="text-[16px] font-bold text-text-900 mb-4">공모전 참가 이력</h2>
            <div className="space-y-3">
              {HISTORY.map((h, i) => (
                <div key={i} className="bg-surface rounded-2xl border border-border p-5 flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center shrink-0">
                    <span className="text-[12px] font-bold text-text-400">{h.year}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-semibold text-text-900 truncate">{h.contestName}</p>
                    <p className="text-[12px] text-text-400 mt-0.5">
                      {h.teamName} · {h.role}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1.5 rounded-full text-[12px] font-semibold shrink-0 ${
                      h.result === "참가"
                        ? "bg-surface-muted text-text-600"
                        : "bg-primary-light text-primary"
                    }`}
                  >
                    {h.result}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section>
            <h2 className="text-[16px] font-bold text-text-900 mb-4">수상작</h2>
            <div className="grid grid-cols-2 gap-4">
              {AWARDS.map((a) => (
                <AwardCard key={a.title} {...a} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

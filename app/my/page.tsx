import TeamCard from "@/components/TeamCard";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "내 정보", href: "/my", active: true },
  { label: "참가 이력", href: "/my/history" },
  { label: "스크랩", href: "/my/scraps" },
  { label: "모집글 관리", href: "/my/recruits" },
  { label: "알림 설정", href: "/my/settings" },
];

const MY_TEAMS = [
  {
    teamName: "데이터 드리머스",
    contestName: "2024 공공데이터 활용 창업 경진대회",
    roles: [
      { name: "개발자", filled: true },
      { name: "기획자", filled: true },
      { name: "디자이너", filled: false },
    ],
    memberCount: 2,
    maxMembers: 3,
    deadline: "12/15",
    tags: ["React", "Python"],
  },
];

export default function MyPage() {
  return (
    <div className="bg-surface-subtle min-h-screen py-8">
      <div className="max-w-[1100px] mx-auto px-6 flex gap-7">
        {/* Left sidebar */}
        <aside className="w-[240px] shrink-0 space-y-4">
          {/* Mini profile */}
          <div className="bg-surface rounded-2xl border border-border p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-muted border border-border overflow-hidden flex items-center justify-center shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="13" r="5" fill="#CCCCCC" />
                <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#CCCCCC" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[14px] font-bold text-text-900 truncate">홍길동</p>
              <p className="text-[12px] text-text-400 truncate">한국대학교 컴퓨터공학과</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="bg-surface rounded-2xl border border-border overflow-hidden">
            {MENU_ITEMS.map(({ label, href, active }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center justify-between px-5 py-3.5 text-[14px] border-b border-divider last:border-0 transition-colors ${
                  active
                    ? "text-primary font-semibold bg-primary-light"
                    : "text-text-600 hover:text-text-900 hover:bg-surface-muted"
                }`}
              >
                {label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </nav>

          <button className="w-full py-3 rounded-xl border border-border text-[13px] font-medium text-text-400 bg-surface hover:text-text-900 hover:bg-surface-muted transition-colors">
            로그아웃
          </button>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "공모전 참가", value: 3, unit: "회" },
              { label: "팀 수상", value: 2, unit: "회" },
              { label: "스크랩", value: 12, unit: "개" },
            ].map(({ label, value, unit }) => (
              <div key={label} className="bg-surface rounded-2xl border border-border p-5">
                <div className="text-[28px] font-bold text-text-900">
                  {value}
                  <span className="text-[16px] font-medium text-text-400 ml-0.5">{unit}</span>
                </div>
                <div className="text-[13px] text-text-400 mt-1">{label}</div>
              </div>
            ))}
          </div>

          {/* My teams */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[17px] font-bold text-text-900">내 팀</h2>
              <Link href="/recruit" className="text-[13px] text-primary hover:underline font-medium">
                + 모집글 작성
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {MY_TEAMS.map((t) => (
                <TeamCard key={t.teamName} {...t} />
              ))}
              <div className="rounded-2xl border-2 border-dashed border-border flex items-center justify-center p-8 cursor-pointer hover:border-primary hover:bg-primary-light/30 transition-colors">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center mx-auto mb-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="#999999" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-[13px] text-text-400">새 팀 만들기</p>
                </div>
              </div>
            </div>
          </section>

          {/* Scrapped contests */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[17px] font-bold text-text-900">스크랩한 공모전</h2>
              <Link href="/my/scraps" className="text-[13px] text-text-600 hover:text-primary transition-colors">
                더보기 →
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { title: "2024 공공데이터 활용 창업 경진대회", dDay: 2, category: "창업" },
                { title: "2024 AI 챌린지 해커톤", dDay: 7, category: "IT·AI" },
                { title: "스마트시티 아이디어 공모전", dDay: 14, category: "아이디어" },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-surface rounded-2xl border border-border p-4 flex items-center gap-4 hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <polygon points="9,2 16,14 2,14" fill="#FF4D00" opacity="0.7" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-semibold text-text-900 truncate">{c.title}</p>
                    <p className="text-[12px] text-text-400 mt-0.5">{c.category}</p>
                  </div>
                  <span className="text-[12px] font-bold text-primary shrink-0">D-{c.dDay}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

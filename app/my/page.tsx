import Link from "next/link";

const MENU_ITEMS = [
  {
    label: "내 팀",
    href: "/my",
    active: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 15c0-2.761 2.239-5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 10c2.761 0 5 2.239 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "스크랩 공모전",
    href: "/my/scraps",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M5 3h8a1 1 0 0 1 1 1v11l-5-2.5L4 15V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "스크랩 수상작",
    href: "/my/awards",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2l1.8 3.6L15 6.4l-3 2.9.7 4.1L9 11.4l-3.7 2 .7-4.1-3-2.9 4.2-.8L9 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "관심분야 설정",
    href: "/my/interests",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 14s-6-3.5-6-7a4 4 0 0 1 6-3.46A4 4 0 0 1 15 7c0 3.5-6 7-6 7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "알림 설정",
    href: "/my/settings",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a5 5 0 0 0-5 5v3l-1.5 2.5h13L14 10V7a5 5 0 0 0-5-5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M7.5 14.5a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

const MY_PARTICIPATING_TEAMS = [
  {
    contestName: "OO공모전",
    description: "데이터 시각화로 도시 문제 해결",
    roles: [
      { name: "디자이너", mine: true },
      { name: "백엔드", mine: true },
      { name: "기획", mine: false },
      { name: "프론트엔드", mine: false },
    ],
    dDay: 14,
    deadline: "7월 10일",
  },
  {
    contestName: "AI 챌린지 해커톤",
    description: "AI 기반 의료 진단 보조 시스템",
    roles: [
      { name: "디자이너", mine: true },
      { name: "백엔드", mine: false },
      { name: "기획", mine: false },
      { name: "프론트엔드", mine: false },
    ],
    dDay: 8,
    deadline: "7월 4일",
  },
];

const MY_RECRUITING = [
  {
    contestName: "ESG 아이디어 챌린지",
    description: "탄소중립 교육 플랫폼 만들 팀원 구합니다",
    status: "모집중",
    applicants: 2,
    roles: [
      { name: "기획", filled: true },
      { name: "디자이너", recruiting: true },
      { name: "백엔드", recruiting: true },
    ],
  },
];

export default function MyPage() {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-surface">
      <div className="mx-auto flex w-full max-w-[1200px] items-start">
        <aside className="sticky top-14 flex min-h-[470px] w-60 shrink-0 flex-col gap-1 py-6">
          <div className="mb-1 flex h-[72px] items-center gap-3 px-4">
            <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-muted">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="9" r="4" fill="#CCCCCC" />
                <path d="M4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" fill="#CCCCCC" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold leading-[17px] text-text-900">황지영</p>
              <p className="mt-0.5 text-[12px] leading-[15px] text-text-400">프로필 편집</p>
            </div>
          </div>

          <div className="mx-0 mb-1 h-px bg-divider" />

          {MENU_ITEMS.map(({ label, href, active, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex h-[42px] items-center gap-2.5 px-4 text-[14px] leading-[17px] transition-colors ${
                active
                  ? "bg-surface-muted font-medium text-text-900"
                  : "text-text-600 hover:bg-surface-muted hover:text-text-900"
              }`}
            >
              <span className={active ? "text-text-900" : "text-text-400"}>{icon}</span>
              {label}
            </Link>
          ))}
        </aside>

        <div className="min-w-0 flex-1 px-8 py-6">
          <h1 className="text-[20px] font-bold leading-6 text-text-900">내 팀</h1>

          <section className="mt-6">
            <p className="mb-5 text-[14px] font-semibold leading-[17px] text-text-600">참여중</p>
            <div className="flex gap-5">
              {MY_PARTICIPATING_TEAMS.map((t, i) => (
                <Link
                  key={i}
                  href="/contest"
                  className="flex h-[146px] w-[380px] flex-none flex-col gap-[22px] rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[15px] font-semibold leading-[18px] text-text-900">{t.contestName}</p>
                    <p className="text-[13px] leading-4 text-text-600">{t.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {t.roles.map((r) => (
                      <span
                        key={r.name}
                        className={`rounded px-2 py-1 text-[11px] font-medium leading-[13px] ${
                          r.mine
                            ? "bg-primary-warm text-primary"
                            : "bg-surface-muted border border-border text-text-400"
                        }`}
                      >
                        {r.name}
                      </span>
                    ))}
                  </div>
                  <p className="text-[12px] text-text-400">D-{t.dDay} · 마감 {t.deadline}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <p className="mb-5 text-[14px] font-semibold leading-[17px] text-text-600">모집중</p>
            <div>
              {MY_RECRUITING.map((r, i) => (
                <div key={i} className="h-[122px] rounded-xl border border-border p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-[15px] font-semibold leading-[18px] text-text-900">{r.contestName}</p>
                    <span className="rounded bg-primary-light px-2.5 py-1 text-[11px] font-semibold leading-[13px] text-primary">
                      {r.status} · 지원 {r.applicants}건
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] leading-4 text-text-600">{r.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {r.roles.map((role) => (
                      <span
                        key={role.name}
                        className={`rounded px-2 py-1 text-[11px] font-medium leading-[13px] ${
                          role.filled
                            ? "bg-success-light text-success-dark"
                            : role.recruiting
                            ? "bg-primary-warm text-primary"
                            : "bg-surface-muted text-text-400"
                        }`}
                      >
                        {role.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

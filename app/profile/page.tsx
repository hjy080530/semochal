import Link from "next/link";

const STACK_TAGS = ["React", "TypeScript", "Next.js", "Node.js", "Figma", "Python"];

const HISTORY = [
  {
    contestName: "2025 공공데이터 활용 공모전",
    result: "대상",
    role: "프론트엔드 · 3인 팀",
  },
  {
    contestName: "2024 스타트업 해커톤",
    result: "우수상",
    role: "풀스택 · 4인 팀",
  },
  {
    contestName: "2024 ESG 아이디어 챌린지",
    result: "출품",
    role: "기획 · 5인 팀",
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-surface">
      <div className="mx-auto flex w-full max-w-[1200px] gap-8 py-8">
        <aside className="h-[430px] w-80 shrink-0 rounded-xl border border-border bg-surface p-6">
          <div className="flex h-16 items-center gap-4">
            <div className="size-16 rounded-full bg-[#d9d9d9]" />
            <div>
              <h1 className="text-[18px] font-bold leading-[22px] text-text-900">황지영</h1>
              <p className="mt-1 text-[13px] font-normal leading-4 text-text-600">풀스택 개발자 · 서울</p>
            </div>
          </div>

          <div className="mt-5 flex h-[21px] gap-2">
            {["깃허브 인증", "포트폴리오", "출품이력"].map((badge, index) => (
              <span
                key={badge}
                className={`inline-flex h-[21px] items-center rounded px-2 text-[11px] font-medium leading-[13px] ${
                  index === 0
                    ? "bg-surface-muted text-text-600"
                    : index === 1
                    ? "bg-info-light text-info"
                    : "bg-success-light text-success"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-5 h-px bg-divider" />

          <section className="mt-5">
            <h2 className="text-[13px] font-bold leading-4 text-text-900">외부 링크</h2>
            <div className="mt-3 space-y-3 text-[13px] leading-4 text-text-600">
              <p>github.com/juhyun-kim</p>
              <p>portfolio.juhyun.dev</p>
              <p>notion.so/juhyun-resume</p>
            </div>
          </section>

          <div className="mt-5 h-px bg-divider" />

          <button className="mt-5 h-10 w-full rounded-lg bg-primary text-[14px] font-bold leading-[17px] text-white">
            팀에 초대
          </button>
        </aside>

        <main className="w-[848px] shrink-0">
          <section>
            <h2 className="text-[16px] font-bold leading-[19px] text-text-900">기술 스택</h2>
            <div className="mt-3 flex h-7 flex-wrap gap-2">
              {STACK_TAGS.map((tag) => (
                <span key={tag} className="inline-flex h-7 items-center rounded-full bg-surface-muted px-3.5 text-[13px] leading-4 text-text-600">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h2 className="text-[16px] font-bold leading-[19px] text-text-900">출품 / 수상 이력</h2>
            <div className="mt-3 space-y-3">
              {HISTORY.map((item) => (
                <Link
                  key={item.contestName}
                  href="/contest"
                  className="flex h-[92px] items-center rounded-xl border border-border bg-surface px-4 transition-colors hover:border-primary/30"
                >
                  <div className="h-[60px] w-20 shrink-0 rounded-lg bg-surface-muted" />
                  <div className="ml-4 min-w-0">
                    <h3 className="truncate text-[14px] font-semibold leading-[17px] text-text-900">{item.contestName}</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded bg-primary-light px-2 py-0.5 text-[11px] font-medium leading-[13px] text-primary">
                        {item.result}
                      </span>
                      <p className="text-[12px] leading-[15px] text-text-400">{item.role}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

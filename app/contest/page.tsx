import Link from "next/link";
import { CONTESTS } from "@/lib/mockData";

const contest = CONTESTS[0];

export default function ContestPage() {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-surface">
      <div className="mx-auto w-full max-w-[1200px] py-8">
        <header className="flex h-[140px] gap-6">
          <div className="h-[140px] w-[200px] shrink-0 rounded-xl bg-surface-muted" />
          <div className="min-w-0 flex-1">
            <h1 className="text-[22px] font-bold leading-[27px] text-text-900">{contest.title}</h1>
            <p className="mt-2.5 text-[14px] font-normal leading-[17px] text-text-600">
              주최: 한국데이터산업진흥원
            </p>
            <div className="mt-2.5 flex h-[27px] items-center gap-2">
              <span className="rounded bg-primary px-2.5 py-[5px] text-[13px] font-semibold leading-4 text-white">
                D-3
              </span>
              <button className="inline-flex h-[27px] items-center gap-1.5 rounded border border-border px-3 text-[12px] font-normal leading-[15px] text-text-600">
                ♡ 북마크
              </button>
              <button className="inline-flex h-[27px] items-center gap-1.5 rounded border border-border px-3 text-[12px] font-normal leading-[15px] text-text-600">
                ⤴ 공유
              </button>
            </div>
          </div>
        </header>

        <div className="mt-6 flex gap-8">
          <main className="w-[856px] shrink-0">
            <nav className="flex h-[37px] border-b border-border">
              {["정보", "팀모집", "수상작"].map((tab, index) => (
                <button
                  key={tab}
                  className={`h-[37px] px-5 text-[14px] leading-[17px] ${
                    index === 0
                      ? "border-b-2 border-primary font-semibold text-primary"
                      : "font-normal text-text-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>

            <div className="mt-5 space-y-5 text-[14px] leading-[22px] text-text-600">
              <section>
                <h2 className="mb-1.5 text-[15px] font-bold leading-[18px] text-text-900">자격 / 대상</h2>
                <p>대학(원)생 및 일반인 누구나 참여 가능</p>
                <p>팀 구성: 2~5인 (필수)</p>
              </section>

              <section>
                <h2 className="mb-1.5 text-[15px] font-bold leading-[18px] text-text-900">일정</h2>
                <p>접수기간: 2025.06.01 ~ 2025.07.15</p>
                <p>1차 심사: 2025.07.30</p>
                <p>최종 발표: 2025.08.20</p>
              </section>

              <section>
                <h2 className="mb-1.5 text-[15px] font-bold leading-[18px] text-text-900">상금</h2>
                <p>대상 1팀: 1,000만원</p>
                <p>최우수상 2팀: 각 500만원</p>
                <p>우수상 3팀: 각 300만원</p>
              </section>

              <Link
                href="/team"
                className="mt-4 flex h-[45px] items-center justify-center gap-2 rounded-lg border border-primary text-[14px] font-semibold leading-[17px] text-primary transition-colors hover:bg-primary-light"
              >
                ♡ 이 공모전 팀 구하기
              </Link>
            </div>
          </main>

          <aside className="w-80 shrink-0">
            <button className="h-11 w-full rounded-lg bg-primary text-[15px] font-bold leading-[18px] text-white">
              참가 신청하기
            </button>
            <section className="mt-4 rounded-xl border border-border bg-surface p-4">
              <h2 className="text-[13px] font-bold leading-4 text-text-900">대회 요약</h2>
              <dl className="mt-3 space-y-3 text-[12px] leading-[15px]">
                <div className="flex justify-between">
                  <dt className="text-text-400">마감일</dt>
                  <dd className="font-semibold text-text-900">2025.07.15</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-400">총 상금</dt>
                  <dd className="font-semibold text-text-900">3,600만원</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-400">팀 구성</dt>
                  <dd className="font-semibold text-text-900">2~5인</dd>
                </div>
              </dl>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

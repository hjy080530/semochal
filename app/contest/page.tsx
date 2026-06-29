import TeamCard from "@/components/TeamCard";
import AwardCard from "@/components/AwardCard";
import Link from "next/link";

const TEAMS = [
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
  {
    teamName: "퍼블릭 히어로",
    contestName: "2024 공공데이터 활용 창업 경진대회",
    roles: [
      { name: "PM", filled: false },
      { name: "디자이너", filled: false },
    ],
    memberCount: 1,
    maxMembers: 3,
    deadline: "12/10",
    tags: ["기획", "UX"],
  },
];

const AWARDS = [
  { title: "2023 공공데이터 대상 수상작", prize: "대상", year: 2023, contestName: "공공데이터 활용 창업 경진대회", thumbnailColor: "#FFF0EB" },
  { title: "스마트 복지 데이터 플랫폼", prize: "최우수상", year: 2022, contestName: "공공데이터 활용 창업 경진대회", thumbnailColor: "#F5F5F5" },
];

export default function ContestPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <div className="bg-surface-subtle border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="flex gap-8">
            {/* Thumbnail */}
            <div
              className="w-[280px] h-[180px] rounded-2xl shrink-0 flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: "#FFF0EB" }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.3">
                <rect x="6" y="6" width="36" height="36" rx="6" stroke="#FF4D00" strokeWidth="2.5" />
                <circle cx="18" cy="18" r="4.5" stroke="#FF4D00" strokeWidth="2.5" />
                <path d="M6 33l10.5-10.5 7.5 7.5 6-6 12 12" stroke="#FF4D00" strokeWidth="2.5" strokeLinejoin="round" />
              </svg>
              {/* D-Day badge */}
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[12px] font-bold text-white bg-primary">
                D-2
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold text-text-600 bg-surface-muted">창업</span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold text-text-600 bg-surface-muted">공공기관</span>
              </div>
              <h1 className="text-[24px] font-bold text-text-900 mb-2 leading-snug">
                2024 공공데이터 활용 창업 경진대회
              </h1>
              <p className="text-[14px] text-text-600 mb-4">
                공공데이터를 활용한 창의적인 창업 아이디어를 발굴하고, 실현 가능한 비즈니스 모델을 제안하세요.
              </p>
              <div className="flex items-center gap-6 text-[13px] text-text-400">
                <span>주최: 행정안전부</span>
                <span>마감: 2024.12.15</span>
                <span>시상: 총 5천만원</span>
                <span>팀 모집: 3개</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-0">
            {["정보", "팀모집", "수상작"].map((tab, i) => (
              <button
                key={tab}
                className={`px-6 py-3 text-[14px] font-medium border-b-2 transition-colors ${
                  i === 0
                    ? "border-primary text-primary"
                    : "border-transparent text-text-400 hover:text-text-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex gap-8">
        {/* Left: Main content */}
        <div className="flex-1 min-w-0 space-y-8">
          {/* Contest info */}
          <section>
            <h2 className="text-[17px] font-bold text-text-900 mb-4">대회 개요</h2>
            <div className="prose prose-sm text-text-600 space-y-3">
              <p>
                행정안전부와 한국정보화진흥원이 주최하는 「2024 공공데이터 활용 창업 경진대회」는
                공공데이터를 활용한 혁신적인 창업 아이디어 및 서비스를 발굴하여 데이터 경제 활성화에
                기여하고자 합니다.
              </p>
              <p>
                대학생, 일반인 누구나 참여 가능하며, 팀 단위(2~5인)로 지원하셔야 합니다.
                최종 수상팀에게는 사업화 지원 및 멘토링 기회가 제공됩니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[17px] font-bold text-text-900 mb-4">참가 자격</h2>
            <ul className="space-y-2 text-[14px] text-text-600">
              <li className="flex gap-2"><span className="text-primary font-bold shrink-0">·</span>만 19세 이상 국내 거주자</li>
              <li className="flex gap-2"><span className="text-primary font-bold shrink-0">·</span>2~5인 팀 구성 (개인 참가 불가)</li>
              <li className="flex gap-2"><span className="text-primary font-bold shrink-0">·</span>타 공모전 중복 수상 작품 제외</li>
              <li className="flex gap-2"><span className="text-primary font-bold shrink-0">·</span>공공데이터포털 제공 데이터 활용 필수</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[17px] font-bold text-text-900 mb-4">시상 내역</h2>
            <div className="border border-border rounded-xl overflow-hidden">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-surface-subtle border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-text-900">시상</th>
                    <th className="text-left px-4 py-3 font-semibold text-text-900">팀 수</th>
                    <th className="text-left px-4 py-3 font-semibold text-text-900">상금</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-divider">
                  {[
                    { prize: "대상", count: 1, amount: "2,000만원" },
                    { prize: "최우수상", count: 2, amount: "각 500만원" },
                    { prize: "우수상", count: 3, amount: "각 300만원" },
                    { prize: "장려상", count: 5, amount: "각 100만원" },
                  ].map((r) => (
                    <tr key={r.prize}>
                      <td className="px-4 py-3 text-text-900 font-medium">{r.prize}</td>
                      <td className="px-4 py-3 text-text-600">{r.count}팀</td>
                      <td className="px-4 py-3 text-text-900 font-semibold">{r.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Team CTA */}
          <section className="bg-surface-subtle rounded-2xl border border-border p-6">
            <h2 className="text-[16px] font-bold text-text-900 mb-2">팀원이 필요하신가요?</h2>
            <p className="text-[13px] text-text-600 mb-4">
              이 대회에 참가할 팀원을 모집하거나, 이미 구성된 팀에 합류해보세요.
            </p>
            <div className="flex gap-3">
              <Link
                href="/recruit"
                className="flex-1 text-center py-2.5 rounded-xl bg-primary text-white text-[14px] font-semibold hover:bg-orange-600 transition-colors"
              >
                팀 모집글 작성
              </Link>
              <Link
                href="/team"
                className="flex-1 text-center py-2.5 rounded-xl bg-surface border border-border text-text-900 text-[14px] font-medium hover:bg-surface-muted transition-colors"
              >
                모집 중인 팀 보기
              </Link>
            </div>
          </section>

          {/* Teams */}
          <section>
            <h2 className="text-[17px] font-bold text-text-900 mb-4">이 대회의 모집 팀</h2>
            <div className="grid grid-cols-2 gap-4">
              {TEAMS.map((t) => (
                <TeamCard key={t.teamName} {...t} />
              ))}
            </div>
          </section>

          {/* Past Awards */}
          <section>
            <h2 className="text-[17px] font-bold text-text-900 mb-4">이전 수상작</h2>
            <div className="grid grid-cols-2 gap-4">
              {AWARDS.map((a) => (
                <AwardCard key={a.title} {...a} />
              ))}
            </div>
          </section>
        </div>

        {/* Right: Action card */}
        <aside className="w-[280px] shrink-0 space-y-4">
          <div className="bg-surface border border-border rounded-2xl p-5 sticky top-[76px]">
            <button className="w-full py-3 rounded-xl bg-primary text-white text-[15px] font-bold hover:bg-orange-600 transition-colors mb-3">
              참가 신청하기
            </button>
            <button className="w-full py-3 rounded-xl bg-surface border border-border text-text-900 text-[14px] font-medium hover:bg-surface-muted transition-colors flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3h10a1 1 0 0 1 1 1v9l-5.5-2.75L3 13V4a1 1 0 0 1 1-1Z" stroke="#666" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              스크랩
            </button>

            <div className="mt-5 space-y-3">
              <h3 className="text-[13px] font-bold text-text-900">대회 요약</h3>
              {[
                { label: "접수 기간", value: "2024.11.01 ~ 12.15" },
                { label: "발표", value: "2025.01.10" },
                { label: "대상 인원", value: "제한 없음" },
                { label: "팀 구성", value: "2~5인" },
                { label: "총 시상금", value: "5,000만원" },
                { label: "주최", value: "행정안전부" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-[12px]">
                  <span className="text-text-400">{label}</span>
                  <span className="text-text-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

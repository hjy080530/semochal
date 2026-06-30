import ContestCard from "@/components/ContestCard";
import TeamCard from "@/components/TeamCard";
import AwardCard from "@/components/AwardCard";
import SectionHeader from "@/components/ui/SectionHeader";
import SearchField from "@/components/ui/SearchField";
import { HOME_AWARDS, HOME_RECOMMENDED_CONTESTS, HOME_TEAMS, HOME_URGENT_CONTESTS } from "@/lib/mockData";

export default function HomePage() {
  return (
    <div className="bg-surface">
      <div className="flex h-14 items-center justify-between bg-primary px-5 text-white">
        <div className="flex items-center gap-3">
          <span className="flex size-[18px] items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.4" />
              <path d="M2.5 14c.5-2.5 1.7-3.8 3.5-3.8s3 1.3 3.5 3.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M10.5 5.5h5M13 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-[14px] font-medium leading-[17px]">내 팀 현황 — OO공모전 · 백엔드 1자리 빔</span>
        </div>
        <button className="h-7 rounded-lg bg-white px-3.5 text-[13px] font-semibold leading-4 text-primary">
          모집 보기
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 py-8">
        <section className="flex h-[190px] flex-col items-center gap-4 pb-8 pt-16">
          <h1 className="text-[28px] font-bold leading-[34px] text-text-900">지영님, 새 도전을 찾아보세요</h1>
          <SearchField placeholder="공모전, 팀, 분야를 검색하세요" className="w-[600px]" />
        </section>

        <section>
          <SectionHeader title="마감임박 D-7" href="/explore" />
          <div className="grid grid-cols-4 gap-4">
            {HOME_URGENT_CONTESTS.map((c) => (
              <ContestCard key={c.title} {...c} href="/contest" />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="관심분야 추천" href="/explore" />
          <div className="grid grid-cols-4 gap-4">
            {HOME_RECOMMENDED_CONTESTS.map((c) => (
              <ContestCard key={c.title} {...c} href="/contest" />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="팀원 모집중" href="/team" />
          <div className="grid grid-cols-3 gap-4">
            {HOME_TEAMS.slice(0, 3).map((t) => (
              <TeamCard key={t.teamName} {...t} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="새 수상작" href="/awards" />
          <div className="grid grid-cols-4 gap-4">
            {HOME_AWARDS.map((a) => (
              <AwardCard key={a.title} {...a} href="/awards" variant="home" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

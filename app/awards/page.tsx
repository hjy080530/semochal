import AwardCard from "@/components/AwardCard";
import SearchField from "@/components/ui/SearchField";
import { AWARDS } from "@/lib/mockData";

const FILTER_CHIPS = ["전체 수상작", "IT·AI", "창업"];

export default function AwardsPage() {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-surface">
      <div className="mx-auto w-full max-w-[1200px] py-8">
        <SearchField placeholder="수상작, 팀 이름, 공모전 검색" className="w-full" />

        <div className="mt-6 flex h-7 flex-wrap gap-2">
          {FILTER_CHIPS.map((chip) => (
            <button
              key={chip}
              className={`h-7 rounded px-3.5 text-[13px] font-normal leading-4 transition-colors ${
                chip === "전체 수상작"
                  ? "bg-primary-light text-primary"
                  : "border border-border bg-surface text-text-600 hover:border-primary hover:text-primary"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        <h1 className="mt-6 text-[20px] font-bold leading-6 text-text-900">수상작 아카이브</h1>

        <div className="mt-5 grid grid-cols-3 gap-5">
          {AWARDS.slice(0, 3).map((a) => (
            <AwardCard key={a.title} {...a} href="/awards" />
          ))}
        </div>

        <div className="mt-6 flex h-16 items-center justify-between rounded-xl bg-primary px-6 text-white">
          <p className="text-[14px] font-medium leading-[17px]">수상작을 등록하고 팀 포트폴리오를 완성해보세요</p>
          <button className="h-8 rounded-lg bg-white px-5 text-[13px] font-semibold leading-4 text-primary">
            수상작 등록하기
          </button>
        </div>
      </div>
    </div>
  );
}

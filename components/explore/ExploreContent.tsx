'use client';

import { useMemo, useState } from "react";
import ContestCard from "@/components/ContestCard";
import { CheckboxOption, ChipButton, FilterSection, FilterSidebar } from "@/components/ui/FilterControls";
import type { Contest } from "@/lib/mockData";

const CATEGORY_CHIPS = ["IT/SW", "디자인", "창업", "환경", "AI", "소셜", "핀테크"];
const TARGET_OPTIONS = ["대학생", "일반인", "청소년", "누구나"];
const REGION_OPTIONS = ["전국", "서울", "경기", "부산"];
const DEADLINE_CHIPS = ["1주 이내", "1개월 이내", "3개월 이내"];
const PRIZE_OPTIONS = ["100만원 이상", "500만원 이상", "1000만원 이상"];
const SORT_OPTIONS = ["마감임박", "최신", "인기"] as const;

type SortOption = (typeof SORT_OPTIONS)[number];

function deadlineMax(chip: string): number {
  if (chip === "1주 이내") return 7;
  if (chip === "1개월 이내") return 30;
  return 90;
}

function prizeMin(label: string): number {
  if (label === "100만원 이상") return 100;
  if (label === "500만원 이상") return 500;
  return 1000;
}

function toggleItem(list: string[], item: string) {
  return list.includes(item) ? list.filter((value) => value !== item) : [...list, item];
}

export default function ExploreContent({ contests }: { contests: Contest[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeDeadline, setActiveDeadline] = useState<string | null>(null);
  const [checkedTargets, setCheckedTargets] = useState<string[]>([]);
  const [checkedRegions, setCheckedRegions] = useState<string[]>([]);
  const [checkedPrizes, setCheckedPrizes] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("마감임박");

  const filtered = useMemo(() => {
    const result = contests.filter((contest) => {
      if (activeCategory && contest.category !== activeCategory) return false;
      if (checkedTargets.length > 0 && !checkedTargets.some((target) => contest.targets.includes(target))) return false;
      if (checkedRegions.length > 0 && !checkedRegions.includes(contest.region)) return false;
      if (activeDeadline && contest.dDay > deadlineMax(activeDeadline)) return false;
      if (checkedPrizes.length > 0 && !checkedPrizes.some((prize) => contest.prize >= prizeMin(prize))) return false;
      return true;
    });

    if (sort === "마감임박") return [...result].sort((a, b) => a.dDay - b.dDay);
    if (sort === "인기") return [...result].sort((a, b) => (b.teamCount ?? 0) - (a.teamCount ?? 0));
    return [...result].sort((a, b) => b.dDay - a.dDay);
  }, [activeCategory, activeDeadline, checkedPrizes, checkedRegions, checkedTargets, contests, sort]);

  const resetFilters = () => {
    setActiveCategory(null);
    setActiveDeadline(null);
    setCheckedTargets([]);
    setCheckedRegions([]);
    setCheckedPrizes([]);
  };

  return (
    <div className="flex min-h-[calc(100vh-56px)] bg-surface">
      <FilterSidebar>
        <FilterSection title="분야">
          <div className="flex flex-wrap gap-1.5">
            {CATEGORY_CHIPS.map((category) => (
              <ChipButton
                key={category}
                label={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection title="대상">
          <div className="space-y-2">
            {TARGET_OPTIONS.map((target) => (
              <CheckboxOption
                key={target}
                label={target}
                checked={checkedTargets.includes(target)}
                onChange={() => setCheckedTargets((current) => toggleItem(current, target))}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection title="지역">
          <div className="space-y-2">
            {REGION_OPTIONS.map((region) => (
              <CheckboxOption
                key={region}
                label={region}
                checked={checkedRegions.includes(region)}
                onChange={() => setCheckedRegions((current) => toggleItem(current, region))}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection title="마감">
          <div className="flex flex-wrap gap-1.5">
            {DEADLINE_CHIPS.map((deadline) => (
              <ChipButton
                key={deadline}
                label={deadline}
                active={activeDeadline === deadline}
                onClick={() => setActiveDeadline(activeDeadline === deadline ? null : deadline)}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection title="상금">
          <div className="space-y-2">
            {PRIZE_OPTIONS.map((prize) => (
              <CheckboxOption
                key={prize}
                label={prize}
                checked={checkedPrizes.includes(prize)}
                onChange={() => setCheckedPrizes((current) => toggleItem(current, prize))}
              />
            ))}
          </div>
        </FilterSection>

        <button
          type="button"
          onClick={resetFilters}
          className="w-full py-2 rounded-lg border border-border text-[13px] text-text-400 hover:text-text-900 hover:bg-surface-muted transition-colors"
        >
          필터 초기화
        </button>
      </FilterSidebar>

      <div className="flex-1 px-8 py-6">
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-semibold leading-[17px] text-text-900">
            총 <span className="text-primary">{filtered.length}</span>개 공모전
          </p>
          <div className="flex items-center gap-4 text-[13px]">
            {SORT_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSort(option)}
                className={`font-medium transition-colors ${
                  sort === option ? "font-semibold text-primary" : "font-normal text-text-400 hover:text-text-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-full bg-surface-muted flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#CCCCCC" strokeWidth="1.5" />
                <path d="M16.5 16.5L21 21" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-[15px] font-semibold text-text-900 mb-1">조건에 맞는 공모전이 없어요</p>
            <p className="text-[13px] text-text-400">필터를 조정해보세요</p>
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-3 gap-4">
            {filtered.map((contest) => (
              <ContestCard key={contest.title} {...contest} href="/contest" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

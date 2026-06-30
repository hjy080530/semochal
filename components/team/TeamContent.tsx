'use client';

import { useState } from "react";
import Link from "next/link";
import TeamCard from "@/components/TeamCard";
import { CheckboxOption, ChipButton, FilterSection, FilterSidebar } from "@/components/ui/FilterControls";
import type { Team } from "@/lib/mockData";

const ROLE_CHIPS = ["백엔드", "프론트", "디자인", "기획", "AI", "마케팅"];
const REGION_OPTIONS = ["전국", "서울", "경기", "부산"];
const CONTEST_OPTIONS = ["전체 공모전", "공공데이터 활용 창업 경진대회", "AI 챌린지 해커톤", "K-Water 공모전"];
const MODES = ["team", "member"] as const;

type TeamMode = (typeof MODES)[number];

function modeLabel(mode: TeamMode) {
  return mode === "team" ? "팀 찾기" : "팀원 찾기";
}

function toggleItem(list: string[], item: string) {
  return list.includes(item) ? list.filter((value) => value !== item) : [...list, item];
}

export default function TeamContent({ teams }: { teams: Team[] }) {
  const [mode, setMode] = useState<TeamMode>("team");
  const [activeRole, setActiveRole] = useState("백엔드");
  const [checkedRegions, setCheckedRegions] = useState<string[]>([]);
  const [contest, setContest] = useState(CONTEST_OPTIONS[0]);

  return (
    <div className="flex min-h-screen bg-surface">
      <FilterSidebar>
        <FilterSection title="공모전">
          <div className="relative">
            <select
              value={contest}
              onChange={(event) => setContest(event.target.value)}
              className="w-full h-9 border border-border rounded-lg px-3 pr-8 text-[13px] text-text-600 bg-surface appearance-none outline-none cursor-pointer"
            >
              {CONTEST_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path d="M3 5l4 4 4-4" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </FilterSection>

        <FilterSection title="필요 역할">
          <div className="flex flex-wrap gap-1.5">
            {ROLE_CHIPS.map((role) => (
              <ChipButton key={role} label={role} active={activeRole === role} onClick={() => setActiveRole(role)} />
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
      </FilterSidebar>

      <div className="flex-1 px-8 py-6 space-y-5">
        <div className="flex items-center justify-between">
          <div className="border border-border rounded-lg h-9 flex overflow-hidden">
            {MODES.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMode(option)}
                className={`px-5 text-[13px] font-medium transition-colors ${
                  mode === option ? "bg-primary text-white font-semibold" : "text-text-600 hover:text-text-900"
                }`}
              >
                {modeLabel(option)}
              </button>
            ))}
          </div>

          <Link
            href="/recruit"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-[13px] font-semibold hover:bg-orange-600 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            모집글 작성
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {teams.map((team) => (
            <TeamCard key={team.teamName} {...team} />
          ))}
        </div>
      </div>
    </div>
  );
}

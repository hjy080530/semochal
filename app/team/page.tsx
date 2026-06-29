'use client';

import { useState } from "react";
import TeamCard from "@/components/TeamCard";
import Link from "next/link";

const CATEGORIES = ["전체", "IT·AI", "창업", "환경", "문화·예술", "사회", "과학·기술"];
const ROLES = ["전체", "기획자", "디자이너", "개발자", "마케터", "데이터 분석가", "PM"];

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
    teamName: "그린 이노베이터",
    contestName: "K-Water 환경 공모전",
    roles: [
      { name: "PM", filled: false },
      { name: "개발자", filled: true },
      { name: "디자이너", filled: false },
    ],
    memberCount: 1,
    maxMembers: 3,
    deadline: "12/20",
    tags: ["환경", "IoT"],
  },
  {
    teamName: "AI 프론티어",
    contestName: "2024 AI 챌린지 해커톤",
    roles: [
      { name: "AI 엔지니어", filled: false },
      { name: "백엔드", filled: true },
    ],
    memberCount: 1,
    maxMembers: 2,
    deadline: "12/10",
    tags: ["ML", "FastAPI"],
  },
  {
    teamName: "스마트시티 팀",
    contestName: "스마트시티 아이디어 공모전",
    roles: [
      { name: "기획자", filled: false },
      { name: "디자이너", filled: false },
    ],
    memberCount: 1,
    maxMembers: 3,
    deadline: "12/18",
    tags: ["UX", "도시계획"],
  },
  {
    teamName: "크리에이티브 랩",
    contestName: "문화체육관광부 창작 공모전",
    roles: [
      { name: "기획자", filled: true },
      { name: "디자이너", filled: false },
      { name: "마케터", filled: false },
    ],
    memberCount: 1,
    maxMembers: 4,
    deadline: "01/05",
    tags: ["문화", "브랜딩"],
  },
  {
    teamName: "소셜임팩트",
    contestName: "청년 사회혁신 아이디어 공모전",
    roles: [
      { name: "PM", filled: false },
      { name: "개발자", filled: false },
    ],
    memberCount: 2,
    maxMembers: 4,
    deadline: "01/20",
    tags: ["사회", "비영리"],
  },
];

export default function TeamPage() {
  const [mode, setMode] = useState<"team" | "member">("team");

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="w-[260px] shrink-0 bg-surface-subtle border-r border-border p-6 space-y-8 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto">
        <div>
          <h3 className="text-[13px] font-bold text-text-900 mb-3">분야</h3>
          <div className="space-y-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors ${
                  cat === "전체"
                    ? "bg-primary-light text-primary font-semibold"
                    : "text-text-600 hover:bg-surface-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-bold text-text-900 mb-3">역할</h3>
          <div className="space-y-1">
            {ROLES.map((role) => (
              <button
                key={role}
                className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors ${
                  role === "전체"
                    ? "bg-primary-light text-primary font-semibold"
                    : "text-text-600 hover:bg-surface-muted"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-bold text-text-900 mb-3">마감 기한</h3>
          <div className="space-y-1">
            {["전체", "7일 이내", "30일 이내"].map((d) => (
              <button
                key={d}
                className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors ${
                  d === "전체"
                    ? "bg-primary-light text-primary font-semibold"
                    : "text-text-600 hover:bg-surface-muted"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Toggle */}
            <div className="flex bg-surface-muted rounded-xl p-1">
              <button
                onClick={() => setMode("team")}
                className={`px-5 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                  mode === "team"
                    ? "bg-surface text-text-900 shadow-sm"
                    : "text-text-400 hover:text-text-600"
                }`}
              >
                팀 찾기
              </button>
              <button
                onClick={() => setMode("member")}
                className={`px-5 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                  mode === "member"
                    ? "bg-surface text-text-900 shadow-sm"
                    : "text-text-400 hover:text-text-600"
                }`}
              >
                팀원 찾기
              </button>
            </div>
            <span className="text-[14px] text-text-400">{TEAMS.length}개 모집글</span>
          </div>

          <Link
            href="/recruit"
            className="px-5 py-2.5 rounded-xl bg-primary text-white text-[14px] font-semibold hover:bg-orange-600 transition-colors"
          >
            + 모집글 작성
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {TEAMS.map((t) => (
            <TeamCard key={t.teamName} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}

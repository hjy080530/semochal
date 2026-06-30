'use client';

import { useState } from "react";

const ROLE_OPTIONS = ["백엔드", "프론트엔드", "디자이너", "기획자", "AI 엔지니어", "마케터", "PM", "데이터 분석가"];
const CONTEST_OPTIONS = [
  "2025 공공데이터 활용 창업 경진대회",
  "청년 창업 아이디어 공모전",
  "ESG 소셜벤처 공모전",
  "AI 서비스 기획 공모전",
  "소셜 임팩트 해커톤",
  "핀테크 아이디어 챌린지",
];

interface RoleSlot {
  id: number;
  role: string;
  count: number;
}

function StepBadge({ number }: { number: number }) {
  return (
    <span className="w-6 h-6 rounded-xl border border-primary flex items-center justify-center shrink-0 text-[12px] font-semibold text-primary">
      {number}
    </span>
  );
}

export default function RecruitPage() {
  const [slots, setSlots] = useState<RoleSlot[]>([
    { id: 1, role: "백엔드", count: 1 },
    { id: 2, role: "디자이너", count: 1 },
  ]);
  const [nextId, setNextId] = useState(3);

  const addSlot = () => {
    setSlots((prev) => [...prev, { id: nextId, role: "백엔드", count: 1 }]);
    setNextId((n) => n + 1);
  };

  const removeSlot = (id: number) => setSlots((prev) => prev.filter((s) => s.id !== id));

  const updateSlot = (id: number, field: "role" | "count", value: string | number) =>
    setSlots((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));

  return (
    <div className="bg-surface min-h-screen flex justify-center">
      <div className="w-[640px] py-10 space-y-8">
        <h1 className="text-[24px] font-bold text-text-900">모집글 작성</h1>

        {/* Step 1 */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <StepBadge number={1} />
            <span className="text-[15px] font-semibold text-text-900">공모전 선택</span>
          </div>
          <div className="relative">
            <select className="w-full h-11 border border-border rounded-lg px-3.5 pr-9 text-[14px] text-text-900 bg-surface appearance-none outline-none focus:border-primary transition-colors cursor-pointer">
              <option value="" className="text-text-400">공모전을 검색하세요</option>
              {CONTEST_OPTIONS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="4.5" stroke="#999" strokeWidth="1.3" />
              <path d="M10.5 10.5L14 14" stroke="#999" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <StepBadge number={2} />
            <span className="text-[15px] font-semibold text-text-900">팀 소개 한줄</span>
          </div>
          <input
            type="text"
            placeholder="팀을 한 줄로 소개해주세요"
            className="w-full h-11 border border-border rounded-lg px-3.5 text-[14px] text-text-900 placeholder-text-400 outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Step 3 */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <StepBadge number={3} />
            <span className="text-[15px] font-semibold text-text-900">필요 역할 슬롯 추가</span>
          </div>
          <div className="space-y-2.5">
            {slots.map((slot) => (
              <div key={slot.id} className="flex items-center gap-3">
                {/* Role dropdown */}
                <div className="relative flex-1">
                  <select
                    value={slot.role}
                    onChange={(e) => updateSlot(slot.id, "role", e.target.value)}
                    className="w-full h-10 border border-border rounded-lg px-3.5 pr-8 text-[14px] text-text-900 bg-surface appearance-none outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    {ROLE_OPTIONS.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                  <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="#999" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Count */}
                <div className="relative w-[100px]">
                  <select
                    value={slot.count}
                    onChange={(e) => updateSlot(slot.id, "count", Number(e.target.value))}
                    className="w-full h-10 border border-border rounded-lg px-3.5 pr-8 text-[14px] text-text-900 bg-surface appearance-none outline-none focus:border-primary transition-colors text-center cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n}>{n}명</option>
                    ))}
                  </select>
                  <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="#999" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Delete */}
                <button
                  type="button"
                  onClick={() => removeSlot(slot.id)}
                  className="w-4 h-4 flex items-center justify-center text-text-400 hover:text-text-900 shrink-0 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ))}

            {/* Add slot */}
            <button
              type="button"
              onClick={addSlot}
              className="w-full h-10 border border-border rounded-lg flex items-center justify-center gap-1.5 text-[13px] text-text-400 hover:border-primary hover:text-primary transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              역할 슬롯 추가
            </button>
          </div>
        </div>

        {/* Step 4 */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <StepBadge number={4} />
            <span className="text-[15px] font-semibold text-text-900">내가 맡은 역할</span>
          </div>
          <div className="relative">
            <select className="w-full h-11 border border-border rounded-lg px-3.5 pr-8 text-[14px] text-text-900 bg-surface appearance-none outline-none focus:border-primary transition-colors cursor-pointer">
              {ROLE_OPTIONS.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 5l4 4 4-4" stroke="#999" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Submit */}
        <button
          type="button"
          className="w-full h-12 bg-primary text-white text-[16px] font-semibold rounded-lg hover:bg-orange-600 transition-colors"
        >
          게시하기
        </button>
      </div>
    </div>
  );
}

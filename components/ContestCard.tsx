'use client';

import Link from "next/link";

interface ContestCardProps {
  title: string;
  category: string;
  dDay: number;
  isScraped?: boolean;
  teamCount?: number;
  thumbnailColor?: string;
  href?: string;
}

export default function ContestCard({
  title,
  category,
  dDay,
  isScraped = false,
  teamCount,
  thumbnailColor = "#F5F5F5",
  href,
}: ContestCardProps) {
  const dDayLabel = dDay === 0 ? "D-Day" : dDay > 0 ? `D-${dDay}` : "마감";
  const isUrgent = dDay >= 0 && dDay <= 7;

  const card = (
    <article className="h-[231px] overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/40">
      <div
        className="h-[130px] w-full"
        style={{ backgroundColor: thumbnailColor }}
      />

      <div className="flex h-[101px] flex-col gap-2 p-3.5">
        <h3 className="line-clamp-1 w-full text-[14px] font-semibold leading-[17px] text-text-900">
          {title}
        </h3>

        <div className="flex h-[19px] items-center justify-between">
          <span className="rounded bg-surface-muted px-2 py-[3px] text-[11px] font-normal leading-[13px] text-text-600">
            {category}
          </span>
          <span className={`text-[12px] font-semibold leading-[15px] ${isUrgent ? "text-primary" : "text-text-400"}`}>
            {dDay >= 0 ? dDayLabel : "마감"}
          </span>
        </div>

        <div className="flex h-[19px] items-center justify-between">
          <button aria-label="스크랩" onClick={(e) => e.preventDefault()} className="size-4 text-text-400">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 15s-5-3-5-7a3 3 0 0 1 5-2.2A3 3 0 0 1 14 8c0 4-5 7-5 7Z"
                stroke={isScraped ? "#FF4D00" : "#999999"}
                strokeWidth="1.2"
                fill={isScraped ? "#FF4D00" : "none"}
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {teamCount !== undefined && (
            <span className="rounded bg-primary-light px-2 py-1 text-[11px] font-medium leading-[13px] text-primary">
              팀 모집 {teamCount}건
            </span>
          )}
        </div>
      </div>
    </article>
  );

  return href ? <Link href={href} className="block">{card}</Link> : card;
}

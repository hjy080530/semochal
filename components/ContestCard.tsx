interface ContestCardProps {
  title: string;
  category: string;
  dDay: number;
  isScraped?: boolean;
  teamCount?: number;
  thumbnailColor?: string;
}

export default function ContestCard({
  title,
  category,
  dDay,
  isScraped = false,
  teamCount,
  thumbnailColor = "#F5F5F5",
}: ContestCardProps) {
  const dDayLabel = dDay === 0 ? "D-Day" : dDay > 0 ? `D-${dDay}` : "마감";
  const isUrgent = dDay >= 0 && dDay <= 7;

  return (
    <article className="bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
      {/* Thumbnail */}
      <div
        className="w-full aspect-[16/9] relative"
        style={{ backgroundColor: thumbnailColor }}
      >
        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[11px] font-semibold text-text-900 bg-white/80 backdrop-blur-sm">
          {category}
        </span>
        {isUrgent && dDay >= 0 && (
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[11px] font-bold text-white bg-primary">
            {dDayLabel}
          </span>
        )}
        {dDay < 0 && (
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[11px] font-bold text-text-600 bg-surface-muted">
            마감
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[14px] font-semibold text-text-900 leading-snug line-clamp-2 flex-1">
            {title}
          </h3>
          <button
            aria-label="스크랩"
            className="shrink-0 mt-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M4 3h10a1 1 0 0 1 1 1v11l-6-3-6 3V4a1 1 0 0 1 1-1Z"
                stroke={isScraped ? "#FF4D00" : "#CCCCCC"}
                strokeWidth="1.5"
                fill={isScraped ? "#FF4D00" : "none"}
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          {dDay >= 0 && dDay > 7 && (
            <span className="text-[12px] text-text-400">D-{dDay}</span>
          )}
          {dDay >= 0 && dDay <= 7 && (
            <span className="text-[12px] font-semibold text-primary">{dDayLabel}</span>
          )}
          {dDay < 0 && <span className="text-[12px] text-text-400">마감</span>}

          {teamCount !== undefined && (
            <span className="flex items-center gap-1 text-[12px] text-text-400">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="5" cy="5" r="2.5" stroke="#999999" strokeWidth="1.2" />
                <circle cx="9" cy="5" r="2.5" stroke="#999999" strokeWidth="1.2" />
                <path d="M1 12c0-2.21 1.79-4 4-4" stroke="#999999" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M9 8c2.21 0 4 1.79 4 4" stroke="#999999" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              팀 {teamCount}개 모집중
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

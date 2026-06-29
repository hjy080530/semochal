interface AwardCardProps {
  title: string;
  prize: string;
  year: number;
  contestName: string;
  thumbnailColor?: string;
  team?: string;
}

export default function AwardCard({
  title,
  prize,
  year,
  contestName,
  thumbnailColor = "#F5F5F5",
  team,
}: AwardCardProps) {
  return (
    <article className="bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
      {/* Thumbnail */}
      <div
        className="w-full aspect-[4/3] relative flex items-center justify-center"
        style={{ backgroundColor: thumbnailColor }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity="0.3">
          <rect x="4" y="4" width="24" height="24" rx="4" stroke="#666" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" stroke="#666" strokeWidth="2" />
          <path d="M4 22l7-7 5 5 4-4 8 8" stroke="#666" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[11px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">
            {prize}
          </span>
          <span className="text-[11px] text-text-400">{year}</span>
        </div>
        <h3 className="text-[14px] font-semibold text-text-900 leading-snug mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-[12px] text-text-400 truncate">{contestName}</p>
        {team && (
          <p className="text-[11px] text-text-400 mt-0.5 truncate">by {team}</p>
        )}
      </div>
    </article>
  );
}

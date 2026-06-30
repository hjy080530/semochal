import Link from "next/link";

interface AwardCardProps {
  title: string;
  prize: string;
  year: number;
  contestName: string;
  thumbnailColor?: string;
  team?: string;
  href?: string;
  variant?: "home" | "archive";
}

export default function AwardCard({
  title,
  prize,
  year,
  contestName,
  thumbnailColor = "#F5F5F5",
  team,
  href,
  variant = "archive",
}: AwardCardProps) {
  if (variant === "home") {
    const compact = (
      <article className="flex h-[173px] flex-col gap-2 rounded-xl bg-surface">
        <div className="h-[120px] w-full rounded-xl" style={{ backgroundColor: thumbnailColor }} />
        <div className="flex flex-col gap-2 px-1">
          <h3 className="line-clamp-1 text-[13px] font-medium leading-[16px] text-text-900">{title}</h3>
          <p className="text-[11px] font-normal leading-[13px] text-text-400">
            {prize} · {year}
          </p>
          <span className="sr-only">{contestName}</span>
        </div>
      </article>
    );

    return href ? <Link href={href} className="block">{compact}</Link> : compact;
  }

  const card = (
    <article className="h-[250px] overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/40">
      <div
        className="h-40 w-full"
        style={{ backgroundColor: thumbnailColor }}
      />

      <div className="flex h-[90px] flex-col p-3.5">
        <h3 className="line-clamp-1 text-[14px] font-semibold leading-[17px] text-text-900">
          {title}
        </h3>
        <div className="mt-1.5 flex h-[17px] items-center gap-2">
          <span className="rounded bg-primary-light px-2 py-0.5 text-[11px] font-medium leading-[13px] text-primary">{prize}</span>
          <span className="truncate text-[12px] font-normal leading-[15px] text-text-400">{contestName}</span>
        </div>
        <div className="mt-auto flex h-4 items-center justify-between">
          <p className="truncate text-[11px] font-normal leading-[13px] text-text-400">{team ? `${team} · ${year}` : year}</p>
          <span className="text-text-400">♡</span>
        </div>
      </div>
    </article>
  );

  return href ? <Link href={href} className="block">{card}</Link> : card;
}

import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  description?: string;
  href?: string;
}

export default function SectionHeader({ title, description, href }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex h-[22px] items-center justify-between">
      <h2 className="text-[18px] font-bold leading-[22px] text-text-900">{title}</h2>
      {href && (
        <Link href={href} className="text-[13px] font-normal leading-none text-text-400 transition-colors hover:text-primary">
          더보기 →
        </Link>
      )}
      {description ? <span className="sr-only">{description}</span> : null}
    </div>
  );
}

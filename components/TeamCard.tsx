import Link from "next/link";

interface Role {
  name: string;
  filled: boolean;
}

interface TeamCardProps {
  teamName: string;
  contestName: string;
  roles: Role[];
  memberCount: number;
  maxMembers: number;
  deadline: string;
  tags?: string[];
}

export default function TeamCard({
  teamName,
  contestName,
  roles,
  memberCount,
  maxMembers,
  deadline,
}: TeamCardProps) {
  return (
    <article className="flex h-[118px] flex-col gap-2.5 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/40">
      <div className="flex items-center justify-between">
        <h3 className="truncate text-[15px] font-semibold leading-[18px] text-text-900">{teamName}</h3>
        <p className="ml-3 shrink-0 text-[12px] font-normal leading-[15px] text-text-400">{contestName}</p>
      </div>

      <div className="flex h-[21px] flex-wrap gap-1.5 overflow-hidden">
        {roles.map((role, i) => (
          <span
            key={i}
            className={`rounded px-2 py-1 text-[11px] font-medium leading-[13px] ${
              role.filled
                ? "bg-success-light text-success"
                : "border border-border bg-surface-muted text-text-400"
            }`}
          >
            {role.name}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[12px] font-normal leading-[15px] text-text-600">
          {memberCount}/{maxMembers}명 참여중
          {deadline ? <span className="sr-only">마감 {deadline}</span> : null}
        </span>
        <Link href="/recruit" className="rounded-lg border border-primary px-3 py-1.5 text-[12px] font-semibold leading-[15px] text-primary transition-colors hover:bg-primary hover:text-white">
          지원하기
        </Link>
      </div>
    </article>
  );
}

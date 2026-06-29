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
  tags = [],
}: TeamCardProps) {
  return (
    <article className="bg-surface rounded-2xl border border-border p-5 hover:shadow-md transition-shadow cursor-pointer">
      {/* Contest name */}
      <p className="text-[11px] font-medium text-text-400 mb-1 truncate">{contestName}</p>

      {/* Team name */}
      <h3 className="text-[15px] font-bold text-text-900 mb-3 leading-snug">{teamName}</h3>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-surface-muted text-[11px] text-text-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Roles */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {roles.map((role, i) => (
          <span
            key={i}
            className={`px-2.5 py-1 rounded-full text-[12px] font-medium ${
              role.filled
                ? "bg-success-light text-success-dark"
                : "bg-surface-muted text-text-600"
            }`}
          >
            {role.filled ? "✓ " : "+ "}
            {role.name}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-divider">
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-text-400">
            {memberCount}/{maxMembers}명
          </span>
          <span className="text-[12px] text-text-400">~{deadline}</span>
        </div>
        <button className="px-3.5 py-1.5 rounded-lg bg-primary text-white text-[12px] font-semibold hover:bg-orange-600 transition-colors">
          지원하기
        </button>
      </div>
    </article>
  );
}

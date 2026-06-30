interface SearchFieldProps {
  placeholder: string;
  className?: string;
  children?: React.ReactNode;
}

export default function SearchField({ placeholder, className = "", children }: SearchFieldProps) {
  return (
    <div className={`flex h-11 items-center rounded-lg border border-border bg-surface px-4 ${className}`}>
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="mr-2 shrink-0">
        <circle cx="8" cy="8" r="5.5" stroke="#999999" strokeWidth="1.4" />
        <path d="M12.5 12.5L16 16" stroke="#999999" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-[14px] text-text-900 outline-none placeholder:text-text-400"
      />
      {children}
    </div>
  );
}

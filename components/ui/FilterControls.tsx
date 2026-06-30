interface ChipButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

interface CheckboxOptionProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function FilterSidebar({ children }: { children: React.ReactNode }) {
  return (
    <aside className="sticky top-14 h-[calc(100vh-56px)] w-[260px] shrink-0 overflow-y-auto border-r border-border bg-surface px-5 py-6">
      <p className="mb-5 text-[16px] font-bold leading-[19px] text-text-900">필터</p>
      <div className="space-y-5">
      {children}
      </div>
    </aside>
  );
}

export function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2.5">
      <p className="text-[12px] font-semibold leading-4 text-text-900">{title}</p>
      {children}
    </div>
  );
}

export function ChipButton({ label, active, onClick }: ChipButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[25px] rounded px-2.5 text-[12px] font-normal leading-[15px] transition-colors ${
        active
          ? "bg-primary-light text-primary"
          : "border border-border bg-surface text-text-600 hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}

export function CheckboxOption({ label, checked, onChange }: CheckboxOptionProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`flex size-4 shrink-0 items-center justify-center rounded-[3px] transition-colors ${
          checked ? "bg-primary" : "border border-border"
        }`}
        aria-hidden="true"
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="text-[13px] leading-4 text-text-600">{label}</span>
    </label>
  );
}

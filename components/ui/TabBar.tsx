interface TabBarProps {
  tabs: string[];
  activeIndex?: number;
  className?: string;
  tabClassName?: string;
  fill?: boolean;
}

export default function TabBar({
  tabs,
  activeIndex = 0,
  className = "",
  tabClassName = "",
  fill = false,
}: TabBarProps) {
  return (
    <div className={`flex gap-0 ${className}`}>
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={`${fill ? "flex-1" : ""} ${tabClassName} text-[14px] font-medium transition-colors border-b-2 ${
            index === activeIndex
              ? "border-primary text-primary"
              : "border-transparent text-text-400 hover:text-text-900"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

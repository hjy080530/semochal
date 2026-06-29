'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "홈" },
  { href: "/explore", label: "탐색" },
  { href: "/team", label: "팀매칭" },
  { href: "/awards", label: "수상작" },
];

export default function GNB() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border h-[60px] flex items-center">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <polygon points="11,2 20,18 2,18" fill="#FF4D00" />
          </svg>
          <span className="text-[18px] font-bold text-text-900 tracking-tight">SEMO.</span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-[14px] font-medium transition-colors ${
                  active
                    ? "text-primary bg-primary-light"
                    : "text-text-600 hover:text-text-900 hover:bg-surface-muted"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right icons */}
        <div className="ml-auto flex items-center gap-3">
          <button
            aria-label="검색"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-muted transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="5.5" stroke="#666666" strokeWidth="1.5" />
              <path d="M12.5 12.5L16 16" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            href="/notifications"
            aria-label="알림"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-muted transition-colors relative"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 2a5 5 0 0 0-5 5v3l-1.5 2.5h13L14 10V7a5 5 0 0 0-5-5Z"
                stroke="#666666"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M7.5 14.5a1.5 1.5 0 0 0 3 0" stroke="#666666" strokeWidth="1.5" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </Link>
          <Link
            href="/my"
            aria-label="프로필"
            className="w-8 h-8 rounded-full bg-surface-muted border border-border overflow-hidden hover:border-primary transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="13" r="5" fill="#CCCCCC" />
              <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#CCCCCC" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

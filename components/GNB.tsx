'use client';

import Image from "next/image";
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
    <header className="sticky top-0 z-50 h-14 bg-surface border-b border-border/80">
      <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center">
        <Link href="/" className="shrink-0">
          <Image src="/logo.png" alt="SEMO." width={86} height={23} priority className="h-[23px] w-auto" />
        </Link>

        <nav className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 items-center gap-8 text-[14px]">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`leading-none transition-colors ${
                  active ? "font-semibold text-text-900" : "font-normal text-text-600 hover:text-text-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex h-full items-center gap-5">
          <button
            aria-label="검색"
            className="flex size-5 items-center justify-center text-text-600 transition-colors hover:text-text-900"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="5.75" stroke="currentColor" strokeWidth="1.4" />
              <path d="M13.3 13.3L17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            href="/notifications"
            aria-label="알림"
            className="relative flex size-5 items-center justify-center text-text-600 transition-colors hover:text-text-900"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 3a5.3 5.3 0 0 0-5.3 5.3v3.1L3 14h14l-1.7-2.6V8.3A5.3 5.3 0 0 0 10 3Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path d="M8.2 16a1.8 1.8 0 0 0 3.6 0" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </Link>
          <Link
            href="/my"
            aria-label="프로필"
            className="flex size-5 items-center justify-center text-text-600 transition-colors hover:text-text-900"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="10" cy="8" r="2.3" stroke="currentColor" strokeWidth="1.4" />
              <path d="M5.8 15.3c.9-2 2.3-3 4.2-3s3.3 1 4.2 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type SidebarLink = { label: string; href: string; icon: ReactNode };

export function Sidebar({ brand, links }: { brand: string; links: SidebarLink[] }) {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 bg-white border-r border-line flex-col">
      <div className="flex items-center gap-2 px-6 py-6">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-display font-extrabold">
          K
        </div>
        <span className="font-display font-bold text-lg">{brand}</span>
      </div>

      <nav className="px-3 space-y-1 text-sm font-medium">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${
                active ? "bg-primary-light text-primary-dark" : "text-muted hover:bg-surface"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
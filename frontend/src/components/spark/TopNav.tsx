"use client";

import { deleteAuthToken } from "@/actions/deleteCookie";
import { useState, useRef, useEffect } from "react";

type NavItem = {
  label: "Feed" | "Profile";
  href: string;
};

const navItems: NavItem[] = [
  { label: "Feed", href: "/" },
  { label: "Profile", href: "#" },
];

type TopNavProps = {
  activeTab?: NavItem["label"];
};

export default function TopNav({ activeTab }: TopNavProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 shadow-sm shadow-indigo-900/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-10">
          <span className="headline-font text-2xl font-bold tracking-tight text-indigo-600">
            Spark
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`headline-font tracking-tight transition-colors duration-200 active:scale-95 ${item.label === activeTab
                  ? "font-semibold text-indigo-700"
                  : "text-slate-500 hover:text-indigo-500"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full bg-slate-50 px-4 py-2 sm:flex">
            <span className="material-symbols-outlined text-xl text-slate-400">search</span>
            <input type="text" placeholder="Search experiences..." className="w-48 border-none bg-transparent text-sm font-body focus:ring-0" />
          </div>

          <div className="relative flex items-center gap-3" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 rounded-full p-1 text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-indigo-600 active:scale-95"
            >
              <span className="material-symbols-outlined text-3xl">account_circle</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }}>expand_more</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-indigo-900/10 animate-in fade-in zoom-in duration-200">
                <div className="mb-2 px-3 py-2 border-b border-slate-50">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Account</p>
                </div>
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                  <span className="material-symbols-outlined text-lg">person</span>
                  Profile
                </button>
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                  <span className="material-symbols-outlined text-lg">settings</span>
                  Settings
                </button>
                <div className="my-2 border-t border-slate-50" />
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-red-500 hover:bg-red-50 transition-colors" onClick={deleteAuthToken}>
                  <span className="material-symbols-outlined text-lg">logout</span>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}


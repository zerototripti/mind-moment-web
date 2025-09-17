"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-bold text-teal-700 tracking-tight"
        >
          Mind Moment
        </Link>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-teal-700"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link
            href="/sessions/join-test"
            className="hover:text-teal-900 transition-colors"
          >
            Join Session
          </Link>
          <Link
            href="/providers"
            className="hover:text-teal-900 transition-colors"
          >
            Providers
          </Link>
          <Link href="/login" className="hover:text-teal-900 transition-colors">
            Login
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-b border-gray-200 px-4 py-2 animate-fade-in-down">
          <Link
            href="/sessions/join-test"
            className="block py-2 text-teal-700 hover:text-teal-900"
            onClick={() => setMenuOpen(false)}
          >
            Join Session
          </Link>
          <Link
            href="/providers"
            className="block py-2 text-teal-700 hover:text-teal-900"
            onClick={() => setMenuOpen(false)}
          >
            Providers
          </Link>
          <Link
            href="/login"
            className="block py-2 text-teal-700 hover:text-teal-900"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}

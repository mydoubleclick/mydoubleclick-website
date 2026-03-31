"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/business", label: "Business IT" },
  { href: "/services/residential", label: "Home & Residential" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-slate-950 sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Double Click Computing logo"
                fill
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">
                Double Click
              </span>
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                Computing
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-sky-400"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA area */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+18889254259"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              (888) 9-CLICK-9
            </a>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Get in Touch
            </Link>
            {/* Remote Support — live indicator */}
            <Link
              href="/remote-support"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-green-500/50 text-slate-200 hover:text-white text-xs font-semibold px-3 py-2 rounded transition-colors"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Remote Support
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2 rounded transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-sm rounded transition-colors ${
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-sky-400"
                    : "text-slate-300 hover:text-white"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/remote-support"
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded"
              onClick={() => setMobileOpen(false)}
            >
              Remote Support
            </Link>
            <Link
              href="/contact"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded text-center transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

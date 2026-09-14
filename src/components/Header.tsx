"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandName from "@/components/BrandName";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/business", label: "Business" },
  { href: "/services/residential", label: "Residential" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
];

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  // Drawer behaviour: scroll lock, focus trap, Escape to close, and close if
  // the viewport grows past the breakpoint where the full nav returns.
  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    const menuBtn = menuBtnRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(drawer?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const els = focusables();
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const wide = window.matchMedia("(min-width: 62.01rem)");
    const onWide = () => wide.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
      menuBtn?.focus();
    };
  }, [open]);

  return (
    <>
      <div className="rail">
        <div className="wrap">
          <div className="rail-items">
            <span>
              <span className="pulse" />
              Monitoring 200+ endpoints
            </span>
            <span className="on-ink">Same-day response</span>
            <span className="on-ink">On-site across 13 NJ counties</span>
          </div>
          <Link href="/remote-support" className="on-ink">
            Remote Support &rarr;
          </Link>
        </div>
      </div>

      <header className="site">
        <div className="wrap">
          <Link className="brand" href="/" aria-label="Double Click Computing home">
            <img className="brand-mark" src="/images/logo.png" alt="" width={450} height={450} />
            <BrandName />
          </Link>
          <nav className="main" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="head-act">
            <a href={PHONE_HREF} className="small" style={{ fontWeight: 600 }}>
              {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn btn-ink btn-sm">
              Get in Touch
            </Link>
            <button
              ref={menuBtnRef}
              className="menu-btn"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-drawer"
              onClick={() => setOpen(true)}
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="drawer"
          id="site-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          ref={drawerRef}
        >
          <div className="wrap drawer-top">
            <Link className="brand" href="/" onClick={close} aria-label="Double Click Computing home">
              <img className="brand-mark" src="/images/logo.png" alt="" width={450} height={450} />
              <BrandName />
            </Link>
            <button className="menu-btn" aria-label="Close menu" onClick={close}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <div className="wrap">
            <nav aria-label="Mobile">
              {[...navLinks, { href: "/remote-support", label: "Remote Support" }, { href: "/contact", label: "Contact" }].map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
            <div className="drawer-act">
              <Link href="/contact" onClick={close} className="btn btn-sage btn-lg">
                Get in Touch <span className="arw" aria-hidden="true">&rarr;</span>
              </Link>
              <a href={PHONE_HREF} className="btn btn-line btn-lg">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

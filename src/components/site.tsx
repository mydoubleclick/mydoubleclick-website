/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import Link from "next/link";
import { GFX, type GfxName } from "@/components/gfx";
import {
  BOOKING_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  counties,
  industries,
} from "@/data/site";

export function Arw() {
  return (
    <span className="arw" aria-hidden="true">
      &rarr;
    </span>
  );
}

/**
 * Framed illustration with two-plane scroll parallax: the tonal ground
 * (.drift) moves with scroll, the illustration (.gfx) counter-drifts.
 */
export function Frame({
  gfx,
  variant = "arch",
  className = "",
  style,
}: {
  gfx: GfxName;
  variant?: "arch" | "arch-sm" | "tile-thumb";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`${variant} ${className}`.trim()} style={style}>
      <div className="drift">
        <div className="ph" />
      </div>
      <div className="gfx" dangerouslySetInnerHTML={{ __html: GFX[gfx] }} />
    </div>
  );
}

export function Tile({
  href,
  gfx,
  title,
  children,
}: {
  href: string;
  gfx: GfxName;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="tile rise" href={href}>
      <Frame gfx={gfx} variant="tile-thumb" />
      <h3>{title}</h3>
      <p>{children}</p>
      <span className="tile-more">
        Learn more <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  lede: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="phero">
      <div className="wrap">
        <div className="stack g-lg">
          <span className="eyebrow eyebrow-sage">{eyebrow}</span>
          <h1 className="display d1 mw-lg">{title}</h1>
          <p className="lede mw-md">{lede}</p>
          {children && <div className="row g-sm">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function Partners({ label = "Trusted technology partners" }: { label?: string }) {
  return (
    <section className="pad-s">
      <div className="wrap">
        <p className="eyebrow tc" style={{ marginBottom: "1.75rem" }}>
          {label}
        </p>
        <div className="partners">
          <img src="/images/apple-logo.svg" alt="Apple" className="p-apple" />
          <img src="/images/microsoft-logo.png" alt="Microsoft" />
          <img src="/images/bitdefender-logo.svg" alt="Bitdefender" />
          <img src="/images/fortinet-logo.svg" alt="Fortinet" />
          <img src="/images/backblaze-logo.jpeg" alt="Backblaze" className="p-bb" />
        </div>
      </div>
    </section>
  );
}

export function Cta({ title, lede }: { title: string; lede: string }) {
  return (
    <section className="pad" id="contact">
      <div className="wrap tc">
        <h2 className="display d1 mx mw-lg">{title}</h2>
        <p className="lede mx mw-md" style={{ marginTop: "1.5rem" }}>
          {lede}
        </p>
        <div className="row g-sm" style={{ justifyContent: "center", marginTop: "2.25rem" }}>
          <Link href="/contact" className="btn btn-sage btn-lg">
            Schedule a Free Assessment <Arw />
          </Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-lg">
            Book Online
          </a>
          <a href={PHONE_HREF} className="btn btn-line btn-lg">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

export function CountyChips() {
  return (
    <div className="row g-xs">
      {counties.map((c) => (
        <span key={c} className="chip">
          {c}
        </span>
      ))}
    </div>
  );
}

export function IndustriesSplit() {
  return (
    <div className="split split-a" style={{ alignItems: "start" }}>
      <div className="stack g-md sticky-col">
        <span className="eyebrow">Industries we serve</span>
        <h2 className="display d2">
          Trusted across
          <br />
          NJ small business.
        </h2>
        <p className="small mw-xs">
          Don&apos;t see your industry? We&apos;ve worked with clients across
          virtually every type of small business. If you have computers and need
          them working reliably, we can help.
        </p>
      </div>
      <div className="row g-xs" style={{ alignContent: "start" }}>
        {industries.map((i) => (
          <span key={i} className="chip chip-line">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

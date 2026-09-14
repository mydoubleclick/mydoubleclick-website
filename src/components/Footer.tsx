/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import BrandName from "@/components/BrandName";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site arc-top">
      <div className="wrap" style={{ paddingTop: "clamp(3.5rem,7vw,5.5rem)", paddingBottom: "2rem" }}>
        <div className="foot-grid">
          <div className="stack g-md">
            <Link className="brand" href="/" aria-label="Double Click Computing home">
              <img className="brand-mark brand-mark-inv" src="/images/logo.png" alt="" width={450} height={450} />
              <BrandName inverse />
            </Link>
            <p className="small on-ink mw-xs" style={{ margin: 0 }}>
              Professional IT support for businesses and homes across New Jersey.
              Trusted for over 38 years.
            </p>
            <span className="chip" style={{ background: "rgba(240,237,228,.1)", color: "var(--paper)", alignSelf: "start" }}>
              <span className="pulse" />
              Available now
            </span>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/business">Business</Link></li>
              <li><Link href="/services/residential">Residential &amp; Home Office</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/remote-support">Remote Support</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li>Serving New Jersey</li>
            </ul>
          </div>
        </div>
        <hr className="hair" style={{ background: "rgba(240,237,228,.14)", margin: "clamp(2.5rem,5vw,3.5rem) 0 1.5rem" }} />
        <div className="row between" style={{ gap: "1rem" }}>
          <p className="tiny" style={{ color: "var(--ink-4)", margin: 0 }}>
            &copy; {new Date().getFullYear()} Double Click Computing. All rights reserved.
          </p>
          <p className="tiny" style={{ color: "var(--ink-4)", margin: 0 }}>
            In business since 1987 &mdash; New Jersey&apos;s trusted IT partner
          </p>
        </div>
      </div>
    </footer>
  );
}

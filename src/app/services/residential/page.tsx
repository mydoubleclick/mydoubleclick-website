import type { Metadata } from "next";
import Link from "next/link";
import type { GfxName } from "@/components/gfx";
import { Arw, Cta, PageHero, Tile } from "@/components/site";

export const metadata: Metadata = {
  title: "Residential & Home Office IT",
  description:
    "Friendly home computer repair, networking, virus removal, and remote support for NJ homeowners and home office workers.",
};

const services: { title: string; description: string; href: string; gfx: GfxName }[] = [
  {
    title: "Computer Repair & Tune-Up",
    description: "Slow computer? Strange errors? Hardware failure? We diagnose and fix it — Windows and Mac.",
    href: "/services/residential/computer-repair",
    gfx: "monitor",
  },
  {
    title: "Home Network Setup",
    description:
      "Wi-Fi that actually covers your whole home, wired connections where you need them, and a router that works.",
    href: "/services/residential/home-networking",
    gfx: "mesh",
  },
  {
    title: "Virus & Malware Removal",
    description: "Full cleanup of infected machines, followed by endpoint security setup so it doesn't happen again.",
    href: "/services/residential/virus-removal",
    gfx: "layers",
  },
  {
    title: "New Device Setup",
    description:
      "Got a new computer, tablet, or phone? We get everything configured, transferred, and working from day one.",
    href: "/services/residential/new-device-setup",
    gfx: "fleet",
  },
  {
    title: "Data Backup & Recovery",
    description: "Set up automated backups and recover lost files before a hardware failure becomes a disaster.",
    href: "/services/residential/data-backup",
    gfx: "cloud",
  },
  {
    title: "Home Office Support",
    description: "VPN, printers, video calls, shared drives — we make working from home actually work.",
    href: "/services/residential/home-office",
    gfx: "room",
  },
  {
    title: "Security Setup",
    description: "Antivirus, password managers, two-factor authentication. Peace of mind for you and your family.",
    href: "/services/residential/security-setup",
    gfx: "home",
  },
  {
    title: "Remote Support",
    description:
      "Many issues can be solved remotely in minutes. No waiting around — we connect to your computer and fix it live.",
    href: "/services/residential/remote-support",
    gfx: "remote",
  },
];

export default function ResidentialServices() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Residential &amp;
            <br />
            Home Office.
          </>
        }
        lede="Friendly, patient, no-jargon IT help for homeowners and remote workers. We come to you, or connect remotely — whatever gets you back up fastest."
      >
        <Link href="/remote-support" className="btn btn-sage btn-lg">
          Remote Support <Arw />
        </Link>
        <Link href="/contact" className="btn btn-line btn-lg">
          Schedule a Visit
        </Link>
      </PageHero>

      <section className="pad-s">
        <div className="wrap">
          <div className="cols-3">
            {services.map((s) => (
              <Tile key={s.href} href={s.href} gfx={s.gfx} title={s.title}>
                {s.description}
              </Tile>
            ))}
          </div>
        </div>
      </section>

      <section className="pad arc-top" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="stack g-md" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span className="eyebrow">How it works</span>
            <h2 className="display d2">Two ways to get help.</h2>
          </div>
          <div className="cols-2">
            <div className="panel-pale rise" style={{ padding: "clamp(1.75rem,3vw,2.5rem)" }}>
              <span className="eyebrow eyebrow-sage">Option 01</span>
              <h3 className="display d3" style={{ margin: ".75rem 0 .9rem" }}>
                Remote support
              </h3>
              <p className="small">
                Many issues can be solved remotely in minutes. No waiting around &mdash; we
                connect to your computer and fix it live. We use Splashtop SOS: you share a
                session code, you can watch everything we do in real time, and you can end the
                session instantly by closing the app.
              </p>
              <Link href="/remote-support" className="btn btn-line" style={{ marginTop: ".5rem" }}>
                Get remote support <Arw />
              </Link>
            </div>
            <div className="panel-ink rise" style={{ padding: "clamp(1.75rem,3vw,2.5rem)" }}>
              <span className="eyebrow" style={{ color: "var(--sage)" }}>
                Option 02
              </span>
              <h3 className="display d3" style={{ margin: ".75rem 0 .9rem" }}>
                On-site visit
              </h3>
              <p className="small on-ink">
                Some problems require hands on hardware. We come to your home &mdash; same or
                next day in most cases &mdash; and we stay until it&apos;s resolved. On-site
                service is available across 13 New Jersey counties.
              </p>
              <Link href="/contact" className="btn btn-pale" style={{ marginTop: ".5rem" }}>
                Schedule a visit <Arw />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Cta title="Need help right now?" lede="Remote or on-site — we'll get you sorted, usually same day." />
    </>
  );
}

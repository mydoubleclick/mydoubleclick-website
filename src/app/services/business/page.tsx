import type { Metadata } from "next";
import Link from "next/link";
import type { GfxName } from "@/components/gfx";
import { Arw, Cta, IndustriesSplit, PageHero, Partners, Tile } from "@/components/site";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

export const metadata: Metadata = {
  title: "Managed IT Services",
  description:
    "Managed IT services, cybersecurity, networking, and on-site support for small and mid-sized NJ businesses.",
};

const services: { title: string; description: string; href: string; gfx: GfxName }[] = [
  {
    title: "Managed IT & Help Desk",
    description:
      "Ongoing monitoring and management of your IT infrastructure. One number to call when anything goes wrong.",
    href: "/services/business/managed-it",
    gfx: "monitor",
  },
  {
    title: "Endpoint Security",
    description:
      "Bitdefender GravityZone protection across all your desktops and laptops. Enterprise-grade antivirus and threat detection.",
    href: "/services/business/endpoint-security",
    gfx: "layers",
  },
  {
    title: "Firewall & Network Security",
    description:
      "Fortinet FortiGate firewall installation, configuration, and ongoing management. Secure, reliable business networking.",
    href: "/services/business/firewall-networking",
    gfx: "net",
  },
  {
    title: "Cloud Backup",
    description:
      "Backblaze-powered cloud backup for business-critical data. Automated, offsite, and recoverable when you need it.",
    href: "/services/business/cloud-backup",
    gfx: "cloud",
  },
  {
    title: "On-Site Support",
    description:
      "When remote isn't enough, we come to your office. Hardware failures, new setups, cabling, and more.",
    href: "/services/business/on-site-support",
    gfx: "rack",
  },
  {
    title: "Device Procurement & Setup",
    description:
      "We source, configure, and deploy Windows and Mac workstations so they're ready for your team from day one.",
    href: "/services/business/device-setup",
    gfx: "fleet",
  },
  {
    title: "Remote Monitoring (RMM)",
    description:
      "Atera-powered RMM keeps us aware of your systems 24/7 — updates, alerts, performance, and health monitoring.",
    href: "/services/business/remote-monitoring",
    gfx: "remote",
  },
  {
    title: "MDM & Mobile Devices",
    description:
      "Mobile device management for iPhones, iPads, and company laptops. Policy enforcement, remote wipe, and compliance.",
    href: "/services/business/mdm",
    gfx: "mesh",
  },
];

export default function BusinessServices() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Managed IT
            <br />
            Services.
          </>
        }
        lede="Proactive, reliable IT management for small and mid-sized NJ businesses. From endpoint security to on-site support — we handle the tech so you can focus on your business."
      >
        <Link href="/contact" className="btn btn-sage btn-lg">
          Schedule a Free Assessment <Arw />
        </Link>
        <a href={PHONE_HREF} className="btn btn-line btn-lg">
          Call {PHONE_DISPLAY}
        </a>
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

      <Partners />

      <section className="pad arc-top" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <IndustriesSplit />
        </div>
      </section>

      <Cta title="Ready to get started?" lede="We'll assess your setup and give you a clear quote — no obligation." />
    </>
  );
}

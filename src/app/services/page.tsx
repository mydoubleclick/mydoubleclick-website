import type { Metadata } from "next";
import Link from "next/link";
import type { GfxName } from "@/components/gfx";
import { Arw, Cta, Frame, PageHero } from "@/components/site";

export const metadata: Metadata = {
  title: "IT Services",
  description:
    "Managed IT services for businesses and residential clients in New Jersey. Cybersecurity, networking, backup, and on-site support.",
};

const categories: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  cta: string;
  gfx: GfxName;
}[] = [
  {
    href: "/services/business",
    eyebrow: "01 · Business",
    title: "Managed IT Services",
    description:
      "Comprehensive managed IT for small and mid-sized businesses. Everything from firewalls and endpoint security to on-site support and device deployment.",
    items: [
      "Managed IT & Help Desk",
      "Endpoint Security (Bitdefender)",
      "Firewall & Networking (Fortinet)",
      "Cloud Backup (Backblaze)",
      "On-site & Remote Support",
      "Device Setup & Deployment",
      "MDM & Mobile Devices",
    ],
    cta: "Managed IT Services Details",
    gfx: "servers",
  },
  {
    href: "/services/residential",
    eyebrow: "02 · Residential",
    title: "Residential & Home Office",
    description:
      "Friendly, no-jargon IT help for homeowners and remote workers. We come to you or connect remotely — whatever's fastest.",
    items: [
      "Computer Repair & Tune-up",
      "Home Network Setup",
      "Virus & Malware Removal",
      "New Device Setup",
      "Data Backup & Recovery",
      "Home Office Networking",
      "Remote Support",
    ],
    cta: "Residential Details",
    gfx: "mesh",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services."
        lede="Whether you run a business or just need your home computer working again, we have the right level of support for you."
      />

      <section className="pad-s">
        <div className="wrap">
          {categories.map((cat, i) => (
            <div key={cat.href} className={`svc rise${i === categories.length - 1 ? " hair-end" : ""}`}>
              <Frame gfx={cat.gfx} variant="arch-sm" className="svc-thumb" />
              <div className="stack g-sm">
                <span className="eyebrow eyebrow-sage">{cat.eyebrow}</span>
                <h2 className="display d3">{cat.title}</h2>
                <p className="small mw-md" style={{ margin: 0 }}>
                  {cat.description}
                </p>
                <div className="row g-xs" style={{ marginTop: ".35rem" }}>
                  {cat.items.map((item) => (
                    <span key={item} className="chip chip-line">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={cat.href} className="btn btn-line" style={{ justifySelf: "start" }}>
                {cat.cta} <Arw />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Cta
        title="Not sure what you need?"
        lede="Just reach out. We'll ask a few questions and point you in the right direction — no pressure."
      />
    </>
  );
}

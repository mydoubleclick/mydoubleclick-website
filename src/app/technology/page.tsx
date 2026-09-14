import type { Metadata } from "next";
import Link from "next/link";
import { technologyCategories } from "@/data/technology";
import { Arw, Cta, PageHero, Tile } from "@/components/site";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Smart home automation, cybersecurity, AI, Wi-Fi, security cameras, conference rooms, and more — installed, integrated, and supported for NJ businesses and homes.",
  alternates: { canonical: "https://www.mydoubleclick.com/technology" },
};

export default function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={
          <>
            Beyond the
            <br />
            computer.
          </>
        }
        lede="Smart homes, AI, security cameras, conference rooms, and the latest devices — we install, integrate, and support the technology businesses and families rely on."
      >
        <Link href="/contact" className="btn btn-sage btn-lg">
          Get in Touch <Arw />
        </Link>
      </PageHero>

      <section className="pad-s">
        <div className="wrap">
          <div className="cols-3">
            {technologyCategories.map((cat) => (
              <Tile key={cat.slug} href={`/technology/${cat.slug}`} gfx={cat.gfx} title={cat.title}>
                {cat.products.slice(0, 3).map((p) => p.brand).join(" · ")}
              </Tile>
            ))}
          </div>
          <p className="tiny tc" style={{ marginTop: "clamp(2.5rem,5vw,3.5rem)" }}>
            Product and brand names are trademarks of their respective owners and are listed to
            show the technology we work with.
          </p>
        </div>
      </section>

      <section className="pad arc-top" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="wrap tc">
          <span className="eyebrow" style={{ color: "var(--sage)" }}>
            Proactive monitoring. Instant response.
          </span>
          <p className="display d2 mx" style={{ marginTop: "1rem", maxWidth: "36rem" }}>
            Technology problems solved before you even know they exist.
          </p>
        </div>
      </section>

      <Cta title="Let's talk about your setup." lede="Tell us what you're trying to do and we'll tell you what it takes." />
    </>
  );
}

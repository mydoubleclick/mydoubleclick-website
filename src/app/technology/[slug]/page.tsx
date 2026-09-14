import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getTechnologyCategory,
  technologyCategories,
  type TechPoint,
} from "@/data/technology";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";
import { Arw, CheckIcon, Cta, Frame } from "@/components/site";

// Only the categories defined in data/technology.ts exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return technologyCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getTechnologyCategory(slug);
  if (!cat) return {};
  return {
    title: cat.title,
    description: `${cat.summary} Installed and supported for New Jersey businesses and homes by Double Click Computing.`,
    alternates: { canonical: `https://www.mydoubleclick.com/technology/${cat.slug}` },
  };
}

const steps = [
  { title: "Recommend", description: "We learn what you need and recommend technology that fits — honestly, with no upselling." },
  { title: "Install & Connect", description: "We set it up, connect it securely to your network, and make sure it works with what you already have." },
  { title: "Support", description: "We show you how to use it and stay on call for updates, questions, and problems." },
];

function PointColumn({ eyebrow, title, items }: { eyebrow: string; title: string; items: TechPoint[] }) {
  return (
    <div className="stack">
      <span className="eyebrow eyebrow-sage">{eyebrow}</span>
      <h2 className="display d3" style={{ margin: ".6rem 0 1.25rem" }}>
        {title}
      </h2>
      <div className="hair-end">
        {items.map((item) => (
          <div key={item.label} className="check-row rise">
            <span className="check">
              <CheckIcon />
            </span>
            <div>
              <h3>{item.label}</h3>
              <p className="small">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function TechnologyCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getTechnologyCategory(slug);
  if (!cat) notFound();

  const index = technologyCategories.findIndex((c) => c.slug === cat.slug);
  const related = [1, 2, 3].map(
    (offset) => technologyCategories[(index + offset) % technologyCategories.length]
  );

  return (
    <>
      {/* Hero */}
      <section className="phero">
        <div className="wrap">
          <div className="split split-a">
            <div className="stack g-lg">
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link href="/technology">Technology</Link>
                <span aria-hidden="true">/</span>
                <span className="sage">{cat.shortTitle}</span>
              </nav>
              <h1 className="display d2 mw-lg">{cat.title}</h1>
              <p className="lede mw-md" style={{ margin: 0 }}>
                {cat.intro}
              </p>
              <div className="row g-sm">
                <Link href="/contact" className="btn btn-sage btn-lg">
                  Talk to Our Team <Arw />
                </Link>
                <a href={PHONE_HREF} className="btn btn-line btn-lg">
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <Frame gfx={cat.gfx} style={{ aspectRatio: "1/1", minHeight: "18rem" }} />
          </div>
        </div>
      </section>

      {/* Business & home */}
      <section className="pad-s">
        <div className="wrap">
          {cat.home ? (
            <div className="cols-2" style={{ gap: "clamp(2rem,5vw,4.5rem)" }}>
              <PointColumn eyebrow="Business" title="For your business" items={cat.business} />
              <PointColumn eyebrow="Residential" title="For your home" items={cat.home} />
            </div>
          ) : (
            <div className="mw-lg">
              <PointColumn eyebrow="Business" title="For your business" items={cat.business} />
            </div>
          )}
        </div>
      </section>

      {/* Products */}
      <section className="pad arc-top" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="split split-a" style={{ alignItems: "end", marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="stack g-md">
              <span className="eyebrow">Brands &amp; products</span>
              <h2 className="display d2">
                Products we install
                <br />
                &amp; support.
              </h2>
            </div>
            <p className="lede mw-sm" style={{ margin: 0 }}>
              We work with the mainstream brands you already know &mdash; and we&apos;ll help you
              pick the one that fits your space, budget, and the devices you already own.
            </p>
          </div>

          <div className="tech-flow rise">
            {cat.products.map((p) => (
              <div key={p.brand} className="tech">
                <b>{p.brand}</b>
                <span>{p.products}</span>
              </div>
            ))}
          </div>

          {cat.notes && cat.notes.length > 0 && (
            <div className="panel-sage mw-lg" style={{ padding: "1.5rem 1.75rem", marginTop: "clamp(2rem,4vw,3rem)" }}>
              <p className="eyebrow eyebrow-sage" style={{ margin: 0 }}>
                Good to know
              </p>
              <ul className="small" style={{ margin: ".75rem 0 0", paddingLeft: "1.1rem" }}>
                {cat.notes.map((note) => (
                  <li key={note} style={{ marginTop: ".35rem" }}>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="tiny" style={{ marginTop: "2rem", marginBottom: 0 }}>
            Product and brand names are trademarks of their respective owners and are listed to
            show the technology we work with.
          </p>
        </div>
      </section>

      {/* How we help */}
      <section className="pad">
        <div className="wrap">
          <div className="stack g-md" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span className="eyebrow">How we help</span>
            <h2 className="display d2">From the box to &ldquo;it just works.&rdquo;</h2>
          </div>
          <div className="cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="stack g-sm rise">
                <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display d4">{s.title}</h3>
                <p className="small" style={{ margin: 0 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="pad-s">
        <div className="wrap">
          <div className="row between g-md" style={{ marginBottom: "1.5rem" }}>
            <span className="eyebrow">More technology</span>
            <Link href="/technology" className="btn btn-line btn-sm">
              View all <Arw />
            </Link>
          </div>
          <div className="tech-flow">
            {related.map((r) => (
              <Link key={r.slug} className="tech" href={`/technology/${r.slug}`}>
                <b>{r.title}</b>
                <span>{r.products.slice(0, 3).map((p) => p.brand).join(" · ")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta title="Let's talk about your setup." lede="Tell us what you're trying to do and we'll tell you what it takes." />
    </>
  );
}

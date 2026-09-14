import Link from "next/link";
import type { GfxName } from "@/components/gfx";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";
import { Arw, CheckIcon, Cta, Frame } from "@/components/site";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface IncludesItem {
  label: string;
  detail?: string;
}

interface ServiceDetailPageProps {
  breadcrumb: string;
  breadcrumbHref: string;
  tag: string;
  title: string;
  description: string;
  includes: IncludesItem[];
  steps?: Step[];
  notes?: string[];
  /** Illustration shown in the hero arch */
  gfx: GfxName;
  /** Extra content rendered before the closing call to action */
  children?: React.ReactNode;
}

export default function ServiceDetailPage({
  breadcrumb,
  breadcrumbHref,
  tag,
  title,
  description,
  includes,
  steps,
  notes,
  gfx,
  children,
}: ServiceDetailPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="phero">
        <div className="wrap">
          <div className="split split-a">
            <div className="stack g-lg">
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link href="/services">Services</Link>
                <span aria-hidden="true">/</span>
                <Link href={breadcrumbHref}>{breadcrumb}</Link>
                <span aria-hidden="true">/</span>
                <span className="sage">{tag}</span>
              </nav>
              <h1 className="display d2 mw-lg">{title}</h1>
              <p className="lede mw-md" style={{ margin: 0 }}>
                {description}
              </p>
              <div className="row g-sm">
                <Link href="/contact" className="btn btn-sage btn-lg">
                  Get a Free Assessment <Arw />
                </Link>
                <a href={PHONE_HREF} className="btn btn-line btn-lg">
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <Frame gfx={gfx} style={{ aspectRatio: "1/1", minHeight: "18rem" }} />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="pad-s">
        <div className="wrap">
          <div className="split split-a" style={{ alignItems: "start" }}>
            <div className="stack g-md sticky-col">
              <span className="eyebrow">What&apos;s included</span>
              <h2 className="display d2">
                Everything
                <br />
                we handle.
              </h2>
              {notes && notes.length > 0 && (
                <div className="panel-sage" style={{ padding: "1.25rem 1.5rem", marginTop: ".5rem" }}>
                  <p className="eyebrow eyebrow-sage" style={{ margin: 0 }}>
                    Good to know
                  </p>
                  <ul className="small" style={{ margin: ".6rem 0 0", paddingLeft: "1.1rem" }}>
                    {notes.map((note) => (
                      <li key={note} style={{ marginTop: ".3rem" }}>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="hair-end">
              {includes.map((item) => (
                <div key={item.label} className="check-row rise">
                  <span className="check">
                    <CheckIcon />
                  </span>
                  <div>
                    <h3>{item.label}</h3>
                    {item.detail && <p className="small">{item.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      {steps && steps.length > 0 && (
        <section className="pad arc-top" style={{ background: "var(--paper-2)" }}>
          <div className="wrap">
            <div className="stack g-md" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
              <span className="eyebrow">How it works</span>
              <h2 className="display d2">Three simple steps.</h2>
            </div>
            <div className="cols-3">
              {steps.map((s) => (
                <div key={s.step} className="stack g-sm rise">
                  <span className="step-n">{s.step.padStart(2, "0")}</span>
                  <h3 className="display d4">{s.title}</h3>
                  <p className="small" style={{ margin: 0 }}>
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {children}

      <Cta title="Ready to get started?" lede="Reach out and we'll get back to you the same day." />
    </>
  );
}

import Link from "next/link";
import { technologyCategories } from "@/data/technology";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/data/site";
import type { GfxName } from "@/components/gfx";
import NJMap from "@/components/NJMap";
import { Arw, CountyChips, Cta, Frame, IndustriesSplit, Partners } from "@/components/site";

// PLACEHOLDER testimonials — replace with real client quotes before launch
const testimonials = [
  {
    quote:
      "Jason has been handling our IT for over ten years. When something breaks, he answers the phone and fixes it — usually the same day. I don't know what we'd do without him.",
    name: "Alan G.",
    role: "Law Office, NJ",
  },
  {
    quote:
      "We had a server failure on a Monday morning and Jason had us back up and running by noon. He also set up proper backups so it can never happen the same way again.",
    name: "Karen W.",
    role: "Interior Design Firm, NJ",
  },
  {
    quote:
      "I'm not a tech person at all. Jason explains everything in plain English, never makes me feel dumb, and always fixes whatever's wrong. He's the only person I call.",
    name: "Linda M.",
    role: "Residential Client",
  },
  {
    quote:
      "Double Click set up our entire office network and security when we moved locations. Everything worked perfectly from day one. Highly recommend for any small business.",
    name: "Mark S.",
    role: "Business Owner, NJ",
  },
];

const stats = [
  { value: "38+", label: "Years in business" },
  { value: "500+", label: "Endpoints managed" },
  { value: "NJ", label: "Based & on-site" },
  { value: "24/7", label: "Remote support" },
];

const services: {
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  href: string;
  gfx: GfxName;
}[] = [
  {
    eyebrow: "01 · Business",
    title: "Managed IT Services",
    description:
      "Managed IT, cybersecurity, networking, and on-site support tailored for small and mid-sized businesses. One point of contact for everything tech.",
    chips: ["Endpoint security", "Firewall & network", "Cloud backup", "RMM", "MDM"],
    href: "/services/business",
    gfx: "servers",
  },
  {
    eyebrow: "02 · Residential",
    title: "Residential & Home Office",
    description:
      "Home computer repair, setup, networking, and security for homeowners and remote workers. We come to you, or connect remotely.",
    chips: ["Repair & tune-up", "Home Wi-Fi", "Virus removal", "New device setup"],
    href: "/services/residential",
    gfx: "mesh",
  },
  {
    eyebrow: "03 · Anywhere",
    title: "Remote Support",
    description:
      "Fast remote assistance without waiting for a truck roll. Download Splashtop SOS and we can connect to your device in minutes.",
    chips: ["Connect in minutes", "You watch live", "End anytime"],
    href: "/remote-support",
    gfx: "monitor",
  },
];

const whyUs = [
  {
    title: "38 Years of Experience",
    description: "Solving technology problems for New Jersey since 1987. Deep expertise you can trust.",
  },
  {
    title: "Real Accountability",
    description:
      "A dedicated team that knows your setup and owns the outcome — not a ticketing queue or offshore help desk.",
  },
  {
    title: "Business & Consumer",
    description:
      "Equally comfortable deploying enterprise firewalls and helping a homeowner set up a new laptop.",
  },
  {
    title: "Local & On-Site",
    description:
      "New Jersey-based and willing to come to you. Real on-site support when remote just isn't enough.",
  },
];

const faqs = [
  {
    q: "How quickly do you respond to support requests?",
    a: "Same day — usually within a few hours during business hours. For urgent issues, call or text us at (888) 9-CLICK-9 and we'll get back to you fast.",
  },
  {
    q: "Do you work with both Windows and Mac?",
    a: "Yes. We support Windows 10/11, macOS, and mixed environments. Whether your office is all-PC, all-Mac, or a mix, we've got you covered.",
  },
  {
    q: "What's the difference between remote and on-site support?",
    a: "Remote support lets us connect to your computer over the internet and fix most software issues in minutes — no waiting for a visit. On-site support means we come to you for hardware issues, installations, cabling, or anything that can't be done remotely.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. We don't lock you into long-term contracts. Most business clients are on month-to-month arrangements. We earn your business every month.",
  },
  {
    q: "Is it safe to let someone access my computer remotely?",
    a: "Yes. We use Splashtop SOS — you share a session code (so we can only connect when you invite us), you can watch everything we do in real time, and you can end the session instantly by closing the app.",
  },
  {
    q: "How is this different from taking my computer to a big box store?",
    a: "We come to you, we know your specific setup, and you work with a team that already knows your history. No ticket numbers, no drop-offs, no \"it might take a week.\" Just direct access to local experts who treat your problem like it matters.",
  },
  {
    q: "Can you help if I'm not sure what's wrong?",
    a: "Absolutely. Just describe what's happening — slow, crashing, weird noises, won't connect — and we'll diagnose from there. You don't need to know the technical answer before you call.",
  },
  {
    q: "What does managed IT actually include for businesses?",
    a: "Ongoing monitoring of your systems, patch management, help desk support for your staff, vendor coordination, user account management, and proactive planning. Think of it as having an IT department without hiring one.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "clamp(3.5rem,7vw,6.5rem) 0 0" }}>
        <div className="wrap">
          <div className="split split-a">
            <div className="stack g-lg hero-copy">
              <span className="eyebrow eyebrow-sage">Trusted IT &mdash; New Jersey since 1987</span>
              <h1 className="display d1">
                Technology that works.
                <br />
                Support you can&nbsp;count&nbsp;on.
              </h1>
              <p className="lede mw-md">
                Double Click Computing has been the trusted IT partner for New Jersey
                businesses and homeowners for over 38 years. Managed IT, cybersecurity,
                networking, and friendly on-site support &mdash; done right.
              </p>
              <div className="row g-sm">
                <Link href="/contact" className="btn btn-sage btn-lg">
                  Get a Free IT Assessment <Arw />
                </Link>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-lg">
                  Book an Appointment
                </a>
              </div>
              <p className="tiny">
                Or call us:{" "}
                <a href={PHONE_HREF} style={{ color: "var(--ink)", fontWeight: 600 }}>
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
            <Frame gfx="rack" style={{ aspectRatio: "4/5", minHeight: "22rem" }} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pad-s">
        <div className="wrap">
          <div className="stats rise">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <b className="num">{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="pad" id="services">
        <div className="wrap">
          <div className="split split-a" style={{ alignItems: "end", marginBottom: "clamp(2rem,4vw,3.5rem)" }}>
            <div className="stack g-md">
              <span className="eyebrow">What we do</span>
              <h2 className="display d2">
                The full spectrum
                <br />
                of IT support.
              </h2>
            </div>
            <p className="lede mw-sm">
              From enterprise-grade managed services to friendly home computer help &mdash;
              one point of contact for everything tech.
            </p>
          </div>

          {services.map((s, i) => (
            <div key={s.href} className={`svc rise${i === services.length - 1 ? " hair-end" : ""}`}>
              <Frame gfx={s.gfx} variant="arch-sm" className="svc-thumb" />
              <div className="stack g-sm">
                <span className="eyebrow eyebrow-sage">{s.eyebrow}</span>
                <h3 className="display d3">{s.title}</h3>
                <p className="small mw-md" style={{ margin: 0 }}>
                  {s.description}
                </p>
                <div className="row g-xs" style={{ marginTop: ".35rem" }}>
                  {s.chips.map((c) => (
                    <span key={c} className="chip chip-line">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={s.href} className="btn btn-line" style={{ justifySelf: "start" }}>
                Learn more <Arw />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="pad arc-top" id="technology" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="split split-a" style={{ alignItems: "end", marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="stack g-md">
              <span className="eyebrow">Technology</span>
              <h2 className="display d2">
                Beyond the
                <br />
                computer.
              </h2>
            </div>
            <div className="stack g-md">
              <p className="lede mw-sm" style={{ margin: 0 }}>
                Smart homes, AI, security cameras, conference rooms, and the latest devices
                &mdash; we install, integrate, and support the technology businesses and
                families rely on.
              </p>
              <Link href="/technology" className="btn btn-ink" style={{ alignSelf: "start" }}>
                Explore Technology <Arw />
              </Link>
            </div>
          </div>

          <div className="tech-flow rise">
            {technologyCategories.map((cat) => (
              <Link key={cat.slug} className="tech" href={`/technology/${cat.slug}`}>
                <b>{cat.title}</b>
                <span>{cat.products.slice(0, 3).map((p) => p.brand).join(" · ")}</span>
              </Link>
            ))}
          </div>

          <div className="tc mx mw-lg" style={{ marginTop: "clamp(3rem,6vw,5rem)" }}>
            <span className="eyebrow eyebrow-sage">Proactive monitoring. Instant response.</span>
            <p className="display d3 mx" style={{ marginTop: "1rem", maxWidth: "34rem" }}>
              Technology problems solved before you even know they exist.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="pad" id="why">
        <div className="wrap">
          <div className="split split-a" style={{ alignItems: "start" }}>
            <div className="stack g-md sticky-col">
              <span className="eyebrow">Why Double Click Computing</span>
              <h2 className="display d2">
                A real local team
                <br />
                that shows up.
              </h2>
              <p className="lede mw-xs" style={{ margin: 0 }}>
                In a world of impersonal help desks and offshore support, we offer something
                increasingly rare: a real local team that knows your setup, answers the phone,
                and shows up.
              </p>
              <Link href="/about" className="btn btn-line" style={{ alignSelf: "start", marginTop: ".5rem" }}>
                Our story <Arw />
              </Link>
            </div>
            <div className="stack">
              {whyUs.map((item, i) => (
                <div key={item.title} className={`why-row rise${i === whyUs.length - 1 ? " hair-end" : ""}`}>
                  <span className="why-n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display d4">{item.title}</h3>
                    <p className="small" style={{ margin: ".4rem 0 0" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <Partners />
      <section style={{ paddingBottom: "clamp(3rem,5vw,4.5rem)" }}>
        <div className="wrap">
          <div className="tc mx mw-md">
            <p className="display d3" style={{ margin: 0 }}>
              Enterprise tools. Local expertise.
              <br />
              <span className="sage">Personal service.</span>
            </p>
            <p className="small mx mw-sm" style={{ marginTop: ".9rem" }}>
              The security and reliability of a large IT firm &mdash; with a local team that
              actually picks up the phone.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pad">
        <div className="wrap">
          <div className="stack g-md" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span className="eyebrow">What clients say</span>
            <h2 className="display d2 mw-lg">
              38 years of relationships &mdash; built one solved problem at a time.
            </h2>
          </div>
          <div className="cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="quote rise">
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">
                    {initials(t.name)}
                  </span>
                  <span>
                    <b style={{ fontWeight: 600 }}>{t.name}</b>
                    <br />
                    <span className="tiny">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="pad arc-top" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="wrap">
          <div className="split split-a" style={{ alignItems: "center" }}>
            <div className="stack g-md">
              <span className="eyebrow" style={{ color: "var(--sage)" }}>
                Our promise
              </span>
              <h2 className="display d2">
                100% Satisfaction
                <br />
                Guarantee.
              </h2>
            </div>
            <div className="stack g-lg">
              <p className="lede on-ink" style={{ margin: 0 }}>
                If you&apos;re not completely satisfied with the work, we make it right &mdash;
                no arguments, no runaround. That&apos;s been our commitment to every client for
                38 years, and it&apos;s not changing.
              </p>
              <div className="row g-sm">
                <Link href="/contact" className="btn btn-pale btn-lg">
                  Schedule a Free Assessment <Arw />
                </Link>
              </div>
            </div>
          </div>
          <hr className="hair" style={{ background: "rgba(240,237,228,.14)", margin: "clamp(3rem,6vw,5rem) 0" }} />
          <div className="tc mx mw-md">
            <p className="display d3" style={{ margin: 0 }}>
              Focus on your business.
              <br />
              We&apos;ll handle the tech.
            </p>
            <p className="small on-ink" style={{ marginTop: ".9rem" }}>
              One call. One team. Everything IT &mdash; taken care of.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="pad">
        <div className="wrap">
          <div className="split split-b" style={{ alignItems: "start" }}>
            <div className="stack g-md">
              <span className="eyebrow">Where we serve</span>
              <h2 className="display d2">
                Right around
                <br />
                the corner.
              </h2>
              <p className="lede mw-sm" style={{ margin: 0 }}>
                On-site service across 13 New Jersey counties &mdash; plus remote support
                available statewide and anywhere in the country.
              </p>
              <div className="stack g-sm" style={{ marginTop: ".75rem" }}>
                <p className="eyebrow" style={{ margin: 0 }}>
                  On-site service counties
                </p>
                <CountyChips />
              </div>
              <div className="panel-sage" style={{ padding: "1.25rem 1.5rem", marginTop: ".5rem" }}>
                <p className="eyebrow eyebrow-sage" style={{ margin: 0 }}>
                  Remote support available everywhere
                </p>
                <p className="small" style={{ margin: ".5rem 0 0" }}>
                  Not in our on-site area? We provide remote support across all of New Jersey
                  and throughout the United States.
                </p>
              </div>
            </div>
            <div className="map-panel rise">
              <NJMap />
            </div>
          </div>

          <div style={{ marginTop: "clamp(3.5rem,7vw,6rem)" }}>
            <IndustriesSplit />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pad arc-top" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="split split-a" style={{ alignItems: "start" }}>
            <div className="stack g-md sticky-col">
              <span className="eyebrow">FAQ</span>
              <h2 className="display d2">
                Common
                <br />
                questions.
              </h2>
              <p className="small mw-xs" style={{ margin: 0 }}>
                Answers to what most clients ask before getting started.
              </p>
              <Link href="/contact" className="btn btn-line" style={{ alignSelf: "start", marginTop: ".5rem" }}>
                Ask Us Directly <Arw />
              </Link>
            </div>
            <div className="stack hair-end">
              {faqs.map((faq, i) => (
                <details key={faq.q} className="faq" open={i === 0}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta
        title="Ready to stop fighting your technology?"
        lede="Schedule a free IT assessment — we'll review your setup, find the gaps, and tell you exactly what we'd fix and why."
      />
    </>
  );
}

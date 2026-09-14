import type { Metadata } from "next";
import Link from "next/link";
import NJMap from "@/components/NJMap";
import { Arw, CheckIcon, CountyChips, Cta, Frame, PageHero, Partners } from "@/components/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "38 years of IT expertise serving New Jersey businesses and homeowners. Meet the team behind Double Click Computing.",
};

const timeline = [
  {
    year: "1987",
    title: "Founded",
    desc: "Double Click Computing launched in New Jersey with a simple mission: make technology work for the people using it.",
  },
  {
    year: "2000s",
    title: "Full-Time MSP",
    desc: "Transitioned to a full-time managed services practice, expanding to serve a growing base of businesses and residential clients.",
  },
  {
    year: "Today",
    title: "500+ Managed Endpoints",
    desc: "Serving organizations from 1 employee to hundreds, plus a large residential client base — all across New Jersey.",
  },
];

// Role-focused, not biographies — Jason asked for Zach's role to be featured
// rather than a personal bio.
const team = [
  {
    name: "Jason Hubert",
    initials: "JH",
    role: "Founder & Owner",
    summary:
      "Founded Double Click Computing in 1987 and leads the technical direction of every engagement.",
    duties: [
      { label: "Technical direction", detail: "Managed IT, networking, and security strategy for business and residential clients." },
      { label: "Solutions & systems", detail: "Designing the right technology for each environment — from a single home office to hundreds of employees." },
    ],
  },
  {
    name: "Zach Hubert",
    initials: "ZH",
    role: "Director of Client Experience & Operations",
    summary:
      "Makes sure every client has a great experience — before, during, and after the work is done.",
    duties: [
      { label: "Customer experience & relationships", detail: "Your point of contact for scheduling, questions, and making sure you're happy with the results." },
      { label: "Follow-up", detail: "Checking in after projects and service visits so nothing falls through the cracks." },
      { label: "Project planning & logistics", detail: "Coordinating schedules, equipment, and timelines so installs and projects run smoothly." },
      { label: "New product research & testing", detail: "Hands-on testing of new consumer technology — smart home, wearables, and more — before we recommend it." },
      { label: "Marketing & communications", detail: "Social media and client communications that keep you up to date on what's new." },
    ],
  },
];

const commitments = [
  {
    title: "A Name, Not a Ticket Number",
    desc: "You work with a dedicated team that owns every outcome. You always know who to call — and we always know who you are and how your systems are set up.",
  },
  {
    title: "Depth Behind the Relationship",
    desc: "Behind every engagement is a network of certified vendor partners, engineers, and specialists. The personalized experience of a local IT partner, backed by enterprise-level resources.",
  },
  {
    title: "Honest Assessments",
    desc: "We tell you what you actually need — not what generates the biggest invoice. If a repair isn't worth it or a product isn't right for you, we'll say so.",
  },
  {
    title: "Proactive, Not Reactive",
    desc: "With enterprise-grade endpoint security and remote monitoring, we watch your systems around the clock and address issues before they become outages.",
  },
  {
    title: "On-Site When It Matters",
    desc: "Some problems require hands on hardware. We come to your office or home — same or next day in most cases — and we stay until it's resolved.",
  },
  {
    title: "Long Relationships",
    desc: "Many of our clients have been with us for years — some for decades. That history means faster diagnosis, better solutions, and a team that truly knows your environment.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            About Double
            <br />
            Click Computing.
          </>
        }
        lede="38 years of hands-on IT experience serving New Jersey. A dedicated team. Real accountability."
      />

      {/* Story */}
      <section className="pad-s">
        <div className="wrap">
          <div className="split split-b" style={{ alignItems: "start" }}>
            <Frame gfx="rack" className="sticky-col" style={{ aspectRatio: "4/5", minHeight: "20rem" }} />
            <div className="stack g-md">
              <span className="eyebrow">Our story</span>
              <p className="display d3" style={{ margin: 0 }}>
                Double Click Computing was founded by Jason Hubert in 1987 &mdash; back when the
                PC industry was still finding its footing. What started as a passion for solving
                technology problems has grown into nearly four decades of trusted IT service
                across New Jersey.
              </p>
              <p>
                Today, Double Click Computing is built around a simple idea: when you call, you
                reach a team that knows you &mdash; not a faceless help desk, not a ticketing
                system, not someone reading from a script. We know your setup, your priorities,
                and your history, because we&apos;ve been there for it.
              </p>
              <p>
                Behind that relationship is a full ecosystem of certified technology partners,
                vendor specialists, and industry resources built over 38 years. Whether the
                challenge is a single workstation or a multi-site enterprise environment, we
                bring the depth and connections to handle it &mdash; with the responsiveness
                you&apos;d never get from a large IT firm.
              </p>
              <p>
                Our clients range from solo home office workers and small businesses to
                mid-sized companies and large organizations with hundreds of employees. Every one
                of them gets the same commitment: technology that works, and support that
                actually shows up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pad arc-top" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="cols-3">
            {timeline.map((t) => (
              <div key={t.year} className="stack g-sm rise">
                <span className="step-n">{t.year}</span>
                <h3 className="display d4">{t.title}</h3>
                <p className="small" style={{ margin: 0 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pad">
        <div className="wrap">
          <div className="stack g-md" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span className="eyebrow">Our team</span>
            <h2 className="display d2">
              The people behind
              <br />
              your support.
            </h2>
          </div>
          <div className="cols-2" style={{ gap: "clamp(2rem,5vw,4.5rem)", alignItems: "start" }}>
            {team.map((person) => (
              <div key={person.name} className="stack rise">
                <div className="row g-md">
                  <span className="avatar avatar-lg" aria-hidden="true">
                    {person.initials}
                  </span>
                  <div className="stack">
                    <span className="eyebrow eyebrow-sage">{person.role}</span>
                    <h3 className="display d3" style={{ marginTop: ".35rem" }}>
                      {person.name}
                    </h3>
                  </div>
                </div>
                <p className="lede" style={{ margin: "1.25rem 0 1rem" }}>
                  {person.summary}
                </p>
                <div className="hair-end">
                  {person.duties.map((d) => (
                    <div key={d.label} className="check-row">
                      <span className="check">
                        <CheckIcon />
                      </span>
                      <div>
                        <h3>{d.label}</h3>
                        <p className="small">{d.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="pad">
        <div className="wrap">
          <div className="stack g-md" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span className="eyebrow">How we work</span>
            <h2 className="display d2">
              Six commitments
              <br />
              that don&apos;t change.
            </h2>
          </div>
          <div className="cols-3">
            {commitments.map((c, i) => (
              <div key={c.title} className="stack g-sm rise">
                <span className="why-n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display d4">{c.title}</h3>
                <p className="small" style={{ margin: 0 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners label="Technology partners & platforms we work with" />

      {/* Coverage */}
      <section className="pad">
        <div className="wrap">
          <div className="split split-b" style={{ alignItems: "center" }}>
            <div className="stack g-md">
              <span className="eyebrow">Coverage</span>
              <h2 className="display d2">
                Based in New Jersey.
                <br />
                Available beyond.
              </h2>
              <p className="lede mw-sm" style={{ margin: 0 }}>
                We provide on-site support across 13 New Jersey counties, with remote support
                available statewide and throughout the country. Wherever you are, we can help.
              </p>
              <CountyChips />
              <Link href="/contact" className="btn btn-sage" style={{ alignSelf: "start", marginTop: ".5rem" }}>
                Get in Touch <Arw />
              </Link>
            </div>
            <div className="map-panel rise">
              <NJMap />
            </div>
          </div>
        </div>
      </section>

      <Cta
        title="Let's start a long relationship."
        lede="Schedule a free IT assessment — we'll review your setup, find the gaps, and tell you exactly what we'd fix and why."
      />
    </>
  );
}

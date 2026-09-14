import type { Metadata } from "next";
import Link from "next/link";
import { Arw, Frame, PageHero } from "@/components/site";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

export const metadata: Metadata = {
  title: "Remote Support",
  description:
    "Get instant remote IT support from Double Click Computing. Download Splashtop SOS and connect with our team in minutes.",
};

const SOS_URL = "https://my.splashtop.com/sos/packages/download/RP3ZZLH53LPJ";

const steps = [
  {
    title: "Call or text us",
    description: "Tell us what's happening. No ticket number, no queue — you reach a team that knows your setup.",
  },
  {
    title: "Download Splashtop SOS",
    description: "A small one-time download. Nothing stays running on your machine afterwards.",
  },
  {
    title: "Share your session code",
    description: "We can only connect when you invite us. The code is yours to give.",
  },
  {
    title: "Watch us work",
    description: "You see everything we do in real time, and you can end the session instantly by closing the app.",
  },
];

const faqs = [
  {
    q: "Is it safe to let someone access my computer remotely?",
    a: "Yes. Splashtop SOS requires you to share the session code — we can only connect when you give us that code. You can see everything we do in real time, and you can end the session instantly by closing the app.",
  },
  {
    q: "Does the app stay on my computer after the session?",
    a: "No. Splashtop SOS is a portable app — it doesn't install anything and leaves no background processes running after you close it.",
  },
  {
    q: "What issues can be fixed remotely?",
    a: "Most software issues: slow performance, virus removal, software setup, email configuration, printer issues, Windows/Mac problems, and more. Hardware failures require an on-site visit.",
  },
  {
    q: "How much does remote support cost?",
    a: "Remote support is billed at our standard hourly rate with a 30-minute minimum. Contact us for current rates — we'll always confirm pricing before we start.",
  },
];

export default function RemoteSupport() {
  return (
    <>
      <PageHero
        eyebrow="Remote Support"
        title={
          <>
            Fixed in minutes,
            <br />
            not days.
          </>
        }
        lede="Fast remote assistance without waiting for a truck roll. Download Splashtop SOS and we can connect to your device in minutes."
      >
        <a href="#download" className="btn btn-sage btn-lg">
          Download Splashtop SOS <Arw />
        </a>
        <a href={PHONE_HREF} className="btn btn-line btn-lg">
          Call {PHONE_DISPLAY}
        </a>
      </PageHero>

      {/* Download */}
      <section className="pad-s" id="download" style={{ scrollMarginTop: "6rem" }}>
        <div className="wrap">
          <div className="panel-ink" style={{ padding: "clamp(1.75rem,5vw,3.75rem)" }}>
            <div className="split split-a">
              <div className="stack g-md">
                <span className="eyebrow" style={{ color: "var(--sage)" }}>
                  Splashtop SOS &mdash; secure remote access
                </span>
                <h2 className="display d2">
                  Download the
                  <br />
                  remote support app.
                </h2>
                <p className="on-ink" style={{ margin: 0 }}>
                  Works on Windows 10/11 and macOS. No account needed. The app closes when you do
                  &mdash; nothing is left running on your computer.
                </p>
              </div>
              <div className="stack g-md">
                <a href={SOS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-pale btn-lg">
                  Download Now <Arw />
                </a>
                <p className="tiny" style={{ color: "var(--ink-4)", margin: 0 }}>
                  Automatically detects your operating system (Windows or Mac)
                </p>
                <div className="row g-xs">
                  <a href={`${SOS_URL}#:~:text=Windows-,Download,-Mac%20Download`} target="_blank" rel="noopener noreferrer" className="btn btn-line-inv btn-sm">
                    Windows
                  </a>
                  <a href={`${SOS_URL}#:~:text=Mac-,Download,-Android%20Download`} target="_blank" rel="noopener noreferrer" className="btn btn-line-inv btn-sm">
                    Mac
                  </a>
                  <a href={`${SOS_URL}#:~:text=Android-,Download,-2`} target="_blank" rel="noopener noreferrer" className="btn btn-line-inv btn-sm">
                    Android
                  </a>
                </div>
                <p className="small on-ink" style={{ margin: 0 }}>
                  After downloading, call or text us:{" "}
                  <a href={PHONE_HREF} style={{ color: "var(--paper)", fontWeight: 600 }}>
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="pad-s">
        <div className="wrap">
          <div className="split split-b" style={{ alignItems: "center" }}>
            <div className="stack">
              <span className="eyebrow" style={{ marginBottom: "1rem" }}>
                How it works
              </span>
              {steps.map((s, i) => (
                <div key={s.title} className={`why-row rise${i === steps.length - 1 ? " hair-end" : ""}`}>
                  <span className="why-n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display d4">{s.title}</h3>
                    <p className="small" style={{ margin: ".4rem 0 0" }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Frame gfx="remote" style={{ aspectRatio: "1/1", minHeight: "20rem" }} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pad">
        <div className="wrap">
          <div className="split split-a" style={{ alignItems: "start" }}>
            <div className="stack g-md sticky-col">
              <span className="eyebrow">FAQ</span>
              <h2 className="display d2">
                Common
                <br />
                questions.
              </h2>
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

      {/* On-site */}
      <section className="pad arc-top" style={{ background: "var(--paper-2)" }}>
        <div className="wrap tc">
          <span className="eyebrow eyebrow-sage">Not everything can be done remotely</span>
          <p className="display d2 mx" style={{ marginTop: "1rem", maxWidth: "34rem" }}>
            Hardware, cabling, and new installs get a real visit.
          </p>
          <Link href="/contact" className="btn btn-ink btn-lg" style={{ marginTop: "1.75rem" }}>
            Schedule an on-site visit <Arw />
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Arw, PageHero } from "@/components/site";
import { BOOKING_URL, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Double Click Computing for IT support in New Jersey. Call, email, or fill out the form.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        lede="Have a problem? Need a quote? Just have a question? Reach out — we'll get back to you the same day."
      />

      <section className="pad-s">
        <div className="wrap">
          <div className="split split-a" style={{ alignItems: "start" }}>
            <form
              action="https://formspree.io/f/mojpdoyb"
              method="POST"
              className="panel-pale"
              style={{ padding: "clamp(1.75rem,3vw,2.5rem)" }}
            >
              <span className="eyebrow">Send a message</span>
              <div className="stack g-md" style={{ marginTop: "1.5rem" }}>
                <div className="cols-2" style={{ gap: "1.25rem" }}>
                  <label className="field">
                    <span>Name</span>
                    <input type="text" name="name" required autoComplete="name" placeholder="Your name" />
                  </label>
                  <label className="field">
                    <span>Email</span>
                    <input type="email" name="email" required autoComplete="email" placeholder="you@example.com" />
                  </label>
                </div>
                <div className="cols-2" style={{ gap: "1.25rem" }}>
                  <label className="field">
                    <span>Phone (optional)</span>
                    <input type="tel" name="phone" autoComplete="tel" placeholder="(888) 9-CLICK-9" />
                  </label>
                  <label className="field">
                    <span>I need help with&hellip;</span>
                    <select name="type" required defaultValue="">
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="business">Managed IT Services</option>
                      <option value="residential">Home / Residential</option>
                      <option value="network">Network / Firewall</option>
                      <option value="security">Security / Virus</option>
                      <option value="new-device">New Device Setup</option>
                      <option value="remote">Remote Support</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>
                <label className="field">
                  <span>What&apos;s going on?</span>
                  <textarea
                    name="message"
                    required
                    placeholder="Describe what's happening — you don't need to know the technical answer before you reach out."
                  />
                </label>
                <button type="submit" className="btn btn-sage btn-lg" style={{ width: "100%" }}>
                  Send Message <Arw />
                </button>
                <p className="tiny tc" style={{ margin: 0 }}>
                  We typically respond within a few hours.
                </p>
              </div>
            </form>

            <div className="stack g-md">
              <div className="panel-pale" style={{ padding: "1.5rem" }}>
                <span className="eyebrow">Phone</span>
                <p className="display d3" style={{ margin: ".5rem 0 0" }}>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </p>
              </div>
              <div className="panel-pale" style={{ padding: "1.5rem" }}>
                <span className="eyebrow">Email</span>
                <p className="display d4" style={{ margin: ".5rem 0 0", overflowWrap: "anywhere" }}>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </div>
              <div className="panel-pale" style={{ padding: "1.5rem" }}>
                <span className="eyebrow">Service area</span>
                <p className="display d4" style={{ margin: ".5rem 0 .25rem" }}>
                  New Jersey
                </p>
                <p className="tiny" style={{ margin: 0 }}>
                  On-site &amp; remote available
                </p>
              </div>
              <div className="panel-sage" style={{ padding: "1.5rem" }}>
                <span className="eyebrow eyebrow-sage">Response time</span>
                <p className="small" style={{ margin: ".5rem 0 0" }}>
                  We typically respond within a few hours during business hours. For urgent
                  issues, call or text directly.
                </p>
              </div>
              <div className="panel-ink" style={{ padding: "1.5rem" }}>
                <span className="eyebrow" style={{ color: "var(--sage)" }}>
                  Prefer to schedule?
                </span>
                <h3 className="display d4" style={{ margin: ".6rem 0 1rem" }}>
                  Book an appointment online
                </h3>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-pale">
                  Open booking <Arw />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

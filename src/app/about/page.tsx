import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Double Click Computing",
  description:
    "38 years of IT expertise serving New Jersey businesses and homeowners. Meet Jason Hubert and Double Click Computing.",
};

export default function About() {
  return (
    <>
      {/* Page header */}
      <section className="bg-blue-50 border-b border-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            About Double Click Computing
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            38 years of hands-on IT experience serving New Jersey. One expert.
            Real accountability.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                The Story
              </h2>
              <div className="space-y-5 text-slate-600 text-base leading-relaxed">
                <p>
                  Double Click Computing was founded by Jason Hubert in 1987 —
                  back when the PC industry was still young. What started as a
                  passion for solving technology problems has grown into a
                  38-year career as one of New Jersey&apos;s most trusted IT
                  service providers.
                </p>
                <p>
                  For the last 16–17 years, Double Click has been Jason&apos;s
                  full-time focus. He works directly with every client —
                  there&apos;s no account manager between you and the person
                  doing the work. If you call, Jason answers.
                </p>
                <p>
                  His client base ranges from small businesses and law firms to
                  large corporations like Boll &amp; Branch, as well as
                  homeowners and home office workers who need reliable, no-jargon
                  support.
                </p>
                <p>
                  Jason&apos;s philosophy is simple: technology should work
                  reliably, and when it doesn&apos;t, it should be fixed fast by
                  someone you trust.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  year: "1987",
                  title: "Founded",
                  desc: "Double Click Computing launched in New Jersey.",
                },
                {
                  year: "2000s",
                  title: "Full-Time Focus",
                  desc: "Transitioned to full-time MSP, building a diverse client base of businesses and consumers.",
                },
                {
                  year: "Today",
                  title: "200+ Managed Endpoints",
                  desc: "Serving businesses from 1–300 employees, plus a large residential client base across NJ.",
                },
              ].map((item) => (
                <div
                  key={item.year}
                  className="flex gap-5 p-5 bg-slate-50 rounded-xl border border-slate-200"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                      {item.year}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">
                      {item.title}
                    </div>
                    <div className="text-slate-500 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">
            How We Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Honest Assessments",
                desc: "We tell you what you actually need — not what sells the biggest contract. Sometimes that means telling you a repair isn't worth it.",
              },
              {
                title: "Proactive, Not Reactive",
                desc: "With Bitdefender endpoint security and Atera RMM, we monitor your systems and catch problems before they become outages.",
              },
              {
                title: "No Jargon",
                desc: "Whether you're a CTO or someone who just wants their email to work, we explain things in plain language.",
              },
              {
                title: "On-Site When It Matters",
                desc: "Some things require hands on hardware. We come to your office or home — same day when possible.",
              },
              {
                title: "Remote When It's Faster",
                desc: "Many issues are solved in minutes with remote access tools. No waiting around for a tech to show up.",
              },
              {
                title: "Long Relationships",
                desc: "Most of our clients have been with us for years — some for decades. We know your setup because we've been there for it.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Service Area
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto mb-8">
            We primarily serve clients throughout New Jersey, with on-site
            availability across Monmouth, Ocean, Middlesex, and surrounding
            counties.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

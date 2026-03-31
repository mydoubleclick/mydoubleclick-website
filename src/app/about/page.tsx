import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Double Click Computing",
  description:
    "38 years of IT expertise serving New Jersey businesses and homeowners. Meet the team behind Double Click Computing.",
};

export default function About() {
  return (
    <>
      {/* Page header */}
      <section className="bg-blue-50 border-b border-blue-100 relative overflow-hidden min-h-[220px]">
        <div className="absolute right-0 top-0 w-5/12 h-full hidden lg:block overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1400&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-blue-50/30 to-transparent" />
        </div>
        <div
          className="absolute right-0 top-0 w-5/12 h-full hidden lg:block opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #1e3a5f 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            About Double Click Computing
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            38 years of hands-on IT experience serving New Jersey. A dedicated
            team. Real accountability.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-slate-600 text-base leading-relaxed">
                <p>
                  Double Click Computing was founded by Jason Hubert in 1987 —
                  back when the PC industry was still finding its footing. What
                  started as a passion for solving technology problems has grown
                  into nearly four decades of trusted IT service across New
                  Jersey.
                </p>
                <p>
                  Jason leads every client relationship personally. When you
                  call, you reach him — not a help desk, not a ticketing system,
                  not someone reading from a script. He knows your setup, your
                  priorities, and your history, because he&apos;s been there for it.
                </p>
                <p>
                  Behind that relationship is a full ecosystem of certified
                  technology partners, vendor specialists, and industry resources
                  built over 38 years. Whether the challenge is a single
                  workstation or a multi-site enterprise environment, we bring
                  the depth and connections to handle it — with the
                  responsiveness you&apos;d never get from a large IT firm.
                </p>
                <p>
                  Our clients range from solo home office workers and small
                  businesses to mid-sized companies and large organizations with
                  hundreds of employees. Every one of them gets the same
                  commitment: technology that works, and support that actually
                  shows up.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
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
                  title: "200+ Managed Endpoints",
                  desc: "Serving organizations from 1 employee to hundreds, plus a large residential client base — all across New Jersey.",
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
                title: "A Name, Not a Ticket Number",
                desc: "Jason is your primary point of contact — accountable for every outcome. You always know who to call, and that person always knows who you are.",
              },
              {
                title: "Depth Behind the Relationship",
                desc: "Behind every engagement is a network of certified vendor partners, engineers, and specialists. The personalized experience of a local expert, backed by enterprise-level resources.",
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
                desc: "Some problems require hands on hardware. We come to your office or home — same or next day in most cases — and we stay until it&apos;s resolved.",
              },
              {
                title: "Long Relationships",
                desc: "Many of our clients have been with us for years — some for decades. That history means faster diagnosis, better solutions, and a team that truly knows your environment.",
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

      {/* Technology Partners */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">
            Technology Partners & Platforms We Work With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {[
              { src: "/images/apple-logo.png", alt: "Apple" },
              { src: "/images/microsoft-logo.jpg", alt: "Microsoft" },
              { src: "/images/bitdefender-logo.png", alt: "Bitdefender" },
              { src: "/images/fortinet-logo.png", alt: "Fortinet" },
              { src: "/images/backblaze-logo.jpeg", alt: "Backblaze" },
            ].map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Based in New Jersey. Available Beyond.
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto mb-8">
            We provide on-site support across 13 New Jersey counties, with
            remote support available statewide and throughout the country.
            Wherever you are, we can help.
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

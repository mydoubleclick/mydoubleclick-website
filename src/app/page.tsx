import Link from "next/link";

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
  { value: "38+", label: "Years in Business" },
  { value: "200+", label: "Endpoints Managed" },
  { value: "NJ", label: "Based & On-Site" },
  { value: "24/7", label: "Remote Support" },
];

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0H9" />
      </svg>
    ),
    title: "Business IT Services",
    description:
      "Managed IT, cybersecurity, networking, and on-site support tailored for small and mid-sized businesses. One point of contact for everything tech.",
    href: "/services/business",
    accent: "from-blue-600 to-blue-800",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Residential & Home Office",
    description:
      "Home computer repair, setup, networking, and security for homeowners and remote workers. We come to you, or connect remotely.",
    href: "/services/residential",
    accent: "from-sky-500 to-sky-700",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Remote Support",
    description:
      "Fast remote assistance without waiting for a truck roll. Download Splashtop SOS and we can connect to your device in minutes.",
    href: "/remote-support",
    accent: "from-indigo-500 to-indigo-700",
  },
];

const whyUs = [
  {
    title: "38 Years of Experience",
    description:
      "Jason Hubert has been solving technology problems since 1987. Deep expertise you can trust.",
  },
  {
    title: "Real Accountability",
    description:
      "You work directly with Jason — not a ticketing queue or offshore help desk. One expert, fully responsible.",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 relative overflow-hidden">
        {/* Background grid effect */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Blue glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-5 blur-3xl rounded-full translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600 bg-opacity-10 border border-blue-600 border-opacity-20 text-sky-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
              New Jersey IT Services — Est. 1987
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Technology that{" "}
              <span className="text-sky-400">works.</span>
              <br />
              Support you can{" "}
              <span className="text-sky-400">count on.</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              Double Click Computing has been the trusted IT partner for New
              Jersey businesses and homeowners for over 38 years. Managed IT,
              cybersecurity, networking, and friendly on-site support — done
              right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded text-center transition-colors"
              >
                Get a Free IT Assessment
              </Link>
              <Link
                href="/remote-support"
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-base px-8 py-4 rounded text-center transition-colors"
              >
                Remote Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <div className="text-3xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From enterprise-grade managed services to friendly home computer
              help — we cover the full spectrum of IT support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white border border-slate-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.accent} text-white mb-5`}
                >
                  {service.icon}
                </div>
                <h3 className="text-slate-900 text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1.5">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Double Click */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5">
                Why Double Click Computing?
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                In a world of impersonal help desks and offshore support, we
                offer something increasingly rare: a real local expert who knows
                your setup, answers the phone, and shows up.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Our story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mb-3" />
                  <h3 className="text-slate-900 font-bold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              38 years of relationships — built one solved problem at a time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-slate-800 border border-slate-700 rounded-xl p-8"
              >
                <svg
                  className="w-8 h-8 text-blue-500 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.333C7.333 11.791 8.791 10 10 10V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.667C21.333 11.791 22.791 10 24 10V8z" />
                </svg>
                <p className="text-slate-300 text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to stop fighting your technology?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Schedule a free IT assessment — we&apos;ll review your setup, find
            the gaps, and tell you exactly what we&apos;d fix and why.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-bold text-base px-8 py-4 rounded hover:bg-blue-50 transition-colors"
            >
              Schedule a Free Assessment
            </Link>
            <a
              href="tel:+18889254259"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-base px-8 py-4 rounded transition-colors"
            >
              Call (888) 9-CLICK-9
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

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
    title: "Managed IT Services",
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

const counties = [
  "Essex", "Morris", "Bergen", "Sussex", "Warren",
  "Passaic", "Hudson", "Hunterdon", "Somerset", "Union",
  "Middlesex", "Mercer", "Monmouth",
];

const industries = [
  "Medical & Dental Practices",
  "Financial Firms",
  "Legal Firms",
  "Government & Municipalities",
  "Manufacturing & Light Industry",
  "Education Providers",
  "Architecture & Design",
  "Restaurant & Hospitality",
  "Home Offices & Residential",
];

const faqs = [
  {
    q: "How quickly do you respond to support requests?",
    a: "Same day — usually within a few hours during business hours. For urgent issues, call or text Jason directly and he'll get back to you fast.",
  },
  {
    q: "Do you work with both Windows and Mac?",
    a: "Yes. We support Windows 10/11, macOS, and mixed environments. Whether your office is all-PC, all-Mac, or a mix, we've got you covered.",
  },
  {
    q: "What's the difference between remote and on-site support?",
    a: "Remote support lets us connect to your computer over the internet and fix most software issues in minutes — no waiting for a visit. On-site support means Jason comes to you for hardware issues, installations, cabling, or anything that can't be done remotely.",
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
    a: "We come to you, we know your specific setup, and you talk to the same person every time. No ticket numbers, no drop-offs, no \"it might take a week.\" Just direct access to a local expert who treats your problem like it matters.",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white relative overflow-hidden border-b border-slate-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                New Jersey IT Services — Est. 1987
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                Technology that{" "}
                <span className="text-blue-600">works.</span>
                <br />
                Support you can{" "}
                <span className="text-blue-600">count on.</span>
              </h1>
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
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
                <a
                  href="https://DoubleClick.as.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-base px-8 py-4 rounded text-center transition-colors"
                >
                  Book an Appointment
                </a>
              </div>
              <p className="text-slate-400 text-sm mt-5">
                Or call us:{" "}
                <a href="tel:+18889254259" className="text-blue-600 font-semibold hover:underline">
                  (888) 9-CLICK-9
                </a>
              </p>
            </div>

            {/* Right: photo */}
            <div className="hidden lg:block relative rounded-2xl overflow-hidden min-h-[460px] shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=85"
                alt="Professional business office environment"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-500">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <div className="text-3xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm font-medium">
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

      {/* Parallax 1 */}
      <div
        className="relative h-56 sm:h-64 bg-cover bg-center bg-scroll lg:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Proactive monitoring. Instant response.
          </p>
          <p className="text-slate-300 text-base sm:text-lg">
            Technology problems solved before you even know they exist.
          </p>
        </div>
      </div>

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

      {/* Technology Partners */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">
            Trusted Technology Partners
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

      {/* Parallax 2 */}
      <div
        className="relative h-56 sm:h-64 bg-cover bg-center bg-scroll lg:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Enterprise tools. Local expertise. Personal service.
          </p>
          <p className="text-slate-300 text-base sm:text-lg">
            The security and reliability of a large IT firm — with someone who actually picks up the phone.
          </p>
        </div>
      </div>

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

      {/* Satisfaction Guarantee */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-white bg-opacity-10 rounded-full flex items-center justify-center border-2 border-white border-opacity-30">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-2">
                Our Promise
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                100% Satisfaction Guarantee
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                If you&apos;re not completely satisfied with the work, we make it right —
                no arguments, no runaround. That&apos;s been our commitment to every client
                for 38 years, and it&apos;s not changing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax 3 */}
      <div
        className="relative h-56 sm:h-64 bg-cover bg-center bg-scroll lg:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Focus on your business. We&apos;ll handle the tech.
          </p>
          <p className="text-slate-300 text-base sm:text-lg">
            One call. One expert. Everything IT — taken care of.
          </p>
        </div>
      </div>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
                Where We Serve
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                Right Around the Corner
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                On-site service across 13 New Jersey counties — plus remote
                support available statewide and anywhere in the country.
              </p>

              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                On-Site Service Counties
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {counties.map((county) => (
                  <span
                    key={county}
                    className="bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full"
                  >
                    {county}
                  </span>
                ))}
              </div>

              <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-5">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="font-semibold text-slate-900 text-sm mb-0.5">Remote Support Available Everywhere</div>
                  <div className="text-slate-500 text-sm">
                    Not in our on-site area? We provide remote support across all of New Jersey and throughout the United States.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-5">
                Industries We Serve
              </h3>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry} className="flex items-center gap-3 text-slate-700 text-sm">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {industry}
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">Don&apos;t see your industry?</span>{" "}
                  We&apos;ve worked with clients across virtually every type of small business.
                  If you have computers and need them working reliably, we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-slate-500 text-lg">
              Answers to what most clients ask before getting started.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-200 transition-colors"
              >
                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <span className="w-5 h-5 bg-blue-600 text-white text-xs font-extrabold rounded flex items-center justify-center flex-shrink-0 mt-0.5">?</span>
                  {faq.q}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-500 text-sm mb-4">
              Have a question that&apos;s not answered here?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded transition-colors text-sm"
            >
              Ask Us Directly
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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
              href="https://DoubleClick.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-base px-8 py-4 rounded transition-colors"
            >
              Book Online
            </a>
            <a
              href="tel:+18889254259"
              className="bg-blue-800 hover:bg-blue-900 text-white font-semibold text-base px-8 py-4 rounded transition-colors"
            >
              Call (888) 9-CLICK-9
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

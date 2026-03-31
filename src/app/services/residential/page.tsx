import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential & Home Office IT | Double Click Computing",
  description:
    "Friendly home computer repair, networking, virus removal, and remote support for NJ homeowners and home office workers.",
};

const services = [
  {
    title: "Computer Repair & Tune-Up",
    description:
      "Slow computer? Strange errors? Hardware failure? We diagnose and fix it — Windows and Mac.",
    href: "/services/residential/computer-repair",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Home Network Setup",
    description:
      "Wi-Fi that actually covers your whole home, wired connections where you need them, and a router that works.",
    href: "/services/residential/home-networking",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: "Virus & Malware Removal",
    description:
      "Full cleanup of infected machines, followed by endpoint security setup so it doesn't happen again.",
    href: "/services/residential/virus-removal",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "New Device Setup",
    description:
      "Got a new computer, tablet, or phone? We get everything configured, transferred, and working from day one.",
    href: "/services/residential/new-device-setup",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    title: "Data Backup & Recovery",
    description:
      "Set up automated backups and recover lost files before a hardware failure becomes a disaster.",
    href: "/services/residential/data-backup",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
  },
  {
    title: "Home Office Support",
    description:
      "VPN, printers, video calls, shared drives — we make working from home actually work.",
    href: "/services/residential/home-office",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Security Setup",
    description:
      "Antivirus, password managers, two-factor authentication. Peace of mind for you and your family.",
    href: "/services/residential/security-setup",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Remote Support",
    description:
      "Many issues can be solved remotely in minutes. No waiting around — we connect to your computer and fix it live.",
    href: "/services/residential/remote-support",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
];

export default function ResidentialServices() {
  return (
    <>
      <section className="bg-blue-50 border-b border-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Services
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Residential & Home Office
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Friendly, patient, no-jargon IT help for homeowners and remote
            workers. We come to you, or connect remotely — whatever gets you
            back up fastest.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-sky-300 hover:shadow-md transition-all"
              >
                <div className="inline-flex p-2.5 bg-sky-500 text-white rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-sky-600 text-xs font-semibold flex items-center gap-1">
                  Learn more
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-500 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-extrabold text-white mb-1">
              Need help right now?
            </h2>
            <p className="text-sky-100 text-sm">
              Remote or on-site — we&apos;ll get you sorted, usually same day.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link
              href="/remote-support"
              className="bg-white text-sky-600 font-bold px-6 py-3 rounded hover:bg-sky-50 transition-colors text-sm"
            >
              Remote Support
            </Link>
            <Link
              href="/contact"
              className="bg-sky-600 border border-sky-400 text-white font-semibold px-6 py-3 rounded hover:bg-sky-700 transition-colors text-sm"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

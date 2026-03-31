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
  },
  {
    title: "Home Network Setup",
    description:
      "Wi-Fi that actually covers your whole home, wired connections where you need them, and a router that works.",
    href: "/services/residential/home-networking",
  },
  {
    title: "Virus & Malware Removal",
    description:
      "Full cleanup of infected machines, followed by endpoint security setup so it doesn't happen again.",
    href: "/services/residential/virus-removal",
  },
  {
    title: "New Device Setup",
    description:
      "Got a new computer, tablet, or phone? We get everything configured, transferred, and working from day one.",
    href: "/services/residential/new-device-setup",
  },
  {
    title: "Data Backup & Recovery",
    description:
      "Set up automated backups and recover lost files before a hardware failure becomes a disaster.",
    href: "/services/residential/data-backup",
  },
  {
    title: "Home Office Support",
    description:
      "VPN, printers, video calls, shared drives — we make working from home actually work.",
    href: "/services/residential/home-office",
  },
  {
    title: "Security Setup",
    description:
      "Antivirus, password managers, two-factor authentication. Peace of mind for you and your family.",
    href: "/services/residential/security-setup",
  },
  {
    title: "Remote Support",
    description:
      "Many issues can be solved remotely in minutes. No waiting around — we connect to your computer and fix it live.",
    href: "/services/residential/remote-support",
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
                <div className="w-2 h-2 bg-sky-500 rounded-full mb-3" />
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

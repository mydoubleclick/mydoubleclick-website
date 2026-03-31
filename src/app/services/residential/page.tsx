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
  },
  {
    title: "Home Network Setup",
    description:
      "Wi-Fi that actually covers your whole home, wired connections where you need them, and a router that works.",
  },
  {
    title: "Virus & Malware Removal",
    description:
      "Full cleanup of infected machines, followed by endpoint security setup so it doesn't happen again.",
  },
  {
    title: "New Device Setup",
    description:
      "Got a new computer, tablet, or phone? We get everything configured, transferred, and working from day one.",
  },
  {
    title: "Data Backup & Recovery",
    description:
      "Set up automated backups and recover lost files before a hardware failure becomes a disaster.",
  },
  {
    title: "Home Office Support",
    description:
      "VPN, printers, video calls, shared drives — we make working from home actually work.",
  },
  {
    title: "Security Setup",
    description:
      "Antivirus, password managers, two-factor authentication. Peace of mind for you and your family.",
  },
  {
    title: "Remote Support",
    description:
      "Many issues can be solved remotely in minutes. No waiting around — we connect to your computer and fix it live.",
  },
];

export default function ResidentialServices() {
  return (
    <>
      <section className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Services
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Residential & Home Office
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
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
              <div
                key={service.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-sky-300 hover:shadow-md transition-all"
              >
                <div className="w-2 h-2 bg-sky-500 rounded-full mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                Pricing
              </h2>
              <p className="text-slate-500 mb-6">
                Residential and home office support is billed hourly, with no
                surprise charges. We&apos;ll tell you the rate before any work
                begins.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Hourly rate</span>
                  <span className="font-bold text-slate-900 text-sm">
                    $125–$150/hr
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">
                    Remote support session
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    Hourly, min 30 min
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600 text-sm">Device setup</span>
                  <span className="font-bold text-slate-900 text-sm">
                    Fixed quote
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-sky-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-extrabold mb-3">
                Need help right now?
              </h3>
              <p className="text-sky-100 text-sm mb-6">
                If your issue can be handled remotely, we can often help the
                same day. Use the Remote Support page to download Splashtop and
                connect instantly.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/remote-support"
                  className="bg-white text-sky-600 font-bold px-6 py-3 rounded text-center hover:bg-sky-50 transition-colors text-sm"
                >
                  Remote Support
                </Link>
                <Link
                  href="/contact"
                  className="bg-sky-600 text-white font-semibold px-6 py-3 rounded text-center hover:bg-sky-700 transition-colors text-sm border border-sky-400"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

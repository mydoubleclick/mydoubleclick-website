import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Services | Double Click Computing",
  description:
    "Managed IT services for businesses and residential clients in New Jersey. Cybersecurity, networking, backup, and on-site support.",
};

const categories = [
  {
    href: "/services/business",
    title: "Managed IT Services",
    description:
      "Comprehensive managed IT for small and mid-sized businesses. Everything from firewalls and endpoint security to on-site support and device deployment.",
    items: [
      "Managed IT & Help Desk",
      "Endpoint Security (Bitdefender)",
      "Firewall & Networking (Fortinet)",
      "Cloud Backup (Backblaze)",
      "On-site & Remote Support",
      "Device Setup & Deployment",
      "MDM & Mobile Devices",
    ],
    cta: "Managed IT Services Details",
    bg: "bg-blue-600",
  },
  {
    href: "/services/residential",
    title: "Residential & Home Office",
    description:
      "Friendly, no-jargon IT help for homeowners and remote workers. We come to you or connect remotely — whatever's fastest.",
    items: [
      "Computer Repair & Tune-up",
      "Home Network Setup",
      "Virus & Malware Removal",
      "New Device Setup",
      "Data Backup & Recovery",
      "Home Office Networking",
      "Remote Support",
    ],
    cta: "Residential Details",
    bg: "bg-sky-500",
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-blue-50 border-b border-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Services</h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Whether you run a business or just need your home computer working
            again, we have the right level of support for you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.href}
                className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className={`${cat.bg} px-8 py-10`}>
                  <h2 className="text-2xl font-extrabold text-white mb-3">
                    {cat.title}
                  </h2>
                  <p className="text-white text-opacity-90 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="px-8 py-8 bg-white">
                  <ul className="space-y-3 mb-8">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-slate-600 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-blue-600 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
                  >
                    {cat.cta}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Just reach out. We&apos;ll ask a few questions and point you in the
            right direction — no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

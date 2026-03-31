import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business IT Services | Double Click Computing",
  description:
    "Managed IT services, cybersecurity, networking, and on-site support for small and mid-sized NJ businesses.",
};

const services = [
  {
    title: "Managed IT & Help Desk",
    description:
      "Ongoing monitoring and management of your IT infrastructure. One number to call when anything goes wrong.",
    href: "/services/business/managed-it",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Endpoint Security",
    description:
      "Bitdefender GravityZone protection across all your desktops and laptops. Enterprise-grade antivirus and threat detection.",
    href: "/services/business/endpoint-security",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Firewall & Network Security",
    description:
      "Fortinet FortiGate firewall installation, configuration, and ongoing management. Secure, reliable business networking.",
    href: "/services/business/firewall-networking",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Cloud Backup",
    description:
      "Backblaze-powered cloud backup for business-critical data. Automated, offsite, and recoverable when you need it.",
    href: "/services/business/cloud-backup",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
  },
  {
    title: "On-Site Support",
    description:
      "When remote isn't enough, we come to your office. Hardware failures, new setups, cabling, and more.",
    href: "/services/business/on-site-support",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Device Procurement & Setup",
    description:
      "We source, configure, and deploy Windows and Mac workstations so they're ready for your team from day one.",
    href: "/services/business/device-setup",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Remote Monitoring (RMM)",
    description:
      "Atera-powered RMM keeps us aware of your systems 24/7 — updates, alerts, performance, and health monitoring.",
    href: "/services/business/remote-monitoring",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "MDM & Mobile Devices",
    description:
      "Mobile device management for iPhones, iPads, and company laptops. Policy enforcement, remote wipe, and compliance.",
    href: "/services/business/mdm",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function BusinessServices() {
  return (
    <>
      <section className="bg-blue-50 border-b border-blue-100 relative overflow-hidden min-h-[220px]">
        {/* Right-panel image */}
        <div className="absolute right-0 top-0 w-5/12 h-full hidden lg:block overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
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
          <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Services
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Business IT Services
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Proactive, reliable IT management for small and mid-sized NJ
            businesses. From endpoint security to on-site support — we handle
            the tech so you can focus on your business.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="inline-flex p-2.5 bg-blue-600 text-white rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-blue-600 text-xs font-semibold flex items-center gap-1">
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

      <section className="bg-blue-600 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-extrabold text-white mb-1">
              Ready to get started?
            </h2>
            <p className="text-blue-100 text-sm">
              We&apos;ll assess your setup and give you a clear quote — no obligation.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-blue-600 font-bold px-8 py-3 rounded hover:bg-blue-50 transition-colors text-sm flex-shrink-0"
          >
            Schedule a Free Assessment
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "On-Site IT Support | Double Click Computing",
  description: "On-site IT support for NJ businesses. Hardware failures, new setups, cabling, and hands-on help when remote support isn't enough.",
};

export default function OnSiteSupport() {
  return (
    <ServiceDetailPage
      breadcrumb="Managed IT Services"
      breadcrumbHref="/services/business"
      tag="Managed IT Services"
      title="On-Site Support"
      description="Some problems need hands on hardware. When remote support isn't enough, we come to your office — usually same or next day. 38 years of on-site experience across NJ."
      includes={[
        { label: "Hardware repair & replacement", detail: "Desktops, laptops, servers, printers, and peripherals." },
        { label: "Network hardware installation", detail: "Switches, access points, firewalls, and cabling." },
        { label: "New workstation setup", detail: "Unbox, configure, join to domain, install software — ready for your staff." },
        { label: "Office moves & relocations", detail: "Plan and execute IT moves with minimal downtime." },
        { label: "Server room organization", detail: "Cabling cleanup, rack organization, labeling, and documentation." },
        { label: "Peripheral setup", detail: "Printers, scanners, docking stations, monitors, and more." },
        { label: "Emergency response", detail: "When something critical fails, we prioritize getting you back up fast." },
      ]}
      steps={[
        { step: "1", title: "Call or Text", description: "Describe the issue. We'll diagnose remotely first if possible to save time." },
        { step: "2", title: "Schedule", description: "We come to your office — usually same or next business day for non-emergencies." },
        { step: "3", title: "Resolve", description: "Issue fixed on-site, with documentation of what was done and any follow-up needed." },
      ]}
      notes={[
        "Serving Monmouth, Ocean, Middlesex, and surrounding NJ counties.",
        "Same-day response available for critical issues.",
        "Travel time is included in our standard rates — no hidden fees.",
      ]}
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
    />
  );
}

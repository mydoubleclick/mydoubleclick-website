import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Managed IT & Help Desk | Double Click Computing",
  description: "Proactive managed IT services and help desk support for NJ small businesses. One call for everything tech.",
};

export default function ManagedIT() {
  return (
    <ServiceDetailPage
      breadcrumb="Business IT"
      breadcrumbHref="/services/business"
      tag="Business IT Services"
      title="Managed IT & Help Desk"
      description="Your entire IT environment — monitored, maintained, and supported by one expert who knows your setup. One number to call when anything goes wrong."
      includes={[
        { label: "Proactive system monitoring", detail: "We watch your systems 24/7 and address issues before they become outages." },
        { label: "Help desk support", detail: "Remote and on-site support for staff — software issues, email, printers, and more." },
        { label: "Patch management", detail: "Windows and application updates applied on schedule, tested before deployment." },
        { label: "Software installation & licensing", detail: "We manage your software installs, updates, and license renewals." },
        { label: "User account management", detail: "New hires, departures, password resets, and permissions handled promptly." },
        { label: "Vendor coordination", detail: "We work with your ISP, software vendors, and hardware suppliers on your behalf." },
        { label: "IT strategy & planning", detail: "Honest guidance on what to upgrade, replace, or invest in — no upselling." },
      ]}
      steps={[
        { step: "1", title: "Assessment", description: "We document your current environment — hardware, software, network, and pain points." },
        { step: "2", title: "Onboarding", description: "We deploy monitoring tools, set up documentation, and establish baseline standards." },
        { step: "3", title: "Ongoing Support", description: "Proactive monitoring, regular maintenance, and fast response when issues arise." },
      ]}
      notes={[
        "Most issues are resolved remotely within hours.",
        "You get direct access to Jason — not a ticketing queue.",
        "No long-term contracts required.",
      ]}
    />
  );
}

import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Device Procurement & Setup | Double Click Computing",
  description: "We source, configure, and deploy Windows and Mac workstations for NJ businesses. Ready for your team from day one.",
};

export default function DeviceSetup() {
  return (
    <ServiceDetailPage
      breadcrumb="Business IT"
      breadcrumbHref="/services/business"
      tag="Business IT Services"
      title="Device Procurement & Setup"
      description="New computer for a new hire? Replacing aging hardware? We handle the entire process — sourcing, configuring, and deploying Windows and Mac workstations so they're ready to use from the moment they land on a desk."
      includes={[
        { label: "Hardware sourcing & procurement", detail: "We recommend and source the right hardware for your budget and needs — Dell, Lenovo, Apple, and more." },
        { label: "Operating system setup & hardening", detail: "Windows or macOS configured, updated, and secured before deployment." },
        { label: "Software installation", detail: "Microsoft 365, business applications, and anything else your staff needs — pre-installed." },
        { label: "Domain join & policy application", detail: "Joined to your domain or directory with appropriate group policies applied." },
        { label: "Data migration", detail: "Files, email, and settings migrated from the old computer to the new one." },
        { label: "Endpoint security deployment", detail: "Bitdefender installed and enrolled in your management console." },
        { label: "Backup enrollment", detail: "New device added to your cloud backup environment." },
        { label: "User training handoff", detail: "We walk the new user through their setup and answer questions." },
      ]}
      steps={[
        { step: "1", title: "Spec & Quote", description: "We recommend the right hardware and software for the role. You approve the quote." },
        { step: "2", title: "Procure & Configure", description: "We order, receive, and fully configure the device at our facility." },
        { step: "3", title: "Deploy", description: "Device delivered or shipped to your office, ready for the user from day one." },
      ]}
      notes={[
        "We support both Windows (Dell, Lenovo) and Mac (Apple) environments.",
        "Old hardware responsibly recycled or wiped and repurposed.",
        "We also handle device replacement programs for aging fleets.",
      ]}
      heroImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1400&q=80"
    />
  );
}

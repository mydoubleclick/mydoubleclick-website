import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Endpoint Security | Double Click Computing",
  description: "Bitdefender GravityZone endpoint protection for NJ businesses. Enterprise-grade antivirus, threat detection, and centralized management.",
};

export default function EndpointSecurity() {
  return (
    <ServiceDetailPage
      breadcrumb="Managed IT Services"
      breadcrumbHref="/services/business"
      tag="Managed IT Services"
      title="Endpoint Security"
      description="Enterprise-grade protection for every computer in your business. Powered by Bitdefender GravityZone — the same platform used by large enterprises, scaled for small businesses."
      includes={[
        { label: "Bitdefender GravityZone deployment", detail: "Installed and configured on every desktop and laptop in your organization." },
        { label: "Real-time threat detection", detail: "Catches malware, ransomware, phishing, and zero-day threats before damage occurs." },
        { label: "Centralized management console", detail: "Jason monitors all your endpoints from a single dashboard — you don't have to." },
        { label: "Automatic updates", detail: "Definitions and engine updates happen automatically, keeping protection current." },
        { label: "Threat remediation", detail: "When a threat is detected, we investigate and remediate — not just quarantine." },
        { label: "Monthly endpoint reporting", detail: "Summary of threats detected, blocked, and resolved across your environment." },
      ]}
      steps={[
        { step: "1", title: "Audit", description: "We identify every device that needs protection — desktops, laptops, and servers." },
        { step: "2", title: "Deploy", description: "Bitdefender is installed and configured on all endpoints, usually same day." },
        { step: "3", title: "Monitor", description: "Ongoing monitoring, alerts, and response — we handle threats so you don't have to." },
      ]}
      notes={[
        "Billed per device per month — only pay for what you use.",
        "Works on Windows and Mac.",
        "Does not slow down computers — Bitdefender is rated #1 for performance impact.",
      ]}
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&q=80"
    />
  );
}

import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Firewall & Network Security | Double Click Computing",
  description: "Fortinet FortiGate firewall installation, configuration, and management for NJ businesses. Secure, reliable business networking.",
};

export default function FirewallNetworking() {
  return (
    <ServiceDetailPage
      breadcrumb="Business"
      breadcrumbHref="/services/business"
      tag="Managed IT Services"
      title="Firewall & Network Security"
      description="A properly configured firewall is the foundation of business network security. We install, configure, and manage Fortinet FortiGate firewalls — enterprise-grade protection sized right for small businesses."
      includes={[
        { label: "Fortinet FortiGate installation", detail: "FortiGate 40F and 60F models — right-sized for 1–50 user environments." },
        { label: "Initial configuration & hardening", detail: "Firewall rules, NAT, VPN, content filtering, and IPS configured to your needs." },
        { label: "VPN setup", detail: "Secure remote access for staff working from home or on the road." },
        { label: "Network segmentation", detail: "Separate networks for staff, guests, and sensitive systems." },
        { label: "Firmware updates & renewals", detail: "We manage FortiGuard subscription renewals and firmware patching." },
        { label: "Ongoing monitoring & management", detail: "Alerts, log review, and policy adjustments as your business changes." },
        { label: "Network documentation", detail: "Full diagram and documentation of your network topology." },
      ]}
      steps={[
        { step: "1", title: "Site Survey", description: "We assess your current network, ISP setup, and security requirements." },
        { step: "2", title: "Installation", description: "Firewall installed and configured with minimal downtime — usually under an hour." },
        { step: "3", title: "Ongoing Management", description: "Firmware updates, rule changes, and monitoring handled by us." },
      ]}
      notes={[
        "FortiGate renewals must be kept current — we track and handle all renewals.",
        "We support both wired and wireless network design.",
        "VPN included — lets staff work securely from anywhere.",
      ]}
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80"
    />
  );
}

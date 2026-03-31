import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Home Computer Security Setup | Double Click Computing",
  description: "Antivirus, password managers, and two-factor authentication setup for NJ homeowners. Keep your family and finances safe online.",
};

export default function SecuritySetup() {
  return (
    <ServiceDetailPage
      breadcrumb="Residential"
      breadcrumbHref="/services/residential"
      tag="Residential & Home Office"
      title="Security Setup"
      description="Cybercriminals don't just target businesses. Homeowners are constantly targeted through phishing, fake tech support scams, and compromised websites. We set up the right defenses — no technical knowledge required."
      accentColor="sky"
      includes={[
        { label: "Antivirus installation & configuration", detail: "Reputable endpoint security installed on all your computers." },
        { label: "Password manager setup", detail: "We set up and teach you to use a password manager — the single biggest security improvement most people can make." },
        { label: "Two-factor authentication", detail: "2FA enabled on your email, banking, and other important accounts." },
        { label: "Email security", detail: "Spam filters, phishing awareness, and settings that reduce your exposure." },
        { label: "Browser security", detail: "Safe browser configuration, ad blocker, and removal of suspicious extensions." },
        { label: "Wi-Fi security audit", detail: "Router password, encryption settings, and guest network reviewed." },
        { label: "Scam awareness", detail: "We explain current scams targeting homeowners and how to spot them." },
      ]}
      steps={[
        { step: "1", title: "Security Audit", description: "We review your current setup and identify the biggest vulnerabilities." },
        { step: "2", title: "Install & Configure", description: "Security tools installed and configured on your devices." },
        { step: "3", title: "Educate", description: "We explain what we set up and why — so you stay protected going forward." },
      ]}
      notes={[
        "A password manager alone prevents the majority of account breaches.",
        "We explain everything in plain English — no jargon.",
        "Good for the whole family — we can set up parental controls too.",
      ]}
      heroImage="https://source.unsplash.com/1400x700/?security,password,privacy"
    />
  );
}

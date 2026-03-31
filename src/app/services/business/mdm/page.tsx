import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "MDM & Mobile Device Management | Double Click Computing",
  description: "Mobile device management for NJ businesses. Policy enforcement, remote wipe, app management, and compliance for iPhones, iPads, and laptops.",
};

export default function MDM() {
  return (
    <ServiceDetailPage
      breadcrumb="Business"
      breadcrumbHref="/services/business"
      tag="Managed IT Services"
      title="MDM & Mobile Device Management"
      description="Your staff uses iPhones, iPads, and laptops that carry sensitive company data. MDM lets you manage, secure, and wipe those devices remotely — whether someone loses a phone or leaves the company."
      includes={[
        { label: "MDM platform setup & enrollment", detail: "We deploy and configure your MDM platform (Rippling, Mosyle, or similar) and enroll all devices." },
        { label: "Device policy enforcement", detail: "Screen lock, encryption, passcode requirements, and app restrictions applied uniformly." },
        { label: "App management", detail: "Push apps to devices silently, revoke access when staff depart." },
        { label: "Remote wipe & lock", detail: "Lost or stolen device? Remotely wipe it in minutes." },
        { label: "Email & calendar configuration", detail: "Microsoft 365 or Google Workspace pushed to all enrolled devices automatically." },
        { label: "VPN configuration", detail: "Secure VPN profiles pushed to mobile devices for remote access." },
        { label: "Compliance reporting", detail: "Know which devices are compliant and which need attention." },
        { label: "Offboarding automation", detail: "When a staff member leaves, we revoke access and wipe company data from their device." },
      ]}
      steps={[
        { step: "1", title: "Platform Selection", description: "We recommend the right MDM platform based on your device mix and budget." },
        { step: "2", title: "Enrollment", description: "Devices enrolled — new devices can be enrolled automatically out of the box." },
        { step: "3", title: "Ongoing Management", description: "Policy updates, new device enrollments, and departures handled by us." },
      ]}
      notes={[
        "Works with iPhone, iPad, Mac, and Windows devices.",
        "Zero-touch deployment available for new devices.",
        "Critical for businesses in regulated industries (healthcare, legal, finance).",
      ]}
      heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80"
    />
  );
}

import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Home Office IT Support | Double Click Computing",
  description: "Home office setup and support for NJ remote workers. VPN, printers, video calls, and reliable networking — set up right.",
};

export default function HomeOffice() {
  return (
    <ServiceDetailPage
      breadcrumb="Residential"
      breadcrumbHref="/services/residential"
      tag="Residential & Home Office"
      title="Home Office Support"
      description="Working from home should work. We set up and support home offices so you can stay productive — reliable internet, proper equipment, and the tools your job requires."
      accentColor="sky"
      includes={[
        { label: "Home office network setup", detail: "Dedicated wired connection for your desk if needed, optimized Wi-Fi, and backup connection options." },
        { label: "VPN configuration", detail: "Secure connection to your company network — set up and tested so it works reliably." },
        { label: "Video call optimization", detail: "Zoom, Teams, and Google Meet configured with the right camera, mic, and lighting setup." },
        { label: "Printer & scanner setup", detail: "Wireless printing configured for all your devices — no more printer frustration." },
        { label: "External monitor & docking station", detail: "Multiple monitors, docking stations, and ergonomic setups configured." },
        { label: "Company software setup", detail: "Work applications, file shares, and remote desktop connections configured." },
        { label: "Security for remote work", detail: "Endpoint protection, password management, and secure practices for working from home." },
      ]}
      steps={[
        { step: "1", title: "Assess Your Setup", description: "We evaluate your space, equipment, and what your job requires to function well." },
        { step: "2", title: "Configure & Install", description: "Network, devices, software, and peripherals all set up and tested." },
        { step: "3", title: "Ongoing Support", description: "When something stops working, we fix it fast — remote or on-site." },
      ]}
      notes={[
        "We coordinate with your company's IT department when needed.",
        "We can recommend and source the right equipment for your home office.",
        "Video call setups can make a significant difference in how you're perceived professionally.",
      ]}
      heroImage="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1400&q=80"
    />
  );
}

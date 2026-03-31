import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Home Network Setup | Double Click Computing",
  description: "Home Wi-Fi and network setup for NJ homeowners. Fast, reliable coverage throughout your home — done right.",
};

export default function HomeNetworking() {
  return (
    <ServiceDetailPage
      breadcrumb="Residential"
      breadcrumbHref="/services/residential"
      tag="Residential & Home Office"
      title="Home Network Setup"
      description="Wi-Fi dead zones, slow speeds, and dropped connections are frustrating. We design and set up home networks that actually work — fast, reliable coverage in every room."
      accentColor="sky"
      includes={[
        { label: "Router setup & configuration", detail: "Properly configured router with strong security settings and optimal channel selection." },
        { label: "Wi-Fi coverage assessment", detail: "We identify dead zones and recommend the right solution — extenders, mesh, or access points." },
        { label: "Mesh network installation", detail: "Eero, Orbi, or similar mesh systems for whole-home coverage." },
        { label: "Wired connections", detail: "Ethernet runs to TVs, desktops, and other devices that benefit from a wired connection." },
        { label: "Network security setup", detail: "Guest network, strong passwords, firewall settings, and parental controls if needed." },
        { label: "Device connection", detail: "We connect your computers, phones, TVs, smart home devices, and printers." },
        { label: "ISP troubleshooting", detail: "We coordinate with your internet provider if the issue is on their end." },
      ]}
      steps={[
        { step: "1", title: "Assessment", description: "We evaluate your home layout, current equipment, and what you need the network to do." },
        { step: "2", title: "Design & Install", description: "We install and configure everything — router, access points, and any wiring." },
        { step: "3", title: "Test & Connect", description: "Full coverage test, then we connect all your devices before we leave." },
      ]}
      notes={[
        "We work with all major internet providers in NJ.",
        "We can recommend equipment or work with what you already have.",
        "Smart home devices (Alexa, Ring, Nest, etc.) connected and configured.",
      ]}
      heroImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80"
    />
  );
}

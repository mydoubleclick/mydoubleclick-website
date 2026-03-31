import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "New Device Setup | Double Click Computing",
  description: "New computer, tablet, or phone setup for NJ homeowners. We configure everything and transfer your files so you're ready to go from day one.",
};

export default function NewDeviceSetup() {
  return (
    <ServiceDetailPage
      breadcrumb="Residential"
      breadcrumbHref="/services/residential"
      tag="Residential & Home Office"
      title="New Device Setup"
      description="Got a new computer, tablet, or phone? Don't spend hours figuring it out. We set everything up, transfer your files, and make sure it all works before we leave."
      accentColor="sky"
      includes={[
        { label: "Initial setup & configuration", detail: "Windows or macOS set up properly from the start — accounts, updates, and preferences." },
        { label: "Data transfer from old device", detail: "Files, photos, music, and documents moved from your old computer to the new one." },
        { label: "Email & accounts setup", detail: "Gmail, Outlook, Apple Mail — configured and working on the new device." },
        { label: "Software installation", detail: "Your programs installed and ready — Microsoft Office, browsers, printers, and more." },
        { label: "Wi-Fi & peripheral connection", detail: "Connected to your home network, printer, and any other devices." },
        { label: "Antivirus & security", detail: "Security software installed so you're protected from day one." },
        { label: "Backup setup", detail: "Cloud or local backup configured so your new files are protected going forward." },
      ]}
      steps={[
        { step: "1", title: "Unbox & Assess", description: "We set up the new device and take stock of what needs to be transferred." },
        { step: "2", title: "Transfer & Configure", description: "Files migrated, accounts set up, software installed." },
        { step: "3", title: "Hand Off", description: "We walk you through the new setup and make sure you're comfortable." },
      ]}
      notes={[
        "We work with Windows PCs, Macs, iPhones, iPads, and Android devices.",
        "Old device responsibly wiped if you're donating or trading it in.",
        "Remote setup available for some devices — ask us.",
      ]}
    />
  );
}

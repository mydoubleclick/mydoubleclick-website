import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Cloud Backup | Double Click Computing",
  description: "Automated cloud backup for NJ businesses powered by Backblaze. Protect business-critical data with offsite, recoverable backups.",
};

export default function CloudBackup() {
  return (
    <ServiceDetailPage
      breadcrumb="Business"
      breadcrumbHref="/services/business"
      tag="Managed IT Services"
      title="Cloud Backup"
      description="If your server died tomorrow, how much data would you lose — and how long would recovery take? We set up automated, offsite cloud backups so the answer to both questions is 'not much' and 'not long.'"
      includes={[
        { label: "Backblaze cloud backup deployment", detail: "Configured on servers, desktops, and laptops across your organization." },
        { label: "Automated daily backups", detail: "Set-and-forget — backups run automatically, verified daily." },
        { label: "Offsite storage", detail: "Data stored securely in Backblaze's cloud — protected from on-site disasters." },
        { label: "Backup monitoring & alerts", detail: "We get notified if a backup fails — before you ever need to restore." },
        { label: "Restore testing", detail: "Periodic test restores to confirm your backups actually work." },
        { label: "Ransomware protection", detail: "Backblaze versioning keeps clean copies even if local files are encrypted." },
        { label: "Recovery assistance", detail: "When you need files back, we handle the restore — fast." },
      ]}
      steps={[
        { step: "1", title: "Identify", description: "We identify what data needs to be backed up and how frequently." },
        { step: "2", title: "Configure", description: "Backblaze deployed and configured on all target devices." },
        { step: "3", title: "Monitor & Verify", description: "Ongoing monitoring, alert handling, and periodic restore tests." },
      ]}
      notes={[
        "Backblaze keeps 1 year of version history by default.",
        "Recovery can be done via download or shipped hard drive for large restores.",
        "Works alongside on-site backup for a complete 3-2-1 backup strategy.",
      ]}
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80"
    />
  );
}

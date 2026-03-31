import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Data Backup & Recovery | Double Click Computing",
  description: "Home computer backup setup and data recovery for NJ residents. Protect your photos, files, and memories before a hard drive failure.",
};

export default function DataBackup() {
  return (
    <ServiceDetailPage
      breadcrumb="Residential"
      breadcrumbHref="/services/residential"
      tag="Residential & Home Office"
      title="Data Backup & Recovery"
      description="Hard drives fail. Computers get stolen. Accidents happen. A backup running quietly in the background means your photos, documents, and memories are safe no matter what."
      accentColor="sky"
      includes={[
        { label: "Backup solution setup", detail: "Cloud backup (Backblaze, iCloud, OneDrive, or Google) configured and running automatically." },
        { label: "External drive backup", detail: "Local backup to an external drive for fast recovery without internet." },
        { label: "Photo library protection", detail: "Your photos are irreplaceable — we make sure they're backed up properly." },
        { label: "Backup verification", detail: "We confirm backups are actually working before we consider the job done." },
        { label: "Data recovery", detail: "Files accidentally deleted or lost to a drive failure — we attempt recovery." },
        { label: "Recovery testing", detail: "We test a restore so you know the backup works before you need it." },
      ]}
      steps={[
        { step: "1", title: "Assess", description: "We identify what data you have, where it lives, and what would hurt most to lose." },
        { step: "2", title: "Set Up Backup", description: "Backup solution configured, tested, and running automatically." },
        { step: "3", title: "Verify", description: "We confirm backups are completing successfully and show you how to check." },
      ]}
      notes={[
        "The best time to set up a backup is before you need it.",
        "Cloud backup + local drive = the safest combination.",
        "We can recover data from failed drives in many cases — reach out before writing off a drive.",
      ]}
      heroImage="https://source.unsplash.com/1400x700/?data,storage,hard+drive"
    />
  );
}

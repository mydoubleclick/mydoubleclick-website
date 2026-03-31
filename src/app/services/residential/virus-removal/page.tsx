import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Virus & Malware Removal | Double Click Computing",
  description: "Complete virus and malware removal for NJ homeowners. We clean infected computers and set up protection so it doesn't happen again.",
};

export default function VirusRemoval() {
  return (
    <ServiceDetailPage
      breadcrumb="Residential"
      breadcrumbHref="/services/residential"
      tag="Residential & Home Office"
      title="Virus & Malware Removal"
      description="Pop-ups, redirects, ransomware, or just a computer that's acting strange — we remove the infection completely and set up protection so it doesn't happen again."
      accentColor="sky"
      includes={[
        { label: "Full malware scan & removal", detail: "Deep scan using professional tools to find and remove all infections." },
        { label: "Rootkit & adware removal", detail: "Hidden infections that standard antivirus misses — we find and eliminate them." },
        { label: "Browser cleanup", detail: "Remove malicious extensions, reset hijacked homepages, and clear tracking cookies." },
        { label: "Password security review", detail: "If your accounts may have been compromised, we guide you through securing them." },
        { label: "Antivirus installation", detail: "Reputable endpoint protection installed and configured after cleanup." },
        { label: "Prevention education", detail: "We explain how the infection happened and how to avoid it in the future." },
        { label: "System verification", detail: "We confirm the system is clean before we're done." },
      ]}
      steps={[
        { step: "1", title: "Isolate", description: "Disconnect from the network if needed to prevent spread, then start the diagnostic." },
        { step: "2", title: "Clean", description: "Full removal of all malware, followed by a second scan to confirm it's gone." },
        { step: "3", title: "Protect", description: "Antivirus installed, browser secured, and prevention tips shared." },
      ]}
      notes={[
        "Ransomware cases are more complex — recovery depends on backup availability.",
        "We can often work remotely if the computer is still functional.",
        "We'll tell you honestly if it's faster to reinstall Windows than to clean the infection.",
      ]}
      heroImage="https://source.unsplash.com/1400x700/?cybersecurity,protection,antivirus"
    />
  );
}

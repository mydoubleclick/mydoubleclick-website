import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Computer Repair & Tune-Up | Double Click Computing",
  description: "Windows and Mac computer repair and tune-up for NJ homeowners. Slow computers, crashes, hardware failures — diagnosed and fixed.",
};

export default function ComputerRepair() {
  return (
    <ServiceDetailPage
      breadcrumb="Residential"
      breadcrumbHref="/services/residential"
      tag="Residential & Home Office"
      title="Computer Repair & Tune-Up"
      description="Slow, crashing, or just not working right? We diagnose and fix Windows and Mac computers — on-site at your home or remotely when possible."
      accentColor="sky"
      includes={[
        { label: "Full diagnostic", detail: "We identify what's actually wrong before recommending any repairs." },
        { label: "Hardware repair & replacement", detail: "Hard drives, RAM, screens, keyboards, power supplies, and more." },
        { label: "Performance tune-up", detail: "Clean up startup programs, remove bloatware, optimize settings for speed." },
        { label: "Operating system repair", detail: "Windows or macOS issues — crashes, blue screens, boot failures." },
        { label: "Virus & malware removal", detail: "Full malware scan and removal if infections are contributing to problems." },
        { label: "Honest assessment", detail: "If a repair isn't worth the cost relative to a new computer, we'll tell you." },
      ]}
      steps={[
        { step: "1", title: "Describe the Problem", description: "Call, text, or use our contact form to tell us what's happening." },
        { step: "2", title: "Diagnose", description: "We connect remotely or come to your home to run a full diagnostic." },
        { step: "3", title: "Fix It", description: "We explain what we found, confirm you want to proceed, and get it done." },
      ]}
      notes={[
        "We'll always tell you the cost before starting any repair.",
        "Many software issues can be resolved remotely — faster and cheaper.",
        "We support both Windows and Mac computers.",
      ]}
    />
  );
}

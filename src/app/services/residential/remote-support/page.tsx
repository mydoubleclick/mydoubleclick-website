import type { Metadata } from "next";
import Link from "next/link";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Remote Support for Home Users | Double Click Computing",
  description: "Fast remote IT support for NJ homeowners. Download Splashtop SOS and we connect to your computer in minutes — no house call needed.",
};

export default function ResidentialRemoteSupport() {
  return (
    <>
      <ServiceDetailPage
        breadcrumb="Residential"
        breadcrumbHref="/services/residential"
        tag="Residential & Home Office"
        title="Remote Support"
        description="Many computer problems can be fixed in minutes without anyone coming to your home. You download a small app, share a code, and we connect to your computer securely — you watch the whole time."
        accentColor="sky"
        includes={[
          { label: "Remote desktop connection", detail: "We connect to your Windows PC or Mac securely using Splashtop SOS." },
          { label: "Software troubleshooting", detail: "Email issues, printer problems, slow performance, application errors — fixed remotely." },
          { label: "Virus & malware removal", detail: "Many infections can be cleaned remotely without needing to bring in your computer." },
          { label: "Settings & configuration", detail: "Wi-Fi passwords, account settings, email setup — guided or done for you." },
          { label: "Guided walkthroughs", detail: "We share your screen and walk you through anything you're unsure about." },
          { label: "Follow-up support", detail: "If the same issue recurs, we address it at no additional charge." },
        ]}
        steps={[
          { step: "1", title: "Call or Text", description: "Reach out and describe your issue. We'll confirm remote support is the right approach." },
          { step: "2", title: "Download & Share Code", description: "Download Splashtop SOS and share the 9-digit code with us. Takes under 2 minutes." },
          { step: "3", title: "Watch Us Fix It", description: "We connect and resolve the issue while you watch. You can end the session any time." },
        ]}
        notes={[
          "Nothing is installed permanently — Splashtop SOS closes when you do.",
          "Hardware failures require an on-site visit.",
          "We can often help the same day, sometimes within the hour.",
        ]}
        heroImage="https://source.unsplash.com/1400x700/?remote,laptop,support"
      />
      <section className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-extrabold text-slate-900 mb-3">
            Ready to connect?
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Visit our Remote Support page to download Splashtop SOS.
          </p>
          <Link
            href="/remote-support"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded transition-colors"
          >
            Go to Remote Support Page
          </Link>
        </div>
      </section>
    </>
  );
}

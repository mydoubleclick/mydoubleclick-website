import type { Metadata } from "next";
import Link from "next/link";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { Arw } from "@/components/site";

export const metadata: Metadata = {
  title: "Remote Support for Home Users",
  description: "Fast remote IT support for NJ homeowners. Download Splashtop SOS and we connect to your computer in minutes — no house call needed.",
};

export default function ResidentialRemoteSupport() {
  return (
    <ServiceDetailPage
      breadcrumb="Residential"
      breadcrumbHref="/services/residential"
      tag="Residential & Home Office"
      title="Remote Support"
      description="Many computer problems can be fixed in minutes without anyone coming to your home. You download a small app, share a code, and we connect to your computer securely — you watch the whole time."
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
      gfx="remote"
    >
      <section className="pad-s">
        <div className="wrap">
          <div className="panel-ink row between g-lg" style={{ padding: "clamp(1.75rem,4vw,3rem)" }}>
            <div className="stack g-sm">
              <h2 className="display d3">Ready to connect?</h2>
              <p className="small on-ink" style={{ margin: 0 }}>
                Visit our Remote Support page to download Splashtop SOS.
              </p>
            </div>
            <Link href="/remote-support" className="btn btn-pale btn-lg">
              Go to Remote Support Page <Arw />
            </Link>
          </div>
        </div>
      </section>
    </ServiceDetailPage>
  );
}

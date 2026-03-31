import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Remote Monitoring & Management | Double Click Computing",
  description: "Atera RMM for NJ businesses. 24/7 system monitoring, automated patching, alerts, and proactive IT management.",
};

export default function RemoteMonitoring() {
  return (
    <ServiceDetailPage
      breadcrumb="Business IT"
      breadcrumbHref="/services/business"
      tag="Business IT Services"
      title="Remote Monitoring & Management"
      description="We use Atera RMM to keep a constant eye on your systems — catching problems before they cause downtime. Think of it as a silent IT technician watching your network around the clock."
      includes={[
        { label: "24/7 system health monitoring", detail: "CPU, memory, disk, and network monitored continuously with threshold alerts." },
        { label: "Automated patch management", detail: "Windows and third-party software updates applied on schedule — tested first." },
        { label: "Disk space & performance alerts", detail: "We get notified before drives fill up or systems slow to a crawl." },
        { label: "Software inventory", detail: "Full inventory of all software installed across your environment." },
        { label: "Hardware inventory", detail: "Asset tracking for every managed device — make, model, specs, and warranty status." },
        { label: "Remote access for support", detail: "Secure remote access for fast issue resolution without waiting for a truck roll." },
        { label: "Monthly health reports", detail: "Summary of your environment health, patches applied, and any issues resolved." },
      ]}
      steps={[
        { step: "1", title: "Agent Deployment", description: "Atera agent installed on all managed devices — takes minutes per machine." },
        { step: "2", title: "Baseline & Configuration", description: "Alerts configured based on your environment's normal behavior." },
        { step: "3", title: "Continuous Monitoring", description: "We monitor, respond to alerts, and apply patches on an ongoing basis." },
      ]}
      notes={[
        "RMM is typically bundled with managed IT service — not a separate add-on.",
        "Agents are lightweight and don't impact system performance.",
        "All remote sessions are logged and auditable.",
      ]}
    />
  );
}

// Technology categories shown under /technology.
// Brand names are listed as products we install and support — never as
// "partners" or "authorized dealers" unless that relationship actually exists.

export interface TechPoint {
  label: string;
  detail: string;
}

export interface TechProduct {
  brand: string;
  products: string;
}

export interface TechCategory {
  slug: string;
  title: string;
  shortTitle: string;
  /** One line for cards and meta descriptions */
  summary: string;
  /** Intro paragraph on the detail page */
  intro: string;
  /** Heroicons outline path(s) */
  icon: string;
  heroImage: string;
  business: TechPoint[];
  home: TechPoint[];
  products: TechProduct[];
  notes?: string[];
}

export const technologyCategories: TechCategory[] = [
  {
    slug: "smart-home-automation",
    title: "Smart Home & Automation",
    shortTitle: "Smart Home",
    summary:
      "Lighting, thermostats, locks, and voice assistants that work together — and keep working.",
    intro:
      "Smart home technology is only convenient when it's set up correctly. We design, install, and connect smart devices so your lights, climate, locks, and voice assistants work together on a secure network — for your home and your office.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    heroImage:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=1400&q=80",
    business: [
      { label: "Smart thermostats & energy control", detail: "Schedule heating and cooling around business hours and manage multiple locations from one app." },
      { label: "Smart locks & keyless entry", detail: "Issue and revoke door codes for staff, cleaners, and vendors without changing locks." },
      { label: "Lighting automation", detail: "Automated schedules and occupancy-based lighting for offices, showrooms, and common areas." },
      { label: "Separate, secure device network", detail: "Smart devices are isolated from your business computers so one weak gadget can't expose your data." },
    ],
    home: [
      { label: "Whole-home automation", detail: "Lights, shades, thermostats, and locks that follow your routines — morning, away, and bedtime." },
      { label: "Voice assistant setup", detail: "Alexa, Google, or Siri configured to control your devices, with privacy settings reviewed." },
      { label: "One app, not ten", detail: "We connect devices from different brands so you're not juggling a separate app for everything." },
      { label: "Family-friendly training", detail: "We show everyone in the house how to use it — and how to turn things off." },
    ],
    products: [
      { brand: "Google Nest", products: "Thermostats, speakers & displays" },
      { brand: "Amazon Alexa", products: "Echo speakers & smart displays" },
      { brand: "Apple Home", products: "HomeKit accessories & HomePod" },
      { brand: "ecobee", products: "Smart thermostats & sensors" },
      { brand: "Philips Hue", products: "Smart lighting" },
      { brand: "Lutron Caséta", products: "Smart switches, dimmers & shades" },
      { brand: "Yale & Schlage", products: "Smart locks & keypads" },
      { brand: "Matter", products: "Cross-brand smart home standard" },
    ],
    notes: [
      "We favor devices that support Matter, so your system isn't locked into a single brand.",
      "Hardwired switches and thermostats that require electrical work are coordinated with a licensed electrician.",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    summary:
      "Layered protection for your devices, accounts, and network — at the office and at home.",
    intro:
      "Cyber threats don't care whether you're a 300-person company or a family at home. We build layered protection — endpoint security, firewalls, strong authentication, and reliable backup — and we monitor it so problems are caught early.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&q=80",
    business: [
      { label: "Managed endpoint protection", detail: "Business-grade antivirus and threat detection on every computer, centrally monitored." },
      { label: "Next-generation firewalls", detail: "Web filtering, intrusion prevention, and secure VPN access for remote staff." },
      { label: "Multi-factor authentication", detail: "MFA on email, Microsoft 365, Google Workspace, and critical business apps." },
      { label: "Ransomware-ready backup", detail: "Offsite, versioned backups so a bad day doesn't become a lost business." },
    ],
    home: [
      { label: "Family device protection", detail: "Security software on every computer in the house — kids' laptops included." },
      { label: "Password manager setup", detail: "Stop reusing passwords. We set it up, import your logins, and show you how it works." },
      { label: "Account lockdown", detail: "Two-factor authentication on email, banking, Apple ID, and Google accounts." },
      { label: "Scam & phishing help", detail: "Not sure an email or phone call is real? Ask us before you click." },
    ],
    products: [
      { brand: "Bitdefender", products: "GravityZone endpoint security" },
      { brand: "Fortinet", products: "FortiGate firewalls" },
      { brand: "Microsoft", products: "Defender & Entra ID security" },
      { brand: "1Password", products: "Password management" },
      { brand: "Bitwarden", products: "Password management" },
      { brand: "Yubico", products: "YubiKey hardware security keys" },
      { brand: "Cisco Duo", products: "Multi-factor authentication" },
      { brand: "Backblaze", products: "Cloud backup & recovery" },
    ],
    notes: [
      "Most businesses start with a free security review of their current setup.",
      "Security is ongoing — we monitor and update protection, not just install it.",
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    shortTitle: "AI",
    summary:
      "Practical AI tools that save real time — set up securely and explained in plain English.",
    intro:
      "AI is showing up in everything from email to laptops. We help you separate the useful from the hype, choose the right tools, set them up with your data protected, and train your team or family to use them well.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80",
    business: [
      { label: "AI assistants for your team", detail: "Copilot, ChatGPT, Gemini, or Claude — chosen for how your business actually works." },
      { label: "Data protection & policies", detail: "Business plans and settings that keep your company data out of public AI training." },
      { label: "Meeting notes & summaries", detail: "Automatic transcripts, action items, and follow-ups from Zoom and Teams calls." },
      { label: "AI-ready computers", detail: "Guidance on Copilot+ PCs and Macs with on-device AI when it's time to upgrade." },
    ],
    home: [
      { label: "Getting started with AI", detail: "A patient walkthrough of what AI assistants can do — writing, planning, research, and more." },
      { label: "Built-in AI features", detail: "Set up Apple Intelligence, Galaxy AI, and Gemini features already on your devices." },
      { label: "Safety & privacy", detail: "What not to share, how to spot AI-generated scams, and settings to review." },
      { label: "Help for students & parents", detail: "Sensible setup and guardrails for AI tools used for schoolwork." },
    ],
    products: [
      { brand: "Microsoft", products: "Microsoft 365 Copilot" },
      { brand: "OpenAI", products: "ChatGPT" },
      { brand: "Google", products: "Gemini" },
      { brand: "Anthropic", products: "Claude" },
      { brand: "Apple", products: "Apple Intelligence" },
      { brand: "Copilot+ PCs", products: "Dell, Lenovo & HP AI laptops" },
      { brand: "Zoom", products: "AI Companion meeting summaries" },
      { brand: "Otter.ai", products: "Meeting transcription" },
    ],
    notes: [
      "We recommend the tool that fits you — we don't push a single AI platform.",
      "Free AI plans may use what you type for training. We'll explain the difference before you share business data.",
    ],
  },
  {
    slug: "wifi-networking",
    title: "Wi-Fi & Networking",
    shortTitle: "Wi-Fi & Networking",
    summary:
      "Fast, reliable Wi-Fi and wired networks with coverage in every room and every office.",
    intro:
      "Every connected device depends on the network underneath it. We design and install business networks and whole-home Wi-Fi — including mesh systems and the latest Wi-Fi 7 equipment — so everything stays fast, secure, and connected.",
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
    heroImage:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80",
    business: [
      { label: "Business-grade Wi-Fi", detail: "Managed access points sized for your space, staff, and number of devices." },
      { label: "Switches & structured cabling", detail: "Clean, labeled wired connections for desks, printers, phones, and cameras." },
      { label: "Guest & device networks", detail: "Separate networks for visitors and smart devices, isolated from business systems." },
      { label: "Internet failover", detail: "A backup internet connection that takes over automatically when your main line goes down." },
    ],
    home: [
      { label: "Whole-home mesh Wi-Fi", detail: "No more dead zones in the bedroom, basement, backyard, or home office." },
      { label: "Router upgrades", detail: "Replace aging or ISP-supplied equipment with faster, more secure hardware." },
      { label: "Wired where it counts", detail: "Ethernet for home offices, gaming, and streaming for rock-solid connections." },
      { label: "Parental controls", detail: "Screen-time schedules and content filtering managed from your phone." },
    ],
    products: [
      { brand: "Ubiquiti UniFi", products: "Access points, switches & gateways" },
      { brand: "Fortinet", products: "FortiAP & FortiSwitch" },
      { brand: "eero", products: "Mesh Wi-Fi systems" },
      { brand: "Netgear Orbi", products: "Mesh Wi-Fi systems" },
      { brand: "TP-Link", products: "Deco mesh & Omada business Wi-Fi" },
      { brand: "Wi-Fi 7", products: "Latest-generation wireless" },
    ],
    notes: [
      "We start with a walkthrough to find dead zones and the right equipment placement.",
    ],
  },
  {
    slug: "cameras-access-control",
    title: "Security Cameras & Access Control",
    shortTitle: "Cameras & Access",
    summary:
      "Cameras, video doorbells, and door access you can check from anywhere.",
    intro:
      "See who's at the door, what's happening at the office, and who came and went — from your phone. We install camera systems, video doorbells, and access control, and set them up on a secure network with sensible privacy settings.",
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    heroImage:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1400&q=80",
    business: [
      { label: "Office & storefront cameras", detail: "Indoor and outdoor cameras with local recording and remote viewing." },
      { label: "Door access control", detail: "Key cards, fobs, or phone-based entry with a log of who entered and when." },
      { label: "Multi-location viewing", detail: "Check every site from one app or dashboard." },
      { label: "Secure setup", detail: "Cameras on their own network with changed default passwords — a common weak spot." },
    ],
    home: [
      { label: "Video doorbells", detail: "See and talk to visitors and delivery drivers from anywhere." },
      { label: "Indoor & outdoor cameras", detail: "Coverage for driveways, yards, and entrances with motion alerts." },
      { label: "Package & motion alerts", detail: "Smart notifications tuned so you get the alerts that matter — not every passing car." },
      { label: "Privacy settings", detail: "Recording zones, sharing, and account security reviewed and set correctly." },
    ],
    products: [
      { brand: "Ring", products: "Video doorbells & cameras" },
      { brand: "Google Nest", products: "Nest Cam & Doorbell" },
      { brand: "Arlo", products: "Wireless security cameras" },
      { brand: "Ubiquiti UniFi", products: "UniFi Protect & Access" },
      { brand: "Reolink", products: "PoE & wireless cameras" },
      { brand: "Wyze", products: "Affordable home cameras" },
    ],
    notes: [
      "Check local and state rules before recording audio — we'll configure systems accordingly.",
    ],
  },
  {
    slug: "computers-peripherals",
    title: "Computers & Peripherals",
    shortTitle: "Computers & Peripherals",
    summary:
      "Laptops, desktops, monitors, docks, and printers — chosen, set up, and supported.",
    intro:
      "The right hardware makes work easier. We help you choose computers and accessories that fit how you work, then set everything up — data transferred, docks connected, printers working — so it's ready on day one.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    heroImage:
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=1400&q=80",
    business: [
      { label: "Laptop & desktop deployment", detail: "Business-class machines configured, secured, and ready for each employee." },
      { label: "Docking stations & multi-monitor desks", detail: "One cable to connect a laptop to monitors, keyboard, network, and power." },
      { label: "Printers & scanners", detail: "Network printers set up for everyone, including Mac and Windows users." },
      { label: "Headsets & webcams", detail: "Clear audio and video for calls in the office or at home." },
    ],
    home: [
      { label: "Buying advice", detail: "Honest recommendations on what to buy — and what you don't need." },
      { label: "New computer setup", detail: "Files, photos, email, and apps moved over from your old computer." },
      { label: "Home office desk setup", detail: "Monitors, keyboards, mice, and docks for a comfortable workspace." },
      { label: "Printers that print", detail: "Wireless printing from computers, phones, and tablets." },
    ],
    products: [
      { brand: "Apple", products: "Mac, iPad & iPhone" },
      { brand: "Dell", products: "Laptops, desktops & monitors" },
      { brand: "Lenovo", products: "ThinkPad & ThinkCentre" },
      { brand: "HP", products: "Laptops, desktops & printers" },
      { brand: "Microsoft Surface", products: "Laptops & tablets" },
      { brand: "Logitech", products: "Keyboards, mice & webcams" },
      { brand: "CalDigit", products: "Docking stations" },
      { brand: "Brother & Epson", products: "Printers & scanners" },
    ],
  },
  {
    slug: "conference-room-video",
    title: "Conference Rooms & Video Calls",
    shortTitle: "Conference & Video",
    summary:
      "Meeting rooms and home setups where the camera, mic, and screen just work.",
    intro:
      "Nothing wastes a meeting like fighting with the technology. We set up conference rooms and personal video-call setups with the right cameras, microphones, and displays for Zoom, Microsoft Teams, and Google Meet.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80",
    business: [
      { label: "Conference room systems", detail: "All-in-one video bars and room kits sized for huddle rooms to boardrooms." },
      { label: "Wireless screen sharing", detail: "Share a laptop screen to the room display without hunting for cables." },
      { label: "Microsoft Teams & Zoom Rooms", detail: "One-touch meeting join from a tablet on the table." },
      { label: "Audio that carries", detail: "Microphones and speakers placed so remote attendees hear everyone." },
    ],
    home: [
      { label: "Work-from-home video setup", detail: "Webcam, lighting, and microphone that make you look and sound professional." },
      { label: "Family video calls", detail: "Easy setups on a TV or tablet for calling grandparents and relatives." },
      { label: "Noise-canceling headsets", detail: "Clear calls even with a busy household." },
      { label: "Streaming & content creation", detail: "Cameras, mics, and lighting for creators and podcasters." },
    ],
    products: [
      { brand: "Logitech", products: "Rally, MeetUp & Brio webcams" },
      { brand: "Poly", products: "Studio video bars & headsets" },
      { brand: "Owl Labs", products: "Meeting Owl 360° cameras" },
      { brand: "Jabra", products: "PanaCast cameras & headsets" },
      { brand: "Microsoft Teams Rooms", products: "Room systems" },
      { brand: "Zoom Rooms", products: "Room systems" },
    ],
  },
  {
    slug: "home-entertainment",
    title: "Home Entertainment & Streaming",
    shortTitle: "Home Entertainment",
    summary:
      "Smart TVs, streaming devices, and whole-home audio, set up and connected.",
    intro:
      "Modern TVs, streaming boxes, and speakers are really just computers on your network. We connect them, sort out the apps and accounts, and make sure the remote does what you expect — in the living room, the lobby, or the waiting room.",
    icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
    heroImage:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1400&q=80",
    business: [
      { label: "Lobby & waiting room displays", detail: "Screens for TV, announcements, or digital signage that run on their own." },
      { label: "Background music", detail: "Multi-room audio for offices, showrooms, and restaurants." },
      { label: "Secure device setup", detail: "TVs and streaming devices kept off the network your business data uses." },
    ],
    home: [
      { label: "Smart TV & streaming setup", detail: "Apps, accounts, and picture settings configured on your new TV." },
      { label: "Whole-home audio", detail: "Wireless speakers and soundbars grouped so music plays in every room." },
      { label: "Universal control", detail: "Fewer remotes — one simple way to control the TV, soundbar, and streaming box." },
      { label: "Streaming that doesn't buffer", detail: "Wi-Fi and wired connections that handle 4K streaming." },
    ],
    products: [
      { brand: "Sonos", products: "Speakers & soundbars" },
      { brand: "Apple TV", products: "Streaming & AirPlay" },
      { brand: "Roku", products: "Streaming devices & TVs" },
      { brand: "Amazon Fire TV", products: "Streaming devices" },
      { brand: "Google TV", products: "Google TV Streamer" },
      { brand: "Samsung, LG & Sony", products: "Smart TVs" },
    ],
    notes: [
      "Wall mounting and in-wall wiring are coordinated with a qualified installer when needed.",
    ],
  },
  {
    slug: "power-backup",
    title: "Power Protection & Backup Power",
    shortTitle: "Power & Backup",
    summary:
      "Battery backups and surge protection that keep equipment safe when the power blinks.",
    intro:
      "A power flicker can corrupt files, fry equipment, and take your internet down. We install battery backups and surge protection for computers, servers, and network gear — and portable power options to keep essentials running during outages.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    heroImage:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=80",
    business: [
      { label: "UPS battery backup", detail: "Keep servers, firewalls, and network equipment running through short outages." },
      { label: "Safe automatic shutdown", detail: "Systems shut down cleanly during long outages to protect data." },
      { label: "Battery health monitoring", detail: "Aging UPS batteries replaced before they fail when you need them." },
    ],
    home: [
      { label: "Keep the internet up", detail: "A battery backup on your modem and router so Wi-Fi survives brief outages." },
      { label: "Surge protection", detail: "Protection for computers, TVs, and home office equipment." },
      { label: "Portable power stations", detail: "Battery power for phones, laptops, and essentials during longer outages." },
    ],
    products: [
      { brand: "APC by Schneider Electric", products: "UPS battery backups" },
      { brand: "CyberPower", products: "UPS & surge protection" },
      { brand: "Eaton", products: "Business UPS systems" },
      { brand: "EcoFlow", products: "Portable power stations" },
      { brand: "Anker SOLIX", products: "Portable power stations" },
      { brand: "Jackery", products: "Portable power stations" },
    ],
    notes: [
      "Whole-home generators and battery systems tied into your electrical panel require a licensed electrician — we're happy to coordinate.",
    ],
  },
];

export function getTechnologyCategory(slug: string) {
  return technologyCategories.find((c) => c.slug === slug);
}

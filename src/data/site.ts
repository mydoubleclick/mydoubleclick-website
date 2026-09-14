// Shared facts used across pages.

export const PHONE_DISPLAY = "(888) 9-CLICK-9";
export const PHONE_HREF = "tel:+18889254259";
export const EMAIL = "jason@mydoubleclick.com";
export const ZACH_EMAIL = "zach@mydoubleclick.com";
export const BOOKING_URL = "https://DoubleClick.as.me/";

/** On-site service counties, keyed by county FIPS code (used by the NJ map). */
export const SERVED_COUNTIES: Record<string, string> = {
  "34013": "Essex",
  "34027": "Morris",
  "34003": "Bergen",
  "34037": "Sussex",
  "34041": "Warren",
  "34031": "Passaic",
  "34017": "Hudson",
  "34019": "Hunterdon",
  "34035": "Somerset",
  "34039": "Union",
  "34023": "Middlesex",
  "34021": "Mercer",
  "34025": "Monmouth",
};

// Display order (Object.values would sort these by numeric FIPS key)
export const counties = [
  "Essex", "Morris", "Bergen", "Sussex", "Warren", "Passaic", "Hudson",
  "Hunterdon", "Somerset", "Union", "Middlesex", "Mercer", "Monmouth",
];

export const industries = [
  "Medical & Dental Practices",
  "Financial Firms",
  "Legal Firms",
  "Government & Municipalities",
  "Manufacturing & Light Industry",
  "Education Providers",
  "Architecture & Design",
  "Restaurant & Hospitality",
  "Home Offices & Residential",
];

// Custom inline SVG brand icons for tools not available in devicons CDN
// Hand-crafted to match official brand aesthetics

type P = { size?: number };

export const NetSuiteIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#1F6FEB"/>
    <path d="M8 28V12h4.5L20 22.5V12H24V28h-4.5L12 17.5V28H8Z" fill="white"/>
    <path d="M26 12h6v3h-6v-3Z" fill="#93C5FD"/>
    <path d="M26 18.5h6v3h-6v-3Z" fill="#93C5FD"/>
    <path d="M26 25h6v3h-6v-3Z" fill="#93C5FD"/>
  </svg>
);

export const SuiteScriptIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#0052CC"/>
    <path d="M10 27l6-14h3l-6 14h-3Z" fill="white"/>
    <path d="M19 27l6-14h3l-6 14h-3Z" fill="#93C5FD" opacity="0.7"/>
    <circle cx="31" cy="13" r="3" fill="#60A5FA"/>
  </svg>
);

export const SuiteFlowIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#0D47A1"/>
    <rect x="8" y="9" width="10" height="8" rx="2" fill="white"/>
    <rect x="22" y="9" width="10" height="8" rx="2" fill="#93C5FD"/>
    <rect x="15" y="23" width="10" height="8" rx="2" fill="white"/>
    <path d="M13 17v3h14v-3" stroke="#60A5FA" strokeWidth="1.5" fill="none"/>
    <path d="M20 20v3" stroke="#60A5FA" strokeWidth="1.5"/>
  </svg>
);

export const SuiteletsIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#1E40AF"/>
    <rect x="8" y="10" width="24" height="3" rx="1.5" fill="white"/>
    <rect x="8" y="16" width="18" height="3" rx="1.5" fill="#93C5FD"/>
    <rect x="8" y="22" width="21" height="3" rx="1.5" fill="#93C5FD"/>
    <rect x="8" y="28" width="14" height="3" rx="1.5" fill="#60A5FA"/>
  </svg>
);

export const RESTletsIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#1E3A5F"/>
    <path d="M8 20h24M26 14l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="20" r="2.5" fill="#60A5FA"/>
  </svg>
);

export const SharePointIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#0078D4"/>
    <circle cx="16" cy="16" r="8" fill="#50A0E0"/>
    <circle cx="24" cy="24" r="9" fill="#0078D4" stroke="white" strokeWidth="1"/>
    <circle cx="24" cy="24" r="6" fill="#1890F1"/>
    <text x="24" y="28" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white" fontFamily="Arial">S</text>
  </svg>
);

export const PowerAppsIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#742774"/>
    <path d="M12 8l10 12-4 2 8 10H16L10 20l4-2L8 8h4Z" fill="white"/>
    <path d="M22 8h8L26 20l4 2-6 10" fill="none" stroke="#E879F9" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const PowerAutomateIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#0B6FD6"/>
    <path d="M20 8C13.4 8 8 13.4 8 20s5.4 12 12 12 12-5.4 12-12S26.6 8 20 8Z" fill="#1E90FF" opacity="0.3"/>
    <path d="M16 13l12 7-12 7V13Z" fill="white"/>
    <path d="M8 26c2 3 5 5 8 5.5" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

export const PowerBIIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#1A1A2E"/>
    <rect x="8" y="24" width="5" height="8" rx="1" fill="#F2C811"/>
    <rect x="15" y="18" width="5" height="14" rx="1" fill="#F2C811" opacity="0.85"/>
    <rect x="22" y="12" width="5" height="20" rx="1" fill="#F2C811" opacity="0.7"/>
    <rect x="29" y="8" width="5" height="24" rx="1" fill="#F2C811" opacity="0.5"/>
  </svg>
);

export const TeamsIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#464EB8"/>
    <circle cx="25" cy="13" r="4" fill="#7B83EB"/>
    <rect x="19" y="18" width="12" height="8" rx="3" fill="#7B83EB"/>
    <circle cx="16" cy="15" r="5" fill="#5059C9"/>
    <rect x="8" y="21" width="14" height="9" rx="3" fill="#5059C9"/>
    <rect x="8" y="21" width="7" height="9" rx="0" fill="#5059C9"/>
  </svg>
);

export const JazzHRIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#1A1A2E"/>
    <path d="M20 6C12.3 6 6 12.3 6 20s6.3 14 14 14 14-6.3 14-14S27.7 6 20 6Z" fill="#FF6B35" opacity="0.15"/>
    <text x="20" y="17" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FF6B35" fontFamily="Arial, sans-serif">JAZZ</text>
    <text x="20" y="27" textAnchor="middle" fontSize="7" fontWeight="700" fill="#FF8C5A" fontFamily="Arial, sans-serif">HR</text>
    <rect x="10" y="19" width="20" height="1.5" rx="0.75" fill="#FF6B35" opacity="0.4"/>
  </svg>
);

export const GLPIIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#D94F00"/>
    <rect x="7" y="11" width="26" height="18" rx="3" fill="none" stroke="white" strokeWidth="2"/>
    <rect x="12" y="16" width="7" height="2" rx="1" fill="white"/>
    <rect x="12" y="20" width="12" height="2" rx="1" fill="white"/>
    <rect x="12" y="24" width="9" height="2" rx="1" fill="white"/>
    <circle cx="28" cy="16" r="3" fill="#FF8C5A"/>
    <path d="M27 16h2M28 15v2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export const Desk365Icon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#0052A5"/>
    <circle cx="20" cy="18" r="7" fill="none" stroke="white" strokeWidth="2"/>
    <path d="M17 18a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" fill="white"/>
    <path d="M10 30c0-4 4.5-7 10-7s10 3 10 7" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

export const VercelIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#1A1A1A"/>
    <path d="M20 9L34 31H6L20 9Z" fill="white"/>
  </svg>
);

export const ShadCNIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#18181B"/>
    <path d="M10 20h20M20 10v8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M15 26l5 5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const DaisyUIIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#1D232A"/>
    <circle cx="20" cy="20" r="4" fill="#FFBE00"/>
    <ellipse cx="20" cy="11" rx="3" ry="5" fill="#FF69B4"/>
    <ellipse cx="20" cy="29" rx="3" ry="5" fill="#FF69B4"/>
    <ellipse cx="11" cy="20" rx="5" ry="3" fill="#7C3AED"/>
    <ellipse cx="29" cy="20" rx="5" ry="3" fill="#7C3AED"/>
  </svg>
);

export const DeskIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#0A2E6E"/>
    <rect x="7" y="10" width="26" height="16" rx="3" fill="#1D4ED8" opacity="0.6"/>
    <rect x="7" y="10" width="26" height="16" rx="3" fill="none" stroke="#60A5FA" strokeWidth="1.5"/>
    <rect x="11" y="15" width="8" height="2" rx="1" fill="white"/>
    <rect x="11" y="19" width="14" height="2" rx="1" fill="#93C5FD"/>
    <path d="M16 26v5M24 26v5M12 31h16" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const MicrosoftListsIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#217346"/>
    <rect x="8" y="8" width="24" height="24" rx="2" fill="#2E7D52"/>
    <rect x="12" y="13" width="4" height="4" rx="1" fill="#6FCF97"/>
    <rect x="18" y="14" width="10" height="2" rx="1" fill="white"/>
    <rect x="12" y="20" width="4" height="4" rx="1" fill="#6FCF97"/>
    <rect x="18" y="21" width="10" height="2" rx="1" fill="white"/>
    <rect x="12" y="27" width="4" height="4" rx="1" fill="#6FCF97"/>
    <rect x="18" y="28" width="7" height="2" rx="1" fill="white"/>
  </svg>
);

export const LaravelSailIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#FF2D20" opacity="0.9"/>
    <path d="M20 8 L28 20 L20 24 L12 20 Z" fill="white" opacity="0.9"/>
    <path d="M12 20 L20 24 L20 34 L12 30 Z" fill="white" opacity="0.6"/>
    <path d="M28 20 L20 24 L20 34 L28 30 Z" fill="white" opacity="0.75"/>
  </svg>
);

export const SanctumIcon = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#7F1D1D"/>
    <path d="M20 8l10 5v9c0 5-4 9-10 10C14 31 10 27 10 22v-9l10-5Z" fill="#FF2D20" opacity="0.4" stroke="#FF2D20" strokeWidth="1.5"/>
    <path d="M16 20l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Map: tech label → component
export const CUSTOM_ICONS: Record<string, (p: P) => JSX.Element> = {
  "NetSuite":       NetSuiteIcon,
  "SuiteScript":    SuiteScriptIcon,
  "SuiteFlow":      SuiteFlowIcon,
  "SuiteBuilder":   SuiteletsIcon,
  "Suitelets":      SuiteletsIcon,
  "RESTlets":       RESTletsIcon,
  "Saved Search":   RESTletsIcon,
  "PDF Templates":  SuiteletsIcon,
  "SharePoint":     SharePointIcon,
  "Power Apps":     PowerAppsIcon,
  "Power Automate": PowerAutomateIcon,
  "Power BI":       PowerBIIcon,
  "Power BI API":   PowerBIIcon,
  "Teams":          TeamsIcon,
  "Teams API":      TeamsIcon,
  "Jazz HR":        JazzHRIcon,
  "GLPI":           GLPIIcon,
  "Desk 365":       Desk365Icon,
  "Vercel":         VercelIcon,
  "ShadCN UI":      ShadCNIcon,
  "DaisyUI":        DaisyUIIcon,
  "MS Lists":       MicrosoftListsIcon,
  "Laravel Sail":   LaravelSailIcon,
  "Sanctum":        SanctumIcon,
  "NetSuite API":   NetSuiteIcon,
};

export function hasCustomIcon(label: string): boolean {
  return label in CUSTOM_ICONS;
}

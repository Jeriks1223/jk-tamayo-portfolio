export const PERSONAL = {
  name: "Jericho Kyle M. Tamayo",
  shortName: "Jericho",
  headline: "Building Enterprise Systems, Automations, and Scalable Business Solutions",
  roles: ["NetSuite Developer", "Full Stack Developer", "AI Ready"],
  description:
    "Passionate software engineer specializing in ERP customization, workflow automation, cloud infrastructure, enterprise application development, and business process optimization. Experienced in building solutions across NetSuite, Microsoft Power Platform, AWS, .NET, Next.js, SQL Server, and modern web technologies.",
  email: "jerectamz@gmail.com",
  location: "Cebu, Philippines",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
};

export const STATS = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 25, suffix: "+" },
  { label: "Systems Developed", value: 15, suffix: "+" },
  { label: "Technologies Used", value: 30, suffix: "+" },
  { label: "Cloud Deployments", value: 20, suffix: "+" },
];

export const TECH_STACK = [
  "NetSuite", "SuiteScript", "Next.js", "TypeScript", "C#",
  "ASP.NET", "PostgreSQL", "AWS", "SharePoint", "Power Apps", "Docker", "Linux",
];

export const SKILLS = [
  {
    category: "ERP & Enterprise Systems",
    icon: "🔷",
    color: "rgba(124,106,244,0.15)",
    items: ["NetSuite", "SuiteScript", "SuiteFlow", "SuiteBuilder", "Suitelets", "RESTlets", "Saved Searches", "Analytics", "Advanced PDF Templates"],
  },
  {
    category: "Full Stack Development",
    icon: "💻",
    color: "rgba(34,211,238,0.15)",
    items: ["Next.js", "ASP.NET MVC", ".NET Framework", "C#", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "rgba(52,211,153,0.15)",
    items: ["SQL Server", "MSSQL", "MySQL", "PostgreSQL", "Microsoft Lists"],
  },
  {
    category: "Microsoft Ecosystem",
    icon: "🪟",
    color: "rgba(251,191,36,0.15)",
    items: ["SharePoint", "Power Apps", "Power Automate", "Dynamics 365", "Microsoft 365"],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    color: "rgba(244,114,182,0.15)",
    items: ["AWS EC2", "Linux", "Docker", "WSL", "Server Administration", "Azure"],
  },
  {
    category: "Dev Tools & Web",
    icon: "🔧",
    color: "rgba(167,139,250,0.15)",
    items: ["Git", "GitHub", "Bitbucket", "TFS", "DevExpress", "HTML", "CSS", "Bootstrap", "Drupal", "WordPress"],
  },
  {
    category: "Business Analysis",
    icon: "📋",
    color: "rgba(34,211,238,0.12)",
    items: ["Requirement Gathering", "BRD Documentation", "FSD Documentation", "User Stories", "Process Mapping", "Gap Analysis", "UAT Support", "QA Testing", "User Training"],
  },
];

export const EXPERIENCE = [
  {
    company: "Global AutoDistribution Inc.",
    role: "NetSuite Developer · SharePoint Developer · Full Stack Developer · Business Systems Analyst",
    period: "February 2025 – Present",
    location: "Cebu, PH",
    current: true,
    description:
      "Develops and maintains custom NetSuite solutions including SuiteScripts, SuiteFlow workflows, custom forms, and advanced reporting. Handles Power Platform and SharePoint development while also architecting full-stack web applications deployed to AWS. Serves as Business Systems Analyst bridging stakeholder requirements to technical solutions.",
    tags: ["NetSuite", "SuiteScript", "SuiteFlow", "SharePoint", "Power Apps", "Power Automate", "Next.js", "AWS"],
  },
  {
    company: "Symon Systems and Allied Services",
    role: "Junior Cloud Engineer / Junior Software Engineer",
    period: "October 2023 – January 2025",
    location: "",
    current: false,
    description:
      "Managed AWS EC2 infrastructure and SQL Server databases. Developed POS applications in C# WinForms, handled deployment operations, documentation, and QA testing across enterprise client environments.",
    tags: ["AWS EC2", "SQL Server", "C#", "WinForms", "POS Development", "Documentation"],
  },
  {
    company: "Techverse Technology Network and Data Solution",
    role: "Network Field Technician",
    period: "July 2023 – September 2023",
    location: "",
    current: false,
    description:
      "Deployed and maintained network infrastructure including IPTV, PoE systems, wireless networks, PABX, and SIP configurations for enterprise clients.",
    tags: ["Networking", "IPTV", "PoE", "PABX", "SIP"],
  },
  {
    company: "BlendIT",
    role: "Web Developer Intern",
    period: "February 2023 – June 2023",
    location: "",
    current: false,
    description:
      "Built and maintained Drupal and WordPress websites. Administered Linux servers and Docker environments, handled PHP development and MySQL database management.",
    tags: ["Drupal", "WordPress", "Linux", "Docker", "PHP", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "NetSuite Development & Automation Platform",
    description:
      "End-to-end NetSuite customization suite — saved searches, analytics dashboards, workflow automations, SuiteScripts, Suitelets, custom forms, and advanced PDF templates driving ERP efficiency across subsidiaries.",
    icon: "🔷",
    color: "rgba(124,106,244,0.15)",
    tech: ["NetSuite", "SuiteScript", "SuiteFlow"],
    features: ["Saved Searches", "Analytics Dashboards", "Workflow Automation", "SuiteScripts", "Suitelets", "Custom Forms", "PDF Templates"],
    category: "ERP",
  },
  {
    title: "Dealer Parts Inquiry System",
    description:
      "Role-based inventory inquiry platform allowing dealers and managers to monitor parts availability across multiple locations with dealer/SRP pricing, activity tracking, and dynamic reporting.",
    icon: "📦",
    color: "rgba(34,211,238,0.15)",
    tech: ["Next.js", "MySQL", "AWS"],
    features: ["Dealer Pricing", "SRP Pricing", "Inventory Visibility", "Reporting", "Activity Tracking"],
    category: "Web App",
  },
  {
    title: "Retail Sales & Inventory Tracking System",
    description:
      "Enterprise reporting platform integrated with NetSuite. Sales tracking, unit monitoring, dashboard analytics, Excel exports, file upload system, and dynamic reporting for operations management.",
    icon: "📊",
    color: "rgba(52,211,153,0.15)",
    tech: ["Next.js", "PostgreSQL", "NetSuite"],
    features: ["Sales Tracking", "Unit Monitoring", "Dashboard Analytics", "Excel Exports", "File Upload"],
    category: "Web App",
  },
  {
    title: "Cash Advance Management System",
    description:
      "Automated approval workflow for employee cash advances built on Power Apps, Power Automate, and SharePoint — eliminating paper-based processes with structured routing and audit trails.",
    icon: "💸",
    color: "rgba(251,191,36,0.15)",
    tech: ["Power Apps", "SharePoint", "Power Automate"],
    features: ["Approval Workflow", "Power Automate", "Power Apps", "SharePoint Integration"],
    category: "Power Platform",
  },
  {
    title: "Fuel Request & Approval System",
    description:
      "Mobile-friendly fuel request system with structured approval routing built on the Power Platform — streamlining fleet fuel management with real-time status tracking and workflow notifications.",
    icon: "⛽",
    color: "rgba(244,114,182,0.15)",
    tech: ["Power Apps", "Power Automate", "SharePoint"],
    features: ["Approval Routing", "Workflow Automation", "Mobile Friendly Forms"],
    category: "Power Platform",
  },
  {
    title: "Enterprise POS Ecosystem",
    description:
      "Full-featured point-of-sale ecosystem including POS application, receipt printing, PDE server integration, and SQL Server backend for retail and service operations.",
    icon: "🖥️",
    color: "rgba(167,139,250,0.15)",
    tech: ["C#", "WinForms", "MSSQL"],
    features: ["POS Application", "POS Printing", "PDE Server", "SQL Server Backend"],
    category: "Desktop App",
  },
];

export const EDUCATION = [
  {
    school: "Cebu Technological University",
    degree: "Bachelor of Science in Information Technology",
    period: "2019 – 2023",
    note: "Capstone: Ecosave",
    honor: null,
  },
  {
    school: "Mandaue City Comprehensive National High School",
    degree: "TVL – Information and Communications Technology",
    period: "2017 – 2019",
    note: null,
    honor: "Graduated with High Honors",
  },
];

export const INTERESTS = [
  { emoji: "🎸", label: "Guitar" },
  { emoji: "🎹", label: "Piano" },
  { emoji: "🎸", label: "Bass Guitar" },
  { emoji: "💻", label: "Technology" },
  { emoji: "☁️", label: "Cloud Computing" },
  { emoji: "📈", label: "Business Automation" },
];

export const PROJECT_CATEGORIES = ["All", "ERP", "Web App", "Power Platform", "Desktop App"];

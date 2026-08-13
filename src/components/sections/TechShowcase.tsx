"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

type Tech = {
  label: string;
  icon?: string;
  fallback?: string;
  color?: string;
  bg?: string;
};

type Category = {
  title: string;
  accent: string;
  items: Tech[];
};

const STACK: Category[] = [
  {
    title: "ERP",
    accent: "#1F6FEB",
    items: [
      { label: "NetSuite",      fallback: "NS",  color: "#1F6FEB", bg: "rgba(31,111,235,0.16)"  },
      { label: "SuiteScript",   fallback: "SS",  color: "#0052CC", bg: "rgba(0,82,204,0.16)"    },
      { label: "SuiteFlow",     fallback: "SF",  color: "#0052CC", bg: "rgba(0,82,204,0.16)"    },
      { label: "SuiteBuilder",  fallback: "SB",  color: "#1F6FEB", bg: "rgba(31,111,235,0.12)"  },
      { label: "Suitelets",     fallback: "SL",  color: "#3B82F6", bg: "rgba(59,130,246,0.14)"  },
      { label: "RESTlets",      fallback: "RL",  color: "#0D47A1", bg: "rgba(13,71,161,0.16)"   },
      { label: "Saved Search",  fallback: "SR",  color: "#60A5FA", bg: "rgba(96,165,250,0.12)"  },
      { label: "PDF Templates", fallback: "PD",  color: "#93C5FD", bg: "rgba(147,197,253,0.12)" },
    ],
  },
  {
    title: "CMS",
    accent: "#21759B",
    items: [
      { label: "WordPress", icon: `${DI}/wordpress/wordpress-original.svg`, color: "#21759B", bg: "rgba(33,117,155,0.16)" },
      { label: "Drupal",    icon: `${DI}/drupal/drupal-original.svg`,       color: "#0678BE", bg: "rgba(6,120,190,0.16)"  },
    ],
  },
  {
    title: "Frontend",
    accent: "#61DAFB",
    items: [
      { label: "Next.js",    icon: `${DI}/nextjs/nextjs-original.svg`,            color: "#fff",    bg: "rgba(255,255,255,0.07)" },
      { label: "React",      icon: `${DI}/react/react-original.svg`,              color: "#61DAFB", bg: "rgba(97,218,251,0.12)"  },
      { label: "TypeScript", icon: `${DI}/typescript/typescript-original.svg`,    color: "#3178C6", bg: "rgba(49,120,198,0.15)"  },
      { label: "JavaScript", icon: `${DI}/javascript/javascript-original.svg`,    color: "#F7DF1E", bg: "rgba(247,223,30,0.12)"  },
      { label: "HTML",       icon: `${DI}/html5/html5-original.svg`,              color: "#E34F26", bg: "rgba(227,79,38,0.12)"   },
      { label: "CSS",        icon: `${DI}/css3/css3-original.svg`,                color: "#1572B6", bg: "rgba(21,114,182,0.12)"  },
      { label: "Tailwind",   icon: `${DI}/tailwindcss/tailwindcss-original.svg`,  color: "#06B6D4", bg: "rgba(6,182,212,0.12)"   },
      { label: "Bootstrap",  icon: `${DI}/bootstrap/bootstrap-original.svg`,      color: "#7952B3", bg: "rgba(121,82,179,0.12)"  },
      { label: "ShadCN UI",  fallback: "SN",                                      color: "#fff",    bg: "rgba(255,255,255,0.07)" },
      { label: "DaisyUI",    fallback: "DY",                                      color: "#FF69B4", bg: "rgba(255,105,180,0.12)" },
    ],
  },
  {
    title: "Backend & Frameworks",
    accent: "#34d399",
    items: [
      { label: "C#",           icon: `${DI}/csharp/csharp-original.svg`,         color: "#239120", bg: "rgba(35,145,32,0.14)"   },
      { label: "ASP.NET",      icon: `${DI}/dotnetcore/dotnetcore-original.svg`,  color: "#512BD4", bg: "rgba(81,43,212,0.14)"   },
      { label: "Node.js",      icon: `${DI}/nodejs/nodejs-original.svg`,          color: "#339933", bg: "rgba(51,153,51,0.14)"   },
      { label: "Laravel",      icon: `${DI}/laravel/laravel-original.svg`,        color: "#FF2D20", bg: "rgba(255,45,32,0.12)"   },
      { label: "Laravel Sail", fallback: "⛵",                                    color: "#FF2D20", bg: "rgba(255,45,32,0.10)"   },
      { label: "Sanctum",      fallback: "SK",                                    color: "#FF2D20", bg: "rgba(255,45,32,0.10)"   },
      { label: "PHP",          icon: `${DI}/php/php-original.svg`,                color: "#777BB4", bg: "rgba(119,123,180,0.14)" },
    ],
  },
  {
    title: "Mobile",
    accent: "#f472b6",
    items: [
      { label: "Flutter",      icon: `${DI}/flutter/flutter-original.svg`,        color: "#54C5F8", bg: "rgba(84,197,248,0.14)" },
      { label: "React Native", icon: `${DI}/react/react-original.svg`,            color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
      { label: "Dart",         icon: `${DI}/dart/dart-original.svg`,              color: "#0175C2", bg: "rgba(1,117,194,0.14)" },
      { label: "SQLite",       icon: `${DI}/sqlite/sqlite-original.svg`,          color: "#003B57", bg: "rgba(0,59,87,0.20)" },
    ],
  },
  {
    title: "Databases & Data Tools",
    accent: "#34d399",
    items: [
      { label: "PostgreSQL",  icon: `${DI}/postgresql/postgresql-original.svg`,           color: "#336791", bg: "rgba(51,103,145,0.14)" },
      { label: "MySQL",       icon: `${DI}/mysql/mysql-original.svg`,                     color: "#4479A1", bg: "rgba(68,121,161,0.14)" },
      { label: "SQL Server",  icon: `${DI}/microsoftsqlserver/microsoftsqlserver-original.svg`, color: "#CC2927", bg: "rgba(204,41,39,0.14)" },
      { label: "SQLite",      icon: `${DI}/sqlite/sqlite-original.svg`,                   color: "#003B57", bg: "rgba(0,59,87,0.20)" },
      { label: "MS Lists",    fallback: "📋", color: "#0078D4",                                              bg: "rgba(0,120,212,0.12)" },
      { label: "DBeaver",     fallback: "DB", color: "#382923",                                              bg: "rgba(100,80,60,0.20)" },
      { label: "Prisma ORM",  fallback: "Pr", color: "#5a67d8",                                              bg: "rgba(90,103,216,0.14)" },
    ],
  },
  {
    title: "Microsoft 365 & Power Platform",
    accent: "#0078D4",
    items: [
      { label: "SharePoint",     fallback: "SP", color: "#0078D4", bg: "rgba(0,120,212,0.14)" },
      { label: "Power Apps",     fallback: "PA", color: "#742774", bg: "rgba(116,39,116,0.14)" },
      { label: "Power Automate", fallback: "FL", color: "#0066FF", bg: "rgba(0,102,255,0.14)" },
      { label: "Teams",          fallback: "MT", color: "#5059C9", bg: "rgba(80,89,201,0.14)" },
      { label: "Power BI",       fallback: "BI", color: "#F2C811", bg: "rgba(242,200,17,0.12)" },
      { label: "MS Lists",       fallback: "📋", color: "#0078D4", bg: "rgba(0,120,212,0.12)" },
      { label: "Dynamics 365",   fallback: "D3", color: "#002050", bg: "rgba(0,80,160,0.20)" },
    ],
  },
  {
    title: "Integrations & Ticketing",
    accent: "#a78bfa",
    items: [
      { label: "Jazz HR",         fallback: "JZ", color: "#FF6B35", bg: "rgba(255,107,53,0.14)" },
      { label: "GLPI",            fallback: "GP", color: "#d94f00", bg: "rgba(217,79,0,0.14)"   },
      { label: "Desk 365",        fallback: "D3", color: "#0066CC", bg: "rgba(0,102,204,0.14)"  },
      { label: "Teams API",       fallback: "TA", color: "#5059C9", bg: "rgba(80,89,201,0.14)"  },
      { label: "Power BI API",    fallback: "PB", color: "#F2C811", bg: "rgba(242,200,17,0.12)" },
      { label: "NetSuite API",    fallback: "NS", color: "#1F6FEB", bg: "rgba(31,111,235,0.14)" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    accent: "#f472b6",
    items: [
      { label: "AWS",    icon: `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, color: "#FF9900", bg: "rgba(255,153,0,0.12)" },
      { label: "Docker", icon: `${DI}/docker/docker-original.svg`,                            color: "#0DB7ED", bg: "rgba(13,183,237,0.14)" },
      { label: "Linux",  icon: `${DI}/linux/linux-original.svg`,                              color: "#FCC624", bg: "rgba(252,198,36,0.10)" },
      { label: "Azure",  icon: `${DI}/azure/azure-original.svg`,                              color: "#0078D4", bg: "rgba(0,120,212,0.14)" },
      { label: "Vercel", fallback: "▲",                                                       color: "#fff",    bg: "rgba(255,255,255,0.07)" },
    ],
  },
  {
    title: "Tools & Version Control",
    accent: "#a78bfa",
    items: [
      { label: "Git",        icon: `${DI}/git/git-original.svg`,             color: "#F05032", bg: "rgba(240,80,50,0.14)"   },
      { label: "GitHub",     icon: `${DI}/github/github-original.svg`,       color: "#fff",    bg: "rgba(255,255,255,0.07)" },
      { label: "GitLab",     icon: `${DI}/gitlab/gitlab-original.svg`,       color: "#FC6D26", bg: "rgba(252,109,38,0.14)"  },
      { label: "Bitbucket",  icon: `${DI}/bitbucket/bitbucket-original.svg`, color: "#0052CC", bg: "rgba(0,82,204,0.14)"    },
      { label: "DBeaver",    fallback: "DB", color: "#A0522D",                                  bg: "rgba(160,82,45,0.18)"   },
      { label: "Dreamweaver",fallback: "DW", color: "#4BFFFD",                                  bg: "rgba(75,255,253,0.10)"  },
      { label: "Figma",      icon: `${DI}/figma/figma-original.svg`,         color: "#F24E1E", bg: "rgba(242,78,30,0.14)"   },
    ],
  },
];

function TechCard({ tech, delay, accent }: { tech: Tech; delay: number; accent: string }) {
  const color = tech.color ?? accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-2 p-3 rounded-2xl cursor-default select-none"
      style={{
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        transition: "border-color .18s, transform .18s, background .18s, box-shadow .18s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = color + "55";
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = `0 8px 28px ${color}18`;
        el.style.background = "var(--surface)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.background = "var(--bg3)";
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: tech.bg ?? color + "18", border: `1px solid ${color}22` }}
      >
        {tech.icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={tech.icon} alt={tech.label} width={24} height={24} style={{ objectFit: "contain" }} loading="lazy" />
        ) : (
          <span className="font-mono font-bold" style={{ fontSize: "0.68rem", color, letterSpacing: "0.02em" }}>
            {tech.fallback}
          </span>
        )}
      </div>
      <span className="font-mono text-center leading-tight" style={{ fontSize: "0.68rem", color: "var(--muted)" }}>
        {tech.label}
      </span>
    </motion.div>
  );
}

export default function TechShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.04 });

  return (
    <section
      id="stack"
      style={{ padding: "6rem 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", letterSpacing: "0.15em" }}>
          Tools I Work With
        </div>
        <h2 className="font-bold mb-14" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
          Tech Stack
        </h2>

        <div className="flex flex-col gap-10">
          {STACK.map((cat, catIdx) => (
            <div key={cat.title}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }}
                />
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--text)" }}>
                  {cat.title}
                </span>
                <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
              </div>

              {/* Grid */}
              <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(86px, 1fr))" }}>
                {inView &&
                  cat.items.map((tech, i) => (
                    <TechCard
                      key={`${cat.title}-${tech.label}`}
                      tech={tech}
                      delay={catIdx * 0.04 + i * 0.035}
                      accent={cat.accent}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

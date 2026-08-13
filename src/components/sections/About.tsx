"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const highlights = [
  { icon: "🏢", title: "ERP Expert", desc: "Deep NetSuite customization — SuiteScript, SuiteFlow, Suitelets, RESTlets" },
  { icon: "☁️", title: "Cloud Ready", desc: "AWS, Azure Linux, Docker, Linux server administration" },
  { icon: "⚡", title: "Automator", desc: "Power Platform, SuiteFlow, workflow-first thinking across all projects" },
  { icon: "🔍", title: "Analyst", desc: "BRD, FSD, process mapping, gap analysis, UAT support" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" style={{ padding: "6rem 1.5rem" }}>
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className="grid gap-16 items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", letterSpacing: "0.15em" }}>
              About Me
            </div>
            <h2
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
            >
              Enterprise Engineer.<br />Problem Solver.
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                Jericho Kyle Tamayo is an experienced technology professional with expertise spanning ERP development, cloud infrastructure, enterprise systems, workflow automation, business analysis, and full-stack development.
              </p>
              <p>
                Currently working as a NetSuite Developer at Global AutoDistribution Inc., developing custom NetSuite solutions, automating workflows, creating advanced reports, and building enterprise integrations — while also handling SharePoint and Power Platform development.
              </p>
              <p>
                Passionate about solving real business problems through clean, maintainable technology that scales.
              </p>
            </div>
            <div
              className="grid gap-3 mt-8"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-xl p-4"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="text-lg mb-1">{h.icon}</div>
                  <div className="text-sm font-semibold mb-1">{h.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{h.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "var(--bg3)", border: "1px solid var(--border2)", fontFamily: "var(--font-jetbrains)" }}
            >
              {/* Terminal bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
              >
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="text-xs ml-2" style={{ color: "var(--muted)" }}>jericho.json</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 text-xs leading-loose" style={{ fontSize: "0.78rem" }}>
                <span style={{ color: "#6272a4" }}>{"// Developer Profile"}</span>
                <br />{"{"}
                <br />&nbsp;&nbsp;<span style={{ color: "var(--accent2)" }}>"name"</span>:{" "}
                <span style={{ color: "var(--green)" }}>"Jericho Kyle M. Tamayo"</span>,
                <br />&nbsp;&nbsp;<span style={{ color: "var(--accent2)" }}>"location"</span>:{" "}
                <span style={{ color: "var(--green)" }}>"Cebu, Philippines 🇵🇭"</span>,
                <br />&nbsp;&nbsp;<span style={{ color: "var(--accent2)" }}>"role"</span>:{" "}
                <span style={{ color: "var(--green)" }}>"NetSuite + Full Stack Dev"</span>,
                <br />&nbsp;&nbsp;<span style={{ color: "var(--accent2)" }}>"employer"</span>:{" "}
                <span style={{ color: "var(--green)" }}>"Global AutoDistribution Inc."</span>,
                <br />&nbsp;&nbsp;<span style={{ color: "var(--accent2)" }}>"experience"</span>:{" "}
                <span style={{ color: "var(--amber)" }}>3</span>,
                <br />&nbsp;&nbsp;<span style={{ color: "var(--accent2)" }}>"erp"</span>:{" "}
                [<span style={{ color: "var(--green)" }}>"NetSuite"</span>,{" "}
                <span style={{ color: "var(--green)" }}>"Dynamics 365"</span>],
                <br />&nbsp;&nbsp;<span style={{ color: "var(--accent2)" }}>"cloud"</span>:{" "}
                [<span style={{ color: "var(--green)" }}>"AWS"</span>,{" "}
                <span style={{ color: "var(--green)" }}>"Azure"</span>],
                <br />&nbsp;&nbsp;<span style={{ color: "var(--accent2)" }}>"stack"</span>:{" "}
                [<span style={{ color: "var(--green)" }}>"Next.js"</span>,{" "}
                <span style={{ color: "var(--green)" }}>"C#"</span>,{" "}
                <span style={{ color: "var(--green)" }}>"SQL"</span>],
                <br />&nbsp;&nbsp;<span style={{ color: "var(--accent2)" }}>"aiReady"</span>:{" "}
                <span style={{ color: "var(--cyan)" }}>true</span>,
                <br />&nbsp;&nbsp;<span style={{ color: "var(--accent2)" }}>"openToWork"</span>:{" "}
                <span style={{ color: "var(--cyan)" }}>true</span>
                <br />
                {"}"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

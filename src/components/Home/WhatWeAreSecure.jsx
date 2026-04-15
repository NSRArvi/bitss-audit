"use client";
import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Wallet,
  ArrowLeftRight,
  Server,
  FileSearch,
} from "lucide-react";

const carts = [
  {
    heading: "What We Secure",
    subHeading: "Security Services Built For Crypto Businesses",
    body: [
      {
        title: "Smart Contract Security",
        text: "Security audits for smart contracts, preventing vulnerabilities and securing crypto assets.",
        icon: ShieldCheck,
      },
      {
        title: "Wallet & Custody Security",
        text: "Assessment of wallets, securities, and implementing specific protections.",
        icon: Wallet,
      },
      {
        title: "Exchange & API Protection",
        text: "Security review of either existing Bitss infrastructure or custom nature audits.",
        icon: ArrowLeftRight,
      },
      {
        title: "Blockchain Infrastructure",
        text: "Blocks of wallet capabilities, making security an integral secret.",
        icon: Server,
      },
      {
        title: "Crypto Audits",
        text: "Specialized security securing platforms from third-party security threats.",
        icon: FileSearch,
      },
    ],
  },
  {
    heading: "Our Audit Process",
    subHeading: "From Initial Assessment to Verified Fixes",
    body: [
      {
        title: "Scope Definition",
        text: "Protecting and defining your crypto project's architecture and goals.",
        // icon: Search,
        step: "01",
      },
      {
        title: "Technical Analysis",
        text: "Deep technical analysis and stress testing of your source code.",
        // icon: Cpu,
        step: "02",
      },
      {
        title: "Risk Identification",
        text: "Finding vulnerabilities and potential threats within your ecosystem.",
        // icon: AlertTriangle,
        step: "03",
      },
      {
        title: "Report & Recommendations",
        text: "Providing detailed reports and actionable protection protocols.",
        // icon: FileText,
        step: "04",
      },
      {
        title: "Remediation Assistance",
        text: "Direct support to ensure all identified issues are fully resolved.",
        // icon: CheckCircle2,
        step: "05",
      },
    ],
  },
];

export default function SecuritySections() {
  return (
    <div className="space-y-12 py-10 md:px-6">
      {carts.map((section, idx) => (
        <section key={idx} className="space-y-10">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              {section.heading}
            </h2>
            <p className="text-muted-foreground mt-2">{section.subHeading}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {section.body.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-xl border border-white/10 bg-white/5 dark:bg-slate-950/20 p-6 backdrop-blur-xs transition-all hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                {/* for glow */}
                <div className="absolute -inset-px rounded-xl bg-linear-to-b from-blue-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative z-10">
                  {item.step && (
                    <span className="text-4xl font-black text-primary z-30 dark:text-white  -top-2 -left-1">
                      {item.step}
                    </span>
                  )}

                  {item.icon && (
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                      <item.icon size={24} />
                    </div>
                  )}

                  <h3 className="mb-2 font-semibold text-foreground leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

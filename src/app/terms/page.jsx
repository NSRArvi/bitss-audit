"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  FileText,
  RefreshCw,
  UserCheck,
  AlertTriangle,
  Lock,
  CreditCard,
  ScrollText,
} from "lucide-react";
import Container from "@/components/Container/Container";
import Link from "next/link";

const sections = [
  {
    number: "01",
    icon: "ShieldCheck",
    title: "What We Do",
    content: [
      "BITSS provides professional crypto security audits for Solana tokens and other blockchain coins.",
      "We offer Standard, Advanced, and Premium audit packages tailored to different project needs and risk profiles.",
    ],
  },
  {
    number: "02",
    icon: "FileText",
    title: "What You Get",
    content: [
      "You will receive a full Audit Report in PDF format with all findings, risk levels, and recommendations based on your selected package.",
    ],
  },
  {
    number: "03",
    icon: "RefreshCw",
    title: "Free Re-Audit Policy",
    intro:
      "If we find issues in your project, you get one free Re-Audit. Here is how it works:",
    bullets: [
      "You fix all the issues we found",
      "You request the Re-Audit within 6 months of the original report",
      "We audit again at no extra charge",
      "Only one free Re-Audit per purchase",
    ],
  },
  {
    number: "04",
    icon: "UserCheck",
    title: "Your Responsibilities",
    bullets: [
      "Provide correct project details — contract address, GitHub, documents",
      "Fix all issues before requesting a Re-Audit",
      "BITSS is not responsible for losses from issues you did not disclose",
    ],
  },
  {
    number: "05",
    icon: "AlertTriangle",
    title: "Our Limitations",
    bullets: [
      "We cannot guarantee 100% security",
      "Our audit is based only on information available at the time of review",
      "Our report is not an investment recommendation",
    ],
  },
  {
    number: "06",
    icon: "Lock",
    title: "Confidentiality",
    bullets: [
      "Your project details stay strictly private",
      "We never share your report without your explicit permission",
    ],
  },
  {
    number: "07",
    icon: "CreditCard",
    title: "Payment",
    bullets: [
      "30% payment is required before the audit begins",
      "Remaining 70% must be paid before receiving the Audit Report",
      "No refunds once the audit has begun",
      "Re-Audit is free as per Section 03",
    ],
  },
  {
    number: "08",
    icon: "ScrollText",
    title: "General",
    content: [
      "BITSS can update these terms at any time without prior notice. Continued use of our services constitutes acceptance of the most current version of these terms.",
    ],
  },
];

const iconMap = {
  ShieldCheck,
  FileText,
  RefreshCw,
  UserCheck,
  AlertTriangle,
  Lock,
  CreditCard,
  ScrollText,
};

export default function TermsPage() {
  return (
    <Container>
      <div className="max-w-3xl mx-auto py-20 sm:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-heading font-semibold mb-3">
            Legal
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-foreground leading-tight">
            Terms &{" "}
            <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            BITSS Crypto Audit — Last updated June 2025
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            By using our services or placing an order, you agree to the
            following terms. Please read them carefully before proceeding.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => {
            const Icon = iconMap[section.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-black/10 dark:border-primary/10 bg-white/5 dark:bg-white/5 p-6 backdrop-blur-md hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Number + Icon */}
                  <div className="shrink-0 flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-primary/50">
                      {section.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h2 className="font-heading font-bold text-foreground text-lg mb-3">
                      {section.title}
                    </h2>

                    {section.intro && (
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {section.intro}
                      </p>
                    )}

                    {section.content?.map((para, i) => (
                      <p
                        key={i}
                        className="text-sm text-muted-foreground leading-relaxed mb-2 last:mb-0"
                      >
                        {para}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="space-y-2.5 mt-1">
                        {section.bullets.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2.5 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-0.5 shrink-0">
                              •
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center"
        >
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            By placing an order with BITSS, you confirm that you have read,
            understood, and agreed to these terms and conditions in full.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#features"
              className="px-6 py-2.5 rounded-lg bg-primary/80 hover:bg-primary text-white font-heading font-semibold text-sm transition-all duration-300 flex justify-center"
            >
              View Packages
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-lg border border-primary text-foreground hover:bg-primary hover:text-white font-heading font-semibold text-sm transition-all duration-300 flex justify-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
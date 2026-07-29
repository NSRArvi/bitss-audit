"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, X } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../services/AnimatedSection";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const staggerItem = (delay = 0) => ({
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const includedSections = [
  "Executive Summary",
  "Audit Scope",
  "Repository Review",
  "Blockchain Analysis",
  "Architecture Review",
  "Governance Review",
  "Treasury Assessment",
  "Tokenomics Review",
  "Security Findings",
  "Risk Assessment",
  "Recommendations",
];

const highlights = [
  { label: "Project", value: "Scotty Pumpkin (SPUMP)" },
  { label: "Blockchain", value: "Solana" },
  { label: "Audit Type", value: "Advanced Security Audit" },
  { label: "Audit Status", value: "Completed" },
  { label: "Overall Result", value: "PASS WITH LIMITATIONS" },
  { label: "Report Version", value: "1.0" },
];

const findings = [
  {
    label: "Critical Findings",
    count: 0,
    color: "text-rose-600 bg-rose-50 border-rose-200",
  },
  {
    label: "High Findings",
    count: 1,
    color: "text-orange-600 bg-orange-50 border-orange-200",
  },
  {
    label: "Medium Findings",
    count: 2,
    color: "text-yellow-600 bg-yellow-50 border-yellow-200",
  },
  {
    label: "Low Findings",
    count: 1,
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    label: "Informational",
    count: 2,
    color: "text-slate-600 bg-slate-50 border-slate-200",
  },
];

export default function AuditReportPage() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <>
      <div>
        <div className="relative overflow-hidden bg-white">
          {/* Grid background */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            style={{
              backgroundImage:
                "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />

          <div className="w-2/3 mx-auto flex flex-col md:flex-row justify-center items-center gap-6 py-10 lg:py-20 relative z-10">
            <div className="w-full text-center">
              {/* Label */}
              <motion.p
                className="text-primary px-4 text-lg tracking-widest"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
              >
                Audit Report
              </motion.p>

              {/* Headline — word by word drop */}
              <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-24 font-heading font-black tracking-wide mt-2">
                {["Advanced", "Security", "Audit"].map((word, i) => (
                  <motion.span
                    key={word + i}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.2 + i * 0.1,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <span className="text-primary">
                  {["Scotty", "Pumpkin", "(SPUMP)"].map((word, i) => (
                    <motion.span
                      key={word}
                      className="inline-block mr-3"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.5 + i * 0.1,
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="w-2/3 mx-auto pb-20">
          <AnimatedSection variants={fadeUp(0)}>
            <p className="text-base text-slate-700 mx-auto">
              The BITSS Advanced Security Audit Report for Scotty Pumpkin
              (SPUMP) presents the results of an independent security assessment
              performed using the BITSS Audit Framework. The audit evaluated the
              project&apos;s blockchain implementation, repository, governance,
              treasury controls, tokenomics, operational security, and other
              relevant components within the agreed audit scope. The objective
              of this assessment was to identify potential security risks,
              verify critical project components, and provide practical
              recommendations to strengthen the project&apos;s overall security
              posture.
            </p>
          </AnimatedSection>

          <AnimatedSection variants={fadeLeft(0)} className="mt-20 mb-6">
            <h2 className="text-2xl font-bold font-heading tracking-widest">
              About This Audit
            </h2>
          </AnimatedSection>

          <AnimatedSection variants={fadeUp(0.05)} className="mb-6">
            <p className="text-base text-slate-700">
              This report documents the security review conducted by BITSS for
              the Scotty Pumpkin (SPUMP) project. The assessment follows the
              standardized BITSS Audit Methodology and includes:
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {includedSections.map((section, i) => (
              <AnimatedSection key={i} variants={staggerItem(i * 0.05)}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-700 font-medium">{section}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection variants={fadeUp(0)}>
            <p className="text-base text-slate-700">
              Every conclusion presented in this report is supported by the
              evidence collected during the audit process.
            </p>
          </AnimatedSection>

          <AnimatedSection variants={fadeLeft(0)} className="mt-20 mb-8">
            <h2 className="text-2xl font-bold font-heading tracking-widest">
              Audit Highlights
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              return (
                <AnimatedSection
                  key={i}
                  variants={scaleIn(col * 0.08 + row * 0.1)}
                >
                  <motion.div
                    className="bg-slate-50 border border-slate-100 rounded-xl p-6 shadow-sm h-full"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  >
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      {item.value}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection variants={fadeLeft(0)} className="mt-20 mb-8">
            <h2 className="text-2xl font-bold font-heading tracking-widest">
              Key Findings
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">
            {findings.map((finding, i) => (
              <AnimatedSection key={i} variants={scaleIn(i * 0.08)}>
                <motion.div
                  className={`rounded-xl p-6 border shadow-sm flex flex-col items-center justify-center text-center h-full ${finding.color}`}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                >
                  <motion.p
                    className="text-4xl font-black mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 18,
                      delay: 0.1 + i * 0.07,
                    }}
                  >
                    {finding.count}
                  </motion.p>
                  <p className="text-sm uppercase tracking-widest font-bold">
                    {finding.label}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection variants={fadeUp(0)}>
            <p className="text-base text-slate-700">
              The assessment identified several areas where the project can
              further improve its security posture. While no critical
              vulnerabilities were identified within the audit scope, several
              high, medium, and low-risk observations were documented along with
              practical remediation recommendations.
            </p>
          </AnimatedSection>

          <div className="mt-20">
            <AnimatedSection variants={fadeLeft(0)} className="mb-6">
              <h2 className="text-2xl font-bold font-heading tracking-widest">
                Audit Methodology
              </h2>
            </AnimatedSection>

            <AnimatedSection variants={fadeUp(0.05)} className="mb-4">
              <p className="text-base text-slate-700">
                BITSS conducted this assessment using its standardized audit
                framework, which combines structured verification procedures,
                manual analysis, evidence collection, and professional security
                review.
              </p>
            </AnimatedSection>

            <AnimatedSection variants={fadeUp(0.12)}>
              <p className="text-base text-slate-700">
                The audit covered repository analysis, blockchain verification,
                governance, treasury management, tokenomics, operational
                security, and risk assessment.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
      {/*  */}
      <button
        onClick={() => setIsPdfOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-primary text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-primary/90 transition-all animate-pulse"
      >
        <FileText className="w-6 h-6" />
        <span className="font-semibold hidden md:inline">View PDF Report</span>
      </button>
      {isPdfOpen && (
        <div className="fixed inset-0 z-100 flex justify-end">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsPdfOpen(false)}
          />

          <div className="relative w-full max-w-4xl bg-white h-full shadow-2xl flex flex-col transform transition-transform">
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <h3 className="text-xl font-bold font-heading">
                SPUMP Audit Report
              </h3>
              <button
                onClick={() => setIsPdfOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            <div className="flex-1 w-full bg-slate-50">
              <iframe
                src="/SPUMP%20Audit%20Report.pdf"
                className="w-full h-full"
                title="SPUMP Audit Report"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

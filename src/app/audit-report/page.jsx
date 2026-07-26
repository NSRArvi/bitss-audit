"use client";

import { CheckCircle2, FileText, X } from "lucide-react";
import { useState } from "react";

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
      <div className="">
        <div className="relative overflow-hidden bg-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />

          <div className="w-2/3 mx-auto flex flex-col md:flex-row justify-center items-center gap-6 py-10 lg:py-20 relative z-10">
            <div className=" w-full text-center">
              <p className="text-primary px-4 text-lg tracking-widest">
                Audit Report
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-28 font-inter font-black tracking-wide mt-2">
                Advanced Security Audit <br />
                <span className="text-primary"> Scotty Pumpkin (SPUMP) </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="w-2/3 mx-auto pb-20">
          <p className="text-base text-slate-700 mx-auto font-inter">
            The BITSS Advanced Security Audit Report for Scotty Pumpkin (SPUMP)
            presents the results of an independent security assessment performed
            using the BITSS Audit Framework. The audit evaluated the project's
            blockchain implementation, repository, governance, treasury
            controls, tokenomics, operational security, and other relevant
            components within the agreed audit scope. The objective of this
            assessment was to identify potential security risks, verify critical
            project components, and provide practical recommendations to
            strengthen the project's overall security posture.
          </p>

          {/* About This Audit */}
          <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-6">
            About This Audit
          </h2>
          <p className="text-base text-slate-700 font-inter mb-6">
            This report documents the security review conducted by BITSS for the
            Scotty Pumpkin (SPUMP) project. The assessment follows the
            standardized BITSS Audit Methodology and includes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {includedSections.map((section, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-slate-700 font-medium">{section}</span>
              </div>
            ))}
          </div>
          <p className="text-base text-slate-700 font-inter">
            Every conclusion presented in this report is supported by the
            evidence collected during the audit process.
          </p>

          {/* Audit Highlights */}
          <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-8">
            Audit Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-xl p-6 shadow-sm"
              >
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">
                  {item.label}
                </p>
                <p className="text-lg font-bold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Key Findings */}
          <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-8">
            Key Findings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">
            {findings.map((finding, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 border shadow-sm flex flex-col items-center justify-center text-center ${finding.color}`}
              >
                <p className="text-4xl font-black mb-2">{finding.count}</p>
                <p className="text-sm uppercase tracking-widest font-bold">
                  {finding.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-base text-slate-700 font-inter">
            The assessment identified several areas where the project can
            further improve its security posture. While no critical
            vulnerabilities were identified within the audit scope, several
            high, medium, and low-risk observations were documented along with
            practical remediation recommendations.
          </p>

          {/* Audit Methodology */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold font-inter tracking-widest mb-6">
              Audit Methodology
            </h2>
            <p className="text-base text-slate-700 font-inter mb-4">
              BITSS conducted this assessment using its standardized audit
              framework, which combines structured verification procedures,
              manual analysis, evidence collection, and professional security
              review.
            </p>
            <p className="text-base text-slate-700 font-inter">
              The audit covered repository analysis, blockchain verification,
              governance, treasury management, tokenomics, operational security,
              and risk assessment.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsPdfOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-primary text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-primary/90 transition-all animate-pulse"
      >
        <FileText className="w-6 h-6" />
        <span className="font-semibold hidden md:inline">View PDF Report</span>
      </button>

      {/* Side Modal (Drawer) */}
      {isPdfOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsPdfOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-4xl bg-white h-full shadow-2xl flex flex-col transform transition-transform">
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <h3 className="text-xl font-bold font-inter">
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

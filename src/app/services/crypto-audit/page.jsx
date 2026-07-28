"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookUser, Fuel, Lock, Search } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";

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

const items = [
  {
    icon: Search,
    title: "Static & Dynamic Code Analysis",
    text: "Automated scanning combined with deep manual threat modeling to detect zero-day exploits and mathematical flaws.",
  },
  {
    icon: BookUser,
    title: "Actionable Security Insights:",
    text: "Clear, categorized risk reports (Critical, High, Medium, Low, Informational) featuring exact line-by-line remediation guidance for developers.",
  },
  {
    icon: Lock,
    title: "Continuous Active Protection:",
    text: "Unlike conventional security firms that hand over a static PDF report and disappear, every BITSS audit comes bundled with active cybersecurity software—including BITSSWAP and BITSS VWAR—to guard your servers and infrastructure post-launch.",
  },
  {
    icon: Fuel,
    title: "Gas Optimization",
    text: "Refining smart contract logic to reduce execution costs, ensuring your end-users pay lower transaction fees on-chain.",
  },
];

const auditProcess = [
  {
    title: "Code Ingestion & Repository Scope",
    text: "Code ingestion and repository scope",
  },
  {
    title: "Automated Vulnerability Pass",
    text: "High-speed automated static analysis to identify common EVM and non-EVM vulnerability patterns.",
  },
  {
    title: "Manual Logic & Attack Vector Review",
    text: "Senior cybersecurity engineers simulate complex flash loan attacks, governance hijacks, and privilege escalation attempts",
  },
  {
    title: "Initial Audit Report Delivery",
    text: "Comprehensive breakdown of findings provided to the development team with step-by-step remediation instructions.",
  },
  {
    title: "Remediation & Code Patching",
    text: "Remediation & Code Patching",
  },
];

export default function CryptoAuditPage() {
  return (
    <div>
      {/* ── Hero ── */}
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
              Crypto Audit
            </motion.p>

            {/* Headline — word by word drop */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-24 font-heading font-black tracking-wide">
              {["Full-Stack", "Smart"].map((word, i) => (
                <motion.span
                  key={word}
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
              <span className="text-primary">
                {["Contract", "&", "Token"].map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.4 + i * 0.1,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.72,
                }}
              >
                Audit
              </motion.span>
            </h2>

            {/* Subheading */}
            <motion.p
              className="text-lg text-muted-foreground w-full mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.85,
              }}
            >
              Comprehensive Smart Contract & Token Security Analysis
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="w-2/3 mx-auto">
        {/* Intro paragraphs */}
        <AnimatedSection variants={fadeUp(0)}>
          <p className="text-base text-slate-700 mx-auto">
            Over 10,000 crypto coins and tokens exist on the market today, yet a
            vast majority skip security audits due to high costs and slow
            timelines. This leaves them exposed to reentrancy attacks, flash
            loan exploits, integer overflows, and logic vulnerabilities
          </p>
        </AnimatedSection>

        <AnimatedSection variants={fadeUp(0.1)} className="mt-2">
          <p className="text-base text-slate-700 mx-auto">
            At <span className="text-lg font-medium">BITSS</span>, we bridge the
            gap between enterprise-grade security and affordability. Our Crypto
            Audit service delivers exhaustive static code analysis, automated
            vulnerability scanning, and manual architectural reviews for smart
            contracts, dApps, DeFi protocols, and token ecosystems. We inspect
            every line of code to eliminate backdoors, logic errors, and gas
            inefficiencies before deployment.
          </p>
        </AnimatedSection>

        {/* Why BITSS heading */}
        <AnimatedSection variants={fadeLeft(0)} className="mt-20 mb-10">
          <h2 className="text-2xl font-bold font-heading tracking-widest">
            Why Web3 projects choose BITSS crypto audit
          </h2>
        </AnimatedSection>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            const col = i % 2;
            const row = Math.floor(i / 2);
            return (
              <AnimatedSection
                key={i}
                variants={scaleIn(col * 0.1 + row * 0.12)}
              >
                <motion.div
                  className="bg-white rounded-lg shadow p-4 transition duration-300 h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                >
                  <Icon className="text-primary" />
                  <h5 className="mt-6 mb-4 text-lg font-medium tracking-wider">
                    {item.title}
                  </h5>
                  <p className="text-muted-foreground">{item.text}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Audit process */}
        <div className="pb-20">
          <AnimatedSection variants={fadeLeft(0)} className="mt-20 mb-10">
            <h2 className="text-2xl font-bold font-heading tracking-widest">
              The BITSS audit process
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-6">
            {auditProcess.map((step, i) => (
              <AnimatedSection key={i} variants={fadeLeft(i * 0.08)}>
                <motion.div
                  className="flex gap-6 items-start bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  {/* Step number — pops in with a spring */}
                  <motion.div
                    className="shrink-0 w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center font-black text-xl shadow-sm border border-slate-200"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-40px" }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 18,
                      delay: 0.1 + i * 0.07,
                    }}
                  >
                    {i + 1}
                  </motion.div>
                  <div>
                    <h5 className="text-xl font-medium mb-2">{step.title}</h5>
                    <p className="text-muted-foreground">{step.text}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

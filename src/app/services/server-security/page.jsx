"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, FileText, Shield } from "lucide-react";
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

const metrics = [
  {
    icon: Shield,
    title: "BITSS VWAR Antimalware Engine",
    text: "A lightweight background daemon that continuously scans Linux/Windows server environments for malicious backdoors, unauthorized keyloggers, and hidden rootkits.",
  },
  {
    icon: Activity,
    title: "BITSSWAP Traffic Firewall",
    text: "Filtering malicious botnets, unauthorized API scraping, and DDoS attempts before traffic reaches your application layer.",
  },
  {
    icon: Cpu,
    title: "Automated Threat Isolation",
    text: "Real-time threat detection algorithms that automatically isolate compromised server nodes, preventing network-wide data breaches.",
  },
  {
    icon: FileText,
    title: "Log Integrity & Monitoring",
    text: "Continuous tracking of system configuration changes, ssh logins, and file permission modifications.",
  },
];

export default function ServerSecurityPage() {
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
              Server Security
            </motion.p>

            {/* Headline — word by word drop */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-24 font-heading font-black tracking-wide mt-2">
              {["Real-Time", "Infrastructure", "Protection", "&"].map(
                (word, i) => (
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
                ),
              )}
              <br />
              <span className="text-primary">
                {["Antimalware", "Defense"].map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.6 + i * 0.1,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h2>

            {/* Subheading */}
            <motion.p
              className="text-lg text-muted-foreground w-full mx-auto text-center mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.85,
              }}
            >
              Active Threat Mitigation for Crypto Infrastructure
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="w-2/3 mx-auto pb-20">
        {/* Intro paragraphs */}
        <AnimatedSection variants={fadeUp(0)}>
          <p className="text-base text-slate-700 mx-auto">
            A static audit report cannot stop a live server intrusion. Web3
            platforms, crypto exchanges, and node operators require continuous,
            real-time protection to safeguard databases, administrative
            consoles, and user funds from sophisticated malware.
          </p>
        </AnimatedSection>

        <AnimatedSection variants={fadeUp(0.1)} className="mt-4">
          <p className="text-base text-slate-700 mx-auto">
            Powered by BITSSWAP and BITSS VWAR, our server security suite
            delivers enterprise-grade infrastructure hardening, active traffic
            filtering, and real-time antimalware scanning built specifically for
            high-risk crypto environments.
          </p>
        </AnimatedSection>

        {/* Section heading */}
        <AnimatedSection variants={fadeLeft(0)} className="mt-20 mb-10">
          <h2 className="text-2xl font-bold font-heading tracking-widest">
            Advanced Server Protection Features
          </h2>
        </AnimatedSection>

        {/* Metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {metrics.map((item, i) => {
            const Icon = item.icon;
            const col = i % 2;
            const row = Math.floor(i / 2);
            return (
              <AnimatedSection
                key={i}
                variants={scaleIn(col * 0.1 + row * 0.12)}
              >
                <motion.div
                  className="bg-white rounded-lg shadow p-6 h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                >
                  <Icon className="text-primary w-8 h-8" />
                  <h5 className="mt-6 mb-4 text-lg font-medium tracking-wider">
                    {item.title}
                  </h5>
                  <p className="text-muted-foreground">{item.text}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bundle advantage section */}
        <div className="mt-20">
          <AnimatedSection variants={fadeLeft(0)} className="mb-6">
            <h2 className="text-2xl font-bold font-heading tracking-widest">
              The BITSS Bundle Advantage
            </h2>
          </AnimatedSection>

          <AnimatedSection variants={fadeUp(0.1)}>
            <p className="text-base text-slate-700">
              We believe security should be holistic. That is why BITSSWAP and
              BITSS VWAR server security solutions are integrated 100% FREE with
              every BITSS Audit order.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Globe, ScanSearch, Server, ShieldAlert } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  },
});

const metrics = [
  {
    icon: ScanSearch,
    title: "Real-Time AML Transaction Screening",
    text: "Automated wallet scanning that detects and flags interactions with high-risk addresses, mixer protocols (e.g., Tornado Cash), and sanctioned entities.",
  },
  {
    icon: Server,
    title: "Continuous Server-State Auditing",
    text: "Automated background verification to ensure deployed smart contracts and backend server states remain untampered with post-audit.",
  },
  {
    icon: ShieldAlert,
    title: "Incident Response Frameworks",
    text: "Pre-structured operational protocols to handle suspicious transactions, system breaches, or regulatory inquiries with minimal downtime.",
  },
  {
    icon: Globe,
    title: "Global Alignment Guidance",
    text: "Structuring cost-effective compliance strategies that allow your Web3 project to operate safely within global security guidelines.",
  },
];

export default function ComplianceAmlPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden bg-white">
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
              Compliance & AML
            </motion.p>

            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-24 font-heading font-black tracking-wide mt-2">
              {["Continuous", "Monitoring", "&"].map((word, i) => (
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

              <br />

              <span className="text-primary">
                {["Anti-Money", "Laundering", "Screening"].map((word, i) => (
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
              Navigating Global Web3 Regulatory Standards
            </motion.p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="w-2/3 mx-auto pb-20">
        <AnimatedSection variants={fadeUp(0)}>
          <p className="text-base text-slate-700 mx-auto">
            The crypto ecosystem is transitioning into a regulated environment.
            Compliance is no longer optional for projects seeking listings,
            institutional backing, or international growth.
          </p>
        </AnimatedSection>

        <AnimatedSection variants={fadeUp(0.1)} className="mt-4">
          <p className="text-base text-slate-700 mx-auto">
            BITSS Compliance & AML provides real-time transaction screening,
            server-state auditing, and risk management frameworks to keep your
            project fully aligned with evolving regulatory expectations across
            the United States, Singapore, Hong Kong, and global markets.
          </p>
        </AnimatedSection>

        <AnimatedSection variants={fadeLeft(0)} className="mt-20 mb-10">
          <h2 className="text-2xl font-bold font-heading tracking-widest">
            Core Compliance Capabilities
          </h2>
        </AnimatedSection>

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
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 20,
                  }}
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
      </div>
    </div>
  );
}

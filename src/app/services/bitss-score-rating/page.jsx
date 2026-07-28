"use client";

import { motion } from "framer-motion";
import { Activity, Code, Server, ShieldCheck } from "lucide-react";
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
    icon: Code,
    title: "Code Integrity & Quality",
    text: "Evaluating smart contract architecture, mathematical soundness, and vulnerability density.",
  },
  {
    icon: ShieldCheck,
    title: "Decentralization & Governance Health",
    text: "Analyzing admin key privileges, timelock implementation, multi-sig controls, and centralization risks.",
  },
  {
    icon: Server,
    title: "Operational & Server Resilience",
    text: "Real-time checking of backend server security, domain health, and infrastructure hardening.",
  },
  {
    icon: Activity,
    title: "Market Risk & Security Monitoring",
    text: "Tracking continuous server-state health to detect abnormal contract interactions or unauthorized administrative actions.",
  },
];

export default function BitssScoreRatingPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-white">
        {/* Grid background — cinematic scale-in */}
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
              BITSS Score & Rating
            </motion.p>

            {/* Headline — word by word drop */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-24 font-heading font-black tracking-wide">
              {["Dynamic", "Web3", "Security", "Rating", "&"].map((word, i) => (
                <motion.span
                  key={word + i}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + i * 0.09,
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <span className="text-primary">
                {["Ecosystem", "Transparency"].map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.65 + i * 0.1,
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
                delay: 0.88,
              }}
            >
              Transparent, Real-Time Security Benchmarking
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="w-2/3 mx-auto pb-20">
        {/* Intro paragraphs */}
        <AnimatedSection variants={fadeUp(0)}>
          <p className="text-base text-slate-700 mx-auto">
            In the Web3 ecosystem, investor trust is built on verifiable
            security, not unbacked promises. The BITSS Score & Rating is a
            dynamic security index that provides projects, exchanges, and token
            holders with a real-time, transparent breakdown of a project&apos;s
            overall security health.
          </p>
        </AnimatedSection>

        <AnimatedSection variants={fadeUp(0.1)} className="mt-4">
          <p className="text-base text-slate-700 mx-auto">
            Driven entirely by our independent research and development into
            cyber security, the BITSS Rating evaluates both on-chain smart
            contract integrity and off-chain operational security to deliver an
            unbiased risk score.
          </p>
        </AnimatedSection>

        {/* Section heading */}
        <AnimatedSection variants={fadeLeft(0)} className="mt-20 mb-10">
          <h2 className="text-2xl font-bold font-heading tracking-widest">
            Core Evaluation Metrics
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

        {/* Investor trust section */}
        <div className="mt-20">
          <AnimatedSection variants={fadeLeft(0)} className="mb-6">
            <h2 className="text-2xl font-bold font-heading tracking-widest">
              Building Immediate Investor Trust
            </h2>
          </AnimatedSection>

          <AnimatedSection variants={fadeUp(0.1)}>
            <p className="text-base text-slate-700">
              Audited projects receive an embeddable, real-time BITSS Security
              Badge for their website, documentation, and exchange listing
              applications—proving to investors, launchpads, and centralized
              exchanges that your project maintains active, verified security
              standards.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

"use client";
import {
  Activity,
  Bot,
  FileCheck,
  RefreshCw,
  Search,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/app/services/AnimatedSection";

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

const aiConsoleFeatures = [
  {
    icon: Bot,
    title: "Automated Pattern Recognition",
    text: "Trained to identify EVM and Non-EVM security flaws, logic oversights, and gas inefficiencies across smart contract code bases.",
  },
  {
    icon: Search,
    title: "Deep Contextual Analysis",
    text: "Unlike static analyzers that output false positives, our AI model evaluates smart contract state variables and access control dependencies.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning Loop",
    text: "Updated daily with emerging zero-day exploit primitives discovered across live Web3 ecosystems.",
  },
];

const dashboardFeatures = [
  {
    icon: Activity,
    title: "Live Vulnerability Tracking",
    text: "Real-time visibility into open, patched, and verified code lines during an audit lifecycle.",
  },
  {
    icon: Server,
    title: "Server & Device Health Feeds",
    text: "Monitoring the active status of integrated BITSSWAP server firewalls and BITSS VWAR antimalware systems.",
  },
  {
    icon: FileCheck,
    title: "Verifiable Audit History",
    text: "Centralized repository for project teams to manage public security badges, audit certificates, and re-audit logs.",
  },
];

export default function ResearchPage() {
  return (
    <div className="">
      <div className="relative overflow-hidden bg-white">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-40"
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
          <div className=" w-full text-center">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="text-primary px-4 text-lg tracking-widest"
            >
              BITSS Research
            </motion.p>

            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-24 font-heading font-black tracking-wide">
              {["Practical", "Security", "R&D"].map((word, i) => (
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
                {["AI-Driven", "Audit", "Systems"].map((word, i) => (
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
            </h2>
            {/*  */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.85,
              }}
              className="text-lg text-muted-foreground w-full mx-auto text-center mt-4"
            >
              Applied Cyber Security Research for Web3
            </motion.p>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto pb-20">
        <AnimatedSection variants={fadeUp(0)}>
          <p className="text-base text-slate-700 mx-auto">
            While traditional auditing relies heavily on slow manual labor or
            third-party open-source tools, BITSS Research is focused on
            practical, software-driven innovation. Built entirely on self-funded
            organic research and development, our engineering team focuses on
            active threat vectors, smart contract vulnerabilities, and server
            infrastructure defense.
          </p>
        </AnimatedSection>
        <AnimatedSection variants={fadeUp(0.1)} className="mt-2">
          <p className="text-base text-slate-700 mx-auto mt-4">
            We bridge the gap between complex code analysis and real-world
            execution by building proprietary automation engines that give Web3
            projects actionable clarity.
          </p>
        </AnimatedSection>
        {/* AI-Based Audit Console */}
        <AnimatedSection variants={fadeLeft(0)}>
          <h2 className="text-2xl font-bold font-heading tracking-widest mt-20 mb-6">
            The BITSS AI-Based Audit Console
          </h2>
        </AnimatedSection>
        <AnimatedSection variants={fadeUp(0.1)}>
          <p className="text-base text-slate-700 mb-10">
            At the heart of our research division is the BITSS AI-Based Audit
            Console—a proprietary scanning engine designed to accelerate
            vulnerability detection without sacrificing precision.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {aiConsoleFeatures.map((item, i) => {
            const Icon = item.icon;
            const col = i % 2;
            const row = Math.floor(i / 2);
            return (
              <AnimatedSection
                key={i}
                variants={scaleIn(col * 0.1 + row * 0.12)}
              >
                <div
                  key={i}
                  className="bg-white rounded-lg shadow p-6 hover:scale-102 transition duration-300"
                >
                  <Icon className="text-primary w-8 h-8" />
                  <h5 className="mt-6 mb-4 text-lg font-medium tracking-wider">
                    {item.title}
                  </h5>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection variants={fadeLeft(0)}>
          <h2 className="text-2xl font-bold font-heading tracking-widest mt-20 mb-6">
            Real-Time Client Security Dashboard
          </h2>
        </AnimatedSection>
        <AnimatedSection variants={fadeUp(0.1)} className="mt-2">
          <p className="text-base text-slate-700 mb-10">
            Research is meaningless if project owners cannot track their
            posture. The BITSS Client Security Dashboard translates technical
            findings into intuitive threat intelligence:
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dashboardFeatures.map((item, i) => {
            const Icon = item.icon;
            const col = i % 2;
            const row = Math.floor(i / 2);
            return (
              <AnimatedSection
                key={i}
                variants={scaleIn(col * 0.1 + row * 0.12)}
              >
                <div className="bg-white rounded-lg shadow p-6 hover:scale-102 transition duration-300">
                  <Icon className="text-primary w-8 h-8" />
                  <h5 className="mt-6 mb-4 text-lg font-medium tracking-wider">
                    {item.title}
                  </h5>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
          className="mt-20 bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold font-heading tracking-widest mb-6">
            Battle-Tested Under Real Market Conditions
          </h2>
          <p className="text-base text-slate-700">
            Our research isn&apos;t limited to lab environments. When Web3
            projects face live security breaches, our R&D insights drive
            immediate incident response, system isolation, and asset
            recovery—proving our methodologies against live hacker exploits and
            market recoveries.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

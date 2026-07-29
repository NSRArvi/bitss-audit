"use client";

import { AnimatedSection } from "@/app/services/AnimatedSection";
import { motion } from "framer-motion";

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

const staggerItem = (delay = 0) => ({
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const sections = [
  {
    title: "No Investment or Financial Advice",
    content: (
      <p className="text-base text-slate-700 leading-relaxed">
        The information, security reports, ratings, and content provided on this
        website do not constitute investment advice, financial advice, trading
        advice, or any form of financial solicitation. BITSS does not recommend
        that any cryptocurrency, token, or smart contract protocol should be
        purchased, sold, or held by you. Always conduct your own thorough due
        diligence and consult a licensed financial advisor before making
        investment decisions.
      </p>
    ),
  },
  {
    title: "Accuracy of Information & Scope of Audit",
    content: (
      <>
        <p className="text-base text-slate-700 leading-relaxed mb-4">
          BITSS strives to ensure the accuracy and technical precision of the
          security analyses published on this website and in our audit reports.
          However, all content, scores, and services are provided on an &quot;as
          is&quot; and &quot;as available&quot; basis.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          A smart contract audit or security score represents a point-in-time
          evaluation of code submitted to BITSS. An audit is NOT a guarantee of
          absolute security, code flawlessness, or smart contract immutability
          post-deployment. Malicious actors may discover unanalyzed attack
          vectors or exploit off-chain dependencies beyond the audit scope. Any
          reliance on our content, reports, or tools is solely at your own risk
          and discretion.
        </p>
      </>
    ),
  },
  {
    title: "Non-Endorsement & Third-Party Content",
    content: (
      <p className="text-base text-slate-700 leading-relaxed">
        Any mention of third-party projects, blockchain networks, hyperlinked
        sites, or external applications on the BITSS platform does not
        constitute an endorsement, warranty, or guarantee by BITSS. We are not
        responsible for the operational safety, code integrity, or financial
        conduct of external third-party platforms.
      </p>
    ),
  },
  {
    title: "Official Communication & Verification Domains",
    content: (
      <>
        <p className="text-base text-slate-700 leading-relaxed mb-4">
          To protect your project from phishing and fraudulent impersonations,
          please verify that you interact exclusively with official BITSS
          communication channels and domains:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-base text-slate-700">
          {[
            <li key="a">
              <strong>Official Website:</strong> cryptoaudit.bitss.one (or your
              primary official domain)
            </li>,
            <li key="b">
              <strong>Report Issues / Contact:</strong> support@bitss.one /
              info@bitss.one
            </li>,
          ].map((item, i) => (
            <AnimatedSection key={i} variants={staggerItem(i * 0.08)}>
              {item}
            </AnimatedSection>
          ))}
        </ul>
        <p className="text-base leading-relaxed font-semibold text-rose-600">
          Never share private keys, seed phrases, or administrative passwords
          with anyone claiming to represent BITSS. Official BITSS personnel will
          NEVER ask for private keys or wallet credentials.
        </p>
      </>
    ),
  },
  {
    title: "Vulnerability Disclosure & Bug Reporting",
    content: (
      <p className="text-base text-slate-700 leading-relaxed">
        If you discover a potential vulnerability within the BITSS
        infrastructure or an audited client ecosystem, please refrain from
        public disclosure until our security team has reviewed and remediated
        the issue. Direct all technical findings to our confidential security
        team at{" "}
        <a
          href="mailto:security@bitss.one"
          className="text-primary hover:underline font-semibold"
        >
          security@bitss.one
        </a>
      </p>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="w-2/3 mx-auto flex flex-col justify-center items-center py-10 lg:py-16 relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-heading font-black tracking-wide text-slate-900 text-center leading-tight">
            {["Legal", "Disclaimer", "&"].map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.15 + i * 0.1,
                }}
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            <span className="text-primary">
              {["Operational", "Scope"].map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.45 + i * 0.1,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
        </div>
      </div>

      <div className="w-2/3 mx-auto py-16 flex flex-col gap-10">
        {sections.map((section, sIdx) => (
          <section key={sIdx}>
            <AnimatedSection variants={fadeLeft(0)} className="mb-4">
              <h3 className="text-xl font-bold font-heading text-slate-900 tracking-wide">
                {section.title}
              </h3>
            </AnimatedSection>
            <AnimatedSection variants={fadeUp(0.08)}>
              {section.content}
            </AnimatedSection>
          </section>
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import CustomBadge from "../CustomBadge";
import { ShieldCheck, ShieldCog, Users } from "lucide-react";
const lists = [
  {
    title: "Expertise",
    icon: "ShieldCog",
    body: [
      "R&D Cybersecurity Research",
      "IT Architecture & Systems Design",
      "Cryptography & Blockchain Security",
      "Financial Systems & Economic Analysis•.",
    ],
  },
  {
    title: "Team",
    icon: "Users",
    body: [
      "Smart Contract Auditors",
      "Security & Infrastructure Engineers",
      "Backend & API Security Specialists",
      "Diploma in Governance, Risk & Compliance",
    ],
  },
  {
    title: "Technology",
    icon: "ShieldCheck",
    body: [
      "Automated contract scanning",
      "Vulnerability detection",
      "Risk scoring & reporting",
      "Continuous monitoring",
    ],
  },
];
const iconMap = {
  ShieldCog,
  Users,
  ShieldCheck,
};
export default function CybersecurityAndRiskManagement() {
  return (
    <section className="relative overflow-hidden md:px-6 text-center">
      <div className="flex flex-col justify-center items-center pb-10">
        <h2 className="text-muted-foreground font-heading text-2xl leading-tight text-left md:text-center mb-4">
          <span className="font-medium  text-gray-600 dark:text-gray-400">
            {" "}
            Led by a Specialist
          </span>{" "}
          in Cybersecurity & Risk Management
        </h2>
        <p className="text-left md:text-center justify-center text-gray-700 dark:text-gray-200 w-full md:w-1/2">
          Bitss Crypto Audits delivers professional-grade security audits led by
          a specialist combining financial systems expertise, governance and
          risk management, and hands-on experience in IT architecture and
          systern security. We go beyond srnart contract analysis to evaluate
          your entire crypto system — including wallets infrastructure,
          operational access, and financial integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {lists.map((section, idx) => {
          const Icon = iconMap[section.icon];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl border dark:border-primary/10 border-black/10 bg-white/5 dark:bg-white/5 p-6 backdrop-blur-md hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="flex gap-3 items-center ">
                  {Icon && (
                    <div className=" mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                  )}

                  <h3 className="font-heading mb-5 font-semibold text-foreground leading-tight text-xl">
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.body.map((item, i) => (
                    <li key={i} className="leading-relaxed flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="py-20">
        <CustomBadge
          text={
            "MSc Financial Services Managernent • University of Salford Diploma in Covernance, Risk & Compliance (ICA) • Diploma in Marketing"
          }
          className={"h-18 md:h-5 px-4"}
        />
      </div>
    </section>
  );
}

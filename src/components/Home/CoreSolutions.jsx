"use client";
import React, { useEffect, useState } from "react";
import Heading from "../shared/Heading/Heading";
import Container from "../Container/Container";
import Lottie from "lottie-react";
import { motion } from "motion/react";
import {
  ActivityIcon,
  Layers2Icon,
  MonitorIcon,
  RefreshCwIcon,
  ShieldIcon,
} from "lucide-react";

const items = [
  {
    icon: Layers2Icon,
    label: "For Token & Coin Projects",
    text: "Smart contract audit, token security, and vulnerability research.",
  },
  {
    icon: ActivityIcon,
    label: "For Web3 & DeFi Projects",
    text: "Protocol security, ecosystem mapping, and attack simulation.",
  },
  {
    icon: ShieldIcon,
    label: "For Enterprises",
    text: "Full ecosystem audit, compliance, and custom AML screening.",
  },
  {
    icon: MonitorIcon,
    label: "For Server & Infrastructure Owners",
    text: "BITSS VWAR & BITSS WAP infrastructure protection and real-time threat monitoring.",
  },
  {
    icon: RefreshCwIcon,
    label: "For Crypto Exchanges",
    text: "Penetration testing, API security, and hardware wallet security.",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const lottieVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

export default function CoreSolutions() {
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    fetch("/cyber_security2.json")
      .then((res) => res.json())
      .then(setAnimation);
  }, []);

  if (!animation) return null;

  return (
    <div className="py-20 bg-[#FAFAFA]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionVariants}
          >
            <motion.div variants={headingVariants}>
              <Heading
                subHeading="Core Solution"
                heading="BITSS — Cyber Security Expert in Devices and Servers for Crypto"
                text="Security Solutions for Every Crypto Project"
                headingClassName="lg:w-[100%]"
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {items.map((item, i) => {
                const isLast = i === items.length - 1;
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 12px 32px -8px hsl(var(--primary) / 0.15)",
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    className={`bg-white shadow p-4 rounded-lg cursor-default ${
                      isLast ? "col-span-2" : ""
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.25 + i * 0.1,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      className="ml-4 mt-4 w-fit"
                    >
                      <Icon size={24} className="text-primary" />
                    </motion.div>

                    <h5 className="text-lg font-medium mt-6 mb-4 tracking-wide lg:tracking-widest">
                      {item.label}
                    </h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={lottieVariants}
          >
            <Lottie animationData={animation} loop />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

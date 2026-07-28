"use client";

import { motion } from "framer-motion";
import { Box, Keyboard, PowerOff, ShieldAlert } from "lucide-react";
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
    icon: Keyboard,
    title: "Anti-Keylogging & Session Guard",
    text: "Preventing unauthorized background processes and spyware from capturing private keys, seed phrases, or administrative passwords.",
  },
  {
    icon: Box,
    title: "Isolated Execution Environments",
    text: "Securing local development setups to prevent untrusted software or malicious dependencies from accessing sensitive credentials.",
  },
  {
    icon: ShieldAlert,
    title: "Phishing & Malicious Domain Shield",
    text: "Real-time filtering of malicious Web3 domains, fake dApps, and malicious browser scripts targeting project administrators.",
  },
  {
    icon: PowerOff,
    title: "Emergency Endpoint Lockdown",
    text: "Capability to instantly isolate and lock down compromised team devices before attackers can extract private keys or breach administrative access.",
  },
];

export default function DeviceSecurityPage() {
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
              Device Security
            </motion.p>

            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-24 font-heading font-black tracking-wide mt-2">
              {["Endpoint", "Hardening", "&"].map((word, i) => (
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
                {["Administrative", "Device", "Defense"].map((word, i) => (
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
              Securing Developer Laptops and Key Management Hardware
            </motion.p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="w-2/3 mx-auto pb-20">
        <AnimatedSection variants={fadeUp(0)}>
          <p className="text-base text-slate-700 mx-auto">
            Individual administrative devices and developer laptops are the
            single largest entry point for Web3 security breaches. Phishing
            attacks, malicious browser extensions, and credential-stealing
            malware often compromise private keys and admin wallets right from
            team endpoints.
          </p>
        </AnimatedSection>

        <AnimatedSection variants={fadeUp(0.1)} className="mt-4">
          <p className="text-base text-slate-700 mx-auto">
            BITSS Device Security provides lightweight, specialized endpoint
            protection designed to shield administrative laptops, core developer
            devices, and deployment environments from targeted compromise.
          </p>
        </AnimatedSection>

        <AnimatedSection variants={fadeLeft(0)} className="mt-20 mb-10">
          <h2 className="text-2xl font-bold font-heading tracking-widest">
            Key Protection Capabilities
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

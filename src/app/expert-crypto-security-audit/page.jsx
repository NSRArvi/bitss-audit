"use client";
import Container from "@/components/Container/Container";
import { Button } from "@/components/ui/button";
import React from "react";
import sectionHeroImg from "../../../public/section_hero.png";
import Image from "next/image";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import {
  ShieldCog,
  Users,
  ShieldCheck,
  Lock,
  FileText,
  Database,
  Layers,
} from "lucide-react";
import CustomBadge from "@/components/CustomBadge";
import isoImg from "../assets/iso.webp";
import aseImg from "../assets/ase-removebg-preview.png";
import cdprImg from "../assets/cdpr-logo-removebg-preview.png";
import gdprImg from "../assets/gdpr-removebg-preview.png";

const ExpertCryptoSecurityAudit = () => {
  const { theme } = useTheme();
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
  const lists2 = [
    {
      title: "Standard Audit",
      amount: "5,000",
      body: [
        "Smart contract audit",
        "Infrastructure review",
        "Financial overview",
        "1-2 Weeks Completion",
      ],
      btnText: "Learn More",
    },
    {
      title: "Advanced Audit",
      amount: "10,000",
      body: [
        "Full system audit",
        "Tokenomics analysis",
        "Risk scoring & priority support",
        "1-2 Expert Auditors",
      ],
      btnText: "Request Audit",
      badge: "RECOMMENDED",
    },
    {
      title: "Enterprise Audit",
      amount: "25,000+",
      body: [
        "Full security + financial audit",
        "Intensive economic analysis",
        "3+ Expert Auditors",
        "3-3 Weeks Completion",
      ],
      btnText: "Request Audit",
      badge: "MOST purchased ",
    },
  ];
  const auditItems = [
    {
      img: isoImg,
      title: "ISO/IEC 27001",
      desc: "Smart Contract Audit Pittert Igmeninc Contino",
    },
    {
      img: cdprImg,
      title: "CDPR Ready",
      desc: "Senrlicin Audit Fio Gea Reort Snvernatie",
    },
    {
      img: gdprImg,
      title: "GDPR Ready",
      desc: "Conoart at Finaviel Cation Yod Gncjn Setions",
    },
    {
      img: aseImg,
      title: "AES 256-bit",
      desc: "Scetem in Audit Porpo Fasat Beecprophe",
    },
  ];

  return (
    <Container>
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 py-40 ">
        <div className="w-full">
          <h1 className="font-heading text-[40px] md:text-7xl font-bold leading-none text-center md:text-left">
            EXPERT CRYPTO SECURITY AUDITS FOR{" "}
            <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
              COMPLETE SYSTEM PROTECTION
            </span>
          </h1>
          <div className="w-full md:hidden">
            <Image
              src={sectionHeroImg}
              alt="Section Hero Image"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          <p className="my-6 md:my-10 justify-items-center text-left text-muted-foreground w-full md:w-2/3">
            Full-stack audits Of your smart contracts, wallets, infrastructure,
            and financial systems.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <Button> Request a Free Consultation</Button>
            <Button variant="outline" className={"w-48"}>
              Explore Services
            </Button>
          </div>
        </div>
        <div className="w-full hidden md:flex">
          <Image
            src={sectionHeroImg}
            alt="Section Hero Image"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
      </section>
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
            Bitss Crypto Audits delivers professional-grade security audits led
            by a specialist combining financial systems expertise, governance
            and risk management, and hands-on experience in IT architecture and
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
                className="group relative rounded-xl border dark:border-white/10 border-black/10 bg-white/5 dark:bg-slate-950/20 p-6 backdrop-blur-xs transition-all hover:border-primary/50 dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                {theme === "dark" && (
                  <div className="absolute -inset-px rounded-xl bg-linear-to-b from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                )}

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
      <section className="pt-20">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-muted-foreground text-2xl font-heading leading-tight text-left md:text-center mb-4">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              {" "}
              Beyond Code:
            </span>{" "}
            Financial & Economic Audit Layer
          </h2>
          <p className="text-left md:text-center justify-center text-gray-700 dark:text-gray-200 w-full md:w-1/2">
            Unlike simple code audits. BITSS Crypto Audits also provides
            rigorous financial reporting reviews ensuring your projects economic
            integrity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 pb-4 relative">
          {lists2.map((section, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-xl border dark:border-white/10 border-black/10 bg-white/5 dark:bg-slate-950/20 p-6 backdrop-blur-xs transition-all hover:border-primary/50 dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                {theme === "dark" && (
                  <div className="absolute -inset-px rounded-xl bg-linear-to-b from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                )}

                <div className="relative z-10">
                  <h3 className="font-heading mb-5 flex flex-col justify-center font-semibold text-foreground leading-tight text-2xl md:text-3xl">
                    <span> {section.title}</span>
                    <span className="text-2xl">€{section.amount}</span>
                  </h3>
                  {section.badge && (
                    <div className="absolute -top-6.5 -right-6 ">
                      <CustomBadge
                        text={section.badge}
                        className={
                          "uppercase px-2 h-6 font-heading font-medium rounded-l-none rounded-br-none rounded-tr-xl"
                        }
                      />
                    </div>
                  )}

                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.body.map((item, i) => (
                      <li key={i} className="leading-relaxed flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-10 pb-5">
                    <Button className={"font-semibold px-6"}>
                      {section.btnText}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <h2 className="text-muted-foreground text-sm font-heading leading-tight text-center pb-10">
          Confidential & Secure Submission — All data protected
        </h2>
      </section>
      <section className="">
        <div className="dark:bg-black/30 backdrop-blur-xs md:py-20 rounded-xl">
          <h2 className="text-muted-foreground text-3xl font-bold font-heading leading-tight text-left md:text-center px-6 md:px-0 pt-7 md:pt-5 md:pb-9 pb-7">
            Request Your Crypto Audit
          </h2>
          <div className="w-full">
            <div className=" rounded-xl px-6 md:px-0 pb-6 md:py-8 flex flex-col md:flex-row justify-center items-start gap-8">
              {auditItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-primary">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="mx-auto w-16 md:w-20 h-16 md:h-20 object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 dark:text-gray-400 text-sm">
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-500 leading-tight max-w-30">
                      {item.desc}
                    </span>
                  </div>
                  {index < auditItems.length - 1 && (
                    <div className="hidden lg:block h-10 w-px bg-gray-200 ml-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ExpertCryptoSecurityAudit;

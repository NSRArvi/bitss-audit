"use client";
import Container from "@/components/Container/Container";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Wallet,
  ArrowLeftRight,
  Server,
  FileSearch,
} from "lucide-react";
import { FinalCTA } from "@/components/Home/FinalCTA";
import CustomBadge from "@/components/CustomBadge";
import { Button } from "@/components/ui/button";

const AuditServices = () => {
  const lists = [
    { title: "Findings", value: "" },
    { title: "Critical Findings", value: "02" },
    { title: "High Risk", value: "04" },
    { title: "Medium Risk", value: "07" },
    { title: "Low Risk", value: "02" },
    ,
  ];
  const carts = [
    {
      heading: "Our Audit Services",
      subHeading: "Independent verification acros the full •crypto stack v",
      body: [
        {
          title: "Smart Contract Audits",
          text: "In—depth Of Smart contract code• security. (ogic fiaws renentarry nisks, and piatiorm governance controls.",
          icon: ShieldCheck,
        },
        {
          title: "Wallet Security Audits",
          text: "Assessment Of wallet cutodty logic. withhovat security, sénange metiens. and key management protens.",
          icon: Wallet,
        },
        {
          title: "Crypto Excharge Audits",
          text: "Security r,etixve Of trectioocaf Coritaicc iiottit/O nndgthng aovemarce securis. Aot and conetUrcture Dator rapuctre,",
          icon: ArrowLeftRight,
        },
        {
          title: "Blockchain Infrastructure",
          text: "Verficpnett Of auldt cut2utity trtettl*te sentettm, P«elate logic, aeDbhec,' NBiiOme, and nerev protections.",
          icon: Server,
        },
        {
          title: "Excrow & Payment Logic",
          text: "Security assermane tol crypto neocod plottcrrns secure logis and prettortn unfiernance totots-",
          icon: FileSearch,
        },
        {
          title: "Bitss AutoAudit",
          text: "Cort)botns neerttying wite-nike, seings, and nonechhatm gretteerd,",
          icon: FileSearch,
        },
        {
          title: "Bitss AutoAudit",
          text: "Auisspanch contracte secunng of pitectneai coots, vahesirecuring ecchangs, Atfis, niais, piertohen setuhes.",
          icon: "",
        },
      ],
    },
  ];
  return (
    <Container>
      <div className="text-center mt-4">
        <CustomBadge
          text={"Operated by BFIN SASU • Division. Bitss Crypto Audits"}
        />
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-16 md:gap-4 pt-16">
        <div className="flex-1 bg-transparent">
          <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight text-center md:text-left">
            Advanced Security Audits For <br />{" "}
            <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
              Blockchain, Smart Contracts,
            </span>
            <br /> and{" "}
            <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
              Digital Assets
            </span>
          </h1>
          <p className="mt-6 w-full md:w-2/3 text-center md:text-left">
            Professional security verification for smart contracts, wallet
            infrastructure, exchanges, protoccls, and blockchain-connected
            systems. Increase trust through in-depth technical audits and
            vulnerability identification.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <Button>Request a Security Review</Button>
            <Button variant="outline">View Pricing</Button>
          </div>
        </div>
        <div className="w-75">
          <div className="px-3 shadow-sm py-4 border rounded-xl ">
            <h3 className="font-semibold text-base">Crypto Risk Dashboard</h3>
            <p className="text-xs mt-1 text-muted-foreground">
              Current Risk Overview
            </p>
            <div className="justify-items-center">
              <p className="text-xl font-semibold my-4 text-gray-600">
                <span className="font-bold text-2xl">82</span>/100
              </p>
            </div>
            <div>
              <ul>
                {lists.map((item, i) => (
                  <li
                    key={i}
                    className="flex w-full justify-between text-center border-b border-b-primary/50 my-2 pb-2">
                    {" "}
                    <p className="text-muted-foreground text-sm">
                      {item.title && item.title}
                    </p>
                    <p className="text-sm font-semibold text-gray-600">
                      {item.value && item.value}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="py-2 rounded-lg bg-white/5 backdrop-blur-sm flex justify-between gap-2 items-center">
                <div className="text-muted-foreground">
                  <h3 className="font-semibold text-base">Audit Status</h3>
                  <p className="text-xs">Expect in Percentage</p>
                </div>
                <div className="bg-primary p-2 rounded-lg hover:scale-105 transition duration-300">
                  <p className="text-white font-medium">ASDF ASDF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center mt-24">
        <CustomBadge
          text={
            " BITSS • Cybersecurity • Crypto Security • Audits • Infrastructure Protection • Wallet Review"
          }
          className={"h-10 md:h-5"}
        />
      </div>
      <section className="space-y-12 pt-24 px-6">
        {carts.map((section, idx) => (
          <section key={idx} className="space-y-10">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-[40px] md:text-5xl font-bold tracking-tight text-foreground">
                {section.heading}
              </h2>
              <p className="text-muted-foreground mt-2">{section.subHeading}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {carts[0].body.map((item, i) => {
                const isLast = i === carts[0].body.length - 1;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative rounded-xl border dark:border-white/10 border-black/10 bg-white/5 dark:bg-slate-950/40 p-6 backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(57,168,239,0.2)] 
          ${isLast ? "lg:col-span-2" : "col-span-1"}`}>
                    {/* Glow */}
                    <div className="absolute -inset-px rounded-xl bg-linear-to-b from-blue-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-3">
                        {item.icon && (
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-[0_0_15px_rgba(57,168,239,0.3)]">
                            <item.icon size={20} />
                          </div>
                        )}

                        {isLast && (
                          <span className="ml-auto text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/10 px-2 py-1 rounded">
                            System Active
                          </span>
                        )}
                      </div>

                      <h3 className="mb-2 font-bold  tracking-tight text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item.text}
                      </p>

                      {isLast && (
                        <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-primary shadow-[0_0_10px_#39a8ef]" />
                        </div>
                      )}
                    </div>

                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </section>
      <section className="relative overflow-hidden py-10 px-6 text-center">
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-100 w-150 -translate-x-1/2 -translate-y-1/2 bg-blue-600/10 blur-[120px] rounded-full" />

        <div className="flex flex-col space-y-20">
          <FinalCTA
            text1={"Clear Pricing to Secure Your "}
            text2={"Crypto Business"}
            text3={
              "Talk to Bitss for a professional security audit of your smart contracts, wallets, exhange platform, or crypto connected crgpta."
            }
            text4={"Request a Crypto Audit"}
            text5={"Book a Consultation"}
          />

          <FinalCTA
            text1={"Protect Your "}
            text2={"Blockchain Infrastructure"}
            text3={
              "Talk to Bitss for a professional security audit of your smart contracts, wallets, exchange piatform, or crypto- connected infrasts se-ture."
            }
            text4={"Request a Crypto Audit"}
            text5={"Book a Consultation"}
          />
        </div>
      </section>
    </Container>
  );
};

export default AuditServices;

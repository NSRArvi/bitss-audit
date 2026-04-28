"use client";
import { ShieldCheck, ArrowUpDown } from "lucide-react";
import React from "react";
import Container from "../Container/Container";
import checkPng from "../../app/assets/check.png";
import Image from "next/image";
import file from "../../app/assets/featureIcon/file.png";
import wallet from "../../app/assets/featureIcon/wallet.png";
import dataTransfer from "../../app/assets/featureIcon/data-transfer.png";
import server from "../../app/assets/featureIcon/server.png";
import security from "../../app/assets/featureIcon/computer-security.png";
import shield from "../../app/assets/featureIcon/shield.png";
import { GoShieldX } from "react-icons/go";
import { AiOutlineDatabase } from "react-icons/ai";
import { FaBug, FaLaptopCode } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

const WhatWeSecure = () => {
  const WHAT_WE_SECURE = [
    {
      icon: file,
      title: "Smart Contract Security",
      text: "Audit and seare smart contracts. token logic, permissions. minting. liquidity and more.",
    },
    {
      icon: wallet,
      title: "Wallet & Custody Security",
      text: "Protect comections. controls. access. with&awal flows and custody",
    },
    {
      icon: dataTransfer,
      title: "Exchange & API Protection",
      text: "Secure exchange integrations, APIS, adrnin and transaction endpoints.",
    },
    {
      icon: server,
      title: "Blockchain Infrastructure",
      text: "Protect nodes, servers, RPC access, validators, environments and blockchain infrastructure.",
    },
    {
      icon: security,
      title: "Crypto Website Protection",
      text: "Shield crypto websites, wallet portals. presale pages, logins, payments and Web3 dashboards",
    },
    {
      icon: shield,
      title: "Crypto Audit & Risk Reporting",
      text: "Full audit reports with technical, financial, governance and infrastructure risk analysis.",
    },
  ];

  const BITSS_PROTECTION_PRODUCTS = [
    {
      icon: GoShieldX,
      title: "Bitss WAP Protection",
      subTitle: "Internal Firewall for Crypto Websites & Admin Zones",
      body: [
        "Lock out intruders",
        "Admin zone firewall",
        "Database",
        "Brute-force bckout",
        "Server login security",
      ],
    },
    {
      icon: AiOutlineDatabase,
      title: "Bitss WAP Server",
      subTitle: "Internal Firewall for SSH, Plesk. FTP & Server Access",
      body: [
        "SSH. Plesk. cPanel security",
        "FTP/SFTPprotection",
        "IP & DNS filtering",
        "Unauthorized access",
        "Server dashboard",
      ],
    },
    {
      icon: FaBug,
      title: "Bitss VWAR Web Protection",
      subTitle: "Script. Malware & Anti-Hacking Protection for Websites",
      body: [
        "Bbck malicious scripts",
        "SQL injection protection",
        "Malware blocking",
        "Auto quarantine threats",
        "Real-time file scanning",
      ],
    },
    {
      icon: FaLaptopCode,
      title: "Bitss VWAR Device Protection",
      subTitle: "Anti-Malware Protection for & Workstations",
      body: [
        "Malware detection",
        "Ransomware defense",
        "Spyware bbcking",
        "Behavior",
        "Developer machine security",
      ],
    },
    {
      icon: IoShieldCheckmark,
      title: "Bitss Crypto Audit Protection",
      subTitle: "Full-System Crypto Security & Risk Audit",
      body: [
        "Smart contract audits",
        "Infrastructure review",
        "Tokenomics analysis",
        "Governance risk review",
        "Detailed audit reports",
      ],
    },
  ];
  return (
    <div className="py-20 bg-[#F8FAFD] dark:bg-transparent">
      <Container>
        <section>
          <div className="text-center mb-8">
            <p className="text-primary text-sm font-semibold">WHAT WE SECURE</p>
            <h1 className="text-2xl md:text-4xl font-heading font-bold">
              {" "}
              Comprehensive Crypto Security
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {WHAT_WE_SECURE.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-transparent px-6 py-8 border border-primary/40 rounded-2xl backdrop-blur-md shadow-xs hover:border-primary/80">
                  {item.icon && (
                    <span className="text-primary">
                      {
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={40}
                          height={40}
                          className=""
                        />
                      }
                    </span>
                  )}
                  <h3 className="text-base font-bold py-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="py-10">
          <div className="text-center mb-8">
            <p className="text-primary text-sm font-semibold">
              BITSS PROTECTION PRODUCTS
            </p>
            <h1 className="text-2xl md:text-4xl font-heading font-bold">
              {" "}
              Our Core Protection Systems
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {BITSS_PROTECTION_PRODUCTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-transparent px-2 py-8 border border-primary/40 rounded-2xl backdrop-blur-md shadow-xs hover:border-primary/80 text-center">
                  <span className="text-blue-500 mx-auto">
                    <Icon size={42} className="mx-auto" />
                  </span>
                  <h3 className="text-sm font-bold pt-4 pb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.subTitle}
                  </p>
                  <ul className="space-y-2 pt-6">
                    {item.body.map((list, i) => (
                      <li
                        key={i}
                        className="text-start text-muted-foreground flex items-center gap-2 text-sm">
                        <Image
                          src={checkPng}
                          alt="check"
                          width={6}
                          height={6}
                          className="h-4 w-4 rounded-full object-cover"
                        />{" "}
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <div className="text-center mb-8">
            <p className="text-primary text-sm font-semibold">
              OUR SECURITY PROCESS
            </p>
            <h1 className="text-2xl md:text-4xl font-heading font-bold">
              {" "}
              Our Proven Audit & Protection Process
            </h1>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default WhatWeSecure;

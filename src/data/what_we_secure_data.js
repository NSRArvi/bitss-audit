import file from "../app/assets/featureIcon/file.png";
import wallet from "../app/assets/featureIcon/wallet.png";
import dataTransfer from "../app/assets/featureIcon/data-transfer.png";
import server from "../app/assets/featureIcon/server.png";
import security from "../app/assets/featureIcon/computer-security.png";
import shield from "../app/assets/featureIcon/shield.png";
import { GoShieldX } from "react-icons/go";
import { AiOutlineDatabase } from "react-icons/ai";
import { FaBug, FaLaptopCode } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
// import {
//   Target,
//   Search,
//   AlertTriangle,
//   FileText,
//   ShieldCheck,
// } from "lucide-react";
import img1 from "../app/assets/featureIcon/img1.png";
import img2 from "../app/assets/featureIcon/img2.png";
import img3 from "../app/assets/featureIcon/img3.png";
import img4 from "../app/assets/featureIcon/img4.png";
import img5 from "../app/assets/featureIcon/img5.png";
export const WHAT_WE_SECURE = [
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

export const BITSS_PROTECTION_PRODUCTS = [
  {
    icon: GoShieldX,
    title: "Bitss WAP Protection",
    subTitle: "Internal Firewall for Crypto Websites & Admin Zones",
    theme: {
      color: "#22c55e",
      bg: "#f0fdf4",
      border: "#bbf7d0",
    },
    body: [
      "Lock out intruders",
      "Admin zone firewall",
      "Database protection",
      "Brute-force lockout",
      "Server login security",
    ],
  },

  {
    icon: AiOutlineDatabase,
    title: "Bitss WAP Server Protection",
    subTitle: "Internal Firewall for SSH, Plesk, FTP & Server Access",
    theme: {
      color: "#3b82f6",
      bg: "#eff6ff",
      border: "#bfdbfe",
    },
    body: [
      "SSH, Plesk, cPanel security",
      "FTP / SFTP protection",
      "IP & DNS filtering",
      "Unauthorized access blocking",
      "Server dashboard security",
    ],
  },

  {
    icon: FaBug,
    title: "Bitss VWAR Web Protection",
    subTitle: "Script, Malware & Anti-Hacking Protection for Websites",
    theme: {
      color: "#8b5cf6",
      bg: "#f5f3ff",
      border: "#ddd6fe",
    },
    body: [
      "Block malicious scripts",
      "SQL injection protection",
      "Malware upload blocking",
      "Auto quarantine threats",
      "Real-time file scanning",
    ],
  },

  {
    icon: FaLaptopCode,
    title: "Bitss VWAR Device Protection",
    subTitle: "Anti-Malware Protection for Laptops & Workstations",
    theme: {
      color: "#f97316",
      bg: "#fff7ed",
      border: "#fdba74",
    },
    body: [
      "Malware detection",
      "Ransomware defense",
      "Spyware blocking",
      "Behavior monitoring",
      "Developer machine security",
    ],
  },

  {
    icon: IoShieldCheckmark,
    title: "Bitss Crypto Audit Protection",
    subTitle: "Full-System Crypto Security & Risk Audit",
    theme: {
      color: "#06b6d4",
      bg: "#ecfeff",
      border: "#a5f3fc",
    },
    body: [
      "Smart contract audits",
      "Infrastructure review",
      "Tokenomics analysis",
      "Governance risk review",
      "Detailed audit reports",
    ],
  },
];
export const OUR_SECURITY_PROCESS = [
  {
    number: "01",
    title: "Scope Definition",
    text: "We define your project architecture, websites, smart contracts, wallets, APIs, servers and admin access points.",
    // icon: Target,
    icon: img4,
  },
  {
    number: "02",
    title: "Technical Analysis",
    text: "We analyze contracts, backend systems, APIs, wallet flows, server access, and website protection layers in depth.",
    // icon: Search,
    icon: img2,
  },
  {
    number: "03",
    title: "Risk Identification",
    text: "We identify vulnerabilities, malware exposure, unauthorized access risk, financial risk and governance weaknesses.",
    // icon: AlertTriangle,
    icon: img1,
  },
  {
    number: "04",
    title: "Report & Recommendations",
    text: "You receive a detailed report with severity levels, impact analysis, and actionable recommendations.",
    // icon: FileText,
    icon: img3,
  },
  {
    number: "05",
    title: "Remediation Assistance",
    text: "We support your team until issues are fixed and verified for a secure and stable crypto environment.",
    // icon: ShieldCheck,
    icon: img5,
  },
];

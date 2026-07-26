import { BookUser, Fuel, Lock, Search } from "lucide-react";

const items = [
  {
    icon: Search,
    title: "Static & Dynamic Code Analysis",
    text: "Automated scanning combined with deep manual threat modeling to detect zero-day exploits and mathematical flaws.",
  },
  {
    icon: BookUser,
    title: "Actionable Security Insights:",
    text: "Clear, categorized risk reports (Critical, High, Medium, Low, Informational) featuring exact line-by-line remediation guidance for developers.",
  },
  {
    icon: Lock,
    title: "Continuous Active Protection:",
    text: "Unlike conventional security firms that hand over a static PDF report and disappear, every BITSS audit comes bundled with active cybersecurity software—including BITSSWAP and BITSS VWAR —to guard your servers and infrastructure post-launch.",
  },
  {
    icon: Fuel,
    title: "Gas Optimization",
    text: "Refining smart contract logic to reduce execution costs, ensuring your end-users pay lower transaction fees on-chain.",
  },
];
const auditProcess = [
  {
    title: "Code Ingestion & Repository Scope",
    text: "Code ingestion and repository scope",
  },
  {
    title: "Automated Vulnerability Pass",
    text: "High-speed automated static analysis to identify common EVM and non-EVM vulnerability patterns.",
  },
  {
    title: "Manual Logic & Attack Vector Review",
    text: "Senior cybersecurity engineers simulate complex flash loan attacks, governance hijacks, and privilege escalation attempts",
  },
  {
    title: "Initial Audit Report Delivery",
    text: "Comprehensive breakdown of findings provided to the development team with step-by-step remediation instructions.",
  },
  {
    title: "Remediation & Code Patching",
    text: "Remediation & Code Patching",
  },
];

export default function CryptoAuditPage() {
  return (
    <div className="">
      <div className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="w-2/3 mx-auto flex flex-col md:flex-row justify-center items-center gap-6 py-10 lg:py-20 relative z-10">
          <div className=" w-full text-center">
            <p className="text-primary px-4 text-lg tracking-widest">
              Crypto Audit
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-28 font-inter font-black tracking-wide">
              Full-Stack Smart
              <span className="text-primary"> Contract & Token </span>
              Audit
            </h2>
            <p className="text-lg text-muted-foreground w-full mx-auto text-center">
              Comprehensive Smart Contract & Token Security Analysis
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto">
        <p className="text-base text-slate-700 mx-auto font-inter">
          Over 10,000 crypto coins and tokens exist on the market today, yet a
          vast majority skip security audits due to high costs and slow
          timelines. This leaves them exposed to reentrancy attacks, flash loan
          exploits, integer overflows, and logic vulnerabilities
        </p>
        <p className="text-base text-slate-700  mx-auto font-inter mt-2">
          At <span className="text-lg font-medium">BITSS</span> , we bridge the
          gap between enterprise-grade security and affordability. Our Crypto
          Audit service delivers exhaustive static code analysis, automated
          vulnerability scanning, and manual architectural reviews for smart
          contracts, dApps, DeFi protocols, and token ecosystems. We inspect
          every line of code to eliminate backdoors, logic errors, and gas
          inefficiencies before deployment.
        </p>
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-10">
          Why Web3 projects choose BITSS crypto audit
        </h2>
        <div className="grid grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-4 hover:scale-102 transition duration-300"
              >
                <Icon className="text-primary" />
                <h5 className="mt-6 mb-4 text-lg font-medium tracking-wider">
                  {item.title}
                </h5>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="pb-20">
          <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-10">
            The BITSS audit process
          </h2>
          <div className="flex flex-col gap-6">
            {auditProcess.map((step, i) => (
              <div key={i} className="flex gap-6 items-start bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center font-black text-xl shadow-sm border border-slate-200">
                  {i + 1}
                </div>
                <div>
                  <h5 className="text-xl font-medium mb-2">{step.title}</h5>
                  <p className="text-muted-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  Code2,
  Database,
  FileWarning,
  Globe,
  Key,
  Lock,
  Network,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

const architectureDifference = [
  {
    title: "100% Built In-House",
    text: "Every engine, scanner, and firewall component was engineered by our internal team — eliminating risky third-party dependencies.",
  },
  {
    title: "Continuous Active Protection",
    text: "We update our threat engines daily. New attack vectors are countered in real time — not patched once a year like off-the-shelf software.",
  },
  {
    title: "Fully Managed Internal Operations",
    text: "A dedicated security engineering team monitors, maintains, and improves our infrastructure around the clock. No outsourcing, no gaps.",
  },
  {
    title: "Proprietary IP Filtering (No VPN Risk)",
    text: "Traditional VPNs introduce weak points and attack vectors. BITSS uses proprietary IP-based access control to secure server environments safely.",
  },
];

const comparisonData = [
  {
    aspect: "Tooling Dependency",
    conventional: "Rely on third-party security software",
    bitss: "Proprietary security tools built from scratch",
  },
  {
    aspect: "Access Control",
    conventional: "Rely on generic VPNs (vulnerable to exploits)",
    bitss: "Proprietary IP filtering — zero VPN dependency",
  },
  {
    aspect: "Client Protection",
    conventional: "Generic, one-size-fits-all PDF reports",
    bitss: "Custom-managed protection with live server defenses",
  },
  {
    aspect: "Threat Response",
    conventional: "Slow to patch emerging zero-day exploits",
    bitss: "Continuous real-time system updates",
  },
  {
    aspect: "Firewall Management",
    conventional: "Off-the-shelf firewall templates",
    bitss: "In-house managed internal firewall (BITSSWAP)",
  },
  {
    aspect: "System Scanning",
    conventional: "Basic smart contract scans",
    bitss: "Full malware, rootkit, and server antimalware (BITSS VWAR)",
  },
];

const layersOfSecurity = [
  {
    icon: Code2,
    title: "Smart Contract Logic & Reentrancy Guard",
    text: "Exhaustive code verification to prevent token drains and mathematical manipulation.",
  },
  {
    icon: Database,
    title: "SQL Injection Protection",
    text: "Hardened web forms and backend databases to ensure admin access remains secure.",
  },
  {
    icon: TerminalSquare,
    title: "Cross-Site Scripting (XSS) Shield",
    text: "Automatically blocking malicious scripts from targeting frontends and dApp user interfaces.",
  },
  {
    icon: Lock,
    title: "Brute Force Attack Prevention",
    text: "Detecting and instantly blocking automated password-guessing attempts.",
  },
  {
    icon: Network,
    title: "Smart Firewall Traffic Filtering (BITSSWAP)",
    text: "Real-time identification and isolation of unauthorized bot traffic and DDoS attempts.",
  },
  {
    icon: Globe,
    title: "Phishing & Fake Domain Shield",
    text: "Intercepting malicious links and counterfeit dApp domains before they reach users.",
  },
  {
    icon: ServerCog,
    title: "Rootkit & Server Antimalware (BITSS VWAR)",
    text: "Deep background scanning to identify and remove hidden rootkits, backdoors, and server viruses.",
  },
  {
    icon: FileWarning,
    title: "Malware & File Ingestion Shield",
    text: "Automated scanning of file upload interfaces and administrative endpoints to block junk payloads.",
  },
  {
    icon: Key,
    title: "Unauthorized Access Lockdown",
    text: "Multi-factor authentication barriers that block unauthorized logins even if password credentials are compromised.",
  },
  {
    icon: ShieldCheck,
    title: "VPN-Free IP Access Control",
    text: "Direct, secure access structures removing the systemic vulnerabilities found in third-party VPN tools.",
  },
];

export default function AboutUsPage() {
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
            <p className="text-primary px-4 text-lg tracking-widest uppercase font-semibold">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-28 font-inter font-black tracking-wide mt-2">
              We Don't Follow. <br />
              <span className="text-primary"> Others Follow Us. </span>
            </h2>
            <p className="text-lg text-muted-foreground w-full mx-auto text-center mt-4 font-medium">
              Superior Web3 Security Built From the Ground Up
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto pb-20">
        <p className="text-base text-slate-700 mx-auto font-inter">
          While others copy — we build. While conventional auditors rely on
          off-the-shelf, third-party software — we built our own proprietary
          security ecosystem. BITSS is not just a standard auditing company; it
          is a complete, custom-engineered cyber security defense system built
          to eliminate weak points across smart contracts, servers, and devices.
        </p>
        <p className="text-base text-slate-700 mx-auto font-inter mt-4">
          Completely self-funded and driven by organic research, we operate
          without external investor pressure. Our sole focus is delivering real,
          battle-tested security to protect project code and user funds.
        </p>

        {/* The BITSS Architecture Difference */}
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-6">
          The BITSS Architecture Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {architectureDifference.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100 p-6 rounded-lg shadow-sm"
            >
              <h5 className="text-lg font-bold font-inter mb-2 text-slate-900">
                {item.title}
              </h5>
              <p className="text-slate-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Industry Standard vs. The BITSS Solution */}
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-6">
          Industry Standard vs. The BITSS Solution
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-slate-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th className="border-b border-slate-200 p-4 font-bold text-slate-900">
                  Security Aspect
                </th>
                <th className="border-b border-slate-200 p-4 font-bold text-slate-500">
                  Conventional Industry Practices
                </th>
                <th className="border-b border-slate-200 p-4 font-bold text-primary">
                  What BITSS Delivers
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className="bg-white hover:bg-slate-50 transition-colors"
                >
                  <td className="border-b border-slate-200 p-4 font-medium text-slate-800">
                    {row.aspect}
                  </td>
                  <td className="border-b border-slate-200 p-4 text-slate-600 text-sm">
                    {row.conventional}
                  </td>
                  <td className="border-b border-slate-200 p-4 text-slate-800 text-sm font-semibold">
                    {row.bitss}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Layers of Integrated Crypto Security */}
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-6">
          Layers of Integrated Crypto Security
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {layersOfSecurity.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300 flex flex-col items-start gap-4"
              >
                <div className="p-3 bg-slate-50 rounded-lg text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-bold font-inter leading-tight">
                    {i + 1}. {item.title}
                  </h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BITSS Promise */}
        <div className="mt-20 bg-slate-900 text-white rounded-2xl p-10 text-center shadow-lg relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <h2 className="text-3xl font-black font-inter tracking-wide mb-4 relative z-10">
            The BITSS Promise
          </h2>
          <p className="text-lg text-slate-300 font-inter max-w-2xl mx-auto relative z-10 leading-relaxed">
            Your project and user data are safe — not because we say so, but
            because we built the system that makes it so.
          </p>
        </div>
      </div>
    </div>
  );
}

import { Activity, Cpu, FileText, Shield } from "lucide-react";

const metrics = [
  {
    icon: Shield,
    title: "BITSS VWAR Antimalware Engine",
    text: "A lightweight background daemon that continuously scans Linux/Windows server environments for malicious backdoors, unauthorized keyloggers, and hidden rootkits.",
  },
  {
    icon: Activity,
    title: "BITSSWAP Traffic Firewall",
    text: "Filtering malicious botnets, unauthorized API scraping, and DDoS attempts before traffic reaches your application layer.",
  },
  {
    icon: Cpu,
    title: "Automated Threat Isolation",
    text: "Real-time threat detection algorithms that automatically isolate compromised server nodes, preventing network-wide data breaches.",
  },
  {
    icon: FileText,
    title: "Log Integrity & Monitoring",
    text: "Continuous tracking of system configuration changes, ssh logins, and file permission modifications.",
  },
];

export default function ServerSecurityPage() {
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
              Server Security
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-28 font-inter font-black tracking-wide mt-2">
              Real-Time Infrastructure Protection & <br />
              <span className="text-primary"> Antimalware Defense </span>
            </h2>
            <p className="text-lg text-muted-foreground w-full mx-auto text-center mt-4">
              Active Threat Mitigation for Crypto Infrastructure
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto pb-20">
        <p className="text-base text-slate-700 mx-auto font-inter">
          A static audit report cannot stop a live server intrusion. Web3
          platforms, crypto exchanges, and node operators require continuous,
          real-time protection to safeguard databases, administrative consoles,
          and user funds from sophisticated malware.
        </p>
        <p className="text-base text-slate-700 mx-auto font-inter mt-4">
          Powered by BITSSWAP and BITSS VWAR, our server security suite delivers
          enterprise-grade infrastructure hardening, active traffic filtering, and
          real-time antimalware scanning built specifically for high-risk crypto
          environments.
        </p>
        
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-10">
          Advanced Server Protection Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {metrics.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-6 hover:scale-102 transition duration-300"
              >
                <Icon className="text-primary w-8 h-8" />
                <h5 className="mt-6 mb-4 text-lg font-medium tracking-wider">
                  {item.title}
                </h5>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20">
          <h2 className="text-2xl font-bold font-inter tracking-widest mb-6">
            The BITSS Bundle Advantage
          </h2>
          <p className="text-base text-slate-700 font-inter">
            We believe security should be holistic. That is why BITSSWAP and
            BITSS VWAR server security solutions are integrated 100% FREE with
            every BITSS Audit order.
          </p>
        </div>
      </div>
    </div>
  );
}

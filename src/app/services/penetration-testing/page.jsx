import { CloudCog, Key, ShieldAlert, Terminal } from "lucide-react";

const metrics = [
  {
    icon: Terminal,
    title: "API & Web Application Security",
    text: "Testing for Cross-Site Scripting (XSS), SQL Injections, broken access control, and data leakage across frontends and dApp interfaces.",
  },
  {
    icon: CloudCog,
    title: "Server & Cloud Infrastructure Hardening",
    text: "Stress-testing cloud servers (AWS, GCP, Bare Metal) for open ports, outdated software dependencies, and privilege escalation vectors.",
  },
  {
    icon: Key,
    title: "Wallet & Key Management Hygiene",
    text: "Evaluating key storage protocols, administrative endpoint security, and wallet interaction APIs to prevent session hijacking and unauthorized drainers.",
  },
  {
    icon: ShieldAlert,
    title: "DDoS & Traffic Resilience",
    text: "Assessing server behavior under high-volume simulated bot traffic to ensure uptime during high-market activity.",
  },
];

export default function PenetrationTestingPage() {
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
              Penetration Testing
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-28 font-inter font-black tracking-wide mt-2">
              Simulated Cyberattacks for <br />
              <span className="text-primary"> Full-Stack Infrastructure </span>
            </h2>
            <p className="text-lg text-muted-foreground w-full mx-auto text-center mt-4">
              Hardening Web2 Backends, Frontends, and Wallet Connections
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto pb-20">
        <p className="text-base text-slate-700 mx-auto font-inter">
          Smart contract security accounts for only part of your attack surface.
          Malicious actors frequently bypass on-chain code entirely by targeting
          server infrastructure, administrative endpoints, DNS records, API
          gateways, and wallet connection bridges.
        </p>
        <p className="text-base text-slate-700 mx-auto font-inter mt-4">
          BITSS Penetration Testing delivers offensive security assessments where
          our ethical security engineers simulate real-world cyberattacks against
          your system. We identify hidden entry points and patch critical
          vulnerabilities before malicious hackers exploit them.
        </p>
        
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-10">
          Scope of Infrastructure Testing
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
            Remediation Deliverables
          </h2>
          <p className="text-base text-slate-700 font-inter">
            Upon test completion, your team receives an executive threat
            intelligence report detailing identified attack vectors,
            proof-of-concept exploits, and step-by-step technical patch guides
            from our cybersecurity specialists.
          </p>
        </div>
      </div>
    </div>
  );
}

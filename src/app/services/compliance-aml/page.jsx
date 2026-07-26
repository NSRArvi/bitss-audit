import { Globe, ScanSearch, Server, ShieldAlert } from "lucide-react";

const metrics = [
  {
    icon: ScanSearch,
    title: "Real-Time AML Transaction Screening",
    text: "Automated wallet scanning that detects and flags interactions with high-risk addresses, mixer protocols (e.g., Tornado Cash), and sanctioned entities.",
  },
  {
    icon: Server,
    title: "Continuous Server-State Auditing",
    text: "Automated background verification to ensure deployed smart contracts and backend server states remain untampered with post-audit.",
  },
  {
    icon: ShieldAlert,
    title: "Incident Response Frameworks",
    text: "Pre-structured operational protocols to handle suspicious transactions, system breaches, or regulatory inquiries with minimal downtime.",
  },
  {
    icon: Globe,
    title: "Global Alignment Guidance",
    text: "Structuring cost-effective compliance strategies that allow your Web3 project to operate safely within global security guidelines.",
  },
];

export default function ComplianceAmlPage() {
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
              Compliance & AML
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-28 font-inter font-black tracking-wide mt-2">
              Continuous Monitoring & <br />
              <span className="text-primary"> Anti-Money Laundering Screening </span>
            </h2>
            <p className="text-lg text-muted-foreground w-full mx-auto text-center mt-4">
              Navigating Global Web3 Regulatory Standards
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto pb-20">
        <p className="text-base text-slate-700 mx-auto font-inter">
          The crypto ecosystem is transitioning into a regulated environment.
          Compliance is no longer optional for projects seeking listings,
          institutional backing, or international growth.
        </p>
        <p className="text-base text-slate-700 mx-auto font-inter mt-4">
          BITSS Compliance & AML provides real-time transaction screening,
          server-state auditing, and risk management frameworks to keep your
          project fully aligned with evolving regulatory expectations across the
          United States, Singapore, Hong Kong, and global markets.
        </p>
        
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-10">
          Core Compliance Capabilities
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
      </div>
    </div>
  );
}

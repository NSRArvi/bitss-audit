import { Activity, Bot, FileCheck, RefreshCw, Search, Server } from "lucide-react";

const aiConsoleFeatures = [
  {
    icon: Bot,
    title: "Automated Pattern Recognition",
    text: "Trained to identify EVM and Non-EVM security flaws, logic oversights, and gas inefficiencies across smart contract code bases.",
  },
  {
    icon: Search,
    title: "Deep Contextual Analysis",
    text: "Unlike static analyzers that output false positives, our AI model evaluates smart contract state variables and access control dependencies.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning Loop",
    text: "Updated daily with emerging zero-day exploit primitives discovered across live Web3 ecosystems.",
  },
];

const dashboardFeatures = [
  {
    icon: Activity,
    title: "Live Vulnerability Tracking",
    text: "Real-time visibility into open, patched, and verified code lines during an audit lifecycle.",
  },
  {
    icon: Server,
    title: "Server & Device Health Feeds",
    text: "Monitoring the active status of integrated BITSSWAP server firewalls and BITSS VWAR antimalware systems.",
  },
  {
    icon: FileCheck,
    title: "Verifiable Audit History",
    text: "Centralized repository for project teams to manage public security badges, audit certificates, and re-audit logs.",
  },
];

export default function ResearchPage() {
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
              BITSS Research
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-28 font-inter font-black tracking-wide mt-2">
              Practical Security R&D & <br />
              <span className="text-primary"> AI-Driven Audit Systems </span>
            </h2>
            <p className="text-lg text-muted-foreground w-full mx-auto text-center mt-4">
              Applied Cyber Security Research for Web3
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto pb-20">
        <p className="text-base text-slate-700 mx-auto font-inter">
          While traditional auditing relies heavily on slow manual labor or
          third-party open-source tools, BITSS Research is focused on practical,
          software-driven innovation. Built entirely on self-funded organic
          research and development, our engineering team focuses on active threat
          vectors, smart contract vulnerabilities, and server infrastructure
          defense.
        </p>
        <p className="text-base text-slate-700 mx-auto font-inter mt-4">
          We bridge the gap between complex code analysis and real-world
          execution by building proprietary automation engines that give Web3
          projects actionable clarity.
        </p>

        {/* AI-Based Audit Console */}
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-6">
          The BITSS AI-Based Audit Console
        </h2>
        <p className="text-base text-slate-700 font-inter mb-10">
          At the heart of our research division is the BITSS AI-Based Audit
          Console—a proprietary scanning engine designed to accelerate
          vulnerability detection without sacrificing precision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {aiConsoleFeatures.map((item, i) => {
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

        {/* Real-Time Client Security Dashboard */}
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-6">
          Real-Time Client Security Dashboard
        </h2>
        <p className="text-base text-slate-700 font-inter mb-10">
          Research is meaningless if project owners cannot track their posture.
          The BITSS Client Security Dashboard translates technical findings into
          intuitive threat intelligence:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dashboardFeatures.map((item, i) => {
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

        {/* Battle-Tested Section */}
        <div className="mt-20 bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold font-inter tracking-widest mb-6">
            Battle-Tested Under Real Market Conditions
          </h2>
          <p className="text-base text-slate-700 font-inter">
            Our research isn't limited to lab environments. When Web3 projects
            face live security breaches, our R&D insights drive immediate incident
            response, system isolation, and asset recovery—proving our
            methodologies against live hacker exploits and market recoveries.
          </p>
        </div>
      </div>
    </div>
  );
}

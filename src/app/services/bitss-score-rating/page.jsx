import { Activity, Code, Server, ShieldCheck } from "lucide-react";

const metrics = [
  {
    icon: Code,
    title: "Code Integrity & Quality",
    text: "Evaluating smart contract architecture, mathematical soundness, and vulnerability density.",
  },
  {
    icon: ShieldCheck,
    title: "Decentralization & Governance Health",
    text: "Analyzing admin key privileges, timelock implementation, multi-sig controls, and centralization risks.",
  },
  {
    icon: Server,
    title: "Operational & Server Resilience",
    text: "Real-time checking of backend server security, domain health, and infrastructure hardening.",
  },
  {
    icon: Activity,
    title: "Market Risk & Security Monitoring",
    text: "Tracking continuous server-state health to detect abnormal contract interactions or unauthorized administrative actions.",
  },
];

export default function BitssScoreRatingPage() {
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
              BITSS Score & Rating
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-28 font-inter font-black tracking-wide">
              Dynamic Web3 Security Rating &<br />
              <span className="text-primary"> Ecosystem Transparency </span>
            </h2>
            <p className="text-lg text-muted-foreground w-full mx-auto text-center mt-4">
              Transparent, Real-Time Security Benchmarking
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto pb-20">
        <p className="text-base text-slate-700 mx-auto font-inter">
          In the Web3 ecosystem, investor trust is built on verifiable security,
          not unbacked promises. The BITSS Score & Rating is a dynamic security
          index that provides projects, exchanges, and token holders with a
          real-time, transparent breakdown of a project's overall security health.
        </p>
        <p className="text-base text-slate-700 mx-auto font-inter mt-4">
          Driven entirely by our independent research and development into cyber
          security, the BITSS Rating evaluates both on-chain smart contract
          integrity and off-chain operational security to deliver an unbiased risk
          score.
        </p>
        
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-10">
          Core Evaluation Metrics
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
            Building Immediate Investor Trust
          </h2>
          <p className="text-base text-slate-700 font-inter">
            Audited projects receive an embeddable, real-time BITSS Security Badge
            for their website, documentation, and exchange listing applications—proving
            to investors, launchpads, and centralized exchanges that your project
            maintains active, verified security standards.
          </p>
        </div>
      </div>
    </div>
  );
}

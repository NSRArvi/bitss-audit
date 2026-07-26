import { Box, Keyboard, PowerOff, ShieldAlert } from "lucide-react";

const metrics = [
  {
    icon: Keyboard,
    title: "Anti-Keylogging & Session Guard",
    text: "Preventing unauthorized background processes and spyware from capturing private keys, seed phrases, or administrative passwords.",
  },
  {
    icon: Box,
    title: "Isolated Execution Environments",
    text: "Securing local development setups to prevent untrusted software or malicious dependencies from accessing sensitive credentials.",
  },
  {
    icon: ShieldAlert,
    title: "Phishing & Malicious Domain Shield",
    text: "Real-time filtering of malicious Web3 domains, fake dApps, and malicious browser scripts targeting project administrators.",
  },
  {
    icon: PowerOff,
    title: "Emergency Endpoint Lockdown",
    text: "Capability to instantly isolate and lock down compromised team devices before attackers can extract private keys or breach administrative access.",
  },
];

export default function DeviceSecurityPage() {
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
              Device Security
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-28 font-inter font-black tracking-wide mt-2">
              Endpoint Hardening & <br />
              <span className="text-primary"> Administrative Device Defense </span>
            </h2>
            <p className="text-lg text-muted-foreground w-full mx-auto text-center mt-4">
              Securing Developer Laptops and Key Management Hardware
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto pb-20">
        <p className="text-base text-slate-700 mx-auto font-inter">
          Individual administrative devices and developer laptops are the single
          largest entry point for Web3 security breaches. Phishing attacks,
          malicious browser extensions, and credential-stealing malware often
          compromise private keys and admin wallets right from team endpoints.
        </p>
        <p className="text-base text-slate-700 mx-auto font-inter mt-4">
          BITSS Device Security provides lightweight, specialized endpoint
          protection designed to shield administrative laptops, core developer
          devices, and deployment environments from targeted compromise.
        </p>
        
        <h2 className="text-2xl font-bold font-inter tracking-widest mt-20 mb-10">
          Key Protection Capabilities
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

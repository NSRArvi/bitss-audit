"use client";
import React, { useEffect, useState } from "react";
import Heading from "../shared/Heading/Heading";
import Container from "../Container/Container";
import Lottie from "lottie-react";
import {
  ActivityIcon,
  Layers2Icon,
  MonitorIcon,
  RefreshCwIcon,
  ShieldIcon,
} from "lucide-react";

const items = [
  {
    icon: Layers2Icon,
    label: "For Token & Coin Projects",
    text: "Smart contract audit, token security, and vulnerability research.",
  },
  {
    icon: ActivityIcon,
    label: "For Web3 & DeFi Projects",
    text: "Protocol security, ecosystem mapping, and attack simulation.",
  },
  {
    icon: ShieldIcon,
    label: "For Enterprises",
    text: "Full ecosystem audit, compliance, and custom AML screening.",
  },
  {
    icon: MonitorIcon,
    label: "For Server & Infrastructure Owners",
    text: "BITSS VWAR & BITSS WAP infrastructure protection and real-time threat monitoring.",
  },
  {
    icon: RefreshCwIcon,
    label: "For Crypto Exchanges",
    text: " Penetration testing, API security, and hardware wallet security.",
  },
];

export default function CoreSolutions() {
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    fetch("/cyber_security2.json")
      .then((res) => res.json())
      .then(setAnimation);
  }, []);

  if (!animation) return null;
  return (
    <div className="py-20 bg-[#FAFAFA]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full">
            <Heading
              subHeading="Core Solution"
              heading="BITSS — Cyber Security Expert
            in Devices and Servers for Crypto"
              text="Security Solutions for Every Crypto Project"
              headingClassName="lg:w-[100%]"
            />
            <div className="grid grid-cols-2 gap-3">
              {items.map((item, i) => {
                const isLast = i === items.length - 1;
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`bg-white shadow p-4 rounded-lg ${
                      isLast ? "col-span-2" : ""
                    }`}
                  >
                    <Icon
                      size={24}
                      className="text-primary rounded-full ml-4 mt-4"
                    />
                    <h5 className="text-lg font-medium mt-6 mb-4 tracking-widest">
                      {item.label}
                    </h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-full">
            <Lottie animationData={animation} loop />
          </div>
        </div>
      </Container>
    </div>
  );
}

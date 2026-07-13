import { ArrowRightIcon, Globe, ShieldCheck, Trophy, User } from "lucide-react";
import SlotCounter from "react-slot-counter";
import { Button } from "../ui/button";
import { FlowingLogos } from "../ui/flowing-logos";

import Image from "next/image";

const logos = [
  {
    image: "/assets/logo1.svg",
    name: "Logo 1",
  },
  {
    image: "/assets/logo2.svg",
    name: "Logo 2",
  },
  {
    image: "/assets/logo3.svg",
    name: "Logo 3",
  },
  {
    image: "/assets/logo4.png",
    name: "Logo 4",
  },
  {
    image: "/assets/logo5.png",
    name: "Logo 5",
  },
  {
    image: "/assets/logo6.svg",
    name: "Logo 6",
  },
  {
    image: "/assets/logo7.svg",
    name: "Logo 7",
  },
];

const HeroBanner = () => {
  const lists = [
    { title: "Smart Contracts", value: "Reviewed" },
    { title: "Wallets Control", value: "Checked" },
    { title: "Infrastructure", value: "In Scope" },
    { title: "Admin Access", value: "Assessed" },
    { title: "APIs/Frontend", value: "Tested" },
    { title: "Governance Risk", value: "Rated" },
    ,
  ];
  const lists2 = [
    { icon: ShieldCheck, title: "24/7 Protection" },
    { icon: User, title: " Expert Security Team" },
    { icon: Trophy, title: "Proven Methodology" },
    { icon: Globe, title: "Global Trust" },
  ];

  return (
    <div className="mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-6 py-20">
        <div className="space-y-5 w-full lg:w-2/3">
          <p className="text-lg">
            Elevate Your <span className="text-primary">Web3 Journey</span>
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-8xl lg:leading-28 font-inter">
            Largest Blockchain Security Auditor
          </h2>
          <p className="text-lg text-muted-foreground w-full lg:w-2/3">
            Bitss is the largest Web3 security platform combining formal
            verification with audits and comprehensive security solutions.
          </p>
          <div className="flex items-center gap-4 mt-10">
            <Button
              variant="outline"
              className="px-6 lg:px-10 h-14 cursor-pointer"
            >
              Talk to an expert
            </Button>
            <Button className="bg-primary hover:bg-primary flex items-center gap-1 px-6 lg:px-10 h-14 cursor-pointer">
              Skynet Rating <ArrowRightIcon size={20} />
            </Button>
          </div>
        </div>
        <div className="md:text-right hidden lg:flex lg:flex-col gap-6 font-inter">
          <div>
            <p className="text-lg md:text-5xl lg:text-6xl flex items-center justify-end">
              $<SlotCounter value={470} />B
            </p>
            <span className="text-xs md:text-sm lg:text-base leading-1">
              Market Cap Assessed
            </span>
          </div>
          <div>
            <p className="text-lg md:text-5xl lg:text-6xl flex justify-end">
              <SlotCounter value={5197} />
            </p>
            <span className="text-xs md:text-sm lg:text-base">
              Client Served
            </span>
          </div>
          <div>
            <p className="text-lg md:text-5xl lg:text-6xl flex items-center justify-end">
              $<SlotCounter value={2} />B
            </p>
            <span className="text-xs md:text-sm lg:text-base">Valuation</span>
          </div>
          <div>
            <p className="text-lg md:text-5xl lg:text-6xl flex items-center justify-end">
              <SlotCounter value={1.8} />M
            </p>
            <span className="text-xs md:text-sm lg:text-base">
              Monthly Skynet User
            </span>
          </div>
        </div>
      </div>
      <FlowingLogos data={logos} />
      <div className="flex flex-col md:flex-row md:justify-around items-center text-center lg:hidden gap-10 mt-20 font-inter">
        <div>
          <p className="text-5xl flex items-center justify-center">
            $<SlotCounter value={470} />B
          </p>
          <span className="text-base md:text-sm lg:text-base">
            Market Cap Assessed
          </span>
        </div>
        <div>
          <p className="text-5xl">
            <SlotCounter value={5197} />
          </p>
          <span className="text-base md:text-sm lg:text-base">
            Client Served
          </span>
        </div>
        <div>
          <p className="text-5xl items-center justify-center">
            $<SlotCounter value={2} />B
          </p>
          <span className="text-base md:text-sm lg:text-base">Valuation</span>
        </div>
        <div>
          <p className="text-5xl items-center justify-center">
            <SlotCounter value={1.8} />M
          </p>
          <span className="text-base md:text-sm lg:text-base">
            Monthly Skynet User
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

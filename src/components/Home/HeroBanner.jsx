"use client";
import SlotCounter from "react-slot-counter";
import { Button } from "../ui/button";
import { FlowingLogos } from "../ui/flowing-logos";

import Container from "../Container/Container";
import { useEffect, useState } from "react";
import { OrderModal } from "../OrderModal";
import { Badge } from "../ui/badge";

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
  const [open, setOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />
      <OrderModal
        open={open}
        setOpen={setOpen}
        onClose={() => setOpen(false)}
      />
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10 lg:py-20 relative z-10">
          <div className="space-y-5 w-full lg:w-1/2 text-center">
            {/* <p className="text-lg">
              Elevate Your <span className="text-primary">Web3 Journey</span>
            </p> */}
            <Badge
              className="text-primary px-4 py-2.5 text-lg h-10"
              variant="secondary"
            >
              Elevate Your Web3 Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-28 font-inter font-black">
              Largest Blockchain{" "}
              <span className="text-primary">Security Auditor</span>
            </h2>
            <p className="text-lg text-muted-foreground w-full lg:w-2/3 text-center">
              Bitss is the largest Web3 security platform combining formal
              verification with audits and comprehensive security solutions.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <Button
                onClick={() => setOpen(true)}
                className="bg-primary hover:bg-primary flex items-center gap-1 px-6 lg:px-10 h-12 cursor-pointer text-white"
              >
                Talk to an expert
              </Button>
            </div>
          </div>
          {/* <div className="md:text-right hidden lg:flex lg:flex-col gap-6 font-inter">
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
          </div> */}
        </div>
        {/* <FlowingLogos data={logos} /> */}
        {/* <div className="flex flex-col md:flex-row md:justify-around items-center text-center lg:hidden gap-10 mt-20 font-inter">
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
        </div> */}
      </Container>
    </div>
  );
};

export default HeroBanner;

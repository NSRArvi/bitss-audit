"use client";
import React from "react";
import bgImage from "../../app/assets/hero_banner.webp";
import { Button } from "../ui/button";
import { Globe, MoveRight, ShieldCheck, Trophy, User } from "lucide-react";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";
import Container from "../Container/Container";

const HeroBanner = () => {
  const navigate = useRouter();
  const lists = [
    { title: "Smart Contracts", value: "Reviewed" },
    { title: "Wallets Control", value: "Checked" },
    { title: "Infrastructure", value: "In Scope" },
    { title: "Admin Access", value: "Assessed" },
    { title: "APIs/Frontend", value: "Tested" },
    { title: "Governance Risk", value: "Rated" },
    ,
  ];
  return (
    <Container>
      <div
        style={{ backgroundImage: `url(${bgImage.src})` }}
        className="relative h-screen w-full bg-center bg-cover rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 flex flex-col md:flex-row gap-20 md:gap-0 p-5 md:px-10 md:py-10">
          <div className="flex-1">
            <p className="text-primary font-bold text-xs">
              BITSS CRYPTO SECURITY
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black font-heading pt-2 pb-1 md:py-5 w-full md:w-2/3">
              Crypto Security For{" "}
              <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
                Serious Blockchain Businesses
              </span>
            </h2>
            <p className="text-sm text-white py-3 md:pb-6 w-full md:w-2/3">
              Bitss protects crypto websites, wallets, exchanges, APIs, smart
              contracts, server logins, and blockchain infrastructure using
              cybersecurity products, audit intelligence, and continuous
              protection.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button
                onClick={() => navigate.push("/audit-form")}
                className="text-white p-6 flex gap-3 items-center cursor-pointer bg-primary/80 hover:bg-primary">
                Request Crypto Security Review <MoveRight className="mt-1" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white p-6 flex gap-3 items-center cursor-pointer hover:bg-primary hover:border-primary border-primary">
                Explore Protection Products <MoveRight className="mt-1" />
              </Button>
            </div>
            <div className="flex justify-between mt-10 text-white bg-slate-950/80 rounded-lg py-6 pr-8">
              <span className="flex items-center gap-1 text-sm">
                <ShieldCheck size={18} className="text-primary font-bold" />{" "}
                24/7 Protection
              </span>
              <span className="flex items-center gap-1 text-sm">
                <User size={18} className="text-primary font-bold" />
                Expert Security Team
              </span>
              <span className="flex items-center gap-1 text-sm">
                <Trophy size={18} className="text-primary font-bold" /> Proven
                Methodology
              </span>
              <span className="flex items-center gap-1 text-sm">
                <Globe size={18} className="text-primary font-bold" /> Global
                Trust
              </span>
            </div>
          </div>
          <div className="w-full md:w-75 h-fit backdrop-blur-md flex flex-col items-center justify-center rounded-xl ">
            <div className="px-2 shadow-sm py-2 md:py-6 rounded-xl ">
              <h3 className="font-semibold text-lg text-white flex justify-between items-center">
                Security Coverage{" "}
                <span className="text-green-400">
                  <ShieldCheck />
                </span>
              </h3>
              <div>
                <ul>
                  {lists.map((item, i) => (
                    <li
                      key={i}
                      className="flex text-sm text-white w-full justify-between text-center border-b border-b-primary/50  my-2 pb-2 gap-16">
                      <p className="">{item.title && item.title}</p>
                      <Badge variant="secondary" className="">
                        {item.value && item.value}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <div className="py-2 ">
                  <h3 className="text-white text-sm">
                    AutoAudit Risk Over 82/100
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroBanner;

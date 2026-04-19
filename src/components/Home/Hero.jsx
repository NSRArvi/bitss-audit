"use client";
import React from "react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import CustomBadge from "../CustomBadge";

const Hero = () => {
  const lists = [
    { title: "Smart Contracts", value: "Reviewed" },
    { title: "Wallets Control", value: "Checked" },
    { title: "infrastructure", value: "In Scope" },
    { title: "Admin Access", value: "Assessed" },
    { title: "APIs/Frontend", value: "Tested" },
    { title: "Governance Risk", value: "Rated" },
    ,
  ];

  return (
    <>
      <div className="text-center mt-4">
        <CustomBadge text={"Operated by BFIN SAUS - Brand BITSS"} />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 pt-10">
        <div className="flex-1 bg-transparent">
          <h1 className="font-heading text-3xl md:text-6xl font-bold leading-none text-center md:text-left">
            Crypto Security For <br />{" "}
            <span className="text-heading bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
              Serious Blockchain Businesses
            </span>
          </h1>
          <p className="mt-6 text-center md:text-left">
            Bitss helps protect smart contracts, wallets, exchange, blockchain
            infrastructure <br /> and digital assets platforms through audits,
            technical reviews, monitoring <br /> and security hardening.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <Link
              href="/"
              className="rounded-md text-white font-medium bg-primary cursor-pointer  text-center py-3 px-6 w-60 md:w-fit">
              Request a Security Review
            </Link>
            <Link
              href="/"
              className="rounded-md border border-primary dark:text-white hover:text-white dark:hover:text-black font-medium hover:bg-primary transition duration-500 cursor-pointer text-center py-3 px-6 w-60 md:w-fit">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="w-80">
          <div className="px-3 shadow-sm py-4 border rounded-xl ">
            <h3 className="font-semibold text-lg">Security Coverage</h3>
            <div>
              <ul>
                {lists.map((item, i) => (
                  <li
                    key={i}
                    className="flex text-muted-foreground w-full justify-between text-center border-b border-b-primary/50  my-3">
                    <p className="">{item.title && item.title}</p>
                    <p className="">{item.value && item.value}</p>
                  </li>
                ))}
              </ul>
              <div className="py-2 rounded-lg bg-white/5 backdrop-blur-sm">
                <h3 className="font-semibold text-muted-foreground">
                  AutoAudit Risk Over 82/100
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <CustomBadge
          text={
            " BITSS • Cybersecurity • Crypto Security • Audits • Infrastructure Protection • Wallet Review"
          }
        />
      </div>
    </>
  );
};

export default Hero;

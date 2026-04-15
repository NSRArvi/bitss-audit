"use client";
import React from "react";
import Link from "next/link";

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
        <span className="border-y dark:border-white/20 border-gray-100 py-2">
          Operated by BFIN SAUS - Brand BITSS
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 pt-16">
        <div className="flex-1 bg-transparent">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-center md:text-left">
            Crypto Security For <br />{" "}
            <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
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
              className="py-3 rounded-md text-white font-semibold bg-primary cursor-pointer w-55 text-center">
              Request a Security Review
            </Link>
            <Link
              href="/"
              className="w-55 py-3 rounded-md border border-primary dark:text-white hover:text-white dark:hover:text-black font-semibold hover:bg-primary transition duration-500 cursor-pointer text-center">
              View Pricing
            </Link>
          </div>
        </div>
        <div className="w-75">
          <div className="px-3 shadow-sm py-4 border rounded-xl ">
            <h3 className="font-semibold text-lg">Security Coverage</h3>
            <div>
              <ul>
                {lists.map((item, i) => (
                  <li
                    key={i}
                    className="flex w-full justify-between text-center border-b border-b-primary/50  my-3">
                    <p className="">{item.title && item.title}</p>
                    <p className="">{item.value && item.value}</p>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm">
                <h3 className="font-semibold text-lg">
                  AutoAudit Risk Over 82/100
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <span className="border-y dark:border-white/20 border-gray-100 py-2">
          BITSS • Cybersecurity • Crypto Security • Audits • Infrastructure
          Protection • Wallet Review
        </span>
      </div>
    </>
  );
};

export default Hero;

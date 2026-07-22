"use client";
import React, { useEffect, useState } from "react";
import Heading from "../shared/Heading/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Container from "../Container/Container";
import Lottie from "lottie-react";

const items = [
  {
    id: 1,
    heading: "BITSS Crypto Audit",
    text: "Full-stack, in-depth security audits covering smart contracts, token wallets, and Web3 ecosystem infrastructure",
  },
  {
    id: 2,
    heading: "BITSS Score & Research Rating",
    text: "Every audited project receives a comprehensive BITSS Rating backed by our in-depth research and development into cyber security. Built to showcase transparency and proven security to your users.",
  },
  {
    id: 3,
    heading: "Server Security & Infrastructure Protection",
    text: "Real-time server hardening and continuous threat monitoring to protect your systems. Powered by BITSS WAP Server Security Protection and BITSS VWAR Server Antimalware Scanner",
  },
  {
    id: 4,
    heading: "Penetration Testing",
    text: "Simulated real-world attacks on your server, API, frontend, and crypto wallet infrastructure to find vulnerabilities and stop hackers before they target you.",
  },
  {
    id: 5,
    heading: "AML Compliance & Monitoring",
    text: "Continuous server-state monitoring, anti-money laundering (AML) screening, and incident response frameworks to keep your crypto ecosystem secure and fully compliant.",
  },
];

export default function BITSSProductSuite() {
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    fetch("question.json")
      .then((res) => res.json())
      .then(setAnimation);
  }, []);

  if (!animation) return null;
  return (
    <div className="py-20 bg-white">
      <Container>
        <Heading
          subHeading="BITSS Product Suite"
          heading="Improve Your Web3 Ecosystem with an All-in-One ecurity & Compliance Suite with BITSS"
          text="Secure your code, power your project, and protect your servers continuously with our integrated security tools."
          headingClassName="lg:w-[60%] lg:text-[41px]!"
        />

        <div className="flex flex-col lg:flex-row justify-between gap-5 items-center bg-[#FAFAFA] rounded-lg">
          <div className="w-full">
            <Accordion defaultValue={[1]} className=" w-full p-6 rounded-lg">
              {items.map((item, i) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="w-full bg-white px-6 py-2 shadow mb-6 rounded-lg"
                >
                  <AccordionTrigger className="text-base">
                    {item.heading}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {item.text}
                    {i === 2 && (
                      <p className="text-sm mt-1.5">
                        Integrated completely{" "}
                        <span className="text-base font-semibold">FREE</span>{" "}
                        with every audit order!
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="lg:pr-6 pb-5 lg:pb-0 rounded-lg">
            <Lottie
              animationData={animation}
              loop
              className="size-80 lg:size-125"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

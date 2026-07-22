"use client";
import React, { useEffect, useState } from "react";
import Heading from "../shared/Heading/Heading";
import { Badge } from "../ui/badge";
import Container from "../Container/Container";
import Lottie from "lottie-react";
//

export default function GlobalRegulatory() {
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    fetch("crypto_bitcoin.json")
      .then((res) => res.json())
      .then(setAnimation);
  }, []);

  if (!animation) return null;
  return (
    <div className="py-20 bg-[#FAFAFA]">
      <Container>
        <div className="flex justify-between">
          <div className="w-full">
            <div className="pr-6 rounded-lg">
              <Lottie
                animationData={animation}
                loop
                style={{ width: 500, height: 500, background: "none" }}
              />
            </div>
          </div>
          <div className="w-full text-right">
            <Heading
              subHeading="Global Regulatory Compliance & Advocacy"
              heading="BITSS - Pioneering Crypto Security Regulation Worldwide"
              text="The crypto industry is evolving fast. Regulations are arriving, and securing your assets is no longer optional."
              headingClassName=""
            />
            <div>
              <p className=" text-gray-600 mb-6">
                BITSS is pioneering regulated relations around the
                world—actively engaging with framework compliance across the
                United States, Singapore, Hong Kong, and worldwide. We are busy
                building direct communication with global regulators to ensure
                your Web3 projects stay ahead of security demands.
              </p>
              <div className="bg-white p-4 rounded-lg w-fit">
                <Badge
                  variant="secondary"
                  className="text-base font-medium text-green-700"
                >
                  Key Advantage :
                </Badge>
                <span className="text-sm text-muted-foreground">
                  We align our cost-effective audits with core global security
                  needs, making it easy for your project to stay compliant,
                  protected, and safe from hackers.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

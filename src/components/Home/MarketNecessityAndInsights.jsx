import React from "react";
import Heading from "../shared/Heading/Heading";
import CustomBadge from "../CustomBadge";
import Container from "../Container/Container";

const items = [
  {
    fact: "Fact 1",
    heading: "$2.17B",
    text: "stolen from crypto projects in H1 2025. Most were unaudited. Most could have been prevented.",
  },
  {
    fact: "Fact 2",
    heading: "10,000+",
    text: "crypto coins exist on the market. The majority have never had a professional security audit. Hackers know this — and they target the weakest ones first.",
  },
  {
    fact: "Fact 3",
    heading: "MiCA•VARA•DORA",
    text: "regulations now requiresecurity compliance from all crypto projects in EU and UAE. Non-compliant projects face delisting and legal action",
  },
  {
    fact: "Fact 4",
    heading: "Audit Reports",
    text: "Investors and exchanges demand audit reports before listing or funding any token.",
  },
];

export default function MarketNecessityAndInsights() {
  return (
    <Container>
      <div className="py-20">
        <Heading
          subHeading="Market Necessity & Insights"
          heading="Features That Necessitate You to Do an Audit and Upgrade Your Crypto
          Security"
          text="Why Your Crypto Project Needs Security — Right Now"
          headingClassName="lg:w-[60%] lg:text-[46px]!"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div
              key={item.fact}
              className="bg-white p-4 shadow rounded-lg space-y-2 hover:scale-102 transition duration-300"
            >
              <CustomBadge
                text={item.fact}
                className="text-base font-inter mb-6"
              />
              <h3 className="font-semibold text-primary text-2xl font-inter">
                {item.heading}
              </h3>
              <p className="text-muted-foreground font-inter">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

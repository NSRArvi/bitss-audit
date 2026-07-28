"use client";
import Heading from "../shared/Heading/Heading";
import CustomBadge from "../CustomBadge";
import Container from "../Container/Container";
import { motion } from "motion/react";

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
    text: "regulations now require security compliance from all crypto projects in EU and UAE. Non-compliant projects face delisting and legal action",
  },
  {
    fact: "Fact 4",
    heading: "Audit Reports",
    text: "Investors and exchanges demand audit reports before listing or funding any token.",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.13,
      duration: 0.4,
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  }),
};

export default function MarketNecessityAndInsights() {
  return (
    <Container>
      <div className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
          variants={headingVariants}
        >
          <Heading
            subHeading="Market Necessity & Insights"
            heading="Features That Necessitate You to Do an Audit and Upgrade Your Crypto Security"
            text="Why Your Crypto Project Needs Security — Right Now"
            headingClassName="lg:w-[60%] lg:text-[46px]!"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
          variants={sectionVariants}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.fact}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px -8px hsl(var(--primary) / 0.15)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="bg-white p-4 shadow rounded-lg space-y-2 cursor-default"
            >
              <CustomBadge text={item.fact} className="text-base mb-6" />

              <motion.h3
                custom={i}
                variants={statVariants}
                className="font-semibold text-primary text-2xl font-heading"
              >
                {item.heading}
              </motion.h3>

              <p className="text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}

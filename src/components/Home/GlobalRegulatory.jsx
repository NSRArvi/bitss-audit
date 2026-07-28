"use client";
import React, { useEffect, useState } from "react";
import Heading from "../shared/Heading/Heading";
import { Badge } from "../ui/badge";
import Container from "../Container/Container";
import Lottie from "lottie-react";
import { motion } from "motion/react";

const lottieVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const badgeCardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.28 },
  },
};

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
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-60px" }}
            variants={lottieVariants}
          >
            <div className="rounded-lg">
              <Lottie
                animationData={animation}
                loop
                style={{ width: 350, height: 350, background: "none" }}
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-60px" }}
          >
            <motion.div variants={headingVariants}>
              <Heading
                subHeading="Global Regulatory Compliance & Advocacy"
                heading="BITSS - Pioneering Crypto Security Regulation Worldwide"
                text="The crypto industry is evolving fast. Regulations are arriving, and securing your assets is no longer optional."
                headingClassName=""
              />
            </motion.div>

            <div>
              <motion.p
                className="text-gray-600 mb-6"
                variants={paragraphVariants}
              >
                BITSS is pioneering regulated relations around the
                world—actively engaging with framework compliance across the
                United States, Singapore, Hong Kong, and worldwide. We are busy
                building direct communication with global regulators to ensure
                your Web3 projects stay ahead of security demands.
              </motion.p>

              <motion.div
                className="bg-white p-4 rounded-lg w-fit"
                variants={badgeCardVariants}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 32px -8px hsl(var(--primary) / 0.15)",
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

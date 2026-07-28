"use client";
import Image from "next/image";
import Container from "../Container/Container";
import { motion } from "motion/react";
import img from "../../../public/built_on_trust2.png";

const items = [
  "BITSS Crypto Audit Division",
  "BITSS Server Security (BITSS WAP & BITSS VWAR)",
  "BITSS Device Security",
  "BITSS Compliance Advisory",
];

// ── Shared variants (same system across all home sections) ───────────────────
const imageVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

const subheadingVariants = {
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

const divisionWrapVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const divisionItemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.4,
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  }),
};

export default function BuiltOnTrust() {
  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={imageVariants}
          >
            <Image
              src={img.src}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={subheadingVariants}>
              <p className="text-primary/50 text-sm font-medium tracking-widest">
                Built on Research. Trusted Through Results.
              </p>
              <h2 className="font-heading font-medium text-2xl md:text-4xl lg:text-5xl leading-7 md:leading-10 lg:leading-15 mt-2">
                Trusted by BITSS In-Depth Research and Development
              </h2>
            </motion.div>

            <motion.p
              className="text-lg tracking-wide text-gray-600 mt-8 text-left"
              variants={paragraphVariants}
            >
              BITSS is not backed by external investors. We are completely
              self-funded, self-built, and focused entirely on delivering real
              security—not investor returns.
              <br />
              <br />
              Our expertise comes from in-depth research and development into
              cyber security, crypto security, and crypto auditing. Our products
              are live. Our audits are real. Our findings have uncovered
              security issues that others missed.
            </motion.p>

            <motion.h3
              className="text-xl font-medium mt-8 tracking-wider lg:tracking-widest text-left"
              variants={paragraphVariants}
            >
              Active Divisions & Ecosystem Status:
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-5"
              variants={divisionWrapVariants}
            >
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={divisionItemVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 32px -8px hsl(var(--primary) / 0.15)",
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className="bg-[#F8FAFC] px-2 lg:px-5 py-2 rounded-lg flex items-center gap-5 h-15 cursor-default"
                >
                  <motion.span
                    custom={i}
                    variants={numberVariants}
                    className="size-7 flex items-center justify-center rounded-full bg-white text-primary text-sm font-medium shrink-0"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <span className="font-medium text-xs lg:text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

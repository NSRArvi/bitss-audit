"use client";

import Container from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/orders", label: "Account" },
];
const companyLinks = [
  { href: "/blogs", label: "Blogs" },
  { href: "/insights/about-us", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];
const mediaLinks = [
  { icon: FaSquareXTwitter, href: "/" },
  { icon: FaInstagramSquare, href: "/" },
  { icon: FaFacebookF, href: "/" },
  { icon: FaYoutubeSquare, href: "/" },
  { icon: FaLinkedin, href: "/" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,

    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,

    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const staggerLink = (delay = 0) => ({
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const iconPop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,

    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer className="py-20 border-t border-white/5 bg-[#F8FAFC]" ref={ref}>
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Brand column */}
          <motion.div
            className="w-full"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeLeft(0)}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/image.png"
                alt="Nav Logo"
                width={50}
                height={50}
                className="-mt-1"
              />
              <span className="flex flex-col justify-center bg-linear-to-r from-[#0818A8] to-[#1E88E5] bg-clip-text text-transparent leading-tight">
                <h2 className="font-bold text-[27px] mt-1">BITSS</h2>
                <p className="mb-2.5 -mt-0.5 text-[9px]">CRYPTO SECURITY</p>
              </span>
            </Link>
            <motion.p
              className="text-[#6E758C] w-full mt-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp(0.15)}
            >
              Providing industry-leading, high-fidelity security audits and
              smart contract verification worldwide.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <div className="w-full">
            <motion.h2
              className="font-bold tracking-widest mb-2 lg:mb-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp(0.2)}
            >
              Quick Links
            </motion.h2>
            <div className="flex flex-col space-y-3">
              {quickLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={staggerLink(0.28 + i * 0.08)}
                >
                  <Link
                    href={link.href}
                    className="hover:text-primary hover:underline text-[#6E758C] transition duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="w-full">
            <motion.h2
              className="font-bold tracking-widest mb-2 lg:mb-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp(0.3)}
            >
              Company
            </motion.h2>
            <div className="flex flex-col space-y-3">
              {companyLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={staggerLink(0.38 + i * 0.07)}
                >
                  <Link
                    href={link.href}
                    className="hover:text-primary hover:underline text-[#6E758C] transition duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="w-full flex lg:justify-end">
            <div>
              <motion.h2
                className="font-bold tracking-widest mb-2 lg:mb-6 w-full"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp(0.4)}
              >
                Social Media
              </motion.h2>
              <div className="flex flex-col lg:flex-row gap-3">
                {mediaLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={i}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={iconPop(0.5 + i * 0.07)}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.93 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 18,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="bg-white size-12 flex items-center justify-center rounded-lg"
                      >
                        <Icon size={24} className="text-[#6E758C]" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import Container from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaFacebookSquare,
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
  // { href: "/our-mission", label: "Our Mission" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];
const mediaLinks = [
  { icon: FaSquareXTwitter, href: "/", label: "" },
  { icon: FaInstagramSquare, href: "/", label: "" },
  { icon: FaFacebookF, href: "/", label: "" },
  { icon: FaYoutubeSquare, href: "/", label: "" },
  { icon: FaLinkedin, href: "/", label: "" },
];

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 font-inter bg-[#F8FAFC]">
      <Container>
        <div className="flex flex-col lg:flex-row  gap-12 justify-between">
          <div className="w-full">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/image.png"}
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
            <p className="text-[#6E758C] w-full mt-6">
              Providing industry-leading, high-fidelity security audits and
              smart contract verification worldwide.
            </p>
          </div>
          <div className="w-full">
            <h2 className="font-bold tracking-widest mb-2 lg:mb-6">
              Quick Links
            </h2>
            <div className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link?.href}
                  className="hover:text-primary hover:underline text-[#6E758C] transition duration-300"
                >
                  {link?.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-bold tracking-widest mb-2 lg:mb-6">Company</h2>
            <div className="flex flex-col space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary hover:underline text-[#6E758C] transition duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full flex lg:justify-end">
            <div>
              <h2 className="font-bold tracking-widest mb-2 lg:mb-6 w-full">
                Social Media
              </h2>
              <div className="flex flex-col lg:flex-row gap-3">
                {mediaLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={i}
                      href={link.href}
                      className="bg-white size-12 flex items-center justify-center rounded-lg "
                    >
                      <Icon size={24} stroke="#6E758C" className="" />
                    </Link>
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

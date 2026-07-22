import Container from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/expert-crypto-security-audit", label: "Service" },
  { href: "/orders", label: "Account" },
];
const companyLinks = [
  { href: "/blogs", label: "Blogs" },
  { href: "/our-mission", label: "Our Mission" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms & Conditions" },
];
const mediaLinks = [
  { icon: FaSquareXTwitter, href: "/", label: "" },
  { icon: FaInstagramSquare, href: "/", label: "" },
  { icon: FaFacebookSquare, href: "/", label: "" },
  { icon: FaYoutubeSquare, href: "/", label: "" },
  { icon: FaLinkedin, href: "/", label: "" },
];

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 font-inter bg-[#F9F9F9]">
      <Container>
        <div className="flex flex-col lg:flex-row  justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/image.png"}
                alt="Nav Logo"
                width={50}
                height={50}
                className="-mt-1"
              />
              <span className="flex flex-col justify-center bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent leading-tight">
                <h2 className="font-bold text-[27px] mt-1">BITSS</h2>
                <p className="mb-2.5 -mt-0.5 text-[9px]">CRYPTO SECURITY</p>
              </span>
            </Link>
          </div>
          <div>
            <h2 className="font-medium mb-6">Quick Links</h2>
            <div className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link?.href}
                  className="hover:text-primary hover:underline transition duration-300"
                >
                  {link?.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-6">Company</h2>
            <div className="flex flex-col space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary hover:underline transition duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-6">Social Media</h2>
            <div className="flex flex-col gap-3">
              {mediaLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={i}
                    href={link.href}
                    className="hover:text-primary hover:underline transition duration-300"
                  >
                    <Icon size={24} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import Container from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTelegramPlane,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";

const Footer = () => {
  return (
    // <footer className="font-heading py-10 border-t border-white/5 space-y-4 pl-5 md:pl-0">
    //   <p className=" text-xs text-gray-800 dark:text-gray-400 font-medium max-w-xl md:mx-auto md:text-center uppercase tracking-widest w-full text-center">
    //     BITSS is a cybersecurity and digital infrastructure security brand
    //     operated by BFIN SASU.
    //   </p>
    //   <div className="flex flex-row justify-center gap-4 text-sm text-gray-800 dark:text-gray-400 font-medium">
    //     <a href="#" className="hover:text-blue-500 transition-colors">
    //       Bitss Crypto Security
    //     </a>
    //     <span className="text-white/10">|</span>
    //     <Link href="/contact" className="hover:text-blue-500 transition-colors">
    //       Contact
    //     </Link>
    //     <span className="text-white/10">|</span>
    //     <a
    //       href="https://bitss.one"
    //       target="_"
    //       className="hover:text-blue-500 transition-colors"
    //     >
    //       bitss.one
    //     </a>
    //     <span className="text-white/10">|</span>
    //     <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
    //   </div>
    // </footer>
    <footer className="py-20 border-t border-white/5 font-inter bg-[#F9F9F9]">
      <Container>
        <div className="flex flex-col lg:flex-row  justify-around">
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
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                services
              </Link>
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                Order
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-6">Company</h2>
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                // className="hover:text-primary hover:underline transition duration-300"
                className="hover:text-primary hover:underline transition duration-300"
              >
                Blogs
              </Link>
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                Our Mission
              </Link>
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-6">Social Media</h2>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                <FaSquareXTwitter size={24} />
              </Link>
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                <FaInstagramSquare size={24} />
              </Link>
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                <FaFacebookSquare size={24} />
              </Link>
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                <FaYoutubeSquare size={24} />
              </Link>
              <Link
                href="/"
                className="hover:text-primary hover:underline transition duration-300"
              >
                <FaLinkedin size={24} />
              </Link>
              {/* <Link href="/">
                <FaTelegramPlane size={24} />
              </Link>
              <Link href="/">
                <IoLogoWechat size={24} />
              </Link>
              <Link href="/">
                <FaDiscord size={24} />
              </Link> */}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

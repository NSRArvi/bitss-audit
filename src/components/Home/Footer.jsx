import React from "react";

const Footer = () => {
  return (
    <section className="mt-10 py-6 border-t border-white/5 space-y-4 pl-5 md:pl-0">
      <p className="text-xs text-muted-foreground/60 max-w-xl md:mx-auto md:text-center uppercase tracking-widest w-1/2 md:w-full ">
        BITSS is a cybersecurity and digital infrastructure security brand
        operated by BFIN SASU.
      </p>
      <div className="flex flex-col md:flex-row justify-center md:gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-blue-500 transition-colors">
          Bitss Crypto Security
        </a>
        <span className="text-white/10">|</span>
        <a
          href="mailto:contact@bitss.one"
          className="hover:text-blue-500 transition-colors">
          contact@bitss.one
        </a>
        <span className="text-white/10">|</span>
        <a href="#" className="hover:text-blue-500 transition-colors">
          bitss.one
        </a>
      </div>
    </section>
  );
};

export default Footer;

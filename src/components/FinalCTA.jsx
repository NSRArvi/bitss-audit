"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";
export const FinalCTA = ({ text1, text2, text3, text4, text5, btnWidth }) => {
  return (
    <section className="relative overflow-hidden px-6 text-center pb-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-heading w-full text-[40px] font-bold tracking-tight text-foreground leading-tight">
          {text1}
          <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
            {text2}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-base leading-tight">
          {text3}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-4">
          <Link
            href={"/audit-form"}
            className="text-white w-5/6 md:w-fit px-6 py-2.5 rounded-lg bg-primary/80 hover:bg-primary hover:transition-all duration-300 flex justify-center">
            {text4}
          </Link>
          <Link
            href={"/contact"}
            className="bg-transparent w-5/6 md:w-fit hover:text-white px-6 py-2.5 cursor-pointer hover:bg-primary hover:border-primary border border-primary  rounded-lg hover:transition-all duration-300 flex justify-center">
            {text5}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

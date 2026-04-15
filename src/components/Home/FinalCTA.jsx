"use client";
import { motion } from "motion/react";
import Link from "next/link";
export const FinalCTA = ({ text1, text2, text3, text4, text5 }) => {
  return (
    <section className="relative overflow-hidden px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {text1}
          <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
            {text2}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg leading-relaxed">
          {text3}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="py-3 rounded-md text-white font-semibold bg-primary cursor-pointer w-55">
            {text4}
          </Link>
          <Link
            href="/"
            className="py-3 rounded-md border border-primary dark:text-white hover:text-white dark:hover:text-black font-semibold hover:bg-primary transition duration-500 cursor-pointer w-55">
            {text5}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

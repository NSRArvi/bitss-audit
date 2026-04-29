"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { OUR_SECURITY_PROCESS } from "@/data/what_we_secure_data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const OurSecurityProcess = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">
          Our Security Process
        </p>
        <h1 className="text-2xl md:text-4xl font-heading font-bold mt-2">
          Our Proven Audit & Protection Process
        </h1>
        <span className="w-10 h-0.5 mt-4 bg-primary block text-center mx-auto"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
        {OUR_SECURITY_PROCESS.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative">
            {index < OUR_SECURITY_PROCESS.length - 1 && (
              <div className="hidden lg:flex absolute top-8 left-[70%] w-[60%] items-center z-0">
                <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-gray-700" />
                <ChevronRight className="text-gray-400 -ml-2" />
              </div>
            )}

            {/* Card */}
            <Card className="relative overflow-visible bg-white/80 dark:bg-white/5 backdrop-blur-md border-gray-200 dark:border-white/10 pt-10 pb-6 px-6 h-full">
              <div className="absolute -top-8 shadow-sm left-1/2 -translate-x-1/2 p-3 rounded-full  overflow-visible">
                {/* <step.icon size={24} /> */}
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={50}
                  height={50}
                />
              </div>

              <CardContent className="text-center p-0 pt-4">
                <div className="text-primary font-bold text-xl mb-2">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-3 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurSecurityProcess;

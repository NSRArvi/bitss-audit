"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "../Container/Container";
import { OrderModal } from "../OrderModal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const headlineWords = ["Most", "Secured", "Blockchain"];
const headlineAccent = ["Security", "Auditor"];

export default function HeroBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <div className="relative overflow-hidden bg-white" ref={ref}>
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
        }}
      />

      <OrderModal
        open={open}
        setOpen={setOpen}
        onClose={() => setOpen(false)}
      />

      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10 lg:py-20 relative z-10">
          <div className="space-y-5 w-full lg:w-1/2 text-center">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
                },
              }}
            >
              <Badge
                className="text-primary px-4 py-2.5 text-lg h-10"
                variant="secondary"
              >
                Elevate Your Web3 Journey
              </Badge>
            </motion.div>

            <motion.h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-[1.1] font-heading font-black">
              <span className="block">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 40 }}
                    animate={controls}
                    variants={{
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.25 + i * 0.1,
                        },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>

              <span className="block text-primary">
                {headlineAccent.map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 40 }}
                    animate={controls}
                    variants={{
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.45 + i * 0.1,
                        },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mx-auto text-center"
              custom={0.7}
              initial="hidden"
              animate={controls}
              variants={fadeUp}
            >
              BITSS is a dedicated Web3 security platform combining in-depth
              crypto auditing, server protection, and device security — built to
              keep your project safe from day one.
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-4 mt-10"
              custom={0.85}
              initial="hidden"
              animate={controls}
              variants={fadeUp}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <Button
                  onClick={() => setOpen(true)}
                  className="bg-primary hover:bg-primary flex items-center gap-1 px-6 lg:px-10 h-12 cursor-pointer text-white"
                >
                  Talk to an expert
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}

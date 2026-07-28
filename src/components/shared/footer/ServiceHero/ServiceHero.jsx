import Container from "@/components/Container/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ServiceHero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10 lg:py-20 relative z-10">
          <div className="space-y-5 w-full lg:w-1/2 text-center">
            <Badge
              className="text-primary px-4 py-2.5 text-lg h-10"
              variant="secondary"
            >
              Elevate Your Web3 Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-24 font-heading font-black">
              Largest Blockchain{" "}
              <span className="text-primary">Security Auditor</span>
            </h2>
            <p className="text-lg text-muted-foreground w-full lg:w-2/3 mx-auto text-center">
              Bitss is the largest Web3 security platform combining formal
              verification with audits and comprehensive security solutions.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <Button
                onClick={() => setOpen(true)}
                className="bg-primary hover:bg-primary flex items-center gap-1 px-6 lg:px-10 h-12 cursor-pointer text-white"
              >
                Talk to an expert
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

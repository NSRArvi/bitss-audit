"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Container from "@/components/Container/Container";

const AuditForm = () => {
  const [blockchain, setBlockchain] = useState("");
  const [auditType, setAuditType] = useState("");
  const [project, setProject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-primary">
              Security Audit
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-black tracking-tight text-slate-900 dark:text-white">
            Request Your{" "}
            <span className="bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
              Crypto Audit
            </span>
          </h1>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Submit your project for a full smart contract security review.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 w-full max-w-5xl rounded-2xl border bg-white/5 border-slate-200 dark:bg-white/4 dark:backdrop-blur-md dark:border-white/4"
        >
          {/* Top accent line */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent" />

          <form onSubmit={handleSubmit} className="p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Project Name
                </Label>
                <Input
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  required
                  placeholder="e.g. SolanaFi Protocol"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Website
                </Label>
                <Input
                  required
                  placeholder="https://yourproject.xyz"
                  type="url"
                />
              </div>

              <div className="flex w-full flex-col gap-1.5">
                <Label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Blockchain
                </Label>
                <Select
                  value={blockchain}
                  onValueChange={setBlockchain}
                  className="w-full"
                >
                  <SelectTrigger className={"w-full"}>
                    <SelectValue placeholder="Select chain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solana">Solana</SelectItem>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex w-full flex-col gap-1.5">
                <Label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Audit Type
                </Label>
                <Select value={auditType} onValueChange={setAuditType}>
                  <SelectTrigger className={"w-full"}>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Audit</SelectItem>
                    <SelectItem value="quick">Quick Review</SelectItem>
                    <SelectItem value="gas">Gas Optimization</SelectItem>
                    <SelectItem value="reentrancy">Reentrancy Check</SelectItem>
                    <SelectItem value="custom">Custom Scope</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  GitHub Link
                </Label>
                <Input required placeholder="github.com/your/repo" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Smart Contract Address
                </Label>
                <Input
                  required
                  placeholder="0x... or program ID"
                  className="font-mono text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Email
                </Label>
                <Input required placeholder="you@example.com" type="email" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Telegram
                </Label>
                <Input placeholder="@yourhandle" />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Description
                </Label>
                <Textarea
                  required
                  placeholder="Describe your project and any specific concerns you'd like us to focus on…"
                  rows={4}
                  className="resize-none"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="w-full flex-1 h-11 py-3 font-semibold text-sm rounded-xl bg-primary/80 hover:bg-primary text-white cursor-pointer">
                  Submit Audit Request
                </Button>

                <a href="tel:+8801537436599" className="block w-full flex-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full flex-1 h-11 font-semibold text-sm rounded-xl dark:border-white/10 dark:text-white/80 dark:hover:bg-white/5"
                  >
                    Request Call
                  </Button>
                </a>
              </div>
            </div>
          </form>

          {/* Bottom accent line */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </motion.div>

        <p className="relative z-10 mt-6 text-xs text-slate-400 dark:text-slate-600 text-center">
          All submissions are confidential · Response within 24 hours
        </p>
      </section>
    </Container>
  );
};

export default AuditForm;

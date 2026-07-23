"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUserIcon, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navItems } from "@/data/navItems";
import TopNav from "./TopNav";
import { useAuth } from "@/hooks/useAuth";

export default function MobileMenu({ onOpenDialog }) {
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div>
      <div className="lg:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <div className="flex items-center flex-row gap-2">
            <Link href={user?.token ? "/orders" : "/register"}>
              <CircleUserIcon stroke="#6E758C" opacity={50} size={28} />
            </Link>
            <TopNav />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="w-full sm:w-95 overflow-y-auto">
            <SheetHeader>
              <Link
                href="/"
                className="flex justify-start items-center gap-1.5"
              >
                <Image
                  src={"/image.png"}
                  alt="Nav Logo"
                  width={37}
                  height={37}
                  className="-mt-3"
                />
                <span className="flex flex-col justify-center bg-linear-to-r from-[#0818A8] to-[#1E88E5] bg-clip-text text-transparent leading-tight">
                  <h2 className="font-bold text-[27px] mt-1">BITSS</h2>
                  <p className="mb-2.5 -mt-0.5 text-[9px]">CRYPTO SECURITY</p>
                </span>
              </Link>
            </SheetHeader>

            <nav className="mt-6 px-4 flex flex-col">
              <Accordion type="single" collapsible className="w-full">
                {navItems.map((nav) =>
                  nav.items ? (
                    <AccordionItem key={nav.label} value={nav.label}>
                      <AccordionTrigger className="text-sm font-medium hover:no-underline">
                        {nav.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        {nav.label === "Blockchains" ? (
                          <div className="flex flex-col gap-4 pl-2">
                            {nav.items.map((group) => (
                              <div key={group.title}>
                                <p className="px-2 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                  {group.title}
                                </p>
                                <ul className="flex flex-col gap-1">
                                  {group.chains.map((chain) => (
                                    <li key={chain.name}>
                                      <Link
                                        href={chain.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                      >
                                        <Image
                                          src={chain.icon}
                                          alt={chain.name}
                                          width={16}
                                          height={16}
                                          className="shrink-0"
                                        />
                                        <span>{chain.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="flex flex-col gap-1 pl-2">
                            {nav.items.map((item, i) => (
                              <li key={i}>
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <div
                      key={nav.label}
                      className="flex items-center border-b py-4"
                    >
                      <Link
                        href={nav.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm font-medium"
                      >
                        {nav.label}
                      </Link>
                    </div>
                  ),
                )}
              </Accordion>

              <div className="flex flex-col">
                <Button
                  onClick={onOpenDialog}
                  className="bg-primary/90 hover:bg-primary text-white text-sm font-semibold cursor-pointer"
                >
                  Request a Quote
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

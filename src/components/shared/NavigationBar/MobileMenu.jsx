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
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navItems } from "@/data/navItems";
import TopNav from "./TopNav";

export default function MobileMenu({ onOpenDialog }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div>
      <div className="lg:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <div className="flex flex-row gap-2">
            <TopNav />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="w-full sm:w-95 overflow-y-auto">
            <SheetHeader>
              <Link href="/" className="flex items-center gap-1.5">
                <Image
                  src={"/image.png"}
                  alt="Nav Logo"
                  width={37}
                  height={37}
                  className="mx-auto -mt-3"
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
                        <ul className="flex flex-col gap-1 pl-2">
                          {nav.items.map((item) => (
                            <li key={item.href}>
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Container from "./Container/Container";
import ListItem from "./NabvarMenuItem/ListItem";
import MobileDropdown from "./NabvarMenuItem/MobileDropdown";
import ModeToggle from "./ModeToggle";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  {
    type: "dropdown",
    label: "Services",
    items: [
      {
        label: "Services1",
        href: "/audit-services",
      },
      { label: "Services2", href: "/" },
      { label: "Services3", href: "/" },
    ],
    width: "w-60",
  },

  {
    type: "dropdown",
    label: "Process",
    items: [
      {
        label: "Process1",
        href: "/",
      },
      { label: "Process2", href: "/" },
      { label: "Process3", href: "/" },
    ],
    width: "w-60",
  },
  {
    type: "dropdown",
    label: "AutoAudit",
    items: [
      {
        label: "AutoAudit1",
        href: "/",
      },
      { label: "AutoAudit2", href: "/" },
      { label: "AutoAudit3", href: "/" },
    ],
    width: "w-60",
  },
  {
    type: "dropdown",
    label: "About",
    items: [
      {
        label: "About1",
        href: "/",
      },
      { label: "About2", href: "/" },
      { label: "About3", href: "/" },
    ],
    width: "w-60",
  },
  {
    type: "link",
    label: "Request Review",
    href: "/",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h2 className="font-bold text-xl md:text-2xl text-primary">
              BITSS
            </h2>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-0 py-3">
              {navItems.map((item, i) => (
                <NavigationMenuItem key={i}>
                  {item.type === "link" ? (
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-background/5 dark:bg-slate-950/5 backdrop-blur-3xl shadow-sm">
                        <ul className={`${item.width} p-4 gap-2 `}>
                          {item.items.map((sub, idx) => (
                            <ListItem key={idx} href={sub.href}>
                              {sub.label}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <ModeToggle />
          </NavigationMenu>
          <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden fixed top-8 right-0 h-screen w-[85%] max-w-sm border-l z-50 shadow-lg overflow-y-auto">
              <div className="flex flex-col gap-4 px-2 py-4 h-full bg-background dark:bg-slate-950/95 backdrop-blur-2xl shadow-md">
                {navItems.map((item, i) =>
                  item.type === "link" ? (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setShowMenu(false)}>
                      {item.label}
                    </Link>
                  ) : (
                    <MobileDropdown
                      key={i}
                      title={item.label}
                      openDropdown={openDropdown}
                      setOpenDropdown={setOpenDropdown}>
                      {item.items.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={() => setShowMenu(false)}>
                          {sub.label}
                        </Link>
                      ))}
                    </MobileDropdown>
                  ),
                )}
                <div className="pt-4">
                  <ModeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default Navbar;

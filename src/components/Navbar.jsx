"use client";

import { useRef, useState } from "react";
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
import Image from "next/image";
import useCloseMenu from "@/hooks/useCloseMenu";

const navItems = [
  {
    type: "link",
    label: "Home",
    href: "/",
  },
  ,
  {
    type: "dropdown",
    label: "Services",
    items: [
      {
        label: "Advanced Security Audits",
        href: "/advanced-security-audits",
      },
      {
        label: "Expert Crypto Security Audit",
        href: "/expert-crypto-security-audit",
      },
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
  const menuRef = useRef(null);

  useCloseMenu({
    isShow: showMenu,
    onClose: () => setShowMenu(false),
    menuRef,
  });
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={"/image.png"}
              alt="Nav Logo"
              width={37}
              height={37}
              className="mx-auto -mt-0.5"
            />
            <span className="flex flex-col justify-center bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent leading-tight">
              <h2 className="font-bold text-[27px] mt-1">BITSS</h2>
              <p className="mb-2.5 -mt-0.5 text-[9px]">CRYPTO SECURITY</p>
            </span>
          </Link>
          <NavigationMenu className="hidden md:flex font-medium">
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
                      <NavigationMenuContent className="bg-background/5 dark:bg-slate-950/5 backdrop-blur-3xl shadow-sm font-medium">
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
            {showMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 w-full top-14 bg-black/60 h-[calc(100vh-0px)]">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                ref={menuRef}
                className="md:hidden fixed  right-0 h-screen w-[80%] max-w-sm border-l z-50 shadow-lg overflow-y-auto">
                <div className="flex flex-col gap-4 px-8 py-4 h-full bg-background dark:bg-slate-950/95 backdrop-blur-2xl shadow-md">
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
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default Navbar;

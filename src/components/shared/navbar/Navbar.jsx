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
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import useCloseMenu from "@/hooks/useCloseMenu";
import { useRouter } from "next/navigation";
import Container from "@/components/Container/Container";
import ModeToggle from "@/components/ModeToggle";
import ListItem from "./NabvarMenuItem/ListItem";
import MobileDropdown from "./NabvarMenuItem/MobileDropdown";

const navItems = [
  {
    type: "link",
    label: "Home",
    href: "/",
  },
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
    ],
    width: "w-50",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);
  const navigate = useRouter();

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
                <NavigationMenuItem key={i} className={"hover:text-primary"}>
                  {item.type === "link" ? (
                    <NavigationMenuLink
                      asChild
                      className={"hover:bg-transparent"}>
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="hover:bg-transparent">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="font-medium ">
                        <ul className={`${item.width} gap-2 `}>
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
            <button
              onClick={() => navigate.push("/contact")}
              className="w-full mx-4 flex items-center justify-center gap-2.5 py-2 px-4 rounded-lg bg-primary/80 hover:bg-primary text-white text-[14px] font-semibold text-sm cursor-pointer">
              Contact Us
            </button>
            <div className="ml-4">
              <ModeToggle />
            </div>
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

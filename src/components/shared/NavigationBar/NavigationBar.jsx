"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container/Container";
import MobileMenu from "./MobileMenu";
import { navItems } from "@/data/navItems";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/lib/base_url";
import SolutionsMenu from "./SolutionsMenu";
import TopNav from "./TopNav";
import { useAuth } from "@/hooks/useAuth";
import { ArrowRight, CircleUserIcon } from "lucide-react";

export default function NavigationBar({ onOpenDialog }) {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/public/package/list`);
        const data = await res.json();
        if (data.success) {
          setProducts(data?.data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    loadProducts();
  }, []);

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container>
        <div className="mx-auto flex h-16 items-center justify-between">
          {/* Logo */}
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

          {/* Desktop nav */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((nav, navIndex) =>
                  nav.items ? (
                    <NavigationMenuItem key={nav.label}>
                      <NavigationMenuTrigger className="text-sm font-medium">
                        {nav.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {nav.label === "Solutions" ? (
                          <SolutionsMenu products={products} />
                        ) : nav.label === "Blockchains" ? (
                          <div className="w-140 p-4 grid grid-cols-2 gap-6">
                            {nav.items.map((group) => (
                              <div key={group.title}>
                                <p className="px-2 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                  {group.title}
                                </p>
                                <ul className="flex flex-col gap-1">
                                  {group.chains.map((chain) => (
                                    <li key={chain.name}>
                                      <NavigationMenuLink asChild>
                                        <span
                                          // href={chain.href}
                                          className="flex items-center gap-2 rounded-md px-2 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                        >
                                          <Image
                                            src={chain.icon}
                                            alt={chain.name}
                                            width={18}
                                            height={18}
                                            className="shrink-0 size-6"
                                          />
                                          <span className="flex items-center gap-2">
                                            {chain.name}
                                          </span>
                                        </span>
                                      </NavigationMenuLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul
                            className={` gap-2 p-4 ${
                              navIndex === 1
                                ? "flex flex-row justify-between gap-2 w-150"
                                : navIndex === 2
                                  ? "w-150"
                                  : nav.items.length > 3
                                    ? "w-130 grid grid-cols-2"
                                    : "w-95 grid grid-cols-1"
                            }`}
                          >
                            {nav.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={item?.href && item.href}
                                    className={`select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground flex flex-col items-start ${navIndex === 2 ? "flex flex-row justify-between gap-2" : ""}`}
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {item.title}
                                    </div>
                                    {item.description && (
                                      <p className="mt-1.5 line-clamp-2 text-xs leading-snug text-muted-foreground flex flex-col">
                                        {navIndex === 2
                                          ? Array.isArray(item?.description) &&
                                            item.description.map((crypto) => (
                                              <span key={crypto}>{crypto}</span>
                                            ))
                                          : item.description}
                                        {/* {item.description} */}
                                      </p>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={nav.label}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={nav.href}
                          className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {nav.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Demo Button */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href={user?.token ? "/orders" : "/register"}>
              <CircleUserIcon stroke="#6E758C" opacity={50} size={28} />
            </Link>

            <TopNav />
            <Button
              onClick={onOpenDialog}
              className="w-full sm:w-40 flex items-center justify-center gap-2.5 py-2 px-4 rounded-sm bg-primary/80 hover:bg-primary text-white text-sm font-semibold cursor-pointer transition-all duration-300"
            >
              Request a Quote
            </Button>
          </div>
          <MobileMenu onOpenDialog={onOpenDialog} />
        </div>
      </Container>
    </header>
  );
}

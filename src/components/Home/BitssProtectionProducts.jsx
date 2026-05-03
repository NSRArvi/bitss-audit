import React from "react";
import { BITSS_PROTECTION_PRODUCTS } from "@/data/what_we_secure_data";
import Link from "next/link";

const BitssProtectionProducts = () => {
  return (
    <section className="py-10">
      <div className="text-center mb-4">
        <p className="text-primary text-sm font-semibold">
          BITSS PROTECTION PRODUCTS
        </p>
        <h1 className="text-2xl md:text-4xl font-heading font-bold dark:text-white">
          {" "}
          Our Core Protection Systems
        </h1>
        <span className="w-10 h-0.5 mt-4 bg-primary block text-center mx-auto"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {BITSS_PROTECTION_PRODUCTS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="px-3 py-8 rounded-2xl shadow-xs text-center border flex flex-col h-full bg-(--card-bg) border-(--card-border) dark:bg-white/5 dark:backdrop-blur-md dark:border-white/10 transition-colors duration-300"
              style={{
                "--card-bg": item.theme.bg,
                "--card-border": item.theme.border,
              }}>
              <span
                className="mx-auto block"
                style={{ color: item.theme.color }}>
                <Icon size={42} className="mx-auto" />
              </span>

              <h3 className="text-sm font-bold pt-4 pb-1 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.subTitle}</p>

              <ul className="space-y-2 pt-6">
                {item.body.map((list, i) => (
                  <li
                    key={i}
                    className="text-start text-muted-foreground flex items-center gap-2 text-sm">
                    <span
                      className="min-w-4 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px]"
                      style={{ backgroundColor: item.theme.color }}>
                      ✓
                    </span>
                    {list}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex justify-center">
                <Link
                  href={item?.href}
                  target="_blank"
                  className="block w-fit mt-6 px-6 py-2 text-sm rounded-lg border font-medium transition hover:opacity-80 bg-white dark:bg-transparent dark:hover:bg-white/5"
                  style={{
                    color: item.theme.color,
                    borderColor: item.theme.border,
                  }}>
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BitssProtectionProducts;

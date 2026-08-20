"use client";

import { BASE_URL } from "@/lib/base_url";
import { useEffect, useState } from "react";

export default function ServiceDetailsSidebar({ slug }) {
  const [packageData, setPackageData] = useState({});
  useEffect(() => {
    try {
      const loadPackageData = async (slug) => {
        const res = await fetch(`${BASE_URL}/public/package/${slug}`);
        const data = await res.json();
        if (!res.ok) {
          throw data;
        }
        setPackageData(data?.data);
      };
      if (slug) {
        loadPackageData(slug);
      }
    } catch (error) {
      console.log(error);
    }
  }, [slug]);
  return (
    <div>
      <section className="pt-1">
        {/* Order */}
        <div>
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-widest text-slate-400">
            Your Order
          </p>

          <h1 className="max-w-sm text-[23px] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-[26px]">
            {slug}
          </h1>

          <p className="mt-2 max-w-xs text-[11px] leading-4 text-slate-500">
            {/* {ordersData.description} */}
          </p>

          {/* Status */}
          <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[9px] font-medium text-amber-600 ring-1 ring-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Awaiting payment
          </div>
        </div>

        <div className="my-7 h-px bg-slate-200" />

        {packageData && packageData?.items && (
          <>
            <ul
              className={`mt-2 px-4 py-3 rounded-lg flex flex-col gap-1.5 bg-muted shadow-xs ${packageData?.items.length > 3 ? "grid grid-cols-2" : "grid grid-cols-1"}`}
            >
              {packageData?.items?.map((group, j) => {
                return (
                  <li key={j} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {group.title}
                    </span>
                    <ul className="flex flex-col gap-1 ml-2">
                      {group.items.map((item, k) => (
                        <li
                          key={k}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>

            {packageData?.name === "Standard Audit" && (
              <>
                <ul className="mt-2 px-4 py-3 bg-muted shadow-xs rounded-lg flex flex-col gap-1.5">
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    Pay Using USFRANC & SPUMP they also get 15% Discount for All
                    Package
                  </li>
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    Pay Using USDC they also get 5% Discount for All Package
                  </li>
                </ul>
                <ul className="mt-2 px-4 py-3 bg-muted shadow-xs rounded-lg flex flex-col gap-1.5">
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    30% in advance and 70% Before Delivery
                  </li>
                </ul>
              </>
            )}
            {packageData?.name === "Advanced Audit" && (
              <>
                <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    For BITSS User Flat 30% applicable for Advance & Premium
                    Package
                  </li>
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    Pay Using USFRANC & SPUMP they also get 15% Discount for All
                    Package
                  </li>
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    Pay Using USDC they also get 5% Discount for All Package
                  </li>
                </ul>
                <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    30% in advance and 70% Before Delivery
                  </li>
                </ul>
              </>
            )}
            {packageData?.name === "Enterprise Audit" && (
              <>
                <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    For BITSS User Flat 30% applicable for Advance & Premium
                    Package
                  </li>
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    Pay Using USFRANC & SPUMP they also get 15% Discount for All
                    Package
                  </li>
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    Pay Using USDC they also get 5% Discount for All Package
                  </li>
                </ul>
                <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                  <li className="flex items-center gap-2 text-xs text-muted-foreground">
                    30% in advance and 70% Before Delivery
                  </li>
                </ul>
              </>
            )}
          </>
        )}
      </section>
    </div>
  );
}

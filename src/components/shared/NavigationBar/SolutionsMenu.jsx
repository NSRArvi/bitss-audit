"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Spinner } from "@/components/ui/spinner";

export default function SolutionsMenu({ products = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!products.length) {
    return (
      <div className="w-95 p-4 text-xs text-muted-foreground">
        <Spinner />
      </div>
    );
  }

  const active = products[activeIndex];
  const sections = active?.item_sections || [];

  return (
    <div className="w-140 p-4">
      {/* Tabs */}
      <div className="flex gap-2 mb-4 border-b pb-2">
        {products.map((p, idx) => (
          <button
            key={p._id || p.slug}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
              idx === activeIndex
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent/50"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="flex items-baseline justify-between mb-3">
        <span className="text-sm font-semibold">{active?.name}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {sections.map((group, i) => (
          <div key={i}>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-primary mb-1">
              {group?.title}
            </div>
            <ul className="space-y-1">
              {(group.items || []).slice(0, 3).map((item, j) => (
                <li key={j} className="text-xs text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
            {(group.items?.length || 0) > 3 && (
              <div className="text-[11px] text-muted-foreground/70 mt-0.5">
                +{group.items.length - 3} more
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end border-t pt-3">
        <NavigationMenuLink asChild>
          <Link
            href={`/order/${active?.slug}`}
            className="text-sm font-medium flex items-center gap-1 hover:underline"
          >
            View full audit scope
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </NavigationMenuLink>
      </div>
    </div>
  );
}

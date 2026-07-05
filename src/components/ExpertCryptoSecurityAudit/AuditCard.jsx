"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import CustomBadge from "../CustomBadge";

export default function AuditCard({ product, idx }) {
  const [expanded, setExpanded] = useState(false);

  const href = product.name.toLowerCase().trim().replace(" ", "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-xl border dark:border-primary/10 border-black/10 bg-white/5 dark:bg-white/5 p-6 backdrop-blur-md hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300"
    >
      <div className="relative z-10 flex flex-col">
        <h3 className="font-heading mb-5 flex flex-col justify-center font-semibold text-foreground leading-tight text-2xl md:text-3xl">
          <span>{product?.name}</span>
        </h3>

        {/* {section.badge && (
          <div className="absolute -top-6.5 -right-6">
            <CustomBadge
              text={section.badge}
              className="uppercase px-2 h-6 font-heading font-medium rounded-l-none rounded-br-none rounded-tr-xl"
            />
          </div>
        )} */}

        <div
          className={`overflow-hidden transition-all duration-500 relative ${
            expanded ? "max-h-full" : "max-h-95"
          }`}
        >
          <div className="space-y-6">
            {product?.item_sections?.map((group, i) => (
              <div key={i}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  {group?.title}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    >
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
          <Link href={`/order/${product?.slug}`}>
            <button className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
              Request Audit
            </button>
          </Link>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {expanded ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show More
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

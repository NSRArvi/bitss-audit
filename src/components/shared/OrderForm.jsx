"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Lock } from "lucide-react";
import { auditProducts } from "../../../public/product";

export default function OrderForm({ title }) {
  console.log({ title });
  const [errors, setErrors] = useState("");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const isLocked = !!title;

  function handleSelect(title) {
    setSelected(selected === title ? null : title);
    setOpen(false);
  }

  const selectedProduct = title
    ? auditProducts.find((p) => p.href === `/order/${title}`)
    : auditProducts.find((p) => p.title === selected);

  return (
    <div>
      {title && (
        <div className="mb-8 pb-6 pt-10 border-b border-black/10 dark:border-white/10">
          <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
            Your requested service
          </p>
          <h1 className="text-2xl font-semibold text-foreground">
            {selectedProduct?.title}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Review the details below and complete your audit request.
          </p>
        </div>
      )}
      <form className="space-y-6">
        {/* Project / Company name */}
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
            Project / Company Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            placeholder="Project / Company Name"
            // value={form.fullName}
            // onChange={set("fullName")}
            className={`w-full rounded-lg border ${
              errors.fullName
                ? "border-red-500"
                : "border-black/10 dark:border-white/10"
            } bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Email */}
          <div className="w-full">
            <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              // value={form.fullName}
              // onChange={set("fullName")}
              className={`w-full rounded-lg border ${
                errors.email
                  ? "border-red-500"
                  : "border-black/10 dark:border-white/10"
              } bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>
          {/* Contact Method */}
          <div className="w-full">
            <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
              Contact Method <span className="text-primary">*</span>
            </label>
            <div className="flex flex-row border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
              <Select>
                <SelectTrigger className="w-1/2 rounded-none border-0 border-r border-black/10 dark:border-white/10 ">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="wechat">We Chat</SelectItem>
                    <SelectItem value="telegram">Telegram</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <input
                type="text"
                placeholder="example@gmail.com"
                className={`w-full border-0 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                  errors.email
                    ? "ring-red-500"
                    : "border-black/10 dark:border-white/10"
                }`}
              />
            </div>

            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Full Name */}
          <div className="w-full">
            <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              // value={form.fullName}
              // onChange={set("fullName")}
              className={`w-full rounded-lg border ${
                errors.email
                  ? "border-red-500"
                  : "border-black/10 dark:border-white/10"
              } bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>
          {/* Job Title */}
          <div className="w-full">
            <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
              Job title
            </label>
            <input
              type="text"
              placeholder="Job Title"
              // value={form.fullName}
              // onChange={set("fullName")}
              className={`w-full rounded-lg border ${
                errors.email
                  ? "border-red-500"
                  : "border-black/10 dark:border-white/10"
              } bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
            Service Interest <span className="text-primary">*</span>
          </label>

          <div className="relative">
            <button
              type="button"
              onClick={() => !isLocked && setOpen(!open)}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-black/10 dark:border-white/10 bg-transparent text-sm transition-colors
            ${
              isLocked
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-muted cursor-pointer"
            }`}
            >
              <span className="text-foreground">
                {isLocked
                  ? selectedProduct?.title
                  : (selected ?? "Select a service")}
              </span>
              {isLocked ? (
                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
              ) : (
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
              )}
            </button>

            {!isLocked && open && (
              <div className="absolute z-50 w-full mt-1 rounded-lg border border-black/10 dark:border-white/10 bg-background shadow-md overflow-hidden">
                {auditProducts?.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-muted transition-colors"
                  >
                    <Checkbox
                      checked={selected === item.title}
                      onCheckedChange={() => handleSelect(item.title)}
                    />
                    <span className="text-sm flex-1">{item.title}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          {selectedProduct && (
            <>
              <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                {selectedProduct?.body?.map((group, j) => (
                  <li key={j} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {group.subtitle}
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
                ))}
              </ul>

              <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                {selectedProduct?.discounts?.map((discount, k) => (
                  <li
                    key={k}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {discount}
                  </li>
                ))}
              </ul>

              <div className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                {selectedProduct?.payment_system && (
                  <span className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {selectedProduct?.payment_system}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
            Additional Information
          </label>
          <textarea
            name=""
            id=""
            placeholder="Explain Your Project in details"
            className="w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <Button className="bg-primary/80 hover:bg-primary text-white font-semibold text-xs cursor-pointer hover:transition-all duration-300">
            Request Audit <ArrowRight />
          </Button>
        </div>
      </form>
    </div>
  );
}

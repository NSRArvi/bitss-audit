"use client";
import React, { useEffect, useState } from "react";
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
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const selectItems = ["standard-audit", "advanced-audit", "enterprise-audit"];

export default function ManualOrder({ setOpen = () => {}, title = "" }) {
  const [errors, setErrors] = useState({});
  const [selected, setSelected] = useState(null);
  const [checkOpen, setCheckOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    jobTitle: "",
    contactHandle: "",
    contactMethod: "",
    additionalInfo: "",
  });
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const fetchProductData = async (selected, title) => {
      let fetchUrl = "";

      if (title) {
        fetchUrl = `${BASE_URL}/public/package/${title}`;
      } else {
        fetchUrl = `${BASE_URL}/public/package/${selected}`;
      }

      try {
        const res = await fetch(fetchUrl);
        const data = await res.json();
        if (!res.ok) {
          throw data;
        }
        setProductData(data?.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (selected || title) {
      fetchProductData(selected, title);
    }
  }, [selected, title]);

  const isLocked = !!title;

  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSelect(itemTitle) {
    setSelected(selected === itemTitle ? null : itemTitle);
    setErrors((prev) => ({ ...prev, serviceInterest: undefined }));
    setCheckOpen(false);
  }

  function validate() {
    const newErrors = {};

    if (!formData.companyName.trim())
      newErrors.companyName = "Company / Project name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.contactMethod)
      newErrors.contactMethod = "Please select a platform.";

    if (!formData.contactHandle.trim())
      newErrors.contactHandle = "Please enter your handle or number.";

    if (!selected && !title)
      newErrors.serviceInterest = "Please select a service.";

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/manual-orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          serviceInterest: productData?.name ?? null,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      if (data.success) {
        setLoading(false);
        toast.success("Message Sent");
        setOpen(false);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {title && (
        <div className="mb-8 pb-6 pt-10 border-b border-black/10 dark:border-white/10">
          <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
            Your requested service
          </p>
          <h1 className="text-2xl font-semibold text-foreground">
            {productData?.name}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Review the details below and complete your audit request.
          </p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Project / Company Name */}
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
            Project / Company Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            placeholder="Project / Company Name"
            value={formData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
            className={`w-full rounded-lg border ${
              errors.companyName
                ? "border-red-500"
                : "border-black/10 dark:border-white/10"
            } bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
          />
          {errors.companyName && (
            <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Email */}
          <div className="w-full">
            <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full rounded-lg border ${
                errors.email
                  ? "border-red-500"
                  : "border-black/10 dark:border-white/10"
              } bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Contact Method */}
          <div className="w-full">
            <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
              Contact Method <span className="text-primary">*</span>
            </label>
            <div
              className={`flex flex-row border rounded-lg overflow-hidden ${
                errors.contactMethod || errors.contactHandle
                  ? "border-red-500"
                  : "border-black/10 dark:border-white/10"
              }`}
            >
              <Select
                value={formData.contactMethod}
                onValueChange={(value) => handleChange("contactMethod", value)}
              >
                <SelectTrigger className="w-1/2 rounded-none border-0 border-r border-black/10 dark:border-white/10">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Platform</SelectLabel>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="wechat">WeChat</SelectItem>
                    <SelectItem value="telegram">Telegram</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <input
                type="text"
                placeholder="Your handle / number"
                value={formData.contactHandle}
                onChange={(e) => handleChange("contactHandle", e.target.value)}
                className="w-full border-0 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors"
              />
            </div>
            {errors.contactMethod && (
              <p className="text-xs text-red-500 mt-1">
                {errors.contactMethod}
              </p>
            )}
            {errors.contactHandle && (
              <p className="text-xs text-red-500 mt-1">
                {errors.contactHandle}
              </p>
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
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Job Title */}
          <div className="w-full">
            <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Service Interest */}
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
            Service Interest <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => !isLocked && setCheckOpen(!checkOpen)}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg border ${
                errors.serviceInterest
                  ? "border-red-500"
                  : "border-black/10 dark:border-white/10"
              } bg-transparent text-sm transition-colors ${
                isLocked
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-muted cursor-pointer"
              }`}
            >
              <span className="text-foreground">
                {isLocked
                  ? productData?.name
                  : (selected ?? "Select a service")}
              </span>
              {isLocked ? (
                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
              ) : (
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                    checkOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {!isLocked && checkOpen && (
              <div className="absolute z-50 w-full mt-1 rounded-lg border border-black/10 dark:border-white/10 bg-background shadow-md overflow-hidden">
                {selectItems?.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-muted transition-colors"
                  >
                    <Checkbox
                      checked={selected === item}
                      onCheckedChange={() => handleSelect(item)}
                    />
                    <span className="text-sm flex-1">{item}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          {errors.serviceInterest && (
            <p className="text-xs text-red-500 mt-1">
              {errors.serviceInterest}
            </p>
          )}

          {productData && (
            <>
              <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                {productData?.items?.map((group, j) => {
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

              {productData?.name === "Standard Audit" && (
                <>
                  <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                      Pay Using USFRANC & SPUMP they also get 15% Discount for
                      All Package
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
              {productData?.name === "Advanced Audit" && (
                <>
                  <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                      For BITSS User Flat 30% applicable for Advance & Premium
                      Package
                    </li>
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                      Pay Using USFRANC & SPUMP they also get 15% Discount for
                      All Package
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
              {productData?.name === "Enterprise Audit" && (
                <>
                  <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                      For BITSS User Flat 30% applicable for Advance & Premium
                      Package
                    </li>
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                      Pay Using USFRANC & SPUMP they also get 15% Discount for
                      All Package
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
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
            Additional Information
          </label>
          <textarea
            placeholder="Explain Your Project in details"
            value={formData.additionalInfo}
            onChange={(e) => handleChange("additionalInfo", e.target.value)}
            className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-primary/80 hover:bg-primary text-white font-semibold text-xs cursor-pointer hover:transition-all duration-300"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Request Audit <ArrowRight />{" "}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

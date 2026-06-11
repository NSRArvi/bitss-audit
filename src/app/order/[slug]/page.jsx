"use client";

import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Check, Upload, ChevronDown, Info, X } from "lucide-react";
import Link from "next/link";
import Container from "@/components/Container/Container";
import { auditProducts } from "../../../../public/product";


// Generate ref number once per session
const generateRef = () =>
  "BA-" +
  Math.random().toString(36).toUpperCase().slice(2, 6) +
  Math.random().toString(36).toUpperCase().slice(2, 6);

const BANK_INFO = {
  bank: "LCL Bank",
  accountName: "SAS Affin (USFRANC Reserve Management Entity - Ref USFRANC)",
  iban: "FR10 3000 2030 3700 0007 3122 J65",
  swift: "CRLYFRPP",
};

const COUNTRY_CODES = [
  { code: "US +1", flag: "🇺🇸" },
  { code: "GB +44", flag: "🇬🇧" },
  { code: "FR +33", flag: "🇫🇷" },
  { code: "DE +49", flag: "🇩🇪" },
  { code: "AE +971", flag: "🇦🇪" },
  { code: "IN +91", flag: "🇮🇳" },
  { code: "BD +880", flag: "🇧🇩" },
  { code: "CA +1", flag: "🇨🇦" },
  { code: "AU +61", flag: "🇦🇺" },
  { code: "SG +65", flag: "🇸🇬" },
];

export default function OrderPage() {
  const params = useParams();
  const slug = params?.slug;

  const product = useMemo(
    () => auditProducts.find((p) => p.href === `/order/${slug}`),
    [slug]
  );

  const [refNo] = useState(generateRef);
  const [file, setFile] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    countryCode: "FR +33",
    contact: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const [dragging, setDragging] = useState(false);

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Valid email required";
    if (!form.contact.trim()) e.contact = "Contact number is required";
    if (!form.amount.trim()) e.amount = "Transfer amount is required";
    if (!file) e.file = "Transfer receipt is required";
    if (!agreed) e.agreed = "You must accept the terms";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) {
      setFile(dropped);
      setErrors((prev) => ({ ...prev, file: undefined }));
    }
  };

  const handleFileInput = (e) => {
    const picked = e.target.files[0];
    if (picked) {
      setFile(picked);
      setErrors((prev) => ({ ...prev, file: undefined }));
    }
  };

  if (!product) {
    return (
      <Container>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 py-32">
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Package Not Found
          </h1>
          <p className="text-muted-foreground">
            The audit package you're looking for doesn't exist.
          </p>
          <Link
            href="/#features"
            className="px-6 py-2.5 rounded-lg bg-primary/80 hover:bg-primary text-white transition-all duration-300"
          >
            View Packages
          </Link>
        </div>
      </Container>
    );
  }

  if (submitted) {
    return (
      <Container>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6 py-32">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Check size={40} className="text-primary" />
          </motion.div>
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Order Submitted!
          </h1>
          <p className="text-muted-foreground max-w-md">
            Your <span className="text-primary font-medium">{product.title}</span>{" "}
            order has been received. Reference:{" "}
            <span className="font-mono font-bold text-primary">{refNo}</span>.
            Our team will verify your transfer and contact you shortly.
          </p>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-lg bg-primary/80 hover:bg-primary text-white transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-20 sm:py-24 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-heading font-semibold mb-1">
            Crypto Audit Order
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl font-black text-foreground leading-tight">
            {product.title}
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Complete your order details below. All submissions are confidential
            and encrypted.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Transfer Info Card */}
            <div className="rounded-xl border border-black/10 dark:border-primary/10 bg-white/5 dark:bg-white/5 p-6 backdrop-blur-md">
              <p className="text-xs uppercase tracking-widest text-primary font-heading font-semibold mb-1">
                Transfer Information
              </p>
              <p className="text-sm text-muted-foreground">
                Ref No:{" "}
                <span className="font-mono font-bold text-primary">
                  {refNo}
                </span>{" "}
                <span className="text-xs text-muted-foreground">
                  (System Generated)
                </span>
              </p>

              <div className="mt-6 space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.fullName}
                    onChange={set("fullName")}
                    className={`w-full rounded-lg border ${
                      errors.fullName
                        ? "border-red-500"
                        : "border-black/10 dark:border-white/10"
                    } bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={set("email")}
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

                {/* Contact */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
                    Contact <span className="text-primary">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <select
                        value={form.countryCode}
                        onChange={set("countryCode")}
                        className="appearance-none rounded-lg border border-black/10 dark:border-white/10 bg-transparent pl-3 pr-8 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter contact number"
                      value={form.contact}
                      onChange={set("contact")}
                      className={`flex-1 rounded-lg border ${
                        errors.contact
                          ? "border-red-500"
                          : "border-black/10 dark:border-white/10"
                      } bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
                    />
                  </div>
                  {errors.contact && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.contact}
                    </p>
                  )}
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
                    Transfer Amount <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    value={form.amount}
                    onChange={set("amount")}
                    className={`w-full rounded-lg border ${
                      errors.amount
                        ? "border-red-500"
                        : "border-black/10 dark:border-white/10"
                    } bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
                  />
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <span>💡</span> 30% advance due now · 70% before delivery
                  </p>
                  {errors.amount && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.amount}
                    </p>
                  )}
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
                    Transfer Receipt <span className="text-primary">*</span>
                  </label>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragging(true);
                    }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                    onClick={() =>
                      document.getElementById("receipt-input").click()
                    }
                    className={`relative cursor-pointer rounded-xl border-2 border-dashed ${
                      errors.file
                        ? "border-red-500"
                        : dragging
                        ? "border-primary bg-primary/5"
                        : "border-primary/40 hover:border-primary"
                    } transition-all duration-200 p-8 flex flex-col items-center justify-center gap-2`}
                  >
                    {file ? (
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Check size={16} className="text-primary" />
                        <span className="truncate max-w-xs">{file.name}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                          }}
                          className="text-muted-foreground hover:text-red-500 transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload size={24} className="text-primary/60" />
                        <span className="text-sm text-primary font-medium">
                          Upload Transfer Receipt
                        </span>
                        <span className="text-xs text-muted-foreground">
                          PDF, JPG, JPEG, PNG
                        </span>
                      </>
                    )}
                    <input
                      id="receipt-input"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={handleFileInput}
                    />
                  </div>
                  {errors.file && (
                    <p className="text-xs text-red-500 mt-1">{errors.file}</p>
                  )}
                </div>

                {/* Terms */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div
                      onClick={() => {
                        setAgreed((v) => !v);
                        setErrors((prev) => ({ ...prev, agreed: undefined }));
                      }}
                      className={`mt-0.5 w-5 h-5 shrink-0 rounded border-2 flex items-center justify-center transition-all ${
                        agreed
                          ? "bg-primary border-primary"
                          : errors.agreed
                          ? "border-red-500"
                          : "border-black/20 dark:border-white/20 group-hover:border-primary"
                      }`}
                    >
                      {agreed && <Check size={12} className="text-white" />}
                    </div>
                    <span className="text-sm text-muted-foreground leading-snug">
                      I have read and agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-primary underline underline-offset-2 hover:text-primary/80"
                        target="_blank"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and understand the 30% advance / 70% before delivery
                      payment structure.
                    </span>
                  </label>
                  {errors.agreed && (
                    <p className="text-xs text-red-500 mt-1">{errors.agreed}</p>
                  )}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="mt-8 w-full px-6 py-3 rounded-lg bg-primary/80 hover:bg-primary text-white font-heading font-semibold tracking-wide transition-all duration-300 flex justify-center items-center gap-2"
              >
                Submit Order
              </button>
              <p className="text-xs text-center text-muted-foreground mt-3">
                🔒 Confidential & Secure Submission — All data protected
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Product + Bank Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-xl border border-black/10 dark:border-primary/10 bg-white/5 dark:bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary font-heading font-semibold">
                    Selected Package
                  </p>
                  <h2 className="font-heading text-xl font-bold text-foreground mt-0.5">
                    {product.title}
                  </h2>
                </div>
                {product.badge && (
                  <span className="text-xs font-heading font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="font-heading text-2xl font-black text-foreground mb-4">
                €{product.amount}
              </p>
              <ul className="space-y-2.5">
                {product.body.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Bank Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-black/10 dark:border-primary/10 bg-white/5 dark:bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 mb-4">
                <Info size={15} className="text-primary" />
                <p className="text-xs uppercase tracking-widest text-primary font-heading font-semibold">
                  Payment Instructions
                </p>
              </div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                Transfer your order amount to the bank details below within{" "}
                <span className="font-semibold text-foreground">7 days</span>.
                Upload the receipt in the form.
              </p>

              <div className="space-y-3">
                {[
                  { label: "Bank", value: BANK_INFO.bank },
                  { label: "Account Name", value: BANK_INFO.accountName },
                  { label: "IBAN", value: BANK_INFO.iban },
                  { label: "SWIFT / BIC", value: BANK_INFO.swift },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-mono text-foreground break-all">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg bg-primary/5 border border-primary/10 px-4 py-3">
                <p className="text-xs font-heading font-semibold text-primary uppercase tracking-widest mb-1">
                  Payment Schedule
                </p>
                <div className="flex gap-4 mt-2">
                  <div className="text-center">
                    <p className="text-lg font-black font-heading text-foreground">
                      30%
                    </p>
                    <p className="text-xs text-muted-foreground">In Advance</p>
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className="h-px flex-1 bg-primary/20" />
                    <span className="mx-2 text-xs text-muted-foreground">
                      then
                    </span>
                    <div className="h-px flex-1 bg-primary/20" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-black font-heading text-foreground">
                      70%
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Before Delivery
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
}
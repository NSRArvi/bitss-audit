"use client";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {
  Building2,
  CalendarIcon,
  CircleUserRound,
  Link,
  ShieldCogCorner,
} from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { BASE_URL } from "@/lib/base_url";
import { useEffect, useState } from "react";
import { toServerDate } from "@/lib/toServerDate";
import toast from "react-hot-toast";

const audits = [
  { id: 1, label: "Standard Audit", slug: "standard-audit" },
  { id: 2, label: "Advance Audit", slug: "advanced-audit" },
  { id: 3, label: "Enterprise Audit", slug: "enterprise-audit" },
];

export default function ManualAuditForm({ setOpen, open }) {
  const [packageData, setPackageData] = useState({});
  const { control, handleSubmit } = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      whatsapp_number: "",
      telegram_address: "",
      company_name: "",
      token_name: "",
      token_symbol: "",
      blockchain_name: "",
      contract_address: "",
      website_url: "",
      github_link: "",
      coingecko_link: "",
      coinmarketcap_link: "",
      audit_type: null,
      expected_start_date: "",
      additional_notes: "",
    },
  });
  const auditType = useWatch({
    control,
    name: "audit_type",
  });
  const selectedAudit = audits.find((audit) => audit.label === auditType);
  const slug = selectedAudit?.slug;

  useEffect(() => {
    const loadPackage = async (slug) => {
      const res = await fetch(`${BASE_URL}/public/package/${slug}`);
      const data = await res.json();
      setPackageData(data?.data);
    };
    if (slug) {
      loadPackage(slug);
    }
  }, [slug]);

  const handleFormSubmit = async (data) => {
    const payload = {
      package_id: packageData?.id,
      ...data,
      expected_start_date: toServerDate(data?.expected_start_date),
    };
    try {
      const res = await fetch(`${BASE_URL}/manual-orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const resData = await res.json();
      if (!res.ok) {
        throw resData;
      }
      if (resData.success) {
        toast.success(resData?.message || "Message Sent");
        open && setOpen(false);
      }
    } catch (error) {
      toast.error(error.message || "Message Not Sent");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-10">
      <div className="bg-slate-50 p-4 rounded-lg shadow-xs mb-10">
        <div className="mb-6">
          <p className="text-lg font-semibold flex gap-2 text-muted-foreground">
            {" "}
            <CircleUserRound className="text-muted-foreground" /> Your contact
            details
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Controller
            name="full_name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Full Name *</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="John Doe"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Email *</FieldLabel>
                <Input
                  {...field}
                  type="email"
                  placeholder="example@gmail.com"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="whatsapp_number"
            control={control}
            rules={{ required: "Whatsapp is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Whatsapp *</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="+880 1537436599"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="telegram_address"
            control={control}
            rules={{ required: "telegram is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Telegram *</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="+880 1537436599"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      </div>
      <div className="bg-slate-50 p-4 rounded-lg shadow-xs mb-10">
        <div className="mb-6">
          <p className="text-lg font-semibold flex gap-2 text-muted-foreground">
            {" "}
            <Building2 className="text-muted-foreground" /> Project details
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Controller
            name="company_name"
            control={control}
            rules={{ required: "Company name is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Company Name *</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="Apple"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="token_name"
            control={control}
            rules={{ required: "Token name is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Token Name *</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="Acme coin"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="token_symbol"
            control={control}
            rules={{ required: "Token Symbol is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Token Symbol *</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="Acme coin"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="blockchain_name"
            control={control}
            rules={{ required: "Blockchain is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Blockchain *</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="Solana"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="contract_address"
            control={control}
            rules={{ required: "Contract Address is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Contract Address *</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="MohammmadPur"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      </div>
      <div className="bg-slate-50 p-4 rounded-lg shadow-xs mb-10">
        <div className="mb-6">
          <p className="text-lg font-semibold flex gap-2 text-muted-foreground">
            {" "}
            <Link className="text-muted-foreground" /> Project links
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Controller
            name="website_url"
            control={control}
            rules={{ required: "Website URL is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Website URL *</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="your-website.com"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="github_link"
            control={control}
            rules={{ required: "Github URL is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Github URL *</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="your-github.com"
                  className="h-12 bg-white"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="coingecko_link"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Coin Gecko</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="Coin Gecko"
                  className="h-12 bg-white"
                />
              </Field>
            )}
          />
          <Controller
            name="coinmarketcap_link"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Coin Market Cap</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="Coin Market Cap"
                  className="h-12 bg-white"
                />
              </Field>
            )}
          />
        </div>
      </div>
      <div className="bg-slate-50 p-4 rounded-lg shadow-xs mb-10">
        <div className="mb-6">
          <p className="text-lg font-semibold flex gap-2 text-muted-foreground">
            {" "}
            <ShieldCogCorner className="text-muted-foreground" /> Audit
            preferences
          </p>
        </div>
        <div>
          <Controller
            name="audit_type"
            control={control}
            rules={{ required: "Please select an audit service" }}
            render={({ field, fieldState }) => (
              <div>
                <Label className="my-4">Audit type *</Label>
                <div className="flex flex-wrap gap-3">
                  {audits.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => field.onChange(type.label)}
                      className={`px-6 py-2 h-12 mb-6 rounded-full border text-xs font-medium transition-all cursor-pointer
                    ${
                      field.value === type.label
                        ? "border-primary/90 bg-blue-500 text-white"
                        : "border-gray-200 text-gray-600 hover:border-gray-400 bg-white"
                    }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </div>
            )}
          />
          {/*  */}
          <div className="mb-5">
            {packageData && packageData?.items && (
              <>
                <ul
                  className={`mt-2 p-5 rounded-lg flex flex-col gap-1.5 bg-white shadow-xs ${packageData?.items.length > 3 ? "grid grid-cols-2" : "grid grid-cols-1"}`}
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
                    <ul className="mt-2 p-5 bg-white shadow-xs rounded-lg flex flex-col gap-1.5">
                      <li className="flex items-center gap-2 text-xs text-muted-foreground">
                        Pay Using USFRANC & SPUMP they also get 15% Discount for
                        All Package
                      </li>
                      <li className="flex items-center gap-2 text-xs text-muted-foreground">
                        Pay Using USDC they also get 5% Discount for All Package
                      </li>
                    </ul>
                    <ul className="mt-2 px-4 py-3 bg-white shadow-xs rounded-lg flex flex-col gap-1.5">
                      <li className="flex items-center gap-2 text-xs text-muted-foreground">
                        30% in advance and 70% Before Delivery
                      </li>
                    </ul>
                  </>
                )}
                {packageData?.name === "Advanced Audit" && (
                  <>
                    <ul className="mt-2 p-5 bg-white rounded-lg flex flex-col gap-1.5">
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
                    <ul className="mt-2 p-5 bg-white rounded-lg flex flex-col gap-1.5">
                      <li className="flex items-center gap-2 text-xs text-muted-foreground">
                        30% in advance and 70% Before Delivery
                      </li>
                    </ul>
                  </>
                )}
                {packageData?.name === "Enterprise Audit" && (
                  <>
                    <ul className="mt-2 p-5 bg-white rounded-lg flex flex-col gap-1.5">
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
                    <ul className="mt-2 p-5 bg-white rounded-lg flex flex-col gap-1.5">
                      <li className="flex items-center gap-2 text-xs text-muted-foreground">
                        30% in advance and 70% Before Delivery
                      </li>
                    </ul>
                  </>
                )}
              </>
            )}
          </div>
          {/*  */}

          <Controller
            name="expected_start_date"
            control={control}
            rules={{ required: "Please select a start date" }}
            render={({ field, fieldState }) => (
              <div>
                <p className="text-sm font-medium mb-3">
                  Expected start date *
                </p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value
                        ? new Date(field.value).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "Pick a date"}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(date) => field.onChange(date?.toISOString())}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                {fieldState.error && (
                  <p className="text-red-500 text-xs mt-2">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="additional_notes"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel className="mt-6">Additional Notes</FieldLabel>
                <Textarea
                  {...field}
                  type="text"
                  placeholder="your-website.com"
                  className="h-12 bg-white"
                />
              </Field>
            )}
          />
        </div>
      </div>
      <div className="text-end mb-10 ">
        <Button className="cursor-pointer">Request An Audit</Button>
      </div>
    </form>
  );
}

"use client";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { ArrowRight, ChevronDown, Lock } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import CheckoutForm from "./CheckoutForm";
import { STRIPE_PUBLISHABLE_KEY } from "@/lib/base_url";
import { Spinner } from "../ui/spinner";

const selectItems = ["standard-audit", "advanced-audit", "enterprise-audit"];
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export default function InputController({
  control,
  discountInfo,
  isLocked,
  productData,
  finalPrice,
  loading,
  payment_type,
  stripeClientSecret,
  setStripeClientSecret,
  setPendingOrderData,
  pendingOrderData,
  errors,
  isPriceAvailable,
  available,
  originalPrice,
  bitssCustomerEmail,
  title = { title },
}) {
  const [checkOpen, setCheckOpen] = useState(false);

  const isCheckoutStep = Boolean(stripeClientSecret && pendingOrderData);

  return (
    <div
      className={
        isCheckoutStep
          ? "flex justify-between gap-10"
          : "grid grid-cols-2 gap-10"
      }
    >
      {isCheckoutStep ? (
        <div className="flex-1">
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret: stripeClientSecret,
              appearance: { theme: "none" },
            }}
          >
            <CheckoutForm
              pendingOrderData={pendingOrderData}
              clientSecret={stripeClientSecret}
              title={title}
              onBack={() => {
                setStripeClientSecret(null);
                setPendingOrderData(null);
              }}
            />
          </Elements>
        </div>
      ) : (
        <div className="space-y-8 bg-white px-4 py-10 shadow rounded h-fit">
          <Controller
            name="payment_type"
            control={control}
            rules={{ required: "Please select a payment method" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Payment Method *</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Select a payment Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Payment Method</SelectLabel>
                      <SelectItem value="manual">Bank Transfer</SelectItem>
                      {/* <SelectItem value="stripe">Stripe</SelectItem> */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {payment_type === "manual" && (
            <>
              <Controller
                name="account_no"
                control={control}
                rules={{ required: "Account number is required" }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Account Number *</FieldLabel>
                    <Input
                      {...field}
                      type="text"
                      placeholder="your account number"
                      className="h-12"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="transaction_id"
                control={control}
                rules={{ required: "Transaction ID is required" }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Transaction ID *</FieldLabel>
                    <Input
                      {...field}
                      type="text"
                      placeholder="your transaction id"
                      className="h-12"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="payment_document"
                control={control}
                rules={{ required: "Document image is required" }}
                render={({ field: { onChange, ref }, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Document *</FieldLabel>
                    <Input
                      type="file"
                      ref={ref}
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(e) => onChange(e.target.files)}
                      className="h-12"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="amount"
                control={control}
                rules={{ required: "Amount is required" }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Amount</FieldLabel>
                    <Input
                      {...field}
                      type="number"
                      value={finalPrice ?? originalPrice ?? ""}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      placeholder="Enter your payment amount"
                      className="h-12 cursor-not-allowed"
                      disabled
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {discountInfo && (
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Email is required" }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel>Email *</FieldLabel>
                      <Input
                        {...field}
                        value={bitssCustomerEmail ?? ""}
                        type="email"
                        placeholder="Your bitss email address"
                        className="h-12"
                        readOnly
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              )}
            </>
          )}

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={loading || !available || !isPriceAvailable}
              className={`bg-primary/90 hover:bg-primary text-white font-semibold text-xs cursor-pointer hover:transition-all duration-300 ${
                loading || !available || !isPriceAvailable
                  ? "cursor-not-allowed"
                  : ""
              }`}
            >
              {loading ? (
                <>
                  Processing <Spinner />
                </>
              ) : payment_type === "stripe" ? (
                "Proceed To Payment"
              ) : (
                <>
                  Request Audit <ArrowRight />
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      <div
        className={`bg-white p-4 shadow rounded ${
          isCheckoutStep ? "flex-1" : ""
        }`}
      >
        <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
          Service Interest <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => !isLocked && setCheckOpen(!checkOpen)}
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg border ${
              errors?.serviceInterest
                ? "border-red-500"
                : "border-black/10 dark:border-white/10"
            } bg-transparent text-sm transition-colors ${
              isLocked
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-muted cursor-pointer"
            }`}
          >
            <span className="text-foreground">
              {isLocked ? productData?.name : "Select a service"}
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
                  <Checkbox />
                  <span className="text-sm flex-1">{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        {errors?.serviceInterest && (
          <p className="text-xs text-red-500 mt-1">{errors.serviceInterest}</p>
        )}

        {productData && (
          <ul className="mt-2 px-4 py-3  rounded-lg flex flex-col gap-1.5">
            {productData?.items?.map((group, j) => (
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
            ))}
          </ul>
        )}
        <>
          {productData?.name === "Standard Audit" && (
            <>
              <ul className="mt-2 px-4 py-3 bg-muted rounded-lg flex flex-col gap-1.5">
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
          {productData?.name === "Advanced Audit" && (
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
          {productData?.name === "Enterprise Audit" && (
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
      </div>
    </div>
  );
}

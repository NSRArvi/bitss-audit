"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { BASE_URL } from "@/lib/base_url";
import { useForm } from "react-hook-form";
import CheckBiitssCustomer from "../CheckBiitssCustomer/CheckBiitssCustomer";
import Link from "next/link";
import InputController from "./InputController";
import { useRouter } from "next/navigation";
import { useCurrency } from "@/hooks/useCurrency";
import { getProductPrice } from "@/lib/getProductPrice";
import { useAuth } from "@/hooks/useAuth";

export default function OrderForm({ setOpen = () => {}, title = "" }) {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [discountInfo, setDiscountInfo] = useState(null);
  const [productData, setProductData] = useState({});
  const [openDiscountModal, setOpenDiscountModal] = useState(true);

  const { user } = useAuth();
  const { selectedCurrency } = useCurrency();
  const router = useRouter();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      payment_type: "manual",
      account_no: "",
      transaction_id: "",
      payment_document: "",
      amount: "0",
      bitss_customer_discount: false,
      email: "",
    },
  });

  const fetchProductData = async (selected, title) => {
    const fetchUrl = selected
      ? `${BASE_URL}/public/package/${selected}`
      : `${BASE_URL}/public/package/${title}`;

    try {
      const res = await fetch(fetchUrl);
      const data = await res.json();
      setProductData(data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selected || title) {
      fetchProductData(selected, title);
    }
  }, [selected, title]);
  const isLocked = !!title;

  const handleDiscountModal = () => {};

  const {
    price: originalPrice,
    priceObj,
    isFallback,
    available,
  } = getProductPrice(productData, selectedCurrency);
  const countryId = priceObj?.country_id;
  const isPriceAvailable = available && !isFallback;

  const finalPrice = !discountInfo
    ? originalPrice
    : discountInfo.type === "percentage"
      ? originalPrice - (originalPrice * discountInfo.amount) / 100
      : originalPrice - discountInfo.amount;

  const handleOrderSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    if (data.payment_document?.[0]) {
      formData.append("payment_document", data.payment_document[0]);
    }
    formData.append("user_id", user?.user?.id);
    formData.append("package_id", productData?.id);
    formData.append("country_id", countryId);
    formData.append("payment_type", data.payment_type);
    formData.append("account_no", data.account_no);
    formData.append("transaction_id", data.transaction_id);
    formData.append("amount", data.amount);
    formData.append("bitss_customer_discount", Boolean(discountInfo));
    formData.append("email", data.email);

    try {
      const res = await fetch(`${BASE_URL}/order`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
        body: formData,
      });
      const result = await res.json();
      if (!res.ok) {
        throw result;
      }
      toast.success("Order submitted successfully");
      setOpen(false);
      router.push("/orders");
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-10">
      {title && (
        <div className="mb-8 pb-6 pt-10 border-b border-black/10 dark:border-white/10">
          <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">
            Your requested service
          </p>
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-semibold text-foreground">
              {productData?.name}
            </h1>

            <div>
              {isPriceAvailable ? (
                <>
                  {discountInfo ? (
                    <div className="flex items-center gap-3">
                      <div className="relative inline-block text-muted-foreground">
                        <span>{originalPrice}</span>
                        <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 -rotate-12 bg-red-500" />
                      </div>

                      <p className="text-2xl font-black leading-tight text-foreground">
                        {priceObj?.country?.icon && (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: priceObj.country.icon,
                            }}
                            className="text-black"
                          />
                        )}
                        {finalPrice}
                      </p>
                    </div>
                  ) : (
                    <p className="text-2xl font-black leading-tight text-foreground">
                      {priceObj?.country?.icon && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: priceObj.country.icon,
                          }}
                          className="text-black"
                        />
                      )}
                      {originalPrice}
                    </p>
                  )}
                  {discountInfo && (
                    <p className="text-[10px] font-medium text-muted-foreground -mt-2">
                      BITSS Customer Discount
                    </p>
                  )}
                </>
              ) : (
                <p className="text-sm font-medium text-red-500">
                  Not available in{" "}
                  {selectedCurrency?.abriviation_code || "this currency"}
                </p>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Review the details below and complete your audit request.
          </p>
          <p className="text-sm text-muted-foreground mt-5">
            An exclusive{" "}
            <span
              onClick={() => setOpenDiscountModal(true)}
              className="text-gray-800 font-bold cursor-pointer"
            >
              Discount
            </span>{" "}
            for{" "}
            <Link
              href="https://bitss.one"
              target="_blank"
              className="text-primary font-semibold"
            >
              Bitss
            </Link>{" "}
            customer
          </p>
        </div>
      )}

      <CheckBiitssCustomer
        onDiscountVerified={(data) => setDiscountInfo(data)}
        open={openDiscountModal}
        setOpen={setOpenDiscountModal}
      />

      <form className="space-y-6" onSubmit={handleSubmit(handleOrderSubmit)}>
        <InputController
          control={control}
          discountInfo={discountInfo}
          selected={selected}
          setSelected={setSelected}
          isLocked={isLocked}
          productData={productData}
          finalPrice={finalPrice}
          originalPrice={originalPrice}
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={loading || !available || !isPriceAvailable}
            className={`bg-primary/90 hover:bg-primary text-white font-semibold text-xs cursor-pointer hover:transition-all duration-300 ${loading || !available || !isPriceAvailable ? "cursor-not-allowed" : ""} `}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Request Audit <ArrowRight />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

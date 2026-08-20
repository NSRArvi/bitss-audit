"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useForm, useWatch } from "react-hook-form";
import CheckBiitssCustomer from "../CheckBiitssCustomer/CheckBiitssCustomer";
import InputController from "./InputController";
import { useAuth } from "@/hooks/useAuth";
import { useCurrency } from "@/hooks/useCurrency";
import { getProductPrice } from "@/lib/getProductPrice";
import { BASE_URL } from "@/lib/base_url";

export default function OrderForm({ setOpen = () => {}, title = "", orderId }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [discountInfo, setDiscountInfo] = useState(null);
  const [productData, setProductData] = useState({});
  const [openDiscountModal, setOpenDiscountModal] = useState(true);
  const [stripeClientSecret, setStripeClientSecret] = useState(null);
  const [pendingOrderData, setPendingOrderData] = useState(null);
  const [bitssCustomerEmail, setBitssCustomerEmail] = useState("");
  const [priceData, setPriceData] = useState({});

  const { user } = useAuth();
  const { selectedCurrency } = useCurrency();
  const router = useRouter();

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      payment_type: "manual",
      account_no: "",
      transaction_id: "",
      payment_document: "",
      amount: "0",
      bitss_customer_discount: false,
      email: bitssCustomerEmail ?? "",
    },
  });
  const payment_type = useWatch({ control, name: "payment_type" });

  useEffect(() => {
    if (bitssCustomerEmail) {
      setValue("email", bitssCustomerEmail, { shouldValidate: true });
    }
  }, [bitssCustomerEmail, setValue]);

  const slug = toSlug(priceData?.order?.service_interest);

  useEffect(() => {
    const fetchProductData = async (title) => {
      const fetchUrl = `${BASE_URL}/public/package/${title}`;

      try {
        const res = await fetch(fetchUrl);
        const data = await res.json();
        setProductData(data?.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (slug) {
      fetchProductData(toSlug(slug));
    }
  }, [slug]);
  const isLocked = !!slug;

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

  // Stripe order functionality
  const handleCheckOutProceed = async () => {
    setErrors({});
    setLoading(true);
    const formData = new FormData();
    formData.append("user_id", user?.user?.id);
    formData.append("package_id", productData?.id);
    formData.append("country_id", countryId);
    formData.append("payment_type", payment_type);
    formData.append("amount", finalPrice);
    formData.append("bitss_customer_discount", Boolean(discountInfo));
    discountInfo && formData.append("email", bitssCustomerEmail);

    try {
      const orderRes = await fetch(`${BASE_URL}/order`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
        body: formData,
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) {
        throw orderData;
      }
      if (orderData.success) {
        setPendingOrderData(orderData?.data);
        const intentRes = await fetch(`${BASE_URL}/payment/create-intent`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            order_id: orderData?.data?.id,
            amount: finalPrice,
            currency:
              selectedCurrency?.currency_name &&
              selectedCurrency?.currency_name,
            payment_type: "regular",
          }),
        });
        const intentData = await intentRes.json();
        const client_secret = intentData?.client_secret;
        if (client_secret) {
          setPendingOrderData({
            orderInfo: orderData?.data,
            payment_intent_id: intentData?.payment_intent_id,
          });
          setStripeClientSecret(client_secret);
        } else {
          console.error("No client_secret in response");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOrderSubmit = async (data) => {
    if (payment_type === "stripe") {
      await handleCheckOutProceed();
      return;
    } else {
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
      discountInfo && formData.append("email", data.email);

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
    }
  };

  // get the price
  useEffect(() => {
    try {
      const loadPrice = async (orderId) => {
        const res = await fetch(`${BASE_URL}/checkout/${orderId}`);
        const data = await res.json();
        setPriceData(data?.data);
      };
      loadPrice(orderId);
    } catch (error) {
      console.log(error);
    }
  }, [orderId]);

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

            {/* <div>
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
            </div> */}
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
        setBitssCustomerEmail={setBitssCustomerEmail}
      />
      <form className="space-y-6" onSubmit={handleSubmit(handleOrderSubmit)}>
        <InputController
          control={control}
          discountInfo={discountInfo}
          isLocked={isLocked}
          productData={productData}
          // finalPrice={finalPrice}
          loading={loading}
          payment_type={payment_type}
          stripeClientSecret={stripeClientSecret}
          setStripeClientSecret={setStripeClientSecret}
          setPendingOrderData={setPendingOrderData}
          pendingOrderData={pendingOrderData}
          errors={errors}
          // isPriceAvailable={isPriceAvailable}
          available={available}
          // originalPrice={originalPrice}
          title={title}
          bitssCustomerEmail={bitssCustomerEmail}
        />
      </form>
    </div>
  );
}

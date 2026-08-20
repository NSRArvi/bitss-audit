import { useState } from "react";
import { CURRENCIES } from "@/data/currencies";

export function useCheckoutFlow(basePrice) {
  const [currency, setCurrency] = useState("eur");
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [customerDiscount, setCustomerDiscount] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [bitssCustomer, setBitssCustomer] = useState({});

  const selectedCurrency = CURRENCIES.find((c) => c.id === currency);
  const isCrypto = selectedCurrency?.type === "crypto";

  const cryptoDiscount = isCrypto ? (selectedCurrency.discount ?? 0) : 0;
  const finalDiscount = Math.max(customerDiscount, cryptoDiscount);
  const totalPrice = basePrice - (basePrice * finalDiscount) / 100;

  return {
    currency,
    setCurrency,
    paymentMethod,
    setPaymentMethod,
    customerDiscount,
    setCustomerDiscount,
    isVerified,
    setIsVerified,
    isCrypto,
    finalDiscount,
    totalPrice,
    selectedCurrency,
    bitssCustomer,
    setBitssCustomer,
  };
}

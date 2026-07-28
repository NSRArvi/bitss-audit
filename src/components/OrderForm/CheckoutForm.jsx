import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { BASE_URL } from "@/lib/base_url";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "14px",
      fontFamily: "inherit",
      color: "#111827",
      "::placeholder": { color: "#9ca3af" },
      iconColor: "#186BB5",
    },
    invalid: {
      color: "#ef4444",
      iconColor: "#ef4444",
    },
  },
  hidePostalCode: true,
};

export default function CheckoutForm({
  pendingOrderData,
  clientSecret,
  onBack,
}) {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [cardFocused, setCardFocused] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMsg(null);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: { card: cardElement },
      },
    );

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      try {
        const confirmRes = await fetch(`${BASE_URL}/payment/confirm`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment_intent_id: pendingOrderData?.payment_intent_id,
            order_id: pendingOrderData?.orderInfo?.id,
          }),
        });
        const confirmData = await confirmRes.json();
        console.log(confirmData?.data);

        if (confirmRes.ok && confirmData?.success) {
          sessionStorage.setItem(
            "orderConfirmationData",
            JSON.stringify(confirmData?.data),
          );
          router.push(`/order-confirmation/${confirmData?.data?.id}`);
        } else {
          setErrorMsg("Contact to support");
        }
      } catch (err) {
        console.error("Exact error:", err.message, err);
        setErrorMsg("Network error during order confirmation.");
      }
    }

    setLoading(false);
  };

  return (
    <div>
      <Button
        type="button"
        onClick={onBack}
        disabled={loading}
        className="flex items-center gap-1.5 text-xs font-semibold text-[#186BB5] hover:underline bg-transparent hover:bg-transparent mb-3"
      >
        <ArrowLeft size={13} /> Back to order
      </Button>
      <div className="space-y-4 w-full lg:w-full">
        {/* <PaymentElement /> */}
        <div
          className={`rounded-xl border px-4 py-3.5 transition-all ${
            cardFocused
              ? "border-[#186BB5] ring-2 ring-[#186BB5]/10"
              : "border-gray-200"
          } bg-white`}
        >
          <CardElement
            options={CARD_ELEMENT_OPTIONS}
            onFocus={() => setCardFocused(true)}
            onBlur={() => setCardFocused(false)}
          />
        </div>

        {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

        <Button
          onClick={handleSubmit}
          disabled={!stripe || loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? "Confirming Payment..." : "Pay Now"}
        </Button>
      </div>
    </div>
  );
}

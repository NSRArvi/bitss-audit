"use client";

import { BASE_URL, STRIPE_PUBLISHABLE_KEY } from "@/lib/base_url";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import Container from "../Container/Container";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
export default function OrderConfirmation({ slug, clientSecret }) {
  const [packageData, setPackageData] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async (slug) => {
      const res = await fetch(`${BASE_URL}/public/package/${slug}`);
      const data = await res.json();
      setPackageData(data?.data);
    };
    if (slug) {
      fetchData(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (!clientSecret) return;

    const fetchPaymentIntent = async () => {
      const stripe = await stripePromise;
      const { paymentIntent, error } =
        await stripe.retrievePaymentIntent(clientSecret);

      if (error) {
        setStatus("error");
        return;
      }

      if (paymentIntent.status === "succeeded") {
        setStatus("succeeded");
        setPaymentDetails(paymentIntent);
      }
    };

    fetchPaymentIntent();
  }, [clientSecret]);
  console.log({ paymentDetails });

  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full">
            <h4>
              Total Paid Amount: {paymentDetails?.currency}{" "}
              {paymentDetails?.amount}
            </h4>
            <p>Transaction ID: {paymentDetails?.id}</p>
          </div>
          <div className="w-full">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-xl font-semibold">{packageData?.name}</span>
            </div>
            <div className=" grid grid-cols-2 gap-4 mb-4">
              {packageData?.items?.map((group, i) => (
                <div key={i}>
                  <div className="text-sm font-semibold uppercase tracking-wide text-primary mb-1">
                    {group?.title}
                  </div>
                  <ul className="space-y-1">
                    {(group.items || []).map((item, j) => (
                      <li key={j} className="text-xs text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

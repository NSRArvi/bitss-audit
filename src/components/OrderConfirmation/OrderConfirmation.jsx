"use client";

import { BASE_URL, STRIPE_PUBLISHABLE_KEY } from "@/lib/base_url";
import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { useParams } from "next/navigation";
import { formatDate } from "@/lib/formatDate";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function OrderConfirmation() {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [packageData, setPackageData] = useState({});

  const slug = orderData?.package?.slug;

  useEffect(() => {
    const cached = sessionStorage.getItem("orderConfirmationData");

    if (cached) {
      const parsed = JSON.parse(cached);
      setOrderData(parsed);
      // sessionStorage.removeItem("orderConfirmationData");
    } else {
      // setNotFound(true);
    }
  }, [orderId]);
  console.log(orderData);

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

  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col justify-between lg:flex-row gap-20">
          <div className="w-full">
            <Link
              href="/orders"
              className="text-sm text-muted-foreground flex items-center gap-1 mb-6"
            >
              <ArrowLeft /> Back to order page
            </Link>
            <div className="flex flex-wrap items-center justify-between gap-3 mt-1">
              <span className="text-muted-foreground text-sm">
                #{orderData?.order_number}
              </span>
              <div className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 capitalize">
                {orderData?.status}
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <h4 className="text-xl font-medium text-foreground">
                  Paid amount
                </h4>

                <p className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-foreground">
                    {orderData?.discount && (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: orderData?.currency,
                        }}
                      />
                    )}
                    {(orderData?.discount
                      ? parseFloat(orderData?.amount || 0) -
                        parseFloat(orderData?.amount || 0) *
                          (parseFloat(
                            orderData?.discount?.discount_amount || 0,
                          ) /
                            100)
                      : parseFloat(orderData?.amount || 0)
                    ).toFixed(2)}
                  </span>

                  {orderData?.currency && (
                    <span
                      className={
                        orderData?.discount
                          ? "text-sm text-muted-foreground line-through"
                          : "hidden"
                      }
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: orderData?.currency,
                        }}
                      />
                      {parseFloat(orderData?.amount || 0).toFixed(2)}
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="h-px bg-border my-4" />

            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-foreground">Transaction ID</span>
                <span className="ml-auto text-muted-foreground font-mono text-xs">
                  {orderData?.stripe_payment?.transaction_id || "—"}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-foreground">Order created at</span>
                <span className="ml-auto text-muted-foreground">
                  {formatDate(orderData?.created_at)}
                </span>
              </div>
            </div>
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

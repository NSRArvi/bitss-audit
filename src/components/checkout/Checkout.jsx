"use client";

import { useEffect, useState } from "react";
import { Building2, CreditCard, LockKeyhole, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { BASE_URL } from "@/lib/base_url";
import { toSlug } from "@/lib/toSlug";

const ordersData = {
  brand: "AuditOne",
  product: "Advanced Smart Contract Audit",
  description: "Crypto / DeFi Security — assigned by your account manager",
  price: 2000,
  currency: "USD",
  orderId: "#ORD-0002",
  company: "ABC Company",
  contact: "@akazad via WhatsApp",
};

export default function Checkout({ orderId }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [loading, setLoading] = useState(false);
  //   my states
  const [packageData, setPackageData] = useState({});
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    try {
      const loadOrderData = async (orderId) => {
        const res = await fetch(`${BASE_URL}/checkout/${orderId}`);
        const data = await res.json();
        if (!res.ok) {
          throw data;
        }
        setOrderData(data?.data?.order);
      };
      if (orderId) {
        loadOrderData(orderId);
      }
    } catch (error) {
      console.log(error);
    }
  }, [orderId]);

  const slug = orderData?.service_interest;

  useEffect(() => {
    try {
      const loadPackageData = async (slug) => {
        const res = await fetch(`${BASE_URL}/public/package/${slug}`);
        const data = await res.json();
        if (!res.ok) {
          throw data;
        }
        setPackageData(data?.data);
      };
      if (slug) {
        loadPackageData(toSlug(slug));
      }
    } catch (error) {
      console.log(error);
    }
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Replace with your payment API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    alert("Payment submitted successfully!");
  };

  return (
    <main className="min-h-screen px-3 py-5 text-slate-900 sm:px-6">
      <div className="min-h-[calc(100vh-40px)] rounded-xl border border-slate-200 bg-white">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-slate-100 px-5 py-6 sm:px-8">
          <div className="text-sm font-semibold">
            Bitss<span className="text-primary">Audit</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-slate-500">
            <LockKeyhole size={11} />
            Secure checkout
          </div>
        </header>

        {/* Main */}
        <div className="grid grid-cols-1 gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          {/* LEFT */}

          {/* RIGHT */}
          <section className="flex items-start justify-center lg:pt-1">
            <Card className="w-full rounded-xl border-slate-200 bg-white p-5">
              <form onSubmit={handleSubmit}>
                {/* Payment Summary */}
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                  Payment Summary
                </p>

                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5">
                  <div className="flex items-center justify-between py-3 text-[10px]">
                    <span className="text-slate-600">
                      {ordersData.product.replace("Smart Contract ", "")}
                    </span>

                    <span className="font-medium text-slate-800">
                      ${ordersData.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 text-[10px]">
                    <span className="text-slate-600">Discount</span>
                    <span className="text-slate-400">—</span>
                  </div>

                  <div className="h-px bg-slate-200" />

                  <div className="flex items-center justify-between py-3">
                    <span className="text-[10px] font-semibold text-slate-800">
                      Total due
                    </span>

                    <div className="flex items-baseline gap-1">
                      <span className="text-[9px] text-slate-400">
                        {ordersData.currency}
                      </span>

                      <span className="text-xl font-semibold text-primary">
                        {ordersData.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* currency */}
                <div className="mt-5">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                    Currency
                  </p>
                </div>

                {/* Payment Method */}
                <div className="mt-5">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                    Payment Method
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`flex h-8 items-center gap-2 rounded-md border px-3 text-[11px] font-medium transition ${
                        paymentMethod === "card"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <CreditCard size={12} />
                      Card
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("bank")}
                      className={`flex h-8 items-center gap-2 rounded-md border px-3 text-[11px] font-medium transition ${
                        paymentMethod === "bank"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <Building2 size={12} />
                      Bank transfer
                    </button>
                  </div>
                </div>

                {/* Card Form */}
                {paymentMethod === "card" ? (
                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="mb-1.5 block text-[9px] font-medium text-slate-500">
                        Card number
                      </label>

                      <Input
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="h-8 rounded-md border-slate-200 bg-white px-2.5 text-[11px] text-slate-800 placeholder:text-slate-300 focus-visible:border-primary focus-visible:ring-primary/20"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="mb-1.5 block text-[9px] font-medium text-slate-500">
                          Expiry
                        </label>

                        <Input
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          placeholder="MM / YY"
                          className="h-8 rounded-md border-slate-200 bg-white px-2.5 text-[11px] text-slate-800 placeholder:text-slate-300 focus-visible:border-primary focus-visible:ring-primary/20"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[9px] font-medium text-slate-500">
                          CVC
                        </label>

                        <Input
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          placeholder="123"
                          maxLength={4}
                          className="h-8 rounded-md border-slate-200 bg-white px-2.5 text-[11px] text-slate-800 placeholder:text-slate-300 focus-visible:border-primary focus-visible:ring-primary/20"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <div className="flex gap-3">
                      <Building2
                        size={18}
                        className="mt-0.5 shrink-0 text-primary"
                      />

                      <div>
                        <p className="text-xs font-semibold text-slate-800">
                          Bank transfer
                        </p>

                        <p className="mt-1 text-[10px] leading-4 text-slate-500">
                          After placing the order, you&apos;ll receive the bank
                          transfer instructions.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Pay */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-5 h-9 w-full rounded-md bg-primary text-[11px] font-medium text-white shadow-none hover:bg-primary/90"
                >
                  <LockKeyhole size={11} />

                  {loading
                    ? "Processing..."
                    : `Pay $${ordersData.price.toLocaleString()}`}
                </Button>

                {/* Security */}
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-1 text-[8px] text-slate-400">
                    <ShieldCheck size={10} className="text-primary" />
                    Your payment is encrypted and processed securely.
                  </div>

                  <p className="mt-1 text-[8px] text-slate-400">
                    Order {ordersData.orderId} • {ordersData.brand}
                  </p>
                </div>
              </form>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}

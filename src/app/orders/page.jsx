"use client";
import Container from "@/components/Container/Container";
import Pagination from "@/components/shared/Pagination";
import { OrderCardSkeleton } from "@/components/skeleton/OrderCardSkeleton";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { BASE_URL } from "@/lib/base_url";
import PrivateRoute from "@/PrivateRoute/PrivateRoute";
import { Building2Icon, CreditCardIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function OrderPageContent() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, logout } = useAuth();

  const limit = 15;
  const fetchOrder = async (user, limit, page) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/order/list?per_page=${limit}&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        },
      );
      const data = await res.json();
      if (!res.ok) {
        throw data;
      }
      if (data.success) {
        console.log(data?.data);
        setOrdersData(data?.data);

        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchOrder(user, limit, page);
  }, [user, page]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
  }, []);

  const orderData = ordersData?.data ?? [];

  return (
    <PrivateRoute>
      <Container>
        <div className="pt-20 w-full flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">All Your Orders Here </h2>
            <p className="text-xs text-muted-foreground">
              Total Order: {orderData?.length}
            </p>
          </div>
          <div>
            <Button onClick={() => logout()} className="cursor-pointer">
              Logout
            </Button>
          </div>
        </div>
        <div className="py-10 lg:pb-20 space-y-6">
          {loading ? (
            <>
              <OrderCardSkeleton />
              <OrderCardSkeleton />
            </>
          ) : (
            orderData?.map((order) => (
              <div key={order.id}>
                <div className="w-full shadow bg-white rounded-xl overflow-hidden">
                  <div className="p-5 pb-4 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground tracking-wider">
                        # {order.order_number}
                      </span>
                      <span
                        className={`capitalize px-2.5 py-0.5 text-xs font-semibold rounded-full border ${
                          order.status === "pending"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-emerald-50 text-emerald-700 border-emerald-200"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">
                      {order.package?.name}
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                      Ordered on{" "}
                      {new Date(order.started_at).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                          Total Paid
                        </p>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <p className="text-2xl font-extrabold text-slate-900">
                            <span className="text-2xl font-black leading-tight text-foreground">
                              {order?.order_discount && (
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: order?.currency,
                                  }}
                                  className="text-black"
                                />
                              )}
                            </span>

                            {order?.order_discount &&
                              parseFloat(
                                order?.amount -
                                  parseFloat(order?.amount || 0) *
                                    (parseFloat(
                                      order?.order_discount?.discount_amount,
                                    ) /
                                      100),
                              )}
                          </p>
                          {order?.currency && (
                            <span
                              className={`${order?.order_discount?.email ? "line-through text-sm text-muted-foreground" : "text-2xl font-extrabold text-slate-900"}`}
                            >
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: order?.currency,
                                }}
                                className="text-black"
                              />
                              {parseFloat(order?.amount || 0).toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      {order?.order_discount?.email && (
                        <span className="bg-red-50 text-red-700 border border-red-100 flex items-center gap-1 font-bold rounded-lg text-xs px-2 py-1">
                          {parseInt(order?.order_discount?.discount_amount)}%
                          OFF
                        </span>
                      )}
                    </div>

                    {order?.order_discount && (
                      <div className="flex items-start gap-2 text-xs text-amber-800">
                        <p>
                          Discount offer terms valid until:{" "}
                          <span className="font-semibold">
                            {new Date(
                              order?.order_discount?.discount_expire_at,
                            ).toLocaleDateString()}
                          </span>
                        </p>
                      </div>
                    )}

                    <div className="space-y-2 pt-1 text-xs">
                      <div className="flex justify-between items-center text-muted-foreground">
                        <span className="text-muted-foreground">
                          Payment Method
                        </span>
                        <span className="font-medium capitalize flex items-center gap-1.5">
                          {order?.payment_type === "manual" ? (
                            <>
                              <Building2Icon size={14} /> Bank{" "}
                            </>
                          ) : (
                            <>
                              <CreditCardIcon size={14} /> Stripe{" "}
                            </>
                          )}{" "}
                          Transfer
                        </span>
                      </div>
                      {order.manual_payment?.transaction_id && (
                        <div className="flex justify-between items-center text-muted-foreground">
                          <span className="text-muted-foreground">
                            Transaction ID
                          </span>
                          <span className="font-mono font-semibold text-muted-foreground">
                            {order.manual_payment?.transaction_id}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {order.manual_payment?.payment_document && (
                    <div className="flex items-center justify-end px-4 pb-4">
                      <Button
                        variant="outline"
                        className="text-muted-foreground"
                        asChild
                      >
                        <Link
                          href={order.manual_payment.payment_document}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Receipt Document
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          <Pagination isLoading={loading} totalPages={ordersData?.last_page} />
        </div>
      </Container>
    </PrivateRoute>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full flex items-center justify-center">Loading...</div>}>
      <OrderPageContent />
    </Suspense>
  );
}

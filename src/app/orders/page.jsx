"use client";
import Container from "@/components/Container/Container";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/hooks/useAuth";
import { BASE_URL } from "@/lib/base_url";
import PrivateRoute from "@/PrivateRoute/PrivateRoute";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrderPage() {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, logout } = useAuth();

  const fetchOrder = async (user) => {
    try {
      const res = await fetch(`${BASE_URL}/order/list`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const data = await res.json();
      if (data.success) {
        setOrderData(data?.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder(user);
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

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
        <div className="grid grid-cols-1 gap-6 mt-10">
          {orderData?.map((order) => {
            const img = order.manual_payment.payment_document;
            console.log(order);
            return (
              <div key={order.id}>
                <div className="w-full border border-slate-200 shadow-sm bg-white rounded-xl overflow-hidden">
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
                          <span className="text-2xl font-extrabold text-slate-900">
                            $
                            {parseFloat(
                              order.manual_payment?.amount || 0,
                            ).toFixed(2)}
                          </span>
                          {order.discounts?.length > 0 && (
                            <span className="text-sm text-muted-foreground line-through">
                              $
                              {(
                                parseFloat(order.manual_payment?.amount || 0) /
                                (1 -
                                  parseFloat(
                                    order.discounts[0].discount_amount,
                                  ) /
                                    100)
                              ).toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      {order.discounts?.length > 0 && (
                        <span className="bg-red-50 text-red-700 border border-red-100 flex items-center gap-1 font-bold rounded-lg text-xs px-2 py-1">
                          {parseInt(order.discounts[0].discount_amount)}% OFF
                        </span>
                      )}
                    </div>

                    {order.discounts?.length > 0 && (
                      <div className="flex items-start gap-2 text-xs text-amber-800">
                        <p>
                          Discount offer terms valid until:{" "}
                          <span className="font-semibold">
                            {new Date(
                              order.discounts[0].discount_expire_at,
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
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {order.manual_payment?.payment_type} Transfer
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-muted-foreground">
                        <span className="text-muted-foreground">
                          Transaction ID
                        </span>
                        <span className="font-mono font-semibold text-muted-foreground">
                          {order.manual_payment?.transaction_id}
                        </span>
                      </div>
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
            );
          })}
        </div>
      </Container>
    </PrivateRoute>
  );
}

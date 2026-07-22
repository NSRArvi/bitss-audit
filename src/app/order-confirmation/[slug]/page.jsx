"use client";
import { useParams, useSearchParams } from "next/navigation";

import OrderConfirmation from "@/components/OrderConfirmation/OrderConfirmation";

export default function OrderConfirmationPage() {
  const params = useParams();
  const slug = params?.slug;

  const searchParams = useSearchParams();
  const clientSecret = searchParams.get("client_secret");

  return <OrderConfirmation slug={slug} clientSecret={clientSecret} />;
}

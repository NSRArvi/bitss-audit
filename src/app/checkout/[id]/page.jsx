import React, { Suspense } from "react";
import CheckoutLayout from "@/components/checkout/CheckoutLayout";
import Container from "@/components/Container/Container";
import { BASE_URL } from "@/lib/base_url";

export default async function page({ params }) {
  const { id } = await params;
  const res = await fetch(`${BASE_URL}/checkout/${id}`, { cache: "no-store" });
  const data = await res.json();

  const orderData = data?.data?.order;

  return (
    <div className="pt-20">
      <Container>
        <Suspense fallback={<p>loading from page.jsx...</p>}>
          <CheckoutLayout orderData={orderData} />
        </Suspense>
      </Container>
    </div>
  );
}

"use client";

import { useParams } from "next/navigation";
import Container from "@/components/Container/Container";
import OrderForm from "@/components/shared/OrderForm";

export default function OrderPage() {
  const params = useParams();
  const slug = params?.slug;

  return (
    <Container>
      <OrderForm title={slug} />
    </Container>
  );
}

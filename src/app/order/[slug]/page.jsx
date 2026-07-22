"use client";

import { useParams } from "next/navigation";
import Container from "@/components/Container/Container";
import OrderForm from "@/components/OrderForm/OrderForm";
import PrivateRoute from "@/PrivateRoute/PrivateRoute";

export default function OrderPage() {
  const params = useParams();
  const slug = params?.slug;
  console.log(slug);

  return (
    <div className="bg-[#FAF9F6]">
      <PrivateRoute>
        <Container>
          <OrderForm title={slug} />
        </Container>
      </PrivateRoute>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import AuditCard from "./AuditCard";
import { BASE_URL } from "@/lib/base_url";

export default function AuditProducts() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/public/package/list`);
      const data = await res.json();
      if (data.success) {
        setProducts(data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 pb-4 relative items-start">
      {products?.map((product, idx) => (
        <AuditCard key={product.id ?? idx} product={product} idx={idx} />
      ))}
    </div>
  );
}

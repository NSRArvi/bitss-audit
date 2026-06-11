"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import { OrderModal } from "@/components/OrderModal";

export default function NavbarWrapper() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar onOpenDialog={() => setOpen(true)} />
      <OrderModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

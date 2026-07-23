"use client";

import { useState } from "react";
import { OrderModal } from "@/components/OrderModal";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function NavbarWrapper() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <NavigationBar onOpenDialog={() => setOpen(true)} />
      <OrderModal
        open={open}
        setOpen={setOpen}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

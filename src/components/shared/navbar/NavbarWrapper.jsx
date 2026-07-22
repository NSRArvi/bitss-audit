"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import { OrderModal } from "@/components/OrderModal";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function NavbarWrapper() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* <Navbar onOpenDialog={() => setOpen(true)} /> */}
      <NavigationBar onOpenDialog={() => setOpen(true)} />
      <OrderModal
        open={open}
        setOpen={setOpen}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

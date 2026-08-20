"use client";

import CurrencyModal from "@/components/CurrencyModal/CurrencyModal";
import { useCurrency } from "@/hooks/useCurrency";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const { selectedCurrency } = useCurrency();

  return (
    <>
      <div>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 cursor-pointer text-sm border px-3 py-1.5 rounded-md bg-transparent"
        >
          <span
            dangerouslySetInnerHTML={{ __html: selectedCurrency?.icon || "" }}
          />
          {selectedCurrency?.abriviation_code || "Currency"}{" "}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* <CurrencyModal open={open} setOpen={setOpen} allowClose /> */}
    </>
  );
}

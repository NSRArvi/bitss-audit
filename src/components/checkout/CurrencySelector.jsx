import Image from "next/image";
import { CURRENCIES } from "@/data/currencies";

export default function CurrencySelector({ currency, setCurrency }) {
  return (
    <div className="pb-6 pt-10">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
        Currency
      </p>
      <div className="flex flex-wrap justify-between">
        {CURRENCIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCurrency(c.id)}
            className={`px-6 py-2 flex items-center gap-2 rounded-full border text-xs font-medium transition-all cursor-pointer
              ${
                currency === c.id
                  ? "border-primary/90 bg-blue-50 text-primary"
                  : "border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
          >
            <Image
              src={c.src}
              alt={c.label}
              width={30}
              height={30}
              className="w-6 h-6"
            />{" "}
            {c.label}
            {(c.id === "spamp" && <span>-30%</span>) ||
              (c.id === "usff" && <span>-30%</span>) ||
              (c.id === "usdc" && <span>-5%</span>)}
          </button>
        ))}
      </div>
    </div>
  );
}

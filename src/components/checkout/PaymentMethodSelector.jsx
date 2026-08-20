import { CreditCard, Building2 } from "lucide-react";

const METHODS = [
  { id: "bank", label: "Bank Transfer", icon: Building2 },
  { id: "stripe", label: "Stripe", icon: CreditCard },
];

export default function PaymentMethodSelector({
  paymentMethod,
  setPaymentMethod,
  isCrypto,
}) {
  if (isCrypto) return null;

  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
        Payment Method
      </p>
      <div className="flex gap-2">
        {METHODS.map((m) => {
          const Icon = m.icon;
          return (
            <button
              key={m.id}
              onClick={() => setPaymentMethod(m.id)}
              className={`flex items-center gap-2 px-4 py-5 rounded-md border text-sm font-medium transition-all w-full 
                ${
                  paymentMethod === m.id
                    ? "border-primary/90 bg-blue-50 text-primary"
                    : "border-gray-200 text-gray-600 hover:border-gray-400"
                }`}
            >
              <Icon size={16} />
              {m.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

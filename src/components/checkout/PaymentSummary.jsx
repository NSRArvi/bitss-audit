export default function PaymentSummary({
  order,
  totalPrice,
  finalDiscount,
  selectedCurrency,
}) {
  const basePrice = order?.price_proposal?.amount;
  const discountAmount = basePrice - totalPrice;

  return (
    <div className="rounded-lg border border-gray-200 p-5 mb-10">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-4">
        Payment Summary
      </p>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>{order?.service?.name}</span>
          <span>
            {selectedCurrency.symbol} {basePrice?.toLocaleString()}
          </span>
        </div>

        {finalDiscount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount ({finalDiscount}%)</span>
            <span>
              - {selectedCurrency.symbol} {discountAmount?.toLocaleString()}
            </span>
          </div>
        )}

        <div className="border-t pt-3 flex justify-between font-semibold text-gray-900 text-base">
          <span>Total Due</span>
          <span>
            <span className="text-xs text-gray-400 mr-1">
              {selectedCurrency.id.toUpperCase()}
            </span>
            {totalPrice?.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

import { useAuth } from "@/hooks/useAuth";
import { BASE_URL } from "@/lib/base_url";
import { useForm, Controller } from "react-hook-form";

export default function BankTransferForm({
  orderId,
  totalPrice,
  selectedCurrency,
  bitssCustomer,
}) {
  const { user } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      accountNumber: "",
      transactionId: "",
      amount: totalPrice,
      document: null,
    },
  });
  console.log({ bitssCustomer });
  const isBitssCustomer = !!bitssCustomer?.data?.amount;
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("user_id", user?.user?.id);
    formData.append("payment_type", "manual");
    // formData.append("orderId", orderId);
    formData.append("accountNumber", data.accountNumber);
    formData.append("transactionId", data.transactionId);
    formData.append("amount", data.amount);
    formData.append("document", data.document[0]);
    formData.append("bitss_customer_discount", isBitssCustomer);
    isBitssCustomer && formData.append("email", bitssCustomer?.email);
    formData.append("country_id", 1);
    formData.append("payment_method", "bank");
    formData.append("payment_method_id", 1);
    formData.append("package_id", 1);

    const res = await fetch(`${BASE_URL}/order`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Payment submission failed");
    return res.json();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Account Number */}
      <div>
        <label className="text-sm text-gray-600 mb-1 block">
          Account Number
        </label>
        <Controller
          name="accountNumber"
          control={control}
          rules={{ required: "Account number is required" }}
          render={({ field }) => (
            <input
              {...field}
              placeholder="Enter account number"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          )}
        />
        {errors.accountNumber && (
          <p className="text-xs text-red-500 mt-1">
            {errors.accountNumber.message}
          </p>
        )}
      </div>

      {/* Transaction ID */}
      <div>
        <label className="text-sm text-gray-600 mb-1 block">
          Transaction ID
        </label>
        <Controller
          name="transactionId"
          control={control}
          rules={{ required: "Transaction ID is required" }}
          render={({ field }) => (
            <input
              {...field}
              placeholder="Enter transaction ID"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          )}
        />
        {errors.transactionId && (
          <p className="text-xs text-red-500 mt-1">
            {errors.transactionId.message}
          </p>
        )}
      </div>

      {/* Amount (readonly) */}
      <div>
        <label className="text-sm text-gray-600 mb-1 block">Amount</label>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              readOnly
              className="w-full border border-gray-100 bg-gray-50 rounded-md px-3 py-2 text-sm text-gray-500 cursor-not-allowed"
              value={`${selectedCurrency.symbol} ${totalPrice?.toLocaleString()}`}
            />
          )}
        />
      </div>

      {/* Document Upload */}
      <div>
        <label className="text-sm text-gray-600 mb-1 block">
          Payment Document
        </label>
        <Controller
          name="document"
          control={control}
          rules={{ required: "Document is required" }}
          render={({ field: { onChange, ref } }) => (
            <input
              ref={ref}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => onChange(e.target.files)}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 file:text-sm"
            />
          )}
        />
        {errors.document && (
          <p className="text-xs text-red-500 mt-1">{errors.document.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2.5 rounded-md text-sm font-medium transition-all disabled:opacity-60"
      >
        {isSubmitting
          ? "Submitting..."
          : `Pay ${selectedCurrency.symbol} ${totalPrice?.toLocaleString()}`}
      </button>
    </form>
  );
}

// features/checkout/components/CustomerVerifyModal.jsx
"use client";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import { BASE_URL } from "@/lib/base_url";

export default function CustomerVerifyModal({
  onVerified,
  onSkip,
  bitssCustomer,
  setBitssCustomer,
}) {
  const { user } = useAuth();
  const [step, setStep] = useState("ask");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = async ({ email }) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${BASE_URL}/order/apply-discount/${email}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setError("No BITSS account found with this email.");
        return;
      }
      setBitssCustomer({ ...data, email });

      onVerified(data?.data?.amount);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onSkip}>
      <DialogContent
        className="max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
      >
        {step === "ask" && (
          <>
            <DialogHeader>
              <DialogTitle>Are you a BITSS customer?</DialogTitle>
              <DialogDescription>
                Existing customers get an exclusive discount on their order.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setStep("email")}
                className="flex-1 bg-blue-700 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-800"
              >
                Yes
              </button>
              <button
                onClick={onSkip}
                className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-md text-sm font-medium hover:border-gray-400"
              >
                No
              </button>
            </div>
          </>
        )}

        {step === "email" && (
          <>
            <DialogHeader>
              <DialogTitle>Verify your BITSS account</DialogTitle>
              <DialogDescription>
                Enter your registered BITSS email to unlock your discount.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
              <div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
                {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-700 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-800 disabled:opacity-60"
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>
                <button
                  type="button"
                  onClick={onSkip}
                  className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-md text-sm font-medium hover:border-gray-400"
                >
                  Skip
                </button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

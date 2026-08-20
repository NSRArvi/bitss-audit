"use client";
import { useState } from "react";
import BankTransferForm from "./BankTransferForm";
import CurrencySelector from "./CurrencySelector";
import CustomerVerifyModal from "./CustomerVerifyModal";
import PaymentMethodSelector from "./PaymentMethodSelector";
import PaymentSummary from "./PaymentSummary";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";
import { useCheckoutFlow } from "@/hooks/useCheckoutFlow";

export default function CheckoutLayout({ orderData }) {
  const [showModal, setShowModal] = useState(true);

  const basePrice = orderData?.price_proposal?.amount;
  const checkout = useCheckoutFlow(basePrice);
  console.log(checkout.bitssCustomer);

  const handleVerified = (discount) => {
    checkout.setCustomerDiscount(discount);
    setShowModal(false);
  };

  const handleSkip = () => setShowModal(false);

  const slug = "enterprise-audit";
  return (
    <>
      {showModal && (
        <CustomerVerifyModal
          onVerified={handleVerified}
          onSkip={handleSkip}
          setBitssCustomer={checkout.setBitssCustomer}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <ServiceDetailsSidebar slug={slug} />
        <div>
          <div className="pt-6">
            {!showModal && checkout.customerDiscount === 0 && (
              <div className="flex items-center justify-between bg-blue-50 border border-blue-100 rounded-lg px-4 py-3  mb-4">
                <p className="text-sm text-primary">
                  🎁 BITSS customer? You may be eligible for a discount.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-sm font-medium text-primary/90 underline underline-offset-2 hover:text-primary cursor-pointer"
                >
                  Claim discount
                </button>
              </div>
            )}
          </div>
          <CurrencySelector
            currency={checkout.currency}
            setCurrency={checkout.setCurrency}
          />
          <PaymentMethodSelector
            paymentMethod={checkout.paymentMethod}
            setPaymentMethod={checkout.setPaymentMethod}
            isCrypto={checkout.isCrypto}
          />
          <PaymentSummary
            order={orderData}
            totalPrice={checkout.totalPrice}
            finalDiscount={checkout.finalDiscount}
            selectedCurrency={checkout.selectedCurrency}
          />
          {checkout.paymentMethod === "bank" && !checkout.isCrypto && (
            <BankTransferForm
              orderId={orderData?.id}
              totalPrice={checkout.totalPrice}
              selectedCurrency={checkout.selectedCurrency}
              bitssCustomer={checkout.bitssCustomer}
            />
          )}
        </div>
      </div>
    </>
  );
}

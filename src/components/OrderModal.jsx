import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import OrderForm from "./shared/OrderForm";

export function OrderModal({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[calc(100dvh-5rem)] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Crypto Audit Order</DialogTitle>
          <DialogDescription>
            Complete your order details below. All submissions are confidential
            and encrypted.
          </DialogDescription>
        </DialogHeader>
        <OrderForm />
      </DialogContent>
    </Dialog>
  );
}

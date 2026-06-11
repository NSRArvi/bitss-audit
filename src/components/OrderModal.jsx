import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OrderForm from "./shared/OrderForm";

export function OrderModal({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
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

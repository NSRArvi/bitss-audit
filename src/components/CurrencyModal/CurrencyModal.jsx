"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useCurrency } from "@/hooks/useCurrency";

export default function CurrencyModal({ open, setOpen, allowClose = false }) {
  const {
    currencies,
    currenciesLoading,
    currenciesError,
    setSelectedCurrency,
  } = useCurrency();

  const handleSelectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => allowClose && setOpen(val)}>
      <DialogContent
        className={allowClose ? "" : "[&>button]:hidden"}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl">Select Your Currency!</DialogTitle>

          {currenciesLoading && (
            <p className="text-sm text-muted-foreground py-6 text-center">
              Loading currencies...
            </p>
          )}

          {!currenciesLoading && currenciesError && (
            <p className="text-sm text-red-500 py-6 text-center">
              Couldn’t load currencies. Please refresh and try again.
            </p>
          )}

          {!currenciesLoading && !currenciesError && currencies.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-6">
              {currencies.map((currency) => (
                <button
                  type="button"
                  key={currency.id}
                  onClick={() => handleSelectCurrency(currency)}
                  className="flex flex-col border p-4 mx-auto text-center w-full shadow-xs rounded-md gap-2 cursor-pointer hover:border-primary transition-colors"
                >
                  <span className="text-xs text-muted-foreground">
                    <span
                      dangerouslySetInnerHTML={{ __html: currency.icon }}
                      className="text-black"
                    />
                  </span>
                  <span className="text-xs font-bold">
                    {currency.country_name}
                  </span>
                  <span className="text-xs">{currency.abriviation_code}</span>
                </button>
              ))}
            </div>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

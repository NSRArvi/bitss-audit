"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { BASE_URL } from "@/lib/base_url";

const STORAGE_KEY = "selected_currency";

export const CurrencyContext = createContext(undefined);

export function CurrencyProvider({ children }) {
  const [currencies, setCurrencies] = useState([]);
  const [currenciesLoading, setCurrenciesLoading] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setSelectedCurrency(JSON.parse(stored));
    setMounted(true);
  }, []);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BASE_URL}/public/country/list`);
        const data = await res.json();
        if (data.success) setCurrencies(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setCurrenciesLoading(false);
      }
    }
    load();
  }, []);

  function selectCurrency(currency) {
    setSelectedCurrency(currency);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currency));
  }

  const value = useMemo(
    () => ({
      currencies,
      currenciesLoading,
      selectedCurrency,
      setSelectedCurrency: selectCurrency,
      hasSelectedCurrency: mounted && !!selectedCurrency,
    }),
    [currencies, currenciesLoading, selectedCurrency, mounted],
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

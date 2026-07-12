export function getProductPrice(product, selectedCurrency) {
  const prices = product?.prices || [];

  if (!selectedCurrency || prices.length === 0) {
    return { price: null, priceObj: null, isFallback: false, available: false };
  }

  const match =
    prices.find((p) => p.country_id === selectedCurrency.id) ??
    prices.find(
      (p) => p.country?.country_name === selectedCurrency.country_name,
    );

  if (match) {
    return {
      price: match.price,
      priceObj: match,
      isFallback: false,
      available: true,
    };
  }

  const fallback = prices[0];
  return {
    price: fallback?.price ?? null,
    priceObj: fallback ?? null,
    isFallback: true,
    available: !!fallback,
  };
}

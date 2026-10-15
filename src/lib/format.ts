export function formatPrice(priceFrom?: number): string {
  return priceFrom ? `From USD ${priceFrom} per person` : "Price on request";
}

/** "2026-09" → "September 2026" */
export function formatMonth(yearMonth: string): string {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1)).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

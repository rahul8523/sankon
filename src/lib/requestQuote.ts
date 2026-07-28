export function openRequestQuote(detail?: { product?: string }) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("openRequestQuote", { detail }));
}

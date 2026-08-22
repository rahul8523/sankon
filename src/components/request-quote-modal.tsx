import { useEffect, useState } from "react";
import { toast } from "sonner";

import { submitInquiry } from "@/lib/submitInquiry";
import { phoneValidationProps } from "@/lib/phoneValidation";

export function RequestQuoteModal() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<string | undefined>();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ product?: string }>).detail ?? {};
      setProduct(detail.product);
      setOpen(true);
    };

    window.addEventListener("openRequestQuote", handler);
    return () => window.removeEventListener("openRequestQuote", handler);
  }, []);

  function close() {
    if (submitting) return;
    setOpen(false);
    setProduct(undefined);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const toastId = toast.loading("Sending your quote request...");
    setSubmitting(true);

    try {
      await submitInquiry({
        formType: "Request a Quote",
        product: product || String(data.get("product") || ""),
        name: String(data.get("name") || ""),
        company: String(data.get("company") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        message: String(data.get("message") || ""),
        website: String(data.get("website") || ""),
      });
      form.reset();
      setOpen(false);
      setProduct(undefined);
      toast.success("Thank you! Your quote request has been sent.", { id: toastId });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Quote request could not be sent.", { id: toastId });
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button className="absolute inset-0 bg-black/50" onClick={close} aria-label="Close quote form" />
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Request a Quote</h3>
            <p className="mt-1 text-sm text-[var(--ink-soft)]">Fill the form and our sales team will contact you shortly.</p>
          </div>
          <button onClick={close} disabled={submitting} className="text-xl text-[var(--ink-soft)] hover:text-[var(--ink)]">×</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input type="hidden" name="product" value={product ?? ""} />
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <QuoteField label="Full name" name="name" required />
          <QuoteField label="Company" name="company" />
          <QuoteField label="Email" name="email" type="email" required />
          <QuoteField label="Phone" name="phone" type="tel" required />

          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-semibold">Message / Requirements</label>
            <textarea name="message" rows={4} className="w-full rounded-md border px-3 py-2" />
          </div>

          <div className="mt-2 flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-[var(--ink-soft)]">You can also attach files later via email.</p>
            <div className="flex gap-3">
              <button type="button" onClick={close} disabled={submitting} className="rounded-md border px-4 py-2 disabled:opacity-60">Cancel</button>
              <button type="submit" disabled={submitting} className="rounded-md bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60">
                {submitting ? "Sending..." : "Send Request"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function QuoteField({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border px-3 py-2"
        {...(type === "tel" ? phoneValidationProps : {})}
      />
    </div>
  );
}

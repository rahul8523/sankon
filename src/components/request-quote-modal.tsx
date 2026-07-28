import { useEffect, useState } from "react";

export function RequestQuoteModal() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handler = (e: Event) => {
      // @ts-ignore
      const detail = e?.detail ?? {};
      setProduct(detail.product);
      setOpen(true);
    };

    window.addEventListener("openRequestQuote", handler as EventListener);
    return () => window.removeEventListener("openRequestQuote", handler as EventListener);
  }, []);

  function close() {
    setOpen(false);
    setProduct(undefined);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    // In real app: send to API. For now log and close.
    console.log("Request Quote submitted", { product, ...data });
    close();
    alert("Thank you — your quote request has been received.");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={close} />

      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Request a Quote</h3>
            <p className="mt-1 text-sm text-[var(--ink-soft)]">Fill the form and our sales team will contact you shortly.</p>
          </div>
          <button onClick={close} className="text-[var(--ink-soft)] hover:text-[var(--ink)]">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2">
          <input type="hidden" name="product" value={product ?? ""} />

          <div>
            <label className="block text-xs font-semibold mb-1">Full name</label>
            <input name="name" required className="w-full rounded-md border px-3 py-2" />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Company</label>
            <input name="company" className="w-full rounded-md border px-3 py-2" />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Email</label>
            <input name="email" type="email" required className="w-full rounded-md border px-3 py-2" />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Phone</label>
            <input name="phone" className="w-full rounded-md border px-3 py-2" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold mb-1">Message / Requirements</label>
            <textarea name="message" rows={4} className="w-full rounded-md border px-3 py-2" />
          </div>

          <div className="md:col-span-2 flex items-center justify-between gap-4 mt-2">
            <div className="text-sm text-[var(--ink-soft)]">You can also attach files after submitting via email.</div>
            <div className="flex gap-3">
              <button type="button" onClick={close} className="rounded-md border px-4 py-2">Cancel</button>
              <button type="submit" className="rounded-md bg-black px-4 py-2 text-white">Send Request</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import { Phone, MessageCircle, FileText } from "lucide-react";

export function MobileCtaBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[var(--hairline)] bg-[var(--ivory)]/95 backdrop-blur-md">
      <div className="grid grid-cols-3 text-[11px] font-medium">
        <a
          href="tel:09971615537"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[var(--ink)] border-r border-[var(--hairline)]"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href="https://wa.me/919971615537"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[var(--ink)] border-r border-[var(--hairline)]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[var(--ink)] text-[var(--ivory)]"
        >
          <FileText className="h-4 w-4" />
          Get Quotation
        </a>
      </div>
    </div>
  );
}

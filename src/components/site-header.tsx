import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const productCategories = [
  "Slam2000", "Cable/Pipe locator", "Outdoor Laser Measure", "Digital Laser Tape Measure",
  "Space Master Series", "Auto Levels", "Total Stations", "Digital Theodolites",
  "Survey Accessories", "Auto Level", "Laser Distance Meters", "Laser Levels",
  "Total Station", "GNSS RTK", "Marine & Hydrographic", "Soil Testing",
  "Aggregate Testing", "Concrete Testing", "Cement Testing", "Asphalt & Bitumen Testing",
  "Single Frequency", "HyDrone", "Dual Frequency", "Single Frequency Gpr",
  "Triple Frequency", "SELF-LEVELING LEVEL", "Slam200", "Slam100",
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${scrolled
        ? "bg-[var(--ivory)]/90 backdrop-blur-md border-b border-[var(--hairline)]"
        : "bg-[var(--ivory)] border-b border-transparent"
        }`}
    >
      {/* Utility strip */}
      <div className="hidden md:block border-b border-[var(--hairline)] bg-[#ffc800] py-3">
        <div className="container-page flex h-8 items-center justify-between eyebrow">
          <span>Authorized Distributor & Service Centre - Trimble Nikon Spectra Precision</span>
          <div className="flex items-center gap-6">
            <a href="tel:09971615537" className="hover:text-[var(--ink)] transition-colors">+91 99716 15537</a>
            <a href="mailto:nikon@sankon.in" className="hover:text-[var(--ink)] transition-colors">nikon@sankon.in</a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-page flex h-20 items-center justify-between gap-8">
        <a href="/" className="flex items-baseline gap-2 shrink-0">
          <img src="/upload/logo/logo.png" alt="HTS-521L10 Total Station" />
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <NavItem label="Home" />
          <ProductsDropdown />
          <NavItem label="Service Centre" />
          <NavItem label="About" />
          <NavItem label="Clients" />
          <NavItem label="Contact" />
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
            <Search className="h-4 w-4" />
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--ink)] pl-5 pr-2 py-2 text-sm font-medium text-[var(--ivory)] hover:bg-[var(--cobalt)] transition-colors group"
          >
            Enquiry Now
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--ink)] group-hover:bg-[var(--ivory)] transition">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5h8m0 0L5 1m4 4L5 9" stroke="currentColor" strokeWidth="1.4" /></svg>
            </span>
          </a>
          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--ink)] hover:bg-[var(--ivory-deep)]"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--hairline)] bg-[var(--ivory)]">
          <div className="container-page py-3 flex flex-col text-sm">
            {["Home", "Products", "Service Centre", "About", "Clients", "Contact"].map((l) => (
              <a key={l} href="#" className="py-3 text-[var(--ink)] border-b border-[var(--hairline)] last:border-0">{l}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <a href="#" className="relative text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--cobalt)] hover:after:w-full after:transition-all">
      {label}
    </a>
  );
}

function ProductsDropdown() {
  return (
    <div className="relative group">
      <button className="inline-flex items-center gap-1 text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors">
        Products <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px]">
        <div className="rounded-md border border-[var(--hairline)] bg-[var(--paper)] shadow-[var(--shadow-card)] p-7 grid grid-cols-3 gap-x-8 gap-y-2 max-h-[440px] overflow-auto">
          <div className="col-span-3 eyebrow pb-3 mb-2 border-b border-[var(--hairline)]">Browse · 28 Categories</div>
          {productCategories.map((c, i) => (
            <a key={c} href="#categories" className="flex items-baseline gap-3 text-sm text-[var(--ink-soft)] hover:text-[var(--cobalt)] py-1 transition-colors">
              <span className="font-mono-tech text-[10px] text-[var(--muted-foreground)] w-6">{String(i + 1).padStart(2, "0")}</span>
              <span className="truncate">{c}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

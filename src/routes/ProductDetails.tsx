import { useState } from "react";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import {
  ChevronRight,
  ShoppingBag,
  Heart,
  Share2,
  Search,
  User,
  Menu,
  Check,
  Download,
  Phone,
  Mail,
  Shield,
  Truck,
  Award,
  Headphones,
  Minus,
  Plus,
  ArrowRight,
} from "lucide-react";

const IMAGES = [
  "/upload/normalImag/ProdImg500006.png",
  "/upload/normalImag/ProdImg176340.png",
  "/upload/normalImag/ProdImg285641.png",
  "/upload/normalImag/ProdImg458836.png",
];

const SPECS = [
  { label: "Reflectorless Range", value: "1000 m" },
  { label: "Angle Accuracy", value: "2″" },
  { label: "Display", value: '2.8" 240×320 HD Color' },
  { label: "Battery", value: "Li-ION 3000 mAh" },
  { label: "Runtime", value: "18+ hours" },
  { label: "Tilt Sensor", value: "Dual-axis" },
  { label: "Charging", value: "Type-C" },
  { label: "Weight", value: "5.2 kg" },
];

const FEATURES = [
  { title: "New Optical Structure", body: "Redesigned optics for superior light gathering and edge-to-edge clarity in field conditions." },
  { title: "Reflectorless 1000m", body: "Industry-leading non-prism measurement reaches up to one kilometer with millimetre precision." },
  { title: "Sunlight-Readable Display", body: "2.8-inch HD color screen at 240×320 stays legible under direct sunlight on open sites." },
  { title: "All-Day Battery", body: "3000 mAh Li-ION with LED capacity gauge and Type-C charging. Over 18 hours per charge." },
  { title: "Trigger Key", body: "One-touch capture on the side panel speeds repetitive measurement workflows." },
  { title: "Self-Calibration", body: "Built-in multi-function calibration software keeps the instrument accurate between services." },
];

export default function ProductPage() {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"overview" | "features" | "specs" | "brochure">("overview");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center gap-2 text-xs text-muted-foreground font-mono uppercase tracking-wider">
          <a href="#" className="hover:text-foreground">Home</a>
          <ChevronRight className="h-3 w-3" />
          <a href="#" className="hover:text-foreground">Products</a>
          <ChevronRight className="h-3 w-3" />
          <a href="#" className="hover:text-foreground">Hi-Target</a>
          <ChevronRight className="h-3 w-3" />
          <a href="#" className="hover:text-foreground">Total Stations</a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">HTS-521L10</span>
        </div>
      </div>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square bg-surface rounded-xl border border-border overflow-hidden group">
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-2 py-1 rounded">In Stock</span>
                <span className="font-mono text-[10px] uppercase tracking-widest bg-accent text-accent-foreground px-2 py-1 rounded">8% Off</span>
              </div>
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <button className="h-9 w-9 grid place-items-center rounded-full bg-surface/90 border border-border hover:bg-surface"><Heart className="h-4 w-4" /></button>
                <button className="h-9 w-9 grid place-items-center rounded-full bg-surface/90 border border-border hover:bg-surface"><Share2 className="h-4 w-4" /></button>
              </div>
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <img
                src={IMAGES[active]}
                alt="HTS-521L10 Total Station"
                className="absolute inset-0 w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                View {String(active + 1).padStart(2, "0")} / {String(IMAGES.length).padStart(2, "0")}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
              {IMAGES.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square rounded-lg border bg-surface overflow-hidden transition-all ${
                    active === i ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-muted-foreground/40"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-contain p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>Hi-Target</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>Reflectorless Total Station</span>
            </div>
            <h1 className="mt-3 text-5xl font-bold tracking-tight">HTS-521L10</h1>
            <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
              A new optical structure redesigned for long-range reflectorless work — 1000 m reach, 2″ angular accuracy, and an HD color screen built for sunlight.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1 text-accent">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <span className="text-muted-foreground">4.9 · 126 verified reviews</span>
              <span className="font-mono text-xs text-muted-foreground ml-auto">SKU · HTS-521L10</span>
            </div>

            <div className="mt-8 border-t border-b border-border py-6 flex items-end gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Your Price</div>
                <div className="text-4xl font-bold">₹3,96,000</div>
              </div>
              <div className="pb-1.5">
                <div className="text-sm text-muted-foreground line-through">₹4,32,000</div>
                <div className="text-sm font-semibold text-accent">Save ₹36,000 (8.33%)</div>
              </div>
              <div className="ml-auto text-right pb-1.5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Incl. GST</div>
                <div className="text-xs text-muted-foreground">Free shipping pan-India</div>
              </div>
            </div>

            {/* What's in the box */}
            <div className="mt-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">In the Box</div>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "1× HTS521L10 Main Unit (2\")",
                  "2× BT211 Li-ION Batteries",
                  "1× BC211 Battery Charger",
                  "1× Data Cable & Tools",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity + CTA */}
            <div className="mt-8 flex items-stretch gap-3">
              <div className="flex items-center border border-border rounded-md">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="h-12 w-12 grid place-items-center hover:bg-muted"><Minus className="h-4 w-4" /></button>
                <span className="w-12 text-center font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="h-12 w-12 grid place-items-center hover:bg-muted"><Plus className="h-4 w-4" /></button>
              </div>
              <button className="flex-1 h-12 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Request Quote <ArrowRight className="h-4 w-4" />
              </button>
              <button className="h-12 px-5 border border-border rounded-md font-semibold hover:bg-muted transition-colors">
                Enquire
              </button>
            </div>

            {/* Trust row */}
            <div className="mt-8 grid grid-cols-4 gap-3 text-center">
              {[
                { i: Shield, t: "2-Year Warranty" },
                { i: Truck, t: "Free Shipping" },
                { i: Award, t: "Calibrated" },
                { i: Headphones, t: "Field Support" },
              ].map((x) => (
                <div key={x.t} className="rounded-lg border border-border bg-surface p-3">
                  <x.i className="h-4 w-4 mx-auto mb-1.5 text-primary" />
                  <div className="text-[11px] font-medium leading-tight">{x.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20">
          <div className="border-b border-border flex items-center gap-2 overflow-x-auto">
            {([
              ["overview", "Overview"],
              ["features", "Features & Benefits"],
              ["specs", "Specifications"],
              ["brochure", "Brochures"],
            ] as const).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-5 py-4 text-sm font-semibold relative transition-colors ${
                  tab === k ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                {tab === k && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
              </button>
            ))}
          </div>

          <div className="py-10">
            {tab === "overview" && (
              <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
                <div className="prose-like space-y-5 text-[15px] leading-relaxed text-foreground/90 max-w-2xl">
                  <p className="text-xl text-foreground">
                    Built for surveyors who measure for a living — the HTS-521L10 pairs Hi-Target's new optical engine with field-ready ergonomics.
                  </p>
                  <p>
                    The HTS-521L10 (2\") is a reflectorless total station engineered for high-throughput topographic and construction surveys. Its new optical structure improves contrast and aperture for cleaner returns at long range, while a sunlight-readable HD color display keeps you productive in any condition.
                  </p>
                  <p>
                    A dual-axis tilt sensor compensates instantly. The side trigger key lets you capture without leaving the eyepiece. And a 3000 mAh Li-ION pack with Type-C fast charging keeps the instrument working through full 18-hour shifts.
                  </p>
                </div>
                <aside className="rounded-xl border border-border bg-surface p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">At a Glance</div>
                  <dl className="space-y-3 text-sm">
                    {SPECS.slice(0, 5).map((s) => (
                      <div key={s.label} className="flex justify-between gap-4 border-b border-border/60 pb-2 last:border-0">
                        <dt className="text-muted-foreground">{s.label}</dt>
                        <dd className="font-semibold font-mono text-right">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>
            )}

            {tab === "features" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {FEATURES.map((f, i) => (
                  <div key={f.title} className="rounded-xl border border-border bg-surface p-6 hover:border-primary/40 transition-colors">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      0{i + 1} / 0{FEATURES.length}
                    </div>
                    <h3 className="mt-3 text-xl font-bold tracking-tight">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>
            )}

            {tab === "specs" && (
              <div className="rounded-xl border border-border bg-surface overflow-hidden max-w-3xl">
                <table className="w-full text-sm">
                  <tbody>
                    {SPECS.map((s, i) => (
                      <tr key={s.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                        <td className="px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-muted-foreground w-1/2">{s.label}</td>
                        <td className="px-6 py-3.5 font-semibold">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {tab === "brochure" && (
              <a href="#" className="inline-flex items-center gap-4 rounded-xl border border-border bg-surface p-6 hover:border-primary transition-colors">
                <div className="h-12 w-12 rounded-md bg-primary text-primary-foreground grid place-items-center">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">HTS-521L10 Product Brochure</div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-0.5">PDF · 3.2 MB · English</div>
                </div>
                <ArrowRight className="h-4 w-4 ml-8" />
              </a>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

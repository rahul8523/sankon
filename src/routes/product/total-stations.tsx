import { ArrowRight, Download } from "lucide-react";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";

const nikonProducts = [
  {
    title: "HTS-521L10 Reflectorless Total Station",
    subtitle: "HTS-521L10 has a new optical structure design.",
    image: "/upload/normalImag/ProdImg500006.png",
  },
  {
    title: "HTS-420R Dual-axis Total Station",
    subtitle: "HTS-420R dual-axis reflectorless total station provides an efficient measurement experience.",
    image: "/upload/normalImag/ProdImg176340.png",
  },
  {
    title: "HTS-720 Android Total Station",
    subtitle: "HTS-720 Android Total Station for accurate surveying and construction measurements.",
    image: "/upload/normalImag/ProdImg285641.png",
  },
];

const hitargetProducts = [
  {
    title: "HTS-521L10 Reflectorless Total Station",
    subtitle: "High-precision Hi-Target total station for surveying and construction applications.",
    image: "/upload/normalImag/ProdImg458836.png",
  },
  {
    title: "HTS-620R Android Total Station",
    subtitle: "Advanced Hi-Target Android model with long-range reflectorless measurement.",
    image: "/upload/normalImag/ProdImg755754.png",
  },
  {
    title: "HTS-770R Robotic Total Station",
    subtitle: "High-performance Hi-Target robotic total station for autonomous site workflows.",
    image: "/upload/normalImag/ProdImg875035.png",
  },
];

const specs = [
  { label: "Reflectorless Range", value: "1000 m" },
  { label: "Angle Accuracy", value: "2″" },
  { label: "Display", value: '2.8" 240×320 HD Color' },
  { label: "Battery", value: "Li-ION 3000 mAh" },
  { label: "Runtime", value: "18+ hours" },
  { label: "Tilt Sensor", value: "Dual-axis" },
  { label: "Charging", value: "Type-C" },
  { label: "Weight", value: "5.2 kg" },
];

function CategoryCard({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[rgba(15,23,42,0.12)] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <div className="overflow-hidden rounded-t-[1.5rem] bg-[#f7f0e7] p-6">
        <img src={image} alt={title} className="mx-auto h-[220px] w-auto object-contain" />
      </div>
      <div className="flex flex-1 flex-col border-t border-[rgba(15,23,42,0.08)] bg-white p-6">
        <div className="flex-1">
          <h3 className="font-serif text-base font-semibold text-[var(--ink)] leading-tight" style={{ fontFamily: "Fraunces, serif" }}>{title}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{subtitle}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#specs" className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-[#111] transition-colors">
            View Specification
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-[#f3f4f6] transition-colors">
            Quick Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TotalStationsCategoryPage() {
  const path = window.location.pathname.replace(/\/+$/g, "");
  const activeSection =
    path === "/total-stations/nikon" ||
    path === "/product/total-stations/nikon" ||
    path === "/category/total-stations/nikon"
      ? "nikon"
      : path === "/total-stations/hi-target" ||
        path === "/product/total-stations/hi-target" ||
        path === "/category/total-stations/hi-target"
      ? "hi-target"
      : "all";

  const sections = [
    {
      id: "nikon",
      title: "Nikon Total Stations",
      description:
        "Nikon Total Stations are renowned in surveying and construction for their legendary optical clarity, lightweight design, and long-lasting hot-swappable battery life. Current line-ups include the mechanical Nikon N and K series, the autofocus Nikon XF, and the high-precision Nikon XS.",
      products: nikonProducts,
    },
    {
      id: "hi-target",
      title: "Hi-Target Total Stations",
      description:
        "Hi-Target Total Stations provide high-precision surveying instruments for land mapping, construction, and mining. Ranging from manual optical devices to smart Android systems and robotic units, they feature absolute encoding, reflectorless measurement up to 1000 meters, and dual-axis compensation.",
      products: hitargetProducts,
    },
  ];

  const visibleSections =
    activeSection === "all"
      ? sections
      : sections.filter((section) => section.id === activeSection);

  const heroConfig =
    activeSection === "nikon"
      ? {
          partner: "Nikon authorized Indian partner",
          image: "/upload/normalImag/ProdImg500006.png",
          description:
            "Trusted Nikon optics and precision surveying instruments built for demanding construction and infrastructure projects.",
        }
      : activeSection === "hi-target"
      ? {
          partner: "Hi-Target authorized Indian partner",
          image: "/upload/normalImag/ProdImg755754.png",
          description:
            "Reliable Hi-Target solutions for fast, accurate field measurement across land surveying, mining, and building applications.",
        }
      : {
          partner: "Premium Total Stations",
          image: "/upload/normalImag/ProdImg458836.png",
          description:
            "Delivering exceptional accuracy, speed, and reliability for every surveying project. Our advanced total stations are engineered to provide precise measurements, seamless data capture, and rugged performance across construction, infrastructure, and land surveying applications.",
        };

  return (
    <div className="min-h-screen bg-[#fbf5ec] text-[var(--ink)]">
      <SiteHeader />

      <div className="border-b border-[rgba(15,23,42,0.08)] bg-[#f6f0e5]">
        <div className="container-page mx-auto px-6 py-3 text-[11px] uppercase tracking-[0.35em] text-[var(--muted-foreground)] font-mono flex flex-wrap items-center gap-2">
          <span>HOME</span>
          <span className="text-[var(--ink)]">››</span>
          <span>CATEGORY</span>
          <span className="text-[var(--ink)]">››</span>
          <a
            href="/category/total-stations"
            className={`font-semibold ${activeSection === "all" ? "text-[#c21f2d]" : "text-[var(--muted-foreground)]"}`}
          >
            TOTAL STATIONS
          </a>
          {activeSection !== "all" ? (
            <>
              <span className="text-[var(--ink)]">››</span>
              <a
                href={`/category/total-stations/${activeSection}`}
                className={`font-semibold text-[#c21f2d]`}
              >
                {activeSection === "nikon" ? "NIKON" : "HI-TARGET"}
              </a>
            </>
          ) : null}
      
        </div>
      </div>

      <main className="container-page mx-auto px-6 py-16">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.95fr] items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(15,23,42,0.08)] bg-[#f8f5ef] px-4 py-2 text-sm font-semibold text-[var(--ink)] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--ink)]" /> {heroConfig.partner}
            </div>
            <div className="mt-10 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.4em] text-[var(--muted-foreground)]">Advanced Surveying</p>
              <h1 className="mt-5 font-serif text-[4.5rem] leading-[0.93] text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>
                Advanced Surveying <br />
                <span className="italic font-normal">Total Stations</span>
              </h1>
              <div className="mt-8 max-w-2xl border-l-4 border-[#0f172a] pl-6">
                <p className="text-[15px] leading-8 text-[var(--ink-soft)]">
                  {heroConfig.description}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:bg-[#111] transition-colors">
                Request Quote
                <span className="inline-flex h-5 w-5 rounded-full bg-white" />
              </a>
              <a href="#brochure" className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-[#111] transition-colors">
                Download Brochure
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-xl overflow-hidden rounded-[2rem] border border-[rgba(15,23,42,0.08)] bg-[#f8f5ef] p-6 shadow-[0_35px_80px_rgba(15,23,42,0.08)]">
              <img src={heroConfig.image} alt="Total Station" className="h-full w-full object-cover rounded-[1.5rem]" />
            </div>
          </div>
        </section>

        {visibleSections.map((section) => (
          <section key={section.id} className="mt-24 grid gap-10">
            <div className="grid gap-6 lg:grid-cols-[0.55fr_1.3fr] lg:items-center">
              <div>
                <p className="text-4xl font-serif text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>
                  {section.title}
                </p>
              </div>
              <div className="border-l border-[rgba(15,23,42,0.12)] pl-6">
                <p className="text-[15px] leading-8 text-[var(--ink-soft)]">
                  {section.description}
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {section.products.map((product) => (
                <CategoryCard key={product.title} title={product.title} subtitle={product.subtitle} image={product.image} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <SiteFooter />
    </div>
  );
}

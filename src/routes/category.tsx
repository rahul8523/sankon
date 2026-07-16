import { ArrowRight, Download } from "lucide-react";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import categories, { CategoryInfo } from "./categoryData";

function CategoryCard({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <div className="group overflow-hidden rounded-[6px] border border-[var(--hairline)] bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="overflow-hidden bg-[#f6f0e5]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 border-t">
        <div className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted-foreground)] mb-3">{title}</div>
        <h3 className="text-lg font-semibold text-[var(--ink)] leading-tight">{subtitle}</h3>
        <div className="mt-6 flex items-center gap-4">
          <a
            href="#specs"
            className="inline-flex min-w-[190px] items-center justify-between rounded-full bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#111]"
          >
            <span>View Specification</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-[var(--ink)] transition hover:text-black"
          >
            Quick Quote
          </a>
        </div>
      </div>
    </div>
  );
}

function findCategoryFromPath(path: string) {
  const normalizedPath = path.replace(/^\/+|\/+$/g, "");
  const segments = normalizedPath.split("/");

  if (segments[0] === "category" && segments[1]) {
    const categorySlug = segments[1];
    return categories.find((category) => category.slug === categorySlug);
  }

  if (segments[0] === "total-stations") {
    return categories.find((category) => category.slug === "total-stations");
  }

  return undefined;
}

function getActiveBrand(category: CategoryInfo, path: string) {
  const normalizedPath = path.replace(/^\/+|\/+$/g, "");
  const segments = normalizedPath.split("/");
  const brandSlug = segments[2];

  return category.brandLinks.find((brand) => brand.slug === brandSlug);
}

export default function CategoryPage() {
  const path = window.location.pathname;
  const category = findCategoryFromPath(path);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbf5ec] text-[var(--ink)]">
        <div className="max-w-md rounded-3xl border border-[rgba(15,23,42,0.12)] bg-white p-12 text-center shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h1 className="text-3xl font-semibold">Category not found</h1>
          <p className="mt-4 text-[var(--ink-soft)]">Please visit our homepage and select a valid category.</p>
          <a href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-[#111] transition-colors">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const activeBrand = getActiveBrand(category, path);
  const pillLabel = activeBrand ? `${activeBrand.label} authorized partner` : `${category.brands} authorized partner`;
  const breadcrumbCategory = category.title.toUpperCase();
  const breadcrumbBrand = activeBrand ? activeBrand.label.toUpperCase() : undefined;
  const heroHeading = activeBrand?.heroHeading ?? category.heroHeading ?? category.title;
  const heroSubheading = activeBrand?.heroSubheading ?? category.heroSubheading ?? category.title;
  const heroText = activeBrand?.heroText ?? category.heroText ?? category.description;

  return (
    <div className="min-h-screen bg-[#fbf5ec] text-[var(--ink)]">
      <SiteHeader />
      <div className="border-b border-[rgba(15,23,42,0.08)] bg-[#fbf5ec]">
        <div className="container-page mx-auto px-6 py-3 flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.35em] text-[var(--muted-foreground)] font-mono">
          <span>HOME</span>
          <span className="text-[var(--ink)]">&gt;&gt;</span>
          <span>CATEGORY</span>
          <span className="text-[var(--ink)]">&gt;&gt;</span>
          <span>{breadcrumbCategory}</span>
          {breadcrumbBrand ? (
            <>
              <span className="text-[var(--ink)]">&gt;&gt;</span>
              <span className="font-semibold text-[#c21f2d]">{breadcrumbBrand}</span>
            </>
          ) : null}
        </div>
      </div>

      <main className="container-page mx-auto px-6 py-16 bg-[#f5f5f5]">
        <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.12)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--ink)]" /> {pillLabel}
            </div>

            <div className="mt-10 max-w-3xl">
              <h1 className="font-serif text-4xl md:text-[4.5rem] leading-[0.95] text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>
                {heroHeading}
                <span className="block italic text-4xl md:text-[4.5rem]">{heroSubheading}</span>
              </h1>
            </div>

            <div className="mt-10 border-l-2 border-[var(--ink)] pl-6">
              <p className="text-base leading-8 text-[var(--ink-soft)]">
                {heroText}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex min-w-[220px] items-center justify-between rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition hover:bg-[#111]">
                <span>Request Quote</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a href="#brochure" className="inline-flex min-w-[220px] items-center justify-between rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#111]">
                <span>Download Brochure</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <Download className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(15,23,42,0.08)] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <img src={category.heroImage} alt={category.title} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/70 to-transparent" />
          </div>
        </section>

        <section className="mt-20 grid gap-12">
          <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted-foreground)]">{category.title}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>
                {category.title}
              </h2>
            </div>
            <p className="text-[15px] leading-8 text-[var(--ink-soft)]">
              {category.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {category.products.map((product) => (
              <CategoryCard key={product.title} {...product} />
            ))}
          </div>
        </section>

     
      </main>
      <SiteFooter />
    </div>
  );
}

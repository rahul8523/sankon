import { ArrowRight, Download } from "lucide-react";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import categories, { CategoryInfo } from "./categoryData";

function CategoryCard({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
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
        <div className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted-foreground)] mb-3">
          {title}
        </div>
        <h3 className="text-lg text-[var(--ink)] leading-tight">{subtitle}</h3>
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
          <p className="mt-4 text-[var(--ink-soft)]">
            Please visit our homepage and select a valid category.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-[#111] transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const activeBrand = getActiveBrand(category, path);
  // If a brand is active we may want to show brand-specific product listings.
  // Apply brand-specific product overrides only for the Total Stations category.
  const brandProducts =
    activeBrand?.slug === "nikon" && category.slug === "total-stations"
      ? [
        {
            title: "Nikon N&K",
            subtitle:"The Nikon N and K total stations offer an advanced EDM in an innovative package, including flexible charging and connectivity options, and are backed",
            image: "/upload/categoryImg/nikon/ProdImg792697.png",
          },

          {
            title: "Nikon XF",
            subtitle:"Nikon XF mechanical total stations are packed with features that make survey work easier and faster.",
            image: "/upload/categoryImg/nikon/ProdImg487220.png",
          },

          {
            title: "AC-2S/AP-8",
            subtitle:"Nikon AP-8 Auto Level is Compact and lightweight. This Nikon automatic level features a magnetic-dampened automatic compensator to level the line of sight,",
            image: "/upload/categoryImg/nikon/ProdImg85707.webp",
          },
          {
            title: "NE-100/NE-101",
            subtitle:"Ease of use, reliability, and durability make the Nikon NE-100 and NE-101 series theodolites a smart choice for your general construction, alignment,",
            image: "/upload/categoryImg/nikon/ProdImg92400.png",
          },

          {
            title: "NikonXS",
            subtitle:"Nikon XS mechanical total station is built tough for all occasions.",
            image: "/upload/categoryImg/nikon/ProdImg879101.png",
          },

          {
            title: "AS-2C/AE-7C",
            subtitle:"Nikon automatic levels are designed for a variety of elevation control and alignment tasks including general building construction, cut and fill measurements",
            image: "/upload/categoryImg/nikon/ProdImg716222.png",
          },
          {
            title: "NE-102/NE-103",
            subtitle:
              "Nikon NE-100 Series electronic digital theodolites give you accurate measurements in an affordable, easy-to-use platform",
            image: "/upload/categoryImg/nikon/ProdImg830612.png",
          },
          {
            title: "Traversing Kit",
            subtitle:"Traversing Kit for Total Station compatible to all brands like Nikon, Trimble, Topcon, Sokkia, Pentax etc",
            image: "/upload/categoryImg/nikon/ProdImg498210.png",
          },
          {
            title: "Nikon Battery BC-65, 7.2V",
            subtitle:"Battery BC-65, 7.2V, 3800mAh, Ni-MH for Nikon DTM300/400, NPR300, NPL300/Focus4 / Trimble M3 DOS Total Station",
            image: "/upload/categoryImg/nikon/ProdImg538848.png",
          },
          {
            title: "Nikon Battery Charger Q-75E, 7.2V",
            subtitle:"Battery Charger Q-75E, 7.2V for Nikon DTM300.400, NPR300, NPL300/Focus4, DTM500.600.800, NPL632/821/Trimble M3 DOS Total Station",
            image: "/upload/categoryImg/nikon/ProdImg20189.webp",
          },
          {
            title: "Nikon Battery BC-80",
            subtitle:"Nikon Battery BC-80, 7.2V, Ni-MH, 3800mAh for Nikon DTM500.600.800, NPL632/821 Total Station",
            image: "/upload/categoryImg/nikon/ProdImg119800.jpg",
          },
          {
            title: "Nikon Nivo Charger",
            subtitle:"Battery Charger Nivo for NikonXS/XF/NivoC/ NivoM/M+/NPL322+ / Trimble M3 / Spectra Focus 6/8 Total Station.",
            image: "/upload/categoryImg/nikon/ProdImg194932.png",
          },
          {
            title: "Nikon Nivo Battery",
            subtitle:"Battery Nivo, Li-ION for NikonXS/XF/NivoC/NivoM/M+/NPL322+ Total Station",
            image: "/upload/categoryImg/nikon/ProdImg646423.png",
          },
          {
            title: "Nikon Data Cable",
            subtitle:"Data Cable for for Nikon Nivo C, Nivo M/M+ and NPL-322 Total Station",
            image: "/upload/categoryImg/nikon/ProdImg851881.png",
          },
          {
            title: "Sliding Mini Prism",
            subtitle:"Sliding Mini Prism",
            image: "/upload/categoryImg/nikon/ProdImg619026.png",
          },
          {
            title: "Mini Prism",
            subtitle: "Mini Prism with four Mini Poles",
            image: "/upload/categoryImg/nikon/ProdImg747566.png",
          },
          {
            title: "Tripod Stand for Total Station",
            subtitle:"Tripod Stand for Total Station",
            image: "/upload/categoryImg/nikon/ProdImg981353.png",
          },
          {
            title: "Tripod Stand for Auto Level",
            subtitle:"Tripod Stand for Auto Level",
            image: "/upload/categoryImg/nikon/ProdImg880979.png",
          },
          {
            title: "Levelling Staff",
            subtitle: "Aluminium Levelling Staff, 4M, 5M and 6M",
            image: "/upload/categoryImg/nikon/ProdImg83588.png",
          },
          {
            title: "Fibre Levellng Staff",
            subtitle: "Fibre Levelling Staff, 5M long and 7.6M long",
            image: "/upload/categoryImg/nikon/ProdImg928666.png",
          },
          {
            title: "GPS Bipod",
            subtitle: "Thumb-Release Bipod for GPS",
            image: "/upload/categoryImg/nikon/ProdImg18416.png",
          },
          {
            title: "Prism Pole Tripod",
            subtitle: "Prism Pole Tripod",
            image: "/upload/categoryImg/nikon/ProdImg220015.png",
          },
          {
            title: "GPS Carbon Pole",
            subtitle: "GPS Carbon Pole",
            image: "/upload/categoryImg/nikon/ProdImg221013.png",
          },
          {
            title: "Prism Pole",
            subtitle: "Prism Pole, telescopic with bubble, 2.5m",
            image: "/upload/categoryImg/nikon/ProdImg601548.png",
          },
          {
            title: "Big Prism",
            subtitle: "Circular Prism with Holder and Target Plate.",
            image: "/upload/categoryImg/nikon/ProdImg711412.png",
          },
        ]
      : activeBrand?.slug === "hi-target" && category.slug === "total-stations"
      ? [
          {
            title: "HTS-521L10",
            subtitle: "HTS-521L10 has a new optical structure design.",
            image: "/upload/categoryImg/total-stations/HTS−521L10.png",
          },
          {
            title: "HTS-420R",
            subtitle: "HTS-420R Dual-axis reflectorless total station provides an efficient measurement experience.",
            image: "/upload/categoryImg/total-stations/HTS-420R.png",
          },
          {
            title: "ZTS-320R",
            subtitle: "Total station with rugged design, easy to use and high-precision total station.",
            image: "/upload/categoryImg/total-stations/ZTS-320R.png",
          },
          {
            title: "HTS-720",
            subtitle: "Hi-Target HTS-720 Android Total Station for accurate surveying and construction measurements.",
            image: "/upload/categoryImg/total-stations/HTS-720.png",
          },
        ]
      : undefined;
  const pillLabel = activeBrand
    ? `${activeBrand.label} authorized partner`
    : `${category.brands} authorized partner`;
  const breadcrumbCategory = category.title.toUpperCase();
  const breadcrumbBrand = activeBrand
    ? activeBrand.label.toUpperCase()
    : undefined;
  const heroHeading =
    activeBrand?.heroHeading ?? category.heroHeading ?? category.title;
  const heroSubheading =
    activeBrand?.heroSubheading ?? category.heroSubheading ?? category.title;
  const heroText =
    activeBrand?.heroText ?? category.heroText ?? category.description;

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
              <span className="font-semibold text-[#c21f2d]">
                {breadcrumbBrand}
              </span>
            </>
          ) : null}
        </div>
      </div>

      <main className="container-page mx-auto px-6 py-16 bg-[#f5f5f5]">
        <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.12)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--ink)]" />{" "}
              {pillLabel}
            </div>

            <div className="mt-10 max-w-3xl">
              <h1
                className="font-serif text-4xl md:text-[4.5rem] leading-[0.95] text-[var(--ink)]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                {heroHeading}
                {/* <span className="block italic text-4xl md:text-[4.5rem]">
                  {heroSubheading}
                </span> */}
              </h1>
            </div>

            <div className="mt-10 border-l-2 border-[var(--ink)] pl-6">
              <p className="text-base leading-8 text-[var(--ink-soft)]">
                {heroText}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex min-w-[220px] items-center justify-between rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition hover:bg-[#111]"
              >
                <span>Request Quote</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="#brochure"
                className="inline-flex min-w-[230px] items-center justify-between rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#111]"
              >
                <span>Download Brochure</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <Download className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(15,23,42,0.08)] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <img
              src={category.heroImage}
              alt={category.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/70 to-transparent" />
          </div>
        </section>

        <section className="mt-20 grid gap-12">
          <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
                {breadcrumbCategory}
              </p>
              <h2
                className="mt-4 font-serif text-4xl leading-tight text-[var(--ink)]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                {breadcrumbBrand ? (
            <>
           
              <span className="font-semibold text-[#c21f2d]">
                {breadcrumbBrand}
              </span>
            </>
          ) : null}
              </h2>
            </div>
            <p className="text-[15px] leading-8 text-[var(--ink-soft)]">
              {category.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(brandProducts ?? category.products).map((product) => (
              <CategoryCard key={product.title} {...product} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

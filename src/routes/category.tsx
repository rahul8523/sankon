import { ArrowRight, Download } from "lucide-react";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import categories, { CategoryInfo } from "./categoryData";
import { openRequestQuote } from "../lib/requestQuote";

function CategoryCard({
  title,
  subtitle,
  image,
  href,
}: {
  title: string;
  subtitle: string;
  image: string;
  href?: string;
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
        <h3
          className="text-lg text-[var(--ink)] leading-tight overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {subtitle}
        </h3>
        <div className="mt-6 flex flex-nowrap items-center gap-3">
          <a
            href={href ?? "#specs"}
            className="inline-flex min-w-[150px] h-10 items-center justify-between rounded-full bg-black px-3 text-sm font-semibold text-white transition hover:bg-[#111]"
          >
            <span>View Details</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex min-w-[150px] h-10 items-center justify-center rounded-full border border-[var(--hairline)] bg-white px-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-black hover:text-white"
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
            subtitle:
              "The Nikon N and K total stations offer an advanced EDM in an innovative package, including flexible charging and connectivity options, and are backed by dependable dealer support.",
            image: "/upload/categoryImg/nikon/ProdImg792697.png",
            href: "/product-detail/nikon-nk",
          },
          {
            title: "Nikon XF",
            subtitle:
              "Nikon XF mechanical total stations are packed with features that make survey work easier and faster.",
            image: "/upload/categoryImg/nikon/ProdImg487220.png",
            href: "/product-detail/nikon-xf",
          },
          {
            title: "Nikon XS",
            subtitle:
              "Nikon XS mechanical total station is built tough for all occasions.",
            image: "/upload/categoryImg/nikon/ProdImg879101.png",
            href: "/product-detail/nikon-xs",
          },
        ]
      : activeBrand?.slug === "hi-target" && category.slug === "total-stations"
        ? [
            {
              title: "HTS-521L10",
              subtitle: "HTS-521L10 has a new optical structure design.",
              image: "/upload/categoryImg/total-stations/HTS−521L10.png",
              href: "/product-detail/hts-521l10",
            },
            {
              title: "HTS-420R",
              subtitle:
                "HTS-420R Dual-axis reflectorless total station provides an efficient measurement experience.",
              image: "/upload/categoryImg/total-stations/HTS-420R.png",
              href: "/product-detail/hts-420r",
            },
            {
              title: "ZTS-320R",
              subtitle:
                "Total station with rugged design, easy to use and high-precision total station.",
              image: "/upload/categoryImg/total-stations/ZTS-320R.png",
              href: "/product-detail/zts-320r",
            },
            {
              title: "HTS-720",
              subtitle:
                "Hi-Target HTS-720 Android Total Station for accurate surveying and construction measurements.",
              image: "/upload/categoryImg/total-stations/HTS-720.png",
              href: "/product-detail/hi-target-hts-720-android-total-station",
            },
          ]
        : activeBrand?.slug === "bosch" &&
            category.slug === "auto-digital-levels"
          ? [
              {
                title: "GOL-26D",
                subtitle:
                  "Bosch GOL-26D professional optical level for fast, accurate leveling on site.",
                image: "/upload/products/gol-26d/1.jpg",
                href: "/product-detail/gol-26d",
              },
              {
                title: "GOL-32D",
                subtitle:
                  "Bosch GOL-32D optical level with bright optics and rugged field durability.",
                image: "/upload/products/gol-32d/1.webp",
                href: "/product-detail/gol-32d",
              },
            ]
          : activeBrand?.slug === "sankon" &&
              category.slug === "auto-digital-levels"
            ? [
                {
                  title: "Self-levelling AUTO LEVEL",
                  subtitle:
                    "SK-338D is equipped with pioneer self-leveling technology which has Intellectual Property Rights. The Auto Level has a self-leveling feature with work",
                  image: "/upload/products/self-levelling-auto-level/1.png",
                  href: "/product-detail/self-levelling-auto-level",
                },
              ]
            : activeBrand?.slug === "bosch" && category.slug === "laser-levels"
              ? [
                  {
                    title: "GRL 350 HV",
                    subtitle: "GRL 350 HV PROFESSIONAL ROTATION LASER",
                    image: "/upload/categoryImg/laser-levels/ProdImg130298.png",
                    href: "/product-detail/grl-350-hv",
                  },
                  {
                    title: "GLL 3-15 X",
                    subtitle: "GLL 3-15 X PROFESSIONAL LINE LASER",
                    image: "/upload/categoryImg/laser-levels/ProdImg468889.png",
                    href: "/product-detail/gll-3-15-x",
                  },
                  {
                    title: "GLL 5-50 X",
                    subtitle: "GLL 5-50 X PROFESSIONAL",
                    image: "/upload/categoryImg/laser-levels/ProdImg414373.png",
                    href: "/product-detail/gll-5-50-x",
                  },
                  {
                    title: "GLL 3-80 CG ",
                    subtitle: "GLL 3-80 CG PROFESSIONAL LINE LASER",
                    image: "/upload/categoryImg/laser-levels/ProdImg154472.png",
                    href: "/product-detail/gll-3-80-cg",
                  },
                ]

              : activeBrand?.slug === "soil-testing" &&
                  category.slug === "lab-material-testing"
                ? [
                    {
                      title: "Liquid Limit Device, Hand Operated with Counter",
                      subtitle:
                        "The apparatus consists of a brass cup, a crank and cam mechanism, mounted on a rubber base of a specified hardness. A brass pin having a knurled end f",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/1.jpg",
                      href: "/product-detail/liquid-limit-device-hand-operated-with-counter",
                    },

                    {
                      title: "Liquid Limit Cone Penetrometer",
                      subtitle:
                        "A stainless steel cone with half angle of 15°30’ and 30.5 mm coned length, having smooth polished surface, fitted to a bearing rod moving agai",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/2.png",
                      href: "/product-detail/liquid-limit-cone-penetrometer",
                    },

                    {
                      title: "Shrinkage Limit Apparatus",
                      subtitle:
                        "The set consists of 75mm square Prong Plate made of 3mm thick acrylic sheet with three metal prongs.",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/3.jpg",
                      href: "/product-detail/shrinkage-limit-apparatus",
                    },

                    {
                      title:
                        "Compaction Test For Water Content and Dry Density of Soils",
                      subtitle:
                        "Density and moisture content are, perhaps, the most important parameters a soil engineer has to keep a strict control on, during the construction of e",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/4.jpg",
                      href: "/product-detail/compaction-test-for-water-content-and-dry-density-of-soils",
                    },

                    {
                      title: "Automatic Soil Compaction Machine",
                      subtitle:
                        "The Automatic Soil Compactor replaces the hand compaction procedure as specified for dry density/moisture content relationship of soil. Both light and",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/5.jpg",
                      href: "/product-detail/automatic-soil-compaction-machine",
                    },

                    {
                      title: "Pocket Penetrometer",
                      subtitle:
                        "The pocket penetrometer is regarded as a simple tool to aid the engineers in field exploration and in checking and comparing similar types of soil, bu",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/6.gif",
                      href: "/product-detail/pocket-penetrometer",
                    },

                    {
                      title: "Soil Permeability Apparatus",
                      subtitle:
                        "Compaction Permeameter Mould 1000 ml capacity, clamped between the top and bottom drainage plates having a recess for porous stones. Supplie",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/7.jpg",
                      href: "/product-detail/soil-permeability-apparatus",
                    },

                    {
                      title: "Hot Air Oven",
                      subtitle:
                        "Double walled, inner chamber S.S.304, Outer CRC powder coated , 65 mm thick glass wool insulation , 80/20 nichrome heating elements placed under ribs ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/8.png",
                      href: "/product-detail/hot-air-oven",
                    },

                    {
                      title: "CORE CUTTER RAMMER .",
                      subtitle:
                        "With solid mild steel foot 140 mm diameter and 75 mm height with a concentrically screwed 25 mm diameter solid mild steel staff. The overall length of",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/9.jpg",
                      href: "/product-detail/core-cutter-rammer",
                    },

                    {
                      title: "SOIL HYDROMETER",
                      subtitle:
                        "Clay, silt, fine aggregates and other material where absolute density has little variations among sample particles. ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/10.jpg",
                      href: "/product-detail/soil-hydrometer",
                    },

                    {
                      title:
                        "GRAIN SIZE ANALYSIS APPARATUS PIPETTE METHOD - AS PER IS2720 PART-IV",
                      subtitle:
                        "The Apparatus consists of a sliding panel which moves up and down by means of a screw allowing Anderson Pipette fixed to it to be raised or lowered ve",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/11.png",
                      href: "/product-detail/grain-size-analysis-apparatus-pipette-method-as-per-is2720-part-iv",
                    },

                    {
                      title: "BISHOP PORE PRESSURE APAPRATUS (10KG/CM²)",
                      subtitle:
                        "MANOMETER: Glass U-tube manometer for measuring low positive pore pressures negative pore pressures and checking zero error of pressure gauge. It is p ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/12.jpg",
                      href: "/product-detail/bishop-pore-pressure-apapratus-10kgcm2",
                    },

                    {
                      title: "FINE SIEVE SET - 20CM DIA - SET",
                      subtitle:
                        "Seamless Brass frame, set consist of 8 sieves - 10 mm, 4.75 mm, 2.36 mm, 1.18 mm, 600 micron, 300 micron, 150 micron, 75 micron and a set of Lid‑Pan ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/13.jpg",
                      href: "/product-detail/fine-sieve-set-20cm-dia-set",
                    },

                    {
                      title:
                        "SAMPLE EXTRACTOR - FOR 100 AND 150MM DIA SPECIMEN",
                      subtitle:
                        "Base plate of size 300mm x 300mm with a 152.4 mm dia hole at  centre. Base plate shall have four legs of 25mm dia and 275 mm height. Top plate with ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/14.jpg",
                      href: "/product-detail/sample-extractor-for-100-and-150mm-dia-specimen",
                    },

                    {
                      title:
                        "SAND EQUIVALENT VALUE TEST APPARATUS WITH ACCESSOR",
                      subtitle:
                        "SAND EQUIVALENT VALUE TEST APPARATUS WITH ACCESSORIES",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/15.jpg",
                      href: "/product-detail/sand-equivalent-value-test-apparatus-with-accessories",
                    },

                    {
                      title:
                        "SWELL PRESSURE TEST APPARATUS W/O PROVING RING AND DIAL GAUGE-",
                      subtitle:
                        "One loading unit hand operated 5000 kg capacity with two rates of travel One Gun metal mould, 100mm dia x 127.3 cm height X 1000 cc volume with base ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/16.jpg",
                      href: "/product-detail/swell-pressure-test-apparatus-wo-proving-ring-and-dial-gauge",
                    },

                    {
                      title:
                        "SOIL PERMEABILITY APPARATUS FOR CONSTANT AND VARIAB",
                      subtitle:
                        "The apparatus shall be confirming to IS: 2720 (Part-XVII), IS 9198 & IS: 11209 latest edition and shall consists of following.",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/17.jpg",
                      href: "/product-detail/soil-permeability-apparatus",
                    },

                    {
                      title: "UNCONFINED COMPRESSION TESTER",
                      subtitle:
                        "Supplied complete with 3 speed Load Frame, 2.5 KN or 2 KN Proving ring fitted with dial gauge with Calibration certificate, Dial Gauge of 0.01 X 25 mm ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/18.jpg",
                      href: "/product-detail/unconfined-compression-tester",
                    },

                    {
                      title:
                        "RELATIVE DENSITY APPARATUS RELATIVE DENSITY APPARATUS",
                      subtitle:
                        "The equipment comprises a motorized vibratory table of size 75 mm x 75 mm, which operates on 440 Volts, Three phase, A.C. Supply. Also, consists of a ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/19.jpg",
                      href: "/product-detail/relative-density-apparatus-relative-density-apparatus",
                    },

                    {
                      title: "LABORATORY VANE SHEAR APPARATUS",
                      subtitle:
                        "Vane shear test is a useful method of measuring the shear strength of clay. It is a cheaper and quicker method. The test can also be conducted in the ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/20.jpg",
                      href: "/product-detail/laboratory-vane-shear-apparatus",
                    },

                    {
                      title: "RAPID MOISTURE METER-WITH PRESSURE GAUGE",
                      subtitle:
                        "The unit consists of a pressure vessel with clamp for sealing cap, rubber sealing gasket, pressure gauge calibrated in percentage moisture content 0 2 ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/21.jpg",
                      href: "/product-detail/rapid-moisture-meter-with-pressure-gauge",
                    },

                    {
                      title: "Laboratory CBR",
                      subtitle:
                        "The machine feature a rigid two column frame with upper crossbeam, which can be adjusted in height and locked in position with locknuts. The drive for",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/22.jpg",
                      href: "/product-detail/laboratory-cbr",
                    },

                    {
                      title: "Load Frame",
                      subtitle:
                        " Load Frames are versatile loading devices used to perform strength and displacement tests in geotechnical, soil mechanics, and asphalt laboratories. ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/23.webp",
                      href: "/product-detail/load-frame",
                    },

                    {
                      title:
                        "PROVING RING-COMPRESSION TYPE-25 KN - WITH DIAL GAU",
                      subtitle:
                        "Provided with self aligning compression Pads. Repeatability is as stipulated in IS : 4169-1967. The ring is supplied complete with dial gauge and cali ",
                      image:
                        "/upload/categoryImg/lab-and-material-testing/24.jpg",
                      href: "/product-detail/proving-ring-compression-type-25-kn-with-dial-gauge",
                    },
                  ]
                : activeBrand?.slug === "by-model" &&
                    category.slug === "ground-penetrating-radar-gpr"
                  ? [
                      {
                        title: "Q5 Series GPR System",
                        subtitle:
                          "Simply put, the Q5 GPR system is a workhorse when it comes to locating buried utilities. Its easy-to-use interface can also be expanded and configured",
                        image: "/upload/categoryImg/gpr-system/1.webp",
                        href: "/product-detail/q5-series-gpr-system",
                      },

                      {
                        title: "Q10 Utility and Geotechnical Locating System",
                        subtitle:
                          "The Q10 is a high-resolution 1000MHz GPR cart system for bridge deck scanning and other high-resolution/shallow penetration depth applications. Its ru",
                        image: "/upload/categoryImg/gpr-system/2.webp",
                        href: "/product-detail/q10-utility-and-geotechnical-locating-system",
                      },

                      {
                        title: "Q25 Geophysical Radar System",
                        subtitle:
                          "The Q25 geophysical GPR system is a 250 MHz locating system for deep utilities and geophysical applications. The Q25 has the greatest penetration dep",
                        image: "/upload/categoryImg/gpr-system/3.webp",
                        href: "/product-detail/q25-geophysical-radar-system",
                      },

                      {
                        title:
                          "100 Series Geophysical Scanner Ground Penetrating Radar System",
                        subtitle:
                          "Our Most Powerful GPR System for Geophysical Scanner Survey 100 Series geophysical scanner systems offer the greatest realistic penetration that grou",
                        image: "/upload/categoryImg/gpr-system/4.webp",
                        href: "/product-detail/100-series-geophysical-scanner-ground-penetrating-radar-system",
                      },

                      {
                        title: "GPRover Utility Mapping System",
                        subtitle:
                          "GPRover harnesses ground penetrating radar technology for superior locating and data collection capabilities; integrating advanced subsurface imaging ",
                        image: "/upload/categoryImg/gpr-system/5.png",
                        href: "/product-detail/gprover-utility-mapping-system",
                      },

                      {
                        title: "Quantum Imager Triple Frequency GPR System",
                        subtitle:
                          "Quantum Imaging Applications With greater depth and resolution than any other locating technology, the Quantum Imager can be used for anything from f",
                        image: "/upload/categoryImg/gpr-system/6.webp",
                        href: "/product-detail/quantum-imager-triple-frequency-gpr-system",
                      },
                    ]
                  : activeBrand?.slug === "fuzrr" &&
                      category.slug === "cable-pipe-locators"
                    ? [
                        {
                          title: "Cable/Pipe locator",
                          subtitle:
                            "Pipeline detection (cable position tracking, direction display, depth measurement, current measurement), cable identification, A word frame fault sear",
                          image: "/upload/categoryImg/cable/1.jpg",
                          href: "/product-detail/cablepipe-locator",
                        },
                      ]
                    : activeBrand?.slug === "hi-target" &&
                        category.slug === "hydrographic-marine-survey"
                      ? [
                          {
                            title: "iBoat BS12 USV",
                            subtitle:
                              "The iBoat BS12 emerges as the embodiment of sophistication and simplicity, expertly designed for effortless operation across a multitude of applicatio",
                            image: "/upload/categoryImg/marine/1.png",
                            href: "/product-detail/iboat-bs12-usv",
                          },

                          {
                            title: "HD-MAX Dual Frequency Echo Sounder",
                            subtitle:
                              "HD-MAX dual-frequency echo sounder is universal in sediment measurement for dredging and other water depth measurement projects in shallow water, deep",
                            image: "/upload/categoryImg/marine/2.png",
                            href: "/product-detail/hd-max-dual-frequency-echo-sounder",
                          },

                          {
                            title: "HD-Lite Single Beam Echo Sounder",
                            subtitle:
                              "HD-Lite echo sounder is a rugged and compact PC built-in professional portable echo sounder. Boosted by an upgraded sounder platform and enhanced hard",
                            image: "/upload/categoryImg/marine/3.png",
                            href: "/product-detail/hd-lite-single-beam-echo-sounder",
                          },

                          {
                            title: "HD-MAX Ⅱ",
                            subtitle:
                              "HD-MAX Ⅱ dual-frequency echo sounder redefines underwater surveying. Its enhanced host unit is water-resistant, portable, and offers versatile inter",
                            image: "/upload/categoryImg/marine/4.png",
                            href: "/product-detail/hd-max",
                          },
                        ]
                      : activeBrand?.slug === "bosch" &&
                          category.slug === "laser-distance-meters"
                        ? [
                            {
                              title: "GLM400",
                              subtitle: "GLM 400 PROFESSIONAL LASER MEASURE",
                              image: "/upload/categoryImg/laser/1.png",
                              href: "/product-detail/glm400",
                            },

                            {
                              title: "GLM 50-27 CG",
                              subtitle:
                                "GLM 50-27 CG PROFESSIONAL LASER MEASURE",
                              image: "/upload/categoryImg/laser/2.jpg",
                              href: "/product-detail/glm-50-27-cg",
                            },

                            {
                              title: "GLM 150 C",
                              subtitle: "GLM 150 C PROFESSIONAL LASER MEASURE",
                              image: "/upload/categoryImg/laser/3.png",
                              href: "/product-detail/glm-150-c",
                            },

                            {
                              title: "GLM 100-25 C",
                              subtitle:
                                "GLM 100-25 C PROFESSIONAL LASER MEASURE",
                              image: "/upload/categoryImg/laser/4.jpg",
                              href: "/product-detail/glm-100-25-c",
                            },

                            {
                              title: "GLM 50-23 G",
                              subtitle:
                                "GLM 50-23 G PROFESSIONAL LASER MEASURE",
                              image: "/upload/categoryImg/laser/5.png",
                              href: "/product-detail/glm-50-23-g",
                            },
                          ]

                          : activeBrand?.slug === "mileseey" &&
                          category.slug === "laser-distance-meters"
                        ? [
                            {
                              title: "P9 Outdoor Laser Measure with Camera",
                              subtitle: "Outdoor Laser Distance Meter The P9 LDM is the epitome of top-of-the-line measuring devices, built to meet the demands of professionals working on l",
                              image: "/upload/categoryImg/mileseey/1.png",
                              href: "/product-detail/p9-outdoor-laser-measure-with-camera",
                            },

                            {
                              title: "S7 330ft Outdoor Laser Measure with Camera",
                              subtitle:
                                "Point Viewfinder with Camera The built-in viewfinder camera (2x zoom digital camera) with on-screen aiming reticle ensures you to find the laser spot",
                              image: "/upload/categoryImg/mileseey/2.png",
                              href: "/product-detail/s7-330ft-outdoor-laser-measure-with-camera",
                            },

                            {
                              title: "Mileseey S50 Laser Distance Meter (Green Beam)",
                              subtitle: "Mileseey S50 Laser Distance Meter is a compact and highly accurate digital measuring tool designed for construction, engineering, and site work. It de",
                              image: "/upload/categoryImg/mileseey/3.png",
                              href: "/product-detail/mileseey-s50-laser-distance-meter-green-beam",
                            },

                            {
                              title: "XTAPE1 Digital Tape Measure with Laser",
                              subtitle:
                                "XTAPE1 smartly combines a digital tape with a laser measuring part in one sleek modular design, offering users effortless measuring solutions to any d",
                              image: "/upload/categoryImg/mileseey/4.png",  
                              href: "/product-detail/xtape1-digital-tape-measure-with-laser",
                            },

                            {
                              title: "DT20 Digital Laser Tape Measure with Bluetooth",
                              subtitle:
                                "High Accuracy | Fast Speed HD LCD Backlit Screen, clear reading. Nylon Coating so that it can be wear-resistant, non-slip, and drop-resistant. TAPE M",
                              image: "/upload/categoryImg/mileseey/5.png",
                              href: "/product-detail/dt20-digital-laser-tape-measure-with-bluetooth",
                            },
                          ]
                        : activeBrand?.slug === "nikon" &&
                            category.slug === "survey-accessories"
                          ? [
                              {
                                title: "Traversing Kit",
                                subtitle:
                                  "Traversing Kit for Total Station compatible to all brands like Nikon, Trimble, Topcon, Sokkia, Pentax etc",
                                image: "/upload/categoryImg/survey/1.png",
                                href: "/product-detail/traversing-kit",
                              },

                              {
                                title: "Nikon Battery BC-65, 7.2V",
                                subtitle:
                                  "Battery BC-65, 7.2V, 3800mAh, Ni-MH for Nikon DTM300/400, NPR300, NPL300/Focus4 / Trimble M3 DOS Total Station",
                                image: "/upload/categoryImg/survey/2.png",
                                href: "/product-detail/nikon-battery-bc-65-72v",
                              },

                              {
                                title: "Nikon Battery Charger Q-75E, 7.2V",
                                subtitle:
                                  "Battery Charger Q-75E, 7.2V for Nikon DTM300.400, NPR300, NPL300/Focus4, DTM500.600.800, NPL632/821/Trimble M3 DOS Total Station",
                                image: "/upload/categoryImg/survey/3.webp",
                                href: "/product-detail/nikon-battery-charger-q-75e-72v",
                              },

                              {
                                title: "Nikon Battery BC-80",
                                subtitle:
                                  "Nikon Battery BC-80, 7.2V, Ni-MH, 3800mAh for Nikon DTM500.600.800, NPL632/821 Total Station",
                                image: "/upload/categoryImg/survey/4.jpg",
                                href: "/product-detail/nikon-battery-bc-80",
                              },

                              {
                                title: "Nikon Nivo Charger",
                                subtitle:
                                  "Battery Charger Nivo for NikonXS/XF/NivoC/ NivoM/M+/NPL322+ / Trimble M3 / Spectra Focus 6/8 Total Station",
                                image: "/upload/categoryImg/survey/5.png",
                                href: "/product-detail/nikon-nivo-charger",
                              },

                              {
                                title: "Nikon Nivo Battery",
                                subtitle:
                                  "Battery Nivo, Li-ION for NikonXS/XF/NivoC/NivoM/M+/NPL322+ Total Station",
                                image: "/upload/categoryImg/survey/6.png",
                                href: "/product-detail/nikon-nivo-battery",
                              },

                              {
                                title: "Nikon Data Cable",
                                subtitle:
                                  "Data Cable for for Nikon Nivo C, Nivo M/M+ and NPL-322 Total Station",
                                image: "/upload/categoryImg/survey/7.png",
                                href: "/product-detail/nikon-data-cable",
                              },

                              {
                                title: "Sliding Mini Prism",
                                subtitle: "Sliding Mini Prism",
                                image: "/upload/categoryImg/survey/8.png",
                                href: "/product-detail/sliding-mini-prism",
                              },

                              {
                                title: "Mini Prism",
                                subtitle: "Mini Prism with four Mini Poles",
                                image: "/upload/categoryImg/survey/9.png",
                                href: "/product-detail/mini-prism",
                              },

                              {
                                title: "Tripod Stand for Total Station",
                                subtitle: "Tripod Stand for Total Station",
                                image: "/upload/categoryImg/survey/10.png",
                                href: "/product-detail/tripod-stand-for-total-station",
                              },

                              {
                                title: "Tripod Stand for Auto Level",
                                subtitle: "Tripod Stand for Auto Level",
                                image: "/upload/categoryImg/survey/11.png",
                                href: "/product-detail/tripod-stand-for-auto-level",
                              },

                              {
                                title: "Levelling Staff",
                                subtitle:
                                  "Aluminium Levelling Staff, 4M, 5M and 6M",
                                image: "/upload/categoryImg/survey/12.png",
                                href: "/product-detail/levelling-staff",
                              },

                              {
                                title: "Fibre Levellng Staff",
                                subtitle:
                                  "Fibre Levelling Staff, 5M long and 7.6M long",
                                image: "/upload/categoryImg/survey/13.png",
                                href: "/product-detail/fibre-levellng-staff",
                              },

                              {
                                title: "GPS Bipod",
                                subtitle: "Thumb-Release Bipod for GPS",
                                image: "/upload/categoryImg/survey/14.png",
                                href: "/product-detail/gps-bipod",
                              },

                              {
                                title: "Prism Pole Tripod",
                                subtitle: "Prism Pole Tripod",
                                image: "/upload/categoryImg/survey/15.png",
                                href: "/product-detail/prism-pole-tripod",
                              },

                              {
                                title: "GPS Carbon Pole",
                                subtitle: "GPS Carbon Pole",
                                image: "/upload/categoryImg/survey/16.png",
                                href: "/product-detail/gps-carbon-pole",
                              },

                              {
                                title: "Prism Pole",
                                subtitle:
                                  "Prism Pole, telescopic with bubble, 2.5m",
                                image: "/upload/categoryImg/survey/17.png",
                                href: "/product-detail/prism-pole",
                              },

                              {
                                title: "Big Prism",
                                subtitle:
                                  "Circular Prism with Holder and Target Plate",
                                image: "/upload/categoryImg/survey/18.png",
                                href: "/product-detail/big-prism",
                              },
                            ]
                          : // Added

                            undefined;
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
  const heroImage = activeBrand?.heroImage ?? category.heroImage;

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
              <button
                onClick={() => openRequestQuote({})}
                className="inline-flex min-w-[220px] items-center justify-between rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition hover:bg-[#111]"
              >
                <span>Request Quote</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
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
              src={heroImage}
              alt={
                activeBrand
                  ? `${activeBrand.label} ${category.title}`
                  : category.title
              }
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

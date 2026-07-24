export type BrandLink = {
  label: string;
  slug: string;
  href: string;
  heroHeading?: string;
  heroSubheading?: string;
  heroText?: string;
};

export type CategoryProduct = {
  title: string;
  subtitle: string;
  image: string;
};

export type CategoryInfo = {
  title: string;
  slug: string;
  brands: string;
  img: string;
  href: string;
  brandLinks: BrandLink[];
  description: string;
  heroImage: string;
  heroHeading?: string;
  heroSubheading?: string;
  heroText?: string;
  products: CategoryProduct[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const makeBrandLinks = (brands: string, categorySlug: string): BrandLink[] =>
  brands
    .split("·")
    .map((brand) => brand.trim())
    .filter(Boolean)
    .map((label) => ({
      label,
      slug: slugify(label),
      href: `/category/${categorySlug}/${slugify(label)}`,
    }));

const makeProducts = (title: string, image: string) => [
  {
    title: `${title} Model A`,
    subtitle: `Reliable ${title.toLowerCase()} performance for everyday field work.`,
    image,
  },
  {
    title: `${title} Model B`,
    subtitle: `Advanced ${title.toLowerCase()} technology for demanding sites.`,
    image,
  },
  {
    title: `${title} Model C`,
    subtitle: `Compact and durable ${title.toLowerCase()} for mobile surveying teams.`,
    image,
  },
];

export const categories: CategoryInfo[] = [
  {
    title: "Total Stations",
    slug: "total-stations",
    brands: "Nikon · Hi-Target",
    img: "/upload/categoryImg/ProdImg500006.png",
    href: "/category/total-stations",
    brandLinks: [
      {
        label: "Nikon",
        slug: "nikon",
        href: "/category/total-stations/nikon",
        heroHeading: "Nikon Authorized Total Stations",
        heroSubheading: "Total Stations by Nikon",
        heroText:
          "Discover Nikon authorized total stations with precision optics, rugged field build, and trusted support for every survey project.",
      },
      {
        label: "Hi-Target",
        slug: "hi-target",
        href: "/category/total-stations/hi-target",
        heroHeading: "Hi-Target Authorized Total Stations",
        heroSubheading: "Total Stations by Hi-Target",
        heroText:
          "Explore Hi-Target authorized total stations built for fast, accurate measurement, intelligent workflows and reliable field performance.",
      },
    ],
    description:
      "Advanced total stations for surveying, construction, and infrastructure applications with precision, speed, and rugged performance.",
    heroImage: "/upload/categoryImg/ProdImg500006.png",
    heroHeading: "Premium Total Stations",
    heroSubheading: "High-accuracy survey instruments for every site",
    heroText:
      "Choose the right total station for your project, with category-wide solutions that balance precision, durability, and ease of use.",
    products: [
      {
        title: "Nikon N&K",
        subtitle:
          "The Nikon N and K total stations offer an advanced EDM in an innovative package, including flexible charging and connectivity options.",
        image: "/upload/categoryImg/NikonNK.png",
      },
      {
        title: "Nikon XF",
        subtitle:
          "Nikon XF mechanical total stations are packed with features that make survey work easier and faster.",
        image: "/upload/categoryImg/NikonXF.png",
      },
      {
        title: "NikonXS",
        subtitle: "Nikon XS mechanical total station is built tough for all occasions.",
        image: "/upload/categoryImg/NikonXS.png",
      },
    ],
  },
  {
    title: "GNSS / RTK Systems",
    slug: "gnss-rtk-systems",
    brands: "Hi-Target",
    img: "/upload/categoryImg/ProdImg922461.png",
    href: "/category/gnss-rtk-systems",
    brandLinks: [
      {
        label: "Hi-Target",
        slug: "hi-target",
        href: "/category/gnss-rtk-systems/hi-target",
        heroHeading: "GNSS / RTK SYSTEMS by Hi-Target",
        heroSubheading: "GNSS / RTK SYSTEMS by Hi-Target",
        heroText:
          "Discover Hi-Target authorized GNSS / RTK SYSTEMS with precision optics, rugged field build, and trusted support for every survey project.",
      }
    ],
    description:
      "High-precision GNSS and RTK systems designed for survey, mapping, and construction control with reliable satellite tracking.",
    heroImage: "/upload/categoryImg/ProdImg922461.png",
    products: [
      {
        title: "V200 GNSS",
        subtitle:
          "V200 GNSS RTK Receiver brings superior performance and high efficiency to support your fieldwork with reliable solutions. Its deployment of the advanc",
        image: "/upload/categoryImg/gnss-rtk-systems/ProdImg921380.png",
      },

      {
        title: "iRTK4",
        subtitle:
          "iRTK4 GNSS RTK is a full-featured, intelligent receiver system equipped with an integrated new-generation full-frequency antenna and advanced multi-ch",
        image: "/upload/categoryImg/gnss-rtk-systems/ProdImg401085.png",
      },
      {
        title: "iRTK5",
        subtitle:
          "EaiRTK5, the high-quality scalable GNSS receiver, provides an industry-leading GNSS RTK surveying solution.",
        image: "/upload/categoryImg/gnss-rtk-systems/ProdImg853747.png",
      },
      {
        title: "vRTK",
        subtitle:
          "vRTK is Hi-Target’s first lightweight and innovative visual RTK receiver product, which not only enables non-contact image surveying, breaking through",
        image: "/upload/categoryImg/gnss-rtk-systems/ProdImg553223.png",
      },
      {
        title: "iHand55",
        subtitle:
          "he iHand55 Handheld Controller is a professional field controller with a big vision. Adopting a full-keyboard design, iHand55 supports the fast charge",
        image: "/upload/categoryImg/gnss-rtk-systems/ProdImg904004.png",
      },
      {
        title: "V30 Plus",
        subtitle:
          "Hi-Target GNSS RTK System Model V30Plus With its built-in multi-constellation GNSS RTK engine, smaller dimension, and industrial-grade compact design,",
        image: "/upload/categoryImg/gnss-rtk-systems/ProdImg309780.png",
      },
      {
        title: "Hi-Target V600L Laser RTK System",
        subtitle:
          "Hi-Target V600L Laser RTK is a GNSS-based laser survey system designed for accurate land surveying and construction projects where direct point access",
        image: "/upload/categoryImg/gnss-rtk-systems/ProdImg922461.png",
      },
      {
        title: "V700S SLAM RTK",
        subtitle:
          "Hi-Target V700S SLAM RTK System combines GNSS RTK and SLAM technology to deliver accurate survey results in complex and obstructed environments. Ideal",
        image: "/upload/categoryImg/gnss-rtk-systems/ProdImg965883.png",
      }
    ],
  },
  {
    title: "Auto & Digital Levels",
    slug: "auto-digital-levels",
    brands: "Bosch · Sankon",
    img: "/upload/categoryImg/ProdImg549254.webp",
    href: "/category/auto-digital-levels",

    brandLinks: [
      {
        label: "Nikon",
        slug: "nikon",
        href: "/category/auto-digital-levels/nikon",
        heroHeading: "Auto & Digital Levels by Nikon",
        heroSubheading: "Auto & Digital Levels by Nikon",
        heroText:
          "Discover Nikon authorized Auto & Digital Levels with precision optics, rugged field build, and trusted support for every survey project.",
      },
      {
        label: "Bosch",
        slug: "bosch",
        href: "/category/auto-digital-levels/bosch",
        heroHeading: "Auto & Digital Levels by Bosch",
        heroSubheading: "Auto & Digital Levels by Bosch",
        heroText:
          "Discover Bosch authorized Auto & Digital Levels with precision optics, rugged field build, and trusted support for every survey project.",
      },
      {
        label: "Sankon",
        slug: "sankon",
        href: "/category/auto-digital-levels/sankon",
        heroHeading: "Auto & Digital Levels by Sankon",
        heroSubheading: "Auto & Digital Levels by Sankon",
        heroText:
          "Discover Sankon authorized Auto & Digital Levels with precision optics, rugged field build, and trusted support for every survey project.",
      }
    ],
    description:
      "Precision auto and digital levels for construction, civil works, and site layout with fast, accurate leveling results.",
    heroImage: "/upload/categoryImg/ProdImg549254.webp",
    products: [
      {
        title: "AC-2S/AP-8",
        subtitle:
          "Nikon AP-8 Auto Level is Compact and lightweight. This Nikon automatic level features a magnetic-dampened automatic compensator to level the line of s",
        image: "/upload/categoryImg/auto-level/ProdImg85707.webp",
      },
      {
        title: "AS-2C/AE-7C",
        subtitle:
          "Nikon automatic levels are designed for a variety of elevation control and alignment tasks including general building construction, cut and fill measurements",
        image: "/upload/categoryImg/auto-level/ProdImg716222.png",
      }
    ],
  },


  {
    title: "Digital Theodolites",
    slug: "digital-theodolites",
    brands: "Nikon",
    img: "/upload/categoryImg/digital-theodolites/ProdImg830612.png ",
    href: "/category/digital-theodolites",
     brandLinks: [
      {
        label: "Nikon",
        slug: "nikon",
        href: "/category/digital-theodolites/nikon",
        heroHeading: "Digital Theodolites by Nikon",
        heroSubheading: "Digital Theodolites by Nikon",
        heroText:
          "Discover Nikon authorized Digital Theodolites with precision optics, rugged field build, and trusted support for every survey project.",
      },
    ],
    description:
      "Reliable digital theodolites for angle measurement, alignment, and precise construction layout in demanding field conditions.",
    heroImage: "/upload/categoryImg/digital-theodolites/ProdImg830612.png",
    products: [
      {
        title: "NE-100/NE-101",
        subtitle:
          "Ease of use, reliability, and durability make the Nikon NE-100 and NE-101 series theodolites a smart choice for your general construction, alignment,",
        image: "/upload/categoryImg/digital-theodolites/ProdImg92400.png",
      },
      {
        title: "NE-102/NE-103",
        subtitle:
          "Nikon NE-100 Series electronic digital theodolites give you accurate measurements in an affordable, easy-to-use platform",
        image: "/upload/categoryImg/digital-theodolites/ProdImg830612.png",
      }
    ],
  },
  {
    title: "Laser Levels",
    slug: "laser-levels",
    brands: "Bosch",
    img: "/upload/categoryImg/ProdImg468889.png",
    href: "/category/laser-levels",
     brandLinks: [
      {
        label: "Bosch",
        slug: "bosch",
        href: "/category/laser-levels/bosch",
        heroHeading: "Laser Levels by Bosch",
        heroSubheading: "Laser Levels by Bosch",
        heroText:
          "Discover Bosch authorized Laser Levels with precision optics, rugged field build, and trusted support for every survey project.",
      },
    ],
    description:
      "Compact laser levels for fast, accurate leveling and alignment on construction, interiors, and infrastructure projects.",
    heroImage: "/upload/categoryImg/laser-levels/ProdImg468889.png",
   products: [
      {
        title: "GRL 350 HV",
        subtitle:
          "GRL 350 HV PROFESSIONAL ROTATION LASER",
        image: "/upload/categoryImg/laser-levels/ProdImg130298.png",
      },
      {
        title: "GLL 3-15 X",
        subtitle:
          "GLL 3-15 X PROFESSIONAL LINE LASER",
        image: "/upload/categoryImg/laser-levels/ProdImg468889.png",
      },
      {
        title: "GLL 5-50 X",
        subtitle:
          "GLL 5-50 X PROFESSIONAL",
        image: "/upload/categoryImg/laser-levels/ProdImg414373.png",  
      },
      {
        title: "GLL 3-80 CG",
        subtitle:
          "GLL 3-80 CG PROFESSIONAL LINE LASER",
        image: "/upload/categoryImg/laser-levels/ProdImg154472.png",
      }
    ],
  },
  {
    title: "Laser Distance Meters",
    slug: "laser-distance-meters",
    brands: "Bosch · Mileseey",
    img: "/upload/categoryImg/ProdImg440930.jpg",
    href: "/category/laser-distance-meters",
    brandLinks: makeBrandLinks("Bosch · Mileseey", "laser-distance-meters"),
    description:
      "Portable laser distance meters for quick measuring, estimating, and layout work with dependable range and accuracy.",
    heroImage: "/upload/categoryImg/ProdImg440930.jpg",
    products: makeProducts("Laser Distance Meters", "/upload/categoryImg/ProdImg440930.jpg"),
  },
  {
    title: "Ground Penetrating Radar (GPR)",
    slug: "ground-penetrating-radar-gpr",
    brands: "By model",
    img: "/upload/categoryImg/ProdImg743085.webp",
    href: "/category/ground-penetrating-radar-gpr",
    brandLinks: makeBrandLinks("By model", "ground-penetrating-radar-gpr"),
    description:
      "Ground penetrating radar solutions for underground mapping, utility detection, and site investigation with model-specific performance.",
    heroImage: "/upload/categoryImg/ProdImg743085.webp",
    products: makeProducts("Ground Penetrating Radar", "/upload/categoryImg/ProdImg743085.webp"),
  },
  {
    title: "Cable & Pipe Locators",
    slug: "cable-pipe-locators",
    brands: "FUZRR",
    img: "/upload/categoryImg/ProdImg191018.jpg",
    href: "/category/cable-pipe-locators",
    brandLinks: makeBrandLinks("FUZRR", "cable-pipe-locators"),
    description:
      "Professional cable and pipe locators for safe excavation, utility detection, and trenching operations with easy field use.",
    heroImage: "/upload/categoryImg/ProdImg191018.jpg",
    products: makeProducts("Cable & Pipe Locators", "/upload/categoryImg/ProdImg191018.jpg"),
  },
  {
    title: "Hydrographic & Marine Survey",
    slug: "hydrographic-marine-survey",
    brands: "Hi-Target",
    img: "/upload/categoryImg/ProdImg950025.png",
    href: "/category/hydrographic-marine-survey",
    brandLinks: makeBrandLinks("Hi-Target", "hydrographic-marine-survey"),
    description:
      "Hydrographic and marine survey systems for accurate water-based mapping, navigation, and offshore survey applications.",
    heroImage: "/upload/categoryImg/ProdImg950025.png",
    products: makeProducts("Hydrographic & Marine Survey", "/upload/categoryImg/ProdImg950025.png"),
  },
  {
    title: "SLAM / LiDAR Scanners",
    slug: "slam-lidar-scanners",
    brands: "FEIMA · Hi-Target",
    img: "/upload/categoryImg/ProdImg90323.png",
    href: "/category/slam-lidar-scanners",
    brandLinks: makeBrandLinks("FEIMA · Hi-Target", "slam-lidar-scanners"),
    description:
      "SLAM and LiDAR scanners for rapid 3D mapping, site digitization, and spatial modeling across infrastructure and survey projects.",
    heroImage: "/upload/categoryImg/ProdImg90323.png",
    products: makeProducts("SLAM / LiDAR Scanners", "/upload/categoryImg/ProdImg90323.png"),
  },
  {
    title: "Survey Accessories",
    slug: "survey-accessories",
    brands: "Nikon",
    img: "/upload/categoryImg/ProdImg498210.png",
    href: "/category/survey-accessories",
    brandLinks: makeBrandLinks("Nikon", "survey-accessories"),
    description:
      "Survey accessories and field tools that complement your instruments and improve setup, measurement, and data capture efficiency.",
    heroImage: "/upload/categoryImg/ProdImg498210.png",
    products: makeProducts("Survey Accessories", "/upload/categoryImg/ProdImg498210.png"),
  },
  {
    title: "Lab & Material Testing",
    slug: "lab-material-testing",
    brands: "Soil Testing",
    img: "/upload/categoryImg/ProdImg770158.jpg",
    href: "/category/lab-material-testing",
    brandLinks: makeBrandLinks("Soil Testing", "lab-material-testing"),
    description:
      "Laboratory and material testing equipment for soil, concrete, and construction materials with reliable test results.",
    heroImage: "/upload/categoryImg/ProdImg770158.jpg",
    products: makeProducts("Lab & Material Testing", "/upload/categoryImg/ProdImg770158.jpg"),
  },
];

export default categories;

export type BrandLink = {
  label: string;
  slug: string;
  href: string;
  heroImage?: string;
  heroHeading?: string;
  heroSubheading?: string;
  heroText?: string;
};

export type CategoryProduct = {
  title: string;
  subtitle: string;
  image: string;
  href?: string;
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
        heroImage: "/upload/categoryImg/nikon/ProdImg792697.png",
        heroHeading: "Nikon Authorized Total Stations",
        heroSubheading: "Total Stations by Nikon",
        heroText:
          "Discover Nikon authorized total stations with precision optics, rugged field build, and trusted support for every survey project.",
      },
      {
        label: "Hi-Target",
        slug: "hi-target",
        href: "/category/total-stations/hi-target",
        heroImage: "/upload/categoryImg/total-stations/HTS-420R.png",
        heroHeading: "Hi-Target Authorized Total Stations",
        heroSubheading: "Total Stations by Hi-Target",
        heroText:
          "Explore Hi-Target authorized total stations built for fast, accurate measurement, intelligent workflows and reliable field performance.",
      },
    ],
    description:
      "Advanced total stations for surveying, construction, and infrastructure applications with precision, speed, and rugged performance.",
    heroImage: "/upload/categoryImg/nikon/ProdImg792697.png",
    heroHeading: "Premium Total Stations",
    heroSubheading: "High-accuracy survey instruments for every site",
    heroText:
      "Choose the right total station for your project, with category-wide solutions that balance precision, durability, and ease of use.",
    products: [
      {
        title: "Nikon",
        subtitle:
          "The Nikon N and K total stations offer an advanced EDM in an innovative package, including flexible charging and connectivity options.",
        image: "/upload/categoryImg/NikonNK.png",
        href: "/category/total-stations/nikon",
      },
      {
        title: "Hi-Target",
        subtitle:
          "Hi-Target mechanical total stations are packed with features that make survey work easier and faster.",
        image: "/upload/categoryImg/NikonNK.png",
        href: "/category/total-stations/hi-target",
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
      },
    ],
    description:
      "High-precision GNSS and RTK systems designed for survey, mapping, and construction control with reliable satellite tracking.",
    heroImage: "/upload/categoryImg/gnss-rtk-systems/ProdImg401085.png",
    products: [
      {
        title: "GNSS / RTK Systems",
        subtitle: "Hi-Target",
        image: "/upload/categoryImg/gnss-rtk-systems/ProdImg921380.png",
        href: "/category/gnss-rtk-systems/hi-target",
      },
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
      },
    ],
    description:
      "Precision auto and digital levels for construction, civil works, and site layout with fast, accurate leveling results.",
    heroImage: "/upload/categoryImg/auto-level/ProdImg716222.png",
    products: [
      {
        title: "Auto & Digital Levels",
        subtitle: "Nikon",
        image: "/upload/categoryImg/auto-level/ProdImg85707.webp",
        href: "/category/auto-digital-levels/nikon",
      },
      {
        title: "Auto & Digital Levels",
        subtitle: "Bosch",
        image: "/upload/categoryImg/auto-level/ProdImg716222.png",
        href: "/category/auto-digital-levels/bosch",
      },
      {
        title: "Auto & Digital Levels",
        subtitle: "Sankon",
        image: "/upload/categoryImg/auto-level/ProdImg716222.png",
        href: "/category/auto-digital-levels/sankon",
      },
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
    heroImage: "/upload/categoryImg/digital-theodolites/ProdImg92400.png",
    products: [
      {
        title: "Digital Theodolites",
        subtitle: "Nikon",
        image: "/upload/categoryImg/digital-theodolites/ProdImg92400.png",
        href: "/category/digital-theodolites/nikon",
      },
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
    heroImage: "/upload/categoryImg/laser-levels/ProdImg130298.png",
    products: [
      {
        title: "Laser Levels",
        subtitle: "Bosch",
        image: "/upload/categoryImg/laser-levels/ProdImg130298.png",
        href: "/category/laser-levels/bosch",
      },
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
    heroImage: "/upload/categoryImg/ProdImg910895.png",
    products: [
      {
        title: "Laser Distance Meters",
        subtitle: "Bosch",
        image: "/upload/categoryImg/ProdImg910895.png",
        href: "/category/laser-distance-meters/bosch",
      },
      {
        title: "Laser Distance Meters",
        subtitle: "Mileseey",
        image: "/upload/categoryImg/ProdImg910895.png",
        href: "/category/laser-distance-meters/mileseey",
      },
    ],
  },
  {
    title: "Ground Penetrating Radar",
    slug: "ground-penetrating-radar-gpr",
    brands: "By model",
    img: "/upload/categoryImg/ProdImg743085.webp",
    href: "/category/ground-penetrating-radar-gpr",
    brandLinks: makeBrandLinks("By model", "ground-penetrating-radar-gpr"),
    description:
      "Ground penetrating radar solutions for underground mapping, utility detection, and site investigation with model-specific performance.",
    heroImage: "/upload/categoryImg/ProdImg875035.png",
    products: [
      {
        title: "Ground Penetrating Radar (GPR)",
        subtitle: "By model",
        image: "/upload/categoryImg/ProdImg910895.png",
        href: "/category/ground-penetrating-radar-gpr/by-model",
      },
    ],
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
    heroImage: "/upload/categoryImg/ProdImg191018 (1).jpg",
    products: [
      {
        title: "Cable & Pipe Locators",
        subtitle: "FUZRR",
        image: "/upload/categoryImg/ProdImg191018 (1).jpg",
        href: "/category/cable-pipe-locators/fuzrr",
      },
    ],
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
    products: [
      {
        title: "Hydrographic & Marine Survey",
        subtitle: "Hi-Target",
        image: "/upload/categoryImg/ProdImg950025.png",
        href: "/category/hydrographic-marine-survey/hi-target",
      },
    ],
  },
  {
    title: "SLAM / LiDAR Scanners",
    slug: "slam-lidar-scanners",
    brands: "Hi-Target",
    img: "/upload/categoryImg/ProdImg90323.png",
    href: "/category/slam-lidar-scanners",
    brandLinks: makeBrandLinks("Hi-Target", "slam-lidar-scanners"),
    description:
      "SLAM and LiDAR scanners for rapid 3D mapping, site digitization, and spatial modeling across infrastructure and survey projects.",
    heroImage: "/upload/categoryImg/ProdImg90323.png",
     products: [
      {
        title: "SLAM / LiDAR Scanners",
        subtitle: "Hi-Target",
        image: "/upload/categoryImg/ProdImg90323.png",
        href: "/category/slam-lidar-scanners/hi-target",
      },
    ],
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
    products: [
      {
        title: "Survey Accessories",
        subtitle: "Nikon",
        image: "/upload/categoryImg/ProdImg498210.png",
        href: "/category/survey-accessories/nikon",
      },
    ],
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
    products: [
      {
        title: "Lab & Material Testing",
        subtitle: "Soil Testing",
        image: "/upload/categoryImg/ProdImg770158.jpg",
        href: "/category/lab-material-testing/soil-testing",
      },
    ],
  },
];

export default categories;

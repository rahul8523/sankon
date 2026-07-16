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
    products: makeProducts("Total Stations", "/upload/categoryImg/ProdImg500006.png"),
  },
  {
    title: "GNSS / RTK Systems",
    slug: "gnss-rtk-systems",
    brands: "Hi-Target",
    img: "/upload/categoryImg/ProdImg922461.png",
    href: "/category/gnss-rtk-systems",
    brandLinks: makeBrandLinks("Hi-Target", "gnss-rtk-systems"),
    description:
      "High-precision GNSS and RTK systems designed for survey, mapping, and construction control with reliable satellite tracking.",
    heroImage: "/upload/categoryImg/ProdImg922461.png",
    products: makeProducts("GNSS / RTK Systems", "/upload/categoryImg/ProdImg922461.png"),
  },
  {
    title: "Auto & Digital Levels",
    slug: "auto-digital-levels",
    brands: "Nikon · Bosch · Sankon",
    img: "/upload/categoryImg/ProdImg549254.webp",
    href: "/category/auto-digital-levels",
    brandLinks: makeBrandLinks("Nikon · Bosch · Sankon", "auto-digital-levels"),
    description:
      "Precision auto and digital levels for construction, civil works, and site layout with fast, accurate leveling results.",
    heroImage: "/upload/categoryImg/ProdImg549254.webp",
    products: makeProducts("Auto & Digital Levels", "/upload/categoryImg/ProdImg549254.webp"),
  },
  {
    title: "Digital Theodolites",
    slug: "digital-theodolites",
    brands: "Nikon",
    img: "/upload/categoryImg/ProdImg92400.png",
    href: "/category/digital-theodolites",
    brandLinks: makeBrandLinks("Nikon", "digital-theodolites"),
    description:
      "Reliable digital theodolites for angle measurement, alignment, and precise construction layout in demanding field conditions.",
    heroImage: "/upload/categoryImg/IMG1269.jpg",
    products: makeProducts("Digital Theodolites", "/upload/categoryImg/IMG1269.jpg"),
  },
  {
    title: "Laser Levels",
    slug: "laser-levels",
    brands: "Bosch",
    img: "/upload/categoryImg/ProdImg468889.png",
    href: "/category/laser-levels",
    brandLinks: makeBrandLinks("Bosch", "laser-levels"),
    description:
      "Compact laser levels for fast, accurate leveling and alignment on construction, interiors, and infrastructure projects.",
    heroImage: "/upload/categoryImg/IMG9616.png",
    products: makeProducts("Laser Levels", "/upload/categoryImg/IMG9616.png"),
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

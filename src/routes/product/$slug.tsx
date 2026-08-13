import { openRequestQuote } from "../../lib/requestQuote";
import React, { JSX, useState } from "react";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import {
  ArrowRight,
  ChevronRight,
  Check,
  Download,
  Heart,
  Share2,
  Truck,
  Award,
  Headphones,
  Minus,
  Plus,
  Shield,
} from "lucide-react";

interface ProductInfo {
  slug: string;
  title: string;
  brand: string;
  category: string;
  tagline: string;
  description: string;
  price: string;
  mrp: string;
  savings: string;
  badges: string[];
  rating: string;
  sku: string;
  images: string[];
  inTheBox: string[];
  features: { title: string; body: string }[];
  specs: { label: string; value: string }[];
  comparison?: {
    columns: string[];
    rows: { label: string; values: string[] }[];
  };
  brochure: { label: string; href: string; meta: string };
  about?: string;
  faq?: { question: string; answer: string }[];
}

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const PRODUCT_DATA: Record<string, ProductInfo> = {
  "nikon-nk": {
    slug: "nikon-nk",
    title: "Nikon N & K",
    brand: "Nikon",
    category: "Total Stations",
    tagline:
      "The Nikon N and K total stations offer an advanced EDM in an innovative package, including flexible charging and connectivity options, and are backed by the great service and dealer support you expect from Nikon.",
    description:
      "Both the Nikon N and Nikon K have a new charger, featuring a USB-C on-the-go connection that lets you recharge via a power bank or car plug so you can recharge batteries even in remote areas..\n\nThe Total Station File Transfer app and Bluetooth connection let you easily transfer data between the field and office, so your data makes it to the office before you do. Economical and practical, both include bright Nikon optics and rugged reliability, making each of these powerful total stations the right choice for a full range of projects.",
    price: "₹3,96,000",
    mrp: "₹4,50,000",
    savings: "12% OFF",
    badges: ["In Stock", "Nikon Series"],
    rating: "4.8 · 98 verified reviews",
    sku: "NIKON-NK",
    images: [
      "/upload/categoryImg/nikon/ProdImg792697.png",
      "/upload/categoryImg/nikon/ProdImg792697.png",
    ],
    inTheBox: [
      "1× Nikon N & K Total Station",
      "1× Battery Charger",
      "1× Data Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "2″ and 5″ angle accuracies",
        body: "Choose the right precision level for your project with Nikon N and K series accuracy options.",
      },
      {
        title: "Prism and reflectorless models",
        body: "Both prism-based and reflectorless measurement workflows are supported for flexible field use.",
      },
      {
        title: "Fast, accurate EDM",
        body: "Nikon EDM delivers reliable distance measurements across construction and survey sites.",
      },
      {
        title: "Phone app compatible",
        body: "Easily transfer data between the field and office using Nikon-compatible mobile apps.",
      },
      {
        title: "NFC simplifies Bluetooth pairing",
        body: "Simplified Bluetooth setup with NFC makes connecting accessories and data devices faster.",
      },
      {
        title: "Power-up anywhere with the USB battery charger",
        body: "Power up on site using the convenient USB charger for portable field operation.",
      },
    ],
    specs: [
      { label: "Reflectorless Range", value: "1000 m" },
      { label: "Angle Accuracy", value: "2″ / 5″" },
      { label: "Display", value: "Dual / Single LCD" },
      { label: "Battery", value: "Rechargeable Li-ion" },
      { label: "Runtime", value: "18+ hours" },
      { label: "Tilt Sensor", value: "Dual-axis" },
      { label: "Charging", value: "USB Type-C" },
      { label: "Weight", value: "5.2 kg" },
    ],
    comparison: {
      columns: ["Nikon N 2″", "Nikon N 5″", "Nikon K 2″", "Nikon K 5″"],
      rows: [
        {
          label: "EDM MODE(S)",
          values: [
            "Prism & Reflectorless",
            "Prism & Reflectorless",
            "Prism only",
            "Prism only",
          ],
        },
        { label: "DISPLAYS", values: ["Dual", "Single", "Dual", "Single"] },
        { label: "LASER POINTER", values: ["✓", "✓", "–", "–"] },
        { label: "IN-FIELD CHARGING", values: ["✓", "✓", "✓", "✓"] },
        { label: "PHONE APP COMPATIBLE", values: ["✓", "✓", "✓", "✓"] },
      ],
    },
    brochure: {
      label: "Nikon N & K Product Brochure",
      href: "/upload/products/nikon-nk/BROCH422618.pdf",
      meta: "PDF · 2.4 MB · English",
    },
  },
  // NIKON XF
  "nikon-xf": {
    slug: "nikon-xf",
    title: "Nikon XF",
    brand: "Nikon",
    category: "Total Stations",
    tagline:
      "Nikon XF mechanical total station with autofocus, dual-color touch screens, and fast EDM performance.",
    description: `Nikon XF mechanical total stations are packed with features that make survey work easier and faster. The superior Nikon optics provide a crisp, bright sighting even in low light conditions.

Nikon XF portfolio gives the opportunity to choose the electronic distance measuring (EDM) technology that works best for the type of work being performed. With Nikon XF total stations, fieldwork is always accurate and efficient thanks to proven workflows and an array of features, including:

- Dual color touch screens allow Survey Basic to run onboard and easily be controlled from both faces
- Superior Nikon optics provide crisp, bright sightings even in low-light conditions
- Hot-swappable batteries reduce the need for downtime
- The lightweight, compact design makes the total station easy to store, transport, and handle

Choose the EDM for the work you do:

Both the Nikon XF and Nikon XF HP total stations can measure to prisms and non-prism objects at various ranges; the EDM technology in each lends itself to specific situations.

Nikon XF: Time of Flight EDM strengths
- Long Range
- Very fast, and especially useful for measuring in areas with interrupted line of sight.
- Autofocus powered by Nikon for quick, precise focus

Nikon XF-HP: Phase Shift EDM strengths
- Easy non-prism edge and corner measurements
- High precision
- Extended battery life

Nikon XF mechanical total station is durable too—standing up to the toughest worksite conditions. Surveyors all over the globe rely on Nikon XF to deliver exceptional results, wherever their work takes them.

Nikon XF mechanical total station is built tough for all occasions.

The Total Station File Transfer app and Bluetooth connection let you easily transfer data between the field and office, so your data makes it to the office before you do. Economical and practical, both include bright Nikon optics and rugged reliability, making each of these powerful total stations the right choice for a full range of projects.`,
    price: "₹6,75,000",
    mrp: "₹8,10,000",
    savings: "16.67% OFF",
    badges: ["In Stock", "Nikon XF"],
    rating: "4.7 · 112 verified reviews",
    sku: "NIKON-XF",
    images: [
      "/upload/categoryImg/nikon/ProdImg487220.png",
      "/upload/products/nikon-xf/ProdImg153578.jpg",
      "/upload/products/nikon-xf/ProdImg319662.jpg",
      "/upload/products/nikon-xf/ProdImg490221.jpg",
      "/upload/products/nikon-xf/ProdImg511215.jpg",
      "/upload/products/nikon-xf/ProdImg679649.jpg",
    ],
    inTheBox: [
      "1× Nikon XF Total Station",
      "1× Battery Charger",
      "1× Data Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "Autofocus",
        body: "Autofocus delivers fast target acquisition and repeatable aiming performance.",
      },
      {
        title: "Fast, powerful EDM",
        body: "Time-of-flight EDM gives fast, reliable measurements for both prism and non-prism work.",
      },
      {
        title: "Dual-color touchscreen displays",
        body: "Dual color touch screens allow Survey Basic to run onboard and be controlled from both faces.",
      },
      {
        title: "PIN security",
        body: "Built-in PIN security helps protect the instrument from unauthorized use on the job site.",
      },
      {
        title: "1″, 2″, 3″, and 5″ accuracies",
        body: 'Available in 1", 2", 3", and 5" accuracies for flexible survey workflows.',
      },
      {
        title: "Lightweight and portable",
        body: "Lightweight design makes the total station easy to carry, set up, and operate on demanding sites.",
      },
      {
        title: "Hot-swappable batteries",
        body: "Hot-swappable batteries reduce downtime and keep the station running longer in the field.",
      },
    ],
    specs: [
      { label: "EDM Technology", value: "Time-of-flight / Phase shift" },
      { label: "Angle Accuracy", value: '1", 2", 3", 5"' },
      { label: "Display", value: "Dual color touch screen" },
      { label: "Battery", value: "Rechargeable Li-ion" },
      { label: "Runtime", value: "18+ hours" },
      { label: "Autofocus", value: "Yes" },
      { label: "Charging", value: "USB Type-C" },
      { label: "Weight", value: "5.0 kg" },
    ],
    brochure: {
      label: "Nikon XF Series White Paper",
      href: "/upload/products/nikon-xf/BROCH330066.pdf",
      meta: "PDF · 1.8 MB · English",
    },
  },

  // Nikon XS Total Station

  "nikon-xs": {
    slug: "nikon-xs",
    title: "Nikon XS",
    brand: "Nikon",
    category: "Total Stations",
    tagline:
      "Nikon XS mechanical total station is built tough for all occasions.",
    description: `With Lightweight, Compact Design and Easy Setup, the NikonXS Total Station makes survey work fast, efficient and easy. The Onboard Software of NikonXS ensures smooth, efficient workflows from the field to the office. When you work with the NikonXS, you get the work done right the first time. There’s no need to return to the job site, thanks to features that include:

- Hot Swappable Li-ion batteries that have the power to last all day.
- Superior Nikon Optics and Autofocus for crisp, bright sightings even in low light conditions.
- A full range of Angular Accuracies of 1", 2", 3" 5" to ensure you have exactly the equipment you need for the work you do.
- PIN security to prevent unauthorized use.
- 800m Reflector EDM

The NikonXS is User-friendly and durable. It’s light weight and portability reduces user fatigue, allowing for long work days, even as it handles tough worksite conditions. Most important: it’s highly accurate and backed by Nikon quality assurance. You can rely on it to make precise measurements, project after project, year after year.`,
    price: "₹6,66,000",
    mrp: "₹7,36,000",
    savings: "9.51% OFF",
    badges: ["In Stock", "Nikon XS"],
    rating: "4.6 · 85 verified reviews",
    sku: "NIKON-XS",
    images: ["/upload/categoryImg/nikon/ProdImg879101.png"],
    inTheBox: [
      "1× Nikon XS Total Station",
      "1× Battery Charger",
      "1× Data Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "Autofocus",
        body: "Autofocus works confidently in low-light conditions to keep sighting fast and precise.",
      },
      {
        title: "Dual-face displays",
        body: "Dual-face displays offer flexible instrument control from both the main and secondary sides.",
      },
      {
        title: "Fast, powerful EDM",
        body: "High-performance EDM supports reliable distance measurement for demanding field tasks.",
      },
      {
        title: "PIN security",
        body: "Built-in PIN security prevents unauthorized use on the job site.",
      },
      {
        title: "1″, 2″, 3″, and 5″ accuracies",
        body: 'Available in 1", 2", 3", and 5" accuracies for the right level of precision.',
      },
      {
        title: "Nikon onboard software",
        body: "The onboard software streamlines field workflows and office data transfer.",
      },
      {
        title: "Hot-swappable batteries",
        body: "Hot-swappable Li-ion batteries deliver long runtime and keep the station working all day.",
      },
    ],
    specs: [
      { label: "EDM Range", value: "800 m reflectorless" },
      { label: "Angle Accuracy", value: '1", 2", 3", 5"' },
      { label: "Display", value: "Dual-face LCD" },
      { label: "Battery", value: "Rechargeable Li-ion" },
      { label: "Runtime", value: "18+ hours" },
      { label: "Autofocus", value: "Yes" },
      { label: "Charging", value: "USB Type-C" },
      { label: "Weight", value: "5.0 kg" },
    ],
    brochure: {
      label: "Nikon XS Brochure — (English)",
      href: "/upload/products/nikon-xs/BROCH422618.pdf",
      meta: "PDF · 1.9 MB · English",
    },
  },

  // HTS−521L10 Station

  "hts-521l10": {
    slug: "hts-521l10",
    title: "HTS−521L10",
    brand: "Hi-Target",
    category: "Total Stations",
    tagline: "HTS-521L10 has a new optical structure design.",
    description: `Hi-Target Reflectorless Total Station HTS521L10 (2"), consist of:
- 1x Hi-Target HTS521L10 Main Unit (2") 
- 2x BT211, 7.4V / 3000mAh, Li-ION Batteries
- 1x BC211 Battery Charger
- 1x Data Cable`,
    price: "₹3,96,000",
    mrp: "₹4,32,000",
    savings: "8.33% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.6 · 85 verified reviews",
    sku: "HTS-521L10",
    images: [
      "/upload/products/hts521l10/1.png",
      "/upload/products/hts521l10/2.png",
      "/upload/products/hts521l10/3.png",
    ],
    inTheBox: [
      "1× Hi-Target HTS521L10 Total Station",
      "1× Battery Charger",
      "1× Data Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "HD Color Screen Long Range Total Station",
        body: "2.8-inch 240×320 HD color screen, sunlight-readable for clear on-site viewing and faster workflows.",
      },
      {
        title: "Reflectorless range 1000m",
        body: "Reliable reflectorless EDM reaches up to 1000 m for non-prism measurements in typical field conditions.",
      },
      {
        title:
          "2.8-inch 240*320 pixel, More efficient and accurate, clearly visible in sunlight",
        body: "High-resolution 240×320 pixel display improves readout accuracy and remains legible in bright sunlight.",
      },
      {
        title: "Trigger Key",
        body: "Ergonomic trigger key enables fast, one-touch distance capture for repetitive surveying tasks.",
      },
      {
        title:
          "3000mA high-capacity Li-ion battery, LED display, Type-C charging. Battery life exceeds",
        body: "3000mAh high-capacity Li‑ion battery with LED status and USB Type‑C charging; typical runtime exceeds 18 hours.",
      },
      {
        title: "Dual-axis tilt sensor",
        body: "Dual-axis tilt sensor compensates for inclination, improving measurement stability and accuracy.",
      },
      {
        title:
          "Built-in multi-function calibration software improves the convenience of maintenance great",
        body: "Onboard multi-function calibration software provides easy maintenance, diagnostics, and calibration workflows.",
      },
    ],
    specs: [
      { label: "EDM Range", value: "800 m reflectorless" },
      { label: "Angle Accuracy", value: '1", 2", 3", 5"' },
      { label: "Display", value: "Dual-face LCD" },
      { label: "Battery", value: "Rechargeable Li-ion" },
      { label: "Runtime", value: "18+ hours" },
      { label: "Autofocus", value: "Yes" },
      { label: "Charging", value: "USB Type-C" },
      { label: "Weight", value: "5.0 kg" },
    ],
    brochure: {
      label: "HTS521L10 Brochure — (English)",
      href: "/upload/products/hts52110/BROCH306532.pdf",
      meta: "PDF · 1.9 MB · English",
    },
  },

  // HTS−420R Station

  "hts-420r": {
    slug: "hts-420r",
    title: "HTS−420R",
    brand: "Hi-Target",
    category: "Total Stations",
    tagline:
      "HTS-420R Dual-axis reflectorless total station provides an efficient measurement experience.",
    description: `Hi-Target Reflectorless Total Station HTS420R (2"), consist of:
- 1x Hi-Target HTS420R Main Unit (2") 
- 2x BT10, 7.4V / 3000mAh, Li-ION Batteries
- 1x BC10 Battery Charger
- 1x Data Cable
-Accuracy: 2"
-Least  Count: 1"
-Distance Measuring Range with Single Prism: 7500 M
-Distance Accuracy : ±(2mm + 2ppm x D) m.s.e.

Reflectorless Range: 600 M:

- Display & Keyboard: Dual Sided LCD display and Full numeric keyboar 
- Internal Memory: 20,000 Points
- Plug-in memory device: SD Card, USB Pendrive
- Communication Port: 1xSerial, Bluetooth
-Battery Backup: Approx.10 Hours.


`,
    price: "₹2,88,000",
    mrp: "₹3,15,000",
    savings: "8.57% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.6 · 85 verified reviews",
    sku: "HTS-420R",
    images: [
      "/upload/products/hts-420r/1.png",
      "/upload/products/hts-420r/2.png",
    ],
    inTheBox: [
      "1× Hi-Target HTS420R Total Station",
      "1× Battery Charger",
      "1× Data Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "2‘’ accuracy with 600meter reflectorless range",
        body: "Provides 2″ angular accuracy with a 600 m reflectorless range for reliable on-site measurements.",
      },
      {
        title: "Distance Measuring Range with Single Prism 7500 M",
        body: "Single-prism measuring range up to 7,500 m under good conditions for extended-distance surveying.",
      },
      {
        title: "Dual-axis reflectorless total station",
        body: "Dual-axis compensator and reflectorless EDM deliver stable, accurate measurements on uneven terrain.",
      },
      {
        title:
          "Gray and white display with adjustable contrast; 280 X 160 pixels; 6 lines X 25 characters",
        body: "High-contrast gray/white display with adjustable contrast (280×160 px) and 6×25 character layout for clear field readouts.",
      },
    ],
    specs: [
      { label: "EDM Range", value: "800 m reflectorless" },
      { label: "Angle Accuracy", value: '1", 2", 3", 5"' },
      { label: "Display", value: "Dual-face LCD" },
      { label: "Battery", value: "Rechargeable Li-ion" },
      { label: "Runtime", value: "18+ hours" },
      { label: "Autofocus", value: "Yes" },
      { label: "Charging", value: "USB Type-C" },
      { label: "Weight", value: "5.0 kg" },
    ],
    brochure: {
      label: "HTS420R Brochure — (English)",
      href: "/upload/products/hts-420r/BROCH739256.pdf",
      meta: "PDF · 1.9 MB · English",
    },
  },

  // ZTS-320R Station

  "zts-320r": {
    slug: "zts-320r",
    title: "ZTS-320R",
    brand: "Hi-Target",
    category: "Total Stations",
    tagline:
      "Total station with rugged design, easy to use and high-precision total station",
    description: `Dual-axis Compensation
    The ZTS-320R is configured with advanced dual-axis compensator for auto error elimination and auto accuracy compensation.
    
    Absolute Encoding
    The absolute encoding disk ensures high accuracy, efficiency and stable performance. Initialization is needless but to measure the angle immediately as the ZTS-320R is turned on. The azimuth information won’t be missed even the ZTS-320R is power-off unexpectedly.

    High-performance MCU SMT32
    The SMT32 MCU based on ARM Cortex™-M processor enables the ZTS-320R has extra high processing speed and low-power consumption.

    Bluetooth
    The Bluetooth wireless technology makes ZTS-320R accessible to any data collector for real-time communication. The third party field software such as Carlson SurvCE is fully compatible with the ZTS-320R.

Data Storage
Diversified data transfer options such as SD card, USB pen drive, mini-B interface.

Backlight
The display and keyboard with backlight for working in the dark.

Diagonal Eyepiece
Support diagonal eyepiece for observations at steep lines of sight.

Calibration Software
The proprietary HI-TARGET calibration software is accessible for real-time diagnosis to ensure trouble-free operation.

Data Transfer Software
The proprietary HI-TARGET data transfer software supports different types of output data formats, which can be used in AutoCAD or other brands’ post-processing software.


`,
    price: "₹2,70,000",
    mrp: "₹3,06,000",
    savings: "11.76% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.6 · 85 verified reviews",
    sku: "ZTS-320R",
    images: [
      "/upload/products/zts-320r/1.png",
      "/upload/products/zts-320r/2.png",
      "/upload/products/zts-320r/3.png",
    ],
    inTheBox: [
      "1× Hi-Target ZTS320R Total Station",
      "1× Battery Charger",
      "1× Data Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "2‘’ accuracy with 600meter reflectorless range",
        body: "2.8-inch 240×320 HD color display is clearly visible in sunlight and makes field work easier.",
      },
      {
        title: "Distance Measuring Range with Single Prism 7500 M",
        body: "Reliable reflectorless measurement up to 1000 meters for long-range surveying tasks.",
      },
      {
        title: "Dual-axis reflectorless total station",
        body: "Convenient trigger key allows quick one-touch distance capture during repetitive measurements.",
      },
      {
        title:
          "Gray and white display with adjustable contrast; 280 X 160 pixels; 6 lines X 25 characters",
        body: "Convenient trigger key allows quick one-touch distance capture during repetitive measurements.",
      },
    ],
    specs: [
      { label: "Measurement Method", value: "Absolute Encoding" },
      {
        label: "Minimum Readout",
        value: "1″/5″/10″ (0.3mgon/1.5mgon/3mgon) adjustable",
      },
      { label: "Angle Accuracy", value: "2″" },
      { label: "Single Prism", value: "3000 m (good condition)" },
      { label: "Three Prisms", value: "6000 m (good condition)" },
      { label: "Reflective Sheet", value: "800 m" },
      { label: "Distance Accuracy", value: "2 mm + 2 ppm" },
      {
        label: "Measuring Time (Fine/Quick/Tracking)",
        value: "1.5s / 1s / 0.5s",
      },
      { label: "Reflectorless Range", value: "600 m" },
      { label: "Prism Range", value: ">7500 m" },
      { label: "Reflectorless Accuracy", value: "3 mm + 2 ppm" },
      { label: "Reflectorless Time", value: "1.5s" },
      { label: "Magnification", value: "30×" },
      { label: "Field of View", value: "1°30′ (2.7 m at 100 m)" },
      { label: "Minimum Focusing Distance", value: "1.2 m" },
      { label: "Reticle", value: "Illuminated" },
      { label: "Compensator System", value: "Dual-axis liquid tilt sensor" },
      { label: "Compensator Working Range", value: "±3′" },
      { label: "Setting Accuracy", value: "1″" },
      {
        label: "Communication",
        value: "RS232, SD card, USB pen drive, mini-B, Bluetooth",
      },
      { label: "Internal Memory", value: "Approx. 20,000 points" },
      { label: "Data Format", value: "ASCII" },
      { label: "Operation System", value: "Real-time Operating System" },
      { label: "Display", value: "Backlight black and white, 192 × 96 pixels" },
      { label: "Character", value: "6 lines x 25 characters" },
      {
        label: "Keyboard",
        value: "2-sided alphanumeric backlit crystal keyboard",
      },
      {
        label: "Laser Plummet",
        value: "Laser point, 4 brightness levels / optional optical plummet",
      },
      { label: "Centering Accuracy", value: "1 mm at 1.5 m instrument height" },
      {
        label: "Battery Type",
        value: "Rechargeable Li-ion ZBA-400 7.4V / 3000mAh",
      },
      { label: "Operating Time", value: "16 hours / 10 hours typical" },
      { label: "Measuring Times", value: "Approx. 12,000 times" },
      { label: "Weight", value: "Approx. 5.5 kg (incl. battery & tribrach)" },
      { label: "Operating Temperature", value: "-20℃ to +50℃" },
      { label: "Storage Temperature", value: "-40℃ to +70℃" },
      { label: "Ingress Protection", value: "IP65, 95% non-condensing" },
    ],
    brochure: {
      label: "ZTS320R Brochure — (English)",
      href: "/upload/products/zts-320r/BROCH643455.pdf",
      meta: "PDF · 1.9 MB · English",
    },
  },

  // HTS-720 Android Total Station Station

  "hi-target-hts-720-android-total-station": {
    slug: "hi-target-hts-720-android-total-station",
    title: "HTS-720 Android Total Station",
    brand: "Hi-Target",
    category: "Total Stations",
    tagline:
      "Hi-Target HTS-720 Android Total Station for accurate surveying and construction measurements. Easy to use with advanced Android features. This total station is ideal for surveyors, engineers, and construction professionals looking for reliable surveying equipment in India.",
    description: `HTS-720 features a 5.5-inch touch high-definition large screen, powered by the Android operating system and our brand-new Android measurement software. With the addition of a built-in camera, measuring and stakeout tasks have never been easier. Plus, the HTS-720 boasts a high-performance processor, enabling users to select stakeout points and lines with just one click in the CAD stakeout interface, making the entire stakeout process more intuitive and efficient.
`,
    price: "₹4,50,000",
    mrp: "₹4,86,000",
    savings: "7.41% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.6 · 85 verified reviews",
    sku: "HTS-720",
    images: [
      "/upload/products/hts-720/1.png",
      "/upload/products/hts-720/2.png",
      "/upload/products/hts-720/3.png",
    ],
    inTheBox: [
      "1× Hi-Target HTS-720 Android Total Station",
      "1× Battery Charger",
      "1× Data Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "Android 9.0 operating system",
        body: "Runs Android 9.0 providing a familiar interface and support for field apps and third-party survey tools.",
      },
      {
        title: "5.5-inch touchscreen display",
        body: "Large 5.5-inch HD touchscreen with responsive touch control for easier stakeout and data entry on site.",
      },
      {
        title: "Bluetooth & WiFi connectivity",
        body: "Integrated Bluetooth and Wi‑Fi enable wireless data transfer, remote control, and quick syncing with mobile devices.",
      },
      {
        title: "2GB RAM + 16GB storage",
        body: "2GB RAM and 16GB internal storage for smooth app performance and local storage of measurements and projects.",
      },
      {
        title: "Qualcomm processor for fast performance",
        body: "High-performance Qualcomm chipset delivers fast calculations and responsive operation for demanding workflows.",
      },
      {
        title: "8MP camera for visual guidance",
        body: "Built-in 8MP camera captures site images for stakeout verification and easy visual documentation.",
      },
      {
        title: "Type-C charging support",
        body: "USB Type-C charging offers faster recharge and universal compatibility with modern power banks and chargers.",
      },
    ],
    specs: [
      { label: "EDM Range", value: "800 m reflectorless" },
      { label: "Angle Accuracy", value: '1", 2", 3", 5"' },
      { label: "Display", value: "Dual-face LCD" },
      { label: "Battery", value: "Rechargeable Li-ion" },
      { label: "Runtime", value: "18+ hours" },
      { label: "Autofocus", value: "Yes" },
      { label: "Charging", value: "USB Type-C" },
      { label: "Weight", value: "5.0 kg" },
    ],
    brochure: {
      label: "HTS-720 Brochure — (English)",
      href: "/upload/products/hts-720/BROCH201563.pdf",
      meta: "PDF · 1.9 MB · English",
    },
  },

  // V200 GNSS

  "v200-gnss": {
    slug: "v200-gnss",
    title: "V200 GNSS",
    brand: "Hi-Target",
    category: "GNSS / RTK Systems",
    tagline:
      "V200 GNSS RTK Receiver brings superior performance and high efficiency to support your fieldwork with reliable solutions. Its deployment of the advanced RTK",
    description: `Higher Accuracy and Precision

     Equipped with the High-Performance Patch Antenna, enhances the low-elevation angle tracking capabilities and keeps it maintains a high gain for higher-elevation satellites while tracking low-elevation satellites.

More Stability

Hi-Target Hi-Fix enables continuous connectivity and quality results even if you lose the signal while using the RTK base station or VRS network under extreme circumstances.

More Portability

Equipped with an ultra-light EPP material instrument case of high anti-strong impact, shock, and impact resistance and a centering rod that can be contracted to 1.25 m, making it durable and portable in fieldwork.

Greater Flexibility

It can bring accurate and reliable results and boost efficient fieldwork with self-developed built-in IMU and core algorithm.

`,
    price: "₹6,84,000",
    mrp: "₹7,56,000",
    savings: "9.52% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.7 · 64 verified reviews",
    sku: "V200-GNSS",
    images: [
      "/upload/products/v200-gnss/ProdImg921380.png",
      // "/upload/categoryImg/gnss-rtk-systems/ProdImg921380.png",
    ],
    inTheBox: [
      "1× Hi-Target V200 GNSS Receiver",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "Real-time kinematic precision 8 mm H/ 15 mm V",
        body: "Provides 8 mm horizontal and 15 mm vertical RTK precision in real time for accurate survey positioning.",
      },
      {
        title: "Channels 1408/800+",
        body: "Uses 1408/800+ channel tracking to lock more satellites quickly and maintain position stability.",
      },
      {
        title: "Tilt Survey Performance 8 mm +0.7 mm / °tilt",
        body: "Delivers 8 mm baseline accuracy plus 0.7 mm per degree of tilt compensation for tilted pole surveying.",
      },
      {
        title: "Receive and transmit Support multi-protocol radio",
        body: "Supports multi-protocol radio receive and transmit modes for flexible base-rover communication.",
      },
      {
        title: "Signal tracking GPS, GLONASS, Galileo, BDS, QZSS, SBAS, IRNSS",
        body: "Tracks GPS, GLONASS, Galileo, BDS, QZSS, SBAS, and IRNSS signals for better satellite availability.",
      },
    ],
    specs: [
      { label: "GNSS Channels", value: "184+" },
      { label: "RTK Accuracy", value: "±10 mm + 1 ppm" },
      {
        label: "Satellite Systems",
        value: "GPS, GLONASS, Galileo, BeiDou, SBAS",
      },
      { label: "Battery Life", value: "10+ hours" },
      { label: "Operating Temp", value: "-40℃ to +65℃" },
      { label: "Weight", value: "1.35 kg" },
      { label: "Communication", value: "Bluetooth, UHF radio, NTRIP" },
      { label: "Storage", value: "MicroSD" },
    ],
    brochure: {
      label: "V200 GNSS Brochure — (English)",
      href: "/upload/products/v200-gnss/BROCH92370.pdf",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // IRTK4

  irtk4: {
    slug: "irtk4",
    title: "IRTK4",
    brand: "Hi-Target",
    category: "GNSS / RTK Systems",
    tagline:
      "IRTK4 GNSS RTK is a full-featured, intelligent receiver system equipped with an integrated new-generation full-frequency antenna and advanced multi-channel engine, allowing users to attain accurate, reliable solutions.",
    description: `1. New generation advanced RTK engine

     Flexible Satellite signal management helps you get a more accurate solution and provides 20 percent improved performance in challenging GNSS environments.

2. IMU (Icon)

Immediately start with calibration-free tilt compensation technology, which assists you in quickly and accurately surveying or staking out points without leveling the pole, Error less than 3cm within 45° inclination, and boosts working efficiency by 20%.

3. Fast-Charge

Charge your battery to up to 50 percent in just 50 minutes with a 45W adapter, thanks to fast‑charge capability, you can recharge in less time.

4. Web UI

Fast and efficient way to monitor and control hardware devices. In addition, offers access to the most commonly used features via the existing web browser on your device of choice—no need to download or install anything!

Smart Base

Greatly optimize working mode setting, Pairing your Base and Rover automatically by hi-target global service, extending your work range, and saving your time.

`,
    price: "₹6,93,000",
    mrp: "₹7,65,000",
    savings: "9.41% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.7 · 64 verified reviews",
    sku: "IRTK4",
    images: [
      "/upload/products/irtk4/1.png",
      "/upload/products/irtk4/2.png",
      "/upload/products/irtk4/3.png",
    ],
    inTheBox: [
      "1× Hi-Target IRTK4 GNSS Receiver",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "Channels 800+",
        body: "Tracks hundreds of satellites at once to deliver fast, reliable GNSS positioning for survey jobs.",
      },
      {
        title: "Real-time kinematic precision 8 mm H/ 15 mm V",
        body: "Offers centimetre-level RTK accuracy in both horizontal and vertical readings for precise stakeout and mapping.",
      },
      {
        title: "Signal tracking GPS, GLONASS, Galileo, BDS, QZSS, SBAS",
        body: "Maintains strong satellite coverage by supporting multiple global navigation systems and augmentation services.",
      },
      {
        title: "Receive and transmit Support multi-protocol radio",
        body: "Allows flexible base-rover communication using multiple radio standards for robust field data transfer.",
      },
      {
        title: "Hi-RTP (optional) Global Correction Service",
        body: "Adds optional global correction support for faster initialization and improved positioning over wide areas.",
      },
    ],
    specs: [
      { label: "GNSS Channels", value: "184+" },
      { label: "RTK Accuracy", value: "±10 mm + 1 ppm" },
      {
        label: "Satellite Systems",
        value: "GPS, GLONASS, Galileo, BeiDou, SBAS",
      },
      { label: "Battery Life", value: "10+ hours" },
      { label: "Operating Temp", value: "-40℃ to +65℃" },
      { label: "Weight", value: "1.35 kg" },
      { label: "Communication", value: "Bluetooth, UHF radio, NTRIP" },
      { label: "Storage", value: "MicroSD" },
    ],
    brochure: {
      label: "IRTK4 GNSS Brochure — (English)",
      href: "/upload/products/irtk4/BROCH851955.pdf",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // IRTK5

  irtk5: {
    slug: "irtk5",
    title: "IRTK5",
    brand: "Hi-Target",
    category: "GNSS / RTK Systems",
    tagline:
      "iRTK5, the high-quality scalable GNSS receiver, provides an industry-leading GNSS RTK surveying solution.",
    description: `Hi-RTP Global PPP Service

     The correction source has been extended by the Hi-RTP global correction service provided by Hi-Target. Enabling users to work without a base station in rural or remote areas anywhere in the world.

HD Touchable OLED Screen

The newly designed HD OLED screen, which has RGB color and is touchable, has 1.3″ and 240*240 resolutions. Users can quickly check and set the receiver status for easier fieldwork.

Revolutionary Tilt Survey with Built-in IMU

Customers benefit from calibration-free tilt surveys without centering. Once you reach the surveying points, immediately start the operation. Compared with bubble leveling, boosts working efficiency by 20%.

`,
    price: "₹8,64,000",
    mrp: "₹9,45,000",
    savings: "8.57% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.7 · 64 verified reviews",
    sku: "IRTK5",
    images: ["/upload/products/irtk5/1.png", "/upload/products/irtk5/2.png"],
    inTheBox: [
      "1× Hi-Target IRTK5 GNSS Receiver",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "1408/800+ Channels",
        body: "Supports 1408/800+ satellite channels for faster acquisition and more stable GNSS tracking.",
      },
      {
        title: "Real-time kinematic precision 8 mm H/ 15 mm V",
        body: "Delivers 8 mm horizontal and 15 mm vertical RTK precision for accurate real-time field measurements.",
      },
      {
        title: "Receive and transmit Support multi-protocol radio",
        body: "Supports receive and transmit over multi-protocol radio for flexible base-rover communication.",
      },
      {
        title: "Signal tracking GPS, GLONASS, Galileo, BDS, QZSS, SBAS",
        body: "Tracks GPS, GLONASS, Galileo, BDS, QZSS, and SBAS signals for reliable satellite coverage.",
      },
      {
        title: "PPP Service",
        body: "Provides PPP correction service for accurate positioning without a local base station.",
      },
      {
        title: "Revolutionary Tilt Survey with built-in IMU",
        body: "Enables tilt survey with built-in IMU so you can survey without bubble leveling and start work faster.",
      },
    ],
    specs: [
      { label: "GNSS Channels", value: "184+" },
      { label: "RTK Accuracy", value: "±10 mm + 1 ppm" },
      {
        label: "Satellite Systems",
        value: "GPS, GLONASS, Galileo, BeiDou, SBAS",
      },
      { label: "Battery Life", value: "10+ hours" },
      { label: "Operating Temp", value: "-40℃ to +65℃" },
      { label: "Weight", value: "1.35 kg" },
      { label: "Communication", value: "Bluetooth, UHF radio, NTRIP" },
      { label: "Storage", value: "MicroSD" },
    ],
    brochure: {
      label: "IRTK5 GNSS Brochure — (English)",
      href: "/upload/products/irtk5/BROCH804940.pdf",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // VRTK

  vrtk: {
    slug: "vrtk",
    title: "VRTK",
    brand: "Hi-Target",
    category: "GNSS / RTK Systems",
    tagline:
      "vRTK is Hi-Target’s first lightweight and innovative visual RTK receiver product, which not only enables non-contact image surveying, breaking through the objective constraints of previous work, but also improves the speed of stakeout with the function of Live View Stakeout. It greatly improves the work efficiency of engineering users.",
    description: `Dual Cameras for Image Survey and Live View Stakeout

    Non-contact measurement greatly improves the usable range of GNSS and efficient safe operation.

Strong Signal and High-quality Data

-New generation GNSS SOC chip with 1408 channels, supports new frequency points B1C, B2a, and B2b RTK decoding for Beidou-3 Satellites.
-Introduction of multi-frequency anti-jamming technology and multi-step adaptive filtering technology to ensure strong signals, high-quality data, fast fix, and high accuracy.

Abundant Industry Data Results

-Abundant types of data results meet the needs of different industry applications.
-Compatible with the mainstream modelling software to attain point cloud and 3D modelling in one step.

`,
    price: "₹6,93,000",
    mrp: "₹7,65,000",
    savings: "9.41% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.7 · 64 verified reviews",
    sku: "VRTK",
    images: ["/upload/products/vrtk/1.png", "/upload/products/vrtk/2.png"],
    inTheBox: [
      "1× Hi-Target VRTK GNSS Receiver",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "Tilt Survey Accuracy 8mm+0.7mm/°tilts",
        body: "Delivers precise tilt-compensated positioning for fast, reliable pole surveying even when the rod is not perfectly vertical.",
      },
      {
        title: "Channels 1408",
        body: "Uses a high-channel GNSS engine to lock satellites quickly and maintain stable positioning in challenging environments.",
      },
      {
        title: "Satellite Tracking BDS/GPS/GLONASS/GALILEO/QZSS/IRNSS/SBAS",
        body: "Tracks multiple global constellations and SBAS corrections to improve availability and solution reliability on every site.",
      },
      {
        title: "Image Stakeout Accuracy 2cm",
        body: "Supports accurate live-view stakeout with visual guidance and centimetre-level placement for field control tasks.",
      },
      {
        title: "Image Survey Accuracy 2cm ~ 4cm",
        body: "Captures image-based survey data with tight precision for mapping, documentation, and inspection workflows.",
      },
      {
        title: "Data Storage Built-in 8GB ROM",
        body: "Stores large datasets onsite and simplifies workflows with built-in memory for raw measurements and survey logs.",
      },
    ],

    specs: [
      { label: "GNSS Channels", value: "1408" },
      { label: "RTK Accuracy", value: "±10 mm + 1 ppm" },
      {
        label: "Satellite Systems",
        value: "GPS, GLONASS, Galileo, BeiDou, SBAS",
      },
      { label: "Battery Life", value: "10+ hours" },
      { label: "Operating Temp", value: "-40℃ to +65℃" },
      { label: "Weight", value: "1.35 kg" },
      { label: "Communication", value: "Bluetooth, UHF radio, NTRIP" },
      { label: "Storage", value: "MicroSD" },
    ],

    brochure: {
      label: "VRTK GNSS Brochure — (English)",
      href: "/upload/products/vrtk/BROCH842546.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // IHand55

  ihand55: {
    slug: "ihand55",
    title: "IHand55",
    brand: "Hi-Target",
    category: "GNSS / RTK Systems",
    tagline:
      "The iHand55 Handheld Controller is a professional field controller with a big vision. Adopting a full-keyboard design, iHand55 supports the fast charge.",
    description: `5.5”sunlight-readable display capacitive touch screen for fingers or stylus

    Quick charge with internal lithium battery to improve efficiency under long-time job.

    Android 10.0 operating system equipped to maintain the productivity of numerous survey projects and data.

    Alphanumeric full keyboard designed, convenient for different measurement application scenarios.

`,
    price: "₹70,200",
    mrp: "₹78,500",
    savings: "10.57% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.7 · 64 verified reviews",
    sku: "IHand55",
    images: [
      "/upload/products/ihand55/1.png",
      "/upload/products/ihand55/2.jpg",
    ],
    inTheBox: [
      "1× Hi-Target IHand55 GNSS Receiver",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],
    features: [
      {
        title: "Android 10 Operating System",
        body: "Equipped with Android 10 for native app compatibility and a familiar field controller interface.",
      },
      {
        title: "High-capacity Memory",
        body: "Provides 32GB built-in storage and supports T-Flash expansion up to 128GB for large project datasets.",
      },
      {
        title: "Outdoor Touch Display",
        body: "Includes a 5.5-inch high-brightness outdoor capacitive touchscreen that remains readable in sunlight.",
      },
      {
        title: "Full Physical Keyboard",
        body: "Features a full 50-key physical keyboard with separate numbers and letters for fast field input.",
      },
      {
        title: "4G + eSIM Connectivity",
        body: "Offers 4G full Netcom dual SIM dual standby plus built-in eSIM for reliable mobile connectivity.",
      },
      {
        title: "Long Battery Life",
        body: "Built with an 8500mAh battery that supports fast charging and up to 18 hours of continuous work.",
      },
    ],

    specs: [
      { label: "Operating System", value: "Android 10" },
      { label: "Processor", value: "2.0GHz 8-core" },
      {
        label: "Storage",
        value: "32GB internal, expandable to 128GB via T-Flash",
      },
      {
        label: "Display",
        value: "5.5-inch high-brightness outdoor color capacitive touch screen",
      },
      {
        label: "Resolution",
        value: "720 × 1280, sunlight-visible, 600 nits typical",
      },
      {
        label: "Input",
        value:
          "Physical 50-key full keyboard with separate numbers and letters",
      },
      {
        label: "GNSS Positioning",
        value: "Built-in GNSS antenna; GPS + BeiDou + GLONASS; AGPS support",
      },
      {
        label: "Cellular",
        value:
          "4G full Netcom, dual SIM dual standby, built-in eSIM with 3 years data",
      },
      { label: "WiFi", value: "IEEE 802.11 b/g/n, WAPI, AP mode" },
      { label: "Bluetooth", value: "Bluetooth 2.1 + 4.0 + 5.0" },
      { label: "NFC", value: "Supports NFC IGRS" },
      { label: "USB", value: "USB Type-C with OTG support" },
      {
        label: "Battery",
        value: "8500mAh non-removable lithium battery with fast charge",
      },
      { label: "Working Hours", value: "Up to 18 hours continuous use" },
      {
        label: "Camera",
        value: "13MP camera with high-brightness LED flash and torch",
      },
      { label: "Sensors", value: "Gravity, geomagnetic, light, gyroscope" },
      { label: "Size", value: "236 × 85 × 24.5 mm" },
      { label: "Weight", value: "465 g (including battery)" },
      { label: "Operating Temperature", value: "-20℃ to +60℃" },
      { label: "Storage Temperature", value: "-30℃ to +70℃" },
      { label: "Dustproof", value: "IP68" },
      { label: "Drop Resistance", value: "1.8 m free-fall" },
    ],

    brochure: {
      label: "IHand55 GNSS Brochure — (English)",
      href: "/upload/products/ihand55/BROCH617434.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // V30 Plus

  "v30-plus": {
    slug: "v30-plus",
    title: "V30 Plus",
    brand: "Hi-Target",
    category: "GNSS / RTK Systems",
    tagline:
      "Hi-Target GNSS RTK System Model V30Plus With its built-in multi-constellation GNSS RTK engine, smaller dimension, and industrial-grade compact design, V30Plus provides a flexible GNSS work solution. It also integrates with the Web UI, WIFI, Bluetooth, and 4G module to make data management and transmission more convenient and faster.",
    description: `Smart Application
Road
Railway
Bridge
Water conservancy
Industry
Regional geodesy

`,
    price: "₹6,48,000",
    mrp: "₹7,20,000",
    savings: "10.00% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.7 · 64 verified reviews",
    sku: "V30Plus",
    images: [
      "/upload/products/v30-plus/1.png",
      "/upload/products/v30-plus/2.png",
      "/upload/products/v30-plus/3.png",
    ],
    inTheBox: [
      "1× Hi-Target V30 Plus GNSS Receiver",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],

    features: [
      {
        title: "800+ Universal Channels",
        body: "Supports more than 800 satellite channels for faster GNSS acquisition and stable positioning.",
      },
      {
        title: "NFC & WIFI Protocol",
        body: "Includes NFC and WiFi protocols to enable flexible data transfer and smart network access.",
      },
      {
        title: "4G Network Communication",
        body: "Provides 4G connectivity for real-time data transmission and remote survey coordination.",
      },
      {
        title: "Dual 5000mAh Batteries",
        body: "Equipped with two 5000mAh batteries for extended field operation and uninterrupted usage.",
      },
      {
        title: "Support Multi-Protocols Radio",
        body: "Supports multi-protocol radio communication to connect with a wide range of GNSS base stations.",
      },
      {
        title: "8GB Internal Storage",
        body: "Offers 8GB of internal storage for project data and field records.",
      },
      {
        title: "USB Port for I/O",
        body: "Includes a USB port for easy I/O connection with peripherals and data devices.",
      },
      {
        title: "UHF Radio",
        body: "Built-in UHF radio provides reliable long-range data transmission in survey environments.",
      },
    ],

    specs: [
      { label: "GNSS Channels", value: "800+ universal channels" },
      { label: "RTK Engine", value: "Multi-constellation GNSS RTK" },
      { label: "Storage", value: "8GB internal" },
      { label: "Battery", value: "Dual 5000mAh batteries" },
      { label: "Connectivity", value: "4G, WiFi, Bluetooth, NFC, UHF radio" },
      {
        label: "Web UI",
        value: "Built-in web interface for device management",
      },
      { label: "USB", value: "USB port for I/O" },
      { label: "Radio", value: "Supports multi-protocol UHF radio" },
      { label: "Design", value: "Industrial-grade compact GNSS receiver" },
    ],

    brochure: {
      label: "V30 Plus GNSS Brochure — (English)",
      href: "/upload/products/v30-plus/BROCH449257.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // Hi-Target V600L Laser RTK System

  "hi-target-v600l-laser-rtk-system": {
    slug: "hi-target-v600l-laser-rtk-system",
    title: "Hi-Target V600L Laser RTK System",
    brand: "Hi-Target",
    category: "GNSS / RTK Systems",
    tagline:
      "Hi-Target V600L Laser RTK is a GNSS-based laser survey system designed for accurate land surveying and construction projects where direct point access is difficult. It supports precise measurements for road, highway, and infrastructure surveys.",
    description: `Hi-Target V600L Laser RTK System
The Hi-Target V600L Laser RTK System is a next-generation GNSS surveying solution designed to deliver accurate measurements in challenging field conditions where traditional GNSS systems face limitations.

Equipped with integrated laser measurement and advanced tilt compensation, the V600L allows surveyors to capture precise points without physically accessing the target location. This significantly improves field safety, efficiency, and productivity, especially in obstructed or hard-to-reach areas.

The V600L is widely used in road and highway projects, construction layout, infrastructure development, mining operations, and government survey works across India, making it a reliable solution for modern surveying requirements.


`,
    price: "₹6,48,000",
    mrp: "₹7,20,000",
    savings: "10.00% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.7 · 64 verified reviews",
    sku: "V600L",
    images: [
      "/upload/products/hi-target-v600l-laser-rtk-system/1.png",
      "/upload/products/hi-target-v600l-laser-rtk-system/2.png",
      "/upload/products/hi-target-v600l-laser-rtk-system/3.png",
    ],
    inTheBox: [
      "1× Hi-Target V600L Laser RTK System",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],

    features: [
      {
        title: "800+ Universal Channels",
        body: "Supports more than 800 satellite channels for faster GNSS acquisition and stable positioning.",
      },
      {
        title: "NFC & WIFI Protocol",
        body: "Includes NFC and WiFi protocols to enable flexible data transfer and smart network access.",
      },
      {
        title: "4G Network Communication",
        body: "Provides 4G connectivity for real-time data transmission and remote survey coordination.",
      },
      {
        title: "Dual 5000mAh Batteries",
        body: "Equipped with two 5000mAh batteries for extended field operation and uninterrupted usage.",
      },
      {
        title: "Support Multi-Protocols Radio",
        body: "Supports multi-protocol radio communication to connect with a wide range of GNSS base stations.",
      },
      {
        title: "8GB Internal Storage",
        body: "Offers 8GB of internal storage for project data and field records.",
      },
      {
        title: "USB Port for I/O",
        body: "Includes a USB port for easy I/O connection with peripherals and data devices.",
      },
      {
        title: "UHF Radio",
        body: "Built-in UHF radio provides reliable long-range data transmission in survey environments.",
      },
    ],

    specs: [
      {
        label: "Tilt Survey Accuracy (Horizontal)",
        value: "8 mm + 0.7 mm/° (0°–60°)",
      },
      {
        label: "Tilt Survey Accuracy (Vertical)",
        value: "15 mm + 0.7 mm/° (0°–60°)",
      },
      { label: "GNSS Channels", value: "1408 channels" },
      {
        label: "Supported Signals",
        value: "BDS, GPS, GLONASS, GALILEO, QZSS, NavIC, SBAS, PPP",
      },
      { label: "Laser Measurement Accuracy", value: "2 cm within 10 m" },
      { label: "Image Stakeout Accuracy", value: "2 cm" },
      { label: "Data Storage", value: "64 GB internal memory" },
    ],

    brochure: {
      label: "Hi-Target V600L Laser RTK System Brochure — (English)",
      href: "/upload/products/hi-target-v600l-laser-rtk-system/BROCH449257.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // V700S SLAM RTK

  "v700s-slam-rtk": {
    slug: "v700s-slam-rtk",
    title: "V700S SLAM RTK",
    brand: "Hi-Target",
    category: "GNSS / RTK Systems",
    tagline:
      "Hi-Target V700S SLAM RTK System combines GNSS RTK and SLAM technology to deliver accurate survey results in complex and obstructed environments. Ideal for land surveying, infrastructure mapping, and mobile mapping applications.",
    description: `The Hi-Target V700S SLAM RTK System is a next-generation high-precision GNSS receiver designed for advanced land surveying, 3D mapping, and infrastructure measurement applications. Combining powerful RTK positioning technology with SLAM (Simultaneous Localization and Mapping) capabilities, the V700S enables surveyors to capture accurate spatial data in both open-sky and complex environments.

`,
    price: "₹8,40,000",
    mrp: "₹9,33,333",
    savings: "10.00% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.7 · 64 verified reviews",
    sku: "V700S",
    images: [
      "/upload/products/v700s-slam-rtk/1.png",
      "/upload/products/v700s-slam-rtk/2.jpg",
      "/upload/products/v700s-slam-rtk/3.png",
    ],
    inTheBox: [
      "1× Hi-Target V700S SLAM RTK System",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],

    features: [
      {
        title:
          "Advanced SLAM RTK Technology for 3D mapping and point cloud data capture",
        body: "Delivers precise SLAM-enabled positioning and dense 3D point cloud capture across challenging terrain.",
      },
      {
        title:
          "Multi-constellation GNSS support for stable and reliable positioning",
        body: "Combines GPS, GLONASS, BDS, Galileo and NavIC for faster fixes and robust reception in obstructed environments.",
      },
      {
        title:
          "High-performance IMU tilt compensation for flexible field measurements",
        body: "Automatic tilt compensation improves survey accuracy when the instrument is used off-vertical.",
      },
      {
        title:
          "Industrial-grade rugged design for construction and infrastructure projects",
        body: "Built for harsh field use with rugged housing, IP protection, and long battery runtime.",
      },
      {
        title: "Fast data processing and seamless workflow integration",
        body: "Integrated workflow tools and rapid data sync keep field surveys efficient and connected.",
      },
    ],

    specs: [
      { label: "RTK Positioning Accuracy", value: "±8 mm + 1 ppm" },
      {
        label: "SLAM Point Cloud Accuracy",
        value: "Better than 2 cm in normal surveying conditions",
      },
      { label: "GNSS Channels", value: "1408 channels" },
      {
        label: "Supported GNSS Signals",
        value: "GPS, GLONASS, Galileo, BeiDou, QZSS, NavIC, SBAS",
      },
      { label: "Tilt Compensation Range", value: "±60° automatic correction" },
      { label: "Battery Runtime", value: "Up to 10 hours per battery pack" },
      {
        label: "Data Storage",
        value: "64 GB internal memory + USB export support",
      },
    ],

    brochure: {
      label: "Hi-Target V700S SLAM RTK System Brochure — (English)",
      href: "/upload/products/hi-target-v700s-slam-rtk-system/BROCH449257.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // AS-2C/AE-7C

  "as-2cae-7c": {
    slug: "as-2cae-7c",
    title: "AS-2C/AE-7C",
    brand: "Nikon",
    category: "GNSS / RTK Systems",
    tagline:
      "Nikon automatic levels are designed for a variety of elevation control and alignment tasks including general building construction, cut and fill measurements, area leveling, and landscaping.",
    description: `
    Auto Levels AS/AE Series

-Four models to choose from: AS-2, AS-2C, AE-7 and AE-7C
-Compact and lightweight
-Waterproof construction
-Automatic air-dampened compensator
-Standard optical sight lens
-Powerful telescopes with improved minimum focusing
-Carrying case, adjusting pins, and lens cap included


Nikon AS/AE Series auto levels feature waterproof, nitrogen-filled, high-power telescopes that help you make precise measurements even in the wettest conditions. They feature a unique automatic air-dampened compensator to prevent magnetic interference, and an endless horizontal fine drive to ensure smooth, precise pointing and angular measurement. AS/AE Series auto levels are easy to set up and easy to use. All four models can attach to both flat- and spherical-head tripods, and the standard optical sight lens helps you find your target quickly, easily and accurately. A mirror with a pentaprism lets you view the circular bubble as an erect image during setup and sighting.

Auto Levels AP/AC/AX Series

-Three models to choose from: AP-8, AC-2S and AX-2S
-Compact and lightweight
-Water-resistant construction
-Magnetic-dampened automatic compensator
-Horizontal tangent knobs with unlimited range
-Smooth, precise pointing and angular measurement
-Detachable eyepiece lens

AP/AC/AX Series auto levels are easy to set up and use. All three models can attach to both flat-head and spherical-head tripods. Horizontal tangent knobs with an unlimited range ensure smooth, precise pointing and angular measurement, and you can operate them with either hand.
The detachable eyepiece lens lets you use an optional diagonal eyepiece prism for working in extremely close or steep quarters.
All three models offer minimum focusing down to 2.46 ft (0.75 m) for better performance in tight spots or on steep slopes.

`,
    price: "₹9,9000",
    mrp: "₹10,8000",
    savings: "8.33% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.7 · 64 verified reviews",
    sku: "AS-2C/AE-7C",
    images: ["/upload/products/as-2cae-7c/1.png"],
    inTheBox: [
      "1× Hi-Target AS-2C/AE-7C",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],

    features: [
      {
        title:
          "Choice of magnification: 20x (AX-2S), 24x (AC-2S), 28x (AP-8), 30x (AS-2/2C), 32x (AE-7/7C)",
        body: "High-power Nikon optics deliver crisp, clear sighting across all models for accurate leveling and layout work.",
      },
      {
        title: "Choice of magnetic or air-dampened automatic compensators",
        body: "Select the right compensator type to maintain stable, reliable readings on slopes and in changing temperature conditions.",
      },
      {
        title: "Double-sided, continuous horizontal tangent drives",
        body: "Smooth dual-sided tangent drives provide precise fine control for accurate horizontal alignment and angle setting.",
      },
      {
        title: "Stadia lines for simple distance measurement",
        body: "Built-in stadia lines enable quick distance estimation without additional measurement tools, speeding up field layout tasks.",
      },
      {
        title: "Convenient horizontal angle measurement",
        body: "Easy horizontal angle reading supports fast alignment and control point work on the job site.",
      },
      {
        title: "Built-in bubble mirror and optical sighting alignment",
        body: "Integrated sighting tools let you rapidly locate targets and confirm level setup with minimal effort.",
      },
      {
        title: "Metal housing increases durability",
        body: "Rugged metal construction protects the instrument from knocks, dust and rough field handling.",
      },
      {
        title: "Choice of water-resistant or waterproof construction",
        body: "Available in water-resistant and fully waterproof options for dependable performance in wet conditions.",
      },
      {
        title:
          "Nikon optics effectively let in more light, so you see brighter, sharper images-especially in low-light conditions",
        body: "Premium Nikon lenses maximize brightness and clarity, making targets easier to see even in dim light.",
      },
    ],

    specs: [
      { label: "Model Variants", value: "AS-2, AS-2C, AE-7, AE-7C" },
      {
        label: "Magnification",
        value: "30x (AS-2 / AS-2C), 32x (AE-7 / AE-7C)",
      },
      { label: "Minimum Focusing Distance", value: "0.75 m" },
      { label: "Compensator", value: "Automatic air-dampened compensator" },
      {
        label: "Telescopes",
        value: "Waterproof, nitrogen-filled Nikon optics",
      },
      {
        label: "Water Resistance",
        value: "Waterproof / water-resistant construction",
      },
      {
        label: "Tripod Compatibility",
        value: "Flat-head and spherical-head tripods",
      },
      {
        label: "Eyepiece",
        value: "Standard optical sight lens with optional diagonal eyepiece",
      },
    ],

    brochure: {
      label: "Hi-Target AS-2C/AE-7C Brochure — (English)",
      href: "/upload/products/as-2cae-7c/BROCH464595.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // AC-2S/AP-8

  "ac-2sap-8": {
    slug: "ac-2sap-8",
    title: "AC-2S/AP-8",
    brand: "Nikon",
    category: "GNSS / RTK Systems",
    tagline:
      "Nikon AP-8 Auto Level is Compact and lightweight. This Nikon automatic level features a magnetic-dampened automatic compensator to level the line of sight; quality Nikon optics for bright, sharp, detailed",
    description: `
    -Four models to choose from: AS-2, AS-2C, AE-7 and AE-7C
-Compact and lightweight
-Waterproof construction
-Automatic air-dampened compensator
-Standard optical sight lens
-Powerful telescopes with improved minimum focusing
-Carrying case, adjusting pins, and lens cap included

Nikon AS/AE Series auto levels feature waterproof, nitrogen-filled, high-power telescopes that help you make precise measurements even in the wettest conditions. They feature a unique automatic air-dampened compensator to prevent magnetic interference, and an endless horizontal fine drive to ensure smooth, precise pointing and angular measurement. AS/AE Series auto levels are easy to set up and easy to use. All four models can attach to both flat- and spherical-head tripods, and the standard optical sight lens helps you find your target quickly, easily, and accurately. A mirror with a pentaprism lets you view the circular bubble as an erect image during setup and sighting.

Auto Levels AP/AC/AX Series

-Three models to choose from: AP-8, AC-2S and AX-2S
-Compact and lightweight
-Water-resistant construction
-Magnetic-dampened automatic compensator
-Horizontal tangent knobs with unlimited range
-Smooth, precise pointing and angular measurement
-Detachable eyepiece lens

AP/AC/AX Series auto levels are easy to set up and use. All three models can attach to both flat-head and spherical-head tripods. Horizontal tangent knobs with an unlimited range ensure smooth, precise pointing and angular measurement, and you can operate them with either hand.

The detachable eyepiece lens lets you use an optional diagonal eyepiece prism for working in extremely close or steep quarters.

All three models offer minimum focusing down to 2.46 ft (0.75 m) for better performance in tight spots or on steep slopes.

`,
    price: "₹45,000",
    mrp: "₹50,000",
    savings: "10.00% OFF",
    badges: ["In Stock", "Hi-Target"],
    rating: "4.7 · 64 verified reviews",
    sku: "AC-2S/AP-8",
    images: ["/upload/products/ac-2sap-8/1.webp"],
    inTheBox: [
      "1× Hi-Target AC-2S/AP-8",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],

    features: [
      {
        title:
          "Choice of magnification: 20x (AX-2S), 24x (AC-2S), 28x (AP-8), 30x (AS-2/2C), 32x (AE-7/7C)",
        body: "High-power Nikon optics deliver crisp, clear sighting across all models for accurate leveling and layout work.",
      },
      {
        title: "Choice of magnetic or air-dampened automatic compensators",
        body: "Select the right compensator type to maintain stable, reliable readings on slopes and in changing temperature conditions.",
      },
      {
        title: "Double-sided, continuous horizontal tangent drives",
        body: "Smooth dual-sided tangent drives provide precise fine control for accurate horizontal alignment and angle setting.",
      },
      {
        title: "Stadia lines for simple distance measurement",
        body: "Built-in stadia lines enable quick distance estimation without additional measurement tools, speeding up field layout tasks.",
      },
      {
        title: "Convenient horizontal angle measurement",
        body: "Easy horizontal angle reading supports fast alignment and control point work on the job site.",
      },
      {
        title: "Built-in bubble mirror and optical sighting alignment",
        body: "Integrated sighting tools let you rapidly locate targets and confirm level setup with minimal effort.",
      },
      {
        title: "Metal housing increases durability",
        body: "Rugged metal construction protects the instrument from knocks, dust and rough field handling.",
      },
      {
        title: "Choice of water-resistant or waterproof construction",
        body: "Available in water-resistant and fully waterproof options for dependable performance in wet conditions.",
      },
      {
        title:
          "Nikon optics effectively let in more light, so you see brighter, sharper images-especially in low-light conditions",
        body: "Premium Nikon lenses maximize brightness and clarity, making targets easier to see even in dim light.",
      },
    ],

    specs: [
      { label: "Model Variants", value: "AC-2S, AP-8" },
      { label: "Magnification", value: "24x (AC-2S), 28x (AP-8)" },
      { label: "Minimum Focusing Distance", value: "0.75 m" },
      {
        label: "Compensator Type",
        value: "Magnetic-dampened automatic compensator",
      },
      { label: "Stadia Ratio", value: "1:100" },
      { label: "Horizontal Circle", value: "360° graduated circle" },
      {
        label: "Optical System",
        value: "Nikon high-power optics with bright, sharp sighting",
      },
      { label: "Construction", value: "Water-resistant metal housing" },
      {
        label: "Tripod Compatibility",
        value: "Flat-head and spherical-head tripods",
      },
      {
        label: "Eyepiece",
        value: "Detachable eyepiece lens for close or steep observations",
      },
    ],

    brochure: {
      label: "Hi-Target AC-2S/AP-8 Brochure — (English)",
      href: "/upload/products/ac-2sap-8/BROCH692468.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // GOL-26D

  "gol-26d": {
    slug: "gol-26d",
    title: "GOL-26D",
    brand: "Bosch",
    category: "Auto Digital Levels",
    tagline: "GOL 26 D PROFESSIONAL OPTICAL LEVEL",
    description: `
    Extremely robust – ideal for outdoor use
Designed for outdoor use due to sturdy metal housing with dust and splash protection (IP54)
Robust design with built-in target collimator and integrated circular vial
Compensator lock for safe transport

`,
    price: "₹18,000",
    mrp: "₹18,100",
    savings: "0.55% OFF",
    badges: ["In Stock", "Bosch"],
    rating: "4.7 · 64 verified reviews",
    sku: "GOL-26D",
    images: [
      "/upload/products/gol-26d/1.jpg",
      "/upload/products/gol-26d/2.jpg",
    ],
    inTheBox: [
      "1× Bosch GOL-26D Optical Level",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "26× magnification for precise leveling",
        body: "High-power optics deliver sharp, accurate sighting across the full field of view.",
      },
      {
        title: "Dust and splash protection",
        body: "IP54-rated housing keeps the instrument protected from dust and water splashes while working outdoors.",
      },
      {
        title: "360° unit of measure",
        body: "Full 360-degree measurement support makes horizontal angle setup and repeated leveling fast and reliable.",
      },
      {
        title: "High accuracy at distance",
        body: "Provides ±1.6 mm accuracy at 30 m for dependable control and layout work.",
      },
      {
        title: "100 m working range",
        body: "Long 100-meter range reduces the need to move the instrument for distant targets.",
      },
      {
        title: "Secure tripod mounting",
        body: 'Standard 5/8" tripod thread gives a stable connection with professional survey tripods.',
      },
    ],

    specs: [
      { label: "Magnification", value: "26×" },
      { label: "Dust and splash protection", value: "IP54" },
      { label: "Unit of measure", value: "360 degrees" },
      { label: "Accuracy", value: "± 1.6 mm at 30 m" },
      { label: "Working range", value: "100 m" },
      { label: "Tripod thread", value: '5/8"' },
      { label: "Operating temperature", value: "-10 – 50 °C" },
      { label: "Storage temperature", value: "-20 – 70 °C" },
      { label: "Weight, approx.", value: "1.5 kg" },
    ],

    brochure: {
      label: "Bosch GOL-26D Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // GOL-32D

  "gol-32d": {
    slug: "gol-32d",
    title: "GOL-32D",
    brand: "Bosch",
    category: "Auto Digital Levels",
    tagline: "GOL 32 D PROFESSIONAL OPTICAL LEVEL",
    description: `
Robust and reliable – ideal for outdoor use
Ideal for outdoor use due to its robust housing with dust and splash protection (IP54)
Fast aperture for a sharp image of the target
Compensator lock for safe transport

`,
    price: "₹22,500",
    mrp: "₹21,650",
    savings: "3.93% OFF",
    badges: ["In Stock", "Bosch"],
    rating: "4.8 · 72 verified reviews",
    sku: "GOL-32D",
    images: ["/upload/products/gol-32d/1.webp"],
    inTheBox: [
      "1× Bosch GOL-32D Optical Level",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "32× magnification for superior detail",
        body: "Powerful optics make small targets easier to see and align precisely on distant staffs.",
      },
      {
        title: "IP54 dust and splash protection",
        body: "Durable weather protection lets you use the instrument confidently in outdoor conditions.",
      },
      {
        title: "360° unit of measure",
        body: "Full-circle readings support fast and repeatable horizontal angle work.",
      },
      {
        title: "High accuracy at 30 m",
        body: "Designed to deliver ±1 mm accuracy at 30 m for precise leveling and alignment tasks.",
      },
      {
        title: "120 m working range",
        body: "Long-range performance extends measurement capability to 120 m without frequent repositioning.",
      },
      {
        title: "Professional tripod compatibility",
        body: 'Standard 5/8" tripod thread ensures stable, professional mounting.',
      },
    ],

    specs: [
      { label: "Magnification", value: "32×" },
      { label: "Dust and splash protection", value: "IP54" },
      { label: "Unit of measure", value: "360 degrees" },
      { label: "Accuracy", value: "± 1 mm at 30 m" },
      { label: "Working range", value: "120 m" },
      { label: "Tripod thread", value: '5/8"' },
      { label: "Operating temperature", value: "-10 – 50 °C" },
      { label: "Storage temperature", value: "-20 – 70 °C" },
      { label: "Weight, approx.", value: "1.5 kg" },
    ],

    brochure: {
      label: "Bosch GOL-32D Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // Self-levelling AUTO LEVEL

  "self-levelling-auto-level": {
    slug: "self-levelling-auto-level",
    title: "Self-levelling AUTO LEVEL",
    brand: "Sankon",
    category: "Auto Digital Levels",
    tagline:
      "SK-338D is equipped with pioneer self-leveling technology which has Intellectual Property Rights. The Auto Level has a self-leveling feature with working Range of ±7°. It’s voice broadcast function can deal with any noisy environment.",
    description: `

-Self-leveling
-World pioneer self-leveling,
-Voice Broadcast Technology,
-Convenient to measure.

`,
    price: "₹28,500",
    mrp: "₹30,000",
    savings: "5.00% OFF",
    badges: ["In Stock", "Sankon"],
    rating: "4.8 · 72 verified reviews",
    sku: "SK-338D",
    images: [
      "/upload/products/self-levelling-auto-level/1.png",
      "/upload/products/self-levelling-auto-level/2.png",
    ],
    inTheBox: [
      "1× Sankon SK-338D Self-levelling Auto Level",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Unique Imaging Technology",
        body: "Advanced optics and target imaging deliver crisp, high-contrast views for fast, accurate leveling.",
      },
      {
        title: "Water Proof Technology",
        body: "IP54-rated protection shields the instrument from dust and splashes during outdoor field work.",
      },
      {
        title: "Battery Capacity 800mAh",
        body: "A built-in 800mAh battery provides dependable power for long measurement sessions on the job.",
      },
      {
        title: "Automatic Tightening Foot Screw",
        body: "The auto-tightening foot screw locks the level securely to the tripod for stable, vibration-free readings.",
      },
      {
        title: "High-Volume Voice Broadcasting",
        body: "Clear voice prompts and alerts make setup and operation easier, even in noisy outdoor environments.",
      },
    ],

    specs: [
      { label: "Self-leveling", value: "Automatic" },
      { label: "Self-leveling range", value: "±7°" },
      { label: "Voice broadcast", value: "Yes" },
      { label: "Battery Capacity", value: "800 mAh" },
      { label: "Dust and splash protection", value: "IP54" },
      { label: "Tripod thread", value: '5/8"' },
      { label: "Operating temperature", value: "-10 – 50 °C" },
      { label: "Storage temperature", value: "-20 – 70 °C" },
      { label: "Weight, approx.", value: "1.5 kg" },
    ],

    brochure: {
      label: "Bosch GOL-32D Brochure — (English)",
      href: "/upload/products/self-levelling-auto-level/BROCH533580.pdf",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // NE-100/NE-101

  "ne-100ne-101": {
    slug: "ne-100ne-101",
    title: "NE-100/NE-101",
    brand: "Nikon",
    category: "Digital Theodolites",
    tagline:
      "Ease of use, reliability, and durability make the Nikon NE-100 and NE-101 series theodolites a smart choice for your general construction, alignment, and layout applications. These affordable instruments, featuring the familiar Nikon quality, are ideal for concrete form alignment, anchor bolt positioning, and steel column erection. The theodolites enable a number of positioning techniques: 90-degree layout, checking angles, alignment, and plumb, as well as short-range grade work and leveling",
    description: `
Designed for general construction and survey applications, Nikon NE-100 Series electronic digital theodolites give you accurate measurements in an affordable, easy-to-use platform. Each of the four models has an ergonomic keypad with one-touch keys for all functions, and a large backlit LCD display helps you work productively in the field.

You can instantly convert vertical angles to percent of grade, reset the horizontal angle to zero and lock the horizontal angle displayed on the LCD while you reposition or repeat a measurement. Angle accuracies differ between the models. The NE-100 offers 10" angle accuracy, while the NE-101 offers 7". Both the NE-102 and 103 models offer 5" angle accuracy with the NE-103 featuring vertical axis compensation NE-102 and NE-103 also have a rear display and keypad.

NE-100 series theodolites feature five easy-to-use, one-touch keys: four to perform all common functions and a fifth to control the backlit LCD display and reticle illumination. NE-100 Series theodolites feature a built-in reticle illuminator and backlit LCD display that allow you to work inside buildings as well as in tunnels, mines and other environments with little or no light. These features also come in handy during low light conditions outdoors, such as near dawn or dusk.

Unlike other instruments that require specialized batteries, NE-100 Series theodolites use six standard AA batteries. What's more, those batteries can power all models for about 48 hours. A three-level bar graph on the LCD screen displays remaining battery power.

With the Nikon NE-100 Series theodolite models, you can count on reliable performance in tough conditions. The NE-100/101 models have an IP54 rating, meaning water can splash on them from any direction with no harmful effects. Nikon NE-102/103 models have a higher rating of IP56 which means they're waterproof and dustproof.

For more information, please check: http://www.nikonpositioning.com/

`,
    price: "₹2,43,000",
    mrp: "₹2,70,000",
    savings: "10.00% OFF",
    badges: ["In Stock", "Nikon"],
    rating: "4.8 · 72 verified reviews",
    sku: "NE-100/NE-101",
    images: ["/upload/products/ne-100ne-101/1.png"],
    inTheBox: [
      "1× Nikon NE-100 Series Theodolite",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Four models to choose from: NE-100/101/102/103",
        body: "NE-100, NE-101, NE-102, and NE-103 are available so you can match the right accuracy and feature set to your project.",
      },
      {
        title: "Accurate, affordable, easy to use",
        body: "Dependable Nikon measurement performance and straightforward controls make these models ideal for general construction and layout work.",
      },
      {
        title: "Ergonomic keypad",
        body: "A tactile, low-profile keypad helps you enter commands quickly and comfortably without distracting from the job.",
      },
      {
        title: "One-touch function keys",
        body: "Dedicated function keys provide fast access to common operations like angle reset, display control, and lock functions.",
      },
      {
        title: "Large, backlit LCD display",
        body: "The spacious, backlit screen keeps angle readings easy to see in tunnels, low light, or early-morning job conditions.",
      },
      {
        title: "NE-100/101 models are water-resistant",
        body: "NE-100 and NE-101 carry IP54 protection to resist dust and splashes on the job site.",
      },
      {
        title: "NE-102/103 models are waterproof",
        body: "NE-102 and NE-103 step up to IP56 water resistance for stronger protection in wetter field conditions.",
      },
      {
        title: "5, 7 and 10 accuracies available",
        body: 'Choose 10" accuracy with NE-100 or 7" accuracy with NE-101, while the higher models offer 5" precision.',
      },
    ],

    specs: [
      { label: "Instrument Type", value: "Electronic digital theodolite" },
      { label: "Angle Accuracy", value: '10" (NE-100), 7" (NE-101)' },
      { label: "Display", value: "Large backlit LCD" },
      { label: "Reticle Illumination", value: "Built-in illuminator" },
      { label: "Battery", value: "6 × AA batteries" },
      { label: "Battery Life", value: "Up to 48 hours" },
      { label: "Water Resistance", value: "IP54 (NE-100/NE-101)" },
      { label: "Models", value: "NE-100, NE-101" },
    ],

    brochure: {
      label: "Bosch GOL-32D Brochure — (English)",
      href: "/upload/products/ne-100ne-101/BROCH304080.pdf",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // NE-102/NE-103

  "ne-102ne-103": {
    slug: "ne-102ne-103",
    title: "NE-102/NE-103",
    brand: "Nikon",
    category: "Digital Theodolites",
    tagline:
      "Nikon NE-100 Series electronic digital theodolites give you accurate measurements in an affordable, easy-to-use platform",
    description: `

Designed for general construction and survey applications, Nikon NE-100 Series electronic digital theodolites give you accurate measurements in an affordable, easy-to-use platform. Each of the four models has an ergonomic keypad with one-touch keys for all functions, and a large backlit LCD display helps you work productively in the field.

You can instantly convert vertical angles to percent of grade, reset the horizontal angle to zero and lock the horizontal angle displayed on the LCD while you reposition or repeat a measurement. Angle accuracies differ between the models. The NE-100 offers 10″ angle accuracy, while the NE-101 offers 7″. Both the NE-102 and 103 models offer 5″ angle accuracy with the NE-103 featuring vertical axis compensation NE-102 and NE-103 also have a rear display and keypad.

NE-100 series theodolites feature five easy-to-use, one-touch keys: four to perform all common functions and a fifth to control the backlit LCD display and reticle illumination. NE-100 Series theodolites feature a built-in reticle illuminator and backlit LCD display that allow you to work inside buildings as well as in tunnels, mines and other environments with little or no light. These features also come in handy during low light conditions outdoors, such as near dawn or dusk.

Unlike other instruments that require specialized batteries, NE-100 Series theodolites use six standard AA batteries. What’s more, those batteries can power all models for about 48 hours. A three-level bar graph on the LCD screen displays remaining battery power.

With the Nikon NE-100 Series theodolite models, you can count on reliable performance in tough conditions. The NE-100/101 models have an IP54 rating, meaning water can splash on them from any direction with no harmful effects. Nikon NE-102/103 models have a higher rating of IP56 whi

`,
    price: "₹3,24,000",
    mrp: "₹3,60,00",
    savings: "10.00% OFF",
    badges: ["In Stock", "Nikon"],
    rating: "4.8 · 72 verified reviews",
    sku: "NE-102/NE-103",
    images: ["/upload/products/ne-102ne-103/1.png"],
    inTheBox: [
      "1× Nikon NE-102/NE-103 Self-levelling Auto Level",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Four models to choose from: NE-100/101/102/103",
        body: "Select the model that fits your accuracy and application needs, from general construction to precision survey work.",
      },
      {
        title: "Accurate, affordable, easy to use",
        body: "Designed for reliable performance in the field, with intuitive controls and Leica-quality Nikon optics at a competitive price.",
      },
      {
        title: "Ergonomic keypad",
        body: "Comfortable one-touch keys let you operate the instrument quickly and reduce user fatigue during long shifts.",
      },
      {
        title: "One-touch function keys",
        body: "Dedicated function keys provide fast access to angle reset, display control, and measurement locking.",
      },
      {
        title: "Large, backlit LCD displayg",
        body: "A bright backlit display makes readings easy to see in low light, tunnels, and early morning or late evening work.",
      },
      {
        title: "NE-100/101 models are water-resistant",
        body: "NE-100 and NE-101 models carry IP54 protection to resist dust and splashes on the job site.",
      },
      {
        title: "NE-102/103 models are waterproof",
        body: "NE-102 and NE-103 models are rated IP56 for stronger protection against water ingress in harsher conditions.",
      },
      {
        title: "5″, 7″ and 10″ accuracies available",
        body: "Choose from 5″, 7″, or 10″ accuracy depending on your precision requirements and budget.",
      },
    ],

    specs: [
      { label: "Instrument Type", value: "Electronic digital theodolite" },
      { label: "Angle Accuracy", value: "5″, 7″, 10″ depending on model" },
      { label: "Display", value: "Large backlit LCD" },
      { label: "Reticle Illumination", value: "Built-in illuminator" },
      { label: "Battery", value: "6 × AA batteries" },
      { label: "Battery Life", value: "Up to 48 hours" },
      {
        label: "Water Resistance",
        value: "IP56 (NE-102/103) / IP54 (NE-100/101)",
      },
      { label: "Models", value: "NE-100, NE-101, NE-102, NE-103" },
    ],

    brochure: {
      label: "Bosch GOL-32D Brochure — (English)",
      href: "/upload/products/ne-102ne-103/BROCH56787.pdf",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // GRL-350-HV

  "grl-350-hv": {
    slug: "grl-350-hv",
    title: "GRL-350-HV",
    brand: "Bosch",
    category: "Laser Levels",
    tagline: "GRL 350 HV PROFESSIONAL ROTATION LASER",
    description: `

Rotational laser for horizontal and vertical application with manual dual slope
Versatile - Horizontal and vertical manual dual slope function enable change in grade in two-axis application
Flexible - Variable-speed and Scan-angle selection allow optimum usability at different lighting conditions
Robust - IP 56 rated to protect against dust and water for tough jobsite conditions, with shock-warning function to alert error due to vibration
`,
    price: "₹72000",
    mrp: "₹91200",
    savings: "21.05% OFF",
    badges: ["In Stock", "Bosch"],
    rating: "4.8 · 72 verified reviews",
    sku: "GRL-350-HV",
    images: [
      "/upload/products/grl-350-hv/1.png",
      "/upload/products/grl-350-hv/2.jpg",
    ],
    inTheBox: [
      "1× Bosch GRL-350-HV Rotational Laser",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Long-range receiver support",
        body: "Achieve dependable performance over up to 350 m with the receiver, making it ideal for large construction and surveying jobs.",
      },
      {
        title: "Rugged IP 56 weather protection",
        body: "Dust and splash resistance helps the laser stay dependable in harsh outdoor conditions and tough jobsite environments.",
      },
      {
        title: "Precise horizontal and vertical accuracy",
        body: "The GRL-350-HV delivers accurate results with ±1.5 mm at 30 m horizontal and ±3.0 mm at 30 m vertical.",
      },
      {
        title: "Fast self-levelling performance",
        body: "A self-levelling range of ±5° and a 30-second levelling time provide quick setup and stable operation.",
      },
      {
        title: "Flexible rotation speeds",
        body: "Choose between 0, 150, 300, and 600 min−1 to match the task, environment, and visibility needs.",
      },
      {
        title: "Extended operating time",
        body: "Powered by 2 × 1.5 V LR20 (D) batteries, the unit provides up to 30 hours of reliable operation.",
      },
    ],

    specs: [
      { label: "Working range", value: "Up to 60 m" },
      { label: "Working range with receiver", value: "Up to 350 m (Diameter)" },
      { label: "Dust and splash protection", value: "IP 56" },
      { label: "Laser diode", value: "630 – 650 nm, < 5 mW" },
      { label: "Operating temperature", value: "-10 – 50 °C" },
      { label: "Storage temperature", value: "-20 – 70 °C" },
      { label: "Laser class", value: "3R" },
      {
        label: "Accuracy",
        value: "± 1.5 mm at 30 m horizontal, ± 3.0 mm at 30 m vertical",
      },
      { label: "Self-levelling range", value: "± 5° (8%)" },
      { label: "Levelling time", value: "30 s" },
      { label: "Rotation speed", value: "0 / 150 / 300 / 600 min−1" },
      { label: "Power supply", value: "2 × 1.5 V LR20 (D)" },
      { label: "Operating time (max.)", value: "30 h" },
      { label: "Tripod thread", value: '5/8"' },
      { label: "Weight, approx.", value: "1.8 kg" },
      { label: "Colour of laser line", value: "Red" },
      { label: "Colour of plumb points", value: "Red" },
    ],

    brochure: {
      label: "GRL-350-HV Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // gll-3-15-x

  "gll-3-15-x": {
    slug: "gll-3-15-x",
    title: "GLL-3-15-X",
    brand: "Bosch",
    category: "Laser Levels",
    tagline: "GLL 3-15 X PROFESSIONAL LINE LASER",
    description: `

For easy decorative interior fitting applications
Maximum precision thanks to the Bosch Pendulum Precision System
Projection of a vertical and a horizontal line
Detachable, 360° rotating platform with bubble vial and fine adjustment
`,
    price: "₹9000",
    mrp: "₹13245",
    savings: "32.05% OFF",
    badges: ["In Stock", "Bosch"],
    rating: "4.8 · 72 verified reviews",
    sku: "GLL 3-15 X",
    images: [
      "/upload/products/gll-3-15-x/1.png",
      "/upload/products/gll-3-15-x/2.jpg",
      "/upload/products/gll-3-15-x/3.jpg",
    ],
    inTheBox: [
      "1× Bosch GLL-3-15-X Line Laser",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Three-line projection with plumb point",
        body: "Projects three precise laser lines plus one plumb point for fast alignment, squaring, and layout tasks.",
      },
      {
        title: "Reliable accuracy over short to medium range",
        body: "Offers horizontal line accuracy of ±0.2 mm/m and vertical line accuracy of ±0.3 mm/m for dependable indoor work.",
      },
      {
        title: "Fast automatic levelling",
        body: "Self-levelling within ±3° and a 4-second levelling time make setup quick and effortless on-site.",
      },
      {
        title: "Lightweight and portable",
        body: "Weighing only 0.5 kg, this laser is easy to carry and ideal for job sites where mobility matters.",
      },
      {
        title: "Long-lasting battery performance",
        body: "Powered by 4 × 1.5 V AA batteries, it delivers up to 24 hours of operation for full-day work.",
      },
      {
        title: "Built for everyday jobsite use",
        body: "Designed to perform reliably in temperatures from -10°C to 45°C, with durable red-line visibility and simple handling.",
      },
    ],

    specs: [
      { label: "Working range", value: "15 m" },
      { label: "Working range with receiver", value: "50 m" },
      {
        label: "Accuracy",
        value:
          "Horizontal laser line: ± 0.2 mm/m; Vertical laser lines: ± 0.3 mm/m (plus use-dependent deviation)",
      },
      { label: "Projection", value: "3 lines + 1 plumb point" },
      { label: "Laser diode", value: "630 – 650 nm, < 1 mW" },
      { label: "Operating temperature", value: "-10 – 45 °C" },
      { label: "Storage temperature", value: "-20 – 70 °C" },
      { label: "Laser class", value: "2" },
      { label: "Working range of laser points, max.", value: "5 m (bottom)" },
      { label: "Self-levelling range", value: "± 3°" },
      { label: "Levelling time", value: "4 s" },
      { label: "Power supply", value: "4 × 1.5 V LR6 (AA)" },
      { label: "Operating time (max.)", value: "24 h" },
      { label: "Tripod thread", value: '5/8"' },
      { label: "Weight, approx.", value: "0.5 kg" },
      { label: "Colour of laser line", value: "Red" },
      { label: "Colour of plumb points", value: "Red" },
      {
        label: "Plumb point accuracy",
        value: "± 0.7 mm/m (plus use-dependent deviation)",
      },
    ],

    brochure: {
      label: "GLL-3-15-X Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // GLL 5-50 X

  "gll-5-50-x": {
    slug: "gll-5-50-x",
    title: "GLL 5-50 X",
    brand: "Bosch",
    category: "Laser Levels",
    tagline: "GLL 5-50 X PROFESSIONAL",
    description: `

For easy decorative interior fitting applications
Maximum precision thanks to the Bosch Pendulum Precision System
Projection of a vertical and a horizontal line
Detachable, 360° rotating platform with bubble vial and fine adjustment
`,
    price: "₹13500",
    mrp: "₹19475",
    savings: "30.68% OFF",
    badges: ["In Stock", "Bosch"],
    rating: "4.8 · 72 verified reviews",
    sku: "GLL 5-50 X",
    images: [
      "/upload/products/GLL 5-50 X/1.png",
      "/upload/products/GLL 5-50 X/2.jpg",
    ],
    inTheBox: [
      "1× Bosch GLL 5-50 X Line Laser",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Three-line projection with plumb point",
        body: "Projects three precise laser lines plus one plumb point for fast alignment, squaring, and layout tasks.",
      },
      {
        title: "Reliable accuracy over short to medium range",
        body: "Offers horizontal line accuracy of ±0.2 mm/m and vertical line accuracy of ±0.3 mm/m for dependable indoor work.",
      },
      {
        title: "Fast automatic levelling",
        body: "Self-levelling within ±3° and a 4-second levelling time make setup quick and effortless on-site.",
      },
      {
        title: "Lightweight and portable",
        body: "Weighing only 0.5 kg, this laser is easy to carry and ideal for job sites where mobility matters.",
      },
      {
        title: "Long-lasting battery performance",
        body: "Powered by 4 × 1.5 V AA batteries, it delivers up to 24 hours of operation for full-day work.",
      },
      {
        title: "Built for everyday jobsite use",
        body: "Designed to perform reliably in temperatures from -10°C to 45°C, with durable red-line visibility and simple handling.",
      },
    ],

    specs: [
      { label: "Working range", value: "15 m" },
      { label: "Working range with receiver", value: "50 m" },
      {
        label: "Accuracy",
        value:
          "Horizontal laser line: ± 0.2 mm/m; Vertical laser lines: ± 0.3 mm/m (plus use-dependent deviation)",
      },
      { label: "Projection", value: "3 lines + 1 plumb point" },
      { label: "Laser diode", value: "630 – 650 nm, < 1 mW" },
      { label: "Operating temperature", value: "-10 – 45 °C" },
      { label: "Storage temperature", value: "-20 – 70 °C" },
      { label: "Laser class", value: "2" },
      { label: "Working range of laser points, max.", value: "5 m (bottom)" },
      { label: "Self-levelling range", value: "± 3°" },
      { label: "Levelling time", value: "4 s" },
      { label: "Power supply", value: "4 × 1.5 V LR6 (AA)" },
      { label: "Operating time (max.)", value: "24 h" },
      { label: "Tripod thread", value: '5/8"' },
      { label: "Weight, approx.", value: "0.5 kg" },
      { label: "Colour of laser line", value: "Red" },
      { label: "Colour of plumb points", value: "Red" },
      {
        label: "Plumb point accuracy",
        value: "± 0.7 mm/m (plus use-dependent deviation)",
      },
    ],

    brochure: {
      label: "GLL-5-50-X Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // GLL 3-80 CG

  "gll-3-80-cg": {
    slug: "gll-3-80-cg",
    title: "GLL 3-80 CG",
    brand: "Bosch",
    category: "Laser Levels",
    tagline: "GLL 3-80 CG PROFESSIONAL LINE LASER",
    description: `

Green supreme visibility in 3 x 360°. Simply connected.
Up to four times better visibility due to the green laser lines
Bluetooth® connection to your smartphone for remote control use and contactless adjustment of the tool
High work efficiency due to 3 x 360° lines: Simultaneous performance of horizontal and vertical levelling applications in the entire room with only one tool
`,
    price: "₹63000",
    mrp: "₹75600",
    savings: "16.67% OFF",
    badges: ["In Stock", "Bosch"],
    rating: "4.8 · 72 verified reviews",
    sku: "GLL 3-80 CG",
    images: [
      "/upload/products/gll-3-80-cg/1.png",
      "/upload/products/gll-3-80-cg/2.jpg",
    ],
    inTheBox: [
      "1× Bosch GLL 3-80 CG Line Laser",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Bright green 360° visibility",
        body: "Delivers up to four times better visibility with green laser lines, making indoor layout work easier to see and follow.",
      },
      {
        title: "Three 360° lines for full-room layout",
        body: "Projects three 360° lines to handle horizontal and vertical leveling tasks simultaneously with one tool.",
      },
      {
        title: "Bluetooth control for convenient operation",
        body: "Connects to your smartphone for remote control and contactless adjustment, improving speed and convenience on site.",
      },
      {
        title: "Accurate and fast self-levelling",
        body: "Self-levels within ±4° and reaches levelling readiness in just 4 seconds for efficient setup.",
      },
      {
        title: "Flexible power options",
        body: "Works with a 12 V Li-Ion battery or 4 × AA batteries, giving you dependable performance for different job conditions.",
      },
      {
        title: "Compact and practical for daily use",
        body: "Weighing about 0.9 kg and designed for indoor and light outdoor applications, it is easy to move between jobs.",
      },
    ],

    specs: [
      { label: "Working range", value: "30 m" },
      { label: "Working range with receiver", value: "120 m" },
      { label: "Working range without receiver", value: "30 m" },
      { label: "Dust and splash protection", value: "IP 54" },
      { label: "Accuracy", value: "± 0.2 mm/m" },
      { label: "Projection", value: "3 × 360° line" },
      { label: "Laser diode", value: "500 – 540 nm, < 10 mW" },
      { label: "Operating temperature", value: "-10 – 40 °C" },
      { label: "Storage temperature", value: "-20 – 70 °C" },
      { label: "Laser class", value: "2" },
      { label: "Self-levelling range", value: "± 4°" },
      { label: "Levelling time", value: "4 s" },
      {
        label: "Power supply",
        value: "12 V Li-Ion battery, 4 × 1.5 V LR6 (AA)",
      },
      {
        label: "Operating time (max.)",
        value: "6 h (Li-Ion) and 4 h (4 × AA) in 3-line mode",
      },
      { label: "Tripod thread", value: '1/4", 5/8"' },
      { label: "Weight, approx.", value: "0.9 kg" },
      { label: "Colour of laser line", value: "Green" },
      { label: "Compatible laser receivers", value: "LR 7" },
    ],

    brochure: {
      label: "GLL-3-80-CG Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // liquid-limit-device-hand-operated-with-counter

  "liquid-limit-device-hand-operated-with-counter": {
    slug: "liquid-limit-device-hand-operated-with-counter",
    title: "Liquid Limit Device, Hand Operated with Counter",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "The apparatus consists of a brass cup, a crank and cam mechanism, mounted on a rubber base of a specified hardness. A brass pin having a knurled end for easy removal holds the brass cup. The height of fall of the cup can be adjusted by a horizontal lead screw. The device is fitted with a drop counter to automatically record number of drops of the cup",
    description: `

The apparatus consists of a brass cup, a crank and cam mechanism, mounted on a rubber base of a specified hardness. A brass pin having a knurled end for easy removal holds the brass cup. The height of fall of the cup can be adjusted by a horizontal lead screw. The device is fitted with a drop counter to automatically record number of drops of the cup
`,
    price: "₹5100",
    mrp: "₹5500",
    savings: "7.27% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Liquid Limit Device, Hand Operated with Counter",
    images: [
      "/upload/products/liquid-limit-device-hand-operated-with-counter/1.jpg",
    ],
    inTheBox: [
      "1× Liquid Limit Device, Hand Operated with Counter",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Precision drop mechanism",
        body: "The brass cup and crank-and-cam system provide controlled, repeatable drops for reliable liquid limit testing.",
      },
      {
        title: "Adjustable fall height",
        body: "The cup height can be adjusted with a horizontal lead screw to suit different testing requirements.",
      },
      {
        title: "Easy cup removal",
        body: "A brass pin with a knurled end allows the cup to be removed quickly and securely when needed.",
      },
      {
        title: "Automatic counting",
        body: "The built-in drop counter records the number of drops automatically, reducing manual effort and improving accuracy.",
      },
      {
        title: "Stable base support",
        body: "Mounted on a rubber base of specified hardness, the apparatus offers stable operation during repeated testing.",
      },
    ],

    specs: [
      { label: "Apparatus type", value: "Liquid limit device, hand operated" },
      { label: "Cup material", value: "Brass" },
      { label: "Cup retention", value: "Brass pin with knurled end" },
      { label: "Drive mechanism", value: "Crank and cam mechanism" },
      { label: "Base", value: "Rubber base of specified hardness" },
      { label: "Height adjustment", value: "Horizontal lead screw" },
      { label: "Recording feature", value: "Automatic drop counter" },
      { label: "Application", value: "Liquid limit testing of soils" },
    ],

    brochure: {
      label: "GLL-3-80-CG Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // liquid-limit-cone-penetrometer

  "liquid-limit-cone-penetrometer": {
    slug: "liquid-limit-cone-penetrometer",
    title: "Liquid Limit Cone Penetrometer",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "A stainless steel cone with half angle of 15°30’ and 30.5 mm coned length, having smooth polished surface, fitted to a bearing rod moving against a graduated scale.   Penetration trough of 50 mm dia and 50 mm deep made of brass.",
    description: `

 A stainless steel cone with half angle of 15°30’ and 30.5 mm coned length, having smooth polished surface, fitted to a bearing rod moving against a graduated scale.
  Penetration trough of 50 mm dia and 50 mm deep made of brass.
`,
    price: "₹1800",
    mrp: "₹2000",
    savings: "10.00% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Liquid Limit Cone Penetrometer",
    images: ["/upload/products/liquid-limit-cone-penetrometer/1.png"],
    inTheBox: [
      "1× Liquid Limit Cone Penetrometer",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Precision stainless steel cone",
        body: "The cone is made from stainless steel with a smooth polished surface, ensuring reliable penetration behavior during soil testing.",
      },
      {
        title: "Standard cone geometry",
        body: "The cone features a half angle of 15°30′ and a 30.5 mm coned length for consistent penetration measurements.",
      },
      {
        title: "Graduated scale for direct reading",
        body: "The bearing rod moves against a graduated scale, allowing clear and accurate observation of penetration depth.",
      },
      {
        title: "Brass penetration trough",
        body: "A brass trough of 50 mm diameter and 50 mm depth provides a sturdy and durable sample container for testing.",
      },
      {
        title: "Reliable laboratory use",
        body: "Designed specifically for liquid limit determination, the apparatus offers repeatable results for soil analysis work.",
      },
    ],

    specs: [
      { label: "Apparatus type", value: "Liquid limit cone penetrometer" },
      { label: "Cone material", value: "Stainless steel" },
      { label: "Cone half angle", value: "15°30′" },
      { label: "Cone length", value: "30.5 mm" },
      { label: "Cone surface", value: "Smooth polished" },
      { label: "Moving part", value: "Bearing rod with graduated scale" },
      { label: "Penetration trough", value: "Brass, 50 mm dia × 50 mm deep" },
      { label: "Application", value: "Liquid limit testing of soils" },
    ],

    brochure: {
      label: "Liquid Limit Cone Penetrometer Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // shrinkage-limit-apparatus

  "shrinkage-limit-apparatus": {
    slug: "shrinkage-limit-apparatus",
    title: "Shrinkage Limit Apparatus",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "The set consists of 75mm square Prong Plate made of 3mm thick acrylic sheet with three metal prongs.",
    description: `

 ⦁    75mm square Plain Plate made of 3mm thick acrylic sheet.
⦁    Stainless Steel Shrinkage Dish 45mm in dia, 15mm deep.
⦁    Glass cup with ground edge, 50mm to 55mm dia, 25mm deep.
⦁    Flexible Spatula with 80mm long, 20mm wide blade.
`,
    price: "₹1250",
    mrp: "₹1500",
    savings: "16.67% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Shrinkage Limit Apparatus",
    images: ["/upload/products/shrinkage-limit-apparatus/1.jpg"],
    inTheBox: [
      "1× Shrinkage Limit Apparatus",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Acrylic base plate for stable handling",
        body: "The 75 mm square plain plate is made from 3 mm thick acrylic sheet, offering a durable and easy-to-clean working surface.",
      },
      {
        title: "Stainless steel shrinkage dish",
        body: "The 45 mm diameter, 15 mm deep shrinkage dish is ideal for holding soil samples during shrinkage tests.",
      },
      {
        title: "Ground-edge glass cup",
        body: "The glass cup with a ground edge and 50–55 mm diameter provides a reliable container for sample preparation and observation.",
      },
      {
        title: "Flexible spatula for sample handling",
        body: "The 80 mm long, 20 mm wide spatula makes it easy to transfer and smooth soil material precisely.",
      },
      {
        title: "Designed for soil laboratory work",
        body: "This apparatus set is well suited for shrinkage limit determination and related soil testing procedures.",
      },
    ],

    specs: [
      { label: "Apparatus type", value: "Shrinkage limit apparatus set" },
      { label: "Plain plate", value: "75 mm square, 3 mm thick acrylic sheet" },
      {
        label: "Shrinkage dish",
        value: "Stainless steel, 45 mm dia × 15 mm deep",
      },
      { label: "Glass cup", value: "Ground edge, 50–55 mm dia × 25 mm deep" },
      { label: "Spatula", value: "Flexible, 80 mm long × 20 mm wide blade" },
      { label: "Application", value: "Shrinkage limit testing of soils" },
    ],

    brochure: {
      label: "Shrinkage Limit Apparatus Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // compaction-test-for-water-content-and-dry-density-of-soils

  "compaction-test-for-water-content-and-dry-density-of-soils": {
    slug: "compaction-test-for-water-content-and-dry-density-of-soils",
    title: "Compaction Test For Water Content and Dry Density of Soils",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Density and moisture content are, perhaps, the most important parameters a soil engineer has to keep a strict control on, during the construction of earthen dams and embankments. Using the laboratory test data, obtained under controlled conditions. The specifications to be adopted for the fill can be drawn in terms of maximum dry density and optimum moisture content",
    description: `

Density and moisture content are, perhaps, the most important parameters a soil engineer has to keep a strict control on, during the construction of earthen dams and embankments. Using the laboratory test data, obtained under controlled conditions. The specifications to be adopted for the fill can be drawn in terms of maximum dry density and optimum moisture content
`,
    price: "₹3500",
    mrp: "₹4000",
    savings: "12.50% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Compaction Test For Water Content and Dry Density of Soils",
    images: [
      "/upload/products/compaction-test-for-water-content-and-dry-density-of-soils/1.jpg",
    ],
    inTheBox: [
      "1× Compaction Test For Water Content and Dry Density of Soils",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Controls key compaction parameters",
        body: "Helps determine the relationship between water content and dry density for reliable soil compaction analysis.",
      },
      {
        title: "Supports embankment and dam design",
        body: "The test data helps engineers define suitable fill specifications for earthen dams and embankments.",
      },
      {
        title: "Defines maximum dry density",
        body: "Provides the basis for identifying the maximum dry density achievable under controlled laboratory conditions.",
      },
      {
        title: "Determines optimum moisture content",
        body: "Enables the selection of the moisture level that produces the best compaction performance.",
      },
      {
        title: "Useful for quality control",
        body: "The results support practical field quality checks and consistent construction standards for soil work.",
      },
    ],

    specs: [
      { label: "Test focus", value: "Water content and dry density of soils" },
      {
        label: "Primary use",
        value: "Earthen dam and embankment construction",
      },
      { label: "Key output", value: "Maximum dry density" },
      { label: "Key output", value: "Optimum moisture content" },
      { label: "Basis", value: "Laboratory test under controlled conditions" },
      {
        label: "Application",
        value: "Soil compaction and fill specification design",
      },
    ],

    brochure: {
      label:
        "Compaction Test For Water Content and Dry Density of Soils Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // automatic-soil-compaction-machine

  "automatic-soil-compaction-machine": {
    slug: "automatic-soil-compaction-machine",
    title: "Automatic Soil Compaction Machine",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "The Automatic Soil Compactor replaces the hand compaction procedure as specified for dry density/moisture content relationship of soil. Both light and heavy compaction tests can be performed by this machine using either 100 mm dia. or 150 mm dia. compaction moulds. The height of drop of the 50 mm dia. rammer can be set either at 310 mm or 450 mm as per requirement.",
    description: `

The Automatic Soil Compactor replaces the hand compaction procedure as specified for dry density/moisture content relationship of soil. Both light and heavy compaction tests can be performed by this machine using either 100 mm dia. or 150 mm dia. compaction moulds. The height of drop of the 50 mm dia. rammer can be set either at 310 mm or 450 mm as per requirement.
`,
    price: "₹64000",
    mrp: "₹65000",
    savings: "1.54% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Automatic Soil Compaction Machine",
    images: ["/upload/products/automatic-soil-compaction-machine/1.jpg"],
    inTheBox: [
      "1× Automatic Soil Compaction Machine",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Automates the compaction procedure",
        body: "Replaces the manual hand-compaction method for establishing the dry density and moisture content relationship of soil.",
      },
      {
        title: "Supports light and heavy tests",
        body: "The machine is suitable for both light and heavy compaction tests, making it versatile for different laboratory requirements.",
      },
      {
        title: "Compatible with standard mould sizes",
        body: "Works with either 100 mm diameter or 150 mm diameter compaction moulds for flexible testing setups.",
      },
      {
        title: "Adjustable rammer drop height",
        body: "The 50 mm diameter rammer drop can be set to either 310 mm or 450 mm depending on the test specification.",
      },
      {
        title: "Reliable for soil lab quality control",
        body: "Designed to provide repeatable compaction results for laboratory evaluation and fill specification development.",
      },
    ],

    specs: [
      { label: "Machine type", value: "Automatic soil compactor" },
      { label: "Function", value: "Replaces hand compaction procedure" },
      { label: "Compaction tests", value: "Light and heavy compaction" },
      { label: "Compatible moulds", value: "100 mm dia. or 150 mm dia." },
      { label: "Rammer diameter", value: "50 mm" },
      { label: "Adjustable drop height", value: "310 mm or 450 mm" },
      {
        label: "Application",
        value: "Dry density/moisture content relationship of soil",
      },
    ],

    brochure: {
      label: "Automatic Soil Compaction Machine Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // pocket-penetrometer

  "pocket-penetrometer": {
    slug: "pocket-penetrometer",
    title: "Pocket Penetrometer",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "The pocket penetrometer is regarded as a simple tool to aid the engineers in field exploration and in checking and comparing similar types of soil, but it can never be used to obtain foundation design data. This lightweight penetrometer is used in the field for classifying cohesive soils in terms of consistency and estimation of approximate unconfined compressive strength and shear strength.",
    description: `

The pocket penetrometer is regarded as a simple tool to aid the engineers in field exploration and in checking and comparing similar types of soil, but it can never be used to obtain foundation design data.
This lightweight penetrometer is used in the field for classifying cohesive soils in terms of consistency and estimation of approximate unconfined compressive strength and shear strength.
`,
    price: "₹2100",
    mrp: "₹2500",
    savings: "16.00% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Pocket Penetrometer",
    images: ["/upload/products/pocket-penetrometer/1.gif"],
    inTheBox: [
      "1× Pocket Penetrometer",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Quick field assessment tool",
        body: "Used by engineers during field exploration to compare similar cohesive soils and assess their consistency quickly.",
      },
      {
        title: "Supports soil consistency checks",
        body: "Helps classify cohesive soils by consistency, making it useful for rapid on-site evaluation.",
      },
      {
        title: "Gives an approximate strength estimate",
        body: "Provides a practical estimate of unconfined compressive strength and shear strength for preliminary assessment.",
      },
      {
        title: "Lightweight and portable",
        body: "Its compact size makes it easy to carry and operate directly in the field.",
      },
      {
        title: "Useful for preliminary site work",
        body: "Ideal for quick comparisons and field screening, though not intended for foundation design data.",
      },
    ],

    specs: [
      { label: "Instrument type", value: "Pocket penetrometer" },
      {
        label: "Primary use",
        value: "Field exploration and soil classification",
      },
      { label: "Soil type", value: "Cohesive soils" },
      {
        label: "Measured property",
        value:
          "Consistency, approximate unconfined compressive strength, shear strength",
      },
      { label: "Portability", value: "Lightweight and field-friendly" },
      { label: "Limitation", value: "Not suitable for foundation design data" },
    ],

    brochure: {
      label: "Pocket Penetrometer Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // Q5 Series GPR System

  "q5-series-gpr-system": {
    slug: "q5-series-gpr-system",
    title: "Q5 Series GPR System",
    brand: "By Model",
    category: "Ground Penetrating Radar (GPR)",
    tagline:
      "Simply put, the Q5 GPR system is a workhorse when it comes to locating buried utilities. Its easy-to-use interface can also be expanded and configured for other applications as needed. Not only is this system incredibly versatile, but it is the most powerful ground penetrating radar for locating underground utilities up to 15′ (5m) deep at high resolution.",
    description: `

Simply put, the Q5 GPR system is a workhorse when it comes to locating buried utilities. Its easy-to-use interface can also be expanded and configured for other applications as needed. Not only is this system incredibly versatile, but it is the most powerful ground penetrating radar for locating underground utilities up to 15′ (5m) deep at high resolution.

`,
    price: "₹1.00",
    mrp: "₹2.00",
    savings: "50.00% OFF",
    badges: ["In Stock", "Ground Penetrating Radar (GPR)"],
    rating: "4.8 · 72 verified reviews",
    sku: "Q5 Series GPR System",
    images: [
      "/upload/products/q5-series-gpr-system/1.webp",
      "/upload/products/q5-series-gpr-system/2.webp",
    ],
    inTheBox: [
      "1× Q5 Series GPR System",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Daylight readable, weatherproof Getac tablet interface",
        body: "Bright, rugged tablet display ensures clear viewing outdoors and in harsh field conditions.",
      },
      {
        title: "High performance CPU enables real-time data processing",
        body: "Fast onboard processing delivers instant radar imaging and analysis in the field.",
      },
      {
        title: "Built-in 3D view capability",
        body: "Generates 3D subsurface maps to identify buried utilities and structures with clarity.",
      },
      {
        title: "WiFi supported",
        body: "Wireless connectivity allows easy data transfer and remote operation when needed.",
      },
      {
        title: "USB, Ethernet, HDMI and Audio ports",
        body: "Multiple I/O ports support external devices, networking and display output for flexible workflows.",
      },
    ],

    specs: [
      {
        label: "Instrument type",
        value: "Ground Penetrating Radar (GPR) system",
      },
      { label: "Operating frequency", value: "250 MHz (standard)" },
      {
        label: "Depth range",
        value: "Up to 5 meters depending on soil conditions",
      },
      {
        label: "Display",
        value: "Daylight-readable, weatherproof Getac tablet",
      },
      { label: "Connectivity", value: "WiFi, USB, Ethernet, HDMI, Audio" },
      {
        label: "Applications",
        value:
          "Utility locating, subsurface mapping, archaeology, infrastructure inspection",
      },
    ],

    brochure: {
      label: "Q5 Series GPR System Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // Q10 Utility and Geotechnical Locating System

  "q10-utility-and-geotechnical-locating-system": {
    slug: "q10-utility-and-geotechnical-locating-system",
    title: "Q10 Utility and Geotechnical Locating System",
    brand: "By Model",
    category: "Ground Penetrating Radar (GPR)",
    tagline:
      "The Q10 is a high-resolution 1000 MHz GPR system built for shallow-depth utility, concrete, and geotechnical surveys. Rugged, portable, and easy to operate, it delivers fast, accurate subsurface imaging for inspection and locating tasks.",

    description: `
The Q10 Utility and Geotechnical Locating System combines a 1000 MHz antenna with a rugged wheeled cart and weatherproof tablet interface for reliable field use.

Designed for bridge decks, concrete slabs, pavement, and shallow utility detection, the Q10 provides clear, high-resolution radar profiles with minimal setup. Its intuitive controls and real-time display help teams capture actionable subsurface data quickly and confidently.
`,
    price: "₹1.00",
    mrp: "₹2.00",
    savings: "50.00% OFF",
    badges: ["In Stock", "Ground Penetrating Radar (GPR)"],
    rating: "4.8 · 72 verified reviews",
    sku: "Q10 Utility",
    images: [
      "/upload/products/q10-utility-and-geotechnical-locating-system/1.webp",
    ],
    inTheBox: [
      "1× Q10 Utility and Geotechnical Locating System",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "1000 MHz high-resolution antenna",
        body: "Optimized for shallow penetration and detailed imaging of concrete, slabs, and utilities.",
      },
      {
        title: "Rugged cart design",
        body: "Stable, maneuverable cart platform supports field scans over pavement and uneven surfaces.",
      },
      {
        title: "Weatherproof tablet interface",
        body: "Integrated rugged tablet provides real-time data review and touchscreen control outdoors.",
      },
      {
        title: "Instant data display",
        body: "Live radargrams appear during scans, enabling quick interpretation on site.",
      },
      {
        title: "Flexible data export",
        body: "USB, Ethernet, and WiFi connectivity make it easy to transfer survey files to standard GPR software.",
      },
    ],

    specs: [
      {
        label: "Instrument type",
        value: "1000 MHz Ground Penetrating Radar (GPR) system",
      },
      { label: "Antenna frequency", value: "1000 MHz" },
      {
        label: "Typical depth range",
        value: "0.1–2.0 meters depending on material and conditions",
      },
      {
        label: "Cart configuration",
        value: "Portable wheeled platform with probe mount",
      },
      {
        label: "Display",
        value: "Rugged daylight-readable tablet with touchscreen",
      },
      {
        label: "Applications",
        value:
          "Bridge deck scanning, concrete inspection, shallow utility locating, geotechnical surveys",
      },
    ],

    brochure: {
      label:
        "Q10 Utility and Geotechnical Locating System Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // Q25 Geophysical Radar System

  "q25-geophysical-radar-system": {
    slug: "q25-geophysical-radar-system",
    title: "Q25 Geophysical Radar System",
    brand: "By Model",
    category: "Ground Penetrating Radar (GPR)",
    tagline:
      "The Q25 geophysical GPR system is a 250 MHz deep-penetration radar solution for utility locating, geological mapping, and subsurface structure detection. Its durable design and user-friendly interface make it ideal for fast, reliable field surveys.",

    description: `
The Q25 Geophysical Radar System is a 250 MHz ground penetrating radar engineered for deeper utility and geophysical surveys.

It offers extended penetration through soil, rock, and pavement while maintaining stable, high-quality data capture. The rugged cart, weatherproof tablet, and intuitive controls let survey teams collect and review subsurface data efficiently in outdoor conditions.
`,
    price: "₹1.00",
    mrp: "₹2.00",
    savings: "50.00% OFF",
    badges: ["In Stock", "Ground Penetrating Radar (GPR)"],
    rating: "4.8 · 72 verified reviews",
    sku: "Q25 Geophysical",
    images: ["/upload/products/q25-geophysical-radar-system/1.webp"],

    inTheBox: [
      "1× q25-geophysical-radar-system",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "250 MHz deep-penetration antenna",
        body: "Delivers strong subsurface signals for deep utility locating and geological surveys.",
      },
      {
        title: "Heavy-duty survey cart",
        body: "Provides a stable platform for long runs and rough terrain during field surveys.",
      },
      {
        title: "Field-ready tablet interface",
        body: "Weatherproof tablet displays live radargrams and makes data capture simple on site.",
      },
      {
        title: "Continuous data recording",
        body: "Records uninterrupted survey lines so you can cover larger areas quickly.",
      },
      {
        title: "Easy data export",
        body: "USB, Ethernet, and WiFi support fast transfer of raw data to processing software.",
      },
    ],

    specs: [
      {
        label: "Instrument type",
        value: "250 MHz Ground Penetrating Radar (GPR) system",
      },
      { label: "Antenna frequency", value: "250 MHz" },
      {
        label: "Typical depth range",
        value: "0.5–8.0 meters depending on ground conditions",
      },
      {
        label: "Survey configuration",
        value: "Cart-based continuous scanning platform",
      },
      { label: "Display", value: "Weatherproof touchscreen tablet" },
      {
        label: "Applications",
        value:
          "Deep utility locating, geophysical mapping, subsurface structure detection",
      },
    ],

    brochure: {
      label: "Q25 Geophysical Radar System Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // 100 Series Geophysical Scanner Ground Penetrating Radar System

  "100-series-geophysical-scanner-ground-penetrating-radar-system": {
    slug: "100-series-geophysical-scanner-ground-penetrating-radar-system",
    title: "100 Series Geophysical Scanner Ground Penetrating Radar System",
    brand: "By Model",
    category: "Ground Penetrating Radar (GPR)",
    tagline:
      "Our Most Powerful GPR System for Geophysical Scanner Survey 100 Series geophysical scanner systems offer the greatest realistic penetration that ground penetrating radar (GPR) can provide. It is used for locating deeper targets up to 100 ft. (30.48m). Typically, this system is most often used for locating tunnels and for geophysical analysis.",

    description: `
The 100 Series is one of our most versatile systems, as the tablet and software are interchangeable with our other systems. This means that you can easily convert a 100 Series into one of our many other configurations for more high-resolution scanning applications.

Think of your 100 Series system as more than a high-powered GPR device. When conducting a survey, you are doing more than seeing beneath the surface. You are compiling essential data that can be used to create an instant deliverable in the field – right from your tablet controller. This ensures everyone is on the same page and operating from a shared point-of-reference with greater efficiency, safety, and confidence.
`,

about: `

# Unlock Hidden Underground Assets with Advanced GPR Ground Penetrating Radar Technology

# Discover Underground with Precision Using Advanced GPR Solutions

Modern infrastructure projects really need exact underground mapping before anyone goes digging. Like whether it’s utility detection, civil engineering, archaeological surveys, mining , or even environmental investigations, advanced **GPR ground penetrating radar** tech gives you a safer, faster, and non destructive way to look at what’s down there. Without that, people can end up guessing, which is not exactly ideal. It helps a lot to understand the subsurface before excavation begins, so you do less guesswork and more accurate planning, right.

The 100 Series Geophysical Scanner, Ground Penetrating Radar System, is made to deliver dependable subterrain imaging with high precision, or so to speak, for real work. It helps professionals find buried utilities, pipelines, empty spaces, cables, concrete reinforcements and even geological structures, all while not harming the infrastructure that is already there. With fewer excavation troubles and better project preparation it supports organizations saving time and also operational expenses, which is nice in practice.

# Why Modern Projects Depend on Ground Penetrating Radar

Traditional excavation approaches tend to come with uncertainty, some project delays, and costly repairs from accidental damage here and there. An advanced **GPR ground penetrating radar** system, lets engineers and survey people basically see what’s underfoot before construction starts, so fewer expensive mistakes happen and overall workplace safety improves as well. 

Whether it’s municipal infrastructure development, or transportation projects in general, this technology supports smarter decisions thanks to clearer high-resolution subsurface imaging that is clearer.

# Key Applications

| **Industry**                   | **Primary Benefits**                                    |
| ------------------------------ | ------------------------------------------------------- |
| **Civil Engineering**          | Utility mapping, foundation assessment, road inspection |
| **Construction**               | Locate buried cables, pipes, and reinforcement bars     |
| **Archaeology**                | Identify buried structures without excavation           |
| **Mining & Geology**           | Detect underground formations and voids                 |
| **Environmental Studies**      | Soil profiling and contamination assessment             |
| **Infrastructure Maintenance** | Pavement evaluation and structural inspection           |

| <br> |
| ---- |

# Features That Improve Survey Accuracy

The advanced scanning capabilities make the system suitable for professionals requiring dependable field performance.

- High-resolution underground imaging
- Fast and efficient field surveys
- Non-destructive inspection technology
- Easy-to-operate interface
- Accurate utility and pipeline detection
- Suitable for multiple soil conditions
- Portable design for on-site applications
- Reliable data collection for informed decision-making

These capabilities are what make the **GPR ground penetrating radar** a ideal option for organizations that want real accuracy, faster processing , and good long-term returns for underground investigation work . It’s basically a practical path where precision meets efficiency, and the overall value stays useful, even down the line.

# Why Choose the 100 Series Geophysical Scanner?

Choosing the proper radar set really does affect the whole project outcome. The 100 Series blends advanced imaging capabilities with a more easy-going, user-friendly setup, so professionals can finish their surveys fast, yet still keep that high level of precision.

No matter what you are trying to do, say preventing utility strikes, checking out existing infrastructure, or carrying out intricate subsurface work, this system still delivers dependable results through a broad mix of real-world uses.

# Benefits for Your Business

- Reduce unnecessary excavation costs
- Improve worker and site safety
- Accelerate project timelines
- Minimize operational downtime
- Increase survey confidence
- Generate accurate underground mapping reports
- Support better engineering decisions
- Enhance overall project efficiency

Organisations around the world mostly trust **GPR ground penetrating radar** tech because it gives dependable underground intel that actually helps safer builds, better scheduling, and more efficient use of resources.

`,
faq: [
  {
    question: "What is GPR ground penetrating radar used for?",
    answer:
      "GPR, short for ground penetrating radar, is used to track underground utilities such as pipelines , cables and yes, sometimes even empty spaces or voids. It also assists in figuring out concrete reinforcement and different geological formations, other buried structures, which is done all without having to excavate or even dig in the first place.",
  },
  {
    question: "Can GPR detect both metallic and non-metallic objects?",
    answer:
      "Yeah, Ground Penetrating Radar can sometimes pick up metallic things and even non metallic buried materials too, depending on how the soil decides to behave, the general size of the target, plus how you run the scanning frequency, not just with one set number, but with more than that in a s varied way.",
  },
  {
    question: "Which industries benefit the most from GPR technology?",
    answer:
      "GPR surveys help a lot with construction, civil engineering , archaeology, mining, transportation, environmental studies, utility management, and keeping infrastructure in proper shape for maintenance—like altogether, it’s a whole set of practical uses.",
  },
  {
    question: "Is Ground Penetrating Radar a non-destructive inspection method?",
    answer:
      "Yes, one of its biggest benefits is that it gives you underground imaging without digging, drilling, or damaging the existing infrastructure, like somehow. It’s kind of low impact, you know, because it doesn’t mess with what’s already there.",
  },
  {
    question: "Why should businesses invest in an advanced GPR system?",
    answer:
      "An advanced GPR setup helps make the survey more accurate, it also cuts down on excavation risks a bit, brings down repair costs, improves overall safety, speeds up the project process, and still gives solid underground readouts so the planning is better.",
  },
],
    price: "₹0.00",
    mrp: "₹2.00",
    savings: "100.00% OFF",
    badges: ["In Stock", "Ground Penetrating Radar (GPR)"],
    rating: "4.8 · 72 verified reviews",
    sku: "Radar System",
    images: [
      "/upload/products/100-series-geophysical-scanner-ground-penetrating-radar-system/1.webp",
    ],

    inTheBox: [
      "1× 100 Series Geophysical Scanner Ground Penetrating Radar System",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "High-power 250 MHz antenna",
        body: "Designed for deep subsurface penetration, ideal for locating utilities, voids, and geological features.",
      },
      {
        title: "Modular geophysical scanner design",
        body: "Easily reconfigurable for different survey tasks and terrain types, from roadways to open ground.",
      },
      {
        title: "Rugged tablet controller",
        body: "Field-proof touchscreen tablet delivers live imaging and easy control even in harsh outdoor conditions.",
      },
      {
        title: "Continuous data acquisition",
        body: "Captures uninterrupted survey lines for efficient coverage of large areas and consistent results.",
      },
      {
        title: "Flexible data output",
        body: "Supports USB, Ethernet, and WiFi export for smooth transfer to processing and reporting software.",
      },
    ],

    specs: [
      {
        label: "Instrument type",
        value: "250 MHz Ground Penetrating Radar (GPR) system",
      },
      { label: "Antenna frequency", value: "250 MHz" },
      {
        label: "Typical depth range",
        value: "Up to 30 meters depending on ground conditions",
      },
      { label: "Survey mode", value: "Cart-based continuous scanning" },
      { label: "Display", value: "Weatherproof touchscreen tablet" },
      {
        label: "Applications",
        value:
          "Deep utility locating, tunnel detection, geological mapping, void identification",
      },
    ],

    brochure: {
      label:
        "100 Series Geophysical Scanner Ground Penetrating Radar System Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // GPRover Utility Mapping System

  "gprover-utility-mapping-system": {
    slug: "gprover-utility-mapping-system",
    title: "GPRover Utility Mapping System",
    brand: "By Model",
    category: "Ground Penetrating Radar (GPR)",
    tagline:
      "GPRover harnesses ground penetrating radar technology for superior locating and data collection capabilities; integrating advanced subsurface imaging technology with high accuracy GPS and mapping. The antenna’s award-winning triple bandwidth technology also provides a deeper, clearer read of what’s beneath the surface you’re scanning.",

    description: `
The GPRover Difference

-Easy to learn and operate
-Provides unrivaled accuracy within 5cm. (2in.)
-Creates deliverable data that operate and field crew can use immediately

Unique GPRover Features:

-Annually renewable subscription provides accurate corrections no matter your location
-Annually renewable subscription connects you to multiple reliable networks, no matter your location
-No cellular modem or base station required – connect the battery, power on, calibrate your antenna, and start scanning.
`,
    price: "₹0.00",
    mrp: "₹2.00",
    savings: "100.00% OFF",
    badges: ["In Stock", "Ground Penetrating Radar (GPR)"],
    rating: "4.8 · 72 verified reviews",
    sku: "Mapping Systemm",
    images: [
      "/upload/products/gprover-utility-mapping-system/1.png",
      "/upload/products/gprover-utility-mapping-system/2.png",
      "/upload/products/gprover-utility-mapping-system/3.png",
      "/upload/products/gprover-utility-mapping-system/4.png",
    ],

    inTheBox: [
      "1× GPRover Utility Mapping System",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],
    features: [
      {
        title: "Multi-frequency GPR antenna",
        body: "Switchable antenna options for balanced depth penetration and resolution across different survey needs.",
      },
      {
        title: "Integrated GNSS with RTK support",
        body: "Built-in GNSS/RTK positioning provides centimeter-level georeferencing for accurate utility maps.",
      },
      {
        title: "Real-time 2D & 3D visualization",
        body: "Live radargram display with optional 3D volume rendering for immediate on-site interpretation.",
      },
      {
        title: "Continuous survey recording",
        body: "Seamless line capture with low-noise acquisition for consistent data over large areas.",
      },
      {
        title: "Flexible data export and formats",
        body: "Export to common GPR and GIS formats (CSV, SEG-Y, GPR-specific) via USB, Ethernet, or WiFi.",
      },
    ],

    specs: [
      { label: "Instrument type", value: "Modular GPR Utility Mapping System" },
      {
        label: "Antenna frequencies",
        value: "Optional 250 MHz / 500 MHz / 1000 MHz",
      },
      {
        label: "Depth range",
        value: "0.1–30 m depending on antenna and ground conditions",
      },
      {
        label: "Positioning",
        value: "Integrated GNSS with RTK/PPK support (optional)",
      },
      {
        label: "Data output",
        value:
          "2D radargrams and optional 3D volumes; exportable to CSV, SEG-Y, and common GPR software",
      },
      {
        label: "Connectivity",
        value: "USB, Ethernet, WiFi; supports cloud or local data transfer",
      },
    ],

    brochure: {
      label: "GPRover Utility Mapping System Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // Quantum Imager Triple Frequency GPR System

  "quantum-imager-triple-frequency-gpr-system": {
    slug: "quantum-imager-triple-frequency-gpr-system",
    title: "Quantum Imager Triple Frequency GPR System",
    brand: "By Model",
    category: "Ground Penetrating Radar (GPR)",
    tagline:
      "Quantum Imaging Applications With greater depth and resolution than any other locating technology, the Quantum Imager can be used for anything from fiber optic analysis to utilities up to 30′(9m)+ deep and everything in between.",

    description: `
Quantum Imaging Applications

With greater depth and resolution than any other locating technology, the Quantum Imager can be used for anything from fiber optic analysis to utilities up to 30′(9m)+ deep and everything in between.
`,
    price: "₹1.00",
    mrp: "₹2.00",
    savings: "50.00% OFF",
    badges: ["In Stock", "Ground Penetrating Radar (GPR)"],
    rating: "4.8 · 72 verified reviews",
    sku: "GPR System",
    images: [
      "/upload/products/quantum-imager-triple-frequency-gpr-system/1.webp",
      "/upload/products/quantum-imager-triple-frequency-gpr-system/2.webp",
    ],

    inTheBox: [
      "1× Quantum Imager Triple Frequency GPR System",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],
    features: [
      {
        title: "Triple-frequency antenna configuration",
        body: "Combines 250 MHz, 500 MHz, and 1000 MHz bands for both deep penetration and high-resolution imaging.",
      },
      {
        title: "Ruggedized tablet interface",
        body: "Displays live scans and survey results clearly in bright sunlight and outdoor environments.",
      },
      {
        title: "Advanced 3D imaging support",
        body: "Captures and renders subsurface volumes to help identify utilities, voids, and structural features.",
      },
      {
        title: "Continuous survey capture",
        body: "Records long survey lines smoothly with minimal interruption for faster field coverage.",
      },
      {
        title: "Multiple export formats",
        body: "Exports data in standard GPR and GIS formats via USB, Ethernet, or WiFi for post-processing.",
      },
    ],

    specs: [
      {
        label: "Instrument type",
        value: "Triple-frequency Ground Penetrating Radar (GPR) system",
      },
      { label: "Antenna frequencies", value: "250 MHz, 500 MHz, 1000 MHz" },
      {
        label: "Depth range",
        value:
          "Shallow to medium depth imaging up to 9 meters depending on ground conditions",
      },
      {
        label: "Display",
        value: "Weatherproof touchscreen tablet with daylight-readable screen",
      },
      {
        label: "Output formats",
        value:
          "2D radargrams and 3D volumes; exportable as CSV, SEG-Y, and GPR-compatible files",
      },
      { label: "Connectivity", value: "USB, Ethernet, WiFi" },
    ],

    brochure: {
      label: "Quantum Imager Triple Frequency GPR System Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // Cable/Pipe locator

  "cablepipe-locator": {
    slug: "cablepipe-locator",
    title: "Cable/Pipe Locator",
    brand: "FUZRR",
    category: "Cable & Pipe Locators",
    tagline:
      "Pipeline detection (cable position tracking, direction display, depth measurement, current measurement), cable identification, A word frame fault search (optional function)",

    description: `
When using the coupling method and the induction method, the transmitter will produce interference in close distance. The distance of interference is related to the transmission power and frequency. The greater the power, the higher the frequency, the stronger the interference.

The minimum distance of the receiver without disturbed by the transmitter often needs to be determined by test:

Pipeline detection: 5m away, 20m away as no interference Cable identification: the coupling method beyond 2~5m can be confirmed as no interference
`,
    price: "₹1.00",
    mrp: "₹2.00",
    savings: "50.00% OFF",
    badges: ["In Stock", "Cable & Pipe Locator"],
    rating: "4.8 · 72 verified reviews",
    sku: "Cable/Pipe Locator",
    images: [
      "/upload/products/cablepipe-locator/1.jpg",
      "/upload/products/cablepipe-locator/2.jpg",
    ],

    inTheBox: [
      "1× Cable/Pipe Locator",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Transmitter clamp inner diameter:φ125mm",
        body: "Wide clamp opening fits cables and pipes up to 125 mm in diameter for easy signal coupling.",
      },
      {
        title: "Power:8.4V large capacity rechargeable lithium battery",
        body: "Long-lasting battery supports extended locating sessions without frequent recharging.",
      },
      {
        title: "cable length of transmitter clamp:3M",
        body: "Includes a 3-meter clamp cable for flexible placement and reliable signal transmission.",
      },
      {
        title: "Sound instructions:FM tone with signal intensity",
        body: "FM tone guidance and signal strength feedback help the operator track conductors accurately.",
      },
      {
        title: "Pipeline measurement depth:0-20m",
        body: "Detects buried pipelines and utilities from the surface to depths of 20 meters in favorable conditions.",
      },
      {
        title: "Touch screen:yes",
        body: "Touchscreen control simplifies mode selection, depth readout, and real-time locating feedback.",
      },
    ],

    specs: [
      { label: "Instrument type", value: "Cable and pipe locator" },
      {
        label: "Transmitter power",
        value: "8.4V rechargeable lithium battery",
      },
      { label: "Clamp inner diameter", value: "125 mm" },
      { label: "Transmitter cable length", value: "3 meters" },
      {
        label: "Measurement depth",
        value: "0–20 meters depending on soil and pipe conditions",
      },
      {
        label: "Interface",
        value: "Color touchscreen with signal strength indicator",
      },
    ],

    brochure: {
      label: "Cable/Pipe Locator Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // GLM400

  glm400: {
    slug: "glm400",
    title: "GLM400",
    brand: "BOSCH",
    category: "Laser Distance Meters",
    tagline: "GLM 400 PROFESSIONAL LASER MEASURE",

    description: `
Conversion at one press

Dedicated conversion button for immediate unit change at one press
User-friendly human machine interface (HMI) for quick selection of measuring functions
Colour display technology for easy interpretation of essential information and measurements
`,
    price: "₹5,400.00",
    mrp: "₹9,200.00",
    savings: "41.30% OFF",
    badges: ["In Stock", "Laser Distance Meter"],
    rating: "4.8 · 72 verified reviews",
    sku: "GLM400",
    images: [
      "/upload/products/glm400/1.png",
      "/upload/products/glm400/2.jpg",
      "/upload/products/glm400/3.jpg",
    ],

    inTheBox: [
      "1× Laser Distance Meter",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Dust and splash protection: IP54",
        body: "Built to withstand dusty environments and light water exposure for reliable outdoor use.",
      },
      {
        title: "Red laser diode: 635 nm, < 1 mW",
        body: "Visible red laser pointer ensures precise targeting with a safe Class 2 laser output.",
      },
      {
        title: "Wide measurement range",
        body: "Measures distances from 0.05 m up to 40.00 m for flexible indoor and outdoor applications.",
      },
      {
        title: "Lightweight and portable",
        body: "Compact design and 0.1 kg weight make it easy to carry and use for extended periods.",
      },
      {
        title: "Dual measurement units",
        body: "Switch quickly between meters/centimeters and feet/inches for global usability.",
      },
      {
        title: "Auto power-off",
        body: "Conserves battery life by switching off automatically after 5 minutes of inactivity.",
      },
    ],

    specs: [
      { label: "Dust and splash protection", value: "IP54" },
      { label: "Laser diode", value: "635 nm, < 1 mW" },
      { label: "Measurement range", value: "0.05 – 40.00 m" },
      { label: "Weight, approx.", value: "0.1 kg" },
      { label: "Units of measurement", value: "m/cm, ft/inch" },
      { label: "Laser class", value: "Class 2" },
      {
        label: "Measurement accuracy, typical",
        value: "± 1.5 mm* (*plus use-dependent deviation)",
      },
      { label: "Power supply", value: "2 x 1.5 V LR03 (AAA)" },
      { label: "Automatic deactivation", value: "5 min" },
      { label: "Tripod thread", value: '1/4"' },
      { label: "Laser colour", value: "Red" },
      { label: "Measuring range, up to", value: "40 m" },
    ],

    brochure: {
      label: "Laser Distance Meter Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // GLM 50-27 CG

  "glm-50-27-cg": {
    slug: "glm-50-27-cg",
    title: "GLM 50-27 CG",
    brand: "BOSCH",
    category: "Laser Distance Meters",
    tagline: "GLM 50-27 CG PROFESSIONAL LASER MEASURE",

    description: `
Robust & reliable laser measure with green laser for excellent visibility

Green laser technology ensures excellent visibility for long-distance measurements in bright indoor conditions
Ideal for rough construction work due to 1.5-metre drop resistance, IP65 protection, and shock-absorbing rubber casing
Quick documentation and fast data transfer thanks to Bluetooth® connectivity and Bosch MeasureOn App
`,
    price: "₹12,060.00",
    mrp: "₹15,825.00",
    savings: "23.79% OFF",
    badges: ["In Stock", "Laser Distance Meter"],
    rating: "4.8 · 72 verified reviews",
    sku: "GL-50-27-CG",
    images: [
      "/upload/products/glm-50-27-cg/1.jpg",
      "/upload/products/glm-50-27-cg/2.jpg",
      "/upload/products/glm-50-27-cg/3.jpg",
    ],

    inTheBox: [
      "1× GLM 50-27 CG",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Dust and splash protection: IP65",
        body: "Designed for construction sites, this meter resists dust and low-pressure water jets.",
      },
      {
        title: "Fast measurement time",
        body: "Captures distance readings in under 0.5 seconds for efficient layout and takeoff work.",
      },
      {
        title: "Green laser diode: 515 nm, < 1 mW",
        body: "High-contrast green laser improves visibility in bright lighting conditions.",
      },
      {
        title: "Extended measurement range",
        body: "Measures distances from 0.05 m up to 50.00 m with consistent accuracy.",
      },
      {
        title: "Accurate incline measurement",
        body: "Supports 0–360° tilt detection with ±0.2° typical accuracy for slope and angle checks.",
      },
      {
        title: "Bluetooth® 4.2 Low Energy",
        body: "Wireless data transfer enables fast syncing with apps and mobile devices.",
      },
    ],

    specs: [
      { label: "Dust and splash protection", value: "IP65" },
      { label: "Measurement time, typical", value: "< 0.5 s" },
      { label: "Units of measurement", value: "m/cm, ft/inch" },
      { label: "Laser diode", value: "515 nm, < 1 mW" },
      { label: "Measurement range", value: "0.05 – 50.00 m" },
      { label: "Laser class", value: "Class 2" },
      {
        label: "Measurement accuracy, typical",
        value: "± 1.5 mm* (*plus use-dependent deviation)",
      },
      {
        label: "Measurement range of incline measurement",
        value: "0 – 360° (4 x 90°)",
      },
      {
        label: "Measuring accuracy (typical)",
        value: "± 0.2°* (*plus use-dependent deviation)",
      },
      { label: "Measurement time, max.", value: "4 s" },
      { label: "Power supply", value: "2 x 1.5 V LR6 (AA)" },
      { label: "Automatic deactivation", value: "5 min" },
      { label: "Weight, approx.", value: "0.2 kg" },
      { label: "Memory capacity (values)", value: "30" },
      { label: "Tripod thread", value: '1/4"' },
      { label: "Data transfer", value: "Bluetooth™ 4.2 Low Energy" },
      { label: "Laser colour", value: "Green" },
      { label: "Measuring range, up to", value: "50 m" },
    ],

    brochure: {
      label: "Laser Distance Meter Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // GLM 150 C

  "glm-150-c": {
    slug: "glm-150-c",
    title: "GLM 150 C",
    brand: "BOSCH",
    category: "Laser Distance Meters",
    tagline: "GLM 150 C PROFESSIONAL LASER MEASURE",

    description: `
The Bosch laser tool for measuring and documenting easily and professionally – a smart solution for all 
surroundings.

Precise targeting thanks to the digital viewfinder with zoom function – also for outdoor applications and long distance
Optimal readability due to large 2.8” IPS colour display with extra robust cover glass
Fast collection and documentation of measured values thanks to Measuring Master App

`,
    price: "₹21,060.00",
    mrp: "₹29,300.00",
    savings: "28.12% OFF",
    badges: ["In Stock", "Laser Distance Meter"],
    rating: "4.8 · 72 verified reviews",
    sku: "GL-150-C",
    images: [
      "/upload/products/glm-150-c/1.png",
      "/upload/products/glm-150-c/2.jpg",
      "/upload/products/glm-150-c/3.jpg",
    ],

    inTheBox: ["1× GLM 150 C", "1× Carrying Case", "1× Plumb Bob", "1× Manual"],

    features: [
      {
        title: "Dust and splash protection: IP54",
        body: "Protected against dust and splashing water for reliable everyday use.",
      },
      {
        title: "Red laser diode: 650 nm, < 1 mW",
        body: "Precise red laser aiming for accurate long-distance measurements.",
      },
      {
        title: "Long measurement range",
        body: "Measures from 0.08 m up to 150.00 m for versatile indoor and outdoor tasks.",
      },
      {
        title: "Integrated digital viewfinder",
        body: "Zoom-enabled digital viewfinder helps target distant points accurately.",
      },
      {
        title: "Bluetooth® Smart connectivity",
        body: "Transfers measurement data wirelessly to compatible modern devices.",
      },
      {
        title: "Large memory capacity",
        body: "Stores up to 50 values so you can keep more measurements without manual notes.",
      },
    ],

    specs: [
      { label: "Dust and splash protection", value: "IP54" },
      { label: "Laser diode", value: "650 nm, < 1 mW" },
      { label: "Measurement range", value: "0.08 – 150.00 m" },
      { label: "Weight, approx.", value: "0.23 kg" },
      { label: "Units of measurement", value: "m/cm, ft/inch" },
      { label: "Laser class", value: "Class 2" },
      {
        label: "Measurement accuracy, typical",
        value: "± 1.5 mm* (*plus use-dependent deviation)",
      },
      { label: "Power supply", value: "3 x 1.5 V LR6 batteries (AA)" },
      { label: "Automatic deactivation", value: "0 min" },
      { label: "Memory capacity (values)", value: "50" },
      { label: "Tripod thread", value: '1/4"' },
      { label: "Digital viewfinder", value: "Integrated" },
      { label: "Data transfer", value: "Bluetooth™ Smart" },
      {
        label: "Supported Android devices",
        value: "Smartphone with Android 4.3 or higher",
      },
      {
        label: "Supported iOS devices",
        value:
          "iPhone 4S or higher, iPad (3rd Gen. or higher), iPad Air (1st Gen. or higher), iPad mini (1st Gen. or higher)",
      },
      { label: "Laser colour", value: "Red" },
      { label: "Measuring range, up to", value: "150 m" },
    ],

    brochure: {
      label: "GLM 150 C Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // GLM 100-25 C

  "glm-100-25-c": {
    slug: "glm-100-25-c",
    title: "GLM 100-25 C",
    brand: "BOSCH",
    category: "Laser Distance Meters",
    tagline: "GLM 100-25 C PROFESSIONAL LASER MEASURE",

    description: `
Precise laser measure for easy indoor and outdoor measuring and documenting

Accurate, 100-m laser measuring thanks to a digital camera viewfinder with a zoom function
Large, high-contrast IPS color display with a flip screen ensures optimal reading
Laser measure connects via Bluetooth for efficient data documentation

`,
    price: "₹15,930.00",
    mrp: "₹21,125.00",
    savings: "24.59% OFF",
    badges: ["In Stock", "Laser Distance Meter"],
    rating: "4.8 · 72 verified reviews",
    sku: "GL-100-25-C",
    images: [
      "/upload/products/glm-100-25-c/1.jpg",
      "/upload/products/glm-100-25-c/2.jpg",
      "/upload/products/glm-100-25-c/3.jpg",
    ],

    inTheBox: [
      "1× GLM 100-25 C",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Dust and splash protection: IP54",
        body: "Protected against dust ingress and splashing water for reliable everyday use.",
      },
      {
        title: "Red laser diode: 650 nm, < 1 mW",
        body: "Bright red laser helps you target points precisely for medium-range measurements.",
      },
      {
        title: "100-meter measurement range",
        body: "Measures from 0.08 m up to 100.00 m for flexible indoor and outdoor work.",
      },
      {
        title: "Integrated digital viewfinder",
        body: "Zoom-enabled digital viewfinder provides precise aiming on distant targets.",
      },
      {
        title: "Bluetooth® 4.2 Low Energy",
        body: "Transmits measurement data wirelessly to compatible mobile devices.",
      },
      {
        title: "Large memory capacity",
        body: "Stores up to 50 values so you can keep more measurements without manual notes.",
      },
    ],

    specs: [
      { label: "Dust and splash protection", value: "IP54" },
      { label: "Measurement time, typical", value: "< 0.5 s" },
      { label: "Units of measurement", value: "m/cm, ft/inch" },
      { label: "Laser diode", value: "650 nm, < 1 mW" },
      { label: "Measurement range", value: "0.08 – 100.00 m" },
      { label: "Laser class", value: "Class 2" },
      {
        label: "Measurement accuracy, typical",
        value: "± 1.5 mm* (*plus use-dependent deviation)",
      },
      {
        label: "Measurement range of incline measurement",
        value: "0 – 360° (4 x 90°)",
      },
      {
        label: "Measuring accuracy (typical)",
        value: "± 0.2°* (*plus use-dependent deviation)",
      },
      { label: "Measurement time, max.", value: "4 s" },
      { label: "Power supply", value: "3 x 1.5 V LR6 (AA)" },
      { label: "Automatic deactivation", value: "5 min" },
      { label: "Weight, approx.", value: "0.23 kg" },
      { label: "Memory capacity (values)", value: "50" },
      { label: "Tripod thread", value: '1/4"' },
      { label: "Digital viewfinder", value: "Integrated" },
      { label: "Data transfer", value: "Bluetooth™ 4.2 Low Energy" },
      { label: "Laser colour", value: "Red" },
      { label: "Measuring range, up to", value: "100 m" },
    ],

    brochure: {
      label: "GLM 100-25 C Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // GLM 50-25 G

  "glm-50-23-g": {
    slug: "glm-50-23-g",
    title: "GLM 50-23 G",
    brand: "BOSCH",
    category: "Laser Distance Meters",
    tagline: "GLM 50-23 G PROFESSIONAL LASER MEASURE",

    description: `
Outstandingly robust: 2-in-1 laser measure with green laser for rough job sites

Integrated 360° tilt sensor for easy angle/inclination measurement, an added versatility to the laser measure
An intuitive user interface with additional supportive features (favorite button, colour display, help function) makes handling convenient
Ideal for demanding jobsites thanks to IP 65 protection, and shock-absorbing rubber casing

`,
    price: "₹7,560.00",
    mrp: "₹9,450.00",
    savings: "20.00% OFF",
    badges: ["In Stock", "Laser Distance Meter"],
    rating: "4.8 · 72 verified reviews",
    sku: "GL-50-23-G",
    images: [
      "/upload/products/glm-50-23-g/1.png",
      "/upload/products/glm-50-23-g/2.jpg",
      "/upload/products/glm-50-23-g/3.jpg",
    ],

    inTheBox: [
      "1× GLM 50-23 G",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Dust and splash protection: IP65",
        body: "Built rugged for rough jobsites with full protection from dust and splashing water.",
      },
      {
        title: "Green laser diode: 515 nm, < 1 mW",
        body: "High-visibility green laser for easier targeting in bright conditions.",
      },
      {
        title: "50-meter measurement range",
        body: "Accurate distance measurements from 0.05 m up to 50.00 m for versatile use.",
      },
      {
        title: "360° incline measurement",
        body: "Measures angles across the full 0–360° range for flexible leveling and layout tasks.",
      },
      {
        title: "Compact power and memory",
        body: "Runs on 2× AA batteries and stores up to 30 measurement values for on-site convenience.",
      },
      {
        title: "Quick auto shut-off",
        body: "Automatic deactivation after 5 minutes helps save battery life on job sites.",
      },
    ],

    specs: [
      { label: "Dust and splash protection", value: "IP65" },
      { label: "Measurement time, typical", value: "< 0.5 s" },
      { label: "Units of measurement", value: "m/cm, ft/inch" },
      { label: "Laser diode", value: "515 nm, < 1 mW" },
      { label: "Measurement range", value: "0.05 – 50.00 m" },
      { label: "Laser class", value: "2" },
      {
        label: "Measurement accuracy, typical",
        value: "± 1.5 mm* (*plus use-dependent deviation)",
      },
      {
        label: "Measurement range of incline measurement",
        value: "0 – 360° (4 x 90°)",
      },
      {
        label: "Measuring accuracy (typical)",
        value: "± 0.2°* (*plus use-dependent deviation)",
      },
      { label: "Measurement time, max.", value: "4 s" },
      { label: "Power supply", value: "2 x 1.5 V LR6 (AA)" },
      { label: "Automatic deactivation", value: "5 min" },
      { label: "Weight, approx.", value: "0.2 kg" },
      { label: "Memory capacity (values)", value: "30" },
      { label: "Tripod thread", value: '1/4"' },
      { label: "Laser colour", value: "Green" },
      { label: "Measuring range, up to", value: "50 m" },
    ],

    brochure: {
      label: "GLM 50-23 G Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // IBoat BS12 USV

  "iboat-bs12-usv": {
    slug: "iboat-bs12-usv",
    title: "IBoat BS12 USV",
    brand: "Hi Target",
    category: "Hydrographic & Marine Survey",
    tagline:
      "The iBoat BS12 emerges as the embodiment of sophistication and simplicity, expertly designed for effortless operation across a multitude of applications. Engineered with the latest CFD technology and boasting a sleek carbon fiber and Kevlar hull, the iBoat BS12 is as tough as it is elegant. Its corrosion-resistant construction ensures durability in even the harshest conditions.",

    description: `
The iBoat BS12 emerges as the embodiment of sophistication and simplicity, expertly designed for effortless operation across a multitude of applications.
`,
    price: "₹36,09,000.00",
    mrp: "₹40,50,000.00",
    savings: "10.89% OFF",
    badges: ["In Stock", "Hydrographic USV"],
    rating: "4.8 · 72 verified reviews",
    sku: "IBS12-USV",
    images: [
      "/upload/products/iboat-bs12-usv/1.png",
      "/upload/products/iboat-bs12-usv/2.png",
      "/upload/products/iboat-bs12-usv/3.png",
    ],

    inTheBox: [
      "1× IBoat BS12 USV",
      "1× Remote Controller",
      "1× Battery Pack",
      "1× Charger",
      "1× User Manual",
    ],

    features: [
      {
        title: "GNSS+ IMU combination",
        body: "Fusion of GNSS positioning and IMU attitude sensing delivers stable navigation and accurate waypoint tracking during survey missions.",
      },
      {
        title: "Obstacle Avoidance Radar",
        body: "Built-in radar detects floating obstacles and shore hazards so the USV can maintain safe paths in changing water conditions.",
      },
      {
        title: "360° Omnidirectional Video",
        body: "All-round video coverage lets operators observe surrounding conditions and verify survey operations in real time.",
      },
      {
        title: "Echo Sounder Depth Range 0.15m～200 m",
        body: "Wide-range echo sounding supports detailed bathymetric mapping from shallow waterways to deeper channels.",
      },
      {
        title: "Compatible with ADCP Side-Scan Sounder, Image Sonar",
        body: "Flexible payload support makes it easy to integrate acoustic sensors for flow measurement, seabed imaging, and target detection.",
      },
      {
        title: "Multi-Parameter with Quality Meter",
        body: "Optional water quality sensors collect environmental data such as temperature, conductivity, and dissolved oxygen during survey runs.",
      },
    ],

    specs: [
      { label: "Hull material", value: "Carbon fiber & Kevlar" },
      { label: "Navigation system", value: "GNSS + IMU" },
      { label: "Echo sounder range", value: "0.15 – 200 m" },
      { label: "Communication", value: "4G, Wi-Fi, RF remote" },
      { label: "Ingress protection", value: "IP67" },
      { label: "Battery type", value: "Rechargeable Li-ion" },
      { label: "Operating endurance", value: "Up to 6 hours" },
      { label: "Payload capacity", value: "15 kg" },
      { label: "Obstacle avoidance", value: "Onboard radar" },
      {
        label: "Sensor compatibility",
        value: "ADCP, side-scan sonar, image sonar",
      },
      {
        label: "Ideal applications",
        value: "Hydrographic survey, mapping, environmental monitoring",
      },
    ],

    brochure: {
      label: "IBoat BS12 USV Brochure — (English)",
      href: "/upload/products/iboat-bs12-usv/BROCH888378.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // HD-MAX Dual Frequency Echo Sounder

  "hd-max-dual-frequency-echo-sounder": {
    slug: "hd-max-dual-frequency-echo-sounder",
    title: "HD-MAX Dual Frequency Echo Sounder",
    brand: "Hi Target",
    category: "Hydrographic & Marine Survey",
    tagline:
      "HD-MAX dual-frequency echo sounder is universal in sediment measurement for dredging and other water depth measurement projects in shallow water, deep water and sandy water. The full-featured Hi-MAX Sounder hydrographic software integrates bathymetry, navigation, and post-processing. Equipped with the 17’’ large screen and industrial computer platform, HD-MAX offers a set of reliable solution for hydrographic offices around the world along with a robust dual-frequency transducer and a user-friendly survey pole.",

    description: `
HD-MAX dual-frequency echo sounder is universal in sediment measurement for dredging and other water depth measurement projects in shallow water, deep water and sandy water. The full-featured Hi-MAX Sounder hydrographic software integrates bathymetry, navigation, and post-processing. Equipped with the 17’’ large screen and industrial computer platform, HD-MAX offers a set of reliable solution for hydrographic offices around the world along with a robust dual-frequency transducer and a user-friendly survey pole.
`,
    about: `

# Unlock High-Resolution Underwater Mapping with Advanced Multibeam Echosounder Technology

Marine surveying has been changing pretty fast lately, like faster data taking, higher accuracy, and those seabed views that are way more detailed. For hydrographic surveys, offshore engineering, dredging, port development and even environmental monitoring, a **Multibeam Echosounder** has become one of the most trustworthy options for getting full underwater data , like the whole picture under the surface, without too much fuss. And unlike older sonar systems that basically sample one single point below the vessel, modern multibeam tech gathers hundreds of depth readings at once. That means you get very detailed bathymetric maps in just one survey, efficiently, and with less back and forth.

 

If your organization is searching for dependable hydrographic gear that provides precision, productivity, and steady long-term operation then picking the right Multibeam Echosounder really can boost how your projects turn out, while cutting down both survey time and the day to day operational costs.

# Why Modern Hydrographic Projects Demand Advanced Survey Technology

For today’s sea based infrastructure work, you really do need precise underwater terrain information before construction starts, before maintenance kicks in, or even when an environmental assessment begins. High resolution seabed data makes it easier for engineers to spot underwater dangers, estimate dredging volumes, carry out pipeline inspections and improve navigation safety, basically all the things that matter early. 

An advanced Multibeam Echosounder gives wide area coverage with very strong accuracy, so it’s a good fit for multiple jobs such as:

- Hydrographic surveying
- Port and harbour development
- Offshore oil & gas inspections
- Inland waterway mapping
- Coastal engineering
- River and reservoir surveys
- Environmental monitoring
- Marine construction projects

# Key Advantages of Using a Multibeam Echosounder

| **Feature**                | **Customer Benefit**                           |
| -------------------------- | ---------------------------------------------- |
| Wide Swath Coverage        | Maps larger underwater areas in less time      |
| High-Resolution Imaging    | Produces highly detailed seabed models         |
| Accurate Depth Measurement | Improves survey reliability and planning       |
| Faster Data Collection     | Reduces project duration and operational costs |
| Real-Time Data Processing  | Enables quicker decision-making during surveys |
| Reliable Performance       | Suitable for demanding marine environments     |

# Applications Across Multiple Industries

A professional **Multibeam Echosounder** supports a wide range of industries where underwater accuracy is critical.

## Marine Infrastructure

It helps with bridge building stuff, and also coastal development, harbour enlargement, those underwater inspections where you verify the foundation while it’s still down there. You know the general idea, the usual sort of scenario.

## Dredging Operations

Basically, it helps with bridge building, and maybe along the coast development too, harbour expansion, you know, like those things. It can be used for pretty practical stuff, so it makes sense.

## Offshore Energy

Used for mapping the seabed, in offshore wind farm areas, oil  and gas installations, and also for laying subsea cables, all in a measured, more-or-less precise mode.

## Environmental Studies

It helps researchers keep an eye on what’s happening under the seabed, the aquatic ecosystems as well, and the way sediment moves around, almost like a quiet meter.

## Government & Defence

Delivers dependable hydro graphic information for navigational safety , coastal watchfulness and maritime planning.

# Why Choose a High-Performance Survey Solution?

Investing in advanced hydrographic technology isn't just about buying equipment more like, it is about nudging operational efficiency, sharpening the data quality, and boosting project confidence . A current surveying system should really provide , for example:

- Superior depth accuracy
- High-speed data acquisition
- Easy integration with hydrographic software
- Durable construction for challenging marine conditions
- Reliable technical support and long-term performance

These capabilities help survey professionals complete projects faster while maintaining international surveying standards.

`,
    faq: [
      {
        question: "What is a Multibeam Echosounder used for?",
        answer:
          "A Multibeam Echosounder is used, more or less, to  create very detailed underwater maps, by measuring multiple depth points at once, simultaneously, and in a very practical way. It is great for hydrographic surveys, dredging, offshore construction. and also marine research, where you need broad coverage, faster than single beam systems.",
      },
      {
        question:
          "How is a multibeam system better than a single beam echosounder?",
        answer:
          "A multibeam system actually sweeps a much broader region in a single pass, gives you better, higher resolution seabed information, and it cuts down survey time quite a lot compared with the older single beam approach.",
      },
      {
        question: "Which industries benefit the most from multibeam surveying?",
        answer:
          "Ports, offshore energy, marine construction, environmental agencies, defence organizations, inland waterways, and hydrographic survey companies all get something extra from multibeam tech, you know, like it helps a lot more than usual.",
      },
      {
        question:
          "How Does a Multibeam Echosounder Improve Project Efficiency?",
        answer:
          "Yeah, so by gathering more data in fewer survey passes, it just cuts down the operational costs, it shortens the project timelines a bit, and it also ups the overall precision for underwater mapping.",
      },
      {
        question:
          "What factors should be considered when selecting a multibeam survey system?",
        answer:
          "When you think about it, there are a few important considerations, like how deep the survey range really goes , the beam density you end up using, positioning accuracy and software compatibility too, plus how straightforward deployment feels, how durable the hardware is, and whether you get solid technical support afterward.",
      },
      {
        question:
          "Can a Multibeam Echosounder Be Used for Both Shallow and Deep-Water Surveys?",
        answer:
          "Yeah, modern multibeam echosounder systems are really built to work across a broad spectrum of water depths, so they end up being handy for shallow coastal mapping, inland waterways, ports, rivers, reservoirs and also deeper offshore hydrographic surveys. In other words, they’re not limited to just one setting, they can handle it, even when the depth changes a lot , which is the point.",
      },
      {
        question:
          "Can a Multibeam Echosounder be integrated with other marine survey equipment?",
        answer:
          "Sure. A Multibeam Echosounder can be plugged into GNSS/GPS positioning, and motion sensors, plus an inertial navigation system (INS), and also a sound velocity profiler (SVP). Then, hydrographic survey software makes it all connect so you end up with underwater mapping outputs that are, both highly precise and dependable.",
      },
      {
        question:
          "Why should businesses invest in an advanced Multibeam Echosounder?",
        answer:
          "An advanced multibeam echosounder helps organizations make their surveys more precise, cut down on field time, lower operational costs, and build high resolution seabed models, so they can take more informed decisions for marine construction , offshore engineering, dredging, and environmental monitoring efforts. It’s like better data, in a faster cadence, and that really matters when the plan has to stay on track.",
      },
    ],
    price: "₹18,45,000.00",
    mrp: "₹20,43,000.00",
    savings: "9.69% OFF",
    badges: ["In Stock", "Hydrographic USV"],
    rating: "4.8 · 72 verified reviews",
    sku: "HD-MAX",
    images: [
      "/upload/products/hd-max-dual-frequency-echo-sounder/1.png",
      "/upload/products/hd-max-dual-frequency-echo-sounder/2.png",
      "/upload/products/hd-max-dual-frequency-echo-sounder/3.png",
    ],

    inTheBox: [
      "1× HD-MAX Dual Frequency Echo Sounder",
      "1× Remote Controller",
      "1× Battery Pack",
      "1× Charger",
      "1× User Manual",
    ],

    features: [
      {
        title: "Dual-frequency echo sounding",
        body: "Provides reliable depth measurement in shallow and deep water using two acoustic frequencies for both sediment profiling and bathymetry.",
      },
      {
        title: "Hi-MAX hydrographic software",
        body: "Integrated software handles bathymetry, navigation, and post-processing so survey data is ready for reporting and analysis.",
      },
      {
        title: "17” industrial display",
        body: "Large screen and rugged computer platform make real-time survey monitoring and data review easy in the field.",
      },
      {
        title: "Robust dual-frequency transducer",
        body: "Maintains stable acoustic returns and accurate depth readings even in sandy or sediment-heavy water conditions.",
      },
      {
        title: "Survey pole ready",
        body: "Optimized for pole mounting to support portable hydrographic deployments from small vessels.",
      },
      {
        title: "Universal dredging support",
        body: "Designed for dredging, channel monitoring and coastal survey work across a wide range of water environments.",
      },
    ],

    specs: [
      { label: "Sounder type", value: "Dual-frequency echo sounder" },
      { label: "Frequency", value: "Typically 33 kHz and 200 kHz" },
      { label: "Depth range", value: "0.15 – 200 m" },
      { label: "Display", value: "17-inch industrial touchscreen" },
      { label: "Software", value: "Hi-MAX hydrographic survey suite" },
      { label: "Transducer", value: "Robust dual-frequency transducer" },
      { label: "Survey mounting", value: "Pole mounted or vessel mounted" },
      {
        label: "Applications",
        value: "Dredging, bathymetry, channel survey, coastal mapping",
      },
      { label: "Data output", value: "NMEA, ASCII, XYZ" },
      { label: "Power supply", value: "AC power with battery backup option" },
      { label: "Environmental rating", value: "Ruggedized for field use" },
    ],

    brochure: {
      label: "HD-MAX Dual Frequency Echo Sounder Brochure — (English)",
      href: "/upload/products/hd-max-dual-frequency-echo-sounder/BROCH919322.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // HD-Lite Single Beam Echo Sounder

  "hd-lite-single-beam-echo-sounder": {
    slug: "hd-lite-single-beam-echo-sounder",
    title: "HD-Lite Single Beam Echo Sounder",
    brand: "Hi Target",
    category: "Hydrographic & Marine Survey",
    tagline:
      "HD-Lite echo sounder is a rugged and compact PC built-in professional portable echo sounder. Boosted by an upgraded sounder platform and enhanced hardware, HD-Lite provides users with a portable solution with accuracy and credibility.",

    description: `
HD-Lite echo sounder is a rugged and compact PC built-in professional portable echo sounder. Boosted by an upgraded sounder platform and enhanced hardware, HD-Lite provides users with a portable solution with accuracy and credibility.
`,
    about: `

# Choosing the Right Echo Sounder for Accurate Depth Measurement and Reliable Marine Survey Performance

Getting accurate underwater depth measurements is very important for hydrographic surveying, dredging, inland waterways, ports, reservoirs and marine engineering jobs , because even small differences can make a real mess. In other words , if you know the bathymetry in a proper way, you can plan better routes and avoid unpleasant surprises later, which is  the whole point of depth keeping. With the right unit you can get very precise depth numbers in real time, which is the point. If you’re comparing solutions by echo sounder price, it’s important to look at a lot more than the first cost. Long-run measurement accuracy, consistent reliability, smooth integration, and what it takes to maintain everything all add up to the real overall value of the system.

# Why Modern Echo Sounders Are Essential for Marine Operations

An echo sounder uses this advanced sonar know how to determine, how deep the water is, by throwing sound waves out and then counting the seconds from when the signals go, until the moment they bounce back from the seabed. The data from this method is rather crucial for safe vessel piloting, hydrographic surveys, dredging work, construction efforts, and even for environmental follow up.

Whether you’re running on rivers lakes, coastal waters or even reservoirs, choosing the proper equipment helps make the whole thing more steady, even when conditions get tricky, and the visibility or the currents act a bit strange.

# Key Benefits of a High-Performance Echo Sounder


| Feature | Why It Matters |
| --- | --- |
| High-Precision Depth Measurement | Delivers accurate underwater data for surveys and navigation |
| Real-Time Sonar Technology | Instant depth readings improve operational efficiency |
| Easy System Integration | Compatible with GPS, GIS, and hydrographic survey software |
| Rugged Industrial Design | Performs reliably in demanding marine environments |
| Low Maintenance | Reduces downtime and long-term operating costs |


# What Influences Echo Sounder Price?

When you are checking the echo sounder price, buyers should lock in on the total performance, not just grabbing the cheapest cost model, and thinking that’s it. Because the lowest priced option can still be, you know, underwhelming in real use. In real use, pricing tends to shift based on a bunch of things, like:

- Survey-grade measurement accuracy
- Beam technology and sonar performance
- Display quality and user interface
- Integration with GPS and navigation systems
- Environmental durability and waterproof construction
- Technical support and after-sales service

Getting a grip on these variables helps organizations pick a solution that can, deliver a stronger return-on-investment during the whole operational life, sort of like from start to finish, even when it’s a bit unpredictable.

# Industries That Benefit from Echo Sounder Technology

## Modern echo sounders are widely used across numerous sectors, including:

- Hydrographic Survey Companies
- Dredging Contractors
- Inland Waterway Authorities
- Port & Harbour Management
- Irrigation Departments
- Dam & Reservoir Monitoring
- Marine Construction Projects
- Environmental Research Organizations

These industries rely on consistent depth measurement  for planning, compliance and operational safety, like pretty much all the time. You know, for stuff you must to do, and to keep the risk low , they need a steady sense of depth. Without it, the whole schedule goes off, and even the rules get messy.

# How to Choose the Best Echo Sounder

Before you make a purchase decision, consider the following check-list, like a quick routine in your head:
Required operating depth range

- Measurement accuracy
- Ease of installation
- Software compatibility
- Real-time data output
- Technical support availability
- Warranty coverage
- Long-term maintenance costs

When you compare these specifications together you get a more exact picture than just looking at the echo sounder price alone. The right solution helps cut down on operational risks, at the same time it boosts survey productivity a bit more, too.

# Why Quality Matters More Than Initial Cost

Choosing surveying equipment just because the purchase price looks lower can feel cost-effective at first, but it often turns into a bigger problem later, what with extra upkeep costs, more frequent repairs, and accuracy that gradually slips. Putting money into a high-quality, long-lasting echo sounder tends to keep things steady and smooth, it reduces operational delays, and it gives dependable measurements for years. Teams that really care about equipment reliability, exactness, and the technical support that actually shows up on time usually see better output, lower total ownership cost

`,
    faq: [
      {
        question: "What factors affect echo sounder price?",
        answer:
          "Echo sounder pricing really hinges on measurement accuracy, the sonar technology used, how deep you plan to work, and the display features. It also depends on GPS compatibility, overall build quality, and whether the software integration feels smooth or not.",
      },
      {
        question: "Where are echo sounders commonly used?",
        answer:
          "Echo sounders are commonly used for hydrographic surveys, dredging, and port management, plus reservoir monitoring and inland waterways. They are also used in marine construction and environmental research wherever consistent depth measurement is needed.",
      },
      {
        question: "Can an echo sounder integrate with GPS systems?",
        answer:
          "Yes, most modern echo sounders can link up with GPS receivers and hydrographic survey software to deliver depth and positioning data together in one coordinated view.",
      },
      {
        question: "How accurate is a professional echo sounder?",
        answer:
          "Professional echo sounders are built to deliver accurate depth readings suitable for commercial marine surveys and engineering purposes. They are made for precision because trusted depth measurement is the whole point.",
      },
      {
        question: "How should I compare echo sounder price before buying?",
        answer:
          "Instead of just comparing price, look at measurement accuracy, durability, software fit, warranty terms, technical backing, and total lifecycle value before choosing the right solution.",
      },
      {
        question: "What is the ideal frequency range for an echo sounder?",
        answer:
          "Ideal frequency depends on the application. Higher frequencies give more detail in shallow waters, whereas lower frequencies work better in deeper water and reach farther.",
      },
      {
        question: "How often should an echo sounder be calibrated?",
        answer:
          "An echo sounder should be calibrated regularly per manufacturer recommendations and before major survey jobs to keep depth readouts consistent and reduce measurement errors.",
      },
      {
        question: "Can an echo sounder operate in rough weather conditions?",
        answer:
          "Yes, professional-grade echo sounders are designed to operate in difficult marine conditions. Still, overall performance depends on correct installation, ongoing maintenance, and following the operating guidelines.",
      },
    ],
    price: "₹6,39,000.00",
    mrp: "₹7,20,000.00",
    savings: "11.25% OFF",
    badges: ["In Stock", "Hydrographic USV"],
    rating: "4.8 · 72 verified reviews",
    sku: "HD-Lite",
    images: [
      "/upload/products/hd-lite-single-beam-echo-sounder/1.png",
      "/upload/products/hd-lite-single-beam-echo-sounder/2.png",
      "/upload/products/hd-lite-single-beam-echo-sounder/3.png",
    ],

    inTheBox: [
      "1× HD-Lite Single Beam Echo Sounder",
      "1× Remote Controller",
      "1× Battery Pack",
      "1× Charger",
      "1× User Manual",
    ],

    features: [
      {
        title: "Unmatched accuracy & efficiency",
        body: "Dual‑frequency operation with real‑time sound velocity calibration via integrated temperature sensors and a high ping rate (up to 50 Hz). An adaptive depth algorithm ensures precise results across sedimentary and challenging underwater terrains.",
      },
      {
        title: '15" display & powerful onboard PC',
        body: 'Bright 15" industrial touchscreen paired with a Windows 10 built‑in PC (2.0 GHz quad‑core CPU, 16 GB RAM) and combined 128 GB + 1 TB SSD storage for fast processing and large dataset handling.',
      },
      {
        title: "Seamless user experience",
        body: "Hi‑MAX integrated software streamlines capture, navigation and post‑processing. Intuitive controls and a clear display make field operation efficient and reduce setup time.",
      },
      {
        title: "Built for tough conditions",
        body: "IP66‑rated, rugged housing and a lightweight portable design protect electronics in harsh environments while remaining easy to transport and deploy.",
      },
      {
        title: "Versatile connectivity",
        body: "Supports PPS and trigger inputs, plus 4G, Wi‑Fi, Ethernet and USB interfaces. Multi‑format data output (NMEA, ASCII, XYZ) simplifies integration with processing workflows.",
      },
      {
        title: "Survey‑grade transducer",
        body: "Robust dual‑frequency transducer delivers stable acoustic returns for accurate bathymetry in sandy and high‑sediment conditions.",
      },
    ],

    specs: [
      {
        label: "Display",
        value: "15‑inch industrial touchscreen (Windows 10)",
      },
      { label: "CPU", value: "2.0 GHz, Quad‑core" },
      { label: "RAM", value: "16 GB" },
      { label: "Storage", value: "128 GB + 1 TB SSD" },
      { label: "Sounder type", value: "Dual‑frequency echo sounder" },
      { label: "Frequency", value: "Typically 33 kHz and 200 kHz" },
      { label: "Ping rate", value: "Up to 50 Hz" },
      {
        label: "Sound velocity calibration",
        value: "Integrated temperature sensor (real‑time)",
      },
      { label: "Depth range", value: "0.15 – 200 m" },
      { label: "Ingress protection", value: "IP66" },
      { label: "Power supply", value: "AC with battery backup option" },
      { label: "Data output", value: "NMEA, ASCII, XYZ" },
      {
        label: "Connectivity",
        value: "PPS, Trigger, 4G, Wi‑Fi, Ethernet, USB",
      },
      { label: "Environmental rating", value: "Ruggedized for field use" },
    ],

    brochure: {
      label: "HD-Lite Single Beam Echo Sounder Brochure — (English)",
      href: "/upload/products/hd-lite-single-beam-echo-sounder/BROCH232999.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // HD-MAX Ⅱ

  "hd-max": {
    slug: "hd-max",
    title: "HD-MAX Ⅱ",
    brand: "Hi Target",
    category: "Hydrographic & Marine Survey",
    tagline:
      "HD-MAX Ⅱ dual-frequency echo sounder redefines underwater surveying. Its enhanced host unit is water-resistant, portable, and offers versatile interfaces. The integrated temperature sensor in the transducer enables precise sound velocity calibration, and the fully automated algorithm tackles challenging terrains. Ideal for a wide range of underwater environments, including dredging, siltation, high sediment areas, and deep waters, HD-MAX Ⅱ is the unrivaled choice for hydrographic professionals.",

    description: `
HD-MAX Ⅱ dual-frequency echo sounder redefines underwater surveying. Its enhanced host unit is water-resistant, portable, and offers versatile interfaces. The integrated temperature sensor in the transducer enables precise sound velocity calibration, and the fully automated algorithm tackles challenging terrains. Ideal for a wide range of underwater environments, including dredging, siltation, high sediment areas, and deep waters, HD-MAX Ⅱ is the unrivaled choice for hydrographic professionals.
`,
    about: `


Why Quality Matters More Than Initial Cost

Choosing surveying equipment just because the purchase price looks lower can feel cost-effective at first, but it often turns into a bigger problem later, what with extra upkeep costs, more frequent repairs, and accuracy that gradually slips. Putting money into a high-quality, long-lasting echo sounder tends to keep things steady and smooth, it reduces operational delays, and it gives dependable measurements for years. Teams that really care about equipment reliability, exactness, and the technical support that actually shows up on time usually see better output, lower total ownership costs over time, and a stronger sense of confidence during each survey work.
`,
    faq: [
      {
        question: "What factors affect echo sounder price?",
        answer:
          "Echo sounder pricing really hinges on measurement accuracy, the sonar technology used, how deep you plan to work, and the display features. It also depends on GPS compatibility, overall build quality, and whether the software integration feels smooth or not.",
      },
      {
        question: "Where are echo sounders commonly used?",
        answer:
          "Echo sounders are commonly used for hydrographic surveys, dredging, and port management, plus reservoir monitoring and inland waterways. They are also used in marine construction and environmental research wherever consistent depth measurement is needed.",
      },
      {
        question: "Can an echo sounder integrate with GPS systems?",
        answer:
          "Yes, most modern echo sounders can link up with GPS receivers and hydrographic survey software to deliver depth and positioning data together in one coordinated view.",
      },
      {
        question: "How accurate is a professional echo sounder?",
        answer:
          "Professional echo sounders are built to deliver accurate depth readings suitable for commercial marine surveys and engineering purposes. They are made for precision because trusted depth measurement is the whole point.",
      },
      {
        question: "How should I compare echo sounder price before buying?",
        answer:
          "Instead of just comparing price, look at measurement accuracy, durability, software fit, warranty terms, technical backing, and total lifecycle value before choosing the right solution.",
      },
      {
        question: "What is the ideal frequency range for an echo sounder?",
        answer:
          "Ideal frequency depends on the application. Higher frequencies give more detail in shallow waters, whereas lower frequencies work better in deeper water and reach farther.",
      },
      {
        question: "How often should an echo sounder be calibrated?",
        answer:
          "An echo sounder should be calibrated regularly per manufacturer recommendations and before major survey jobs to keep depth readouts consistent and reduce measurement errors.",
      },
      {
        question: "Can an echo sounder operate in rough weather conditions?",
        answer:
          "Yes, professional-grade echo sounders are designed to operate in difficult marine conditions. Still, overall performance depends on correct installation, ongoing maintenance, and following the operating guidelines.",
      },
    ],
    price: "₹19,45,000.00",
    mrp: "₹21,00,000.00",
    savings: "7.38% OFF",
    badges: ["In Stock", "Hydrographic USV"],
    rating: "4.8 · 72 verified reviews",
    sku: "HD-MAX Ⅱ",
    images: [
      "/upload/products/hd-max/1.png",
      "/upload/products/hd-max/2.png",
      "/upload/products/hd-max/3.png",
    ],

    inTheBox: [
      "1× HD-MAX Ⅱ Single Beam Echo Sounder",
      "1× Remote Controller",
      "1× Battery Pack",
      "1× Charger",
      "1× User Manual",
    ],

    features: [
      {
        title: "Unmatched Accuracy & Efficiency",
        body: "Dual‑frequency operation ensures high‑precision measurements. Real‑time sound velocity calibration using the transducer's integrated temperature sensor, plus a 50 Hz ping rate, deliver fast and reliable data capture. An adaptive depth algorithm further optimizes performance across diverse seabed conditions.",
      },
      {
        title: '15" display & high‑performance PC',
        body: 'Bright 15" industrial touchscreen with an integrated Windows 10 PC (2.0 GHz quad‑core CPU, 16 GB RAM) and combined 128 GB + 1 TB SSD storage for smooth data processing and large dataset handling.',
      },
      {
        title: "Seamless User Experience",
        body: "Integrated Hi‑MAX software streamlines survey capture, navigation and post‑processing. Intuitive buttons and a clear display make field operation fast and efficient.",
      },
      {
        title: "Built for Tough Conditions",
        body: "IP66‑rated housing protects electronics from dust and powerful water jets; the lightweight, portable design and rugged construction support long‑term field use.",
      },
      {
        title: "Versatile Connectivity",
        body: "Supports PPS and trigger inputs plus 4G, Wi‑Fi, Ethernet and USB interfaces. Multi‑format data export (NMEA, ASCII, XYZ) enables seamless integration with processing workflows.",
      },
      {
        title: "Survey‑grade transducer",
        body: "Robust dual‑frequency transducer optimized for accurate returns in sandy and high‑sediment environments.",
      },
    ],

    specs: [
      {
        label: "Display",
        value: "15‑inch industrial touchscreen (Windows 10)",
      },
      { label: "CPU", value: "2.0 GHz, Quad‑core" },
      { label: "RAM", value: "16 GB" },
      { label: "Storage", value: "128 GB + 1 TB SSD" },
      { label: "Sounder type", value: "Dual‑frequency echo sounder" },
      { label: "Frequency", value: "Typically 33 kHz and 200 kHz" },
      { label: "Ping rate", value: "Up to 50 Hz" },
      {
        label: "Sound velocity calibration",
        value: "Integrated temperature sensor (real‑time)",
      },
      {
        label: "Adaptive algorithm",
        value: "Automated depth/adaptive processing",
      },
      { label: "Depth range", value: "0.15 – 200 m" },
      { label: "Ingress protection", value: "IP66" },
      { label: "Power supply", value: "AC with battery backup option" },
      { label: "Data output", value: "NMEA, ASCII, XYZ" },
      {
        label: "Connectivity",
        value: "PPS, Trigger, 4G, Wi‑Fi, Ethernet, USB",
      },
      { label: "Environmental rating", value: "Ruggedized for field use" },
    ],

    brochure: {
      label: "HD-MAX Ⅱ Single Beam Echo Sounder Brochure — (English)",
      href: "/upload/products/hd-max/BROCH232999.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // P9 Outdoor Laser Measure with Camera

  "p9-outdoor-laser-measure-with-camera": {
    slug: "p9-outdoor-laser-measure-with-camera",
    title: "P9 Outdoor Laser Measure with Camera",
    brand: "Mileseey",
    category: "Laser Distance Meters",
    tagline:
      "Outdoor Laser Distance Meter The P9 LDM is the epitome of top-of-the-line measuring devices, built to meet the demands of professionals working on large,active, and complicated outdoor job sites.",

    description: `
The advanced indirect measuring features of P9, like point-to-point, trapezium, auto height, triangular area, and cylindrical volume, enable precise measurements of complex shapes and structures, allowing for accurate calculations without physically accessing hard-to-reach areas, making the laser measure a perfect tool for professionals in construction, building, and surveying.
`,
    price: "₹37,900.00",
    mrp: "₹42,300.00",
    savings: "10.40% OFF",
    badges: ["In Stock", "Laser Distance Meters"],
    rating: "4.8 · 72 verified reviews",
    sku: "P9 LDM",
    images: [
      "/upload/products/p9-outdoor-laser-measure-with-camera/1.png",
      "/upload/products/p9-outdoor-laser-measure-with-camera/2.png",
      "/upload/products/p9-outdoor-laser-measure-with-camera/3.png",
      "/upload/products/p9-outdoor-laser-measure-with-camera/4.png",
      "/upload/products/p9-outdoor-laser-measure-with-camera/5.png",
      "/upload/products/p9-outdoor-laser-measure-with-camera/6.jpg",
      "/upload/products/p9-outdoor-laser-measure-with-camera/7.jpg",
      "/upload/products/p9-outdoor-laser-measure-with-camera/8.jpg",
      "/upload/products/p9-outdoor-laser-measure-with-camera/9.jpg",
      "/upload/products/p9-outdoor-laser-measure-with-camera/10.jpg",
      "/upload/products/p9-outdoor-laser-measure-with-camera/11.jpg",
    ],

    inTheBox: [
      "1× P9 Outdoor Laser Measure with Camera",
      "1× Remote Controller",
      "1× Battery Pack",
      "1× Charger",
      "1× User Manual",
    ],

    features: [
      {
        title: "Upto 300m (1,000ft) Outdoor Measuring Range",
        body: "Long-range outdoor performance captures measurements up to 300 meters with stable targeting for construction, surveying, and landscape layout.",
      },
      {
        title: "4x Zoom Viewfinder Camera",
        body: "The built-in camera with 4x optical zoom helps you identify distant targets clearly and confirm measurement points on uneven terrain.",
      },
      {
        title: "Advanced P2P Technology",
        body: "Point-to-point functionality calculates indirect distances quickly and accurately, enabling measurements without direct access to every endpoint.",
      },
      {
        title: "Up to 1,000 Groups Memory Storage",
        body: "Store and recall up to 1,000 measurement groups for large projects, simplifying data review and reducing manual note-taking.",
      },
      {
        title: "Cutting-edge Wireless Charging",
        body: "Fast wireless charging keeps the unit powered through long field days and eliminates the hassle of cable-based recharging.",
      },
      {
        title: "PowerBurst & PowerChirp Technology",
        body: "Rapid laser pulse processing delivers faster measurements and improved accuracy on reflective or uneven surfaces.",
      },
    ],

    specs: [
      { label: "Measurement range", value: "0.05 – 300 m" },
      { label: "Accuracy", value: "± 1.5 mm" },
      { label: "Laser diode", value: "635 nm, < 1 mW" },
      { label: "Laser class", value: "Class 2" },
      { label: "Units", value: "m/cm, ft/inch" },
      { label: "Camera zoom", value: "4x optical" },
      { label: "Memory", value: "Up to 1,000 groups" },
      { label: "Charging", value: "Wireless charging" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Display", value: "Color LCD" },
      { label: "Protection", value: "IP54" },
      { label: "Battery type", value: "Rechargeable lithium battery" },
      { label: "Weight", value: "Approx. 0.2 kg" },
    ],

    brochure: {
      label: "P9 Outdoor Laser Measure with Camera Brochure — (English)",
      href: "/upload/products/p9-outdoor-laser-measure-with-camera/BROCH833531.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // Mileseey S50C Green Laser Measure with Camera

  "mileseey-s50c-green-laser-measure-with-camera": {
    slug: "mileseey-s50c-green-laser-measure-with-camera",
    title: "Mileseey S50C Green Laser Measure with Camera",
    brand: "Mileseey",
    category: "Laser Distance Meters",
    tagline:
      "Mileseey S50C combines green-beam distance measurement with a 4x zoom camera for precise outdoor targeting and fast data capture.",

    description: `
The Mileseey S50C Green Laser Measure with Camera is built for professionals who need accurate long-range measurements, clear target visualization, and seamless data transfer. Featuring bright green-beam laser visibility, a 4x optical zoom camera, and a responsive 2.4-inch AMOLED touchscreen, the S50C delivers reliable measurement performance up to 300 m (1,000 ft) in demanding outdoor conditions.

Advanced P2P and indirect measurement modes make it easy to capture distance, area, volume, height, and stakeout measurements without direct line of sight. Built-in Bluetooth connectivity allows users to sync results instantly with the Mileseey Tools mobile app or compatible field apps.
`,
    price: "₹37,900",
    mrp: "₹42,300",
    savings: "10.40% OFF",
    badges: ["In Stock", "Laser Distance Meters"],
    rating: "4.8 · 72 verified reviews",
    sku: "S50C",
    images: [
      "/upload/products/mileseey-s50c-green-laser-measure-with-camera/1.png",
      "/upload/products/mileseey-s50c-green-laser-measure-with-camera/2.png",
      "/upload/products/mileseey-s50c-green-laser-measure-with-camera/3.png",
      "/upload/products/mileseey-s50c-green-laser-measure-with-camera/4.png",
      "/upload/products/mileseey-s50c-green-laser-measure-with-camera/5.png",
      "/upload/products/mileseey-s50c-green-laser-measure-with-camera/6.png",
    ],

    inTheBox: [
      "1× Mileseey S50C Green Laser Measure with Camera",
      "1× Remote controller",
      "1× Rechargeable battery pack",
      "1× USB-C charger",
      "1× User manual",
    ],

    features: [
      {
        title: "Bright green-beam targeting",
        body: "Visible laser technology improves target acquisition in bright outdoor environments and over long distances.",
      },
      {
        title: "4× optical zoom camera",
        body: "High-resolution camera and zoom allow precise sighting of distant or hard-to-reach targets.",
      },
      {
        title: "Professional P2P and indirect measurements",
        body: "Supports point-to-point, height, area, volume, and multi-step indirect measurement modes for flexible field work.",
      },
      {
        title: "Bluetooth mobile app sync",
        body: "Send measurements directly to the Mileseey Tools app or compatible field apps for faster reporting and fewer manual entries.",
      },
      {
        title: "Large AMOLED touchscreen",
        body: "The 2.4-inch sunlight-readable display makes menu navigation and measurement review easy in all lighting conditions.",
      },
      {
        title: "Long-lasting battery and wireless charging",
        body: "Recharge quickly and stay in the field longer with fast wireless charging and efficient power management.",
      },
    ],

    specs: [
      { label: "Measurement range", value: "0.05 – 300 m (1,000 ft)" },
      { label: "Accuracy", value: "± 1.5 mm" },
      { label: "Laser wavelength", value: "635 nm green beam" },
      { label: "Laser class", value: "Class 2" },
      { label: "Camera zoom", value: "4× optical" },
      { label: "Display", value: "2.4-inch AMOLED touchscreen" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Memory", value: "Up to 1,000 groups" },
      { label: "Charging", value: "Wireless and USB-C" },
      { label: "Protection", value: "IP54" },
      { label: "Battery", value: "Rechargeable lithium battery" },
      { label: "Weight", value: "Approx. 200 g" },
      { label: "App support", value: "Mileseey Tools, magicplan" },
    ],

    brochure: {
      label: "Mileseey S50C Brochure — (English)",
      href: "/upload/products/mileseey-s50c-green-laser-measure-with-camera/S50C-Quick-Guide.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // Mileseey DTX-10 Laser Tape Measure

  "mileseey-dtx-10-laser-tape-measure": {
    slug: "mileseey-dtx-10-laser-tape-measure",
    title: "Mileseey DTX-10 Laser Tape Measure",
    brand: "Mileseey",
    category: "Laser Distance Meters",
    tagline:
      "DTX-10 delivers fast, accurate distance and area measurements with green-beam visibility and a compact, field-ready design.",

    description: `
The Mileseey DTX-10 Laser Tape Measure is a professional measuring tool built for fast, precise layout work. It combines a high-visibility green beam laser with a rugged digital tape measure design, making it ideal for construction, interior fit-out, and site inspection tasks.

With easy-to-use distance, area, volume, height, and Pythagorean measurement modes, the DTX-10 helps users capture clear results quickly. Its convenient Bluetooth connectivity also enables seamless transfer of measurements to the Mileseey Tools app for faster reporting and documentation.
`,
    price: "₹37,900",
    mrp: "₹42,300",
    savings: "10.40% OFF",
    badges: ["In Stock", "Laser Distance Meters"],
    rating: "4.8 · 72 verified reviews",
    sku: "DTX-10",
    images: [
      "/upload/products/mileseey-dtx-10-laser-tape-measure/1.png",
      "/upload/products/mileseey-dtx-10-laser-tape-measure/2.png",
      "/upload/products/mileseey-dtx-10-laser-tape-measure/3.png",
      "/upload/products/mileseey-dtx-10-laser-tape-measure/4.png",
      "/upload/products/mileseey-dtx-10-laser-tape-measure/5.png",
      "/upload/products/mileseey-dtx-10-laser-tape-measure/6.png",
    ],

    inTheBox: [
      "1× Mileseey DTX-10 Laser Tape Measure",
      "1× Protective case",
      "1× Rechargeable battery pack",
      "1× USB-C charger",
      "1× User manual",
    ],

    features: [
      {
        title: "Green beam laser visibility",
        body: "High-visibility laser targeting helps users sight measurements clearly, even in daylight and on distant surfaces.",
      },
      {
        title: "Smart Pythagorean measurements",
        body: "Calculate height and indirect distances without needing direct line of sight to the target.",
      },
      {
        title: "Bluetooth app connectivity",
        body: "Export measurement data wirelessly to the Mileseey Tools mobile app for faster documentation and reporting.",
      },
      {
        title: "Multi-function measurement modes",
        body: "Supports distance, area, volume, continuous measurement, min/max, and stakeout modes for versatile field use.",
      },
      {
        title: "Compact field-ready design",
        body: "Lightweight and durable with a comfortable grip, the DTX-10 is easy to carry and operate on site.",
      },
      {
        title: "Fast and stable performance",
        body: "Reliable laser measurement and data recall reduce rework and keep projects moving on schedule.",
      },
    ],

    specs: [
      { label: "Measurement range", value: "0.05 – 150 m" },
      { label: "Accuracy", value: "± 1.5 mm" },
      { label: "Laser wavelength", value: "635 nm green beam" },
      { label: "Laser class", value: "Class 2" },
      {
        label: "Measurement modes",
        value: "Distance, area, volume, Pythagoras, continuous",
      },
      { label: "Display", value: "Large color LCD" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Battery", value: "Rechargeable lithium-ion" },
      { label: "Protection", value: "IP54" },
      { label: "Memory", value: "Multiple measurement records" },
      { label: "Weight", value: "Approx. 0.2 kg" },
      { label: "App support", value: "Mileseey Tools" },
    ],

    brochure: {
      label: "Mileseey DTX-10 Brochure — (English)",
      href: "/upload/products/mileseey-dtx-10-laser-tape-measure/DTX-10-Quick-Guide.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // S7 330ft Outdoor Laser Measure with Camera

  "s7-330ft-outdoor-laser-measure-with-camera": {
    slug: "s7-330ft-outdoor-laser-measure-with-camera",
    title: "S7 330ft Outdoor Laser Measure with Camera",
    brand: "Mileseey",
    category: "Laser Distance Meters",
    tagline:
      "Point Viewfinder with Camera The built-in viewfinder camera (2x zoom digital camera) with on-screen aiming reticle ensures you to find the laser spot with ease and take accurate outdoor measurements confidently even when working in bright sunlight conditions.",

    description: `

Not just measure. Mileseey S7 can be connected to smart APP(Smart Life) on mobile terminals such as
mobile phones and tablets.

Dimensions can be entered directly on-site photos, and users can use the app to draw projects

and build plans directly. The built-in memory can store up to 1,000 sets of data.
`,
    price: "₹16,990.00",
    mrp: "₹18,900.00",
    savings: "10.11% OFF",
    badges: ["In Stock", "Laser Distance Meters"],
    rating: "4.8 · 72 verified reviews",
    sku: "S7 330ft",
    images: [
      "/upload/products/s7-330ft-outdoor-laser-measure-with-camera/1.png",
      "/upload/products/s7-330ft-outdoor-laser-measure-with-camera/2.png",
    ],

    inTheBox: [
      "1× S7 330ft Outdoor Laser Measure with Camera",
      "1× Remote Controller",
      "1× Battery Pack",
      "1× Charger",
      "1× User Manual",
    ],

    features: [
      {
        title: "330ft Outdoor Measuring Range",
        body: "Measures outdoor distances up to 330 feet with stable laser targeting, making it ideal for long-range construction and site planning tasks.",
      },
      {
        title: "2x Zoom Viewfinder Camera",
        body: "A 2x digital zoom camera and on-screen reticle help you aim precisely at distant points, even in bright sunlight.",
      },
      {
        title: "P2P Technology",
        body: "Point-to-point measurement lets you calculate indirect distances and areas without moving to each endpoint.",
      },
      {
        title: "IP65 Protection",
        body: "Dust-tight design and protection against water jets ensure reliable performance on outdoor job sites.",
      },
    ],

    specs: [
      { label: "Measurement range", value: "0.05 – 100.6 m (330 ft)" },
      { label: "Accuracy", value: "± 2 mm" },
      { label: "Laser class", value: "Class 2" },
      { label: "Laser wavelength", value: "635 nm" },
      { label: "Units", value: "m/cm, ft/inch" },
      { label: "Camera zoom", value: "2x digital" },
      { label: "Memory", value: "Up to 1,000 groups" },
      { label: "Protection", value: "IP65" },
      { label: "Display", value: "Color LCD" },
      { label: "Battery", value: "Rechargeable lithium battery" },
      { label: "Power saving", value: "Auto shut-off" },
      { label: "Weight", value: "Approx. 0.2 kg" },
    ],

    brochure: {
      label: "S7 330ft Outdoor Laser Measure with Camera Brochure — (English)",
      href: "/upload/products/s7-330ft-outdoor-laser-measure-with-camera/BROCH787847.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // Mileseey S50 Laser Distance Meter (Green Beam)

  "mileseey-s50-laser-distance-meter-green-beam": {
    slug: "mileseey-s50-laser-distance-meter-green-beam",
    title: "Mileseey S50 Laser Distance Meter (Green Beam)",
    brand: "Mileseey",
    category: "Laser Distance Meters",
    tagline:
      "Mileseey S50 Laser Distance Meter is a compact and highly accurate digital measuring tool designed for construction, engineering, and site work. It delivers fast and reliable distance measurements, making it ideal for professionals, surveyors, and contractors.",

    description: `

Mileseey S50 is a compact and accurate laser distance meter designed for construction and engineering use. It offers fast, reliable measurement with green beam visibility, ideal for professional site work.

`,
    price: "₹18,990.00",
    mrp: "₹21,000.00",
    savings: "10.00% OFF",
    badges: ["In Stock", "Laser Distance Meters"],
    rating: "4.8 · 72 verified reviews",
    sku: "Mileseey S50",
    images: [
      "/upload/products/mileseey-s50-laser-distance-meter-green-beam/1.png",
      "/upload/products/mileseey-s50-laser-distance-meter-green-beam/2.png",
      "/upload/products/mileseey-s50-laser-distance-meter-green-beam/3.webp",
      "/upload/products/mileseey-s50-laser-distance-meter-green-beam/4.webp",
      "/upload/products/mileseey-s50-laser-distance-meter-green-beam/5.webp",
      "/upload/products/mileseey-s50-laser-distance-meter-green-beam/6.webp",
      "/upload/products/mileseey-s50-laser-distance-meter-green-beam/7.webp",
    ],

    inTheBox: [
      "1× Mileseey S50 Laser Distance Meter",
      "1× Remote Controller",
      "1× Battery Pack",
      "1× Charger",
      "1× User Manual",
    ],

    features: [
      {
        title: "±1.5mm high accuracy",
        body: "Precision measurement accuracy delivers reliable results for construction layout and engineering applications.",
      },
      {
        title: "120m measuring range",
        body: "The S50 supports long-distance outdoor measurement up to 120 meters with strong laser visibility.",
      },
      {
        title: "Green beam visibility",
        body: "A bright green laser beam improves sighting in bright outdoor conditions, making it easier to aim at distant targets.",
      },
      {
        title: "Area, volume & Pythagoras functions",
        body: "Built-in measurement modes quickly calculate area, volume, and indirect distances using Pythagorean formulas.",
      },
      {
        title: "IP54 dust & water resistance",
        body: "Rugged IP54 protection guards against dust and splashes for reliable performance on job sites.",
      },
      {
        title: "USB-C charging & compact design",
        body: "USB-C charging keeps the battery topped up quickly, while the compact design makes the unit easy to carry and operate.",
      },
    ],

    specs: [
      { label: "Measurement range", value: "0.05 – 120 m" },
      { label: "Accuracy", value: "± 1.5 mm" },
      { label: "Laser class", value: "Class 2" },
      { label: "Laser wavelength", value: "520 nm (green beam)" },
      { label: "Units", value: "m/cm, ft/inch" },
      { label: "Camera", value: "Not applicable" },
      { label: "Memory", value: "Up to 30 measurements" },
      { label: "Protection", value: "IP54" },
      { label: "Display", value: "Backlit LCD" },
      { label: "Battery", value: "USB-C rechargeable battery" },
      { label: "Auto shut-off", value: "Yes" },
      { label: "Weight", value: "Approx. 0.18 kg" },
    ],

    brochure: {
      label: "Mileseey S50 Laser Distance Meter Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // XTAPE1 Digital Tape Measure with Laser

  "xtape1-digital-tape-measure-with-laser": {
    slug: "xtape1-digital-tape-measure-with-laser",
    title: "XTAPE1 Digital Tape Measure with Laser",
    brand: "Mileseey",
    category: "Laser Distance Meters",
    tagline:
      "XTAPE1 smartly combines a digital tape with a laser measuring part in one sleek modular design, offering users effortless measuring solutions to any distance, near or far without switching tools.",

    description: `
Most digital tapes on the market are either unable to replace old tape measures, or the replacement process is complicated and the replaced tapes cannot be reused. XTAPE1's modular design allows you to quickly and easily swap tapes to change units in just 3s, no need to remove any screws.

`,
    price: "₹1.00",
    mrp: "₹2.00",
    savings: "50.00% OFF",
    badges: ["In Stock", "Laser Distance Meters"],
    rating: "4.8 · 72 verified reviews",
    sku: "XTAPE1",
    images: [
      "/upload/products/xtape1-digital-tape-measure-with-laser/1.png",
      "/upload/products/xtape1-digital-tape-measure-with-laser/2.png",
    ],

    inTheBox: [
      "1× XTAPE1 Digital Tape Measure with Laser",
      "1× Remote Controller",
      "1× Battery Pack",
      "1× Charger",
      "1× User Manual",
    ],

    features: [
      {
        title: "Digital Tape: 12ft Range, ±1/32'Accuracy",
        body: "Durable steel tape module measures up to 12 ft (3.65 m) with repeatable ±1/32' accuracy for quick on-site checks and layout tasks.",
      },
      {
        title: "Laser Measure: 330ft Range, ±1/16'Accuracy",
        body: "Long-range laser measures up to 330 ft (100.6 m) with high repeatability; ideal for outdoor distances where the tape cannot reach.",
      },
      {
        title: "Top-Grade Green Aligning Laser",
        body: "Bright green beam improves visibility in daylight, helping you target distant points more reliably than standard red lasers.",
      },
      {
        title: "Enhanced Modular Design for Sustainability",
        body: "Quick‑swap tape cartridges let you replace or switch tape types in seconds, reducing waste and extending product life.",
      },
      {
        title: "Real-Time Angle Measurement Display",
        body: "Built-in inclinometer shows angle in real time so you can capture slope and tilt measurements alongside distances.",
      },
      {
        title: "Seamless Data Transfer via App",
        body: "Bluetooth connectivity and companion app enable one-touch transfer of measurements to mobile devices for easy documentation.",
      },
    ],

    specs: [
      { label: "Tape range", value: "3.65 m (12 ft)" },
      { label: "Tape accuracy", value: '± 1/32"' },
      { label: "Laser range", value: "0.05 – 100.6 m (330 ft)" },
      { label: "Laser accuracy", value: '± 1/16"' },
      { label: "Laser wavelength", value: "515 nm (green beam)" },
      { label: "Laser class", value: "Class 2" },
      { label: "Units", value: "m/cm, ft/inch" },
      { label: "Angle measurement", value: "Real‑time inclinometer" },
      { label: "Connectivity", value: "Bluetooth (app)" },
      { label: "Modular design", value: "Quick‑swap tape cartridges" },
      { label: "Protection", value: "IP54" },
      { label: "Battery", value: "Rechargeable lithium battery" },
      { label: "Weight", value: "Approx. 0.18 kg" },
    ],

    brochure: {
      label: "XTAPE1 Digital Tape Measure with Laser Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // DT20 Digital Laser Tape Measure with Bluetooth

  "dt20-digital-laser-tape-measure-with-bluetooth": {
    slug: "dt20-digital-laser-tape-measure-with-bluetooth",
    title: "DT20 Digital Laser Tape Measure with Bluetooth",
    brand: "Mileseey",
    category: "Laser Distance Meters",
    tagline:
      "High Accuracy | Fast Speed HD LCD Backlit Screen, clear reading. Nylon Coating so that it can be wear-resistant, non-slip, and drop-resistant. TAPE MEASURE for short distance 16ft  5m with high accuracy±1. LASER MEASURE has Precise Accuracy up to ±18in",
    description: `

3-in-1 Digital Distance Meter

Portable DT20 in ergonomic hand-held grip design. Tape and 6 laser measures to fulfill all your needs. HD digital display for the real-time measures

`,
    price: "₹1.00",
    mrp: "₹2.00",
    savings: "50.00% OFF",
    badges: ["In Stock", "Laser Distance Meters"],
    rating: "4.8 · 72 verified reviews",
    sku: "DT20",
    images: [
      "/upload/products/dt20-digital-laser-tape-measure-with-bluetooth/1.png",
      "/upload/products/dt20-digital-laser-tape-measure-with-bluetooth/2.png",
      "/upload/products/dt20-digital-laser-tape-measure-with-bluetooth/3.png",
    ],

    inTheBox: [
      "1× DT20 Digital Laser Tape Measure with Bluetooth",
      "1× Remote Controller",
      "1× Battery Pack",
      "1× Charger",
      "1× User Manual",
    ],

    features: [
      {
        title: "shipping available on/after Feb.5th",
        body: "Shipping for this model begins on Feb 5th; pre-orders will be processed in the order received and customers will be notified by email when items ship.",
      },
      {
        title: "130ft Laser Distance Meter",
        body: "Long-range laser measurement capability reaches approximately 130 ft (40 m) under good reflectivity conditions, suitable for outdoor site layout and surveying tasks.",
      },
      {
        title: "16ft Digital Tape Measure",
        body: "Integrated 16 ft (5 m) steel tape provides fast short-range measurements with tactile feel and reliable repeatability for building and inspection work.",
      },
      {
        title: "±1/16' Accuracy",
        body: "High measurement accuracy for laser readings (approximately ±1/16') ensures dependable results for construction tolerances and layout checks.",
      },
      {
        title: "Backlit LCD Display",
        body: "Clear backlit LCD shows distance, area, volume and short prompts for quick reading in low light or bright conditions.",
      },
      {
        title: "Data Digitization Technology",
        body: "Digitizes measurements on the device and transmits values to the companion app or PC to eliminate manual entry errors.",
      },
      {
        title: "App Data Sync",
        body: "Seamless Bluetooth sync with the mobile app lets you capture, annotate and export measurement sets directly from the field.",
      },
      {
        title:
          "The stock of the version without bluetooth is not available for EU countries",
        body: "Please note: EU distribution currently includes only the Bluetooth‑enabled model; non‑Bluetooth variants are not stocked for EU customers.",
      },
    ],

    specs: [
      { label: "Tape range", value: "5.0 m (16 ft)" },
      { label: "Tape accuracy", value: '± 1/32" (typ.)' },
      { label: "Laser range", value: "0.05 – 40 m (130 ft)" },
      { label: "Laser accuracy", value: '± 1/16" (typ.)' },
      { label: "Laser wavelength", value: "635 nm (red)" },
      { label: "Laser class", value: "Class 2" },
      { label: "Units", value: "m/cm, ft/inch" },
      { label: "Angle measurement", value: "Built‑in inclinometer" },
      { label: "Connectivity", value: "Bluetooth (mobile app)" },
      { label: "Memory", value: "Up to 1,000 groups" },
      { label: "Modular design", value: "Quick‑swap tape cartridges" },
      { label: "Protection", value: "IP54" },
      { label: "Battery", value: "Rechargeable lithium battery (USB‑C)" },
      { label: "Weight", value: "Approx. 0.18 kg" },
    ],

    brochure: {
      label:
        "DT20 Digital Laser Tape Measure with Bluetooth Brochure — (English)",
      href: "",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // soil-permeability-apparatus

  "soil-permeability-apparatus": {
    slug: "soil-permeability-apparatus",
    title: "Soil Permeability Apparatus",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Compaction Permeameter Mould 1000 ml capacity, clamped between the top and bottom drainage plates having a recess for porous stones. Supplied along with a false bottom plate for use during compaction of soil in the permeameter and extension collar. ⦁    Standpipe panel, with three glass tubes of 6 mm, 10mm. and 20 mm dia., one meter long, supplied with a wooden meter scale and 3-meter rubber tubing.",
    description: `

⦁    Compaction Permeameter Mould 1000 ml capacity, clamped between the top and bottom drainage plates having a recess for porous stones. Supplied along with a false bottom plate for use during compaction of soil in the permeameter and extension collar.

⦁    Standpipe panel, with three glass tubes of 6 mm, 10mm. and 20 mm dia., one meter long, supplied with a wooden meter scale and 3-meter rubber tubing.
`,
    price: "₹18000",
    mrp: "₹20000",
    savings: "10.00% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Soil Permeability Apparatus",
    images: ["/upload/products/soil-permeability-apparatus/1.jpg"],
    inTheBox: [
      "1× Soil Permeability Apparatus",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Reliable permeameter mould setup",
        body: "The 1000 ml compaction permeameter mould is clamped between top and bottom drainage plates for stable soil permeability testing.",
      },
      {
        title: "Porous stone recess for accurate flow",
        body: "The drainage plates include recesses for porous stones to support consistent water flow through the soil sample.",
      },
      {
        title: "Includes false bottom and extension collar",
        body: "The supplied false bottom plate and extension collar make compaction and sample preparation more convenient.",
      },
      {
        title: "Multi-tube standpipe panel",
        body: "The standpipe panel features three glass tubes of 6 mm, 10 mm, and 20 mm diameter for flexible head-loss measurements.",
      },
      {
        title: "Complete lab setup for permeability study",
        body: "With a 1-meter tube length, wooden meter scale, and 3-meter rubber tubing, the apparatus supports practical laboratory observations.",
      },
    ],

    specs: [
      { label: "Apparatus type", value: "Soil permeability apparatus" },
      { label: "Permeameter mould capacity", value: "1000 ml" },
      {
        label: "Drainage plates",
        value: "Top and bottom plates with porous stone recess",
      },
      {
        label: "Additional accessories",
        value: "False bottom plate and extension collar",
      },
      {
        label: "Standpipe panel",
        value: "Three glass tubes: 6 mm, 10 mm, 20 mm dia.",
      },
      { label: "Tube length", value: "1 meter each" },
      {
        label: "Measurement support",
        value: "Wooden meter scale and 3-meter rubber tubing",
      },
      { label: "Application", value: "Soil permeability and seepage testing" },
    ],

    brochure: {
      label: "Pocket Penetrometer Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // hot-air-oven

  "hot-air-oven": {
    slug: "hot-air-oven",
    title: "Hot Air Oven",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Double walled, inner chamber S.S.304, Outer CRC powder coated , 65 mm thick glass wool insulation , 80/20 nichrome heating elements placed under ribs at bottom and sides for uniform heat distribution Temp. Range. 50˚C to 250˚C , Auto tune Dual Display Digital, forced air circulation, Working on 230 Volts AC Single Phase.",
    description: `
Double walled, inner chamber S.S.304, Outer CRC powder coated , 65 mm thick glass wool insulation , 80/20 nichrome heating elements placed under ribs at bottom and sides for uniform heat distribution Temp. Range. 50˚C to 250˚C , Auto tune Dual Display Digital, forced air circulation, Working on 230 Volts AC Single Phase.
`,
    price: "₹22000 ",
    mrp: "₹25000",
    savings: "12.00% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Hot Air Oven",
    images: ["/upload/products/hot-air-oven/1.png"],
    inTheBox: [
      "1× Hot Air Oven",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Robust double-wall construction",
        body: "The oven is built with a double-wall body, offering durability and better thermal efficiency for laboratory heating applications.",
      },
      {
        title: "Stainless steel inner chamber",
        body: "The inner chamber is made from SS 304, providing corrosion resistance and reliable performance in demanding lab environments.",
      },
      {
        title: "Efficient thermal insulation",
        body: "A 65 mm thick glass wool insulation layer helps minimize heat loss and maintain stable temperatures throughout the chamber.",
      },
      {
        title: "Uniform heating with nichrome elements",
        body: "80/20 nichrome heating elements are placed beneath ribs at the bottom and sides to ensure even heat distribution.",
      },
      {
        title: "Accurate digital temperature control",
        body: "The auto-tune dual display digital controller, combined with forced air circulation, delivers precise and consistent heating performance.",
      },
    ],

    specs: [
      { label: "Construction", value: "Double walled body" },
      { label: "Inner chamber", value: "Stainless steel SS 304" },
      { label: "Outer body", value: "CRC powder coated" },
      { label: "Insulation", value: "65 mm thick glass wool" },
      {
        label: "Heating element",
        value: "80/20 nichrome, placed under ribs at bottom and sides",
      },
      { label: "Temperature range", value: "50°C to 250°C" },
      { label: "Control", value: "Auto-tune dual display digital" },
      { label: "Air circulation", value: "Forced air circulation" },
      { label: "Power supply", value: "230 V AC, single phase" },
    ],

    brochure: {
      label: "Pocket Penetrometer Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // core-cutter-rammern

  "core-cutter-rammer": {
    slug: "core-cutter-rammer",
    title: "Core Cutter Rammer",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "With solid mild steel foot 140 mm diameter and 75 mm height with a concentrically screwed 25 mm diameter solid mild steel staff. The overall length of the rammer including the foot as well as the staff will be approximately 900 mm. The rammer ( foot and staff together ) will weigh approximately 9 kg (Fig. 1 of IS : 2720 Part 29) None",
    description: `
With solid mild steel foot 140 mm diameter and 75 mm height with a concentrically screwed 25 mm diameter solid mild steel staff. The overall length of the rammer including the foot as well as the staff will be approximately 900 mm. The rammer ( foot and staff together ) will weigh approximately 9 kg (Fig. 1 of IS : 2720 Part 29) None
`,
    price: "₹2200",
    mrp: "₹2500",
    savings: "12.00% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Core Cutter Rammer",
    images: ["/upload/products/core-cutter-rammer/1.jpg"],
    inTheBox: [
      "1× Core Cutter Rammer",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Heavy-duty mild steel foot",
        body: "The rammer features a solid mild steel foot of 140 mm diameter and 75 mm height, designed for stable and consistent compaction action.",
      },
      {
        title: "Concentrically fitted staff",
        body: "A 25 mm diameter solid mild steel staff is screwed concentrically to the foot, providing a strong and reliable handle assembly.",
      },
      {
        title: "Approximate overall length",
        body: "The complete rammer, including the foot and staff, is approximately 900 mm long for convenient handling during field or lab use.",
      },
      {
        title: "Comfortable working weight",
        body: "The rammer assembly weighs approximately 9 kg, making it substantial enough for effective compaction while remaining manageable to operate.",
      },
      {
        title: "Suitable for standard soil testing",
        body: "The construction and dimensions conform closely to the requirements outlined in IS 2720 Part 29 for core cutter rammer use.",
      },
    ],

    specs: [
      { label: "Material", value: "Solid mild steel foot and staff" },
      { label: "Foot diameter", value: "140 mm" },
      { label: "Foot height", value: "75 mm" },
      { label: "Staff diameter", value: "25 mm" },
      { label: "Overall length", value: "Approximately 900 mm" },
      { label: "Approximate weight", value: "9 kg" },
      { label: "Standard reference", value: "IS : 2720 Part 29" },
      {
        label: "Application",
        value: "Core cutter and soil compaction testing",
      },
    ],

    brochure: {
      label: "CORE CUTTER RAMMER  Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // soil-hydrometer

  "soil-hydrometer": {
    slug: "soil-hydrometer",
    title: "Soil Hydrometer",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Clay, silt, fine aggregates and other material where absolute density has little variations among sample particles.",
    description: `
Clay, silt, fine aggregates and other material where absolute density has little variations among sample particles.
`,
    price: "₹850",
    mrp: "₹1000",
    savings: "15.00% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Soil Hydrometer",
    images: ["/upload/products/soil-hydrometer/1.jpg"],
    inTheBox: [
      "1× Soil Hydrometer",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Designed for fine-grained soil analysis",
        body: "The hydrometer is ideal for evaluating clay, silt, and fine aggregate materials where particle density variations are small.",
      },
      {
        title: "Supports sedimentation-based testing",
        body: "It helps determine the relative distribution of soil particles by observing settling behavior in a suspension.",
      },
      {
        title: "Useful for particle size interpretation",
        body: "The readings assist engineers and lab technicians in understanding soil gradation and classification.",
      },
      {
        title: "Reliable for laboratory use",
        body: "Its simple operation and consistent measurement make it a dependable tool for routine soil testing work.",
      },
      {
        title: "Helpful for soil characterization",
        body: "The instrument supports preliminary assessment of fine-grained material behavior in geotechnical studies.",
      },
    ],

    specs: [
      { label: "Application", value: "Soil hydrometer testing" },
      { label: "Suitable materials", value: "Clay, silt, and fine aggregates" },
      {
        label: "Key condition",
        value: "Low variation in absolute density among particles",
      },
      {
        label: "Testing principle",
        value: "Sedimentation and particle settling",
      },
      {
        label: "Use case",
        value: "Soil classification and particle size analysis",
      },
      {
        label: "Typical environment",
        value: "Laboratory and geotechnical testing",
      },
    ],

    brochure: {
      label: "Soil Hydrometer Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // grain-size-analysis-apparatus-pipette-method-as-per-is2720-part-iv

  "grain-size-analysis-apparatus-pipette-method-as-per-is2720-part-iv": {
    slug: "grain-size-analysis-apparatus-pipette-method-as-per-is2720-part-iv",
    title:
      "GRAIN SIZE ANALYSIS APPARATUS PIPETTE METHOD - AS PER IS2720 PART-IV",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "The Apparatus consists of a sliding panel which moves up and down by means of a screw allowing Anderson Pipette fixed to it to be raised or lowered vertically. A sedimentation tube is held by a laboratory clamp provided on the stand below the pipette. The depth of immersion is measured by a scale graduate in mm. at the side of the sliding panel. Supplied complete with Anderson Pipette 10ml. at the side capacity made from glass, and a sedimentation tube also of glass of 500ml capacity. Additional accessories required to perform the test can be supplied at extra cost : Weighing Bottle, Electronic Balance of 0.001 gm sensitivity, Constant temp. bath, Stirring apparatus, Test sieves and Laboratory Oven.",
    description: `
The Apparatus consists of a sliding panel which moves up and down by means of a screw allowing Anderson Pipette fixed to it to be raised or lowered vertically. A sedimentation tube is held by a laboratory clamp provided on the stand below the pipette. The depth of immersion is measured by a scale graduate in mm. at the side of the sliding panel. Supplied complete with Anderson Pipette 10ml. at the side capacity made from glass, and a sedimentation tube also of glass of 500ml capacity. 

Additional accessories required to perform the test can be supplied at extra cost : Weighing Bottle, Electronic Balance of 0.001 gm sensitivity, Constant temp. bath, Stirring apparatus, Test sieves and Laboratory Oven.
`,
    price: "₹14000",
    mrp: "₹15000",
    savings: "6.67% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Grain Size Analysis Apparatus (Pipette Method) as per IS 2720 Part IV",
    images: [
      "/upload/products/grain-size-analysis-apparatus-pipette-method-as-per-is2720-part-iv/1.png",
    ],
    inTheBox: [
      "1× Grain Size Analysis Apparatus (Pipette Method) as per IS 2720 Part IV",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Vertical positioning with screw control",
        body: "A sliding panel moves up and down by a screw, allowing the Anderson pipette to be raised or lowered precisely during testing.",
      },
      {
        title: "Stable sedimentation tube support",
        body: "The sedimentation tube is held securely by a laboratory clamp on the stand below the pipette for accurate sample handling.",
      },
      {
        title: "Immersion depth readout",
        body: "A scale graduated in millimeters along the sliding panel helps measure the exact depth of immersion during the test.",
      },
      {
        title: "Includes glass pipette and tube",
        body: "The apparatus comes complete with a 10 ml glass Anderson pipette and a 500 ml glass sedimentation tube.",
      },
      {
        title: "Supports complete lab workflow",
        body: "Optional accessories such as weighing bottles, balance, constant temperature bath, stirring apparatus, test sieves, and laboratory oven can be added for full test preparation.",
      },
    ],

    specs: [
      {
        label: "Apparatus type",
        value: "Grain size analysis apparatus (pipette method)",
      },
      { label: "Positioning system", value: "Sliding panel operated by screw" },
      { label: "Pipette included", value: "Anderson pipette, 10 ml, glass" },
      { label: "Sedimentation tube", value: "500 ml glass tube" },
      { label: "Immersion measurement", value: "Scale graduated in mm" },
      {
        label: "Stand support",
        value: "Laboratory clamp for sedimentation tube",
      },
      {
        label: "Optional accessories",
        value:
          "Weighing bottle, electronic balance, constant temp bath, stirring apparatus, test sieves, laboratory oven",
      },
    ],

    brochure: {
      label:
        "Grain Size Analysis Apparatus (Pipette Method) as per IS 2720 Part IV Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // bishop-pore-pressure-apapratus-10kgcm2

  "bishop-pore-pressure-apapratus-10kgcm2": {
    slug: "bishop-pore-pressure-apapratus-10kgcm2",
    title: "BISHOP PORE PRESSURE APPARATUS 10 KG/CM2",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "MANOMETER: Glass U-tube manometer for measuring low positive pore pressures negative pore pressures and checking zero error of pressure gauge. It is provided with a mercury trap (Mercury supplied at extra cost ) Null indicator made out of clear transparent Perspex with mercury trap and cursor to indicate the mercury level. BURETTE: 50 ml Burette for measuring the volume change in the soil specimen. Pressure pump fitted with four sleeve packed valve, Operated by means of a hand wheel on the end of the piston rod which is threaded thru the pump cap and gives a smooth, fine adjustment of pressure copper coil and water reservoir. The unit is tested against leaks up to 10Kg/cm²",
    description: `
MANOMETER: Glass U-tube manometer for measuring low positive pore pressures negative pore pressures and checking zero error of pressure gauge. It is provided with a mercury trap (Mercury supplied at extra cost ) Null indicator made out of clear transparent Perspex with mercury trap and cursor to indicate the mercury level.

BURETTE: 50 ml Burette for measuring the volume change in the soil specimen. Pressure pump fitted with four sleeve packed valve, Operated by means of a hand wheel on the end of the piston rod which is threaded thru the pump cap and gives a smooth, fine adjustment of pressure copper coil and water reservoir. The unit is tested against leaks up to 10Kg/cm²
`,
    price: "₹22000",
    mrp: "₹24000",
    savings: "8.33% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Bishop Pore Pressure Apparatus 10 KG/CM2",
    images: ["/upload/products/bishop-pore-pressure-apapratus-10kgcm2/1.jpg"],
    inTheBox: [
      "1× Bishop Pore Pressure Apparatus 10 KG/CM2",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Precision manometer for pore pressure measurement",
        body: "The glass U-tube manometer is used to measure low positive and negative pore pressures and to check the zero error of the pressure gauge.",
      },
      {
        title: "Mercury-trap design",
        body: "A mercury trap is provided in the assembly, allowing reliable indication of the mercury level for pressure observation.",
      },
      {
        title: "Clear null indicator",
        body: "The transparent Perspex null indicator with cursor makes it easier to view the mercury level accurately during tests.",
      },
      {
        title: "50 ml burette for volume change measurement",
        body: "The included 50 ml burette helps measure the volume change in the soil specimen with precision.",
      },
      {
        title: "Fine pressure adjustment",
        body: "The pressure pump is fitted with a four-sleeve packed valve and hand-wheel-operated piston rod for smooth, accurate pressure control.",
      },
    ],

    specs: [
      { label: "Manometer type", value: "Glass U-tube manometer" },
      {
        label: "Measurement range",
        value: "Low positive and negative pore pressures",
      },
      {
        label: "Additional feature",
        value: "Mercury trap and Perspex null indicator with cursor",
      },
      { label: "Burette capacity", value: "50 ml" },
      { label: "Pressure pump", value: "Four sleeve packed valve" },
      {
        label: "Adjustment",
        value: "Hand wheel operated piston rod for fine pressure control",
      },
      { label: "Reservoir", value: "Copper coil and water reservoir" },
      { label: "Leak test", value: "Tested against leaks up to 10 kg/cm²" },
    ],

    brochure: {
      label: "bishop-pore-pressure-apapratus-10kgcm2 Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // fine-sieve-set-20cm-dia-set

  "fine-sieve-set-20cm-dia-set": {
    slug: "fine-sieve-set-20cm-dia-set",
    title: "FINE SIEVE SET - 20CM DIA - SET",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Seamless Brass frame, set consist of 8 sieves - 10 mm, 4.75 mm, 2.36 mm, 1.18 mm, 600 micron, 300 micron, 150 micron, 75 micron and a set of Lid‑Pan. None",
    description: `
Seamless Brass frame, set consist of 8 sieves - 10 mm, 4.75 mm, 2.36 mm, 1.18 mm, 600 micron, 300 micron, 150 micron, 75 micron and a set of Lid‑Pan. None
`,
    price: "₹550",
    mrp: "₹600",
    savings: "8.33% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Fine Sieve Set - 20CM DIA - SET",
    images: ["/upload/products/fine-sieve-set-20cm-dia-set/1.jpg"],
    inTheBox: [
      "1× Fine Sieve Set - 20CM DIA - SET",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Durable seamless brass frame",
        body: "The sieve set is built with a seamless brass frame for strength, stability, and repeated laboratory use.",
      },
      {
        title: "Complete set of eight sieves",
        body: "The set includes eight sieves sized 10 mm, 4.75 mm, 2.36 mm, 1.18 mm, 600 micron, 300 micron, 150 micron, and 75 micron.",
      },
      {
        title: "Convenient lid and pan arrangement",
        body: "A matching lid and pan set helps contain the sample securely during sieving and transfer.",
      },
      {
        title: "Ideal for fine particle analysis",
        body: "The selection of sieve sizes makes it suitable for separating and grading finer soil and aggregate particles.",
      },
      {
        title: "Practical for soil testing labs",
        body: "The set supports routine gradation studies and particle-size classification in geotechnical and material testing work.",
      },
    ],

    specs: [
      { label: "Frame material", value: "Seamless brass" },
      { label: "Sieve count", value: "8 sieves" },
      {
        label: "Sieve sizes",
        value:
          "10 mm, 4.75 mm, 2.36 mm, 1.18 mm, 600 micron, 300 micron, 150 micron, 75 micron",
      },
      { label: "Accessories", value: "Lid and pan set" },
      {
        label: "Application",
        value: "Soil and aggregate particle size analysis",
      },
      { label: "Use case", value: "Laboratory grading and sieve analysis" },
    ],

    brochure: {
      label: "fine-sieve-set-20cm-dia-set Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // sample-extractor-for-100-and-150mm-dia-specimen

  "sample-extractor-for-100-and-150mm-dia-specimen": {
    slug: "sample-extractor-for-100-and-150mm-dia-specimen",
    title: "SAMPLE EXTRACTOR - FOR 100 AND 150MM DIA SPECIMEN",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Base plate of size 300mm x 300mm with a 152.4 mm dia hole at  centre. Base plate shall have four legs of 25mm dia and 275 mm height. Top plate with a screw hole of 25 mm dia at centre. Two side rods of 25mm dia and 500 mm long. A screw rod of 25mm dia and 650 mm long. Handle of 25mm dia and 300mm long. 99 mm dia. plunger attached at the bottom of a screw rod. Wight : 45 Kg Approx.",
    description: `
Base plate of size 300mm x 300mm with a 152.4 mm dia hole at  centre. Base plate shall have four legs of 25mm dia and 275 mm height. Top plate with a screw hole of 25 mm dia at centre. Two side rods of 25mm dia and 500 mm long. A screw rod of 25mm dia and 650 mm long. Handle of 25mm dia and 300mm long. 99 mm dia. plunger attached at the bottom of a screw rod. Wight : 45 Kg Approx.
`,
    price: "₹11000",
    mrp: "₹12000",
    savings: "8.33% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Sample Extractor - FOR 100 AND 150MM DIA SPECIMEN",
    images: [
      "/upload/products/sample-extractor-for-100-and-150mm-dia-specimen/1.jpg",
    ],
    inTheBox: [
      "1× SAMPLE EXTRACTOR - FOR 100 AND 150MM DIA SPECIMEN",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Sturdy base frame for specimen extraction",
        body: "The extractor is built around a 300 mm × 300 mm base plate with a central 152.4 mm diameter hole, offering a stable support platform for specimen handling.",
      },
      {
        title: "Reliable vertical support legs",
        body: "The base plate is fitted with four 25 mm diameter legs, each 275 mm high, to provide solid elevation and balance during operation.",
      },
      {
        title: "Central screw mechanism",
        body: "A top plate with a 25 mm diameter screw hole supports the central screw arrangement used to apply controlled extraction force.",
      },
      {
        title: "Long guide and drive rods",
        body: "Two side rods of 25 mm diameter and 500 mm length, along with a screw rod of 25 mm diameter and 650 mm length, help guide the movement smoothly.",
      },
      {
        title: "Heavy-duty plunger assembly",
        body: "A 99 mm diameter plunger attached at the bottom of the screw rod, together with a 300 mm long handle, makes the unit suitable for strong specimen extraction work.",
      },
    ],

    specs: [
      { label: "Base plate size", value: "300 mm × 300 mm" },
      { label: "Base plate hole", value: "152.4 mm diameter" },
      { label: "Legs", value: "4 legs, 25 mm diameter, 275 mm height" },
      { label: "Top plate", value: "25 mm diameter screw hole at centre" },
      { label: "Side rods", value: "2 rods, 25 mm diameter, 500 mm length" },
      { label: "Screw rod", value: "25 mm diameter, 650 mm length" },
      { label: "Handle", value: "25 mm diameter, 300 mm length" },
      {
        label: "Plunger",
        value: "99 mm diameter, fitted at bottom of screw rod",
      },
      { label: "Approximate weight", value: "45 kg" },
    ],

    brochure: {
      label:
        "sample-extractor-for-100-and-150mm-dia-specimen Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // sand-equivalent-value-test-apparatus-with-accessories

  "sand-equivalent-value-test-apparatus-with-accessories": {
    slug: "sand-equivalent-value-test-apparatus-with-accessories",
    title: "SAND EQUIVALENT VALUE TEST APPARATUS WITH ACCESSORIES",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline: "SAND EQUIVALENT VALUE TEST APPARATUS WITH ACCESSORIES",
    description: `
SAND EQUIVALENT VALUE TEST APPARATUS WITH ACCESSORIES
`,
    price: "₹12000",
    mrp: "₹13000",
    savings: "7.69% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Sand Equivalent Value Test Apparatus with Accessories",
    images: [
      "/upload/products/sand-equivalent-value-test-apparatus-with-accessories/1.jpg",
    ],
    inTheBox: [
      "1× SAND EQUIVALENT VALUE TEST APPARATUS WITH ACCESSORIES",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Complete sand equivalent testing kit",
        body: "Includes the apparatus and all essential accessories for performing sand equivalent value tests accurately.",
      },
      {
        title: "Consistent sample preparation",
        body: "The kit supports reliable sample mixing, filling, and handling to reduce variability in test results.",
      },
      {
        title: "Clear measurement workflow",
        body: "Designed for easy reading of sand equivalent values, helping technicians interpret soil cleanliness quickly.",
      },
      {
        title: "Lab-grade construction",
        body: "Built for repeated use in geotechnical labs with components that hold up during routine testing.",
      },
      {
        title: "Accessory-ready setup",
        body: "Supplied with accessories to complete the test procedure without needing separate component purchases.",
      },
    ],

    specs: [
      { label: "Product type", value: "Sand equivalent value test apparatus" },
      { label: "Includes", value: "Apparatus with accessories" },
      { label: "Application", value: "Assess soil and aggregate cleanliness" },
      { label: "Testing standard", value: "Sand equivalent test" },
      {
        label: "Use case",
        value: "Geotechnical and construction material labs",
      },
      { label: "Suitability", value: "Lab sand equivalent analysis" },
    ],

    brochure: {
      label:
        "sand-equivalent-value-test-apparatus-with-accessories Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // swell-pressure-test-apparatus-wo-proving-ring-and-dial-gauge

  "swell-pressure-test-apparatus-wo-proving-ring-and-dial-gauge": {
    slug: "swell-pressure-test-apparatus-wo-proving-ring-and-dial-gauge",
    title: "SWELL PRESSURE TEST APPARATUS WITHOUT PROVING RING AND DIAL GAUGE",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "One loading unit hand operated 5000 kg capacity with two rates of travel One Gun metal mould, 100mm dia x 127.3 cm height X 1000 cc volume with base plate & collar One perforated swell plate 100mm dia X 16mm thick One spacer 100mm dia X 12.7mm thick Two porous stone of 100mm dia X 12.7mm thick One load transfer bar One steel ball & one soaking tank, 250mm dia x 210mm high Dial gauge 0.01mm X 25mm travel (Extra cost) Proving ring of 2.5 KN capacity with calibration chart and carrying case. (Extra cost) Weight: 80 kg Approx.",
    description: `
One loading unit hand operated 5000 kg capacity with two rates of travel One Gun metal mould, 100mm dia x 127.3 cm height X 1000 cc volume with base plate & collar One perforated swell plate 100mm dia X 16mm thick One spacer 100mm dia X 12.7mm thick Two porous stone of 100mm dia X 12.7mm thick One load transfer bar One steel ball & one soaking tank, 250mm dia x 210mm high Dial gauge 0.01mm X 25mm travel (Extra cost) Proving ring of 2.5 KN capacity with calibration chart and carrying case. (Extra cost) Weight : 80 kg Approx. 
`,
    price: "₹48000",
    mrp: "₹49000",
    savings: "2.04% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Swell Pressure Test Apparatus without Proving Ring and Dial Gauge",
    images: [
      "/upload/products/swell-pressure-test-apparatus-wo-proving-ring-and-dial-gauge/1.jpg",
    ],
    inTheBox: [
      "1× SWELL PRESSURE TEST APPARATUS WITHOUT PROVING RING AND DIAL GAUGE",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Heavy-duty hand-operated loading unit",
        body: "The loading unit supports 5000 kg capacity and offers two travel rates for controlled swell pressure testing.",
      },
      {
        title: "Precision gun-metal mould",
        body: "Includes a 100 mm diameter × 127.3 mm height gun-metal mould with 1000 cc volume, base plate, and collar for consistent sample confinement.",
      },
      {
        title: "Swell assembly with plates and spacers",
        body: "The unit includes a perforated swell plate, spacer, and two porous stones, each sized 100 mm diameter with 12.7 mm thickness.",
      },
      {
        title: "Complete pressure transfer accessories",
        body: "A load transfer bar, steel ball, and soaking tank are supplied to support accurate swelling pressure measurement.",
      },
      {
        title: "Optional precision instruments",
        body: "A 0.01 mm × 25 mm travel dial gauge and a 2.5 kN proving ring with calibration chart are available at extra cost.",
      },
    ],

    specs: [
      { label: "Loading unit capacity", value: "5000 kg (hand operated)" },
      { label: "Travel options", value: "Two rates of travel" },
      { label: "Mould", value: "100 mm dia × 127.3 mm height, 1000 cc volume" },
      { label: "Swell plate", value: "100 mm dia × 16 mm thick" },
      { label: "Spacer", value: "100 mm dia × 12.7 mm thick" },
      { label: "Porous stones", value: "2 × 100 mm dia × 12.7 mm thick" },
      {
        label: "Accessories",
        value: "Load transfer bar, steel ball, soaking tank",
      },
      { label: "Soaking tank", value: "250 mm dia × 210 mm high" },
      {
        label: "Optional extras",
        value: "Dial gauge 0.01 mm × 25 mm travel, 2.5 kN proving ring",
      },
      { label: "Approximate weight", value: "80 kg" },
    ],

    brochure: {
      label:
        "SWELL PRESSURE TEST APPARATUS WITHOUT PROVING RING AND DIAL GAUGE Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // soil-permeability-apparatus-for-constant-and-variable-head-test

  "soil-permeability-apparatus-for-constant-and-variable-head-test": {
    slug: "soil-permeability-apparatus-for-constant-and-variable-head-test",
    title: "SOIL PERMEABILITY APPARATUS FOR CONSTANT AND VARIABLE HEAD TEST",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "The apparatus shall be confirming to IS: 2720 (Part-XVII), IS 9198 & IS: 11209 latest edition and shall consists of following.",
    description: `
The apparatus shall be confirming to IS: 2720 (Part-XVII), IS 9198 & IS: 11209 latest edition and shall consists of following.
`,
    price: "₹18000",
    mrp: "₹20000",
    savings: "10.00% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Soil Permeability Apparatus for Constant and Variable Head Test",
    images: [
      "/upload/products/soil-permeability-apparatus-for-constant-and-variable-head-test/1.jpg",
    ],
    inTheBox: [
      "1× SOIL PERMEABILITY APPARATUS FOR CONSTANT AND VARIABLE HEAD TEST",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Standards-compliant permeability testing",
        body: "Designed to meet the latest editions of IS: 2720 (Part-XVII), IS 9198, and IS: 11209 for reliable soil permeability measurement.",
      },
      {
        title: "Dual head test capability",
        body: "Supports both constant head and variable head testing, enabling versatile permeability analysis across different soil types.",
      },
      {
        title: "Laboratory-ready construction",
        body: "Built with durable components and a stable assembly for consistent, repeatable laboratory performance.",
      },
      {
        title: "Comprehensive accessory support",
        body: "Includes the necessary accessories and fittings to set up and conduct permeability tests with minimal additional requirements.",
      },
      {
        title: "Reliable hydraulic measurement",
        body: "The system is engineered to maintain steady flow paths and accurate sample confinement for precise hydraulic conductivity values.",
      },
    ],

    specs: [
      {
        label: "Compliance",
        value: "IS: 2720 (Part-XVII), IS 9198, IS: 11209",
      },
      {
        label: "Test modes",
        value: "Constant head and variable head permeability",
      },
      {
        label: "Application",
        value: "Soil permeability and hydraulic conductivity testing",
      },
      {
        label: "Lab suitability",
        value: "Geotechnical and materials testing labs",
      },
      { label: "Design focus", value: "Repeatable flow measurement" },
      {
        label: "Use case",
        value: "Filtration, drainage, and seepage evaluation",
      },
    ],

    brochure: {
      label:
        "SOIL PERMEABILITY APPARATUS FOR CONSTANT AND VARIABLE HEAD TEST Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // /unconfined-compression-tester

  "unconfined-compression-tester": {
    slug: "unconfined-compression-tester",
    title: "UNCONFINED COMPRESSION TESTER",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Supplied complete with 3 speed Load Frame, 2.5 KN or 2 KN Proving ring fitted with dial gauge with Calibration certificate, Dial Gauge of 0.01 X 25 mm travel, Coning tools for 38 mm dia specimen and one split mould for 38 mm dia specimen. Coning tools and split mould for 50 mm, 75 mm and 100 mm dia available at extra cost. NABL Calibration of Proving ring and dial gauge at extra cost.",
    description: `
Supplied complete with 3 speed Load Frame, 2.5 KN or 2 KN Proving ring fitted with dial gauge with Calibration certificate, Dial Gauge of 0.01 X 25 mm travel, Coning tools for 38 mm dia specimen and one split mould for 38 mm dia specimen. Coning tools and split mould for 50 mm, 75 mm and 100 mm dia available at extra cost. NABL Calibration of Proving ring and dial gauge at extra cost.
`,
    price: "₹45000",
    mrp: "₹46000",
    savings: "2.17% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Unconfined Compression Tester",
    images: ["/upload/products/unconfined-compression-tester/1.jpg"],
    inTheBox: [
      "1× UNCONFINED COMPRESSION TESTER",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "3-speed load frame included",
        body: "Includes a three-speed load frame for controlled application of unconfined compression loads.",
      },
      {
        title: "Calibrated proving ring assembly",
        body: "Supplied with a 2.5 kN or 2 kN proving ring fitted with a dial gauge and calibration certificate for precise force measurement.",
      },
      {
        title: "High-precision dial gauge",
        body: "A 0.01 mm × 25 mm travel dial gauge delivers accurate displacement readings during each test.",
      },
      {
        title: "38 mm specimen tooling supplied",
        body: "The set includes coning tools and a split mould for 38 mm diameter specimens ready for immediate use.",
      },
      {
        title: "Optional larger specimen kits",
        body: "Coning tools and split moulds for 50 mm, 75 mm, and 100 mm diameters are available at extra cost.",
      },
      {
        title: "NABL calibration available",
        body: "NABL calibration for the proving ring and dial gauge is offered separately to ensure traceable measurement accuracy.",
      },
    ],

    specs: [
      { label: "Load frame", value: "3-speed hand operated" },
      { label: "Proving ring capacity", value: "2.5 kN or 2 kN" },
      { label: "Dial gauge", value: "0.01 mm × 25 mm travel" },
      { label: "Included specimen size", value: "38 mm dia" },
      { label: "Optional specimen sizes", value: "50 mm, 75 mm, 100 mm dia" },
      { label: "Calibration option", value: "NABL calibration available" },
      {
        label: "Application",
        value: "Unconfined compression testing of soils",
      },
    ],

    brochure: {
      label: "unconfined-compression-tester Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },


   // /unconfined-compression-tester

  "compression-testing-machine": {
    slug: "compression-testing-machine",
    title: "COMPRESSION TESTING MACHINE",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Low cost Model for basic test. The loading unit consists of a four pillar type load frame with adjustable screw to adjust the height of the platen as per the sample size. Resolution 0.1 KN. Manual Pace rate control and Manual release of pressure. Reading in KN with peak hold and reset facility. Auto Calculation of strength. Rate of loading displayed on bar graph. Manual Pace rate Control will have certain limitations.",
    description: `
The Compression Testing Machine is a versatile laboratory instrument engineered for accurate unconfined compression testing of soil specimens. Built with a robust four-pillar load frame construction, it provides stable and repeatable loading conditions. The system includes a precision-calibrated 2.5 kN or 2 kN proving ring with certified accuracy, complemented by a high-resolution dial gauge for displacement measurement. The 3-speed loading mechanism allows controlled strain application, making it suitable for various soil types and testing conditions. Complete kit includes tooling for 38 mm diameter specimens, with expandable options available for larger samples up to 100 mm diameter.
`,

about: `

# Choosing the Ideal Compression Testing Machine for Precise Material Strength Evaluation

When you’re looking into laboratory testing equipment, buyers tend to compare the quality, precision, endurance, and price of **compression testing machine price** before they commit. And honestly, whether you run a construction lab, a research institute, a quality control facility, or even a school or training organization, picking the right compression testing equipment matters because it helps with dependable strength evaluation for concrete , cement , bricks , blocks , pavers, and other construction materials too, in a way that is practical and less stubborn about accuracy .

If you understand what affects **compression testing machine price**, then your business can select gear that offers lasting value not just what you pay at the start.

# Compression Testing Machines: A Key to Reliable Quality Control

Compression testing machines are build to measure how strong different materials are when they are squeezed, under controlled loading conditions. These machines are crucial, for making sure construction materials actually meet national international quality standards too, because otherwise its not really reliable.

Modern testing equipment offers:

- High-precision load measurement
- Digital data recording
- Stable hydraulic performance
- User-friendly operation
- Consistent and repeatable test results
- Long operational lifespan with minimal maintenance

For laboratories seeking dependable performance, evaluating **compression testing machine price** along with technical specifications provides a more informed purchasing decision.

# Factors That Influence Compression Testing Machine Price

Different models are designed for different testing capacities and applications. The overall **compression testing machine price** depends on several technical and operational factors.

| **Feature**            | **Why It Matters**                                           |
| ---------------------- | ------------------------------------------------------------ |
| Load Capacity          | Suitable for different material strengths and specimen sizes |
| Digital Control System | Improves testing accuracy and reporting                      |
| Hydraulic Performance  | Ensures smooth and stable loading                            |
| Automation Level       | Reduces operator effort and increases efficiency             |
| Build Quality          | Enhances durability and long-term reliability                |

Instead of selecting equipment based solely on cost, laboratories should compare performance, precision, and future maintenance requirements.

# Applications Across Multiple Industries

Compression testing machines are widely used in:

- Civil engineering laboratories
- Construction companies
- Infrastructure development projects
- Cement manufacturing plants
- Concrete batching plants
- Educational institutions
- Government testing laboratories
- Research and material testing centers

These industries depend on precise compression testing to keep product quality solid, boost structural safety, and also meet regulatory needs or rules. It’s like the basis of things, not just for the paperwork.

# Choosing the Right Compression Testing Machine for Accurate and Reliable Material Testing

Before comparing **compression testing machine price**, consider the following:

- Required testing capacity
- Types of materials to be tested
- Accuracy and calibration standards
- Digital reporting capabilities
- Ease of maintenance
- Availability of technical support
- Future expansion requirements

Choosing equipment based on both performance and operational efficiency helps maximize return on investment while ensuring dependable testing for years.

# Why Quality Equipment Delivers Better Value

A pretty reliable compression testing machine really helps cut testing errors, in a way that feels steadier, it also speeds up the whole workflow, and it tends to reduce downtime too. At the same time it keeps quality control more even, you know. And when you’re looking at a compression testing machine price, don’t only stare at the upfront buying number. Instead, think about the bigger lifecycle value, like how it performs technically in routine use, how durable it is day-to-day, whether service support is actually accessible, and of course the testing accuracy. The best unit usually turns into a long term asset that supports lab efficiency and also helps strengthen customer trust— not just right then, but across those repeated rounds.

`,
faq: [
  {
    question: "What affects compression testing machine price?",
    answer:
      "The cost depends on testing capacity, the automation level, those digital features too, the hydraulic system’s quality, build materials and calibration standards, along with any extra accessories that come with it.",
  },
  {
    question: "How does a compression testing machine test different materials?",
    answer:
      "Compression testing machines are very often used for checking concrete cubes, cement samples, bricks, blocks, paving stones, and other related construction stuff. In practice, people run these tests to see how these materials behave under pressure, and it can include quite a range—like blocks and bricks, you know, sometimes even paving stones.",
  },
  {
    question: "What Makes Digital Compression Testing Equipment a Preferred Choice?",
    answer:
      "Digital systems tend to give you better measurement accuracy; they also make data recording automated and painless, while reporting becomes easier, plus testing stays more consistent.",
  },
  {
    question: "How do I choose the correct compression testing machine?",
    answer:
      "Pick a machine according to what you can test at, your industry norms, the types of materials you’ll deal with, the lab’s daily volume and also what comes next for future verification needs, ideally a bit more capacity than you think you need.",
  },
  {
    question: "Is buying a high-quality compression testing machine a good long-term investment?",
    answer:
      "Yes, high-quality gear usually brings better precision, a longer usable lifespan and reduced upkeep costs, plus a steadier performance . It’s like when everything works more harmoniously, without as much fuss later on . In that sense it can be more cost effective in the long run, even if the starting price feels a bit higher.",
  },
  {
    question: "Does compression testing machine price include installation and calibration?",
    answer:
      "It kind of really depends on who actually made it, and well on who is selling it too, I guess. Some packages include the fit-out, the first calibration, operator training, and warranty support all together, but others charge you separately for each one. So, best to confirm what’s actually in there before you decide to buy.",
  },
  {
    question: "What is the ideal calibration frequency for a compression testing machine?",
    answer:
      "For accurate, and reliable test results, compression testing machines should be calibrated periodically, as recommended by the manufacturer or based on applicable industry standards. When calibration happens regularly it keeps measurement accuracy intact and also ensures compliance with the quality requirements, sort of, you could say it’s a steady control measure.",
  },
  {
    question: "Is It Possible to Customize a Compression Testing Machine for Different Testing Requirements?",
    answer:
      "Yeah, quite a few manufacturers provide customization based on their testing capacity, the specimen size they can handle, plus some software features that can matter, like digital reporting and the level of automation required. Picking the proper configuration lets a lab cover those specific testing applications, but also it usually improves day to day operational efficiency.",
  },
],
    price: "₹18,5000",
    mrp: "₹19,5000",
    savings: "5.13% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Compression Testing Machine",
    images: ["/upload/products/compression-testing-machine/1.png"],
    inTheBox: [
      "1× COMPRESSION TESTING MACHINE",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Precision proving ring system",
        body: "Certified 2.5 kN or 2 kN proving ring ensures accurate force measurement with calibration certificate included for compliance and reliability.",
      },
      {
        title: "3-speed variable loading control",
        body: "Manual operation with three distinct loading speeds provides flexibility to accommodate different soil behavior and testing requirements.",
      },
      {
        title: "High-resolution displacement measurement",
        body: "0.01 mm precision dial gauge with 25 mm travel range enables detailed recording of specimen deformation throughout the test cycle.",
      },
      {
        title: "Robust four-pillar frame design",
        body: "Heavy-duty load frame construction with vertical adjustable platens ensures uniform loading distribution and minimizes lateral deflection.",
      },
      {
        title: "Comprehensive specimen tooling included",
        body: "Supplied with complete tooling kit for 38 mm diameter specimens including coning tools and split mould for immediate testing.",
      },
      {
        title: "Expandable specimen size options",
        body: "Modular design allows upgrades to test 50 mm, 75 mm, and 100 mm diameter specimens with separately available accessory kits.",
      },
    ],

    specs: [
      { label: "Frame Type", value: "Four-pillar rigid steel construction" },
      { label: "Loading Speeds", value: "3-speed manual hand-operated system" },
      { label: "Proving Ring Capacity", value: "2.5 kN or 2 kN (selectable)" },
      { label: "Force Resolution", value: "0.1 kN minimum" },
      { label: "Dial Gauge Precision", value: "0.01 mm accuracy" },
      { label: "Gauge Travel Range", value: "25 mm" },
      { label: "Standard Specimen Size", value: "38 mm diameter" },
      { label: "Optional Specimen Sizes", value: "50 mm, 75 mm, 100 mm diameter" },
      { label: "Included Accessories", value: "Coning tools, split mould, dial gauge holder" },
      { label: "Calibration", value: "Factory calibrated; NABL calibration available separately" },
      {
        label: "Application",
        value: "Unconfined compression testing of cohesive soils",
      },
    ],

    brochure: {
      label: "unconfined-compression-tester Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // relative-density-apparatus-relative-density-apparatus

  "relative-density-apparatus-relative-density-apparatus": {
    slug: "relative-density-apparatus-relative-density-apparatus",
    title: "RELATIVE DENSITY APPARATUS RELATIVE DENSITY APPARATUS",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "The equipment comprises a motorized vibratory table of size 75 mm x 75 mm, which operates on 440 Volts, Three phase, A.C. Supply. Also, consists of a cylindrical mould 3000 cm3 and 15000 cm3, guide sleeve with clamp for moulds, surcharge base plate, surcharge weight for 3000 and 15000 cm3, handle for base plate, dial gauge holder, dial gauge 0.01 mm x 50 mm travel with extension piece calibration bar 75 x 300 x 3 mm",
    description: `
The equipment comprises a motorized vibratory table of size 75 mm x 75 mm, which operates on 440 Volts, Three phase, A.C. Supply. Also, consists of a cylindrical mould 3000 cm3 and 15000 cm3, guide sleeve with clamp for moulds, surcharge base plate, surcharge weight for 3000 and 15000 cm3, handle for base plate, dial gauge holder, dial gauge 0.01 mm x 50 mm travel with extension piece calibration bar 75 x 300 x 3 mm
`,
    price: "₹89000",
    mrp: "₹90000",
    savings: "1.11% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "RELATIVE DENSITY APPARATUS RELATIVE DENSITY APPARATUS",
    images: [
      "/upload/products/relative-density-apparatus-relative-density-apparatus/1.jpg",
    ],
    inTheBox: [
      "1× RELATIVE DENSITY APPARATUS RELATIVE DENSITY APPARATUS",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Motorized vibratory table",
        body: "Built around a 75 mm × 75 mm motorized vibratory table powered by 440 V three-phase AC supply.",
      },
      {
        title: "Dual mould capacities",
        body: "Includes precision cylindrical moulds for both 3000 cm³ and 15000 cm³ sample volumes.",
      },
      {
        title: "Guide sleeve with clamp",
        body: "A guide sleeve and clamping system keeps moulds aligned and stable during compaction cycles.",
      },
      {
        title: "Complete surcharge assembly",
        body: "Supplied with surcharge base plate, surcharge weights for 3000 cm³ and 15000 cm³ moulds, plus a handle for easy positioning.",
      },
      {
        title: "Precision dial gauge system",
        body: "Includes a dial gauge holder, 0.01 mm × 50 mm travel gauge, extension piece, and calibration bar for accurate measurement.",
      },
    ],

    specs: [
      { label: "Vibratory table size", value: "75 mm × 75 mm" },
      { label: "Power supply", value: "440 V, Three-phase AC" },
      { label: "Mould volumes", value: "3000 cm³ and 15000 cm³" },
      { label: "Guide sleeve", value: "Included with clamp" },
      { label: "Surcharge kit", value: "Base plate, weights, and handle" },
      {
        label: "Dial gauge",
        value: "0.01 mm × 50 mm travel with extension piece",
      },
      { label: "Calibration bar", value: "75 × 300 × 3 mm" },
    ],

    brochure: {
      label:
        "RELATIVE DENSITY APPARATUS RELATIVE DENSITY APPARATUS Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // laboratory-vane-shear-apparatuss

  "laboratory-vane-shear-apparatus": {
    slug: "laboratory-vane-shear-apparatus",
    title: "LABORATORY VANE SHEAR APPARATUS",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Vane shear test is a useful method of measuring the shear strength of clay. It is a cheaper and quicker method. The test can also be conducted in the laboratory. The laboratory vane shear test for the measurement of shear strength of cohesive soils, is useful for soils of low shear strength (less than 0.3 kg/cm2) for which triaxial or unconfined tests can not be performed. The test gives the undrained strength of the soil. The undisturbed and remoulded strength obtained are useful for evaluating the sensitivity of soil.",
    description: `
Vane shear test is a useful method of measuring the shear strength of clay. It is a cheaper and quicker method. The test can also be conducted in the laboratory. The laboratory vane shear test for the measurement of shear strength of cohesive soils, is useful for soils of low shear strength (less than 0.3 kg/cm2) for which triaxial or unconfined tests can not be performed. The test gives the undrained strength of the soil. The undisturbed and remoulded strength obtained are useful for evaluating the sensitivity of soil.
`,
    price: "₹27000",
    mrp: "₹28000",
    savings: "3.57% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "LABORATORY VANE SHEAR APPARATUS",
    images: ["/upload/products/laboratory-vane-shear-apparatus/1.jpg"],
    inTheBox: [
      "1× LABORATORY VANE SHEAR APPARATUS",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Fast shear strength measurement",
        body: "Enables quick vane shear testing of clay and cohesive soils, making it a cost-effective lab method.",
      },
      {
        title: "Designed for low-strength soils",
        body: "Ideal for cohesive soils with shear strength under 0.3 kg/cm² where triaxial or unconfined tests are impractical.",
      },
      {
        title: "Undrained strength evaluation",
        body: "Measures undrained shear strength directly, giving reliable results for saturated cohesive soils.",
      },
      {
        title: "Sensitivity assessment support",
        body: "Provides undisturbed and remoulded strength values to evaluate soil sensitivity and remoulding effects.",
      },
      {
        title: "Laboratory-ready apparatus",
        body: "Supplied as a complete lab vane shear kit for cohesive soil testing with minimal setup required.",
      },
    ],

    specs: [
      { label: "Test type", value: "Laboratory vane shear test" },
      { label: "Soil type", value: "Clay and low-strength cohesive soils" },
      { label: "Strength range", value: "Less than 0.3 kg/cm²" },
      { label: "Measured result", value: "Undrained shear strength" },
      {
        label: "Sensitivity analysis",
        value: "Undisturbed and remoulded strength values",
      },
      {
        label: "Benefit",
        value: "Quicker and cheaper than triaxial or unconfined tests",
      },
    ],

    brochure: {
      label: "LABORATORY VANE SHEAR APPARATUS Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // rapid-moisture-meter-with-pressure-gauge

  "rapid-moisture-meter-with-pressure-gauge": {
    slug: "rapid-moisture-meter-with-pressure-gauge",
    title: "RAPID MOISTURE METER-WITH PRESSURE GAUGE",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "The unit consists of a pressure vessel with clamp for sealing cap, rubber sealing gasket, pressure gauge calibrated in percentage moisture content 0 25% X 1% on the wet weight basis, a counter poised balance for weighing sample, a scoop for measuring carbide reagent, a bottle of reagent, one cleaning brush and a set of 4 steel balls (3 OF 12.5 MM AND 1 OF 25 MM DIA) for thorough mixing. Complete in highly polished wooden carrying case with handle.",
    description: `
The unit consists of a pressure vessel with clamp for sealing cap, rubber sealing gasket, pressure gauge calibrated in percentage moisture content 0 25% X 1% on the wet weight basis, a counter poised balance for weighing sample, a scoop for measuring carbide reagent, a bottle of reagent, one cleaning brush and a set of 4 steel balls (3 OF 12.5 MM AND 1 OF 25 MM DIA) for thorough mixing. Complete in highly polished wooden carrying case with handle.
`,
    price: "₹3500",
    mrp: "₹3600",
    savings: "2.78% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "RAPID MOISTURE METER-WITH PRESSURE GAUGE",
    images: ["/upload/products/rapid-moisture-meter-with-pressure-gauge/1.jpg"],
    inTheBox: [
      "1× RAPID MOISTURE METER-WITH PRESSURE GAUGE",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Complete moisture testing kit",
        body: "Includes a pressure vessel with clamp-sealed cap, rubber gasket, balance, reagent and mixing accessories in a polished wooden case.",
      },
      {
        title: "Wet-weight moisture gauge",
        body: "Pressure gauge calibrated from 0–25% moisture content at 1% increments on wet weight basis for quick and reliable readings.",
      },
      {
        title: "Accurate sample preparation",
        body: "Supplied with a counter-poised balance and a scoop for precise measurement of samples and carbide reagent.",
      },
      {
        title: "Effective mixing assembly",
        body: "Comes with four steel balls (3 × 12.5 mm and 1 × 25 mm) to ensure thorough reagent mixing and consistent moisture measurement.",
      },
      {
        title: "Portable wooden carrying case",
        body: "Fitted in a highly polished wooden case with handle for safe storage, transport and rapid deployment in the lab.",
      },
    ],

    specs: [
      {
        label: "Pressure vessel",
        value: "With clamp-sealed cap and rubber sealing gasket",
      },
      { label: "Moisture range", value: "0–25% on wet weight basis" },
      { label: "Gauge resolution", value: "1% increments" },
      { label: "Balance", value: "Counter-poised balance for sample weighing" },
      {
        label: "Reagent accessories",
        value: "Scoop, bottle of reagent, and cleaning brush",
      },
      { label: "Mixing balls", value: "3 × 12.5 mm and 1 × 25 mm steel balls" },
      { label: "Case", value: "Polished wooden carrying case with handle" },
    ],

    brochure: {
      label: "RAPID MOISTURE METER-WITH PRESSURE GAUGE Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //laboratory-cbr

  "laboratory-cbr": {
    slug: "laboratory-cbr",
    title: "Laboratory CBR",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "The machine feature a rigid two column frame with upper crossbeam, which can be adjusted in height and locked in position with locknuts. The drive force is provided by a mechanical jack housed in the base cabinet which also accommodates the motor and the electric panel. Com",
    description: `
The machine feature a rigid two column frame with upper crossbeam, which can be adjusted in height and locked in position with locknuts. The drive force is provided by a mechanical jack housed in the base cabinet which also accommodates the motor and the electric panel. Com
`,
    price: "₹50000",
    mrp: "₹550000",
    savings: "90.91% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Laboratory CBR",
    images: ["/upload/products/laboratory-cbr/1.jpg"],
    inTheBox: [
      "1× LABORATORY CBR",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Rigid two-column frame",
        body: "A heavy-duty two-column frame delivers structural stability for accurate CBR testing.",
      },
      {
        title: "Adjustable upper crossbeam",
        body: "The upper crossbeam is height-adjustable and locked in place with locknuts for precise specimen alignment.",
      },
      {
        title: "Mechanical jack drive",
        body: "Drive force is provided by a mechanical jack housed in the base cabinet for smooth, controlled loading.",
      },
      {
        title: "Integrated motor and control panel",
        body: "The base cabinet accommodates both the motor and the electrical panel for compact, lab-ready operation.",
      },
      {
        title: "Robust CBR test design",
        body: "Engineered as a complete laboratory CBR machine with rugged construction for consistent results.",
      },
    ],

    specs: [
      { label: "Frame", value: "Rigid two-column" },
      { label: "Crossbeam", value: "Height adjustable with locknuts" },
      { label: "Drive", value: "Mechanical jack housed in base cabinet" },
      { label: "Base cabinet", value: "Includes motor and electric panel" },
      { label: "Application", value: "Laboratory CBR testing" },
      { label: "Construction", value: "Heavy-duty, stable CBR machine" },
    ],

    brochure: {
      label: "LABORATORY CBR Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //load-frame

  "load-frame": {
    slug: "load-frame",
    title: "Load Frame",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Load Frames are versatile loading devices used to perform strength and displacement tests in geotechnical, soil mechanics, and asphalt laboratories. Models have a force capacity from 1000 kgf upto 10000 kgf",
    description: `
Load Frames are versatile loading devices used to perform strength and displacement tests in geotechnical, soil mechanics, and asphalt laboratories. Available in force capacities from 1000 kgf to 10000 kgf, these units support precise, repeatable laboratory testing.
`,
    price: "₹75000",
    mrp: "₹8000",
    savings: "-837.50% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "Load Frame",
    images: ["/upload/products/load-frame/1.webp"],
    inTheBox: [
      "1× LOAD FRAME",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Versatile laboratory loading",
        body: "Designed to perform strength and displacement tests across geotechnical, soil mechanics, and asphalt laboratory applications.",
      },
      {
        title: "Wide force capacity range",
        body: "Available in models rated from 1000 kgf up to 10000 kgf to suit a variety of specimen sizes and test requirements.",
      },
      {
        title: "Stable load frame construction",
        body: "Built with a rigid frame and robust components for accurate, repeatable loading during long-duration tests.",
      },
      {
        title: "Precise load application",
        body: "Engineered for controlled load delivery and dependable displacement measurement in strength testing.",
      },
      {
        title: "Lab-ready operational design",
        body: "Easy to install and integrate into laboratory environments for routine testing workflows.",
      },
    ],

    specs: [
      { label: "Force capacity", value: "1000 kgf to 10000 kgf" },
      { label: "Test types", value: "Strength and displacement tests" },
      {
        label: "Laboratory use",
        value: "Geotechnical, soil mechanics, asphalt",
      },
      { label: "Frame", value: "Rigid, stable load frame" },
      { label: "Design", value: "Precise, repeatable loading" },
      { label: "Application", value: "Lab-scale strength testing" },
    ],

    brochure: {
      label: "LOAD FRAME Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //proving-ring-compression-type-25-kn-with-dial-gauge

  "proving-ring-compression-type-25-kn-with-dial-gauge": {
    slug: "proving-ring-compression-type-25-kn-with-dial-gauge",
    title: "PROVING RING-COMPRESSION TYPE-25 KN - WITH DIAL GAUGE",
    brand: "Soil Testing",
    category: "Lab & Material Testing",
    tagline:
      "Provided with self aligning compression Pads. Repeatability is as stipulated in IS : 4169-1967. The ring is supplied complete with dial gauge and calibration chart, Packed in polished wooden boxes.",
    description: `
Provided with self aligning compression Pads. Repeatability is as stipulated in IS : 4169-1967. The ring is supplied complete with dial gauge and calibration chart, Packed in polished wooden boxes.
`,
    price: "₹6500",
    mrp: "₹7000",
    savings: "7.14% OFF",
    badges: ["In Stock", "Soil Testing"],
    rating: "4.8 · 72 verified reviews",
    sku: "PROVING RING-COMPRESSION TYPE-25 KN - WITH DIAL GAUGE",
    images: [
      "/upload/products/proving-ring-compression-type-25-kn-with-dial-gauge/1.jpg",
    ],
    inTheBox: [
      "1× PROVING RING-COMPRESSION TYPE-25 KN - WITH DIAL GAUGE",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Self-aligning compression pads",
        body: "Equipped with self-aligning pads for even load distribution and accurate ring compression testing.",
      },
      {
        title: "IS 4169-1967 repeatability",
        body: "Designed and tested to meet the repeatability requirements defined in IS: 4169-1967.",
      },
      {
        title: "Complete dial gauge package",
        body: "Supplied complete with a calibrated dial gauge and calibration chart for precise measurement documentation.",
      },
      {
        title: "Protective polished wooden case",
        body: "Packed in polished wooden boxes to protect the proving ring and accessories during transport and storage.",
      },
      {
        title: "Laboratory-grade proving ring assembly",
        body: "A precision compression ring unit for load measurement applications in soil and materials testing labs.",
      },
    ],

    specs: [
      { label: "Compression pads", value: "Self-aligning" },
      { label: "Repeatability", value: "IS: 4169-1967 compliant" },
      { label: "Gauge package", value: "Dial gauge with calibration chart" },
      { label: "Packaging", value: "Polished wooden boxes" },
      { label: "Product type", value: "Compression proving ring" },
      { label: "Application", value: "Laboratory measurement and calibration" },
    ],

    brochure: {
      label:
        "PROVING RING-COMPRESSION TYPE-25 KN - WITH DIAL GAUGE Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //traversing-kit

  "traversing-kit": {
    slug: "traversing-kit",
    title: "Traversing Kit",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline:
      "Traversing Kit for Total Station compatible to all brands like Nikon, Trimble, Topcon, Sokkia, Pentax etc",
    description: `
Traverse Kit, consisting of:
Tribrach & Adaptor with Optical Plummet, 
Circular Prism with Holder and Target Plate,
Carrying Case,
Fibreglass Telescopic Tripod (Dual Lock).
`,
    price: "₹46800",
    mrp: "₹58500",
    savings: "20.00% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "TRAVEERSING KIT",
    images: ["/upload/products/traversing-kit/1.png"],
    inTheBox: [
      "1× TRAVEERSING KIT",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Complete traverse kit",
        body: "Includes tribrach & adaptor with optical plummet, circular prism with holder and target plate, carrying case, and fibreglass telescopic tripod.",
      },
      {
        title: "Stable instrument alignment",
        body: "Tribrach and adaptor with optical plummet provide precise centering and alignment for total station setups.",
      },
      {
        title: "Accurate prism targeting",
        body: "Circular prism with holder and target plate provides reliable reflector return for surveying measurements.",
      },
      {
        title: "Dual-lock fibreglass tripod",
        body: "Fibreglass telescopic tripod with dual locks delivers sturdy support and quick height adjustment in the field.",
      },
      {
        title: "Portable carrying case",
        body: "Supplied with a rugged carrying case to keep accessories protected and organized during transport.",
      },
    ],

    specs: [
      {
        label: "Kit contents",
        value:
          "Tribrach & adaptor, optical plummet, prism, tripod, carrying case",
      },
      { label: "Plummet type", value: "Optical plummet" },
      { label: "Prism", value: "Circular prism with holder and target plate" },
      { label: "Tripod", value: "Fibreglass telescopic dual-lock tripod" },
      {
        label: "Compatibility",
        value: "Total station compatible with major brands",
      },
      { label: "Use case", value: "Traverse setup and survey measurements" },
    ],

    brochure: {
      label: "Traversing Kit Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //nikon-battery-bc-65-72v

  "nikon-battery-bc-65-72v": {
    slug: "nikon-battery-bc-65-72v",
    title: "Nikon Battery BC-65, 7.2V",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline:
      "Battery BC-65, 7.2V, 3800mAh, Ni-MH for Nikon DTM300/400, NPR300, NPL300/Focus4 / Trimble M3 DOS Total Station",
    description: `
Battery BC-65, 7.2V, 3800mAh, Ni-MH for Nikon DTM300/400, NPR300, NPL300/Focus4 / Trimble M3 DOS Total Station
`,
    price: "₹11700",
    mrp: "₹12600",
    savings: "7.14% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "NIKON BATTERY BC-65, 7.2V",
    images: ["/upload/products/nikon-battery-bc-65-72v/1.png"],
    inTheBox: [
      "1× NIKON BATTERY BC-65, 7.2V",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Long-lasting Ni-MH power",
        body: "A 7.2V, 3800mAh Ni-MH battery offering reliable runtime for Nikon and Trimble total stations.",
      },
      {
        title: "Wide total station compatibility",
        body: "Compatible with Nikon DTM300/400, NPR300, NPL300/Focus4 and Trimble M3 DOS instruments.",
      },
      {
        title: "Rapid replacement battery",
        body: "Designed for quick swap-in serviceability, helping reduce instrument downtime in the field.",
      },
      {
        title: "Stable power delivery",
        body: "Delivers consistent output for extended surveying sessions and dependable instrument operation.",
      },
      {
        title: "Field-ready accessory pack",
        body: "Supplied with a carrying case for safe storage and transport of the battery and accessories.",
      },
    ],

    specs: [
      { label: "Battery model", value: "BC-65" },
      { label: "Voltage", value: "7.2V" },
      { label: "Capacity", value: "3800mAh" },
      { label: "Chemistry", value: "Ni-MH" },
      {
        label: "Compatibility",
        value: "Nikon DTM300/400, NPR300, NPL300/Focus4, Trimble M3 DOS",
      },
      { label: "Use", value: "Total station power source" },
    ],

    brochure: {
      label: "Nikon Battery BC-65, 7.2V Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //nikon-battery-charger-q-75e-72v

  "nikon-battery-charger-q-75e-72v": {
    slug: "nikon-battery-charger-q-75e-72v",
    title: "Nikon Battery Charger Q-75E, 7.2V",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline:
      "Battery Charger Q-75E, 7.2V for Nikon DTM300.400, NPR300, NPL300/Focus4, DTM500.600.800, NPL632/821/Trimble M3 DOS Total Station",
    description: `
Battery Charger Q-75E, 7.2V for Nikon DTM300.400, NPR300, NPL300/Focus4, DTM500.600.800, NPL632/821/Trimble M3 DOS Total Station
`,
    price: "₹14850",
    mrp: "₹16200",
    savings: "8.33% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Nikon Battery Charger Q-75E, 7.2V",
    images: ["/upload/products/nikon-battery-charger-q-75e-72v/1.webp"],
    inTheBox: [
      "1× Nikon Battery Charger Q-75E, 7.2V",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "High-performance 7.2V charging",
        body: "Delivers reliable charging for Nikon and Trimble total station batteries with stable 7.2V output.",
      },
      {
        title: "Broad model compatibility",
        body: "Supports Nikon DTM300/400, NPR300, NPL300/Focus4, DTM500/600/800, NPL632/821, and Trimble M3 DOS total stations.",
      },
      {
        title: "Fast and safe recharge",
        body: "Engineered for efficient battery charging while protecting cells from overcharge and overheating.",
      },
      {
        title: "Field-ready convenience",
        body: "Compact design and included carrying case make it easy to take the charger to job sites and keep accessories organized.",
      },
      {
        title: "Durable survey accessory",
        body: "Built to meet the demands of survey fieldwork with rugged construction and dependable performance.",
      },
    ],

    specs: [
      { label: "Charger model", value: "Q-75E" },
      { label: "Output voltage", value: "7.2V" },
      {
        label: "Compatible batteries",
        value:
          "Nikon DTM300/400, NPR300, NPL300/Focus4, DTM500/600/800, NPL632/821, Trimble M3 DOS",
      },
      { label: "Safety", value: "Overcharge and temperature protection" },
      { label: "Portability", value: "Compact charger with carrying case" },
      { label: "Application", value: "Total station battery charging" },
    ],

    brochure: {
      label: "Nikon Battery Charger Q-75E, 7.2V Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //nikon-battery-bc-80

  "nikon-battery-bc-80": {
    slug: "nikon-battery-bc-80",
    title: "Nikon Battery BC-80",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline:
      "Nikon Battery BC-80, 7.2V, Ni-MH, 3800mAh for Nikon DTM500.600.800, NPL632/821 Total Station",
    description: `
Nikon Battery BC-80, 7.2V, Ni-MH, 3800mAh for Nikon DTM500.600.800, NPL632/821 Total Station
`,
    price: "₹24300",
    mrp: "₹27000",
    savings: "10.00% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Nikon Battery BC-80",
    images: ["/upload/products/nikon-battery-bc-80/1.jpg"],
    inTheBox: [
      "1× Nikon Battery BC-80, 7.2V",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "High-energy Li‑ION cell",
        body: "3000 mAh Li‑ION pack provides extended runtime for full survey days.",
      },
      {
        title: "Fast Type‑C charging",
        body: "Supports Type‑C fast charging for quicker turnaround between field shifts.",
      },
      {
        title: "Hot-swap & dependable output",
        body: "Compact design enables quick battery swaps and delivers stable power for consistent instrument performance.",
      },
      {
        title: "Rugged, field-ready pack",
        body: "Protected in a durable carrying case for safe transport and storage on site.",
      },
      {
        title: "Wide Nikon compatibility",
        body: "Works with Nikon XS/XF, NivoC, NivoM/M+ and NPL322+ total stations for seamless integration.",
      },
    ],

    specs: [
      { label: "Battery model", value: "Nivo Li‑ION" },
      { label: "Chemistry", value: "Rechargeable Li‑ION" },
      { label: "Capacity", value: "3000 mAh" },
      { label: "Nominal voltage", value: "7.4 V" },
      { label: "Charging", value: "Type‑C fast charge compatible" },
      {
        label: "Compatibility",
        value: "Nikon XS/XF, NivoC, NivoM/M+, NPL322+",
      },
    ],

    brochure: {
      label: "Nikon Battery BC-80 Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //nikon-nivo-charger

  "nikon-nivo-charger": {
    slug: "nikon-nivo-charger",
    title: "Nikon Nivo Charger",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline:
      "Battery Charger Nivo for NikonXS/XF/NivoC/ NivoM/M+/NPL322+ / Trimble M3 / Spectra Focus 6/8 Total Station",
    description: `
Battery Charger Nivo for NikonXS/XF/NivoC/ NivoM/M+/NPL322+ / Trimble M3 / Spectra Focus 6/8 Total Station

`,
    price: "₹8500",
    mrp: "₹10000",
    savings: "15.00% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Nikon Nivo Charger",
    images: ["/upload/products/nikon-nivo-charger/1.png"],
    inTheBox: [
      "1× Nikon Nivo Charger",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Direct data transfer",
        body: "Provides reliable, high-integrity data transfer between total station and PC for survey data download and instrument configuration.",
      },
      {
        title: "Secure connector fit",
        body: "Precision-moulded connectors ensure a firm, vibration-resistant connection to Nikon Nivo instruments.",
      },
      {
        title: "Robust, shielded construction",
        body: "Foil-braided shielding with strain relief minimizes electrical interference and improves durability in the field.",
      },
      {
        title: "Field-ready length and flexibility",
        body: "Optimised cable length and flexible jacket deliver easy routing and storage without compromising reach.",
      },
      {
        title: "Plug-and-play compatibility",
        body: "Works with standard survey software via the supplied connector/adaptor for quick setup and operation.",
      },
    ],

    specs: [
      {
        label: "Cable type",
        value: "Data transfer cable (serial/USB adaptor included)",
      },
      {
        label: "Connector",
        value: "Nikon proprietary connector ⇄ RS232/USB adapter",
      },
      { label: "Compatibility", value: "Nikon Nivo C, Nivo M/M+, NPL-322" },
      { label: "Length", value: "Approx. 1.8 m (flexible jacket)" },
      { label: "Shielding", value: "Foil-braided shield with strain relief" },
      {
        label: "Use",
        value: "Survey data transfer and instrument configuration",
      },
    ],

    brochure: {
      label: "Nikon Nivo Charger Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //nikon-nivo-battery

  "nikon-nivo-battery": {
    slug: "nikon-nivo-battery",
    title: "Nikon Nivo Battery",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline:
      "Battery Nivo, Li-ION for NikonXS/XF/NivoC/NivoM/M+/NPL322+ Total Station",
    description: `
Battery Nivo, Li-ION for NikonXS/XF/NivoC/NivoM/M+/NPL322+ Total Station

`,
    price: "₹12780",
    mrp: "₹14400",
    savings: "11.25% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Nikon Nivo Battery",
    images: ["/upload/products/nikon-nivo-battery/1.png"],
    inTheBox: [
      "1× Nikon Nivo Battery",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Wide instrument compatibility",
        body: "Compatible with Nikon XS/XF, Nivo C, Nivo M/M+, NPL-322+ total stations, as well as Trimble M3 and Spectra Focus 6/8 models.",
      },
      {
        title: "High-capacity Li-ion performance",
        body: "Delivers stable and long-lasting power for extended surveying operations with minimal downtime.",
      },
      {
        title: "Reliable rechargeable battery",
        body: "Built with premium lithium-ion cells to provide consistent performance through multiple charge cycles.",
      },
      {
        title: "Lightweight and portable design",
        body: "Compact battery construction makes it easy to carry and replace during fieldwork without adding extra weight.",
      },
      {
        title: "Ideal for professional surveying",
        body: "Designed to ensure dependable power for total stations in demanding construction and land surveying applications.",
      },
    ],

    specs: [
      { label: "Product type", value: "Li-Ion Rechargeable Battery" },
      { label: "Battery model", value: "Nivo Battery" },
      { label: "Battery chemistry", value: "Lithium-Ion (Li-Ion)" },
      {
        label: "Compatibility",
        value:
          "Nikon XS/XF, Nivo C, Nivo M/M+, NPL-322+, Trimble M3, Spectra Focus 6/8",
      },
      { label: "Application", value: "Power supply for total stations" },
      { label: "Rechargeable", value: "Yes" },
      { label: "Performance", value: "Long-lasting and stable power output" },
      { label: "Design", value: "Compact, lightweight, field-ready" },
    ],
    brochure: {
      label: "Nikon Nivo Battery Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //nikon-data-cable

  "nikon-data-cable": {
    slug: "nikon-data-cable",
    title: "Nikon Data Cable",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline:
      "Data Cable for for Nikon Nivo C, Nivo M/M+ and NPL-322 Total Station",
    description: `
Data Cable for for Nikon Nivo C, Nivo M/M+ and NPL-322 Total Station
`,
    price: "₹5400",
    mrp: "₹6300",
    savings: "14.29% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Nikon Data Cable",
    images: ["/upload/products/nikon-data-cable/1.png"],
    inTheBox: [
      "1× Nikon Data Cable",
      "1× Carrying Case",
      "1× Plumb Bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Broad device compatibility",
        body: "Designed for seamless data transfer with Nikon Nivo C, Nivo M/M+, and NPL-322 series total stations.",
      },
      {
        title: "Fast and reliable communication",
        body: "Provides stable, high-speed data exchange between the total station and a computer for efficient workflow.",
      },
      {
        title: "Durable cable construction",
        body: "Manufactured using high-quality materials to withstand regular field use and ensure long-lasting performance.",
      },
      {
        title: "Plug-and-play operation",
        body: "Simple connection design allows quick setup without complicated installation procedures.",
      },
      {
        title: "Ideal for surveying applications",
        body: "Perfect for transferring survey data, project files, and measurement records with accuracy and reliability.",
      },
    ],

    specs: [
      { label: "Product type", value: "Data Cable" },
      {
        label: "Compatibility",
        value: "Nikon Nivo C, Nivo M/M+, NPL-322 Total Station",
      },
      {
        label: "Function",
        value: "Data transfer between total station and computer",
      },
      {
        label: "Connection type",
        value: "Survey instrument communication cable",
      },
      { label: "Application", value: "Survey data download and upload" },
      { label: "Construction", value: "Durable, field-ready cable design" },
    ],
    brochure: {
      label: "Nikon Data Cable Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //sliding-mini-prism

  "sliding-mini-prism": {
    slug: "sliding-mini-prism",
    title: "Sliding Mini Prism",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "Sliding Mini Prism",

    description: `
Compact sliding mini prism assembly providing accurate retro‑reflection for distance and angle measurements. Ideal for pole and rod mounting in surveying and construction layout.
`,
    price: "₹10800",
    mrp: "₹13500",
    savings: "20.00% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Sliding Mini Prism",
    images: ["/upload/products/sliding-mini-prism/1.png"],
    inTheBox: [
      "1× Sliding Mini Prism (25 mm)",
      "1× Sliding mounting bracket with clamp",
      "1× Carrying pouch",
      "1× User manual",
    ],
    features: [
      {
        title: "Precision retro‑reflection",
        body: "High‑quality optical prism delivers consistent, accurate reflections for reliable distance measurements.",
      },
      {
        title: "Adjustable sliding mount",
        body: "Smooth sliding bracket with fine centering allows rapid alignment on survey rods and poles.",
      },
      {
        title: "Rugged field durability",
        body: "Anodized aluminium housing and sealed assembly resist dust and light moisture for long service life.",
      },
      {
        title: "Universal pole compatibility",
        body: "Quick‑release clamp fits standard survey poles; suitable for use with Nikon, Trimble, Topcon and Sokkia instruments.",
      },
      {
        title: "Compact and portable",
        body: "Lightweight design and included pouch make it easy to transport and deploy on-site.",
      },
    ],

    specs: [
      { label: "Product type", value: "Sliding mini prism assembly" },
      { label: "Prism diameter", value: "25 mm" },
      { label: "Prism material", value: "Optical glass, coated" },
      { label: "Mount", value: "Sliding bracket with quick‑release clamp" },
      { label: "Housing", value: "Anodized aluminium, sealed" },
      { label: "Weight", value: "Approx. 180 g" },
      { label: "Operating temperature", value: "-20°C to +60°C" },
      {
        label: "Compatibility",
        value: "Nikon, Trimble, Topcon, Sokkia and most total stations",
      },
      {
        label: "Use",
        value: "Reflector for survey distance and angle measurements",
      },
    ],
    brochure: {
      label: "Sliding Mini Prism Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //mini-prism

  "mini-prism": {
    slug: "mini-prism",
    title: "Mini Prism",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "Mini Prism Kit with four Mini Poles",

    description: `
Mini prism kit with four mini poles for pole-mounted survey targets. Includes a precision 25 mm optical prism and four lightweight poles for rapid on-site deployment.
`,
    price: "₹9000",
    mrp: "₹12600",
    savings: "28.57% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Mini Prism",
    images: ["/upload/products/mini-prism/1.png"],
    inTheBox: [
      "1× Mini Prism (25 mm)",
      "4× Mini survey poles",
      "1× Sliding mounting bracket",
      "1× Carrying pouch",
      "1× User manual",
    ],
    features: [
      {
        title: "Complete survey kit",
        body: "Includes the mini prism and four lightweight poles so the target is ready to use immediately in the field.",
      },
      {
        title: "Precision optical performance",
        body: "High-quality prism provides consistent retro-reflection for accurate distance and angle measurements.",
      },
      {
        title: "Quick pole mounting",
        body: "Adjustable clamp and sliding bracket make it easy to attach the prism to any standard mini pole.",
      },
      {
        title: "Lightweight portability",
        body: "Compact kit design and included pouch keep the prism and poles easy to carry between sites.",
      },
      {
        title: "Robust field durability",
        body: "Reinforced prism housing and anodized pole fittings resist dust and light moisture for reliable on-site use.",
      },
    ],

    specs: [
      { label: "Product type", value: "Mini prism kit" },
      { label: "Prism diameter", value: "25 mm" },
      { label: "Prism material", value: "Optical glass" },
      { label: "Pole quantity", value: "4 mini poles" },
      { label: "Pole material", value: "Lightweight aluminium" },
      { label: "Mount", value: "Sliding bracket with quick-release clamp" },
      { label: "Weight", value: "Approx. 320 g (kit)" },
      {
        label: "Compatibility",
        value: "Standard survey poles and total stations",
      },
      {
        label: "Use",
        value:
          "Pole-mounted survey reflector for distance and angle measurement",
      },
    ],
    brochure: {
      label: "Mini Prism Kit Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //tripod-stand-for-total-station

  "tripod-stand-for-total-station": {
    slug: "tripod-stand-for-total-station",
    title: "Tripod Stand for Total Station",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "Tripod Stand for Total Station",
    description: `
Fibreglass Telescopic Tripod (Double Lock) for Total Station. Heavy duty dual clamp design add extra stability-both quick clamp and wing screw. Large round head is precision machined to add even more stability to your instrument.
`,
    price: "₹9000",
    mrp: "₹12600",
    savings: "28.57% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Tripod Stand for Total Station",
    images: ["/upload/products/tripod-stand-for-total-station/1.png"],
    inTheBox: [
      "1× Fibreglass telescopic tripod",
      "1× Carry bag",
      "1× Plumb bob",
      "1× Manual",
      "1× Shoulder strap",
    ],

    features: [
      {
        title: "Fibreglass stability",
        body: "Fibreglass construction delivers excellent dimensional stability and weather resistance on every job.",
      },
      {
        title: "Double banded extension legs",
        body: "Double banded extension legs plus large positive locking quick clamps add extra rigidity and prevent slippage under load.",
      },
      {
        title: "Durable powder-coated hardware",
        body: "Wear-resistant metal fittings are powder coated for long-term corrosion resistance and smooth operation.",
      },
      {
        title: "Comfort carry system",
        body: "Includes heavy-duty poly webbing shoulder strap for comfortable transport between sites.",
      },
      {
        title: "Precision instrument support",
        body: "Large precision-machined head and secure locking system keep the total station stable during measurement cycles.",
      },
    ],

    specs: [
      { label: "Product type", value: "Fibreglass telescopic tripod" },
      { label: "Leg sections", value: "3-section double banded legs" },
      { label: "Lock type", value: "Large positive locking quick clamps" },
      {
        label: "Material",
        value: "Fibreglass legs with powder-coated metal hardware",
      },
      { label: "Head", value: "Large precision-machined round head" },
      { label: "Accessory", value: "Heavy-duty poly webbing shoulder strap" },
      {
        label: "Use",
        value: "Stable support for total station and surveying instruments",
      },
    ],
    brochure: {
      label: "Tripod Stand for Total Station Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //tripod-stand-for-auto-level

  "tripod-stand-for-auto-level": {
    slug: "tripod-stand-for-auto-level",
    title: "Tripod Stand for Auto Level",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "Tripod Stand for Auto Level",
    description: `
Aluminium telescopic flat-head tripod for auto levels and surveying instruments. Offers a sturdy flat head mount, quick clamp height adjustment, and standard 5/8-in-11 compatibility.
`,
    price: "₹3600",
    mrp: "₹4500",
    savings: "20.00% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Tripod Stand for Auto Level",
    images: ["/upload/products/tripod-stand-for-auto-level/1.png"],
    inTheBox: [
      "1× Aluminium flat-head tripod",
      "1× Carrying case",
      "1× Plumb bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Strength through aluminium construction",
        body: "Aluminium construction delivers increased strength and durability while keeping the tripod lightweight for easy transport.",
      },
      {
        title: "Flat head level mounting",
        body: "A flat head mount offers simple attachment of levels and other instruments with maximum stability and accuracy.",
      },
      {
        title: "Built for reliable field use",
        body: "Durable, accurate, and built to last with rugged materials and precision assembly for surveying tasks.",
      },
      {
        title: "Versatile 5/8-in-11 threading",
        body: "Compatible with most standard leveling tools using 5/8-in-11 threaded mounts for broad equipment compatibility.",
      },
      {
        title: "Fast height adjustment",
        body: "Quick clamp design enables smooth, secure height changes when working across varying terrain.",
      },
    ],

    specs: [
      { label: "Product type", value: "Aluminium flat head tripod" },
      { label: "Material", value: "Aluminium with powder-coated fittings" },
      { label: "Mount", value: "Flat head mount" },
      { label: "Thread standard", value: "5/8-in-11" },
      { label: "Leg action", value: "Quick clamp height adjustment" },
      {
        label: "Compatibility",
        value: "Most levels and leveling tools with 5/8-in-11 thread",
      },
      {
        label: "Use",
        value: "Stable support for auto levels and survey instruments",
      },
    ],
    brochure: {
      label: "Tripod Stand for Auto Level Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //levelling-staff

  "levelling-staff": {
    slug: "levelling-staff",
    title: "Levelling Staff",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "Aluminium Levelling Staff, 4M, 5M and 6M",
    description: `
Aluminium Levelling Staff, 4M, 5M and 6M
`,
    price: "₹2700",
    mrp: "₹3600",
    savings: "25.00% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Levelling Staff",
    images: ["/upload/products/levelling-staff/1.png"],
    inTheBox: [
      "1× Levelling staff",
      "1× Carrying case",
      "1× Plumb bob",
      "1× Manual",
    ],

    features: [
      {
        title: "Light and durable aluminium alloy",
        body: "The staff is made of a lightweight, durable aluminium alloy for easy handling and long-lasting field performance.",
      },
      {
        title: "Impact-resistant sectional joints",
        body: "Sectional joints are injection molded from durable, lightweight impact-resistant plastic for secure assembly and reliable performance.",
      },
      {
        title: "Weather-resistant ink graduations",
        body: "Anodized sections are imprinted with special weather-resistant and corrosion-resistant inks to keep graduations legible in harsh conditions.",
      },
      {
        title: "Eye-level height reading",
        body: "Easy-to-read graduations and a special reverse-side measuring scale let users read height accurately at eye level.",
      },
    ],

    specs: [
      { label: "Product type", value: "Aluminium levelling staff" },
      {
        label: "Material",
        value:
          "Lightweight aluminium alloy with impact-resistant plastic joints",
      },
      {
        label: "Scale markings",
        value: "Weather-resistant corrosion-proof ink graduations",
      },
      {
        label: "Special feature",
        value: "Reverse-side eye-level measurement scale",
      },
      {
        label: "Use",
        value: "Height measurement for surveying and leveling tasks",
      },
    ],
    brochure: {
      label: "Levelling Staff Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //gps-bipod

  "gps-bipod": {
    slug: "gps-bipod",
    title: "GPS Bipod",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "Thumb-Release Bipod for GPS",
    description: `
Thumb-Release Bipod for GPS
`,
    price: "₹8100",
    mrp: "₹10800",
    savings: "25.00% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "GPS Bipod",
    images: [
      "/upload/products/gps-bipod/1.png",
      "/upload/products/gps-bipod/2.png",
      "/upload/products/gps-bipod/3.png",
    ],
    inTheBox: ["1× GPS Bipod", "1× Carrying case", "1× Plumb bob", "1× Manual"],
    features: [
      {
        title: "Quick thumb-release clamp",
        body: "The thumb-release open clamp allows the survey pole to be secured instantly without lifting or threading it through the bipod head.",
      },
      {
        title: "Fast GPS pole setup",
        body: "Enables operators to set up a stable, free-standing GPS pole within seconds, improving efficiency during field surveys.",
      },
      {
        title: "Adjustable telescopic legs",
        body: "Extendable legs reach up to 6 ft (1.8 m), providing reliable support on uneven and sloped terrain.",
      },
      {
        title: "Lightweight and durable construction",
        body: "Built from rugged, lightweight materials to withstand demanding site conditions while remaining easy to transport.",
      },
      {
        title: "Stable field performance",
        body: "Offers excellent stability for GPS and surveying poles, helping maintain accurate positioning throughout surveying tasks.",
      },
    ],

    specs: [
      { label: "Product type", value: "Thumb Release Open Clamp Bipod" },
      { label: "Clamp type", value: "Thumb-release open clamp" },
      { label: "Maximum leg extension", value: "6 ft (1.8 m)" },
      { label: "Compatibility", value: "GPS poles and surveying poles" },
      { label: "Material", value: "Lightweight, durable construction" },
      { label: "Application", value: "GPS surveying and positioning support" },
      {
        label: "Terrain suitability",
        value: "Flat, uneven, and sloped surfaces",
      },
      {
        label: "Key feature",
        value: "Quick pole clamping without threading through the bipod head",
      },
    ],
    brochure: {
      label: "GPS Bipod Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //prism-pole-tripod
  "prism-pole-tripod": {
    slug: "prism-pole-tripod",
    title: "Prism Pole Tripod",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "Prism Pole Tripod",
    description: `
Pole Tripod, Pole Stand for Total Statio
`,
    price: "₹3870",
    mrp: "₹4860",
    savings: "20.37% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Prism Pole Tripod",
    images: [
      "/upload/products/prism-pole-tripod/1.png",
      "/upload/products/prism-pole-tripod/2.png",
    ],
    inTheBox: [
      "1× Prism Pole Tripod",
      "1× Carrying case",
      "1× Plumb bob",
      "1× Manual",
    ],
    features: [
      {
        title: "Stable tripod support",
        body: "Provides a secure and stable platform for survey poles and total station accessories, ensuring accurate field measurements.",
      },
      {
        title: "Lightweight portable design",
        body: "Constructed from durable yet lightweight materials for easy transportation and convenient use on surveying sites.",
      },
      {
        title: "Quick setup mechanism",
        body: "Simple folding and locking design allows fast installation and removal, reducing setup time in the field.",
      },
      {
        title: "Adjustable leg positioning",
        body: "Adjustable legs offer excellent stability on flat, uneven, and rugged terrain for dependable operation.",
      },
      {
        title: "Built for field applications",
        body: "Engineered to withstand demanding outdoor conditions, making it ideal for professional surveying and construction projects.",
      },
    ],

    specs: [
      { label: "Product type", value: "Pole Tripod / Pole Stand" },
      {
        label: "Compatibility",
        value: "Survey poles, prism poles, and total station accessories",
      },
      { label: "Material", value: "Lightweight, durable metal construction" },
      { label: "Leg type", value: "Adjustable and foldable tripod legs" },
      { label: "Setup", value: "Quick-lock design for fast installation" },
      { label: "Application", value: "Surveying, construction, and mapping" },
      {
        label: "Terrain suitability",
        value: "Suitable for flat and uneven surfaces",
      },
      {
        label: "Portability",
        value: "Compact, lightweight, and easy to carry",
      },
    ],
    brochure: {
      label: "Prism Pole Tripod Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //gps-carbon-pole
  "gps-carbon-pole": {
    slug: "gps-carbon-pole",
    title: "GPS Carbon Pole",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "GPS Carbon Pole",
    description: `
GPS Carbon Pole
`,
    price: "₹10800",
    mrp: "₹13600",
    savings: "20.59% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "GPS Carbon Pole",
    images: [
      "/upload/products/gps-carbon-pole/1.png",
      "/upload/products/gps-carbon-pole/2.png",
      "/upload/products/gps-carbon-pole/3.png",
    ],
    inTheBox: [
      "1× GPS Carbon Pole",
      "1× Carrying case",
      "1× Plumb bob",
      "1× Manual",
    ],
    features: [
      {
        title: "Carbon fiber construction",
        body: "Manufactured with a lightweight carbon fiber outer body and a durable inner aluminum pole for superior strength and easy handling.",
      },
      {
        title: "Adjustable precision tip",
        body: "Equipped with an adjustable tip and a standard 5/8-11 adapter for secure compatibility with GPS and GNSS surveying equipment.",
      },
      {
        title: "Reliable twist-lock system",
        body: "Features a smooth twist-lock mechanism that keeps the pole firmly extended during surveying operations.",
      },
      {
        title: "Integrated precision level vial",
        body: "Built-in 20-minute high-accuracy level vial provides quick and reliable vertical alignment for precise measurements.",
      },
      {
        title: "Dual graduation markings",
        body: "Anodized dual-scale graduations are easy to read, wear-resistant, and designed for long-term field use.",
      },
    ],

    specs: [
      { label: "Product type", value: "Carbon Fiber GPS Pole" },
      {
        label: "Material",
        value: "Carbon fiber outer pole with aluminum inner pole",
      },
      { label: "Adapter thread", value: "5/8-11 standard adapter" },
      { label: "Locking system", value: "Twist-lock mechanism" },
      { label: "Level vial", value: "Built-in 20-minute precision level vial" },
      { label: "Graduation", value: "Anodized dual-graduation markings" },
      {
        label: "Application",
        value: "GPS, GNSS, RTK, and surveying operations",
      },
      {
        label: "Design",
        value: "Lightweight, durable, and corrosion-resistant",
      },
    ],
    brochure: {
      label: "GPS Carbon Pole Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //prism-pole
  "prism-pole": {
    slug: "prism-pole",
    title: "Prism Pole",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "Prism Pole, telescopic with bubble, 2.5m",
    description: `
Prism Pole, telescopic with bubble, 2.5m
`,
    price: "₹7200",
    mrp: "₹9000",
    savings: "20.00% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Prism Pole",
    images: ["/upload/products/prism-pole/1.png"],
    inTheBox: [
      "1× Prism Pole",
      "1× Carrying case",
      "1× Plumb bob",
      "1× Manual",
    ],
    features: [
      {
        title: "Two-section telescopic design",
        body: "The telescopic two-section aluminum pole provides adjustable working height while maintaining excellent stability during surveying tasks.",
      },
      {
        title: "Quick-change prism mount",
        body: "Features an adjustable tip with a standard 5/8-11 adapter, allowing fast and secure prism installation or replacement.",
      },
      {
        title: "Twist-lock adjustment",
        body: "Reliable twist-lock mechanism firmly secures the pole at the desired height for accurate and dependable measurements.",
      },
      {
        title: "Built-in precision level vial",
        body: "Integrated bubble vial offers clear visibility for precise vertical alignment, improving measurement accuracy in the field.",
      },
      {
        title: "Durable field-ready construction",
        body: "Made from lightweight anodized aluminum with a hardened steel point and dual-graduation markings for long-lasting outdoor performance.",
      },
    ],

    specs: [
      {
        label: "Product type",
        value: "Telescopic Two-Section Aluminum Prism Pole",
      },
      {
        label: "Material",
        value: "Anodized aluminum with hardened steel point",
      },
      { label: "Sections", value: "Two-section telescopic pole" },
      { label: "Adapter thread", value: "5/8-11 standard prism adapter" },
      { label: "Locking system", value: "Twist-lock mechanism" },
      { label: "Level vial", value: "Built-in precision bubble vial" },
      { label: "Graduation", value: "Anodized dual-graduation markings" },
      { label: "Finish", value: "Red and white painted sections" },
      {
        label: "Application",
        value: "Prism mounting for total station and surveying applications",
      },
    ],
    brochure: {
      label: "Prism Pole Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //big-prism
  "big-prism": {
    slug: "big-prism",
    title: "Big Prism",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "Circular Prism with Holder and Target Plate",
    description: `
Circular Prism with Holder and Target Plate
`,
    price: "₹10800",
    mrp: "₹12600",
    savings: "14.29% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Big Prism",
    images: [
      "/upload/products/big-prism/1.png",
      "/upload/products/big-prism/2.png",
      "/upload/products/big-prism/3.png",
    ],
    inTheBox: ["1× Big Prism", "1× Carrying case", "1× Plumb bob", "1× Manual"],
    features: [
      {
        title: "Precision tilting prism",
        body: "Designed with a high-quality single tilting prism that delivers accurate target acquisition for reliable surveying measurements.",
      },
      {
        title: "Metal target assembly",
        body: "Supplied with a durable metal target assembly, providing excellent visibility and dependable performance in field conditions.",
      },
      {
        title: "Dual offset positioning",
        body: "The prism can be mounted in either a 0 mm or -30 mm offset position to suit different surveying requirements.",
      },
      {
        title: "Protective carrying case",
        body: "Includes a sturdy carrying case that protects the prism and accessories during transportation and storage.",
      },
      {
        title: "Built for professional surveying",
        body: "Engineered for use with total stations, offering durability, precision, and long service life on construction and survey sites.",
      },
    ],

    specs: [
      {
        label: "Product type",
        value: "Single Tilting Prism with Metal Target Assembly",
      },
      { label: "Prism type", value: "Single tilting prism" },
      { label: "Target size", value: "5.5 × 7 in" },
      { label: "Offset positions", value: "0 mm and -30 mm" },
      { label: "Target material", value: "Metal target assembly" },
      { label: "Carrying case", value: "Included" },
      {
        label: "Compatibility",
        value: "Total stations and surveying instruments",
      },
      {
        label: "Application",
        value: "Surveying, construction layout, and land measurement",
      },
      { label: "Design", value: "Field-ready, durable, and easy to transport" },
    ],
    brochure: {
      label: "Big Prism Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  //fibre-levellng-staff

  "fibre-levellng-staff": {
    slug: "fibre-levellng-staff",
    title: "Fibre Levellng Staff",
    brand: "Nikon",
    category: "Survey Accessories",
    tagline: "Fibre Levelling Staff, 5M long and 7.6M long",
    description: `
Fibre Levelling Staff, 5M long and 7.6M long
`,
    price: "₹6300",
    mrp: "₹7200",
    savings: "12.50% OFF",
    badges: ["In Stock", "Survey Accessories"],
    rating: "4.8 · 72 verified reviews",
    sku: "Fibre Levellng Staff",
    images: [
      "/upload/products/fibre-levellng-staff/1.png",
      "/upload/products/fibre-levellng-staff/2.png",
    ],
    inTheBox: [
      "1× Fibre Levellng Staff",
      "1× Carrying case",
      "1× Plumb bob",
      "1× Manual",
    ],
    features: [
      {
        title: "Waterproof and corrosion-resistant",
        body: "Built with waterproof, corrosion-resistant materials to deliver reliable performance in challenging outdoor and wet environments.",
      },
      {
        title: "Safe non-conductive construction",
        body: "Manufactured using non-conductive materials, making it suitable for surveying applications where electrical safety is important.",
      },
      {
        title: "Ergonomic profile design",
        body: "Features a rectangular-oval shape with flat front and back surfaces and rounded corners for a comfortable grip and easy handling.",
      },
      {
        title: "Universal spring-loaded button",
        body: "Equipped with a universal spring-loaded button for quick, secure attachment and smooth field operation.",
      },
      {
        title: "Protective carrying case",
        body: "Supplied with a sturdy nylon carrying case that protects the equipment during transportation and storage.",
      },
    ],

    specs: [
      { label: "Product type", value: "Surveying Accessory" },
      {
        label: "Material",
        value: "Non-conductive, corrosion-resistant construction",
      },
      { label: "Water resistance", value: "Waterproof design" },
      {
        label: "Profile",
        value: "Rectangular-oval with flat faces and rounded corners",
      },
      { label: "Locking mechanism", value: "Universal spring-loaded button" },
      {
        label: "Carrying case",
        value: "Heavy-duty nylon carrying case included",
      },
      { label: "Application", value: "Surveying and field measurement" },
      {
        label: "Weather resistance",
        value: "Suitable for outdoor and harsh environments",
      },
      { label: "Design", value: "Lightweight, durable, and field-ready" },
    ],
    brochure: {
      label: "Fibre Levellng Staff Brochure — (English)",
      href: "",
      meta: "PDF · 2.0 MB · English",
    },
  },

  // LS1 SLAM Scanner

  "ls1-slam-scanner": {
    slug: "ls1-slam-scanner",
    title: "LS1 SLAM Scanner",
    brand: "Hi-Target",
    category: "SLAM / LiDAR Scanners",
    tagline:
      "LS1 SLAM Scanner for precise real-time 3D scanning and mapping in indoor and outdoor environments.",
    description: `
The LS1 SLAM Scanner delivers fast, centimeter-level 3D scanning with integrated LiDAR and vision sensors. It produces real-time color point clouds, supports instant accuracy feedback, and adapts automatically to both indoor and outdoor conditions for efficient survey workflows.
`,
    price: "₹6,30,000",
    mrp: "₹7,20,000",
    savings: "12.50% OFF",
    badges: ["In Stock", "SLAM Scanner"],
    rating: "4.8 · 72 verified reviews",
    sku: "LS1 SLAM Scanner",
    images: ["/upload/products/ls1-slam-scanner/1.png"],
    inTheBox: [
      "1× LS1 SLAM Scanner",
      "1× Carrying case",
      "1× Power adapter",
      "1× User manual",
    ],
    features: [
      {
        title: "High-precision SLAM scanning",
        body: "Captures dense 3D point clouds with centimeter-level accuracy using integrated LiDAR and camera sensors.",
      },
      {
        title: "Indoor and outdoor mapping",
        body: "Automatically adjusts to varying environments without manual calibration or GPS dependence.",
      },
      {
        title: "Real-time color point cloud output",
        body: "Provides live colorized scan data for instant on-site validation and decision-making.",
      },
      {
        title: "Fast data export",
        body: "Supports onboard storage and USB transfer for quick handoff to post-processing software.",
      },
      {
        title: "Rugged field-ready design",
        body: "Built for reliable on-site use with durable construction and protective carrying case.",
      },
    ],

    specs: [
      { label: "Product type", value: "SLAM 3D Scanner" },
      { label: "Scan range", value: "Up to 100 m" },
      { label: "Accuracy", value: "Centimeter-level precision" },
      { label: "Sensor type", value: "LiDAR + vision sensors" },
      {
        label: "Point cloud output",
        value: "Real-time colorized point clouds",
      },
      { label: "Battery runtime", value: "Up to 8 hours" },
      { label: "Storage", value: "Internal memory + USB export" },
      { label: "Connectivity", value: "Wi-Fi and USB-C" },
      { label: "Application", value: "Indoor/outdoor survey and mapping" },
    ],
    brochure: {
      label: "LS1 SLAM Scanner Brochure — (English)",
      href: "/upload/products/ls1-slam-scanner/ls1-slam-scanner-EN-20250320s.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },

  // Hi-LiDAR

  "hi-lidar": {
    slug: "hi-lidar",
    title: "Hi-LiDAR",
    brand: "Hi-Target",
    category: "SLAM / LiDAR Scanners",
    tagline:
      "Hi-LiDAR software for fast, accurate LiDAR point cloud processing and analysis.",
    description: `
Hi-LiDAR is a complete 3D LiDAR point cloud processing software developed by Hi-Target. It integrates pre-processing, registration, cleaning, analysis, and export tools into one platform to improve survey productivity and data quality.
`,
    price: "₹63,000",
    mrp: "₹72,000",
    savings: "12.50% OFF",
    badges: ["In Stock", "Software"],
    rating: "4.8 · 72 verified reviews",
    sku: "Hi-LiDAR",
    images: ["/upload/products/hi-lidar/1.png"],
    inTheBox: [
      "1× Hi-LiDAR license key",
      "1× Installation guide",
      "1× User manual",
    ],
    features: [
      {
        title: "All-in-one point cloud workflow",
        body: "Process LiDAR data from import through registration, cleaning, editing, and export in a single software environment.",
      },
      {
        title: "Automatic registration and alignment",
        body: "Align multiple scans automatically with high accuracy for fast and consistent project delivery.",
      },
      {
        title: "Advanced noise filtering",
        body: "Remove stray points and outliers using intelligent filtering tools for cleaner, more reliable models.",
      },
      {
        title: "Multi-format export",
        body: "Export processed point clouds to LAS, LAZ, E57, XYZ and other common surveying formats.",
      },
      {
        title: "Interactive 3D visualization",
        body: "View and inspect point cloud data in 3D with measurement, annotation, and slicing tools.",
      },
    ],

    specs: [
      { label: "Software type", value: "LiDAR point cloud processing" },
      { label: "Supported formats", value: "LAS, LAZ, E57, XYZ, PLY" },
      { label: "Platform", value: "Windows 10 / 11" },
      {
        label: "Key functions",
        value: "Registration, denoising, segmentation, export",
      },
      { label: "Output", value: "Geo-referenced point clouds and mesh models" },
      { label: "License", value: "Single-user perpetual license" },
      { label: "GPU acceleration", value: "Supported for faster processing" },
      { label: "Language", value: "English UI" },
      {
        label: "Application",
        value: "LiDAR survey, mapping, BIM coordination",
      },
    ],
    brochure: {
      label: "Hi-LiDAR Brochure — (English)",
      href: "/upload/products/hi-lidar/hi-lidar-brochure-en.pdf",
      meta: "PDF · 1.0 MB · English",
    },
  },
};

const nikonProducts = [
  {
    title: "HTS-521L10 Reflectorless Total Station",
    subtitle: "HTS-521L10 has a new optical structure design.",
    image: "/upload/normalImag/ProdImg500006.png",
  },
  {
    title: "HTS-420R Dual-axis Total Station",
    subtitle:
      "HTS-420R dual-axis reflectorless total station provides an efficient measurement experience.",
    image: "/upload/normalImag/ProdImg176340.png",
  },
  {
    title: "HTS-720 Android Total Station",
    subtitle:
      "HTS-720 Android Total Station for accurate surveying and construction measurements.",
    image: "/upload/normalImag/ProdImg285641.png",
  },
];

const hitargetProducts = [
  {
    title: "Nikon N&K Series",
    subtitle:
      "High-precision total stations for surveying and construction jobs.",
    image: "/upload/normalImag/ProdImg458836.png",
  },
  {
    title: "Nikon XF Series",
    subtitle:
      "Fast, reliable performance for long-range reflectorless measurements.",
    image: "/upload/normalImag/ProdImg792697.png",
  },
  {
    title: "Nikon XS Series",
    subtitle: "Compact field-ready units with sunlight-readable color display.",
    image: "/upload/normalImag/ProdImg176340.png",
  },
];

const galleryImages = [
  "/upload/normalImag/ProdImg792697.png",
  "/upload/normalImag/ProdImg176340.png",
  "/upload/normalImag/ProdImg285641.png",
  "/upload/normalImag/ProdImg458836.png",
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

const features = [
  {
    title: "New Optical Structure",
    body: "Redesigned optics for superior light gathering and edge-to-edge clarity in field conditions.",
  },
  {
    title: "Reflectorless 1000m",
    body: "Industry-leading non-prism measurement reaches up to one kilometer with millimeter precision.",
  },
  {
    title: "Sunlight-readable Display",
    body: "2.8-inch HD color screen stays legible in direct sunlight.",
  },
  {
    title: "All-day Battery",
    body: "3000 mAh Li-ION with Type-C fast charging for extended jobsite use.",
  },
  {
    title: "Trigger Key",
    body: "One-touch capture on the side panel speeds repetitive survey workflows.",
  },
  {
    title: "Self-Calibration",
    body: "Built-in calibration keeps the instrument accurate between services.",
  },
];

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
    <div className="group overflow-hidden rounded-3xl border border-[var(--hairline)] bg-[var(--paper)] shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-[4/5] overflow-hidden bg-[var(--ivory)]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)] mb-4">
          Nikon Total Station
        </div>
        <h3
          className="font-serif text-xl text-[var(--ink)] leading-tight"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          {subtitle}
        </p>
        <div className="mt-6 flex flex-nowrap gap-3">
          <a
            href="#specs"
            className="inline-flex min-w-[150px] h-10 items-center justify-center rounded-full border border-[var(--ink)] px-3 text-sm font-medium hover:bg-[var(--ink)] hover:text-[var(--ivory)] transition-colors"
          >
            View Specification
          </a>
          <a
            href="#contact"
            className="inline-flex min-w-[150px] h-10 items-center justify-center rounded-full bg-[var(--ink)] px-3 text-sm font-medium text-[var(--ivory)] hover:bg-[var(--cobalt)] transition-colors"
          >
            Quick Quote
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductCategoryPage() {
  return (
    <div className="min-h-screen bg-[#fbf5ec] text-[var(--ink)]">
      <SiteHeader />

      <div className="border-b border-[rgba(15,23,42,0.08)] bg-[#fbf5ec]">
        <div className="container-page mx-auto px-6 py-3 flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-[0.35em] text-[var(--muted-foreground)] font-mono">
          <span>HOME</span>
          <span className="text-[var(--ink)]">&gt;&gt;</span>
          <span>PRODUCTS</span>
          <span className="text-[var(--ink)]">&gt;&gt;</span>
          <span>HI-TARGET</span>
          <span className="text-[var(--ink)]">&gt;&gt;</span>
          <span className="font-semibold text-[#c21f2d]">TOTAL STATION</span>
        </div>
      </div>

      <main className="container-page mx-auto px-6 py-16">
        <section className="grid gap-10 lg:grid-cols-[1.45fr_1fr] items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.12)] bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--ink)] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--ink)]" />
              Nikon authorized partner
            </div>

            <div className="mt-10">
              <h1
                className="font-serif text-5xl md:text-[5.8rem] leading-[0.95] text-[var(--ink)]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Advanced Surveying
                <span className="block italic text-5xl md:text-[5.8rem]">
                  Total Stations
                </span>
              </h1>
            </div>

            <div className="mt-10 border-l-2 border-[var(--ink)] pl-6">
              <p className="text-base leading-8 text-[var(--ink-soft)]">
                Advanced total stations for surveying, construction, and
                infrastructure applications with precision, speed, and rugged
                performance.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => openRequestQuote({})}
                className="inline-flex min-w-[20px] items-center justify-between rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition hover:bg-[#111]"
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
              src="/upload/normalImag/ProdImg458836.png"
              alt="Advanced Total Station"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-20 grid gap-12">
          <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
                Nikon Total Stations
              </p>
              <h2
                className="mt-4 font-serif text-4xl leading-tight text-[var(--ink)]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Nikon Total Stations
              </h2>
            </div>
            <p className="text-[15px] leading-8 text-[var(--ink-soft)]">
              Nikon Total Stations are renowned in surveying and construction
              for their legendary optical clarity, lightweight design, and
              long-lasting hot-swappable battery life. Current line-ups include
              the mechanical Nikon N and K series, the autofocus Nikon XF, and
              the high-precision Nikon XS.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {nikonProducts.map((product) => (
              <CategoryCard
                key={product.title}
                title={product.title}
                subtitle={product.subtitle}
                image={product.image}
              />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="max-w-4xl">
            <h2
              className="font-serif text-4xl leading-tight text-[var(--ink)]"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Hi-Target Total Stations
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--ink-soft)]">
              Hi-Target Total Stations provide high-precision surveying
              instruments for land mapping, construction, and mining. Ranging
              from manual optical devices to smart Android systems and robotic
              units, they feature absolute encoding, reflectorless measurement
              up to 1000 meters, and dual-axis compensation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {hitargetProducts.map((product) => (
              <CategoryCard
                key={product.title}
                title={product.title}
                subtitle={product.subtitle}
                image={product.image}
              />
            ))}
          </div>
        </section>

        <section
          id="brochure"
          className="mt-24 rounded-[2rem] border border-[var(--hairline)] bg-[var(--ivory)] p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
                Product Resources
              </p>
              <h3
                className="mt-3 font-serif text-3xl leading-tight text-[var(--ink)]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Download the Nikon Total Stations brochure
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[var(--ink-soft)]">
                Get detailed specifications, features, and model comparisons for
                Nikon total stations in one convenient PDF.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[var(--ink)] px-8 text-sm font-semibold text-[var(--ivory)] hover:bg-[var(--cobalt)] transition-colors"
            >
              <Download className="h-4 w-4" /> Download Brochure
            </a>
          </div>
        </section>

        <section id="specs" className="mt-24">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
                Category overview
              </p>
              <h3
                className="mt-3 font-serif text-3xl leading-tight text-[var(--ink)]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Complete Total Station specifications
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[var(--ink-soft)]">
                Compare the key technical features and choose the right Nikon
                total station for your site survey, construction control, or
                cadastral work.
              </p>
            </div>

            <div className="grid gap-3 rounded-3xl border border-[var(--hairline)] bg-[var(--paper)] p-6 shadow-sm">
              {specs.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-4 ${index % 2 === 0 ? "bg-[var(--ivory)]" : "bg-transparent"}`}
                >
                  <span className="text-sm uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                    {item.label}
                  </span>
                  <span className="font-semibold text-[var(--ink)]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mt-24 rounded-[2rem] border border-[var(--hairline)] bg-white p-10 shadow-sm"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
                Request a quote
              </p>
              <h3
                className="mt-3 font-serif text-3xl leading-tight text-[var(--ink)]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Need pricing or technical advice?
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[var(--ink-soft)]">
                Our Nikon total station specialists can help you select the
                right model, share availability, and prepare a formal quotation
                for your project.
              </p>
            </div>
            <a
              href="tel:09971615537"
              className="inline-flex h-16 items-center justify-center rounded-full bg-[var(--ink)] px-8 text-sm font-semibold text-[var(--ivory)] hover:bg-[var(--cobalt)] transition-colors"
            >
              Call +91 99716 15537
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function ProductDetailPage() {
  const path = window.location.pathname.replace(/\/+$/g, "");
  const slug = path.startsWith("/product/")
    ? path.split("/")[2]
    : path.startsWith("/product-detail/")
      ? path.split("/")[2]
      : "";
  const product = PRODUCT_DATA[slug];
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<
    "overview" | "features" | "specs" | "brochure" | "about" | "faq"
  >("overview");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
        <div className="rounded-3xl border border-border bg-surface p-12 text-center shadow-md">
          <h1 className="text-3xl font-semibold">Product not found</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            The requested product page does not exist.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const descriptionLines = product.description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const aboutLines = (product.about ?? product.description)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const faqList = product.faq ?? [
    {
      question: "How can I request a quote for this product?",
      answer:
        "Click the Request Quote button and submit your contact details. Our team will get back to you with pricing and availability.",
    },
    {
      question: "Is shipping included?",
      answer:
        "Yes, this product includes free shipping pan-India as shown on the product page.",
    },
    {
      question: "Can I get support after purchase?",
      answer:
        "Yes, we offer field support and calibration services through our authorized dealer network.",
    },
  ];

  const renderRichContent = (lines: string[]) => {
    const content: JSX.Element[] = [];
    let listItems: string[] = [];
    let tableRows: string[][] = [];
    let currentSection = "";
    let inMarkdownTable = false;

    const flushList = () => {
      if (!listItems.length) return;
      content.push(
        <ul
          key={`list-${content.length}`}
          className="list-disc space-y-2 pl-6 text-sm text-muted-foreground"
        >
          {listItems.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>,
      );
      listItems = [];
    };

    const flushTable = () => {
      if (!tableRows.length) return;

      const isSeparatorRow = (cells: string[]) =>
        cells.every((cell) => /^[-\s]+$/.test(cell));

      const header = tableRows[0];
      const body =
        tableRows.length > 1 && isSeparatorRow(tableRows[1])
          ? tableRows.slice(2)
          : tableRows.slice(1);

      content.push(
        <div
          key={`table-${content.length}`}
          className="overflow-x-auto rounded-xl border border-border bg-surface"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/30 text-left text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {header.map((cell, index) => (
                  <th key={index} className="px-6 py-3">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, rowIndex) => (
                <tr
                  key={`${row.join("-")}-${rowIndex}`}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-muted/30"}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-3 text-sm text-muted-foreground"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      tableRows = [];
      currentSection = "";
      inMarkdownTable = false;
    };

    const renderInlineFormatting = (text: string) => {
      const parts: (string | JSX.Element)[] = [];
      let lastIndex = 0;
      const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
      let match: RegExpExecArray | null;

      while ((match = regex.exec(text)) !== null) {
        const [token, , boldText, italicText] = match;
        if (match.index > lastIndex) {
          parts.push(text.slice(lastIndex, match.index));
        }

        if (boldText) {
          parts.push(
            <strong key={match.index} className="font-semibold text-foreground">
              {boldText}
            </strong>,
          );
        } else if (italicText) {
          parts.push(
            <em
              key={match.index}
              className="not-italic font-medium text-foreground"
            >
              {italicText}
            </em>,
          );
        }

        lastIndex = match.index + token.length;
      }

      if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
      }

      return parts;
    };

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      if (!line) {
        flushList();
        flushTable();
        continue;
      }

      const trimmedLine = line.trim();
      const isMarkdownTableRow = trimmedLine.startsWith("|");
      if (isMarkdownTableRow) {
        const cells = trimmedLine
          .split("|")
          .slice(1, -1)
          .map((cell) => cell.trim());

        if (cells.length === 0) {
          continue;
        }

        if (!inMarkdownTable) {
          flushList();
          flushTable();
          inMarkdownTable = true;
        }

        tableRows.push(cells);
        continue;
      }

      if (inMarkdownTable) {
        flushTable();
      }

      const headingMatch = line.match(/^(#{1,3})\s+(.*)$/);
      if (headingMatch) {
        flushList();
        flushTable();
        currentSection = headingMatch[2].trim();
        const level = headingMatch[1].length;
        const headingTag = level === 1 ? "h3" : "h4";
        const className =
          level === 1
            ? "mt-6 mb-2 text-xl font-semibold text-foreground"
            : "mt-0 text-lg font-semibold text-foreground";

        content.push(
          React.createElement(
            headingTag,
            { key: `heading-${i}`, className },
            renderInlineFormatting(headingMatch[2].trim()),
          ),
        );
        continue;
      }

      if (line.startsWith("-")) {
        if (
          currentSection === "Key Benefits of a High-Performance Echo Sounder"
        ) {
          const row = line.replace(/^-+\s*/, "").split(/:\s*/);
          if (row.length >= 2) {
            tableRows.push([row[0], row.slice(1).join(": ")]);
            continue;
          }
        }
        listItems.push(line.replace(/^-+\s*/, ""));
        continue;
      }

      flushList();
      flushTable();
      currentSection = "";

      const isSubheading =
        /^(Feature|Customer Benefit|What Influences|Industries That Benefit)/i.test(
          line,
        );
      if (isSubheading) {
        content.push(
          <div
            key={`subheading-${i}`}
            className="mt-6 text-sm font-semibold text-foreground"
          >
            {renderInlineFormatting(line)}
          </div>,
        );
        continue;
      }

      content.push(
        <p
          key={`paragraph-${i}`}
          className="text-sm leading-7 text-muted-foreground"
        >
          {renderInlineFormatting(line)}
        </p>,
      );
    }

    flushList();
    flushTable();
    return content;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center gap-2 text-xs text-muted-foreground font-mono uppercase tracking-wider">
          <a href="/" className="hover:text-foreground">
            Home
          </a>
          <ChevronRight className="h-3 w-3" />
          <a href="/" className="hover:text-foreground">
            Products
          </a>
          <ChevronRight className="h-3 w-3" />
          <a
            href={`/category/${toSlug(product.category)}`}
            className="hover:text-foreground"
          >
            {product.category}
          </a>
          <ChevronRight className="h-3 w-3" />
          <a
            href={`/category/${toSlug(product.category)}/${toSlug(product.brand)}`}
            className="hover:text-foreground"
          >
            {product.brand}
          </a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.title}</span>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12">
          <div>
            <div className="relative aspect-square bg-surface rounded-xl border border-border overflow-hidden group">
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-2 py-1 rounded">
                  In Stock
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest bg-accent text-accent-foreground px-2 py-1 rounded">
                  {product.savings}
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <button className="h-9 w-9 grid place-items-center rounded-full bg-surface/90 border border-border hover:bg-surface">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="h-9 w-9 grid place-items-center rounded-full bg-surface/90 border border-border hover:bg-surface">
                  <Share2 className="h-4 w-4" />
                </button>
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
                src={product.images[active]}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                View {String(active + 1).padStart(2, "0")} /{" "}
                {String(product.images.length).padStart(2, "0")}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square rounded-lg border bg-surface overflow-hidden transition-all ${
                    active === i
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-muted-foreground/40"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>{product.brand}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>{product.category}</span>
            </div>
            <h1 className="mt-3 text-5xl font-bold tracking-tight">
              {product.title}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
              {product.tagline}
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1 text-accent">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <span className="text-muted-foreground">{product.rating}</span>
              <span className="font-mono text-xs text-muted-foreground ml-auto">
                SKU · {product.sku}
              </span>
            </div>

            <div className="mt-8 border-t border-b border-border py-6 flex items-end gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Your Price
                </div>
                <div className="text-4xl font-bold">{product.price}</div>
              </div>
              <div className="pb-1.5">
                <div className="text-sm text-muted-foreground line-through">
                  {product.mrp}
                </div>
                <div className="text-sm font-semibold text-accent">
                  {product.savings}
                </div>
              </div>
              <div className="ml-auto text-right pb-1.5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Incl. GST
                </div>
                <div className="text-xs text-muted-foreground">
                  Free shipping pan-India
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                In the Box
              </div>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {product.inTheBox.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-stretch gap-3">
              <div className="flex items-center border border-border rounded-md">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="h-12 w-12 grid place-items-center hover:bg-muted"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-semibold">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="h-12 w-12 grid place-items-center hover:bg-muted"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => openRequestQuote({ product: product?.title })}
                className="flex-1 h-12 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </button>
              <button className="h-12 px-5 border border-border rounded-md font-semibold hover:bg-muted transition-colors">
                Enquire
              </button>
            </div>

            <div className="mt-8 grid grid-cols-4 gap-3 text-center">
              {[
                { i: Shield, t: "2-Year Warranty" },
                { i: Truck, t: "Free Shipping" },
                { i: Award, t: "Calibrated" },
                { i: Headphones, t: "Field Support" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-lg border border-border bg-surface p-3"
                >
                  <x.i className="h-4 w-4 mx-auto mb-1.5 text-primary" />
                  <div className="text-[11px] font-medium leading-tight">
                    {x.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="border-b border-border flex items-center gap-2 overflow-x-auto">
            {(
              [
                ["overview", "Overview"],
                ["features", "Features & Benefits"],
                ["specs", "Specifications"],
                ["brochure", "Brochures"],
                ["about", "About More"],
                ["faq", "FAQ"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-5 py-4 text-sm font-semibold relative transition-colors ${
                  tab === k
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                {tab === k && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="py-10">
            {tab === "overview" && (
              <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
                <div className="prose-like space-y-5 text-[15px] leading-relaxed text-foreground/90 max-w-2xl">
                  {/* <p className="text-xl text-foreground">{product.tagline}</p> */}
                  <div className="space-y-3">
                    {descriptionLines.map((line, index) => {
                      const isBullet = line.startsWith("-");
                      const isEmphasis =
                        line.includes("Choose the EDM for the work you do") ||
                        line.includes("Nikon XF: Time of Flight EDM") ||
                        line.includes("Nikon XF-HP: Phase Shift EDM") ||
                        line.includes(
                          "Nikon XF mechanical total station is built tough for all occasions",
                        ) ||
                        [
                          "Dual-axis Compensation",
                          "Absolute Encoding",
                          "High-performance MCU SMT32",
                          "Bluetooth",
                          "Data Storage",
                          "Backlight",
                          "Diagonal Eyepiece",
                          "Calibration Software",
                          "Data Transfer Software",
                        ].includes(line);

                      return (
                        <p
                          key={`${line}-${index}`}
                          className={isBullet ? "ml-4 list-disc" : ""}
                        >
                          {isEmphasis ? (
                            <span className="block text-[16px] font-semibold text-foreground">
                              {line}
                            </span>
                          ) : isBullet ? (
                            line.replace(/^-\s*/, "")
                          ) : (
                            line
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <aside className="rounded-xl border border-border bg-surface p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                    At a Glance
                  </div>
                  <dl className="space-y-3 text-sm">
                    {product.specs.slice(0, 5).map((s) => (
                      <div
                        key={s.label}
                        className="flex justify-between gap-4 border-b border-border/60 pb-2 last:border-0"
                      >
                        <dt className="text-muted-foreground">{s.label}</dt>
                        <dd className="font-semibold font-mono text-right">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>
            )}

            {tab === "features" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {product.features.map((f, i) => (
                  <div
                    key={f.title}
                    className="rounded-xl border border-border bg-surface p-6 hover:border-primary/40 transition-colors"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      0{i + 1} / 0{product.features.length}
                    </div>
                    <h3 className="mt-3 text-xl font-bold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {tab === "specs" && (
              <div className="space-y-6 max-w-3xl">
                {product.comparison && (
                  <div className="rounded-xl border border-border bg-surface overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/30 text-left text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          <th className="px-6 py-3">Model</th>
                          {product.comparison.columns.map((column) => (
                            <th key={column} className="px-6 py-3">
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {product.comparison.rows.map((row, rowIndex) => (
                          <tr
                            key={row.label}
                            className={
                              rowIndex % 2 === 0 ? "bg-white" : "bg-muted/30"
                            }
                          >
                            <td className="px-6 py-3 font-semibold text-sm text-[var(--ink)]">
                              {row.label}
                            </td>
                            {row.values.map((value, valueIndex) => (
                              <td
                                key={valueIndex}
                                className="px-6 py-3 text-sm text-muted-foreground"
                              >
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="rounded-xl border border-border bg-surface overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {product.specs.map((s, i) => (
                        <tr
                          key={s.label}
                          className={i % 2 === 0 ? "bg-muted/30" : ""}
                        >
                          <td className="px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-muted-foreground w-1/2">
                            {s.label}
                          </td>
                          <td className="px-6 py-3.5 font-semibold">
                            {s.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {tab === "about" && (
              <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
                <div className="space-y-5 text-[15px] leading-7 text-muted-foreground max-w-2xl">
                  {renderRichContent(aboutLines)}
                </div>
                <aside className="rounded-xl border border-border bg-surface p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                    Product Details
                  </div>
                  <dl className="space-y-3 text-sm">
                    {product.specs.slice(0, 5).map((s) => (
                      <div
                        key={s.label}
                        className="flex justify-between gap-4 border-b border-border/60 pb-2 last:border-0"
                      >
                        <dt className="text-muted-foreground">{s.label}</dt>
                        <dd className="font-semibold font-mono text-right">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>
            )}

            {tab === "faq" && (
              <div className="space-y-4 max-w-3xl">
                {faqList.map((faq, index) => (
                  <details
                    key={`${faq.question}-${index}`}
                    className="rounded-xl border border-border bg-surface overflow-hidden"
                  >
                    <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-foreground">
                      {faq.question}
                    </summary>
                    <div className="border-t border-border/60 px-6 py-4 text-sm text-muted-foreground">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            )}

            {tab === "brochure" && (
              <a
                href={product.brochure.href}
                className="inline-flex items-center gap-4 rounded-xl border border-border bg-surface p-6 hover:border-primary transition-colors"
              >
                <div className="h-12 w-12 rounded-md bg-primary text-primary-foreground grid place-items-center">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{product.brochure.label}</div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-0.5">
                    {product.brochure.meta}
                  </div>
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

export default ProductDetailPage;




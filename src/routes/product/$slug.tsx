import { openRequestQuote } from "../../lib/requestQuote";
import { useState } from "react";
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
      { label: "Minimum Readout", value: "1″/5″/10″ (0.3mgon/1.5mgon/3mgon) adjustable" },
      { label: "Angle Accuracy", value: "2″" },
      { label: "Single Prism", value: "3000 m (good condition)" },
      { label: "Three Prisms", value: "6000 m (good condition)" },
      { label: "Reflective Sheet", value: "800 m" },
      { label: "Distance Accuracy", value: "2 mm + 2 ppm" },
      { label: "Measuring Time (Fine/Quick/Tracking)", value: "1.5s / 1s / 0.5s" },
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
      { label: "Communication", value: "RS232, SD card, USB pen drive, mini-B, Bluetooth" },
      { label: "Internal Memory", value: "Approx. 20,000 points" },
      { label: "Data Format", value: "ASCII" },
      { label: "Operation System", value: "Real-time Operating System" },
      { label: "Display", value: "Backlight black and white, 192 × 96 pixels" },
      { label: "Character", value: "6 lines x 25 characters" },
      { label: "Keyboard", value: "2-sided alphanumeric backlit crystal keyboard" },
      { label: "Laser Plummet", value: "Laser point, 4 brightness levels / optional optical plummet" },
      { label: "Centering Accuracy", value: "1 mm at 1.5 m instrument height" },
      { label: "Battery Type", value: "Rechargeable Li-ion ZBA-400 7.4V / 3000mAh" },
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
      { label: "Satellite Systems", value: "GPS, GLONASS, Galileo, BeiDou, SBAS" },
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

  "irtk4": {
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
      { label: "Satellite Systems", value: "GPS, GLONASS, Galileo, BeiDou, SBAS" },
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

  "irtk5": {
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
    images: [
      "/upload/products/irtk5/1.png",
      "/upload/products/irtk5/2.png",
    ],
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
      { label: "Satellite Systems", value: "GPS, GLONASS, Galileo, BeiDou, SBAS" },
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

  "vrtk": {
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
    images: [
      "/upload/products/vrtk/1.png",
      "/upload/products/vrtk/2.png",
    ],
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
      { label: "Satellite Systems", value: "GPS, GLONASS, Galileo, BeiDou, SBAS" },
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

  "ihand55": {
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
      { label: "Storage", value: "32GB internal, expandable to 128GB via T-Flash" },
      { label: "Display", value: "5.5-inch high-brightness outdoor color capacitive touch screen" },
      { label: "Resolution", value: "720 × 1280, sunlight-visible, 600 nits typical" },
      { label: "Input", value: "Physical 50-key full keyboard with separate numbers and letters" },
      { label: "GNSS Positioning", value: "Built-in GNSS antenna; GPS + BeiDou + GLONASS; AGPS support" },
      { label: "Cellular", value: "4G full Netcom, dual SIM dual standby, built-in eSIM with 3 years data" },
      { label: "WiFi", value: "IEEE 802.11 b/g/n, WAPI, AP mode" },
      { label: "Bluetooth", value: "Bluetooth 2.1 + 4.0 + 5.0" },
      { label: "NFC", value: "Supports NFC IGRS" },
      { label: "USB", value: "USB Type-C with OTG support" },
      { label: "Battery", value: "8500mAh non-removable lithium battery with fast charge" },
      { label: "Working Hours", value: "Up to 18 hours continuous use" },
      { label: "Camera", value: "13MP camera with high-brightness LED flash and torch" },
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
      { label: "Web UI", value: "Built-in web interface for device management" },
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
      { label: "Tilt Survey Accuracy (Horizontal)", value: "8 mm + 0.7 mm/° (0°–60°)" },
      { label: "Tilt Survey Accuracy (Vertical)", value: "15 mm + 0.7 mm/° (0°–60°)" },
      { label: "GNSS Channels", value: "1408 channels" },
      { label: "Supported Signals", value: "BDS, GPS, GLONASS, GALILEO, QZSS, NavIC, SBAS, PPP" },
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
        title: "Advanced SLAM RTK Technology for 3D mapping and point cloud data capture",
        body: "Delivers precise SLAM-enabled positioning and dense 3D point cloud capture across challenging terrain.",
      },
      {
        title: "Multi-constellation GNSS support for stable and reliable positioning",
        body: "Combines GPS, GLONASS, BDS, Galileo and NavIC for faster fixes and robust reception in obstructed environments.",
      },
      {
        title: "High-performance IMU tilt compensation for flexible field measurements",
        body: "Automatic tilt compensation improves survey accuracy when the instrument is used off-vertical.",
      },
      {
        title: "Industrial-grade rugged design for construction and infrastructure projects",
        body: "Built for harsh field use with rugged housing, IP protection, and long battery runtime.",
      },
      {
        title: "Fast data processing and seamless workflow integration",
        body: "Integrated workflow tools and rapid data sync keep field surveys efficient and connected.",
      },
    ],
    
    specs: [
      { label: "RTK Positioning Accuracy", value: "±8 mm + 1 ppm" },
      { label: "SLAM Point Cloud Accuracy", value: "Better than 2 cm in normal surveying conditions" },
      { label: "GNSS Channels", value: "1408 channels" },
      { label: "Supported GNSS Signals", value: "GPS, GLONASS, Galileo, BeiDou, QZSS, NavIC, SBAS" },
      { label: "Tilt Compensation Range", value: "±60° automatic correction" },
      { label: "Battery Runtime", value: "Up to 10 hours per battery pack" },
      { label: "Data Storage", value: "64 GB internal memory + USB export support" },
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
    images: [
      "/upload/products/as-2cae-7c/1.png",

    ],
    inTheBox: [
      "1× Hi-Target AS-2C/AE-7C",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],

    features: [
      {
        title: "Choice of magnification: 20x (AX-2S), 24x (AC-2S), 28x (AP-8), 30x (AS-2/2C), 32x (AE-7/7C)",
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
        title: "Nikon optics effectively let in more light, so you see brighter, sharper images-especially in low-light conditions",
        body: "Premium Nikon lenses maximize brightness and clarity, making targets easier to see even in dim light.",
      },
    ],
    
    specs: [
      { label: "Model Variants", value: "AS-2, AS-2C, AE-7, AE-7C" },
      { label: "Magnification", value: "30x (AS-2 / AS-2C), 32x (AE-7 / AE-7C)" },
      { label: "Minimum Focusing Distance", value: "0.75 m" },
      { label: "Compensator", value: "Automatic air-dampened compensator" },
      { label: "Telescopes", value: "Waterproof, nitrogen-filled Nikon optics" },
      { label: "Water Resistance", value: "Waterproof / water-resistant construction" },
      { label: "Tripod Compatibility", value: "Flat-head and spherical-head tripods" },
      { label: "Eyepiece", value: "Standard optical sight lens with optional diagonal eyepiece" },
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
    images: [
      "/upload/products/ac-2sap-8/1.webp",

    ],
    inTheBox: [
      "1× Hi-Target AC-2S/AP-8",
      "1× Battery Pack",
      "1× Antenna Cable",
      "1× Carrying Case",
    ],

    features: [
      {
        title: "Choice of magnification: 20x (AX-2S), 24x (AC-2S), 28x (AP-8), 30x (AS-2/2C), 32x (AE-7/7C)",
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
        title: "Nikon optics effectively let in more light, so you see brighter, sharper images-especially in low-light conditions",
        body: "Premium Nikon lenses maximize brightness and clarity, making targets easier to see even in dim light.",
      },


    ],
    
    specs: [
      { label: "Model Variants", value: "AC-2S, AP-8" },
      { label: "Magnification", value: "24x (AC-2S), 28x (AP-8)" },
      { label: "Minimum Focusing Distance", value: "0.75 m" },
      { label: "Compensator Type", value: "Magnetic-dampened automatic compensator" },
      { label: "Stadia Ratio", value: "1:100" },
      { label: "Horizontal Circle", value: "360° graduated circle" },
      { label: "Optical System", value: "Nikon high-power optics with bright, sharp sighting" },
      { label: "Construction", value: "Water-resistant metal housing" },
      { label: "Tripod Compatibility", value: "Flat-head and spherical-head tripods" },
      { label: "Eyepiece", value: "Detachable eyepiece lens for close or steep observations" },
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
    tagline:
      "GOL 26 D PROFESSIONAL OPTICAL LEVEL",
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
        body: "Standard 5/8\" tripod thread gives a stable connection with professional survey tripods.",
      },
    ],
    
    specs: [
      { label: "Magnification", value: "26×" },
      { label: "Dust and splash protection", value: "IP54" },
      { label: "Unit of measure", value: "360 degrees" },
      { label: "Accuracy", value: "± 1.6 mm at 30 m" },
      { label: "Working range", value: "100 m" },
      { label: "Tripod thread", value: "5/8\"" },
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
    tagline:
      "GOL 32 D PROFESSIONAL OPTICAL LEVEL",
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
    images: [
      "/upload/products/gol-32d/1.webp",
    ],
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
        body: "Standard 5/8\" tripod thread ensures stable, professional mounting.",
      },
    ],
    
    specs: [
      { label: "Magnification", value: "32×" },
      { label: "Dust and splash protection", value: "IP54" },
      { label: "Unit of measure", value: "360 degrees" },
      { label: "Accuracy", value: "± 1 mm at 30 m" },
      { label: "Working range", value: "120 m" },
      { label: "Tripod thread", value: "5/8\"" },
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
      { label: "Tripod thread", value: "5/8\"" },
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
    images: [
      "/upload/products/ne-100ne-101/1.png",
    ],
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
        body: "Choose 10\" accuracy with NE-100 or 7\" accuracy with NE-101, while the higher models offer 5\" precision.",
      },
    ],
    
    specs: [
      { label: "Instrument Type", value: "Electronic digital theodolite" },
      { label: "Angle Accuracy", value: "10\" (NE-100), 7\" (NE-101)" },
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
    category: "Auto Digital Levels",
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
    images: [
      "/upload/products/ne-102ne-103/1.png",
    ],
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
      { label: "Water Resistance", value: "IP56 (NE-102/103) / IP54 (NE-100/101)" },
      { label: "Models", value: "NE-100, NE-101, NE-102, NE-103" },
    ],

    brochure: {
      label: "Bosch GOL-32D Brochure — (English)",
      href: "/upload/products/ne-102ne-103/BROCH56787.pdf",
      meta: "PDF · 2.0 MB · English",
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
    "overview" | "features" | "specs" | "brochure"
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
              <button onClick={() => openRequestQuote({ product: product?.title })} className="flex-1 h-12 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
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

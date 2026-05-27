import { ArrowRight, ShieldCheck, Wrench, Headphones, Award, MapPin, Mail, Phone, ArrowUpRight, Download, Calendar, MessageSquare, Plus, Minus, Building2, TrainFront, Mountain, Waves, HardHat, Factory } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-survey.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { MobileCtaBar } from "@/components/mobile-cta-bar";



const products = [
  { title: "Mileseey S50 Laser Distance Meter (Green Beam)", desc: "Mileseey S50 Laser Distance Meter is a compact and highly accurate digital measuring tool designed for construction, engineering, and site work. It de...", img: "/upload/normalImag/ProdImg875035.png" },
  { title: "V700S SLAM RTK", desc: "Hi-Target V700S SLAM RTK System combines GNSS RTK and SLAM technology to deliver accurate survey results in complex and obstructed environments. Ideal...", img: "/upload/normalImag/ProdImg965883.png" },
  { title: "Hi-Target V600L Laser RTK System", desc: "Hi-Target V600L Laser RTK is a GNSS-based laser survey system designed for accurate land surveying and construction projects where direct point access...", img: "/upload/normalImag/ProdImg922461.png" },
  { title: "Cable/Pipe locator", desc: "Pipeline detection (cable position tracking, direction display, depth measurement, current measurement), cable identification, A word frame fault sear...", img: "/upload/normalImag/ProdImg191018.jpg" },
  { title: "DP20 Pro Bilateral Laser Measure", desc: "Smart Bilateral Laser Measure One-way/two-way measure coaxial optics patent technology Middle Laser mark beam Real-time APP synchronic-zation of d...", img: "/upload/normalImag/ProdImg910895.png" },
  { title: "D9 Pro Laser Measure with Dual Aligning Indicators", desc: "The Mileseey D9 Pro represents the groundbreaking revolution in laser measurement tools, boasting innovative and breakthrough measuring features that...", img: "/upload/normalImag/ProdImg967286.png" },
  { title: "DT20 Digital Laser Tape Measure with Bluetooth", desc: "High Accuracy | Fast Speed HD LCD Backlit Screen, clear reading. Nylon Coating so that it can be wear-resistant, non-slip, and drop-resistant. TAPE M...", img: "/upload/normalImag/ProdImg927304.png" },
  { title: "XTAPE1 Digital Tape Measure with Laser", desc: "XTAPE1 smartly combines a digital tape with a laser measuring part in one sleek modular design, offering users effortless measuring solutions to any d...", img: "/upload/normalImag/ProdImg755754.png" },
];

const categories = [
  ["Slam2000", "/upload/categoryImg/IMG9570.png"],
  ["Cable/Pipe locator", "/upload/categoryImg/IMG5776.png"],
  ["Outdoor Laser Measure", "/upload/categoryImg/IMG2031.png"],
  ["Digital Laser Tape Measure", "/upload/categoryImg/IMG4902.png"],
  ["Space Master Series", "/upload/categoryImg/IMG4245.png"],
  ["Auto Levels", "/upload/categoryImg/IMG8530.jpg"],
  ["Total Stations", "/upload/categoryImg/IMG3405.jpg"],
  ["Digital Theodolites", "/upload/categoryImg/IMG1269.jpg"],
  ["Survey Accessories", "/upload/categoryImg/IMG8319.jpg"],
  ["Auto Level", "/upload/categoryImg/IMG5260.png"],
  ["Laser Distance Meters", "/upload/categoryImg/IMG4242.png"],
  ["Laser Levels", "/upload/categoryImg/IMG9616.png"],
  ["Total Station", "/upload/categoryImg/IMG1651.png"],
  ["GNSS RTK", "/upload/categoryImg/IMG8165.png"],
  ["Marine & Hydrographic", "/upload/categoryImg/IMG6308.png"],
  ["Soil Testing", "/upload/categoryImg/IMG7897.png"],
  ["Aggregate Testing", "/upload/categoryImg/IMG3870.png"],
  ["Concrete Testing", "/upload/categoryImg/IMG7739.png"],
  ["Cement Testing", "/upload/categoryImg/IMG7139.png"],
  ["Asphalt & Bitumen Testing", "/upload/categoryImg/IMG1653.png"],
  ["Single Frequency", "/upload/categoryImg/IMG7467.png"],
  ["HyDrone", "/upload/categoryImg/IMG1760.png"],
  ["Dual Frequency", "/upload/categoryImg/IMG7894.png"],
  ["Single Frequency Gpr", "/upload/categoryImg/IMG7642.png"],
  ["Triple Frequency", "/upload/categoryImg/IMG3404.png"],
  ["SELF-LEVELING LEVEL", "/upload/categoryImg/IMG8799.png"],
  ["Slam200", "/upload/categoryImg/IMG7273.png"],
  ["Slam100", "/upload/categoryImg/IMG5319.png"],
];

const brandIds = ["IMG1235","IMG1799","IMG7597","IMG4516","IMG5244","IMG5863","IMG9430","IMG5577","IMG6170","IMG4081","IMG4576","IMG1307","IMG5056","IMG1452","IMG5997","IMG9327","IMG4209","IMG9042","IMG4389","IMG4296","IMG5735","IMG7940","IMG8415"];

export function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pb-16 lg:pb-0">
        <Hero />
        <TrustStrip />
        <About />
        <WhySankon />
        <Products />
        <Categories />
        <Industries />
        <DealBanner />
        <Service />
        <ServiceOfferings />
        <Resources />
        <Faq />
        <Clients />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <MobileCtaBar />
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="border-b border-[var(--hairline)]">
      <div className="container-page pt-16 md:pt-24 pb-16 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 eyebrow">
            <span className="h-px w-8 bg-[var(--ink)]" />
            <span>Est. — Authorized Distributor & Service Centre · India</span>
          </div>

          <h1
            className="mt-8 font-serif text-[44px] md:text-[68px] lg:text-[84px] leading-[0.98] tracking-[-0.03em] text-[var(--ink)]"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Sankon <span className="italic font-normal text-[var(--ink-soft)]">Technologies</span> India Pvt Ltd.
          </h1>

          <p className="mt-10 text-[15px] md:text-base leading-[1.75] text-[var(--ink-soft)] max-w-2xl">
            Sankon Technologies India Pvt Ltd are the Authorized Distributors and Service Centre in INDIA for M/s Trimble Navigation India Pvt Ltd (Owned Subsidiary of Trimble Europe BV, The Netherlands – a world-leading manufacturer of Surveying & GNSS Equipments and also worldwide resellers of Nikon Surveying Equipments manufactured by Nikon-Trimble Co Ltd having factory at Technoport Mitsuiseimei Building, 2-16-2, Minamikamata 2-chome, Ota-ku, Tokyo 144-0035 Japan) for their entire range of Nikon Surveying Instruments i.e. Total Stations, Auto and Digital Levels, Digital Theodolites, Geodetic Global Positioning Systems, DGPS, GNSS, Civil/Survey Engineering Software and other allied Surveying Instruments and Spectra Precision Total Stations.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-[var(--ink)] text-[var(--ivory)] pl-6 pr-2 py-2 text-sm font-medium hover:bg-[var(--cobalt)] transition-colors group">
              Get Official Quotation
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--ink)]">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a href="tel:09971615537" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] border-b border-[var(--ink)]/30 hover:border-[var(--ink)] pb-1">
              <Phone className="h-3.5 w-3.5" /> Talk to Expert
            </a>
            <a href="#resources" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--ink)] border-b border-transparent hover:border-[var(--ink)] pb-1">
              Request Demo
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={heroImg} alt="Field surveyor with total station" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
              <div className="eyebrow text-white/80">— Field operations</div>
              <div className="font-mono-tech text-[10px] text-white/80">N 28.58° · E 77.32°</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust Strip ---------- */
function TrustStrip() {
  const items = [
    { num: "01", icon: Award, label: "Authorized Distributor", sub: "Trimble · Nikon · Spectra" },
    { num: "02", icon: Wrench, label: "Service in Time", sub: "State-of-the-art service centre" },
    { num: "03", icon: ShieldCheck, label: "Calibrated Precision", sub: "Universal-4 Collimator system" },
    { num: "04", icon: Headphones, label: "Pre & After Sales", sub: "Highly qualified engineers" },
  ];
  return (
    <section className="border-b border-[var(--hairline)]">
      <div className="container-page grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[var(--hairline)] -mx-6 md:-mx-10">
        {items.map(({ num, icon: Icon, label, sub }) => (
          <div key={label} className="px-6 md:px-8 py-8 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-[10px] text-[var(--muted-foreground)]">{num} / 04</span>
              <Icon className="h-4 w-4 text-[var(--ink-soft)]" />
            </div>
            <div>
              <div className="font-serif text-xl text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>{label}</div>
              <div className="text-xs text-[var(--ink-soft)] mt-1.5">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-[var(--hairline)]">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <Eyebrow num="01" label="About" />
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
            Sankon <span className="italic text-[var(--ink-soft)]">Technologies</span> India Pvt Ltd.
          </h2>
        </div>
        <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-[var(--hairline)]">
          <p className="text-[15px] md:text-[17px] leading-[1.8] text-[var(--ink-soft)]">
            Sankon Technologies India Pvt Ltd are the Authorized Distributors and Service Centre in INDIA for M/s Trimble Navigation India Pvt Ltd (Owned Subsidiary of Trimble Europe BV, The Netherlands – a world-leading manufacturer of Surveying & GNSS Equipments and also worldwide resellers of Nikon Surveying Equipments manufactured by Nikon-Trimble Co Ltd having factory at Technoport Mitsuiseimei Building, 2-16-2, Minamikamata 2-chome, Ota-ku, Tokyo 144-0035 Japan) for their entire range of Nikon Surveying Instruments i.e. Total Stations, Auto and Digital Levels, Digital Theodolites, Geodetic Global Positioning Systems, DGPS, GNSS, Civil/Survey Engineering Software and other allied Surveying Instruments and Spectra Precision Total Stations.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Products ---------- */
function Products() {
  return (
    <section id="products" className="py-24 md:py-32 border-b border-[var(--hairline)]">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
          <div>
            <Eyebrow num="02" label="Featured" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
              Our <span className="italic">Products</span>
            </h2>
          </div>
          <a href="#categories" className="text-sm text-[var(--ink)] inline-flex items-center gap-2 border-b border-[var(--ink)]/30 hover:border-[var(--ink)] pb-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--hairline)]">
          {products.map((p, i) => (
            <article key={p.title} className="group relative border-r border-b border-[var(--hairline)] bg-[var(--paper)] flex flex-col">
              <div className="absolute top-3 left-3 z-10 font-mono-tech text-[10px] text-[var(--muted-foreground)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="absolute top-3 right-3 z-10 eyebrow text-[var(--cobalt)]">— New</div>

              <div className="aspect-square p-8 flex items-center justify-center overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="p-6 border-t border-[var(--hairline)] flex-1 flex flex-col">
                <h3 className="font-serif text-lg text-[var(--ink)] leading-snug line-clamp-2 min-h-[2.6em]" style={{ fontFamily: "Fraunces, serif" }}>{p.title}</h3>
                <p className="mt-3 text-xs text-[var(--ink-soft)] leading-relaxed line-clamp-3 flex-1">{p.desc}</p>
                      {(() => {
                        const slug = p.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
                        return (
                          <a
                            href={`/product/${slug}`}
                            className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--ink)] group-hover:text-[var(--cobalt)] transition-colors"
                          >
                            View Details <ArrowUpRight className="h-3 w-3" />
                          </a>
                        );
                      })()}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Categories ---------- */
function Categories() {
  return (
    <section id="categories" className="py-24 md:py-32 border-b border-[var(--hairline)] bg-[var(--ivory-deep)]">
      <div className="container-page">
        <div className="mb-14 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <Eyebrow num="03" label="Browse" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
              Shop By <span className="italic">Category</span>
            </h2>
          </div>
          <span className="font-mono-tech text-xs text-[var(--ink-soft)]">{categories.length} categories</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-[var(--hairline)]">
          {categories.map(([name, img]) => (
            <a key={name} href="#" className="group border-r border-b border-[var(--hairline)] bg-[var(--paper)] p-5 flex flex-col items-center text-center transition-colors hover:bg-[var(--ivory)]">
              <div className="aspect-square w-full flex items-center justify-center p-3">
                <img src={img} alt={name} loading="lazy" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.05]" />
              </div>
              <div className="mt-2 text-[13px] font-medium text-[var(--ink)] leading-tight line-clamp-2">{name}</div>
              <div className="mt-1.5 eyebrow text-[var(--ink-soft)] group-hover:text-[var(--cobalt)] transition-colors">shop now →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Deal Banner ---------- */
function DealBanner() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--hairline)]">
      <div className="container-page">
        <div className="border border-[var(--hairline)] bg-[var(--paper)] grid lg:grid-cols-2 overflow-hidden">
          <div className="p-10 md:p-14 flex flex-col justify-between gap-10 border-b lg:border-b-0 lg:border-r border-[var(--hairline)]">
            <div>
              <span className="inline-flex items-center gap-2 eyebrow text-[var(--cobalt)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--cobalt)]" />
                Sale 10% off
              </span>
              <h3 className="mt-6 font-serif text-5xl md:text-6xl text-[var(--ink)] leading-[1]" style={{ fontFamily: "Fraunces, serif" }}>
                HTS-521L10
              </h3>
              <p className="mt-4 text-[var(--ink-soft)]">HD Color Screen Long Range Total Station</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-[var(--ink)] text-[var(--ivory)] pl-6 pr-2 py-2 text-sm font-medium hover:bg-[var(--cobalt)] transition-colors w-fit group">
              Enquiry Now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--ink)]">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 divide-x divide-y divide-[var(--hairline)]">
            <Stat value="40+" label="Years of expertise" />
            <Stat value="500+" label="Happy clients" />
            <Stat value="100%" label="Genuine products" />
            <Stat value="24/7" label="Service support" />
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <Eyebrow num="04" label="Great Deals" />
          <h3 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
            Great <span className="italic">Deals!</span>
          </h3>
          <p className="mt-6 text-[var(--ink-soft)] text-[17px] leading-[1.7]">
            Complete solution for requirement of Surveying, Construction, Measuring, Aligning and Positioning instruments.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-8 md:p-10 first:border-t-0 [&:nth-child(2)]:border-t-0">
      <div className="font-serif text-4xl md:text-5xl text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>{value}</div>
      <div className="eyebrow text-[var(--ink-soft)] mt-3">— {label}</div>
    </div>
  );
}

/* ---------- Service ---------- */
function Service() {
  const points = [
    { num: "01", icon: Wrench, title: "Authorized Repairs", text: "Repair all kinds of NIKON & SPECTRA PRECISION Surveying Instruments." },
    { num: "02", icon: ShieldCheck, title: "Trimble Nikon Standards", text: "Set-up as per Trimble Nikon guidelines, equipped with Special Tools and Jigs." },
    { num: "03", icon: Award, title: "Universal-4 Collimator", text: "Self adjusted collimation system — adjustments free from human error." },
    { num: "04", icon: Headphones, title: "Centre for Competence", text: "Prompt Pre-and-After Sales Support, with stock of spare parts." },
  ];
  return (
    <section id="service" className="py-24 md:py-32 border-b border-[var(--hairline)] bg-[var(--ivory-deep)]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow num="05" label="Service Centre" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
              Service in Time<br/>
              <span className="italic text-[var(--ink-soft)]">— our motto.</span>
            </h2>
            <div className="mt-8 space-y-6 text-[15px] leading-[1.8] text-[var(--ink-soft)]">
              <p>
                Sankon Technologies India Pvt Ltd is the authorized Service Centre to repair all kinds of NIKON & SPECTRA PRECISION Surveying Instruments. The Service Centre is set-up as per Trimble Nikon guidelines and equipped with all the Special Tools and Jigs. The instruments are checked and calibrated with Universal-4 Collimator which is self adjusted collimation system and therefore, all the adjustments are free from human error. The Diodes of the Distomats are aligned with a CCD Device attached to the powerful Telescope. This service centre is managed with highly technical qualified Engineers.
              </p>
              <p>
                Sankon Technologies India Pvt Ltd has established its Surveying Instruments Divisions in Noida with a state-of-the-art Service Centre fully equipped to cater to all complex needs of these highly sensitive equipments and to handle sales and service needs of our customers. Our Service Centre has been built on the Philosophy of "Centre for Competence" for providing prompt "Pre-and-After Sales Support" to our customers. We are always updated on the latest test equipment in our service laboratory, as well as hold sufficient stock of spare parts to provide the fastest response to our customers. We as a policy have made "Service in Time" our motto.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 border-t border-l border-[var(--hairline)] self-start">
            {points.map(({ num, icon: Icon, title, text }) => (
              <div key={title} className="border-r border-b border-[var(--hairline)] bg-[var(--paper)] p-7 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-[10px] text-[var(--muted-foreground)]">{num} / 04</span>
                  <Icon className="h-4 w-4 text-[var(--ink-soft)]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>{title}</h3>
                  <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Clients ---------- */
function Clients() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--hairline)]">
      <div className="container-page">
        <div className="max-w-2xl">
          <Eyebrow num="06" label="Our Clients" />
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
            Our Happy <span className="italic">Clients</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 border-t border-l border-[var(--hairline)]">
          {brandIds.map((id) => (
            <div key={id} className="border-r border-b border-[var(--hairline)] aspect-[3/2] flex items-center justify-center p-5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all bg-[var(--paper)]">
              <img src={`/upload/brand/${id}.png`} alt="brand" loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--ivory-deep)]">
      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow num="07" label="Get in Touch" />
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
            Sankon <span className="italic">Technologies</span> India Pvt Ltd.
          </h2>
          <ul className="mt-10 space-y-8">
            <ContactRow icon={MapPin} title="Address">
              D - 91, Sector - 06,<br/>Noida -201 301,<br/>Uttar Pradesh
            </ContactRow>
            <ContactRow icon={Phone} title="Phone">
              <a href="tel:09971615537" className="hover:text-[var(--cobalt)]">0997-161-5537</a><br/>
              <a href="tel:01204104677" className="hover:text-[var(--cobalt)]">0120-4104677 / 4104711, 09971615537</a>
            </ContactRow>
            <ContactRow icon={Mail} title="Email">
              <a href="mailto:nikon@sankon.in" className="hover:text-[var(--cobalt)]">nikon@sankon.in</a>
            </ContactRow>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form className="border border-[var(--hairline)] bg-[var(--paper)] p-8 md:p-10">
            <h3 className="font-serif text-2xl text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>Enquiry Now</h3>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <Field label="First Name" />
              <Field label="Last Name" />
              <Field label="Email" type="email" />
              <Field label="Phone number" type="tel" />
            </div>
            <div className="mt-6">
              <label className="block eyebrow mb-2">— Write Your Message</label>
              <textarea rows={5} className="w-full border-b border-[var(--hairline)] bg-transparent px-0 py-2 text-sm text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus:outline-none focus:border-[var(--cobalt)] transition" />
            </div>
            <button type="button" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] text-[var(--ivory)] pl-6 pr-2 py-2 text-sm font-medium hover:bg-[var(--cobalt)] transition-colors">
              Send Your Message
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--ink)]">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block eyebrow mb-2">— {label}</label>
      <input type={type} className="w-full border-b border-[var(--hairline)] bg-transparent px-0 py-2 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--cobalt)] transition" />
    </div>
  );
}

function ContactRow({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-5 pb-6 border-b border-[var(--hairline)] last:border-0">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--hairline)] text-[var(--ink)]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="eyebrow">— {title}</div>
        <div className="mt-2 text-sm text-[var(--ink)] leading-relaxed">{children}</div>
      </div>
    </li>
  );
}

function Eyebrow({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 eyebrow">
      <span className="font-mono-tech text-[var(--cobalt)]">{num}</span>
      <span className="h-px w-6 bg-[var(--ink)]" />
      <span>{label}</span>
    </div>
  );
}

/* ---------- Why Sankon ---------- */
function WhySankon() {
  const items = [
    { num: "01", title: "5 Branches Across India", text: "Regional presence ensuring rapid response and local support." },
    { num: "02", title: "PAN India Service Support", text: "Nationwide coverage for installation, calibration and repair." },
    { num: "03", title: "Certified Engineers", text: "Highly qualified technical team trained on OEM platforms." },
    { num: "04", title: "OEM Procedures", text: "Service performed per Trimble Nikon guidelines with original tools and jigs." },
  ];
  return (
    <section id="why" className="py-24 md:py-32 border-b border-[var(--hairline)] bg-[var(--ivory-deep)]">
      <div className="container-page">
        <div className="max-w-2xl">
          <Eyebrow num="—" label="Why Sankon" />
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
            Trusted by India's <span className="italic">engineering</span> teams
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--hairline)]">
          {items.map((it) => (
            <div key={it.title} className="border-r border-b border-[var(--hairline)] bg-[var(--paper)] p-7 flex flex-col gap-5">
              <span className="font-mono-tech text-[10px] text-[var(--muted-foreground)]">{it.num} / 04</span>
              <div>
                <h3 className="font-serif text-xl text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>{it.title}</h3>
                <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
function Industries() {
  const items = [
    { icon: Building2, title: "Construction & Infrastructure", text: "Total stations, levels and GNSS for site layout and as-built surveys." },
    { icon: TrainFront, title: "Railways", text: "Track alignment, geometry and route surveys with precision instruments." },
    { icon: Mountain, title: "Mining", text: "Volumetric surveys, slope monitoring and exploration support." },
    { icon: Waves, title: "Hydrographic Survey", text: "Marine and inland water surveys with echo sounders and GNSS RTK." },
    { icon: HardHat, title: "Highways & Bridges", text: "Geodetic control, monitoring and machine control deployments." },
    { icon: Factory, title: "Industrial & Plant", text: "Alignment, layout and dimensional control for plants and structures." },
  ];
  return (
    <section id="industries" className="py-24 md:py-32 border-b border-[var(--hairline)]">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
          <div className="max-w-2xl">
            <Eyebrow num="—" label="Industries" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
              Built for <span className="italic">every</span> use case
            </h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--hairline)]">
          {items.map(({ icon: Icon, title, text }) => (
            <a key={title} href="#contact" className="group border-r border-b border-[var(--hairline)] bg-[var(--paper)] p-8 flex flex-col gap-5 hover:bg-[var(--ivory)] transition-colors">
              <Icon className="h-5 w-5 text-[var(--ink-soft)] group-hover:text-[var(--cobalt)] transition-colors" />
              <div>
                <h3 className="font-serif text-xl text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>{title}</h3>
                <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">{text}</p>
              </div>
              <span className="text-xs font-medium text-[var(--ink)] inline-flex items-center gap-1 group-hover:text-[var(--cobalt)]">
                Discuss your project <ArrowUpRight className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Service Offerings ---------- */
function ServiceOfferings() {
  const items = [
    { num: "01", title: "Calibration", text: "Universal-4 Collimator based calibration free from human error, with full certification." },
    { num: "02", title: "Repair", text: "Authorized repair of Nikon, Trimble and Spectra Precision instruments using OEM spares." },
    { num: "03", title: "AMC (Annual Maintenance Contract)", text: "Scheduled preventive maintenance plans to keep instruments field-ready year round." },
    { num: "04", title: "Warranty Support", text: "Genuine warranty handling backed by OEM procedures and qualified engineers." },
  ];
  return (
    <section id="services" className="py-24 md:py-32 border-b border-[var(--hairline)]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow num="—" label="Service Offerings" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
              Calibration, Repair, <span className="italic">AMC</span> & Warranty
            </h2>
            <p className="mt-6 text-[15px] leading-[1.8] text-[var(--ink-soft)]">
              Complete lifecycle support for surveying instruments — from first installation to long-term care.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] text-[var(--ivory)] pl-6 pr-2 py-2 text-sm font-medium hover:bg-[var(--cobalt)] transition-colors w-fit group">
              Request Service
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--ink)]">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 border-t border-l border-[var(--hairline)] self-start">
            {items.map((it) => (
              <div key={it.title} className="border-r border-b border-[var(--hairline)] bg-[var(--paper)] p-7 flex flex-col gap-5">
                <span className="font-mono-tech text-[10px] text-[var(--muted-foreground)]">{it.num} / 04</span>
                <div>
                  <h3 className="font-serif text-xl text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>{it.title}</h3>
                  <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Resources / Lead-gen ---------- */
function Resources() {
  const items = [
    { icon: Download, title: "Download Catalog", text: "Get the complete product catalog with specifications.", cta: "Download PDF" },
    { icon: Calendar, title: "Request a Demo", text: "Schedule an on-site or online demo with our engineers.", cta: "Book Demo" },
    { icon: MessageSquare, title: "Free Consultation", text: "Talk to a specialist about the right instrument for your project.", cta: "Talk to Expert" },
  ];
  return (
    <section id="resources" className="py-24 md:py-32 border-b border-[var(--hairline)] bg-[var(--ivory-deep)]">
      <div className="container-page">
        <div className="max-w-2xl">
          <Eyebrow num="—" label="Resources" />
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
            Catalogs, <span className="italic">demos</span> & expert advice
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 border-t border-l border-[var(--hairline)]">
          {items.map(({ icon: Icon, title, text, cta }) => (
            <div key={title} className="border-r border-b border-[var(--hairline)] bg-[var(--paper)] p-8 flex flex-col gap-6">
              <Icon className="h-5 w-5 text-[var(--ink-soft)]" />
              <div>
                <h3 className="font-serif text-xl text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>{title}</h3>
                <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">{text}</p>
              </div>
              <a href="#contact" className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--cobalt)]">
                {cta} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const faqs = [
    { q: "Is Sankon Technologies an authorized distributor?", a: "Yes. Sankon Technologies India Pvt Ltd is the Authorized Distributor and Service Centre in India for Trimble, Nikon and Spectra Precision surveying instruments." },
    { q: "Which products can Sankon service and repair?", a: "We repair all kinds of Nikon and Spectra Precision surveying instruments — Total Stations, Auto and Digital Levels, Digital Theodolites, GNSS and DGPS systems, along with allied surveying equipment." },
    { q: "How is calibration performed?", a: "Calibration is performed with the Universal-4 Collimator — a self-adjusted collimation system that removes human error. Distomat diodes are aligned with a CCD device attached to a powerful telescope." },
    { q: "Do you offer AMC and warranty support?", a: "Yes. We offer Annual Maintenance Contracts and genuine warranty support, with sufficient stock of spare parts to deliver the fastest response." },
    { q: "Where is the service centre located?", a: "Our state-of-the-art service centre is in Noida, Uttar Pradesh, with PAN India service support for customers across the country." },
    { q: "How can I get an official quotation?", a: "Use the Enquiry form, call us at 0997-161-5537 / 0120-4104677, or email nikon@sankon.in to receive an official quotation." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 border-b border-[var(--hairline)]">
      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Eyebrow num="—" label="FAQ" />
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[var(--ink)] leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
            Frequently <span className="italic">asked</span>
          </h2>
        </div>
        <div className="lg:col-span-8 border-t border-[var(--hairline)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[var(--hairline)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono-tech text-[10px] text-[var(--muted-foreground)]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-lg md:text-xl text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>{f.q}</span>
                  </span>
                  {isOpen ? <Minus className="h-4 w-4 shrink-0 text-[var(--ink-soft)]" /> : <Plus className="h-4 w-4 shrink-0 text-[var(--ink-soft)]" />}
                </button>
                {isOpen && (
                  <p className="pb-6 pl-10 pr-10 text-sm text-[var(--ink-soft)] leading-[1.8] max-w-3xl">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

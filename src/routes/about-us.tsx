import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pb-16 lg:pb-0">
        <section className="container-page py-6 md:py-8">
          <div className="relative isolate min-h-[520px] overflow-hidden rounded-sm md:min-h-[650px] lg:min-h-[min(70vh,760px)]">
            <img
              src="/upload/aboutus/banner.jpg"
              alt="Surveyor using a total station at a construction site"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--ivory)] via-[var(--ivory)]/90 to-transparent md:w-[68%]" />
            <div className="relative flex min-h-[520px] max-w-xl flex-col justify-center px-6 py-16 md:min-h-[650px] md:px-12 lg:min-h-[min(70vh,760px)] lg:px-14">
              <p className="eyebrow text-[var(--ink)]">About Us</p>
              <h1 className="mt-5 max-w-lg font-serif text-[42px] leading-[1.03] text-[var(--ink)] md:text-6xl lg:text-[40px]" style={{ fontFamily: "Fraunces, serif" }}>
                Precision in Every Measurement.
                <br />
                Excellence in Every Project.
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[var(--ink-soft)] md:text-lg md:leading-8">
                Empowering India&apos;s infrastructure, construction, and research sectors with cutting-edge surveying instruments, material testing labs, and world-class calibration services.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--hairline)] py-10">
          <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[var(--ink)]">Who We Are</p>
              <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.08] text-[var(--ink)] md:text-5xl" style={{ fontFamily: "Fraunces, serif" }}>
                Built on Precision.
                <br />
                Driven by Purpose.
              </h2>
              <img
                src="/upload/aboutus/ChatGPT%20Image%20Aug%2017,%202026,%2004_13_31%20PM.png"
                alt="Digital city skyline representing connected infrastructure"
                className="w-full max-w-[430px] object-contain"
              />
            </div>
            <div className="lg:col-span-7 lg:pt-1">
              <div className="max-w-2xl space-y-6 sm:px-12  text-base leading-7 text-[var(--ink-soft)] md:leading-5">
                <p>
                  Sankon Technologies India Pvt. Ltd. is a leading technology provider, authorized distributor, and certified service center specializing in advanced surveying, geospatial, material testing, and positioning equipment across India.
                </p>
                <p>
                  Headquartered in Noida, we bridge the gap between world-class precision instrument manufacturers and the Indian engineering, construction, mining, and hydrographic industries. As authorized partners for global pioneers—including Trimble, Nikon, Hi-Target, Bosch, and Mileseey—we supply state-of-the-art surveying systems engineered to deliver performance in the field.
                </p>
                <p>
                  From high-precision Optical Total Stations and GNSS RTK Receiver Systems to LiDAR, Ground Penetrating Radar (GPR), Unmanned Surface Vehicles (USVs), and full-spectrum Material Testing Equipment (Soil, Aggregate, Concrete, Cement, Bitumen), Sankon delivers comprehensive solutions under one roof.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--hairline)] py-10">
          <div className="container-page">
            <p className="eyebrow text-[var(--ink)]">Core Capabilities &amp;</p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.08] text-[var(--ink)] md:text-5xl" style={{ fontFamily: "Fraunces, serif" }}>
              Authorized Distribution
            </h2>

            <div className="mt-10 gap-4 grid grid-cols-2 xl:grid-cols-5">
              <CapabilityCard
                image="/upload/aboutus/Nikon%20XF%20Series%20Total%20Stations-Photoroom.jpg"
                alt="Nikon total station"
                title="Surveying & Geospatial Technology"
                description="Authorized distributors for Nikon Total Stations, Auto Levels, Digital Theodolites, and Spectra Precision systems via Trimble Navigation India Pvt. Ltd."
              />
              <CapabilityCard
                image="/upload/aboutus/V600LHD.jpg"
                alt="Hi-Target GNSS receiver"
                title="GNSS & LiDAR Innovations"
                description="Hi-Target GNSS RTK, 3D SLAM LiDAR Systems, and Hydrographic/Marine survey technology (USVs and Echo Sounders)."
              />
              <CapabilityCard
                image="/upload/aboutus/Vane-Shear-Test-Apparatus-Motorised.jpg"
                alt="Material testing apparatus"
                title="Geotechnical & Material Testing"
                description="Complete lab solutions for Soil, Aggregate, Concrete, Cement, Asphalt, and Bitumen testing compliant with IS & international standards."
              />
              <CapabilityCard
                image="/upload/aboutus/QuantumImagerPhotoroom.jpg"
                alt="Ground penetrating radar system"
                title="Non-Destructive Testing (NDT) & Underground Locators"
                description="Advanced GPR systems and Cable/Pipe Locators for utility mapping."
              />
              <CapabilityCard
                image="/upload/aboutus/QuantumImagerPhotoroom.jpg"
                alt="Precision laser distance meter"
                title="Precision Distance & Laser Tools"
                description="Authorized Bosch and Mileseey indoor/outdoor laser distance meters, cross-line lasers, and digital measurement tools."
              />
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--hairline)] py-10">
          <div className="container-page">
            <div className="grid gap-10 bg-[#fff0d1] px-6 py-10 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-10 lg:py-12">
              <div className="lg:col-span-4">
                <p className="eyebrow text-[var(--ink)]">Authorized Service &amp;</p>
                <h2 className="mt-4 max-w-sm font-serif text-4xl leading-[1.05] text-[var(--ink)] md:text-5xl" style={{ fontFamily: "Fraunces, serif" }}>
                  Calibration Centre
                </h2>
                <p className="mt-10 max-w-sm text-base leading-[1.35] text-[var(--ink)]">
                  Precision is only as accurate as its last calibration. Our state-of-the-art Noida Service Centre operates on the principle of a &quot;Center for Competence,&quot; built strictly according to global manufacturer guidelines (Trimble / Nikon).
                </p>
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-4 py-2 text-[11px] font-medium uppercase text-white transition-colors hover:bg-[var(--cobalt)]"
                >
                  Know More
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[var(--ink)]">→</span>
                </a>
              </div>

              <div className="lg:col-span-4">
                <img
                  src="/upload/aboutus/2C2A1044.jpg"
                  alt="Technician calibrating a surveying instrument"
                  className="mx-auto aspect-[4/5] w-full max-w-[360px] object-cover"
                />
              </div>

              <div className="space-y-7 lg:col-span-4">
                <ServiceFeature
                  image="/upload/aboutus/risk-management.jpg"
                  title="Zero-Error Calibration"
                  description="Equipped with a Universal-4 Collimator System, a self-adjusting optical system that eliminates human error during calibration."
                />
                <ServiceFeature
                  image="/upload/aboutus/analytic.png"
                  title="Advanced Diagnostics"
                  description="Distomat diodes aligned using CCD-integrated high-power sensors."
                />
                <ServiceFeature
                  image="/upload/aboutus/in-stock.png"
                  title="Turnaround & Stock"
                  description="Managed by highly qualified technical engineers and backed by an extensive inventory of genuine spare parts to ensure minimal downtime for field teams."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--hairline)] py-10">
          <div className="container-page">
            <div className="bg-[#fff0d1] px-6 py-8 md:px-10 md:py-10">
              <p className="eyebrow text-[var(--ink)]">Core Values</p>
              <h2 className="mt-3 max-w-4xl font-serif text-4xl leading-[1.08] text-[var(--ink)] md:text-5xl" style={{ fontFamily: "Fraunces, serif" }}>
                The Principles That Guide Everything We Do
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                <ValueCard
                  number="01"
                  image="/upload/aboutus/dart.png"
                  title="Precision & Accuracy"
                  description="Zero compromise on instrument quality or calibration standards."
                />
                <ValueCard
                  number="02"
                  image="/upload/aboutus/clock%20(1).png"
                  title={'"Service in Time" Commitment'}
                  description="Rapid turnarounds on pre-sales advice, equipment delivery, and service."
                />
                <ValueCard
                  number="03"
                  image="/upload/aboutus/engineering.png"
                  title="Engineering Integrity"
                  description="Supplying instruments that strictly comply with Indian Standards (IS)."
                />
                <ValueCard
                  number="04"
                  image="/upload/aboutus/handshake%20(1).png"
                  title="End-to-End Partnership"
                  description="Providing consulting, equipment selection, field assistance, and support."
                />
              </div>
            </div>
          </div>
        </section>



        
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <MobileCtaBar />
    </div>
  );
}

function CapabilityCard({
  image,
  alt,
  title,
  description,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex min-h-[360px] flex-col border border-[var(--hairline)] bg-[var(--paper)] p-3 md:min-h-[380px] md:p-4">
      <div className="flex h-32 items-center justify-center overflow-hidden bg-white md:h-36">
        <img src={image} alt={alt} className="h-full w-full object-contain" />
      </div>
      <h3 className="mt-5 max-w-[190px] text-lg sm:text-xl font-medium leading-[1.15] text-[var(--ink)]">
        {title}
      </h3>
      <p className="mt-5 text-xs sm:text-base leading-[1.35] text-[var(--ink-soft)]">
        {description}
      </p>
    </article>
  );
}

function ServiceFeature({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-[56px_1fr] items-start gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--ink)]/30 bg-white p-3">
        <img src={image} alt="" className="h-full w-full object-contain" />
      </div>
      <div>
        <h3 className="font-serif text-2xl leading-none text-[var(--ink)]" style={{ fontFamily: "Fraunces, serif" }}>
          {title}
        </h3>
        <p className="mt-2 max-w-sm text-base leading-[1.25] text-[var(--ink)]">
          {description}
        </p>
      </div>
    </div>
  );
}

function ValueCard({
  number,
  image,
  title,
  description,
}: {
  number: string;
  image: string;
  title: string;
  description: string;
}) {
  return (
    <article className="border-[var(--ink)]/25 md:px-6 lg:min-h-[145px] lg:border-r lg:last:border-r-0">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--ink)]/30 bg-white p-3">
          <img src={image} alt="" className="h-full w-full object-contain" />
        </div>
        <span className="mt-4 text-sm font-medium text-[var(--ink)]">{number}</span>
        <h3 className="mt-2 text-xl font-medium leading-[1.2] text-[var(--ink)]">{title}</h3>
        <p className="mt-2 max-w-[190px] text-sm leading-[1.25] text-[var(--ink)]">{description}</p>
      </div>
    </article>
  );
}
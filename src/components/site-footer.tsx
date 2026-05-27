import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#021B33] text-white mt-32 overflow-hidden">

      {/* Top Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <p className="text-sm tracking-wide text-white/75 mb-6">
              — Get in touch
            </p>

            <h2
              className="text-5xl md:text-6xl leading-[1.05] text-white"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Precision instruments,
              <br />
              <span className="italic text-white/80">
                measured service.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex lg:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 text-2xl md:text-3xl text-white hover:text-white/80 transition-all"
            >
              Start an enquiry
              <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">

        {/* First Column Bigger */}
        <div className="lg:col-span-4">
          <img
            src="/upload/logo/footer-logo.png"
            alt="Sankon Logo"
            className="w-[250px] object-contain brightness-0 invert"
          />

          <p className="mt-8 text-[15px] leading-8 text-white/60 max-w-md">
            Complete solution for requirement of Surveying,
            Construction, Measuring, Aligning and
            Positioning instruments.
          </p>
        </div>

        {/* Company */}
        <div className="lg:col-span-2 text-white/45">
          <FooterCol
            title="COMPANY"
            items={[
              "About Us",
              "Service Centre",
              "Our Clients",
              "Contact",
            ]}
          />
        </div>

        {/* Categories */}
        <div className="lg:col-span-4">
          <h4 className="text-sm font-semibold tracking-widest text-white/75 mb-7">
            CATEGORIES
          </h4>

          <ul className="grid grid-cols-2 gap-x-1 gap-y-2">
            {[
              "Auto Levels",
              "Asphalt & Bitumen Testing",
              "Total Stations",
              "Single Frequency",
              "Digital Theodolites",
              "HyDrone",
              "Survey Accessories",
              "Dual Frequency",
              "Auto Level",
              "Single Frequency Gpr",
              "Laser Distance Meters",
              "Triple Frequency",
              "Laser Levels",
              "SELF-LEVELING LEVEL",
              "Total Station",
              "Slam200",
              "GNSS RTK",
              "Slam100",
              "Marine & Hydrographic",
              "Slam2000",
              "Soil Testing",
              "Cable/Pipe locator",
              "Aggregate Testing",
              "Outdoor Laser Measure",
              "Concrete Testing",
              "Digital Laser Tape Measure",
              "Cement Testing",
              "Space Master Series"
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[15px] text-white/45 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold tracking-widest text-white/75 mb-7">
            GET IN TOUCH
          </h4>

          <div className="space-y-6 text-[15px] leading-7 text-white/70">

            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-1" />
              <p className="text-white/45">
                D - 91, Sector - 06,
                <br />
                Noida -201 301,
                <br />
                Uttar Pradesh
              </p>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-red-500 shrink-0 mt-1" />
              <a
                href="tel:01204104677"
                className="hover:text-white transition-colors text-white/45"
              >
                0120-4104677 / 4104711,
                <br />
                09971615537
              </a>
            </div>

            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-red-500 shrink-0 mt-1" />
              <a
                href="mailto:nikon@sankon.in"
                className="hover:text-white transition-colors text-white/45"
              >
                nikon@sankon.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">

          <p>
            © {new Date().getFullYear()} Sankon Technologies India Pvt Ltd.
            All rights reserved.
          </p>

          <p>
            Authorized Distributor & Service Centre — Trimble · Nikon ·
            Spectra Precision
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      {title && (
        <h4 className="text-sm font-semibold tracking-widest text-white/75 mb-7">
          {title}
        </h4>
      )}

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[15px] text-white/45 hover:text-white transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
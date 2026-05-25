import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--ivory)]/85 mt-32">
      {/* Top callout */}
      <div className="border-b border-white/10">
        <div className="container-page py-16 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow text-white/55">— Get in touch</div>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl text-white leading-[1.05]" style={{ fontFamily: "Fraunces, serif" }}>
              Precision instruments,<br/>
              <span className="italic text-white/70">measured</span> service.
            </h3>
          </div>
          <div className="lg:col-span-5">
            <a href="#contact" className="inline-flex items-center gap-3 text-white border-b border-white/30 hover:border-white pb-1 text-sm">
              Start an enquiry
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6L7 13" stroke="currentColor" strokeWidth="1.3"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-serif text-2xl text-white" style={{ fontFamily: "Fraunces, serif" }}>Sankon</div>
          <div className="eyebrow text-white/50 mt-1">Technologies India</div>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Complete solution for requirement of Surveying, Construction, Measuring, Aligning and Positioning instruments.
          </p>
        </div>

        <FooterCol title="Company" items={["About Us", "Service Centre", "Our Clients", "Contact"]} />
        <FooterCol
          title="Categories"
          items={["Total Stations", "GNSS RTK", "Auto Levels", "Laser Distance Meters", "Soil Testing", "Concrete Testing"]}
        />

        <div>
          <h4 className="eyebrow text-white/55 mb-5">— Contact</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[var(--cobalt)]" />
              <span>D - 91, Sector - 06,<br/>Noida -201 301,<br/>Uttar Pradesh</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-[var(--cobalt)]" />
              <a href="tel:01204104677" className="hover:text-white">0120-4104677 / 4104711, 09971615537</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-[var(--cobalt)]" />
              <a href="mailto:nikon@sankon.in" className="hover:text-white">nikon@sankon.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 eyebrow text-white/45">
          <span>© {new Date().getFullYear()} Sankon Technologies India Pvt Ltd</span>
          <span>Trimble · Nikon · Spectra Precision</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="eyebrow text-white/55 mb-5">— {title}</h4>
      <ul className="space-y-3 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-white/65 hover:text-white transition-colors">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

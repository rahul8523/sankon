import type { FormEvent, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Clock3,
  FileCheck2,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Presentation,
  Send,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import categories from "@/routes/categoryData";

const fieldClassName =
  "mt-2 h-12 w-full border border-[var(--ink)]/20 bg-transparent px-4 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-soft)]/65 focus:border-[var(--ink)]";

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const subject = `Website inquiry - ${data.get("inquiryType") || "General"}`;
  const body = [
    `Full Name: ${data.get("fullName") || ""}`,
    `Company: ${data.get("company") || ""}`,
    `Email: ${data.get("email") || ""}`,
    `Phone: ${data.get("phone") || ""}`,
    `Inquiry Type: ${data.get("inquiryType") || ""}`,
    `Category / Equipment: ${data.get("category") || ""}`,
    "",
    "Message / Project Requirements:",
    String(data.get("message") || ""),
  ].join("\n");

  window.location.href = `mailto:sales@sankon.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 pb-16 lg:pb-0">
        <section className="container-page py-6 md:py-8">
          <div className="relative isolate min-h-[520px] overflow-hidden rounded-sm md:min-h-[650px] lg:min-h-[min(70vh,760px)]">
            <img
              src="/upload/aboutus/banner.jpg"
              alt="Precision surveying equipment at an infrastructure project"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--ivory)] via-[var(--ivory)]/90 to-transparent md:w-[68%]" />

            <div className="relative flex min-h-[520px] max-w-xl flex-col justify-center px-6 py-16 md:min-h-[650px] md:px-12 lg:min-h-[min(70vh,760px)] lg:px-14">
              <p className="eyebrow text-[var(--ink)]">Contact Us</p>
              <h1
                className="mt-5 max-w-lg font-serif text-[42px] leading-[1.03] text-[var(--ink)] md:text-6xl lg:text-[56px]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Get in Touch
                <br />
                With Our Experts
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[var(--ink-soft)] md:text-lg md:leading-8">
                Have a sales inquiry, need equipment calibration, or require
                technical support? Our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--hairline)] py-12 md:py-16 lg:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-sans text-xl font-medium uppercase tracking-normal text-[var(--ink)]">
                Contact Information
              </h2>

              <div className="mt-5 space-y-3">
                <ContactCard icon={MapPin} title="Head Office Address">
                  <p>Sankon Technologies India Pvt. Ltd.</p>
                  <p>D - 91, Sector - 06, Noida - 201301,</p>
                  <p>Uttar Pradesh, India</p>
                </ContactCard>

                <ContactCard icon={Phone} title="Phone Lines">
                  <a href="tel:01204104677" className="block hover:text-[var(--cobalt)]">
                    +91 120 4104677
                  </a>
                  <a href="tel:01204104711" className="mt-1 block hover:text-[var(--cobalt)]">
                    +91 120 4104711
                  </a>
                </ContactCard>

                <ContactCard icon={MessageCircle} title="Mobile / WhatsApp">
                  <a href="tel:09971615537" className="hover:text-[var(--cobalt)]">
                    +91 99716 15537
                  </a>
                </ContactCard>

                <ContactCard icon={Mail} title="Email Inquiries">
                  <a href="mailto:sales@sankon.in" className="hover:text-[var(--cobalt)]">
                    sales@sankon.in
                  </a>
                </ContactCard>

                <ContactCard icon={Clock3} title="Business Hours">
                  <p>Monday – Saturday: 9:30 AM – 6:30 PM</p>
                  <p className="mt-1">Sunday: Closed</p>
                </ContactCard>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-sans text-xl font-medium uppercase tracking-normal text-[var(--ink)]">
                Send Us a Message
              </h2>

              <form
                onSubmit={handleContactSubmit}
                className="mt-5 grid gap-x-6 gap-y-5 rounded-xl border border-[var(--ink)]/25 bg-[var(--paper)] p-5 sm:p-7 md:grid-cols-2"
              >
                <ContactField label="Full Name*" name="fullName" placeholder="Enter your full name" required />
                <ContactField label="Company / Organization Name*" name="company" placeholder="Enter company name" required />
                <ContactField label="Email Address*" name="email" type="email" placeholder="Enter email address" required />
                <ContactField label="Phone Number*" name="phone" type="tel" placeholder="Enter phone number" required />

                <label className="text-lg leading-tight text-[var(--ink)]">
                  Inquiry Type*
                  <select name="inquiryType" required defaultValue="" className={fieldClassName}>
                    <option value="" disabled>Select inquiry type</option>
                    <option>Sales Inquiry</option>
                    <option>Equipment Calibration</option>
                    <option>Technical Support</option>
                    <option>Service & Repair</option>
                    <option>General Inquiry</option>
                  </select>
                </label>

                <label className="text-lg leading-tight text-[var(--ink)]">
                  Selected Category / Equipment
                  <select name="category" defaultValue="" className={fieldClassName}>
                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category.slug} value={category.title}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-lg leading-tight text-[var(--ink)] md:col-span-2">
                  Message / Project Requirements*
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your requirements, required quantities, or equipment model numbers"
                    className="mt-2 w-full resize-y border border-[var(--ink)]/20 bg-transparent px-4 py-4 text-sm leading-6 text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-soft)]/65 focus:border-[var(--ink)]"
                  />
                </label>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 rounded-full bg-[var(--ink)] py-2 pl-5 pr-6 text-xs font-medium uppercase text-white transition-colors hover:bg-[var(--cobalt)]"
                  >
                    <Send className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--hairline)] bg-[#f7f3eb] py-12 md:py-16 lg:py-20">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow text-[var(--ink)]">Inquiries &amp; Support Categories</p>
                <h2
                  className="mt-3 font-serif text-4xl leading-[1.08] text-[var(--ink)] md:text-5xl"
                  style={{ fontFamily: "Fraunces, serif" }}
                >
                  How We Can Help You
                </h2>

                <div className="mt-8 space-y-7">
                  <SupportItem
                    icon={ShoppingCart}
                    title="Product Sales & Quotation"
                    description="Request custom quotes for Total Stations, GNSS RTK, SLAM LiDAR, Lab Testing Equipment, or Laser Distance Meters."
                  />
                  <SupportItem
                    icon={Settings}
                    title="Calibration & Repair Booking"
                    description="Schedule calibration for your surveying instruments at our authorized Noida Service Centre."
                  />
                  <SupportItem
                    icon={Presentation}
                    title="On-Site Demos & Training"
                    description="Book a field demonstration or team training session for advanced surveying gear."
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <p className="eyebrow text-[var(--ink)]">Authorized Service Centre &amp; Showroom</p>
                <h2
                  className="mt-3 font-serif text-4xl leading-[1.08] text-[var(--ink)] md:text-5xl"
                  style={{ fontFamily: "Fraunces, serif" }}
                >
                  Visit Our Service Center
                </h2>
                <p className="mt-3 text-sm text-[var(--ink-soft)] md:text-base">
                  D - 91, Sector - 06, Noida - 201301, Uttar Pradesh
                </p>

                <div className="mt-4 h-[300px] overflow-hidden border border-[var(--ink)]/20 bg-[var(--ivory-deep)] sm:h-[360px]">
                  <iframe
                    title="Sankon Technologies service centre location"
                    src="https://www.google.com/maps?q=Sankon+Technologies+India+Pvt+Ltd,+D-91,+Sector+6,+Noida,+Uttar+Pradesh+201301&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 grid bg-[#fff0d1] sm:grid-cols-2 lg:grid-cols-4">
              <TrustItem
                icon={Handshake}
                title="Authorized Partner"
                description="Authorized distributors for global leading brands."
              />
              <TrustItem
                icon={FileCheck2}
                title="Certified Service Centre"
                description="Factory-standard calibration and repair services."
              />
              <TrustItem
                icon={UsersRound}
                title="Trained Experts"
                description="Highly skilled engineers and technical specialists."
              />
              <TrustItem
                icon={BadgeCheck}
                title="Customer Trust"
                description="Reliable support trusted by teams across India."
              />
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

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="grid min-h-[112px] grid-cols-[64px_1fr] items-center gap-5 rounded-xl border border-[var(--ink)]/25 bg-[var(--paper)] px-4 py-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0d1] text-black">
        <Icon className="h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-sans text-lg font-medium tracking-normal text-[var(--ink)] md:text-xl">
          {title}
        </h3>
        <div className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{children}</div>
      </div>
    </article>
  );
}

function ContactField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="text-lg leading-tight text-[var(--ink)]">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={fieldClassName}
      />
    </label>
  );
}

function SupportItem({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="grid grid-cols-[60px_1fr] items-start gap-5">
      <div className="flex h-14 w-14 items-center justify-center bg-[#fff0d1] text-[var(--ink)]">
        <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-sans text-lg font-medium tracking-normal text-[var(--ink)] md:text-xl">
          {title}
        </h3>
        <p className="mt-1 max-w-sm text-sm leading-[1.45] text-[var(--ink-soft)]">
          {description}
        </p>
      </div>
    </article>
  );
}

function TrustItem({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="grid grid-cols-[52px_1fr] items-center gap-4 border-[var(--ink)]/25 px-5 py-6 sm:border-b sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
      <Icon className="h-10 w-10 text-black" strokeWidth={1.7} aria-hidden="true" />
      <div>
        <h3 className="text-xl leading-tight text-[var(--ink)]">{title}</h3>
        <p className="mt-2 text-sm leading-[1.35] text-[var(--ink-soft)]">
          {description}
        </p>
      </div>
    </article>
  );
}

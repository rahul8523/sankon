import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";

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
      </main>

      <SiteFooter />
      <WhatsAppFab />
      <MobileCtaBar />
    </div>
  );
}

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  FileSearch,
  FlaskConical,
  Medal,
  UsersRound,
  Wrench,
} from "lucide-react";

import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";

const careerBenefits = [
  {
    icon: Medal,
    title: "Industry Leadership",
    description:
      "Gain hands-on exposure to advanced GNSS, SLAM LiDAR, Hydrographic equipment, and precision optical instruments.",
  },
  {
    icon: BarChart3,
    title: "Technical Growth",
    description:
      "Access continuous technical training, factory-standard calibration processes, and skill elevation.",
  },
  {
    icon: UsersRound,
    title: "Collaborative Culture",
    description:
      "Work in an agile, performance-driven environment that values innovation, reliability, and professional ownership.",
  },
];

const openPositions = [
  {
    icon: Wrench,
    title: "Service & Calibration Engineer",
    specialization: "Optical & GNSS",
    responsibilities: [
      "Inspect, repair, and precisely calibrate Total Stations, Auto Levels, GNSS RTK, and laser instruments.",
      "Operate collimators, optical jigs, and CCD alignment systems.",
      "Maintain service records and technical diagnostic reports.",
    ],
    requirements:
      "Diploma/B.Tech in Electronics, Instrumentation, Civil Engineering, or a related technical field.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Technical Sales Manager",
    specialization: "Survey & Geospatial",
    responsibilities: [
      "Understand customer applications and recommend suitable surveying and geospatial solutions.",
      "Build long-term relationships with infrastructure, construction, and engineering clients.",
      "Coordinate demonstrations, proposals, and post-sales technical support.",
    ],
    requirements:
      "Diploma/B.Tech with technical sales experience in surveying, geospatial, or infrastructure solutions.",
  },
  {
    icon: FlaskConical,
    title: "Application Specialist",
    specialization: "Soil & Material Testing Equipment",
    responsibilities: [
      "Conduct product demonstrations and application training for material testing equipment.",
      "Support customers with testing methods, instrument selection, and technical queries.",
      "Coordinate installations, commissioning, and field application support.",
    ],
    requirements:
      "Diploma/B.Tech in Civil Engineering, Material Science, or a related technical discipline.",
  },
];

export default function CareerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 pb-16 lg:pb-0">
        <section className="container-page py-6 md:py-8">
          <div className="relative isolate min-h-[520px] overflow-hidden rounded-sm md:min-h-[650px] lg:min-h-[min(70vh,760px)]">
            <img
              src="/upload/aboutus/banner.jpg"
              alt="Surveying professionals working with precision equipment"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--ivory)] via-[var(--ivory)]/90 to-transparent md:w-[68%]" />

            <div className="relative flex min-h-[520px] max-w-xl flex-col justify-center px-6 py-16 md:min-h-[650px] md:px-12 lg:min-h-[min(70vh,760px)] lg:px-14">
              <p className="eyebrow text-[var(--ink)]">Careers</p>
              <h1
                className="mt-5 max-w-lg font-serif text-[42px] leading-[1.03] text-[var(--ink)] md:text-6xl lg:text-[56px]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Shape the Future
                <br />
                of Precision
                <br />
                Infrastructure
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[var(--ink-soft)] md:text-lg md:leading-8">
                Join a team of passionate engineers, technical experts, and
                business leaders driving advancement across India&apos;s surveying
                and construction landscape.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--hairline)] py-12 md:py-16">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-4">
                <p className="eyebrow text-[var(--ink)]">Why Work With Sankon?</p>
                <h2
                  className="mt-4 max-w-md font-serif text-4xl leading-[1.08] text-[var(--ink)] md:text-5xl"
                  style={{ fontFamily: "Fraunces, serif" }}
                >
                  Built on Expertise.
                  <br />
                  Driven by People.
                </h2>
              </div>

              <p className="max-w-3xl text-base leading-7 text-[var(--ink-soft)] lg:col-span-8 lg:pb-1 md:text-lg">
                At Sankon Technologies, our strength lies in our technical
                expertise and client service. Working with us means collaborating
                with global brand partners like Trimble, Nikon, Bosch, and
                Hi-Target while solving complex engineering and field measurement
                challenges.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {careerBenefits.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="flex min-h-[260px] flex-col items-center justify-center bg-[#fff0d1] px-6 py-9 text-center md:px-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--ink)]/30 bg-[#ffdd8b] text-[var(--ink)]">
                    <Icon className="h-8 w-8" strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-medium leading-tight text-[var(--ink)]">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-[1.45] text-[var(--ink-soft)] md:text-base">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--hairline)] bg-[#f4f0e8] py-12 md:py-16">
          <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-[1.05fr_1fr_1fr] lg:items-stretch lg:gap-10">
            <div className="flex flex-col justify-center md:col-span-2 lg:col-span-1 lg:pr-5">
              <p className="eyebrow text-[var(--ink)]">Life at Sankon</p>
              <h2
                className="mt-4 font-serif text-4xl leading-[1.05] text-[var(--ink)] md:text-5xl lg:text-[52px]"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Real Projects.
                <br />
                Real Impact.
              </h2>
              <p className="mt-5 max-w-md text-base leading-[1.35] text-[var(--ink-soft)] md:text-lg">
                Whether you are a field technician, calibration engineer, or B2B
                technical sales specialist, your role directly impacts
                large-scale infrastructure, mining, hydrographic, and civil
                engineering projects across the country.
              </p>
            </div>

            <figure className="min-h-[260px] overflow-hidden bg-[var(--ivory-deep)] md:min-h-[320px] lg:min-h-[360px]">
              <img
                src="/upload/aboutus/2C2A1044.jpg"
                alt="Sankon technician calibrating a precision surveying instrument"
                className="h-full w-full object-cover"
              />
            </figure>

            <figure className="min-h-[260px] overflow-hidden bg-[var(--ivory-deep)] md:min-h-[320px] lg:min-h-[360px]">
              <img
                src="/upload/aboutus/banner.jpg"
                alt="Sankon professional working with surveying equipment"
                className="h-full w-full object-cover object-[68%_center]"
              />
            </figure>
          </div>
        </section>

        <section className="border-t border-[var(--hairline)] py-12 md:py-16 lg:py-20">
          <div className="container-page">
            <p className="eyebrow text-[var(--ink)]">Open Positions</p>
            <h2
              className="mt-3 font-serif text-4xl leading-[1.08] text-[var(--ink)] md:text-5xl"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Explore Career Opportunities
            </h2>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {openPositions.map(
                ({ icon: Icon, title, specialization, responsibilities, requirements }, index) => (
                  <article
                    key={title}
                    className="flex min-h-full flex-col rounded-xl border border-[var(--ink)]/25 bg-[var(--paper)] p-5 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[#ffdda0] text-[var(--ink)]">
                        <Icon className="h-9 w-9" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <h3 className="pt-1 text-base font-medium uppercase leading-[1.12] text-[var(--ink)]">
                        {index + 1}. {title}
                        <span className="block">{specialization}</span>
                      </h3>
                    </div>

                    <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-[1.35] text-[var(--ink)]">
                      <li>Location: Noida, Uttar Pradesh</li>
                      <li>Experience: 2–5 Years</li>
                    </ul>

                    <div className="mt-5">
                      <h4 className="font-sans text-sm font-medium tracking-normal text-[var(--ink)]">
                        Key Responsibilities
                      </h4>
                      <ul className="mt-3 list-disc space-y-3 pl-5 text-xs leading-[1.45] text-[var(--ink-soft)] sm:text-sm">
                        {responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-sans text-sm font-medium tracking-normal text-[var(--ink)]">
                        Requirements
                      </h4>
                      <p className="mt-2 pl-5 text-xs leading-[1.45] text-[var(--ink-soft)] sm:text-sm">
                        {requirements}
                      </p>
                    </div>

                    <a
                      href={`mailto:hr@sankon.in?subject=${encodeURIComponent(`Application for ${title}`)}`}
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-[var(--ink)] transition-colors hover:text-[var(--cobalt)]"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </article>
                ),
              )}
            </div>

            <div className="mt-10 grid gap-6 bg-[#ffdda0] px-6 py-7 sm:px-8 md:grid-cols-[64px_1fr_auto] md:items-center md:gap-7 lg:mt-16 lg:px-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--ink)]">
                <FileSearch className="h-9 w-9" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl leading-tight text-[var(--ink)] md:text-3xl">
                  Don&apos;t See a Relevant Role?
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-[1.35] text-[var(--ink-soft)] md:text-base">
                  We are always seeking exceptional talent to join our technical,
                  operations, and sales teams. Send your resume and a brief cover
                  letter to hr@sankon.in with the subject line “Spontaneous
                  Application - [Your Department]”.
                </p>
              </div>
              <a
                href="mailto:hr@sankon.in?subject=Spontaneous%20Application%20-%20%5BYour%20Department%5D"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[var(--ink)] py-2 pl-5 pr-2 text-xs font-medium uppercase text-white transition-colors hover:bg-[var(--cobalt)]"
              >
                Send Your Resume
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--ink)]">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
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

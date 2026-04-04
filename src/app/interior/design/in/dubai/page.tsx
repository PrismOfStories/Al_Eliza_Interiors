import React from "react";
import { CheckCircle, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";
import { FAQSection } from "@/components/FAQSection";
import { icons } from "@/lib/utils/meta";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title:
      "Expert Interior Design in Dubai | 3D Visualization & Custom Interiors",
    description:
      "Transform your space with our expert interior design services in Dubai. We offer 3D visualization, custom interiors, and luxury residential & commercial design solutions.",
    authors: [{ name: authorName || "Al Eliza Interiors" }],
    icons,
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteURL}/interior/design/in/dubai`,
    },
    openGraph: {
      title:
        "Expert Interior Design in Dubai | 3D Visualization & Custom Interiors",
      description:
        "Transform your space with our expert interior design services in Dubai. We offer 3D visualization, custom interiors, and luxury residential & commercial design solutions.",
      url: `${siteURL}/interior/design/in/dubai`,
      siteName: siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteURL}/images/opengraph/1200x630.png`,
          width: 1200,
          height: 630,
          alt: "Expert Interior Design in Dubai",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Expert Interior Design in Dubai | 3D Visualization & Custom Interiors",
      description:
        "Transform your space with our expert interior design services in Dubai. We offer 3D visualization, custom interiors, and luxury residential & commercial design solutions.",
      creator: `@${authorName}`,
      site: `@${siteName}`,
    },
  };
}

export default function Page() {
  // page data list
  const features = [
    "Custom designs tailored to your lifestyle",
    "Realistic 3D room design before execution",
    "Affordable and transparent pricing",
    "Experienced interior designers in Dubai",
    "Fast project delivery with quality finish",
    "Complete solutions – design + execution",
  ];

  const services = [
    {
      title: "Home Interior Design",
      image: "/images/home.webp",
      description: "We design every part of your home:",
      items: [
        "Living room interior design with modern aesthetics",
        "Bedroom interior design for comfort and style",
        "Kitchen interior design with smart layouts",
        "Bathroom decor ideas for small and luxury spaces",
      ],
    },
    {
      title: "Office Interior Design",
      image: "/images/office.webp",
      description: "Boost productivity with smart layouts:",
      items: [
        "Modern office interior design",
        "Functional workspace planning",
        "Creative office decor ideas",
      ],
    },
    {
      title: "Commercial Interior Design",
      image: "/images/commercial.webp",
      description: "Perfect for businesses:",
      items: [
        "Restaurant interior design",
        "Retail and showroom interiors",
        "Professional fit-out solutions in Dubai",
      ],
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Consultation",
      description: "We understand your needs, style, and budget.",
    },
    {
      number: "2",
      title: "Concept & Planning",
      description: "We create layouts and design ideas based on your space.",
    },
    {
      number: "3",
      title: "3D Visualization",
      description:
        "See your space with 3D rendering interior design before execution.",
    },
    {
      number: "4",
      title: "Execution",
      description: "We bring the design to life with precision.",
    },
  ];

  const ideas = [
    "Living room wall decor ideas",
    "Bedroom wall decor ideas",
    "Dining room decor ideas",
    "Kitchen decor ideas",
    "Modern home decor",
    "Scandinavian interior design",
  ];

  return (
    <div>
      <section className="relative flex min-h-screen items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-interior.webp"
            alt="Interior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl px-4">
          <p className="font-paragraph text-gold mb-2 text-base uppercase tracking-widest">
            Dubai&apos;s Premier Design Studio
          </p>

          <h1 className="font-paragraph  text-4xl font-medium leading-tight text-white md:text-6xl lg:text-7xl">
            Design Your Dream Space with Expert{" "}
            <span className="text-gold">Interior Design</span> in Dubai
          </h1>

          <p className="font-paragraph mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Modern, functional, and stunning interiors with advanced 3D
            visualization. See your space come alive before construction begins.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="hover:bg-gold-dark bg-gold rounded-lg px-6 py-3 text-lg font-medium text-white transition"
            >
              👉 Get Free Design Consultation
            </Link>

            <Link
              href="/expertise"
              className="rounded-lg border border-gray-400 px-6 py-3 text-lg text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="mb-4 text-center">
              <span className="font-paragraph text-gold text-base uppercase tracking-widest">
                Why Us
              </span>
            </div>
            <h2 className="my-4 text-3xl font-medium text-gray-900 md:text-5xl">
              {" "}
              Why Choose Our Interior Design Services in Dubai
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="border-gold/25 flex items-center gap-4 rounded-xl border bg-white p-8 transition-all duration-500 hover:scale-110"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                  <CheckCircle className="text-gold h-6 w-6" />
                </div>

                <span className=" font-paragraph text-neutral-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#faf8f5] py-12 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-4 text-center">
            <span className="font-paragraph text-gold text-base uppercase tracking-widest">
              Our Services
            </span>
          </div>

          <h2 className="font-paragraph mb-16 text-center text-3xl font-medium text-gray-900 md:text-5xl">
            Our Interior Design Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-5"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="font-paragraph p-6">
                  <h3 className="text-color-brown mb-3 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mb-4 text-gray-800">{service.description}</p>

                  <ul className="space-y-3 text-neutral-600">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-gold text-lg leading-none">
                          <BsCircleFill className="size-1.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background font-paragraph py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="mb-4">
            <span className="text-gold rounded-full px-4 py-1 text-base uppercase tracking-wider">
              Our Process
            </span>
          </div>

          <h2 className="mb-16  text-3xl font-medium text-white md:text-5xl">
            Our 3D Interior Design Process
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-gold-dark mb-6 flex h-16 w-16 items-center justify-center rounded-full text-xl font-semibold text-white">
                  {step.number}
                </div>

                <h3 className="mb-3 text-xl text-white">{step.title}</h3>

                <p className="text-silver max-w-xs text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="font-paragraph bg-[#faf8f5] py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="mb-4">
            <span className="font-paragraph text-gold text-base uppercase tracking-widest">
              Inspiration
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-medium text-gray-900 md:text-5xl">
            Design Ideas for Every Space
          </h2>

          <p className="mb-12 text-neutral-600">
            Looking for inspiration? We cover it all.
          </p>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="border-gold/25 rounded-xl border bg-white px-6 py-5 transition-all duration-500 hover:scale-110"
              >
                <p className="font-medium text-neutral-600">{idea}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Geo-Targeting Section */}
      <section className="font-paragraph bg-white py-28 text-center">
        <div className="mx-auto max-w-4xl px-4">
          {/* Icon */}
          <MapPin className="mx-auto mb-6 h-10 w-10 text-[#b8872b]" />

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-medium leading-tight text-[#1f2937] md:text-5xl">
            Interior Design Near You in Dubai
          </h2>

          {/* First paragraph */}
          <p className="mb-4 text-lg leading-relaxed text-neutral-600">
            Searching for{" "}
            <strong className="font-semibold text-neutral-900">
              interior designer near me, home decorator near me
            </strong>
            , or{" "}
            <strong className="font-semibold text-neutral-900">
              affordable interior designers near me
            </strong>
            ?
          </p>

          {/* Second paragraph */}
          <p className="mb-10 text-lg leading-relaxed text-neutral-600">
            We provide local, reliable, and expert services across Dubai with
            quick turnaround and personalized support.
          </p>

          {/* Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#c6922f] to-[#e0ad3a] px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            📍 Find Us in Dubai
          </Link>
        </div>
      </section>

      <section className="font-paragraph bg-[#faf8f5] py-28 text-center">
        <div className="mx-auto max-w-6xl px-4">
          {/* Badge */}
          <div className="text-gold mb-6 inline-block  rounded-full px-4 py-1 text-base font-medium">
            TESTIMONIALS
          </div>

          {/* Heading */}
          <h2 className="mb-16 text-4xl font-medium text-[#1f2937] md:text-5xl">
            What Our Clients Say
          </h2>

          {/* Testimonials Grid */}
          <div className="grid gap-4 sm:gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="border-gold/20 rounded-2xl border bg-white p-6 text-left transition-all duration-500 hover:-translate-y-4">
              <div className="mb-3 flex text-[#d89c2b]">{"★★★★★"}</div>
              <p className="italic leading-relaxed text-gray-600">
                &quot;Amazing transformation! The 3D design helped us visualize
                everything.&quot;
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-gold/20 rounded-2xl border bg-white p-6 text-left transition-all duration-500 hover:-translate-y-4">
              <div className="mb-3 flex text-[#d89c2b]">{"★★★★★"}</div>
              <p className="italic leading-relaxed text-gray-600">
                &quot;Best interior design company in Dubai. Very professional
                team.&quot;
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-gold/20 rounded-2xl border bg-white p-6 text-left transition-all duration-500 hover:-translate-y-4">
              <div className="mb-3 flex text-[#d89c2b]">{"★★★★★"}</div>
              <p className="italic leading-relaxed text-gray-600">
                &quot;Affordable and high-quality work. Highly
                recommended!&quot;
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 flex flex-col items-center justify-center gap-6 md:flex-row">
            {/* Stat 1 */}
            <div className="bg-background w-64 rounded-2xl py-10 text-white transition-all duration-500 hover:scale-105">
              <h3 className="text-gold text-4xl font-semibold">500+</h3>
              <p className="mt-2 text-neutral-300 ">Projects Completed</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-background w-64 rounded-2xl py-10 text-white transition-all duration-500 hover:scale-105">
              <h3 className="text-gold text-4xl font-semibold">95%</h3>
              <p className="mt-2 text-neutral-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="font-paragraph bg-background py-28 text-center text-white">
        <div className="px-4">
          <h2 className="mb-4 text-4xl font-medium leading-tight md:text-5xl">
            Get Started with Interior Design in Dubai
          </h2>

          <p className="text-silver mb-10 text-lg">
            Your dream space is just one step away.
          </p>

          <Link
            href="/contact"
            className="hover:bg-gold-dark bg-gold rounded-lg px-6 py-3 text-lg font-medium text-white transition"
          >
            👉 Book Your Free Consultation Now
          </Link>

          <p className="text-silver mt-6 flex items-center justify-center text-sm">
            ⏱️ Limited slots available this week!
          </p>
        </div>
      </section>

      <FAQSection />

      <section id="about" className="bg-[#f7f7f7] py-12 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-studio.webp"
                  alt="Interior design studio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="font-paragraph">
              <p className="text-gold mb-4 inline-block  rounded-full py-1 text-base uppercase tracking-wider">
                About Us
              </p>

              <h2 className="mb-6 text-xl font-medium text-gray-900 md:text-4xl">
                Transform Your Vision Into Reality
              </h2>

              <p className="mb-4 leading-relaxed text-neutral-600">
                Finding the right interior design in Dubai can feel
                overwhelming. You want a space that looks beautiful, works well,
                and fits your budget. But choosing the right designer, style,
                and layout isn&apos;t easy.
              </p>

              <p className="text-gold mb-4 leading-relaxed">
                That&apos;s where we help.
              </p>

              <p className="mb-4 leading-relaxed text-neutral-600">
                We offer expert interior designing in Dubai with advanced 3D
                interior design solutions. Whether it&apos;s your home, office,
                or commercial space, we turn your ideas into reality—before the
                work even starts.
              </p>

              <p className="mb-8 leading-relaxed text-neutral-600">
                From living room decor ideas to full office interior design, we
                create spaces that reflect your personality and purpose.
              </p>

              <Link
                href="/contact"
                className="hover:bg-gold-dark bg-gold flex w-fit items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-medium text-white transition"
              >
                Get Free Consultation <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

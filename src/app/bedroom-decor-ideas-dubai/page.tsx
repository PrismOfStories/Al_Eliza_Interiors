import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { icons } from "@/lib/utils/meta";
import FAQAccordion from "@/components/common/FAQAccordation";
import TransformationSection from "@/components/common/TransformationSection";
import ConsultationCTA from "@/components/common/ConsultationCTA";

export async function generateMetadata(): Promise<Metadata> {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title: "Bedroom Decor Ideas Dubai | Luxury Interiors by Al Eliza Interiors",
    description:
      "Explore luxury bedroom decor ideas in Dubai for villas and apartments. Al Eliza Interiors creates bespoke, modern, hotel style bedrooms with premium finishes. Book your consultation today.",
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
      canonical: `${siteURL}/bedroom-decor-ideas-dubai`,
    },
    openGraph: {
      title:
        "Bedroom Decor Ideas Dubai | Luxury Interiors by Al Eliza Interiors",
      description:
        "Explore luxury bedroom decor ideas in Dubai for villas and apartments. Al Eliza Interiors creates bespoke, modern, hotel-style bedrooms with premium finishes. Book your consultation today.",
      url: `${siteURL}/bedroom-decor-ideas-dubai`,
      siteName: siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteURL}/images/opengraph/1200x630.png`,
          width: 1200,
          height: 630,
          alt: "Bedroom Decor Ideas Dubai",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Bedroom Decor Ideas Dubai | Luxury Interiors by Al Eliza Interiors",
      description:
        "Explore luxury bedroom decor ideas in Dubai for villas and apartments. Al Eliza Interiors creates bespoke, modern, hotel-style bedrooms with premium finishes. Book your consultation today.",
      creator: `@${authorName}`,
      site: `@${siteName}`,
    },
  };
}

export default function BedroomDecorIdeas() {
  const insightsFAQs = [
    {
      q: "What are the best bedroom decor ideas for Dubai homes?",
      a: "The best bedroom decor ideas combine luxury finishes, smart technology, and climate conscious materials. Think ambient lighting, premium fabrics, and layouts that maximize both comfort and space.",
    },
    {
      q: "How can I create a luxury bedroom in Dubai?",
      a: "Focus on layered lighting, custom furniture, rich textures, and hotel-inspired styling. Adding a walk-in wardrobe and statement lighting instantly elevates the space.",
    },
    {
      q: "What is the cost of bedroom interior design in Dubai?",
      a: "Costs vary based on size, materials, and customization. A high-end bedroom in Dubai typically ranges from AED 25,000 to AED 150,000+, depending on luxury level.",
    },
    {
      q: "How to design a small bedroom in a Dubai apartment?",
      a: "Use space saving furniture, vertical storage, mirrors, and light color palettes. Smart layouts and multifunctional pieces are key to maximizing space.",
    },
    {
      q: "What bedroom styles are popular in Dubai villas?",
      a: "Popular styles include hotel style luxury bedrooms, contemporary minimalist themes, and modern Arabic inspired interiors.",
    },
    {
      q: "How can I make my bedroom look like a hotel in Dubai?",
      a: "Incorporate plush bedding, layered textiles, soft ambient lighting, symmetry in furniture placement, and neutral tones with metallic accents.",
    },
    {
      q: "What lighting works best for bedrooms in UAE homes?",
      a: "A combination of ambient lighting (ceiling + cove lighting), task lighting (bedside lamps), and accent lighting (feature walls) works best.",
    },
  ];

  const faq = [
    {
      q: "What are the best bedroom decor ideas for Dubai homes?",
      a: "Focus on luxury materials, smart layouts, and climate-friendly design elements.",
    },
    {
      q: "How can I create a luxury bedroom in Dubai?",
      a: "Use high-end finishes, layered lighting, and bespoke furniture.",
    },
    {
      q: "What is the cost of bedroom design in Dubai?",
      a: "Typically ranges from AED 25,000 to AED 150,000+, depending on scope.",
    },
    {
      q: "How to design a small bedroom in Dubai apartments?",
      a: "Optimize with space-saving furniture and light color palettes.",
    },
    {
      q: "What furniture is best for Dubai bedrooms?",
      a: "Custom-built, multifunctional furniture works best—especially in apartments.",
    },
    {
      q: "How to decorate a bedroom on a budget in Dubai?",
      a: "Use affordable decor, lighting upgrades, and smart styling techniques.",
    },
    {
      q: "What lighting works best for UAE bedrooms?",
      a: "Layered lighting—ambient, task, and accent—is ideal.",
    },
    {
      q: "What are modern bedroom trends in Dubai?",
      a: "Minimalism, smart technology, and hotel-inspired luxury dominate trends.",
    },
    {
      q: "Can you design villa bedrooms in Dubai?",
      a: "Yes, we specialize in villa bedroom decor Dubai with fully customized solutions.",
    },
  ];

  const testimonials = [
    {
      text: "Al Eliza Interiors transformed our villa bedroom into a luxury suite. It feels like living in a 5-star hotel.",
      author: "Client, Palm Jumeirah",
    },
    {
      text: "They understood exactly how to maximize our apartment space without compromising elegance.",
      author: "Client, Downtown Dubai",
    },
    {
      text: "The attention to detail, lighting, and finishes was exceptional. Truly world-class.",
      author: "Client, Emirates Hills",
    },
  ];

  const bedroomServices = [
    {
      title: "Luxury Bedroom Design Dubai",
      subTitle: "Experience opulence through",
      points: [
        "Custom headboards & premium bedding",
        "Marble, wood, and textured wall finishes",
        "Statement lighting & chandeliers",
        "Perfect for villas and high-end residences",
      ],
    },
    {
      title: "Modern Bedroom Interiors UAE",
      subTitle: "Clean lines. Smart living. Elevated simplicity.",
      points: [
        "Neutral tones with bold accents",
        "Integrated smart lighting systems",
        "Minimalist layouts with maximum impact",
      ],
    },
    {
      title: "Dubai Apartment Bedroom Ideas",
      subTitle: "Designed for space optimization",
      points: [
        "Space-saving furniture",
        "Smart storage solutions",
        "Multi-functional layouts",
        "Ideal for urban professionals and compact living",
      ],
    },
    {
      title: "Villa Bedroom Decor Dubai",
      subTitle: "Grand spaces deserve grand design",
      points: [
        "Walk-in wardrobe design",
        "Layered ambient lighting",
        "Hotel-style bedroom aesthetics",
      ],
    },
    {
      title: "Minimalist Bedroom Dubai",
      subTitle: "Serene, clutter-free environments",
      points: [
        "Soft palettes and natural textures",
        "Functional yet elegant furniture",
        "Calm, breathable spaces",
      ],
    },
    {
      title: "Contemporary Bedroom UAE",
      subTitle: "Trend-forward yet timeless",
      points: [
        "Sculptural furniture",
        "Artistic decor elements",
        "Balanced mix of luxury and comfort",
      ],
    },
  ];
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative flex min-h-screen w-full items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-interior.webp"
          alt="Luxury Bedroom Interior Dubai"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="md:px-18 w-7xl relative mt-16 mx-auto flex min-h-screen items-center px-6">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-paragraph text-4xl font-medium leading-tight text-white md:text-6xl">
              Transform Your
              <span className="text-gold"> Space </span>
              with Bespoke Bedroom Decor Ideas in Dubai
            </h1>

            <p className="font-paragraph text-lg text-neutral-300">
              Elevate your living experience with curated bedroom decor ideas
              tailored for Dubai homes where elegance meets functionality. From
              high end villas to modern apartments, Al Eliza Interiors designs
              bedrooms that reflect luxury, comfort, and refined taste.
            </p>

            <p className="font-paragraph text-base text-neutral-300">
              Create a sanctuary that feels like a 5 star retreat every single
              day.
            </p>

            <div className="flex flex-col gap-4 md:flex-row">
              <ConsultationCTA
                buttonText="👉   Book Your Private Design Consultation"
                modalTitle="  Book Your Private Design Consultation"
              />

              <ConsultationCTA
                className="hover:border-gold-dark border border-white bg-transparent"
                buttonText="Get a Custom Quote for Your Bedroom Makeover"
                modalTitle=" Get a Custom Quote for Your Bedroom Makeover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="font-outfit text-gold mb-4 text-4xl tracking-widest md:text-5xl">
              Why Choose Al Eliza Interiors
            </h2>
            <p className="text-lg font-medium text-gray-900">
              Designing bedrooms in Dubai requires more than aesthetics it
              demands cultural awareness, architectural harmony, and luxury
              expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "متخصصون في luxury bedroom design Dubai",
                desc: "Expert designers catering specifically to the Dubai market.",
              },
              {
                title: "Tailored Solutions",
                desc: "Custom designs specifically for villas, penthouses, and apartments.",
              },
              {
                title: "Modern Bedroom Interiors UAE",
                desc: "Extensive expertise in the latest regional themes and styles.",
              },
              {
                title: "Premium Materials",
                desc: "Finishes, fabrics, and exclusive items sourced globally.",
              },
              {
                title: "Smart Systems",
                desc: "Seamless integration of smart lighting and bedroom automation.",
              },
              {
                title: "Proven Portfolio",
                desc: "Trusted by clients across Dubai’s most elite neighborhoods.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border-gold/25 flex items-center gap-4 rounded-xl border bg-white p-8 transition-all duration-500 sm:hover:scale-110"
              >
                <div>
                  <CheckCircle2 className="text-gold-dark mb-2 h-6 w-6" />
                  <h3 className="font-paragraph text-gold-dark mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>{" "}
          <p className="mx-auto mt-10 text-center text-lg text-neutral-600">
            We don’t just design bedrooms we craft personal sanctuaries that
            reflect your lifestyle.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="mb-16 text-center">
            <h2 className="text-gold-dark font-outfit mb-4 text-4xl md:text-5xl">
              Our Bedroom Design Solutions
            </h2>
            <p className="text-silver mx-auto max-w-3xl text-lg">
              We don’t just design bedrooms we craft personal sanctuaries that
              reflect your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bedroomServices.map((item, i) => (
              <div
                key={i}
                className="border-gold/25 rounded-xl border bg-[#faf8f5] p-8 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-gold-dark font-outfit mb-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mb-4 text-neutral-600">{item.subTitle}</p>

                <ul className="ml-4 space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold-dark mt-1 h-5 w-5 shrink-0" />
                      <span className="text-neutral-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <FAQAccordion
            items={insightsFAQs}
            title="Featured Bedroom Insights"
            subtitle="(Dubai-Focused)"
          />
        </div>
      </section>

      <TransformationSection
        title="The Transformation You’ll Experience"
        subtitle="Designed for Dubai living—where style meets sophistication."
        footerParagraph="Designed for Dubai living where style meets sophistication."
        beforeLabel="Cluttered layouts, Poor lighting, Generic furniture"
        afterLabel="A refined, luxury retreat, reflecting your true identity"
        gainTitle="What You Gain:"
        gainItems={[
          "A refined, luxury retreat",
          "Intelligent space utilization",
          "Elevated comfort & ambiance",
          "A bedroom that reflects your identity",
        ]}
      />

      <section className="relative overflow-hidden bg-white py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-20 text-center">
            <h2 className="font-outfit mb-4 text-4xl md:text-5xl">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600">
              A seamless journey to your dream living space
            </p>
          </div>

          <div className="relative flex flex-col items-start justify-between md:flex-row">
            <div className="absolute left-[10%] right-[10%] top-[44px] z-0 hidden h-[2px] bg-gray-200 md:block"></div>

            {[
              {
                step: "1",
                title: "Consultation",
                desc: "We understand your vision, lifestyle, and space.",
              },
              {
                step: "2",
                title: "Concept Creation",
                desc: "Mood boards, layouts, and tailored bedroom decor ideas Dubai.",
              },
              {
                step: "3",
                title: "Design & Material",
                desc: "Premium finishes, furniture, and lighting curated for you.",
              },
              {
                step: "4",
                title: "Execution",
                desc: "Flawless implementation with attention to every detail.",
              },
              {
                step: "5",
                title: "Final Reveal",
                desc: "A stunning transformation ready to experience.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 mx-auto mb-12 flex max-w-[200px] flex-col items-center text-center md:mx-0 md:mb-0"
              >
                <div className="border-gold text-gold hover:bg-gold mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full border-4 bg-white text-3xl shadow-xl transition-colors hover:text-white">
                  {item.step}
                </div>
                <h3 className="font-outfit mb-3 text-xl">{item.title}</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-[#faf8f5] py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="font-outfit mb-4 text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_8px_40px_rgba(207,167,103,0.15)]"
              >
                <span className="absolute left-6 top-4 font-serif text-6xl text-[#CFA767]/30 transition group-hover:text-[#CFA767]/70">
                  &quot;
                </span>

                <p className="relative z-10 mb-6 mt-6 text-lg italic leading-relaxed text-gray-600">
                  “{item.text}”
                </p>

                <p className="font-semibold text-gray-900">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <FAQAccordion items={faq} title="Frequently Asked Questions" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-28 text-center">
        <div className="absolute inset-0 bg-[url('/images/hero-interior.webp')] bg-cover bg-center opacity-15"></div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="font-outfit mb-6 text-4xl text-white md:text-5xl lg:text-6xl">
            Ready to Redefine Your Bedroom?
          </h2>
          <p className="mb-4 text-xl font-light text-gray-300 md:text-2xl">
            Your dream bedroom isn’t just a vision it’s a{" "}
            <span className="font-semibold text-[#CFA767]">
              designed experience
            </span>{" "}
            waiting to happen.
          </p>
          <p className="mb-6 text-lg text-gray-400">
            With Al Eliza Interiors, you get - Bespoke luxury design,{" "}
            Dubai-focused expertise, and seamless execution.
          </p>
          <p className="border-gold/50 bg-gold/5 inline-block rounded-full border px-6 py-2 text-base font-medium text-white">
            ✨ Limited consultation slots available this month
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <ConsultationCTA
              buttonText="👉     Book Your Consultation Now"
              modalTitle="Book Your Consultation Now"
            />

            <ConsultationCTA
              className="hover:border-gold-dark border border-white bg-transparent"
              buttonText=" Get Your Personalized Bedroom Design Plan"
              modalTitle="  Get Your Personalized Bedroom Design Plan"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

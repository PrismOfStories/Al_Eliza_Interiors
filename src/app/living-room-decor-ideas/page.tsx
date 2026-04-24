import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Home,
  Layout,
  Maximize,
  PaintBucket,
  Sofa,
  Star,
} from "lucide-react";
import { icons } from "@/lib/utils/meta";
import FAQAccordion from "@/components/common/FAQAccordation";
import TransformationSection from "@/components/common/TransformationSection";
import ConsultationCTA from "@/components/common/ConsultationCTA";

export async function generateMetadata(): Promise<Metadata> {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title: "Luxury Living Room Decor Ideas Dubai | Al Eliza Interiors",
    description:
      "Discover luxury living room decor ideas in Dubai with Al Eliza Interiors. Transform your apartment or villa with modern, elegant, and high-end interior design. Book your consultation today.",
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
      canonical: `${siteURL}/living-room-decor-ideas`,
    },
    openGraph: {
      title: "Luxury Living Room Decor Ideas Dubai | Al Eliza Interiors",
      description:
        "Discover luxury living room decor ideas in Dubai with Al Eliza Interiors. Transform your apartment or villa with modern, elegant, and high-end interior design. Book your consultation today.",
      url: `${siteURL}/interior/design/in/dubai`,
      siteName: siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteURL}/images/opengraph/1200x630.png`,
          width: 1200,
          height: 630,
          alt: "Luxury Living Room Decor Ideas Dubai",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Luxury Living Room Decor Ideas Dubai | Al Eliza Interiors",
      description:
        "Discover luxury living room decor ideas in Dubai with Al Eliza Interiors. Transform your apartment or villa with modern, elegant, and high-end interior design. Book your consultation today.",
      creator: `@${authorName}`,
      site: `@${siteName}`,
    },
  };
}
export default function LivingRoomDecorIdeas() {
  const services = [
    {
      title: "Modern Living Room Decor Dubai",
      desc: "Sleek lines, neutral palettes, and curated textures that create a refined, contemporary ambiance.",
      img: "/images/home.webp",
      icon: Sofa,
    },
    {
      title: "Luxury Living Room Design Dubai",
      desc: "Statement pieces, layered lighting, and premium finishes designed for upscale villas and penthouses.",
      img: "/images/home.webp",
      icon: Star,
    },
    {
      title: "Dubai Apartment Living Room Ideas",
      desc: "Space optimized layouts, multifunctional furniture, and open-plan elegance tailored for city living.",
      img: "/images/home.webp",
      icon: Layout,
    },
    {
      title: "Villa Living Room Decor Dubai",
      desc: "Grand layouts with Arabic majlis design influences, perfect for entertaining and family gatherings.",
      img: "/images/home.webp",
      icon: Home,
    },
    {
      title: "Minimalist Living Room Dubai",
      desc: "Clutter free, calming environments using soft tones, hidden storage, and intentional design.",
      img: "/images/home.webp",
      icon: Maximize,
    },
    {
      title: "Contemporary Living Room UAE",
      desc: "A fusion of global trends with local aesthetics balancing modern luxury interiors with cultural depth.",
      img: "/images/home.webp",
      icon: PaintBucket,
    },
  ];

  const livingRoomFAQs = [
    {
      q: "What are the best living room decor ideas for Dubai apartments?",
      a: "Focus on space-saving furniture, neutral tones, mirrors for depth, and open-plan layouts. Add subtle luxury through lighting and textures.",
    },
    {
      q: "How do you create a luxury living room design in Dubai?",
      a: "Use premium materials like marble and glass, invest in statement furniture, layer lighting, and maintain a cohesive color palette",
    },
    {
      q: "What colors work best for living rooms in Dubai homes?",
      a: "Neutral palettes beige, ivory, taupe combined with gold or metallic accents create a sophisticated and climate appropriate aesthetic.",
    },
    {
      q: "How can I decorate a small living room in Dubai?",
      a: "Use multifunctional furniture, vertical storage, minimal decor, and strategic lighting to enhance space perception.",
    },
    {
      q: "What is modern Arabic living room decor?",
      a: "It blends majlis style seating, geometric patterns, and luxurious fabrics with contemporary layouts and finishes.",
    },
    {
      q: "Are minimalist living rooms popular in Dubai?",
      a: "Yes many homeowners prefer minimalist living room Dubai designs for their clean, elegant, and calming appeal.",
    },
  ];

  const faq = [
    {
      q: "What are the best living room decor ideas Dubai homeowners prefer?",
      a: "Modern, minimalist, and luxury designs with neutral palettes, premium finishes, and smart layouts.",
    },
    {
      q: "How much does a luxury living room design cost in Dubai?",
      a: "Costs vary based on size, materials, and customization. High-end projects typically reflect premium craftsmanship and bespoke elements.",
    },
    {
      q: "Can you design small apartment living rooms in Dubai?",
      a: "Yes. We specialize in living room decor ideas for Dubai apartments, focusing on maximizing space and style.",
    },
    {
      q: "What is included in your living room design service?",
      a: "Concept design, layout planning, material selection, furniture sourcing, and full execution.",
    },
    {
      q: "Do you offer villa living room decor in Dubai?",
      a: "Absolutely. We create luxury living room design ideas for villas in Dubai with grandeur and functionality.",
    },
    {
      q: "How long does a living room interior project take?",
      a: "Typically 4–8 weeks depending on scope and customization.",
    },
    {
      q: "Do you incorporate smart home features?",
      a: "Yes. We integrate smart lighting, automation, and modern tech seamlessly.",
    },
    {
      q: "What styles do you specialize in?",
      a: "Modern, minimalist, contemporary, and Arabic-inspired luxury interiors.",
    },
    {
      q: "Can you work within a budget?",
      a: "Yes. We also offer budget living room decor ideas UAE clients can implement without compromising style.",
    },
  ];

  const testimonials = [
    {
      text: "Our villa living room now feels like a luxury hotel lounge. Every detail is impeccable.",
      author: "Private Villa Owner, Dubai Hills",
    },
    {
      text: "They transformed our apartment into a modern masterpiece. Space feels doubled.",
      author: "Downtown Dubai Resident",
    },
    {
      text: "Elegant, minimal, and perfectly suited to our lifestyle. Highly recommended.",
      author: "Palm Jumeirah Homeowner",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative flex min-h-screen w-full items-center overflow-hidden">
        <Image
          src="/images/hero-interior.webp"
          alt="Luxury Living Room Interior Dubai"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="md:px-18 w-7xl relative mx-auto flex min-h-screen items-center px-6">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-paragraph text-4xl font-semibold leading-tight text-white md:text-6xl">
              Transform Your
              <span className="text-gold"> Living Space </span>
              into a Statement of <span className="text-gold"> Luxury </span>
            </h1>

            <p className="font-paragraph text-lg text-neutral-100">
              Experience bespoke living room decor ideas Dubai homeowners trust
              to elevate modern lifestyles. At Al Eliza Interiors, we design
              refined, elegant spaces that blend contemporary aesthetics with
              timeless Arabic influences perfectly suited for Dubai’s upscale
              apartments and villas.
            </p>

            <p className="font-paragraph  text-base text-neutral-100">
              Turn your living room into a masterpiece of comfort, style, and
              sophistication.
            </p>

            <div className="flex flex-col gap-4 md:flex-row">
              <ConsultationCTA
                buttonText="👉 Book Your Private Design Consultation"
                modalTitle="Book Your Private Design Consultation"
              />

              <Link
                href="/expertise"
                className="hover:bg-gold-dark hover:border-gold-dark rounded-lg border border-white bg-transparent px-6 py-3 text-lg font-medium text-white transition "
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="font-outfit text-gold mb-4 text-4xl  tracking-widest md:text-5xl">
              Why Choose Al Eliza Interiors
            </h2>
            <p className="text-lg font-medium text-gray-900">
              Dubai demands excellence and so do we.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tailored for Dubai Living",
                desc: "Designs that reflect luxury apartments, villas, and open-plan layouts",
              },
              {
                title: "High-End Expertise",
                desc: "Specialists in luxury living room design Dubai clients admire.",
              },
              {
                title: "Premium Materials",
                desc: "Marble, glass, bespoke woodwork, and curated furnishings.",
              },
              {
                title: "Smart Design Integration",
                desc: "Seamless incorporation of modern smart home decor.",
              },
              {
                title: "Client-Centric Approach",
                desc: "Every detail customized to your lifestyle.",
              },
              {
                title: "Trusted by Homeowners",
                desc: "Discerning homeowners across Dubai trust us for high-end living room interiors.",
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
          </div>
        </div>
      </section>

      {/* <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-gold-dark font-outfit mb-4 text-4xl  md:text-5xl">
              Our Living Room Design Solutions
            </h2>
            <p className="text-silver mx-auto max-w-2xl text-lg">
              Discover the perfect style tailored to your space and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <div
                key={i}
                className="group relative h-[300px] cursor-pointer overflow-hidden rounded-xl"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 transition duration-500 group-hover:bg-black/70" />

                <div className="absolute bottom-0 left-0 right-0 overflow-hidden p-6">
                  <div className="transition-all duration-500 md:translate-y-14 md:group-hover:-translate-y-6">
                    <h3 className="font-paragraph text-xl font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="font-paragraph mt-2 translate-y-0 text-base text-neutral-300 opacity-100 transition-all duration-500 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-gold-dark font-outfit mb-4 text-4xl md:text-5xl">
              Our Living Room Design Solutions
            </h2>
            <p className="text-silver mx-auto max-w-3xl text-lg">
              Discover the perfect style tailored to your space and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <div
                key={i}
                className="border-gold/25 rounded-xl border bg-[#faf8f5] p-8 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-gold-dark font-outfit mb-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mb-4 text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <FAQAccordion
            items={livingRoomFAQs}
            title="Smart Living Room Decor Ideas"
            subtitle="Expert insights for your Dubai home"
          />
        </div>
      </section>

      <TransformationSection />

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
                title: "Concept Design",
                desc: "Mood boards, layouts, and tailored living room decor ideas for Dubai apartments or villas.",
              },
              {
                step: "3",
                title: "Material Selection",
                desc: "Curated finishes, furniture, and decor elements.",
              },
              {
                step: "4",
                title: "Execution",
                desc: "Flawless implementation with attention to detail.",
              },
              {
                step: "5",
                title: "Final Styling",
                desc: "Styling your space to perfection—ready to impress.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 mx-auto mb-12 flex max-w-[200px] flex-col items-center text-center md:mx-0 md:mb-0"
              >
                <div className="border-gold text-gold hover:bg-gold mb-6 flex h-[88px] w-[88px]  items-center justify-center rounded-full border-4 bg-white text-3xl shadow-xl transition-colors hover:text-white">
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
              Client Experiences
            </h2>
            <p className="text-lg text-gray-600">
              What our clients say about our transformations
            </p>
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
          <FAQAccordion
            items={faq}
            title="Frequently Asked Questions"
            subtitle=""
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-28 text-center">
        <div className="absolute inset-0 bg-[url('/images/hero-interior.webp')] bg-cover bg-center opacity-15"></div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="font-outfit mb-6 text-4xl text-white md:text-5xl lg:text-6xl">
            Elevate Your Living Room Today
          </h2>
          <p className="mb-4 text-xl font-light text-gray-300 md:text-2xl">
            Your living room is more than a space it’s a{" "}
            <span className="font-semibold text-[#CFA767]">statement</span>.
          </p>
          <p className="mb-12 text-lg text-gray-400">
            With Al Eliza Interiors, you don’t just decorate you transform.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <ConsultationCTA
              buttonText="👉  Book Your Consultation Now"
              modalTitle=" Book Your Consultation Now"
            />

            <ConsultationCTA
              className="border border-white bg-transparent"
              buttonText="Get a Custom Quote"
              modalTitle="Get a Custom Quote"
            />
          </div>
          <p className="border-gold/50 bg-gold/5 inline-block rounded-full border px-6 py-2 text-base font-medium text-white">
            Limited consultation slots available for premium clients in Dubai
          </p>
        </div>
      </section>
    </main>
  );
}

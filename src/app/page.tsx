import ServiceCard from "@/components/common/ServiceCard";
import Hero from "@/components/homepage/Hero";
import InteriorDesignHero from "@/components/homepage/InteriorDesignHero";
import Testimonials from "@/components/homepage/Testimonials";
import { services } from "@/lib/static-data/home";
import ClientsCard from "@/components/common/ClientsCard";
import ProjectsScroll from "@/components/homepage/ProjectsScroll";
import { Metadata } from "next";
import { icons, title } from "@/lib/utils/meta";
import JsonLd from "@/lib/utils/JsonLd";
import ScrollReveal from "@/components/homepage/ScrollReveal";

const siteName = process.env.SITE_NAME;
const siteUrl = process.env.SITE_URL;

async function generateLdJsonHome() {
  const siteUrl = process.env.SITE_URL || "https://alelizainteriors.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Al Eliza Interior - Premier Interior Design in Dubai, UAE",
        description:
          "Al Eliza Interior is Dubai's leading interior design company specializing in luxury residential and commercial spaces. Expert designers creating elegant, functional interiors across Dubai, Abu Dhabi, and UAE.",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
        keywords:
          "interior design Dubai, home interior design UAE, commercial interior design, luxury interior designers Dubai, office design Dubai, villa interior design, apartment design UAE",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Al Eliza Interior",
        alternateName: [
          "Al Eliza Interior Dubai",
          "Al Eliza Design Studio",
          "Al Eliza Interiors UAE",
        ],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#logo`,
          inLanguage: "en-US",
          url: `${siteUrl}/images/logo.webp`,
          contentUrl: `${siteUrl}/images/logo.webp`,
          width: 250,
          height: 60,
          caption:
            "Al Eliza Interior - Dubai's Premier Interior Design Company",
        },
        image: { "@id": `${siteUrl}/#logo` },
        description:
          "Al Eliza Interior is a premier interior design company in Dubai, UAE, specializing in creating elegant, functional, and innovative spaces for residential and commercial clients across the Emirates.",
        foundingDate: "2020",
        numberOfEmployees: "10-50",
        slogan: "Transform Your Space with Elegant Designs",
        sameAs: [
          "https://m.facebook.com/p/Al-eliza-design-Studio-100086651834406",
          "https://www.instagram.com/al_eliza_interiors",
          "https://www.linkedin.com/company/al-eliza",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+971522889300",
            contactType: "Customer Service",
            areaServed: ["AE", "Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
            availableLanguage: ["English", "Arabic", "Malayalam", "Hindi"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
          },
          {
            "@type": "ContactPoint",
            contactType: "Sales",
            telephone: "+971522889300",
            areaServed: "AE",
            availableLanguage: ["English", "Arabic"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dubai Design District",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          postalCode: "00000",
          addressCountry: "AE",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Interior Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Residential Interior Design",
                description:
                  "Complete home interior design services including space planning, furniture selection, and decoration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Interior Design",
                description:
                  "Office and commercial space design including corporate offices, retail spaces, and hospitality venues",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Turnkey Interior Solutions",
                description:
                  "Complete project management from concept to completion including procurement and installation",
              },
            },
          ],
        },
        award: [
          "Dubai's Top Interior Design Company 2023",
          "Excellence in Residential Design Award",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: "Al Eliza Interior",
        url: siteUrl,
        image: [
          `${siteUrl}/images/logo.webp`,
          `${siteUrl}/images/opengraph/2800x1600.png`,
        ],
        telephone: "+971522889300",
        email: "info@alelizainteriors.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dubai Design District",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          postalCode: "00000",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.28913746105181,
          longitude: 55.3593494284814,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
        currenciesAccepted: "AED",
        sameAs: [
          "https://m.facebook.com/p/Al-eliza-design-Studio-100086651834406",
          "https://www.instagram.com/al_eliza_interiors",
          "https://www.linkedin.com/company/al-eliza",
        ],
        priceRange: "$$$",
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 25.28913746105181,
            longitude: 55.3593494284814,
          },
          geoRadius: "100000",
        },
        hasMap: "https://maps.google.com/?q=Dubai+Design+District,Dubai,UAE",
        isAccessibleForFree: false,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "47",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            "@id": `${siteUrl}/#review1`,
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
            },
            author: {
              "@type": "Person",
              name: "Ahmed Al Mansouri",
              location: "Dubai, UAE",
            },
            reviewBody:
              "Al Eliza Interior transformed our villa in Emirates Hills beyond our expectations. Their attention to detail and understanding of luxury design is exceptional. Highly recommended for anyone looking for premium interior design in Dubai.",
            datePublished: "2024-01-15",
            publisher: { "@id": `${siteUrl}/#organization` },
          },
          {
            "@type": "Review",
            "@id": `${siteUrl}/#review2`,
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
            },
            author: {
              "@type": "Person",
              name: "Sarah Johnson",
              location: "Dubai Marina, UAE",
            },
            reviewBody:
              "Working with Al Eliza was a dream. They designed our penthouse with perfect blend of modern elegance and functionality. The team was professional throughout the project. Best interior designers in Dubai!",
            datePublished: "2024-02-20",
            publisher: { "@id": `${siteUrl}/#organization` },
          },
          {
            "@type": "Review",
            "@id": `${siteUrl}/#review3`,
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
            },
            author: {
              "@type": "Person",
              name: "Michael Thompson",
              location: "Downtown Dubai, UAE",
            },
            reviewBody:
              "Al Eliza designed our corporate office in DIFC. The result exceeded all expectations - a perfect balance of luxury and productivity. Their turnkey approach made the entire process seamless.",
            datePublished: "2024-03-10",
            publisher: { "@id": `${siteUrl}/#organization` },
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professionalservice`,
        name: "Al Eliza Interior Design Services",
        alternateName: "Professional Interior Design Dubai",
        url: siteUrl,
        image: `${siteUrl}/images/logo.webp`,
        description:
          "Professional interior design services in Dubai offering comprehensive residential and commercial design solutions with expert consultation, 3D visualization, and project management.",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: [
          {
            "@type": "City",
            name: "Dubai",
            containedInPlace: {
              "@type": "Country",
              name: "United Arab Emirates",
            },
          },
          {
            "@type": "City",
            name: "Abu Dhabi",
            containedInPlace: {
              "@type": "Country",
              name: "United Arab Emirates",
            },
          },
          {
            "@type": "State",
            name: "UAE",
          },
        ],
        serviceType: "Interior Design",
        category: "Design Services",
        hasOfferCatalog: { "@id": `${siteUrl}/#organization` },
        serviceOutput: {
          "@type": "CreativeWork",
          name: "Interior Design Project",
          description:
            "Complete interior design solution from concept to implementation",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        name: "Interior Design FAQ - Al Eliza Interior Dubai",
        description:
          "Frequently asked questions about interior design services in Dubai, UAE",
        mainEntity: [
          {
            "@type": "Question",
            name: "What interior design services do you offer in Dubai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Al Eliza Interior offers comprehensive interior design services including residential design, commercial design, space planning, 3D visualization, furniture selection, turnkey solutions, and project management for homes, offices, and commercial spaces across Dubai and UAE.",
            },
          },
          {
            "@type": "Question",
            name: "How much does interior design cost in Dubai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Interior design costs in Dubai vary based on project scope, space size, and design complexity. We offer flexible packages starting from AED 150 per square foot for residential projects and custom quotes for commercial spaces. Contact us for a detailed consultation and quote.",
            },
          },
          {
            "@type": "Question",
            name: "How long does an interior design project take in Dubai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Project timelines depend on scope and complexity. Residential projects typically take 8-16 weeks from design to completion, while commercial projects may take 12-24 weeks. We provide detailed timelines during consultation.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide turnkey interior design solutions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer complete turnkey solutions including design, procurement, installation, and project management. Our team handles everything from concept to completion, ensuring a hassle-free experience for our clients.",
            },
          },
          {
            "@type": "Question",
            name: "Which areas in Dubai do you serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We serve all areas of Dubai including Downtown Dubai, Dubai Marina, Emirates Hills, Palm Jumeirah, Jumeirah, DIFC, Business Bay, and surrounding emirates including Abu Dhabi and Sharjah.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work on both residential and commercial projects?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Al Eliza Interior specializes in both residential and commercial interior design. We design luxury homes, villas, apartments, corporate offices, retail spaces, restaurants, and hospitality venues throughout Dubai and UAE.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
    ],
  };
}

const data = await generateLdJsonHome();

export const metadata: Metadata = {
  title: "Al Eliza Interior | Best Interior Design Company in Dubai, UAE",
  description:
    "Al Eliza Interior is a premier interior design company in Dubai, UAE. We specialize in bespoke residential and commercial interiors, transforming spaces into elegant, modern, and functional designs.",
  icons,
  openGraph: {
    title: "Al Eliza Interior | Best Interior Design Company in Dubai, UAE",
    description:
      "Al Eliza Interior is a premier interior design company in Dubai, UAE. We specialize in bespoke residential and commercial interiors, transforming spaces into elegant, modern, and functional designs.",
    images: [
      {
        url: `${siteUrl}/images/opengraph/300x300.png`,
        width: 300,
        height: 300,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1200x627.png`,
        width: 1200,
        height: 627,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1200x630.png`,
        width: 1200,
        height: 630,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1200x675.png`,
        width: 1200,
        height: 675,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1080x1080.png`,
        width: 1080,
        height: 1080,
        alt: `${title} | ${siteName}`,
      },
    ],
  },
  alternates: {
    canonical: "https://alelizainteriors.com",
  },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={JSON.stringify(data)} />
      {/* Hero Section */}
      <section aria-label="Hero video introduction">
        <Hero />
      </section>

      <section aria-label="Welcome to Al Eliza Interiors">
        <ScrollReveal />
      </section>

      {/* Portfolio Gallery */}
      <section aria-label="Project portfolio gallery">
        <ProjectsScroll />
      </section>

      {/* About Section */}
      <section aria-label="About Al-Eliza Interiors">
        <InteriorDesignHero />
      </section>

      {/* Services Section */}
      <section aria-label="Our expertise and services">
        <ServiceCard title="Expertise" projects={services} />
      </section>

      {/* Clients Section */}
      <section className="py-16 lg:py-28" aria-label="Our prestigious clients">
        <ClientsCard />
      </section>

      {/* Testimonials Section */}
      <section aria-label="Client testimonials">
        <Testimonials />
      </section>
    </main>
  );
}

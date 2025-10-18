import ServiceCard from "@/components/common/ServiceCard";
import Hero from "@/components/homepage/Hero";
import InteriorDesignHero from "@/components/homepage/InteriorDesignHero";
import Testimonials from "@/components/homepage/Testimonials";
import ScrollHero from "@/components/homepage/ScrollHero";
import { services } from "@/lib/static-data/home";
import ClientsCard from "@/components/common/ClientsCard";
import ProjectsScroll from "@/components/homepage/ProjectsScroll";
import { Metadata } from "next";
import { icons, title } from "@/lib/utils/meta";
import JsonLd from "@/lib/utils/JsonLd";

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
        name: "Al Eliza Interior",
        description:
          "Al Eliza Interior is a leading interior design company based in Dubai, UAE, offering bespoke residential and commercial design solutions.",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Al Eliza Interior",
        alternateName: "Al Eliza Interior Dubai",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#logo`,
          inLanguage: "en-US",
          url: `${siteUrl}/images/logo.webp`,
          contentUrl: `${siteUrl}/images/logo.webp`,
          width: 250,
          height: 60,
          caption: "Al Eliza Interior",
        },
        image: { "@id": `${siteUrl}/#logo` },
        sameAs: [
          "https://m.facebook.com/p/Al-eliza-design-Studio-100086651834406",
          "https://www.instagram.com/al_eliza_interiors",
          "https://www.linkedin.com/company/al-eliza",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971522889300",
          contactType: "Customer Support",
          areaServed: "AE",
          availableLanguage: ["English", "Arabic", "Malayalam", "Hindi"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: "Al Eliza Interior",
        url: siteUrl,
        image: `${siteUrl}/images/logo.webp`,
        telephone: "+971522889300",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dubai Design District",
          addressLocality: "Dubai",
          addressRegion: "DU",
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
        sameAs: [
          "https://m.facebook.com/p/Al-eliza-design-Studio-100086651834406",
          "https://www.instagram.com/al_eliza_interiors",
          "https://www.linkedin.com/company/al-eliza",
        ],
        priceRange: "$$",
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

      {/* Welcome Message */}
      <section aria-label="Welcome message">
        <ScrollHero />
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

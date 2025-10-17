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
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/?s={search_term_string}`,
          },
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
          "@id": `${siteUrl}/#/schema/logo/image/`,
          inLanguage: "en-US",
          url: `${siteUrl}/images/logo.png`,
          contentUrl: `${siteUrl}/images/logo.png`,
          width: 250,
          height: 60,
          caption: "Al Eliza Interior",
        },
        image: { "@id": `${siteUrl}/#/schema/logo/image/` },
        sameAs: [
          "https://www.facebook.com/p/Al-eliza-design-Studio-100086651834406/?_rdr",
          "https://www.instagram.com/alelizainteriors?igsh=NHgxYzUyc3dzMmVu",
          "https://www.linkedin.com/company/al-eliza/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971 522 889 300",
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
        image: `${siteUrl}/images/logo.png`,
        telephone: "+971 522 889 300",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dubai Design District",
          addressLocality: "Dubai",
          addressRegion: "DU",
          postalCode: "00000",
          addressCountry: "AE",
        },
        openingHours: "Mo-Sa 09:00-18:00",
        sameAs: [
          "https://www.facebook.com/p/Al-eliza-design-Studio-100086651834406/?_rdr",
          "https://www.instagram.com/alelizainteriors?igsh=NHgxYzUyc3dzMmVu",
          "https://www.linkedin.com/company/al-eliza/",
        ],
        priceRange: "$$",
      },
    ],
  };
}

const data = await generateLdJsonHome();

export const metadata: Metadata = {
  title: "Al Eliza Interior - Transform Your Space with Elegant Designs",
  description:
    "Al Eliza Interior specializes in creating beautiful, functional spaces with elegant design solutions. Transform your home or office with our expert interior design services.",
  icons,
  openGraph: {
    title: "Al Eliza Interior - Transform Your Space with Elegant Designs",
    description:
      "Welcome to Al Eliza Interior. Discover our elegant design solutions and transform your space with our expert interior design services.",
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

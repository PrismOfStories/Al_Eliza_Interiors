import React from "react";
import Services from "@/components/pages/Services";
import JsonLd from "@/lib/utils/JsonLd";
import { icons } from "@/lib/utils/meta";

async function generateLdJsonExpertise() {
  const siteUrl = process.env.SITE_URL || "https://alelizainteriors.com";
  const pageUrl = `${siteUrl}/expertise`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: "Interior Design Services & Expertise | Al Eliza Interior Dubai",
        description:
          "Discover Al Eliza Interior's comprehensive range of interior design services in Dubai, UAE. From residential to commercial design, space planning to turnkey solutions - expert designers at your service.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id": `${pageUrl}#primaryimage`,
          url: `${siteUrl}/images/opengraph/1200x630.png`,
          width: 1200,
          height: 630,
          caption:
            "Al Eliza Interior Services - Professional Interior Design Dubai",
        },
        mainEntity: { "@id": `${pageUrl}/#services` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Expertise",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}/#services`,
        name: "Al Eliza Interior Design Services",
        description:
          "Comprehensive interior design services offering in Dubai and UAE",
        numberOfItems: "8",
        itemListElement: [
          {
            "@type": "Service",
            "@id": `${pageUrl}/#residential-design`,
            name: "Residential Interior Design",
            description:
              "Complete home interior design services including living rooms, bedrooms, kitchens, bathrooms, and outdoor spaces for villas, apartments, and townhouses in Dubai.",
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
            ],
            serviceType: "Interior Design",
            category: "Residential Design",
            offers: {
              "@type": "Offer",
              description:
                "Professional residential interior design consultation and implementation",
              priceRange: "$$$",
              availableAtOrFrom: {
                "@type": "Place",
                name: "Dubai Design District, Dubai, UAE",
              },
            },
          },
          {
            "@type": "Service",
            "@id": `${pageUrl}/#commercial-design`,
            name: "Commercial Interior Design",
            description:
              "Professional office and commercial space design for businesses, retail stores, restaurants, and hospitality venues across Dubai and UAE.",
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
            ],
            serviceType: "Interior Design",
            category: "Commercial Design",
            offers: {
              "@type": "Offer",
              description:
                "Complete commercial interior design and fit-out services",
              priceRange: "$$$",
            },
          },
          {
            "@type": "Service",
            "@id": `${pageUrl}/#space-planning`,
            name: "Space Planning & Layout Design",
            description:
              "Expert space planning and layout optimization to maximize functionality and flow in residential and commercial spaces.",
            provider: { "@id": `${siteUrl}/#organization` },
            serviceType: "Consultation",
            category: "Space Planning",
          },
          {
            "@type": "Service",
            "@id": `${pageUrl}/#3d-visualization`,
            name: "3D Visualization & Rendering",
            description:
              "Photorealistic 3D renderings and virtual walkthroughs to help clients visualize their space before implementation.",
            provider: { "@id": `${siteUrl}/#organization` },
            serviceType: "Design Visualization",
            category: "3D Design",
          },
          {
            "@type": "Service",
            "@id": `${pageUrl}/#turnkey-solutions`,
            name: "Turnkey Interior Solutions",
            description:
              "Complete project management from concept to completion including design, procurement, installation, and styling.",
            provider: { "@id": `${siteUrl}/#organization` },
            serviceType: "Project Management",
            category: "Full Service",
          },
          {
            "@type": "Service",
            "@id": `${pageUrl}/#furniture-selection`,
            name: "Furniture Selection & Procurement",
            description:
              "Curated furniture and decor selection with procurement and delivery services for luxury and contemporary spaces.",
            provider: { "@id": `${siteUrl}/#organization` },
            serviceType: "Procurement",
            category: "Furniture & Decor",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}/#professional-service`,
        name: "Al Eliza Interior Design Services Dubai",
        alternateName: "Professional Interior Design Consultation Dubai",
        description:
          "Premier interior design consultancy offering personalized design solutions for luxury residential and commercial projects in Dubai, UAE.",
        provider: { "@id": `${siteUrl}/#organization` },
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 25.28913746105181,
            longitude: 55.3593494284814,
          },
          geoRadius: "50000",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Interior Design Service Catalog",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@id": `${pageUrl}/#residential-design` },
              businessFunction: "http://purl.org/goodrelations/v1#Sell",
            },
            {
              "@type": "Offer",
              itemOffered: { "@id": `${pageUrl}/#commercial-design` },
              businessFunction: "http://purl.org/goodrelations/v1#Sell",
            },
          ],
        },
      },
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
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Al Eliza Interior",
        alternateName: ["Al Eliza Interior Dubai", "Al Eliza Design Studio"],
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
          "Al Eliza Interior is a premier interior design company in Dubai, UAE, specializing in creating elegant, functional, and innovative spaces for residential and commercial clients.",
        sameAs: [
          "https://m.facebook.com/p/Al-eliza-design-Studio-100086651834406",
          "https://www.instagram.com/al_eliza_interiors",
          "https://www.linkedin.com/company/al-eliza",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971522889300",
          contactType: "Customer Service",
          areaServed: ["AE", "Dubai", "Abu Dhabi"],
          availableLanguage: ["English", "Arabic", "Malayalam", "Hindi"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dubai Design District",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.28913746105181,
          longitude: 55.3593494284814,
        },
      },
    ],
  };
}

const data = await generateLdJsonExpertise();

export async function generateMetadata() {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title: "Al Eliza Interiors | Expert Interior Design Services in Dubai, UAE",
    description: `Premium interior design services in Dubai, UAE. From luxury villas to commercial spaces, Al Eliza Interiors brings your vision to life`,
    author: authorName,
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
      canonical: `${siteURL}/expertise`,
    },
    openGraph: {
      title: `Al Eliza Interiors | Expert Interior Design Services in Dubai, UAE`,
      description:
        "Premium interior design services in Dubai, UAE. From luxury villas to commercial spaces, Al Eliza Interiors brings your vision to life",
      url: `${siteURL}/expertise`,
      siteName: siteName,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: `${siteURL}/images/opengraph/1200x630.png`,
          width: 1200,
          height: 630,
          alt: "Al Eliza Interior - Expert Interior Design Services",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Al Eliza Interiors | Expert Interior Design Services in Dubai, UAE",
      description:
        "Premium interior design services in Dubai, UAE. From luxury villas to commercial spaces, Al Eliza Interiors brings your vision to life",
      creator: "@al_eliza_interiors",
      site: "@al_eliza_interiors",
      image: `${siteURL}/images/opengraph/1200x630.png`,
      url: `${siteURL}/expertise`,
    },
  };
}

export default function page() {
  return (
    <>
      <JsonLd data={JSON.stringify(data)} />
      <Services />
    </>
  );
}

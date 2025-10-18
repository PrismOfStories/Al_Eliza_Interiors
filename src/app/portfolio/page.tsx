import Portfolio from "@/components/pages/Portfolio";
import JsonLd from "@/lib/utils/JsonLd";
import { icons } from "@/lib/utils/meta";
import React from "react";

async function generateLdJsonPortfolio() {
  const siteUrl = process.env.SITE_URL || "https://alelizainteriors.com";
  const pageUrl = `${siteUrl}/portfolio`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: "Interior Design Portfolio | Al Eliza Interior Dubai",
        description:
          "Explore Al Eliza Interior's portfolio featuring luxury residential and commercial interior design projects in Dubai, UAE. View our latest design concepts, transformations, and award-winning interiors.",
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
            "Al Eliza Interior Portfolio - Dubai's Premier Interior Design Projects",
        },
        mainEntity: { "@id": `${pageUrl}/#portfolio` },
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
            name: "Portfolio",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}/#portfolio`,
        name: "Al Eliza Interior Design Portfolio",
        description:
          "Collection of premium interior design projects by Al Eliza Interior in Dubai, showcasing residential and commercial spaces",
        numberOfItems: "25",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        itemListElement: [
          {
            "@type": "CreativeWork",
            name: "Luxury Villa Interior Design - Dubai Hills",
            description:
              "Complete interior design and fit-out for a 5-bedroom luxury villa in Dubai Hills Estate",
            image: `${siteUrl}/images/portfolio/villa-dubai-hills.jpg`,
            creator: { "@id": `${siteUrl}/#organization` },
            dateCreated: "2024",
            genre: "Residential Interior Design",
            locationCreated: {
              "@type": "Place",
              name: "Dubai Hills Estate, Dubai, UAE",
            },
          },
          {
            "@type": "CreativeWork",
            name: "Modern Office Design - Downtown Dubai",
            description:
              "Contemporary office interior design for a tech company in Downtown Dubai",
            image: `${siteUrl}/images/portfolio/office-downtown.jpg`,
            creator: { "@id": `${siteUrl}/#organization` },
            dateCreated: "2024",
            genre: "Commercial Interior Design",
            locationCreated: {
              "@type": "Place",
              name: "Downtown Dubai, UAE",
            },
          },
          {
            "@type": "CreativeWork",
            name: "Penthouse Apartment - Marina Dubai",
            description:
              "Luxury penthouse interior design with panoramic Dubai Marina views",
            image: `${siteUrl}/images/portfolio/penthouse-marina.jpg`,
            creator: { "@id": `${siteUrl}/#organization` },
            dateCreated: "2023",
            genre: "Residential Interior Design",
            locationCreated: {
              "@type": "Place",
              name: "Dubai Marina, Dubai, UAE",
            },
          },
        ],
      },
      {
        "@type": "ImageGallery",
        "@id": `${pageUrl}/#gallery`,
        name: "Al Eliza Interior Design Gallery",
        description:
          "Visual showcase of our interior design projects across Dubai and UAE",
        associatedMedia: [
          {
            "@type": "ImageObject",
            name: "Luxury Living Room Design Dubai",
            description:
              "Contemporary luxury living room with modern furnishing and elegant decor",
            url: `${siteUrl}/images/gallery/living-room-1.jpg`,
            contentLocation: "Dubai, UAE",
            creator: { "@id": `${siteUrl}/#organization` },
          },
          {
            "@type": "ImageObject",
            name: "Modern Kitchen Design UAE",
            description:
              "State-of-the-art kitchen design with premium appliances and custom cabinetry",
            url: `${siteUrl}/images/gallery/kitchen-1.jpg`,
            contentLocation: "Dubai, UAE",
            creator: { "@id": `${siteUrl}/#organization` },
          },
          {
            "@type": "ImageObject",
            name: "Master Bedroom Interior Dubai",
            description:
              "Elegant master bedroom design with luxury finishes and ambient lighting",
            url: `${siteUrl}/images/gallery/bedroom-1.jpg`,
            contentLocation: "Dubai, UAE",
            creator: { "@id": `${siteUrl}/#organization` },
          },
        ],
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
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Residential Interior Design",
              description:
                "Complete home interior design including living rooms, bedrooms, kitchens, and bathrooms",
            },
            areaServed: "Dubai, UAE",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Interior Design",
              description:
                "Office and commercial space design for businesses across Dubai",
            },
            areaServed: "Dubai, UAE",
          },
        ],
      },
    ],
  };
}

const data = await generateLdJsonPortfolio();

export async function generateMetadata() {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title:
      "Al Eliza Interiors | Stunning Interior Design Portfolio in Dubai, UAE",
    description:
      "Explore Al Eliza Interiors' exclusive portfolio showcasing luxury villas, apartments, and commercial spaces in Dubai. See our bespoke interior designs that transform spaces into elegant and functional masterpieces.",
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
      canonical: `${siteURL}/portfolio`,
    },
    openGraph: {
      title: `Al Eliza Interiors | Stunning Interior Design Portfolio in Dubai, UAE`,
      description:
        "Explore Al Eliza Interiors' exclusive portfolio showcasing luxury villas, apartments, and commercial spaces in Dubai. See our bespoke interior designs that transform spaces into elegant and functional masterpieces.",
      url: `${siteURL}/portfolio`,
      siteName: siteName,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: `${siteURL}/images/opengraph/1200x630.png`,
          width: 1200,
          height: 630,
          alt: "Al Eliza Interiors - Expert Interior Design Services",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Al Eliza Interiors | Stunning Interior Design Portfolio in Dubai, UAE`,
      description:
        "Explore Al Eliza Interiors' exclusive portfolio showcasing luxury villas, apartments, and commercial spaces in Dubai. See our bespoke interior designs that transform spaces into elegant and functional masterpieces.",
      creator: "@al_eliza_interiors",
      site: "@al_eliza_interiors",
      image: `${siteURL}/images/opengraph/1200x630.png`,
      url: `${siteURL}/portfolio`,
    },
  };
}

export default function page() {
  return (
    <>
      <JsonLd data={JSON.stringify(data)} />
      <Portfolio />
    </>
  );
}

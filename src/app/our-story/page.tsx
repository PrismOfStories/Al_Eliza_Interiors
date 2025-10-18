import React from "react";
import OurStory from "@/components/pages/OurStory";
import { icons } from "@/lib/utils/meta";
import JsonLd from "@/lib/utils/JsonLd";

async function generateLdJsonOurStory() {
  const siteUrl = process.env.SITE_URL || "https://alelizainteriors.com";
  const pageUrl = `${siteUrl}/our-story`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: "About Al Eliza Interior | Our Story & Vision in Dubai",
        description:
          "Learn about Al Eliza Interior's journey as Dubai's premier interior design company. Discover our passion for creating elegant, functional spaces and our commitment to excellence in residential and commercial design.",
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
          caption: "Al Eliza Interior - About Our Design Journey in Dubai",
        },
        mainEntity: { "@id": `${siteUrl}/#organization` },
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
            name: "Our Story",
            item: pageUrl,
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
          "Al Eliza Interior is a premier interior design company established in Dubai, UAE, specializing in creating elegant, functional, and innovative spaces for discerning residential and commercial clients across the Emirates.",
        foundingDate: "2020",
        foundingLocation: {
          "@type": "Place",
          name: "Dubai, United Arab Emirates",
        },
        numberOfEmployees: "10-50",
        slogan: "Transform Your Space with Elegant Designs",
        mission:
          "To create exceptional interior spaces that reflect our clients' personalities and enhance their lifestyle through innovative design, premium materials, and meticulous attention to detail.",
        awards: [
          "Dubai's Top Interior Design Company 2023",
          "Excellence in Residential Design Award 2023",
          "Best Commercial Interior Design Dubai 2022",
        ],
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
            areaServed: ["AE", "Dubai", "Abu Dhabi", "Sharjah"],
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
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.28913746105181,
          longitude: 55.3593494284814,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Interior Design Services Dubai",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Luxury Residential Interior Design",
                description:
                  "High-end residential interior design for villas, penthouses, and luxury apartments in Dubai",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Interior Design",
                description:
                  "Professional office and retail space design for businesses across Dubai and UAE",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Turnkey Interior Solutions",
                description:
                  "Complete design and build services from concept to completion",
              },
            },
          ],
        },
        founder: {
          "@type": "Person",
          name: "Eliza Al Mansoori",
          jobTitle: "Founder & Principal Designer",
          description:
            "Award-winning interior designer with over 15 years of experience in luxury residential and commercial design across the Middle East.",
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "American University of Sharjah",
          },
        },
        employee: [
          {
            "@type": "Person",
            name: "Design Team Al Eliza",
            jobTitle: "Senior Interior Designers",
            description:
              "Experienced team of interior designers specializing in luxury and contemporary design",
          },
        ],
      },
    ],
  };
}

const data = await generateLdJsonOurStory();

export async function generateMetadata() {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title: "Discover the Journey Behind Al Eliza Interiors' Success Story",
    description: `Explore the inspiring journey of Al Eliza Interiors and how we became Dubai's leading luxury interior design firm. Learn what sets us apart and why clients trust us for bespoke residential and commercial interiors.`,
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
      canonical: `${siteURL}/our-story`,
    },
    openGraph: {
      title: `Discover the Journey Behind Al Eliza Interiors' Success Story`,
      description:
        "Explore the inspiring journey of Al Eliza Interiors and how we became Dubai's leading luxury interior design firm. Learn what sets us apart and why clients trust us for bespoke residential and commercial interiors.",
      url: `${siteURL}/our-story`,
      siteName: siteName,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: `${siteURL}/images/opengraph/1200x630.png`,
          width: 1200,
          height: 630,
          alt: "Al Eliza Interior - Our Story",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Discover the Journey Behind Al Eliza Interiors' Success Story",
      description:
        "Explore the inspiring journey of Al Eliza Interiors and how we became Dubai's leading luxury interior design firm. Learn what sets us apart and why clients trust us for bespoke residential and commercial interiors.",
      creator: "@al_eliza_interiors",
      site: "@al_eliza_interiors",
      image: `${siteURL}/images/opengraph/1200x630.png`,
      url: `${siteURL}/our-story`,
    },
  };
}

export default function page() {
  return (
    <>
      <JsonLd data={JSON.stringify(data)} />
      <OurStory />
    </>
  );
}

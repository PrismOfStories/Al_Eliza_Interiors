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
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Our Story - Al Eliza Interior",
        description:
          "Discover Al Eliza Interior's journey and expertise in delivering luxury residential and commercial interior design in Dubai, UAE.",
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id": `${pageUrl}#primaryimage`,
          url: `${siteUrl}/images/1200x630.png`,
          width: 1200,
          height: 630,
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

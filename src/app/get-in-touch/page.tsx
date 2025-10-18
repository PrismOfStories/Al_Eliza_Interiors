import React from "react";
import GetInTouch from "@/components/pages/GetInTouch";
import { icons } from "@/lib/utils/meta";
import JsonLd from "@/lib/utils/JsonLd";

async function generateLdJsonContact() {
  const siteUrl = process.env.SITE_URL || "https://alelizainteriors.com";
  const pageUrl = `${siteUrl}/get-in-touch`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: "Contact Al Eliza Interior | Get In Touch for Design Consultation",
        description:
          "Contact Al Eliza Interior for professional interior design consultation in Dubai, UAE. Get in touch with our expert designers for residential and commercial projects. Free consultation available.",
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
          caption: "Contact Al Eliza Interior - Expert Interior Design Dubai",
        },
        mainEntity: { "@id": `${siteUrl}/#organization` },
        significantLink: [
          `${siteUrl}/portfolio`,
          `${siteUrl}/expertise`,
          `${siteUrl}/our-story`,
        ],
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
            name: "Contact",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ContactPoint",
        "@id": `${pageUrl}/#contactpoint`,
        contactType: "Business",
        telephone: "+971522889300",
        email: "info@alelizainteriors.com",
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
        availableLanguage: ["English", "Arabic", "Malayalam", "Hindi"],
        hoursAvailable: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "16:00",
          },
        ],
        contactOption: "TollFree",
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
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+971522889300",
            contactType: "Customer Service",
            areaServed: ["AE", "Dubai", "Abu Dhabi"],
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
            email: "sales@alelizainteriors.com",
            areaServed: "AE",
            availableLanguage: ["English", "Arabic"],
          },
          {
            "@type": "ContactPoint",
            contactType: "Support",
            telephone: "+971522889300",
            email: "support@alelizainteriors.com",
            areaServed: "AE",
            availableLanguage: ["English", "Arabic", "Hindi", "Malayalam"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dubai Design District",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
          postalCode: "00000",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.28913746105181,
          longitude: 55.3593494284814,
        },
        hasMap: "https://maps.google.com/?q=Dubai+Design+District,Dubai,UAE",
        openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-16:00"],
      },
    ],
  };
}

const data = await generateLdJsonContact();

export async function generateMetadata() {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  return {
    title: "Contact Al Eliza Interiors | Dubai Luxury Interior Design Experts",
    description:
      "Contact Al Eliza Interiors, Dubai's premier luxury interior design firm. Schedule a free consultation today for bespoke residential and commercial design services.",
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
      canonical: `${siteURL}/get-in-touch`,
    },
    openGraph: {
      title:
        "Contact Al Eliza Interiors | Dubai Luxury Interior Design Experts",
      description:
        "Contact Al Eliza Interiors, Dubai's premier luxury interior design firm. Schedule a free consultation today for bespoke residential and commercial design services.",
      url: `${siteURL}/get-in-touch`,
      siteName: siteName,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: `${siteURL}/images/opengraph/1200x630.png`,
          width: 1200,
          height: 630,
          alt: "Al Eliza Interior - Contact Us",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Contact Al Eliza Interiors | Dubai Luxury Interior Design Experts",
      description:
        "Get in touch with Al Eliza Interiors, Dubai's premier luxury interior design firm. Reach out for bespoke residential and commercial design consultations, quotes, and inquiries.",
      creator: `@${authorName}`,
      site: `@${siteName}`,
      url: `${siteURL}/get-in-touch`,
    },
  };
}

export default function page() {
  return (
    <>
      <JsonLd data={JSON.stringify(data)} />
      <GetInTouch />;
    </>
  );
}

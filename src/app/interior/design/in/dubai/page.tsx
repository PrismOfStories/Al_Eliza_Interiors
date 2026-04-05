import React from "react";
import { CheckCircle, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";
import { FAQSection } from "@/components/FAQSection";
import { icons } from "@/lib/utils/meta";
import { Metadata } from "next";
import DubaiInteriorPage from "@/components/DubaiInteriorPage";

export async function generateMetadata(): Promise<Metadata> {
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;


  return {
    title:
      "Expert Interior Design in Dubai | 3D Visualization & Custom Interiors",
    description:
      "Transform your space with our expert interior design services in Dubai. We offer 3D visualization, custom interiors, and luxury residential & commercial design solutions.",
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
      canonical: `${siteURL}/interior/design/in/dubai`,
    },
    openGraph: {
      title:
        "Expert Interior Design in Dubai | 3D Visualization & Custom Interiors",
      description:
        "Transform your space with our expert interior design services in Dubai. We offer 3D visualization, custom interiors, and luxury residential & commercial design solutions.",
      url: `${siteURL}/interior/design/in/dubai`,
      siteName: siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteURL}/images/opengraph/1200x630.png`,
          width: 1200,
          height: 630,
          alt: "Expert Interior Design in Dubai",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Expert Interior Design in Dubai | 3D Visualization & Custom Interiors",
      description:
        "Transform your space with our expert interior design services in Dubai. We offer 3D visualization, custom interiors, and luxury residential & commercial design solutions.",
      creator: `@${authorName}`,
      site: `@${siteName}`,
    },
  };
}

export default function Page() {

  

  return (
    <DubaiInteriorPage/>
  );
}

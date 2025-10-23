import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Layout from "@/components/common/Layout";
import "./globals.css";

const deltha = localFont({
  src: [
    { path: "../../public/fonts/Deltha.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Deltha.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-deltha",
});

const environment = localFont({
  src: [
    {
      path: "../../public/fonts/environment/Environment Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/environment/Environment Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/environment/Environment Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/environment/Environment Bold Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-environment",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Al Eliza Interior | Best Interior Design Company in Dubai, UAE",
  description:
    "Al Eliza Interior is a premier interior design company in Dubai, UAE. We specialize in bespoke residential and commercial interiors, transforming spaces into elegant, modern, and functional designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/preload.webp"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${poppins.variable} ${deltha.variable} ${environment.variable} bg-background antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

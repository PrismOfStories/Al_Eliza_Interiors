import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Bebas_Neue,
  Geist,
  Geist_Mono,
  Geo,
  Michroma,
  Unbounded,
  Poiret_One,
  Red_Hat_Display,
} from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/common/Wrapper";

const deltha = localFont({
  src: [
    { path: "../../public/fonts/Deltha.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Deltha.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-deltha",
});
// const majer = localFont({
//   src: [
//     { path: "../../public/fonts/Majer.ttf", weight: "400", style: "normal" },
//     { path: "../../public/fonts/majer.otf", weight: "700", style: "normal" },
//   ],
//   variable: "--font-majer",
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: "400",
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

const geo = Geo({
  variable: "--font-geo",
  subsets: ["latin"],
  weight: "400",
});

const poiret = Poiret_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poiret",
});

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-redhat",
});

export const metadata: Metadata = {
  title: "Al Eliza Interior - Transform Your Space with Elegant Designs",
  description:
    "Al Eliza Interior specializes in creating beautiful, functional spaces with elegant design solutions. Transform your home or office with our expert interior design services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${deltha.variable}  ${geistSans.variable} ${redHat.variable} ${poiret.variable} ${geistMono.variable} ${bebasNeue.variable} ${unbounded.variable} ${michroma.variable} ${geo.variable} bg-background antialiased`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}

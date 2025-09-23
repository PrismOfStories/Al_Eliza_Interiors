import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import Preloader from "@/lib/components/Preloader";
import Navbar from "@/components/common/Navbar";
// import SmoothScroll from "@/components/common/SmoothScroll";

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
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${unbounded.variable} bg-background antialiased`}
      >
        {/* <Preloader /> */}
        <Navbar />
        {/* <SmoothScroll /> */}
        {children}
      </body>
    </html>
  );
}

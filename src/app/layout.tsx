import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Wrapper from "@/components/common/Wrapper";
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
        className={`${poppins.variable} ${deltha.variable} ${environment.variable} bg-background antialiased`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}

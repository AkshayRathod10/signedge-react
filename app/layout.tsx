import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import Proivder from "./Provider";
import favIcon from "../assets/images/favicon.svg";

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SignEdge India Pvt Ltd.",
  description: "Built with Next.js and TypeScript",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.variable} suppressHydrationWarning>
      <body className={`dark:bg-black ${satoshi.className}`}>
        <Proivder>{children}</Proivder>
      </body>
    </html>
  );
}

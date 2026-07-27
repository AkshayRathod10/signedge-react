import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import Proivder from "./Provider";
import favIcon from "../assets/images/favicon.svg";

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/satoshi/woff2/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/woff2/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/woff2/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["system-ui", "arial"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.signedgeindia.com"),
  title: {
    default: "SignEdge India Pvt Ltd.",
    template: "%s | SignEdge India",
  },
  description:
    "SignEdge India Pvt Ltd — signage, branding and digital solutions.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
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

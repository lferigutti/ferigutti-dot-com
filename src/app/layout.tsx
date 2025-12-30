import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Leonardo Ferigutti - Full-Stack Developer",
  description:
    "Personal website of Leonardo Ferigutti, showcasing skills and projects.",
  metadataBase: new URL("https://ferigutti.com"),
  icons: {
    icon: "https://ferigutti.com/favicon.ico",
    apple: "https://ferigutti.com/logo-bright.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ferigutti.com",
    title: "Leonardo Ferigutti - Full-Stack Developer",
    description:
      "Personal website of Leonardo Ferigutti, showcasing skills and projects.",
    siteName: "Leonardo Ferigutti",
    images: [
      {
        url: "https://ferigutti.com/logo-bright.png",
        width: 1200,
        height: 630,
        alt: "Leonardo Ferigutti Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Ferigutti - Full-Stack Developer",
    description:
      "Personal website of Leonardo Ferigutti, showcasing skills and projects.",
    images: ["/logo-bright.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leonardo Ferigutti",
    url: "https://ferigutti.com",
    image: "https://ferigutti.com/logo-bright.png",
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://github.com/lferigutti",
      "https://www.linkedin.com/in/leonardoferigutti",
    ],
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <NavBar />
        
        <main className="flex-1">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

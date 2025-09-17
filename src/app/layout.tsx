
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteNav from "../components/SiteNav";
import CrisisBanner from "../components/CrisisBanner";
import LegalDisclaimer from "../components/LegalDisclaimer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mind Moment | Accessible Wellness Support",
  description: "Mind Moment: Accessible, safe, and supportive wellness resources for Canadians.",
  metadataBase: new URL("https://mindmoment.ca"),
  openGraph: {
    title: "Mind Moment | Accessible Wellness Support",
    description: "Accessible, safe, and supportive wellness resources for Canadians.",
    url: "https://mindmoment.ca",
    siteName: "Mind Moment",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind Moment | Accessible Wellness Support",
    description: "Accessible, safe, and supportive wellness resources for Canadians.",
    site: "@mindmomentca",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F4C5C" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-sand text-ink min-h-screen flex flex-col`}
      >
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <header>
          <SiteNav />
          <div className="sticky top-[56px] z-20 w-full">
            <CrisisBanner />
          </div>
        </header>
        <main id="main-content" className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="w-full max-w-5xl mx-auto px-4 pb-8">
          <LegalDisclaimer />
        </footer>
      </body>
    </html>
  );
}

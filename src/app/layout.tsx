import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F1C19",
};

export const metadata: Metadata = {
  title: "ChopK: Men's Pelvic Floor Training App for Better Control & Confidence | No Pills Needed",
  description: "The science-backed ChopK app guides men through pelvic floor kegel exercises — Locate, Engage, Train — to build lasting control, stamina, and confidence without pills or guesswork.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ChopK: Men's Pelvic Floor Training App for Better Control & Confidence | No Pills Needed",
    description: "The science-backed ChopK app guides men through pelvic floor kegel exercises — Locate, Engage, Train — to build lasting control, stamina, and confidence without pills or guesswork.",
    url: "https://chopk.com",
    siteName: "ChopK",
    images: [
      {
        url: "https://res.cloudinary.com/dcr0te1k4/image/upload/v1771111380/chopk-logo-kegel-app-upload_opqcda.png",
        width: 1200,
        height: 630,
        alt: "ChopK — Science-backed pelvic floor kegel training app for men",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChopK: Men's Pelvic Floor Training App for Better Control & Confidence | No Pills Needed",
    description: "The science-backed ChopK app guides men through pelvic floor kegel exercises — Locate, Engage, Train — to build lasting control, stamina, and confidence without pills or guesswork.",
    images: ["https://res.cloudinary.com/dcr0te1k4/image/upload/v1771111380/chopk-logo-kegel-app-upload_opqcda.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased min-h-screen bg-primary-dark text-text selection:bg-accent/30 flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow pt-24 pb-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

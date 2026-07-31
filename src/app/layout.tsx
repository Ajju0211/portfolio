import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { LenisProvider } from "@/shared/providers/lenis-provider";
import { CustomCursor } from "@/shared/ui/CustomCursor";
import { Toaster } from "sonner";
import { siteConfig } from "@/shared/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Ajay Singh", "Full Stack Developer", "MERN Stack", "Next.js Developer", "React Developer", "Software Engineer Portfolio"],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@ajaysingh", // User can update this
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // JSON-LD structured data for Google Search (Rich Snippets)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Full-Stack Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${inter.variable} font-sans antialiased`}>
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Decorative noise layer */}
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LenisProvider>
            {children}
            <Toaster richColors position="bottom-right" />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

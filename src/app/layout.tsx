import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { LenisProvider } from "@/shared/providers/lenis-provider";
import { CustomCursor } from "@/shared/ui/CustomCursor";
import { Toaster } from "sonner";

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
  title: "Ajay Singh | Full-Stack Engineer",
  description:
    "Portfolio of Ajay Singh — Full-Stack Engineer specialising in MERN, Next.js, and scalable backend systems.",
  keywords: ["Ajay Singh", "Full Stack Developer", "MERN", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Ajay Singh" }],
  openGraph: {
    title: "Ajay Singh | Full-Stack Engineer",
    description: "Portfolio of Ajay Singh — Full-Stack Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${inter.variable} font-sans antialiased`}>
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

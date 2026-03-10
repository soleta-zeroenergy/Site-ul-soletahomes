import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { baseMetadata } from "@/lib/metadata";
import "@/styles/globals.css";

/* ─── Fonts ─────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

/* ─── Metadata & Viewport ───────────────────────────────────────────────── */
export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#fafaf9",
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Layout ───────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased flex flex-col min-h-dvh">

        <Header />

        {/* Main content — padded top to clear fixed header */}
        <main
          id="main-content"
          className="flex-1 pt-20"
          tabIndex={-1}
        >
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}

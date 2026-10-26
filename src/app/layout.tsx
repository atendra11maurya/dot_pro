import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08080a",
};

export const metadata: Metadata = {
  title: "Anand Productions | Luxury Indian Wedding Cinema & Royal Photography",
  description: "Premier luxury Indian wedding filmmakers and editorial photographers capturing royal heritage and destination weddings across Udaipur, Jaipur, Goa, and worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

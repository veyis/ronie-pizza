import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/hooks/use-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ronnie Pizza | Authentic Italian Pizza Under New Management - Coming Soon to West Haven, CT",
  description: "Ronnie Pizza is reopening under new management in West Haven, CT. Join our grand reopening and experience improved recipes, enhanced service, and the authentic Italian flavors you love.",
  keywords: "pizza, Italian pizza, West Haven pizza, authentic pizza, new management, reopening, hand-crafted pizza, pizza restaurant, Ronnie Pizza, Connecticut pizza, grand reopening",
  authors: [{ name: "Ronnie Pizza" }],
  creator: "Ronnie Pizza",
  publisher: "Ronnie Pizza",
  formatDetection: {
    email: false,
    telephone: true,
    address: true,
  },
  metadataBase: new URL("https://www.ronniepizza.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ronnie Pizza | Under New Management - Coming Soon to West Haven, CT",
    description: "Ronnie Pizza is reopening under new management in West Haven, CT. Join our grand reopening and experience improved recipes, enhanced service, and the authentic Italian flavors you love.",
    url: "https://www.ronniepizza.com",
    siteName: "Ronnie Pizza",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ronnie Pizza - Authentic Italian Pizza Under New Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronnie Pizza | Under New Management - Coming Soon",
    description: "Ronnie Pizza is reopening under new management in West Haven, CT. Join our grand reopening!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Food & Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}

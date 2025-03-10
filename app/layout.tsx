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
  title: "Ronnie Pizza | Authentic Italian Pizza Coming Soon to West Haven, CT",
  description: "Ronnie Pizza is bringing authentic hand-crafted Italian pizza to West Haven, CT. Join our grand opening and experience the most delicious pizza made with fresh ingredients and traditional recipes.",
  keywords: "pizza, Italian pizza, West Haven pizza, authentic pizza, hand-crafted pizza, pizza restaurant, Ronnie Pizza, Connecticut pizza, grand opening",
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
    title: "Ronnie Pizza | Authentic Italian Pizza Coming Soon to West Haven, CT",
    description: "Ronnie Pizza is bringing authentic hand-crafted Italian pizza to West Haven, CT. Join our grand opening and experience the most delicious pizza made with fresh ingredients and traditional recipes.",
    url: "https://www.ronniepizza.com",
    siteName: "Ronnie Pizza",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ronnie Pizza - Authentic Italian Pizza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronnie Pizza | Authentic Italian Pizza Coming Soon",
    description: "Ronnie Pizza is bringing authentic hand-crafted Italian pizza to West Haven, CT. Join our grand opening!",
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

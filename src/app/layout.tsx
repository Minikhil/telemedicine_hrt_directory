import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HRT Telemedicine Directory",
  description: "Find and compare HRT (Hormone Replacement Therapy) telemedicine providers across different states. Compare prices, services, and availability.",
  icons: {
    icon: [
      { url: '/icon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
  openGraph: {
    title: "HRT Telemedicine Directory",
    description: "Find and compare HRT (Hormone Replacement Therapy) telemedicine providers across different states. Compare prices, services, and availability.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: "HRT Telemedicine Directory Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HRT Telemedicine Directory",
    description: "Find and compare HRT (Hormone Replacement Therapy) telemedicine providers across different states. Compare prices, services, and availability.",
    images: ['/icon.svg'],
  },
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
        {children}
      </body>
    </html>
  );
}

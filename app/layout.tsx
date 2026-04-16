import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

import Header from "@/components/layout/header";

import localFont from "next/font/local";
import Footer from "@/components/layout/footer";

const monoTrust = localFont({
  src: '../public/fonts/MomoTrustDisplay-Regular.ttf',
  variable: '--font-mono-trust',
  display: 'swap',
})

const monoTrustSans = localFont({
  src: '../public/fonts/MomoTrustSans.ttf',
  variable: '--font-mono-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Ignite",
  description: "You ship: 3 projects, We ship: a personal computer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monoTrust.variable} ${monoTrustSans.variable} h-full antialiased`}    >
      <body className="m-0 grow"
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

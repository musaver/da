import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif } from 'next/font/google';
import "../styles/globals.scss";
import "aos/dist/aos.css";
import Script from "next/script";
import ClientScripts from "@/components/ClientScripts";

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dev Aspire Agency",
  description: "Building bold brands with thoughtful design",
  icons: {
    icon: "/assets/images/logos/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${instrumentSerif.variable}`}>
      <body className={interTight.className}>
        {children}
        <ClientScripts />
        
        {/* Scripts */}
        <Script src="/assets/libs/jquery/dist/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/libs/owl.carousel/dist/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/aos-master/dist/aos.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

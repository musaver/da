import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif } from 'next/font/google';
import "../styles/globals.scss";
import "aos/dist/aos.css";
import Script from "next/script";
import ClientScripts from "@/components/ClientScripts";
import FloatingContact from "@/components/FloatingContact";
import { organizationSchema, websiteSchema, faqSchema, localBusinessSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dev Aspire Agency | Web Design & Development Company",
    template: "%s | Dev Aspire",
  },
  description:
    "Dev Aspire is a leading web design and development agency helping startups build bold brands with thoughtful design, custom websites, and digital solutions.",
  keywords: [
    "web design agency Pakistan",
    "web development company Pakistan",
    "web design Islamabad",
    "web development Islamabad",
    "custom website design Pakistan",
    "best web design agency in Pakistan",
    "digital marketing agency Pakistan",
    "UI/UX design services Pakistan",
    "Shopify development Pakistan",
    "mobile app development Pakistan",
    "ecommerce website Pakistan",
    "SEO services Pakistan",
    "startup branding Pakistan",
    "Dev Aspire",
    "software development company Islamabad",
    "responsive web design Pakistan",
    "brand strategy Pakistan",
    "WordPress development Pakistan",
    "React Next.js development Pakistan",
    "affordable web design Pakistan",
  ],
  authors: [{ name: "Dev Aspire" }],
  creator: "Dev Aspire",
  publisher: "Dev Aspire",
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
  icons: {
    icon: "/assets/images/logos/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Dev Aspire",
    title: "Dev Aspire Agency | Web Design & Development Company",
    description:
      "Dev Aspire is a leading web design and development agency helping startups build bold brands with thoughtful design, custom websites, and digital solutions.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Web Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Aspire Agency | Web Design & Development Company",
    description:
      "Dev Aspire is a leading web design and development agency helping startups build bold brands with thoughtful design, custom websites, and digital solutions.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: SITE_URL,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <FloatingContact />
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

import React from "react";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getIntl } from "@/lib/intl";

// import { Inter } from "@next/font/google";
import "../../../styles/scss/globals.scss";


// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ["latin"] });

// Dynamic Metadata für internationale SEO
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const intl = await getIntl(locale);
  
  return {
    title: "Youth For Peace 2024",
    description: intl.formatMessage({ id: "footer.creator" }),
    
    // SEO für mehrsprachige Websites
    alternates: {
      canonical: `https://yfp-berlin-2024.vercel.app/${locale}`,
      languages: {
        'de': '/de',
        'en': '/en', 
        'fr': '/fr',
        'es': '/es',
        'hu': '/hu',
        'it': '/it',
        'nl': '/nl',
        'pt': '/pt',
        'uk': '/uk',
      },
    },
    
    // Open Graph für Social Media
    openGraph: {
      title: "Youth For Peace 2024",
      description: intl.formatMessage({ id: "footer.creator" }),
      type: 'website',
      locale: locale,
      alternateLocale: ['de', 'en', 'fr', 'es', 'hu', 'it', 'nl', 'pt', 'uk'],
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body className="body">
        <div className="">
        <Analytics/>
            <Header locale={locale}/>
          <div>{children}</div>
          <Footer  locale={locale}/>
        </div>
      </body>
    </html>
  );
}

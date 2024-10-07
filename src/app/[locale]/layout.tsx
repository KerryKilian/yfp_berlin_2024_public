// "use client";

import React from "react";

import { Analytics } from "@vercel/analytics/react"

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Head from "./head";

// import { Inter } from "@next/font/google";
import "../../../styles/scss/globals.scss";


// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang="de">
      <Head></Head>
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

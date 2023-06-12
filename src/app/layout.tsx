"use client";

import Head from "next/head";
import { Poppins } from "next/font/google";
import { GlobalStyle } from "../config/globalStyles";
import { Metadata } from "next";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

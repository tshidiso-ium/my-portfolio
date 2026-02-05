import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Head from 'next/head'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;


const siteUrl = "https://www.tshidisomodiko.com";

export const metadata = {
 title: "Tshidiso Modiko | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Next.js, React, Node.js, DevOps, and cloud-native architecture. I build clean, modern, scalable digital experiences.",

  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Tshidiso Modiko Portfolio",
    title: "Tshidiso Modiko | Full-Stack Developer",
    description:
      "Creating modern, scalable web applications with Next.js, React, Node.js, and cloud-native tooling.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tshidiso Modiko Portfolio Preview",
      },
    ],
  },

  twitter: {
    handle: "@your_handle",
    site: "@your_handle",
    cardType: "summary_large_image",
  },

  additionalMetaTags: [
    { name: "author", content: "Tshidiso Modiko" },
    { name: "keywords", content: "Tshidiso Modiko, full stack developer, React developer, Next.js developer, portfolio, web developer South Africa" },
    { name: "theme-color", content: "#0a0a0a" }
  ],

  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],

  // JSON-LD Person Schema
  // This greatly improves Google search visibility
  schema: {
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Tshidiso Modiko",
      url: siteUrl,
      jobTitle: "Full-Stack Developer",
      image: `https://firebasestorage.googleapis.com/v0/b/my-profile-95716.firebasestorage.app/o/me.jpeg?alt=media&token=7534e79e-1d94-4c34-8e20-15f83d806f02`,
      sameAs: [
        "https://github.com/tshidiso-ium",
        "https://www.linkedin.com/in/tshidiso-modiko-a63400212"
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "DevOps",
        "Frontend Development",
        "Backend Development",
        "Cloud Engineering"
      ],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                {/* Google Analytics scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
        >{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}</Script>
        {children}
      </body>
    </html>
  );
}

const siteUrl = "https://tshidisomodiko.com";

export default {
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
      image: `${siteUrl}/profile.jpg`,
      sameAs: [
        "https://github.com/YOUR_GITHUB",
        "https://www.linkedin.com/in/YOUR_LINKEDIN"
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

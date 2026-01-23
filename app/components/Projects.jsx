'use client'
import { useState } from "react";

const projects = [
  {
    title: 'Study Buddy',
    tech: [
      'React',
      'SCSS',
      'Firebase Hosting',
      'Node.js',
      'Express',
      'ChatGPT API',
      'Yoco Payments',
      'Cloud Functions'
    ],
    desc: 'A full-stack AI-powered study platform that gives students instant access to past exam papers and real-time academic assistance. Built with a React frontend and hosted on Firebase for fast global delivery, Study Buddy integrates a Node.js/Express backend that securely manages payments, token purchases, and donations through the Yoco payment gateway. The system provides seamless authentication, cloud-hosted data, and ChatGPT-driven study support, making learning smarter, more interactive, and accessible.',
    link: 'https://www.buddystudy.co.za',
    logo: 'https://buddystudy.co.za/static/media/Study-Budy-Logo.5eec33b90415cce725ea.png'
  },
  {
    title: 'The 11th Floor',
    tech: [
      'Next.js',
      'SCSS',
      'Vercel',
      'PayFast',
      'Node.js',
      'Express',
      'Cloud Functions'
    ],
    desc: 'A full-stack web platform for The 11th Floor, an award‑winning Mediterranean-inspired rooftop restaurant and cocktail bar in Bedfordview, Johannesburg. The site is built with a Next.js frontend and SCSS styling, deployed on Vercel for fast, SEO‑friendly performance. A Node.js/Express backend with cloud functions powers dynamic content, booking flows, and PayFast payment integration, allowing guests to explore menus, view live‑music events, discover the restaurant’s international accolades, and seamlessly secure reservations online.',
    link: 'https://www.the11thfloor.co.za',
    logo: 'https://cdn.the11thfloor.co.za/img/logo/logo.png'
  },
  {
    title: 'Body Action Gym',
    tech: [
      'Next.js',
      'SCSS',
      'Vercel',
      'PayFast',
      'Node.js',
      'Express',
      'Cloud Functions'
    ],
    desc: 'A full-stack digital experience for Body Action Gym, a six-star luxury fitness facility in Bedfordview, Johannesburg. The site is built with a performant Next.js frontend and SCSS-driven design to showcase premium Technogym and Eleiko equipment, signature classes, and membership offerings. Deployed on Vercel for reliability and speed, the platform reflects the brand’s “it’s not a membership, it’s a lifestyle” philosophy with a smooth, high-end user journey.',
    link: 'https://www.bodyactiongym.co.za',
    logo: 'https://cdn.bodyactiongym.co.za/img/logo/body-action-gym-logo.png'
  },
  {
    title: 'Kyle Marshall – Executive Chef',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'Vercel',
      'Node.js',
      'Express',
      'Cloud Functions'
    ],
    desc: 'A storytelling-driven chef profile site for Executive Chef Kyle Marshall, the creative force behind The 11th Floor. Built with Next.js and Tailwind CSS and deployed on Vercel, the site focuses on clean, modern UI to showcase his culinary philosophy, signature dishes, and wine pairing evenings. A lightweight Node.js/Express backend with cloud functions supports dynamic content and contact flows, keeping the experience fast, elegant, and aligned with the restaurant’s premium brand.',
    link: 'https://www.kylemarshall.co.za',
    logo: "https://firebasestorage.googleapis.com/v0/b/my-profile-95716.firebasestorage.app/o/kyleWebsiteLogo.jpeg?alt=media&token=c8509b81-7c21-4327-9756-cbe60fd9a367"
  },
  {
    title: 'Alpha Insure',
    tech: ['Next.js', 'SCSS', 'Vercel', 'Node.js', 'Express', 'Cloud Functions'],
    desc:
      'A modern, performance-focused web experience for Alpha Insure, Africa’s largest independently-owned Cell Captive UMA. The platform is built with Next.js and SCSS and deployed on Vercel to deliver fast, SEO-friendly content for brokers and corporate clients. A Node.js/Express backend with cloud functions powers dynamic content, broker tooling integration, and secure interactions with Alpha’s policy and risk management systems, reflecting the brand’s focus on technology-driven, prevention-led insurance solutions.',
    logo: 'https://cdn.alpha.co.za/alpha-logo/Alpha-Color-Dark.png', // update to actual logo path
    link: 'https://www.alpha.co.za',
  }
  // Add more
]

export default function Projects() {
    const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {visibleProjects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col p-5 border border-zinc-200 dark:border-zinc-700 rounded-md shadow-sm hover:shadow-lg transition bg-white/80 dark:bg-zinc-900/80"
          >
            {/* Logo + title row */}
            <div className="flex items-center gap-3 mb-3">
              {p.logo && (
                <img
                  src={p.logo}
                  alt={`${p.title} logo`}
                  className="h-10 w-10 object-contain rounded-md"
                />
              )}
              <h3 className="font-semibold text-lg">{p.title}</h3>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3 flex-1">
              {p.desc}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-400 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Visit button */}
            {p.link && (
              <a
                href={p.link.startsWith("http") ? p.link : `https://${p.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-zinc-800 dark:border-zinc-200 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition"
              >
                Visit website
              </a>
            )}
          </div>
        ))}
      </div>

      {/* View more / less */}
      {projects.length > 3 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="px-5 py-2 text-sm font-medium rounded-md border border-zinc-400 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            {showAll ? "View less" : "View more projects"}
          </button>
        </div>
      )}
    </section>
  );
}
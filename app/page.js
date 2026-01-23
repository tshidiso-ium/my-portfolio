// pages/index.jsx
import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Tshidiso Modiko | Full-Stack Developer</title>
        <meta name="title" content="Tshidiso Modiko | Full-Stack Developer" />
        <meta name="description" content="Full-Stack Developer specializing in Next.js, React, Node.js, DevOps, and cloud-native architecture. I build scalable, elegant, high-performance digital experiences." />
        <meta name="keywords" content="Tshidiso Modiko, Tshidiso, Modiko, full stack developer, software engineer, React developer, Next.js developer, JavaScript engineer, portfolio, web developer South Africa, frontend developer, backend developer" />
        <meta name="author" content="Tshidiso Modiko" />
        <meta name="theme-color" content="#0a0a0a" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tshidisomodiko.com/" />
        <meta property="og:title" content="Tshidiso Modiko | Full-Stack Developer" />
        <meta property="og:description" content="Creating modern, scalable web applications with Next.js, React, Node.js, and cloud-native tooling." />
        <meta property="og:image" content="https://tshidisomodiko.com/og-image.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tshidisomodiko.com/" />
        <meta property="twitter:title" content="Tshidiso Modiko | Full-Stack Developer" />
        <meta property="twitter:description" content="Building fast, elegant, and scalable full-stack applications using the modern JavaScript ecosystem." />
        <meta property="twitter:image" content="https://tshidisomodiko.com/og-image.png" />

        {/* <!-- Favicon --> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* <!-- Canonical Link --> */}
        <link rel="canonical" href="https://tshidisomodiko.com/" />

        {/* <!-- Robots --> */}
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white font-mono">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
} 

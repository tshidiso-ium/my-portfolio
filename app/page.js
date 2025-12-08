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
        <title>Tshidiso Modiko | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Tshidiso Modiko, Full-Stack Developer. Projects, skills, and contact."
        />
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

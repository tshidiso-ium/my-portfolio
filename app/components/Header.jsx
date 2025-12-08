export default function Header() {
  return (
    <header className="fixed w-full z-50 top-0 backdrop-blur border-b border-zinc-800 bg-white/70 dark:bg-zinc-900/70 px-8 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-tight">Tshidiso Modiko</div>
      <nav className="space-x-6 text-sm hidden md:flex">
        {['Projects', 'Skills', 'About', 'Contact'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:underline">
            {link}
          </a>
        ))}
      </nav>
    </header>
  )
}
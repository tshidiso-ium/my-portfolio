const projects = [
  {
    title: 'Portfolio Website',
    tech: ['Next.js', 'Tailwind', 'Vercel'],
    desc: 'A blazing fast developer portfolio using modern stack.',
    link: '#',
  },
  // Add more
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-md shadow-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
            <p className="text-sm text-zinc-500 mb-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              {p.tech.map((t) => (
                <span key={t} className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
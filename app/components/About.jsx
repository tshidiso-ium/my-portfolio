// components/About.jsx
'use client';
// components/About.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';

const timeline = [
  {
    year: '2020',
    title: 'Graduated with BSc in Computer Science',
    description: 'Completed studies with a focus on web development, databases, and software engineering principles.',
  },
  {
    year: '2021',
    title: 'Joined Tech Startup as Junior Developer',
    description: 'Worked on frontend and backend tasks using React, Node.js, and PostgreSQL.',
  },
  {
    year: '2022',
    title: 'Promoted to Full-Stack Developer',
    description: 'Led feature development across the stack; introduced testing and CI/CD processes.',
  },
  {
    year: '2023',
    title: 'AWS Certified Developer – Associate',
    description: 'Achieved cloud certification and began integrating AWS services into full-stack apps.',
  },
  {
    year: '2024',
    title: 'Freelanced on SaaS and startup projects',
    description: 'Delivered MVPs and production apps for international clients.',
  },
];

const highlights = ['React', 'Next.js', 'TypeScript', 'DevOps', 'AWS Certified', 'UI/UX Design', 'Docker'];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden ">
      {/* Ndebele pattern background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-100 bg-[url('https://firebasestorage.googleapis.com/v0/b/my-profile-95716.firebasestorage.app/o/bg-ndebele-1.png?alt=media&token=3b69864e-90d2-4c60-9ea1-ddc1b47d2675')] bg-repeat  border-t-8 border-t-blue-500 border-b-8 border-b-blue-500" />

      <div className="max-w-full relative z-10 mx-[10%]">
        <h2 className="text-5xl font-bold mb-10 text-center text-white backdrop-blur-lg">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 backdrop-blur-md w-full p-10">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-zinc-300">
              <Image
                src="/profile.jpg"
                alt="Tshidiso Modiko"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-zinc-200 dark:text-zinc-300 text-base"
          >
            <p className="mb-4">
              I'm a full-stack developer with a passion for solving complex problems with clean, maintainable code.
              I thrive on bringing digital ideas to life with <strong>React</strong>, <strong>Next.js</strong>, and cloud-native tools.
            </p>
            <p className="mb-4">
              Over the years, I've built everything from internal tools to public SaaS products, focusing on performance,
              scalability, and great user experience.
            </p>
            <p className="mb-4">
              Highlights: {highlights.map((h, i) => (
                <span key={i} className="inline-block mx-1 px-2 py-0.5 rounded bg-zinc-200 text-black dark:bg-zinc-700 text-sm">
                  {h}
                </span>
              ))}
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 border border-zinc-200 dark:border-zinc-200 text-sm rounded hover:scale-105 dark:scale-105 transition"
            >
              Download Résumé
            </a>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 border-l border-zinc-300 dark:border-zinc-600 p-10 backdrop-blur-md"
        >
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-2">
              <div className="absolute -left-4 top-1.5 w-6 h-6 flex items-center justify-center rounded-full bg-zinc-600 text-white text-xs">
                <FaCalendarAlt />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-zinc-800 dark:text-white">{item.year} — {item.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 

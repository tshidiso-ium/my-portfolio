// components/About.jsx
'use client';
// components/About.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import WindowSize from "../modules/windowSize";

const timeline = [
  {
    year: '2021',
    title: 'Graduated with BSc in Computer Science (IIE Varsity College)',
    description: 'Completed studies with a focus on web development, databases, and software engineering principles.',
  },
  {
    year: '2022',
    title: 'Junior Developer (Syscor.ai)',
    description:
      'Worked on full-stack development and monday.com integrations at Syscor.ai, delivering custom workflow and automation solutions using React, Node.js, and PostgreSQL.',
  },
  {
    year: '2023',
    title: 'Monday.com Developer Certificate (Syscor.ai)',
    description:
      'I earned my monday.com Developer Certificate, deepening my expertise in building custom apps and integrations on the monday.com platform.',
  },
  {
    year: '2024',
    title: 'Junior Full-Stack Developer (Alpha Insure)',
    description:
      'Recruited by Alpha Insure to join their engineering team as a full-stack developer, contributing to end-to-end feature development, improving system reliability, and collaborating closely with product and business stakeholders.',
  },
  {
    year: '2025',
    title: 'Promoted to Mid-level Full-Stack Developer (Alpha Insure)',
    description: 'Led feature development across the stack; introduced testing and CI/CD processes.',
  },
  // {
  //   year: '2026',
  //   title: 'AWS Certified Developer – Associate',
  //   description: 'Achieved cloud certification and began integrating AWS services into full-stack apps.',
  // },
  // {
  //   year: '2026',
  //   title: 'Freelanced on SaaS and startup projects',
  //   description: 'Delivered MVPs and production apps for international clients.',
  // },
];
// /'AWS Certified',
const highlights = ['React', 'Next.js', 'TypeScript', 'DevOps',  'UI/UX Design', 'Docker'];

export default function About() {
  const deviceWidth = WindowSize();
  return (
    <section id="about" className="py-5 lg:py-20 lg:px-6 relative overflow-hidden ">
      {/* Ndebele pattern background */}
      {/* <div className={`absolute top-0 left-0 w-full ${deviceWidth.width < 720 ? 'max-h-[5%] border-t-2 border-b-2' : 'h-[10%]'}  opacity-100 bg-[url('https://firebasestorage.googleapis.com/v0/b/my-profile-95716.firebasestorage.app/o/bg-ndebele-1.png?alt=media&token=3b69864e-90d2-4c60-9ea1-ddc1b47d2675')] bg-repeat  border-t-8 border-t-blue-500 border-b-8 border-b-blue-500`} /> */}

      <div className={`max-w-full relative lg:mx-[10%]`}>
        <h2 className="text-3xl font-bold lg:mb-12 mb-6 text-center">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-10 mb-16  w-full p-10">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-zinc-500 dark:border-zinc-700">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/my-profile-95716.firebasestorage.app/o/me.jpeg?alt=media&token=7534e79e-1d94-4c34-8e20-15f83d806f02"
                alt="Tshidiso Modiko"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-zinc-700 dark:text-zinc-300 text-base"
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
              href="https://firebasestorage.googleapis.com/v0/b/my-profile-95716.firebasestorage.app/o/TSHIDISO%20ISHMAEL%20MODIKO.pdf?alt=media&token=b1120ffb-b8fc-4bf2-8e73-070b9b7e9423"
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
          className="space-y-6 border-zinc-300 dark:border-zinc-600 p-10 lg:mx-[15%] lg:pl-10"
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

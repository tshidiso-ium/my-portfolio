// components/Skills.jsx
'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiJest, SiGithubactions, SiEslint, SiPrettier, SiFirebase } from 'react-icons/si';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, level: 'Advanced' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 'Advanced' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Intermediate' },
      { name: 'JavaScript', icon: <span>JS</span>, level: 'Advanced' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 'Intermediate' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 'Advanced' },
      { name: 'Express', icon: <span>Ex</span>, level: 'Advanced' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Intermediate' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 'Intermediate' },
      { name: 'REST APIs', icon: <span>API</span>, level: 'Advanced' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: <FaDocker />, level: 'Intermediate' },
      { name: 'AWS', icon: <FaAws />, level: 'Intermediate' },
      { name: 'Vercel', icon: <span>▲</span>, level: 'Advanced' },
            { name: 'Firebase', icon: <SiFirebase />, level: 'Advanced' },
      { name: 'GitHub Actions', icon: <SiGithubactions />, level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Testing',
    skills: [
      { name: 'Git', icon: <span>Git</span>, level: 'Advanced' },
      { name: 'Jest', icon: <SiJest />, level: 'Intermediate' },
      { name: 'ESLint', icon: <SiEslint />, level: 'Advanced' },
      { name: 'Prettier', icon: <SiPrettier />, level: 'Advanced' },
      { name: 'Figma', icon: <FaFigma />, level: 'Beginner' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-zinc-700 dark:text-zinc-200">{group.title}</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 p-3 bg-white dark:bg-zinc-800 rounded shadow hover:shadow-md transition cursor-default"
                    title={`${skill.name} — ${skill.level}`}
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm text-zinc-700 dark:text-zinc-200">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 

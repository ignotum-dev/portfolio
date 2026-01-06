import React from "react";
import { motion } from "framer-motion";
import * as Icons from "@tabler/icons-react";

// 1. Data Configuration - Separated for better readability
const TECH_STACK = [
  {
    category: "Frontend",
    description: "Building interactive interfaces",
    skills: [
      { name: "HTML", icon: <Icons.IconBrandHtml5 size={40} /> },
      { name: "CSS", icon: <Icons.IconBrandCss3 size={40} /> },
      { name: "JavaScript", icon: <Icons.IconBrandJavascript size={40} /> },
      { name: "Tailwind CSS", icon: <Icons.IconBrandTailwind size={40} /> },
      { name: "React", icon: <Icons.IconBrandReact size={40} /> },
      { name: "Vite", icon: <Icons.IconBrandVite size={40} /> },
      { name: "Prettier", icon: <Icons.IconLetterP size={40} /> },
    ],
  },
  {
    category: "Backend",
    description: "Powering the core logic",
    skills: [
      { name: "Node.js", icon: <Icons.IconBrandNodejs size={40} /> },
      { name: "Python", icon: <Icons.IconBrandPython size={40} /> },
      { name: "Java", icon: <Icons.IconCodeCircle2 size={40} /> },
      { name: "PHP", icon: <Icons.IconBrandPhp size={40} /> },
      { name: "MySQL", icon: <Icons.IconBrandMysql size={40} /> },
      { name: "Laravel", icon: <Icons.IconBrandLaravel size={40} /> },
      { name: "REST", icon: <Icons.IconApi size={40} /> },
      { name: "Solidity", icon: <Icons.IconCodeCircle2 size={40} /> },
      { name: "Base L2", icon: <Icons.IconCodeCircle2 size={40} /> },
    ],
  },
  {
    category: "Others",
    description: "Some additional tools",
    skills: [
      { name: "WordPress", icon: <Icons.IconBrandWordpress size={40} /> },
      { name: "Git", icon: <Icons.IconBrandGit size={40} /> },
      { name: "GitHub", icon: <Icons.IconBrandGithub size={40} /> },
      { name: "Tampermonkey", icon: <Icons.IconTerminal2 size={40} /> },
      { name: "VSCode", icon: <Icons.IconBrandVscode size={40} /> },
      { name: "Eclipse", icon: <Icons.IconCodeCircle2 size={40} /> },
      { name: "Remix", icon: <Icons.IconRegistered size={40} /> },
      { name: "Discord", icon: <Icons.IconBrandDiscord size={40} /> },
    ],
  },
];

// 2. Sub-component for individual skill rows to reduce nesting depth
const SkillItem = ({ name, icon }) => (
  <motion.div 
    className="flex items-center gap-3 group/skill py-1"
    whileHover={{ x: 3 }}
  >
    <span className="text-white/40 group-hover/skill:text-[#5227FF] transition-colors duration-300">
      {icon}
    </span>
    <span className="text-md font-medium text-slate-300 group-hover/skill:text-white transition-colors">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="max-w-7xl w-full px-6 py-20 pointer-events-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Tech <span className="text-[#5227FF]">Stack</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A curated selection of technologies I use to solve complex problems and build scalable solutions.
          </p>
        </motion.div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TECH_STACK.map((group, idx) => (
          <motion.div 
            key={group.category}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative p-[1px] rounded-3xl overflow-hidden group h-full"
          >
            {/* Hover Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent group-hover:from-[#5227FF] group-hover:to-[#FF9FFC] transition-all duration-500 opacity-50" />
            
            {/* Main Card Interior */}
            <div className="relative h-full p-8 rounded-[23px] bg-[#030708]/90 backdrop-blur-xl border border-white/5 group-hover:bg-[#030708]/60 transition-all duration-500 cursor-pointer">
              <header className="mb-8">
                <h3 className="text-2xl font-black text-[#5227FF] uppercase tracking-[0.3em] mb-2">
                  {group.category}
                </h3>
                <p className="text-md text-slate-500 font-medium italic">
                  {group.description}
                </p>
              </header>
              
              {/* TWO COLUMN GRID FOR SKILLS */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {group.skills.map((skill) => (
                  <SkillItem key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
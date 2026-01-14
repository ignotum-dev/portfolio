import React, { useState } from "react";
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
      { name: "Mantine", icon: <Icons.IconBrandMantine size={40} /> },
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
      { name: "Pusher", icon: <Icons.IconParkingCircle size={40} /> },
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
const SkillItem = ({ name, icon, isMobile }) => {
  const Icon = icon.type;
  return (
    <motion.div 
      className={`flex items-center ${isMobile ? 'gap-2' : 'gap-3'} group/skill ${isMobile ? 'py-1.5' : 'py-1'}`}
      whileHover={{ x: 3 }}
    >
      <span className="text-white/40 group-hover/skill:text-[#5227FF] transition-colors duration-300 flex-shrink-0">
        <Icon size={isMobile ? 24 : 40} />
      </span>
      <span className={`${isMobile ? 'text-xs' : 'text-md'} font-medium text-slate-300 group-hover/skill:text-white transition-colors line-clamp-1`}>
        {name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % TECH_STACK.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + TECH_STACK.length) % TECH_STACK.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > swipeThreshold) {
      if (distance > 0) {
        // Swiped left, go to next slide
        handleNext();
      } else {
        // Swiped right, go to previous slide
        handlePrev();
      }
    }
  };
  return (
    <div className="max-w-7xl w-full px-4 md:px-6 py-8 md:py-32 pointer-events-auto">
      {/* Header Section */}
      <div className="text-center mb-6 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white my-4 md:my-6 tracking-tight">
            Tech <span className="text-[#5227FF]">Stack</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-light leading-relaxed px-2">
            A curated selection of technologies I use to solve complex problems and build scalable solutions.
          </p>
        </motion.div>
      </div>

      {/* Grid Section - Desktop / Slideshow - Mobile */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Mobile Slideshow */}
      <div className="md:hidden">
        <div className="relative w-full overflow-hidden">
          {/* Slide Container */}
          <div 
            className="flex-1 overflow-hidden select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              animate={{ x: -currentSlide * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {TECH_STACK.map((group, idx) => (
                <div key={group.category} className="min-w-full px-2">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative p-[1px] rounded-3xl overflow-hidden group h-full"
                  >
                    {/* Hover Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent group-hover:from-[#5227FF] group-hover:to-[#FF9FFC] transition-all duration-500 opacity-50" />
                    
                    {/* Main Card Interior */}
                    <div className="relative h-full p-5 rounded-[23px] bg-[#030708]/90 backdrop-blur-xl border border-white/5 group-hover:bg-[#030708]/60 transition-all duration-500">
                      <header className="mb-5">
                        <h3 className="text-lg font-black text-[#5227FF] uppercase tracking-[0.2em] mb-1">
                          {group.category}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium italic">
                          {group.description}
                        </p>
                      </header>
                      
                      {/* TWO COLUMN GRID FOR SKILLS */}
                      <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                        {group.skills.map((skill) => (
                          <SkillItem key={skill.name} {...skill} isMobile={true} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {TECH_STACK.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "bg-[#5227FF] w-8"
                  : "bg-white/20 w-2 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
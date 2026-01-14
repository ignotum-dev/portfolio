import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import MagicBento from "./ui/MagicBento";
import chimsImg from "@/assets/chims.jpeg";
import smartEdImg from "@/assets/ictdu2.jpg";
import smsImg from "@/assets/sms.jpeg";
import receiptsImg from "@/assets/portfolio.jpeg";
import gamotifyImg from "@/assets/gamotify.jpeg";
import blockchainImg from "@/assets/Blockchain.png";
import eventsImg from "@/assets/tictactoe.jpeg";
import smApiImg from "@/assets/sm-api.jpeg";

const PROJECTS = [
  {
    title: "CHIMS",
    description: "Healthcare management system for LGU Mabalacat designed to streamline hospital services, patient management, and administrative tasks.",
    label: "Backend",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    image: chimsImg,
  },
  {
    title: "SMART Ed",
    description: "Web-based application for DEPED Mabalacat Division Office that collects and manages school data and provides public transparency.",
    label: "Backend",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    image: smartEdImg,
  },
  {
    title: "Student Attendance System",
    description: "QR code-based attendance system with backend API development, data handling, and system logic for school events.",
    label: "Backend",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    image: smsImg,
  },
  {
    title: "SPCF Receipt Generator",
    description: "Web scraping and automation solution using Tampermonkey to extract transaction data and generate BIR-compliant receipts.",
    label: "Scripting",
    tech: ["Javascript", "CSS", "Tampermonkey"],
    image: receiptsImg,
  },
  {
    title: "Gamotify",
    description: "Medicine inventory and sales management application with stock tracking, transaction management, and report generation.",
    label: "Full-Stack",
    tech: ["React", "Laravel", "PHP", "MySQL", "Mantine"],
    image: gamotifyImg,
  },
  {
    title: "Alkansave",
    description: "Web3 mobile application with Solidity and Base L2, featuring decentralized financial activities.",
    label: "Backend",
    tech: ["Solidity", "Base L2", "Remix"],
    image: blockchainImg,
  },
  {
    title: "Event Management System",
    description: "Web-based system for planning, organization, and tracking of events.",
    label: "Full-Stack",
    tech: ["React", "Laravel", "PHP", "MySQL", "Tailwind CSS"],
    image: eventsImg,
  },
  {
    title: "Student Management System API",
    description: "API with CRUD operations for managing school records with role-based access control.",
    label: "Backend",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    image: smApiImg,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="relative p-[1px] rounded-3xl overflow-hidden group h-full min-h-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent group-hover:from-[#5227FF] group-hover:to-[#FF9FFC] transition-all duration-500 opacity-50" />
      
      <div className="relative h-full rounded-[23px] bg-[#030708]/90 backdrop-blur-xl border border-white/5 group-hover:bg-[#030708]/60 transition-all duration-500 overflow-hidden flex flex-col">
        {/* Image Section */}
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Content Section */}
        <div className="flex-1 flex flex-col p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-black text-[#5227FF] uppercase tracking-[0.2em] text-lg">
              {project.title}
            </h3>
            <span className="px-3 py-1 rounded-full font-semibold text-xs bg-[#5227FF]/10 text-[#B19EEF] whitespace-nowrap">
              {project.label}
            </span>
          </div>
          
          <p className="text-slate-400 text-sm mb-4 flex-grow">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-lg font-medium text-xs bg-white/5 text-slate-300 group-hover:bg-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);
  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) > 50) {
      const cardWidth = 320; // w-80 = 320px
      const gap = 16; // gap-4 = 16px
      const step = cardWidth + gap;
      
      if (diff > 0) {
        // Swiped left - scroll right
        setScrollPosition(prev => prev + step);
      } else {
        // Swiped right - scroll left
        setScrollPosition(prev => Math.max(prev - step, 0));
      }
    }
  };

  return (
    <>
      {/* Desktop - MagicBento Grid */}
      <div className="hidden md:flex w-full justify-center items-center px-2 md:px-4">
        <div className="w-full md:w-[95%] lg:w-[85%] transform scale-90 md:scale-75">
          <MagicBento spotlightRadius={300}/>
        </div>
      </div>

      {/* Mobile - Slideable Cards */}
      <div className="md:hidden w-full px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white my-6 tracking-tight">
              <span className="text-[#5227FF]">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              A collection of projects I've built showcasing my expertise in full-stack development and problem-solving.
            </p>
          </motion.div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            scrollBehavior: 'smooth',
          }}
        >
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              className="flex-shrink-0 w-80 snap-start"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-xs mt-6">Swipe to explore projects</p>
      </div>
    </>
  );
}

// src/pages/Index.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Particles from "@/components/ui/Particles";
import Projects from "../components/Projects";
import GalleryCerts from "../components/GalleryCerts";
import { TimelineDemo } from "../components/TimelineDemo";
import Contact from "../components/Contact";
import BubbleMenu from "@/components/ui/BubbleMenu";
import ChatBot from "../components/ChatBot";

const Index = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "#",
      ariaLabel: "Hero Section",
      rotation: -8,
      hoverStyles: { bgColor: "#7b4dff", textColor: "#ffffff" },
    },
    {
      label: "Skills",
      href: "#",
      ariaLabel: "Skills",
      rotation: 8,
      hoverStyles: { bgColor: "#B19EEF", textColor: "#030708" },
    },
    {
      label: "Projects",
      href: "#",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#FF9FFC", textColor: "#030708" },
    },
    {
      label: "Timeline",
      href: "#",
      ariaLabel: "Timeline",
      rotation: 8,
      hoverStyles: { bgColor: "#B19EEF", textColor: "#030708" },
    },
    {
      label: "Gallery",
      href: "#",
      ariaLabel: "Gallery",
      rotation: 8,
      hoverStyles: { bgColor: "#7b4dff", textColor: "#ffffff" },
    },
    {
      label: "Contact",
      href: "#",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#B19EEF", textColor: "#030708" },
    },
  ];

  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  // Focus the container on mount so arrow keys work immediately
  useEffect(() => {
    if (containerRef.current) containerRef.current.focus();
  }, []);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Track scroll position to update the stepper based on actual section positions
  const handleScroll = (e) => {
    const scrollContainer = e.currentTarget;
    const containerRect = scrollContainer.getBoundingClientRect();

    // Show scroll to top button when not at top
    setShowScrollToTop(scrollContainer.scrollTop > 100);

    let bestIndex = 0;
    let bestRatio = -Infinity;

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, containerRect.bottom) -
        Math.max(rect.top, containerRect.top);
      const ratio = Math.max(0, visibleHeight) / rect.height;

      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestIndex = index;
      }
    });

    setActiveSection(bestIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const id = requestAnimationFrame(() => {
      handleScroll({ currentTarget: container });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const sections = [
    { id: "hero", title: "Hero" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "timeline", title: "Timeline" },
    { id: "gallery", title: "Gallery" },
    { id: "contact", title: "Contact Me" },
  ];

  return (
    <div className="relative h-screen w-full bg-[#030708] overflow-hidden">
      {/* Background Particles Layer - Absolute to cover everything but stay behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#5227FF"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={300}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Bubble Menu Navigation */}
      <BubbleMenu
        logo={
          <div 
            className="text-[#5227FF] font-bold text-3xl tracking-tight cursor-pointer whitespace-nowrap"
            onClick={() => scrollToSection(0)}
          >
            ignotum-dev
          </div>
        }
        items={menuItems}
        onMenuClick={(index) => scrollToSection(index)}
        menuBg="#5227FF"
        menuContentColor="#ffffff"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollToTop ? 1 : 0,
          scale: showScrollToTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 md:bottom-8 md:left-auto md:right-8 z-40 p-3 md:p-4 rounded-full bg-[#5227FF] hover:bg-[#7b4dff] text-white shadow-lg hover:shadow-[0_0_24px_rgba(82,39,255,0.6)] transition-all duration-300 pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={!showScrollToTop}
      >
        <ArrowUp size={24} />
      </motion.button>

      {/* ChatBot Component */}
      <ChatBot />

      {/* Side Stepper Line */}
      <div className="hidden md:fixed md:left-6 md:left-12 md:top-1/2 md:-translate-y-1/2 md:z-50 md:flex md:flex-col md:gap-6 md:items-center">
        {sections.map((_, i) => (
          <div key={i} className="relative flex items-center justify-center">
            <motion.div
              animate={{
                height: activeSection === i ? 40 : 12,
                backgroundColor:
                  activeSection === i ? "#5227FF" : "rgba(255,255,255,0.2)",
              }}
              className="w-[6px] rounded-full transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Mobile Progress Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-1 bg-white/20 z-50">
        <motion.div
          className="h-full bg-[#5227FF]"
          animate={{
            width: `${((activeSection + 1) / sections.length) * 100}%`
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      {/* Main Snap Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        tabIndex="0"
        className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar outline-none"
      >
        {/* Hero Section */}
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="h-screen w-full snap-start"
        >
          <HeroSection scrollToContact={() => scrollToSection(5)} />
        </section>

        {/* Skills Section */}
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="h-screen w-full snap-start flex flex-col items-center justify-center bg-transparent relative z-20"
        >
          <Skills />
        </section>

        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="h-screen w-full snap-start flex flex-col items-center justify-center bg-transparent relative z-20"
        >
          <Projects />
        </section>

        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          className="min-h-screen w-full snap-start flex flex-col items-center justify-center bg-transparent relative z-20"
        >
          <TimelineDemo />
        </section>

        <section
          ref={(el) => (sectionRefs.current[4] = el)}
          className="min-h-screen w-full snap-start flex flex-col items-center justify-center bg-transparent relative z-20"
        >
          <GalleryCerts />
        </section>

        {/* Contact Section */}
        <section
          ref={(el) => (sectionRefs.current[5] = el)}
          className="h-screen w-full snap-start flex flex-col items-center justify-center bg-transparent relative z-20"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Index;

// src/pages/Index.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Particles from "@/components/Particles";

const Index = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  // Focus the container on mount so arrow keys work immediately
  useEffect(() => {
    if (containerRef.current) containerRef.current.focus();
  }, []);

  // Track scroll position to update the stepper
  const handleScroll = (e) => {
    const scrollPos = e.currentTarget.scrollTop;
    const windowHeight = window.innerHeight;
    const index = Math.round(scrollPos / windowHeight);
    setActiveSection(index);
  };

  const sections = [
    { id: "hero", title: "Hero" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Selected Works" },
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

      {/* Side Stepper Line */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 items-center">
        {sections.map((_, i) => (
          <div key={i} className="relative flex items-center justify-center">
            <motion.div
              animate={{
                height: activeSection === i ? 40 : 12,
                backgroundColor: activeSection === i ? "#5227FF" : "rgba(255,255,255,0.2)",
              }}
              // Corrected: Width should be consistent, and height handled by animation
              className="w-[6px] rounded-full transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Main Snap Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        tabIndex="0"
        className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar outline-none"
      >
        {/* Hero Section */}
        <section className="h-screen w-full snap-start">
          <HeroSection />
        </section>

        {/* Skills Section */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-center bg-transparent relative z-20">
          <Skills />
        </section>

        {/* Projects Section */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-center p-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            className="text-center"
          >
            <h2 className="text-6xl font-bold text-white mb-4">Selected Works</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mx-auto" />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-center p-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            className="text-center"
          >
            <h2 className="text-6xl font-bold text-white mb-4">Contact Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Index;
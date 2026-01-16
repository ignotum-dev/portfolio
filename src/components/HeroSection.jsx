// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { IconMapPin, IconChevronDown } from "@tabler/icons-react";
import LiquidEther from "./ui/LiquidEther";
import GradientText from "./ui/GradientText";
import TextType from "./ui/TextType";

function HeroSection({ scrollToContact }) {
  const scrollToProjects = () => {
    const nextSection = document.querySelector(".snap-start:nth-child(2)");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-screen relative">
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        resolution={0.4}
        autoDemo={true}
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Badge */}
          <div className="mb-4 md:mb-6 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-green-600/40 border-2 border-green-600/80 text-white text-xs md:text-sm font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>Available for hire</span>
          </div>

          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-white/80 mb-2">
            G'day, Mate!
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight mb-3 md:mb-4">
            I'm Gerald Ivan Flores
          </h1>

          <GradientText animationSpeed={1} direction="diagonal">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-medium mb-6 md:mb-8">
              Junior Full-Stack Web Developer
            </h3>
          </GradientText>

          <TextType
            text={[
              "A developer committed to continuous learning and growth.",
              "Adapting to new challenges and evolving technologies.",
              "Eager to learn, quick to adapt, and ready to build.",
              "Passionate about mastering modern tools and industry changes.",
            ]}
            as="p"
            typingSpeed={50}
            deletingSpeed={30}
            pauseDuration={2500}
            cursorCharacter="●"
            className="text-sm md:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed px-2"
            showCursor={true}
            loop={true}
          />

          <div className="flex items-center justify-center gap-2 text-white/60 mb-8 md:mb-12 text-xs md:text-sm">
            <IconMapPin size={18} />
            <span className="text-sm">Based in Pampanga, Philippines</span>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 justify-center pointer-events-auto">
            <a
              href="https://drive.google.com/file/d/1rycRhkRMRWercBhZC8AWGAjXQBlQvFiY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-colors text-sm md:text-base"
            >
              View Resume
            </a>
            <button 
              onClick={scrollToContact}
              className="px-6 py-3 md:px-8 md:py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
        {/* Animated Scroll Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer"
          onClick={scrollToProjects}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold">
              Scroll
            </span>
            <IconChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;

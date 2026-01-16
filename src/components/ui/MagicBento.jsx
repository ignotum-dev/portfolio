import { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import chimsImg from "@/assets/chims.jpeg";
import smartEdImg from "@/assets/smart-ed.png";
import smsImg from "@/assets/sms.jpeg";
import receiptsImg from "@/assets/portfolio.jpeg";
import gamotifyImg from "@/assets/gamotify.jpeg";
import blockchainImg from "@/assets/Blockchain.png";
import ems from "@/assets/ems.png";
import smApi from "@/assets/sm-api.png";
import attendance from "@/assets/attendance.png";
import receipt from "@/assets/receipt.png";
import alkansave from "@/assets/alkansave.jpg";
import student from "@/assets/student.png";
import calculator from "@/assets/calculator.png";
import login from "@/assets/login.png";
import temperature from "@/assets/temperature.png";
import tictactoe from "@/assets/tictactoe.png";

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const cardData = [
  {
    color: "#060010",
    title: "CHIMS",
    description: "Served as the backend developer. It is a healthcare management system for LGU Mabalacat designed to streamline hospital services, patient management, and administrative tasks.",
    label: "Backend",
    path: "google.com",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    image: chimsImg,
  },

  {
    color: "#060010",
    title: "SMART Ed",
    description: "Web-based application for DEPED Mabalacat Division Office that collects and manages school data and provides public transparency.",
    label: "Backend",
    path: "/project-2",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    image: smartEdImg,
  },
  {
    color: "#060010",
    title: "Student Attendance API",
    description: "Served as the backend developer responsible for API development, data handling, and system logic for a QR code–based attendance system used during school events.",
    label: "Backend",
    path: "/project-3",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    image: attendance,
  },
  {
    color: "#060010",
    title: "SPCF Receipt Generator",
    description: "A web scraping and automation solution developed using Greasemonkey on Firefox 34, created in [2014], used by the school to extract transaction data and generate printable receipts aligned with BIR compliance requirements.",
    label: "Scripting",
    path: "/project-4",
    tech: ["Javascript", "CSS", "Greasemonkey"],
    image: receipt,
  },
  {
    color: "#060010",
    title: "Gamotify",
    description: "A web application designed to manage medicine inventory and sales, providing features for stock tracking, transaction management, user administration, and report generation to streamline pharmacy operations.",
    label: "Full-Stack",
    path: "/project-5",
    tech: ["React", "Laravel", "PHP", "MySQL","Mantine"],
    image: gamotifyImg,
  },
  {
    color: "#060010",
    title: "Alkansave",
    description: "A Web3 mobile application developed using Solidity and Base, featuring Joint Alkansiya, Ambagan, and Paluwagan, enabling users to participate in decentralized financial activities through a secure and user-friendly blockchain interface.",
    label: "Backend",
    path: "/project-6",
    tech: ["Solidity", "Base L2", "Remix"],
    image: alkansave,
  },
  {
    color: "#060010",
    title: "Event Management System",
    description: "A web-based system designed to streamline the planning, organization, and tracking of events.",
    label: "Full-Stack",
    path: "/project-7",
    tech: ["React", "Laravel", "PHP", "MySQL","Tailwind CSS"],
    image: ems,
  },
  {
    color: "#060010",
    title: "Student Management System API",
    description: "An API providing CRUD operations for managing school records across multiple user roles, including students, program chairs, deans, admins, and super admins, ensuring secure and role-based data access.",
    label: "Backend",
    path: "/project-8",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    image: smApi,
  },
  {
    color: "#060010",
    title: "Student Record System",
    description: "A C application that manages student records, allowing users to add, view, update, and delete student information through a command-line interface.",
    label: "CLI Application",
    path: "/project-8",
    tech: ["C"],
    image: student,
  },
  {
    color: "#060010",
    title: "Calculator",
    description: "A Java Application that performs basic arithmetic operations such as addition, subtraction, multiplication, and division through a graphical user interface.",
    label: "GUI Application",
    path: "/project-8",
    tech: ["Java", "Swing", "Windows Builder"],
    image: calculator,
  },
  {
    color: "#060010",
    title: "SPCF Login",
    description: "A simple java application that simulates a login system with sign-in and signup functionality with text file data storage.",
    label: "GUI Application",
    path: "/project-8",
    tech: ["Java", "Swing", "File Handling"],
    image: login,
  },
  {
    color: "#060010",
    title: "Temperature Converter",
    description: "A simple java application that converts temperature values between Celsius, Fahrenheit, and Kelvin using a graphical user interface.",
    label: "GUI Application",
    path: "/project-8",
    tech: ["Java", "Swing", "Windows Builder"],
    image: temperature,
  },
  {
    color: "#060010",
    title: "TicTacToe",
    description: "A java application that allows two players to play the classic TicTacToe game against each other or just play with AI using a graphical user interface.",
    label: "GUI Application",
    path: "/project-8",
    tech: ["Java", "Swing", "Windows Builder"],
    image: tictactoe,
  },
];

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const ParticleCard = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseMove = (e) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleClick = (e) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        }
      );
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("click", handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("click", handleClick);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll(".card");

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        cards.forEach((card) => {
          card.style.setProperty("--glow-intensity", "0");
        });
        return;
      }

      const { proximity, fadeDistance } =
        calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          cardElement,
          e.clientX,
          e.clientY,
          glowIntensity,
          spotlightRadius
        );
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
          ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
          : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll(".card").forEach((card) => {
        card.style.setProperty("--glow-intensity", "0");
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid = ({ children, gridRef }) => (
  <div
    className="bento-section w-full max-w-[68rem] mx-auto px-4 select-none relative"
    style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)" }}
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const MagicBento = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const featuredCard = cardData[featuredIndex];
  const carouselCards = cardData.filter((_, idx) => idx !== featuredIndex);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        top: direction === 'up' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag carousel
  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const startY = e.pageY - carousel.offsetTop;
    const scrollTop = carousel.scrollTop;
    carousel.style.cursor = 'grabbing';

    const handleMouseMove = (moveEvent) => {
      const y = moveEvent.pageY - carousel.offsetTop;
      const walk = (y - startY) * 1.2;
      carousel.scrollTop = scrollTop - walk;
    };

    const handleMouseUp = () => {
      carousel.style.cursor = 'grab';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #392e4e;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
          }
          
          .featured-card {
            width: 100%;
          }
          
          .carousel-container {
            padding: 0 1rem;
            scrollbar-width: none;
            -ms-overflow-style: none;
            overflow-y: auto;
            overflow-x: hidden;
            mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          }
          
          .carousel-container::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
          }
          
          .carousel-track {
            padding-left: 0;
            padding-right: 0;
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
          
          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .tech-badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            background: rgba(132, 0, 255, 0.15);
            border: 1px solid rgba(132, 0, 255, 0.3);
            border-radius: 9999px;
            font-size: 1.15rem;
            color: rgba(132, 0, 255, 0.9);
            font-weight: 500;
            transition: all 0.3s ease;
          }
          
          .tech-badge:hover {
            background: rgba(132, 0, 255, 0.25);
            border-color: rgba(132, 0, 255, 0.5);
          }
          
          .featured-card-image {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 12px;
            margin-bottom: 1.5rem;
            opacity: 0.9;
            transition: opacity 0.3s ease;
          }
          
          .featured-card-image:hover {
            opacity: 1;
          }
          
          .card-with-bg {
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            position: relative;
          }
          
          .card-with-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, 
              rgba(6, 0, 16, 0.3) 0%, 
              rgba(6, 0, 16, 0.7) 50%,
              rgba(6, 0, 16, 0.95) 100%);
            border-radius: inherit;
            z-index: 0;
          }
          
          .card-with-bg > * {
            position: relative;
            z-index: 1;
          }
          
          .carousel-card-image {
            width: 100%;
            height: 140px;
            object-fit: cover;
            border-radius: 12px;
            margin-bottom: 0.75rem;
            opacity: 0.85;
            transition: opacity 0.3s ease;
          }
          
          .carousel-card-image:hover {
            opacity: 1;
          }
          
          @media (max-width: 768px) {
            .featured-card .card {
              min-height: 280px;
              padding: 1.25rem;
            }
            
            .featured-card .card__title {
              font-size: 1.75rem;
            }
            
            .carousel-track .card {
              width: 220px;
              height: 180px;
            }
          }
        `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {/* Projects Header */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Projects</h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Explore my latest work and contributions. Click on any project to see more details and the technologies used.
          </p>
        </div>

        {/* Main Layout - Featured Card Left, Carousel Right */}
        <div className="flex gap-6 items-stretch h-[450px]">
          {/* Featured Card - Left Side */}
          <div className="featured-card flex-1 min-w-0">
            <ParticleCard
              className={`card card-with-bg flex flex-col justify-between relative w-full h-full p-6 rounded-[24px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] ${
                enableBorderGlow ? "card--border-glow" : ""
              }`}
              style={{
                backgroundColor: featuredCard.color || "var(--background-dark)",
                backgroundImage: featuredCard.image ? `url(${featuredCard.image})` : 'none',
                borderColor: "var(--border-color)",
                color: "var(--white)",
                "--glow-x": "50%",
                "--glow-y": "50%",
                "--glow-intensity": "0",
                "--glow-radius": "200px",
              }}
              disableAnimations={shouldDisableAnimations}
              particleCount={particleCount}
              glowColor={glowColor}
              enableTilt={enableTilt}
              clickEffect={clickEffect}
              enableMagnetism={enableMagnetism}
            >
              <div className="card__header flex justify-between items-start gap-3 relative text-white">
                <span className="card__label text-3xl font-medium">{featuredCard.label}</span>
                <Link
                  to={featuredCard.path || "/"}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </Link>
              </div>
              <div className="card__content flex flex-col relative text-white mt-auto">
                <h2 className="card__title font-semibold text-5xl m-0 mb-2">
                  {featuredCard.title}
                </h2>
                <p className="card__description text-xl leading-6 opacity-90 mb-4">
                  {featuredCard.description}
                </p>
                {featuredCard.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredCard.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ParticleCard>
          </div>

          {/* Carousel - Right Side - Vertical Stack */}
          <div className="carousel-section flex-1 flex flex-col min-w-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-medium">All Projects</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollCarousel('up')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 text-white"
                  aria-label="Scroll up"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v12" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollCarousel('down')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 text-white"
                  aria-label="Scroll down"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7m0 0l7-7m-7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
            <div ref={carouselRef} className="carousel-container flex-1 overflow-y-auto overflow-x-hidden pb-4" onMouseDown={handleMouseDown}>
            <div className="carousel-track flex flex-col gap-4" style={{ minHeight: 'max-content' }}>
              {carouselCards.map((card, index) => {
                const originalIndex = cardData.findIndex(c => c === card);
            const baseClassName = `card flex flex-col justify-between relative w-full h-[160px] flex-shrink-0 p-4 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] cursor-pointer ${
              enableBorderGlow ? "card--border-glow" : ""
            }`;

            const cardStyle = {
              backgroundColor: card.color || "var(--background-dark)",
              borderColor: "var(--border-color)",
              color: "var(--white)",
              "--glow-x": "50%",
              "--glow-y": "50%",
              "--glow-intensity": "0",
              "--glow-radius": "200px",
            };

            if (enableStars) {
              return (
                <div key={index} onClick={() => setFeaturedIndex(originalIndex)} className="cursor-pointer">
                  <ParticleCard
                  className={`${baseClassName} card-with-bg`}
                  style={{
                    ...cardStyle,
                    backgroundImage: card.image ? `url(${card.image})` : 'none',
                  }}
                  disableAnimations={shouldDisableAnimations}
                  particleCount={particleCount}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                >
                  <div className="card__header flex justify-between gap-3 relative text-white">
                    <span className="card__label text-base">{card.label}</span>
                  </div>
                  <div className="card__content flex flex-col relative text-white mt-auto">
                    <h3
                      className={`card__title font-normal text-base m-0 mb-1 ${
                        textAutoHide ? "text-clamp-1" : ""
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`card__description text-xs leading-5 opacity-90 mb-2 ${
                        textAutoHide ? "text-clamp-2" : ""
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                  </ParticleCard>
                </div>
              );
            }

            return (
              <div key={index} onClick={() => setFeaturedIndex(originalIndex)} className="carousel-card-wrapper cursor-pointer">
                <div
                  className={`${baseClassName} card-with-bg`}
                  style={{
                    ...cardStyle,
                    backgroundImage: card.image ? `url(${card.image})` : 'none',
                  }}
                >
                  <div className="card__header flex justify-between gap-3 relative text-white">
                    <span className="card__label text-base">{card.label}</span>
                  </div>
                  <div className="card__content flex flex-col relative text-white mt-auto">
                    <h3
                      className={`card__title font-normal text-base m-0 mb-1 ${
                        textAutoHide ? "text-clamp-1" : ""
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`card__description text-xs leading-5 opacity-90 mb-2 ${
                        textAutoHide ? "text-clamp-2" : ""
                      }`}
                    >
                      {card.description}
                    </p>
                    {card.tech && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {card.tech.slice(0, 2).map((tech, idx) => (
                          <span key={idx} className="tech-badge text-[0.65rem]">
                            {tech}
                          </span>
                        ))}
                        {card.tech.length > 2 && (
                          <span className="tech-badge text-[0.65rem]">+{card.tech.length - 2}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
            </div>
            </div>
            </div>
        </div>
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;

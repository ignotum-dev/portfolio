import React, { useState } from "react";
import aiHackathon from "@/assets/AI Hackathon.jpeg";
import blockchain from "@/assets/Blockchain.png";
import chims from "@/assets/CHIMS.png";
import ictdu from "@/assets/ICTDU.jpeg";

const galleryItems = [
  aiHackathon,
  blockchain,
  chims,
  ictdu,
];

const certifications = [
  {
    name: "AI Hackathon 2025 - 1st Runner Up",
    org: "Cloudstaff",
    year: "2025",
    link: "https://drive.google.com/file/d/10u0erbF-BjTBJox00l0V8U328Livlp23/view?usp=sharing",
  },
  {
    name: "11th TOPCIT Philippines - Top 4 Philippines",
    org: "TOPCIT",
    year: "2024",
    link: "https://drive.google.com/file/d/1NweXuUAiiwSidvL1sP_BbigMAqUGx3tM/view?usp=sharing",
  },
  {
    name: "Information Technology Specialist: Databases",
    org: "CERTIPORT",
    year: "2023",
    link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=467&cvid=6uT9PAp57Dm4lMPYp3cbhw==",
  },
  {
    name: "Information Technology Specialist: Java",
    org: "CERTIPORT",
    year: "2023",
    link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=472&cvid=tc+l4Taw+vnvIZNle/1+5g==",
  },
];

export default function GalleryCerts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
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
        nextSlide();
      } else {
        // Swiped right, go to previous slide
        prevSlide();
      }
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 overflow-hidden">
      <div className="mb-8 flex flex-col gap-2 mt-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Gallery and Certifications</h2>
        <p className="text-slate-300 max-w-2xl">
          A curated collection of moments and achievements.
        </p>
      </div>

      <div className="grid gap-10 md:gap-8 grid-cols-1 lg:grid-cols-[2fr_1fr] items-start">
        {/* Slideshow Gallery */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_50px_rgba(0,0,0,0.35)] w-full overflow-hidden">
          <h3 className="text-2xl font-semibold text-white mb-6">Gallery</h3>
          
          {/* Slideshow */}
          <div className="relative mb-6 group">
            <div
              className="relative overflow-hidden rounded-xl border border-white/10 cursor-pointer select-none"
              onClick={() => setSelectedImage(galleryItems[currentSlide])}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={galleryItems[currentSlide]}
                alt={`Gallery ${currentSlide + 1}`}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300 pointer-events-none"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#5227FF] text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#5227FF] text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              →
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
              {currentSlide + 1} / {galleryItems.length}
            </div>
          </div>

          {/* Slide Dots */}
          <div className="flex justify-center gap-2">
            {galleryItems.map((_, idx) => (
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

        {/* Certifications */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 shadow-[0_10px_50px_rgba(0,0,0,0.35)] min-h-[400px] md:h-[400px] flex flex-col w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            <button
              onClick={() => setShowAllCerts(true)}
              className="px-3 py-1 rounded-lg border border-[#5227FF]/50 bg-[#5227FF]/10 text-[#B19EEF] font-medium hover:bg-[#5227FF]/20 hover:border-[#5227FF] transition-all duration-200 text-xs whitespace-nowrap"
            >
              See All
            </button>
          </div>
          <div className="space-y-3 h-[300px] overflow-hidden">
            {certifications.slice(0, 4).map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/5 bg-black/30 px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer group"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-white font-medium leading-tight group-hover:text-[#5227FF] transition-colors truncate">{cert.name}</p>
                  <p className="text-xs text-slate-400 truncate">{cert.org}</p>
                </div>
                <span className="text-xs text-slate-300 px-2 py-1 rounded-full bg-white/10 border border-white/5 group-hover:bg-[#5227FF]/20 group-hover:border-[#5227FF]/50 transition-all flex-shrink-0 ml-2">
                  {cert.year}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/70 hover:bg-[#5227FF] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Certifications Modal */}
      {showAllCerts && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowAllCerts(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 overflow-y-auto shadow-[0_10px_50px_rgba(0,0,0,0.35)] [scrollbar-width:none] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#5227FF] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:opacity-0 hover:[&::-webkit-scrollbar-thumb]:opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">All Certifications</h2>
              <button
                onClick={() => setShowAllCerts(false)}
                className="bg-black/50 hover:bg-[#5227FF] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 text-xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-black/30 px-4 py-4 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer group"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium group-hover:text-[#5227FF] transition-colors">{cert.name}</p>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{cert.org}</p>
                  </div>
                  <span className="text-sm text-slate-300 px-3 py-1 rounded-full bg-white/10 border border-white/5 group-hover:bg-[#5227FF]/20 group-hover:border-[#5227FF]/50 transition-all flex-shrink-0 ml-3">
                    {cert.year}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

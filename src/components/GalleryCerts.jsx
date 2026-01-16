import React, { useState } from "react";

// Simple, unfiltered lists
const achievements = [
  {
    name: "DOST Scholar",
    org: "DOST-SEI",
    year: "2022-2026",
  },
  {
    name: "Dean's Lister",
    org: "Systems Plus College Foundation - CCIS Department",
    year: "S.Y 2024-2025",
  },
  {
    name: "President's Lister",
    org: "Systems Plus College Foundation - CCIS Department",
    year: "S.Y 2023-2024",
  },
  {
    name: "President's Lister",
    org: "Systems Plus College Foundation - CCIS Department",
    year: "S.Y 2022-2023",
  },
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
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 overflow-hidden">
      <div className="mb-8 flex flex-col gap-2 mt-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Achievements and Certifications</h2>
        <p className="text-slate-300 max-w-2xl">A curated list of recognitions and credentials.</p>
      </div>

      <div className="grid gap-10 md:gap-8 grid-cols-1 lg:grid-cols-[2fr_1fr] items-start">
        {/* Achievements List (simple bullets) */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_50px_rgba(0,0,0,0.35)] w-full overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Achievements</h3>
            <button
              onClick={() => setShowAllAchievements(true)}
              className="px-3 py-1 rounded-lg border border-[#5227FF]/50 bg-[#5227FF]/10 text-[#B19EEF] font-medium hover:bg-[#5227FF]/20 hover:border-[#5227FF] transition-all duration-200 text-xs whitespace-nowrap"
            >
              See All
            </button>
          </div>
          <ul className="list-disc pl-6 space-y-3 text-slate-200">
            {achievements.slice(0, 4).map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                <span className="text-white hover:text-[#B19EEF] font-medium transition-colors cursor-default">
                  {item.name}
                </span>
                <span className="ml-2 text-slate-400 text-sm">
                  — {item.org} ({item.year})
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications (unchanged behavior with modal) */}
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

      {/* Achievements Modal */}
      {showAllAchievements && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowAllAchievements(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 overflow-y-auto shadow-[0_10px_50px_rgba(0,0,0,0.35)] [scrollbar-width:none] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#5227FF] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:opacity-0 hover:[&::-webkit-scrollbar-thumb]:opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">All Achievements</h2>
              <button
                onClick={() => setShowAllAchievements(false)}
                className="bg-black/50 hover:bg-[#5227FF] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 text-xl"
              >
                ✕
              </button>
            </div>
            <ul className="list-disc pl-6 space-y-4 text-slate-200">
              {achievements.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="text-white font-medium">
                    {item.name}
                  </span>
                  <span className="ml-2 text-slate-400 text-sm">
                    — {item.org} ({item.year})
                  </span>
                </li>
              ))}
            </ul>
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
            className="relative w-full max-w-2xl max-h[80vh] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 overflow-y-auto shadow-[0_10px_50px_rgba(0,0,0,0.35)] [scrollbar-width:none] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#5227FF] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:opacity-0 hover:[&::-webkit-scrollbar-thumb]:opacity-100"
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

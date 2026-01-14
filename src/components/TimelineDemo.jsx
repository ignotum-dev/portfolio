import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import tictactoe from "@/assets/tictactoe.jpeg";
import calculator from "@/assets/calculator.jpg";
import sms from "@/assets/sms.jpeg";
import temperature from "@/assets/temperature.jpeg";
import tiktok from "@/assets/tiktok.jpeg";
import portfolio from "@/assets/portfolio.jpeg";
import python from "@/assets/python.jpeg";
import medicine_api from "@/assets/medicine-api.jpeg";
import sm_api from "@/assets/sm-api.jpeg";
import ictdu2 from "@/assets/ictdu2.jpg";
import chims from "@/assets/chims.jpeg";
import ictdu from "@/assets/ICTDU.jpeg";
import gamotify from "@/assets/gamotify.jpeg";
import alkansave from "@/assets/Blockchain.png";
import cloudstaff from "@/assets/AI Hackathon.jpeg";

export function TimelineDemo() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-lg dark:text-neutral-200">
            Become a <span className="text-[#5227FF] font-bold">senior backend developer</span> in <span className="text-[#5227FF] font-bold">ICTDU</span> (SPCF Developers). Starting to learn <span className="text-[#5227FF] font-bold">Full Stack Development</span> and create personal projects. Join various <span className="text-[#5227FF] font-bold">hackathons and competition</span>. Exposed to different projects outside and inside the school.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={ictdu}
              alt="ICTDU"
              width={500}
              height={500}
              onClick={() => setSelectedImage(ictdu)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={gamotify}
              alt="Gamotify"
              width={500}
              height={500}
              onClick={() => setSelectedImage(gamotify)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={alkansave}
              alt="Alkansave"
              width={500}
              height={500}
              onClick={() => setSelectedImage(alkansave)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={cloudstaff}
              alt="AI Hackathon"
              width={500}
              height={500}
              onClick={() => setSelectedImage(cloudstaff)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-lg dark:text-neutral-200">
            In my third year, I joined <span className="text-[#5227FF] font-bold">ICTDU</span> as a <span className="text-[#5227FF] font-bold">junior backend developer</span>. Learned <span className="text-[#5227FF] font-bold">Laravel</span> and started to make personal projects. Be a part of <span className="text-[#5227FF] font-bold">CHIMS</span>, a Mabalacat LGU project.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={ictdu2}
              alt="ICTDU"
              width={500}
              height={500}
              onClick={() => setSelectedImage(ictdu2)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={sm_api}
              alt="Student Management API"
              width={500}
              height={500}
              onClick={() => setSelectedImage(sm_api)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={medicine_api}
              alt="Medicine API"
              width={500}
              height={500}
              onClick={() => setSelectedImage(medicine_api)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={chims}
              alt="CHIMS"
              width={500}
              height={500}
              onClick={() => setSelectedImage(chims)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-lg dark:text-neutral-200">
            Learned to use <span className="text-[#5227FF] font-bold">Python</span> and make <span className="text-[#5227FF] font-bold">OOP</span> projects. Created my first <span className="text-[#5227FF] font-bold">Portfolio using Wordpress</span>. Earned the <span className="text-[#5227FF] font-bold">Presidents' Lister</span> and the <span className="text-[#5227FF] font-bold">Top 1 of our College Department</span>. Become a Co-Founder of <span className="text-[#5227FF] font-bold">intellisense.stdio</span> (TikTok Account).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={python}
              alt="Quiz Application"
              width={500}
              height={500}
              onClick={() => setSelectedImage(python)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={portfolio}
              alt="Porfolio Website"
              width={500}
              height={500}
              onClick={() => setSelectedImage(portfolio)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={sms}
              alt="Student Management System"
              width={500}
              height={500}
              onClick={() => setSelectedImage(sms)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={tiktok}
              alt="intellisense.stdio"
              width={500}
              height={500}
              onClick={() => setSelectedImage(tiktok)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-lg dark:text-neutral-200">
            As a first year student, I've been exposed to <span className="text-[#5227FF] font-bold">C</span> and <span className="text-[#5227FF] font-bold">Java</span>. Created a <span className="text-[#5227FF] font-bold">Student Record System</span> using C. Created <span className="text-[#5227FF] font-bold">TicTacToe, Calculator, Temperature Converter</span> App using Java.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={tictactoe}
              alt="TicTacToe Game"
              width={500}
              height={500}
              onClick={() => setSelectedImage(tictactoe)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={calculator}
              alt="Calculator App"
              width={500}
              height={500}
              onClick={() => setSelectedImage(calculator)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={sms}
              alt="Student Management System"
              width={500}
              height={500}
              onClick={() => setSelectedImage(sms)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
            <img
              src={temperature}
              alt="Temperature Converter"
              width={500}
              height={500}
              onClick={() => setSelectedImage(temperature)}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      ),
    },
    // {
    //   title: "2020 - 2022",
    //   content: (
    //     <div>
    //       <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
    //         Graduated in Angeles City Science High School with The Highest Honor academic award.
    //       </p>
    //       {placeholderGrid}
    //     </div>
    //   ),
    // },
    // {
    //   title: "2016 - 2020",
    //   content: (
    //     <div>
    //       <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
    //         Hello World! My first time exposed to programming. Learned the basics of HTML, CSS, JavaScript, and PHP. Graduated in Claro M. Recto Information and Communication Technology High School.
    //       </p>
    //       {placeholderGrid}
    //     </div>
    //   ),
    // },
  ];
    
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
      
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
    </div>
  );
}

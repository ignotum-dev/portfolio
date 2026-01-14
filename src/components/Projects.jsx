import React from "react";
import MagicBento from "./ui/MagicBento";

export default function Projects() {
  return (
    <div className="w-full flex justify-center items-center px-2 md:px-4">
      <div className="w-full md:w-[95%] lg:w-[85%] transform scale-90 md:scale-75">
        <MagicBento spotlightRadius={300}/>
      </div>
    </div>
  );
}

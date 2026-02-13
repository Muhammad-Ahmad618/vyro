"use client";

import { ProjectCard } from "../projectCard";
import { animate } from "animejs";
import { useRef, useEffect } from "react";

export function HeroSection() {
  const HeroHeadingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const HeroHeading = HeroHeadingRef.current;
    if (HeroHeading) {
      animate(HeroHeading, {
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutQuad",
        delay: 100,
      });
    }
  }, []);
  return (
    <div className="relative h-screen overflow-hidden bg-linear-to-b from-black via-gray-950 to-blue-900 text-center px-4 rounded-b-[50px] flex items-center pb-24 z-10">
      <div className="text-white max-w-250 w-full mx-auto space-y-8">
        <div ref={HeroHeadingRef}>
          <h1 className="text-7xl">
            <span className="pr-4 font-oooh-baby">Light-Speed</span>
            <span className="text-transparent bg-clip-text font-bold bg-linear-to-b from-white via-gray-200 to-white">
              Innovation
            </span>
          </h1>
          <h1 className="text-7xl">
            <span className="text-transparent bg-clip-text font-bold bg-linear-to-b from-white via-gray-200 to-white pr-4">
              Unbound by
            </span>
            <span className="font-oooh-baby">Gravity</span>
          </h1>
        </div>
        <p className="text-2xl leading-9 font-extralight">
          Vyro builds the next generation of content creation tools powered by
          Artificial Intelligence and Machine Learning to empower you to express
          your creativity.
        </p>
      </div>
      <ProjectCard />
    </div>
  );
}

"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FloatingCard } from "./floatingCard";

export function Vyroverse() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "125%"]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], ["-100%", "40%"]);

  return (
    <div className="w-full min-h-screen relative mb-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto h-full">
        <motion.div
          className="space-y-5 flex flex-col items-center justify-center -z-10"
          style={{ y: translateY2 }}
        >
          <div className="px-5 py-3 rounded-full inline-block bg-linear-to-r from-gray-900 via-blue-700 to-gray-900  shadow-sm shadow-gray-200">
            <h4 className="font-semibold text-lg text-white">Vyroverse</h4>
          </div>
          <h1 className="text-6xl font-semibold text-center font-manrope">
            Where ideas collide, creativity thrives, and breakthroughs happen.
          </h1>
        </motion.div>
      </div>
      <FloatingCard translateY={translateY} />
    </div>
  );
}

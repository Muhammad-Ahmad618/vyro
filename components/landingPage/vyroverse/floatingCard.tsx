"use client";

import { motion, MotionValue } from "framer-motion";
import { BsXbox } from "react-icons/bs";
import Image from "next/image";

export function FloatingCard({
  translateY,
}: {
  translateY: MotionValue<string>;
}) {
  return (
    <div className="absolute -top-40 w-full z-30">
      <div className="flex items-center justify-center">
        <motion.div
          style={{ translateY }}
          className={`min-w-[400px] h-96 shrink-0 space-y-5 rounded-[50px] p-10 border shadow-blue-500 border-gray-700 backdrop-blur-lg 
                    shadow-[0_0_20px_rgba(0,0,0,0.25)] bg-linear-to-b from-black via-gray-900 to-blue-900`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-start text-white text-2xl font-bold">
              AI Art Generation
            </h2>
            <BsXbox className="text-white text-4xl" />
          </div>
          <Image
            src="/Avif/project_image2.avif"
            alt="image"
            width={100}
            height={100}
            className="rounded-full w-16 h-16"
          />
        </motion.div>
      </div>
    </div>
  );
}

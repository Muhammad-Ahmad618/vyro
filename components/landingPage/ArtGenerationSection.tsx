"use client";

import { GiCircleClaws } from "react-icons/gi";
import Image from "next/image";
import Ai_image from "@/public/Ai_image.webp";

export function ArtGeneratorSection() {
  return (
    <div className="my-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-black px-5 py-3 rounded-t-3xl">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-white text-lg">
              <GiCircleClaws />
              <h3>Imagine</h3>
            </div>
            <h3 className="text-white text-lg font-light">
              - AI Art Generator
            </h3>
          </div>
          <ul className="flex items-center gap-2">
            <li className="p-2 bg-red-400 rounded-full"></li>
            <li className="p-2 bg-amber-400 rounded-full"></li>
            <li className="p-2 bg-green-400 rounded-full"></li>
          </ul>
        </div>
        <div className="relative mt-px">
          <Image
            src={Ai_image}
            alt="art generator"
            width={500}
            height={500}
            className="w-full h-screen object-cover rounded-b-3xl"
          />
          <div className="absolute bottom-5 left-1/2 transform max-w-[80%] backdrop-blur-md  px-10 py-2 w-full -translate-x-1/2 bg-black/5 border border-gray-600 rounded-full">
            <h3 className="text-white text-2xl font-light text-center">
              Transforming Possibilites into realities through Cutting Edge
              Generative AI Solutions
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

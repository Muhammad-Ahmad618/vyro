"use client";

import { heroCards } from "./data";
import { BsXbox } from "react-icons/bs";
import Image from "next/image";

export function ProjectCard() {
  return (
    <div className="flex items-center justify-center absolute -bottom-44 left-1/2 -translate-x-1/2 w-screen gap-5 overflow-hidden pt-10">
      {heroCards.map((card) => (
        <div
          key={card.id}
          className={`min-w-[400px] h-84 shrink-0 ${card?.invisible ? "invisible" : ""} space-y-5 rounded-[50px] bg-linear-to-b p-10 border border-gray-700 backdrop-blur-lg 
                shadow-[0_0_20px_rgba(0,0,0,0.25)] ${card?.gradient} ${card?.shadow}`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-start text-white text-2xl font-bold">
              {card?.title}
            </h2>
            <BsXbox className="text-white text-4xl" />
          </div>
          {card?.image && (
            <Image
              src={card?.image}
              alt="image"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}

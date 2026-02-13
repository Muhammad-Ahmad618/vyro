"use client";

import Image from "next/image";
import { Links } from "@/components/ui/Links";
import vyro from "@/public/vyro.avif";
import { ShinnyButton } from "../shinnyButton";
import { navbarData } from "./data";

export const Navbar = () => {
  return (
    <nav className="p-5 bg-black w-full">
      <div className="max-w-8xl px-20 mx-auto w-full flex justify-between items-center">
        <div>
          <Image src={vyro} alt="Logo" width={100} height={100} />
        </div>

        <ul className="flex items-center gap-4 gap-x-16 text-white">
          {navbarData.map((links, index) => (
            <Links key={index} label={links.label} link={links.url} />
          ))}
        </ul>

        <ShinnyButton label="Join Us" />
      </div>
    </nav>
  );
};

"use client";

import { IoIosArrowRoundForward } from "react-icons/io";

export function CustomBtn({ lable, color }: { lable: string; color: string }) {
  return (
    <button
      className={`group flex items-center gap-2 px-6 py-4 cursor-pointer rounded-full text-lg bg-${color} text-black`}
    >
      {lable}
      <IoIosArrowRoundForward className="text-[1.8rem] group-hover:-rotate-45 transition-all duration-300" />
    </button>
  );
}

"use client";

import { CustomBtn } from "@/components/shared/customBtn";
import { statsCards } from "./data";

export function StatisticsSection() {
  return (
    <div className="bg-black w-full rounded-t-[150px] min-h-fit pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="p-5 flex items-center justify-between mb-30">
          <h1 className="text-6xl font-semibold text-white">
            The Magical Numbers
          </h1>
          <CustomBtn lable="Learn More" color="white" />
        </div>

        <div className="h-[105vh] bg-black flex flex-col items-center justify-between my-10 ">
          <div className="flex justify-between h-screen w-full gap-x-50 ">
            {statsCards.map((card, index) => (
              <div
                key={index}
                className="w-full flex justify-center items-center"
              >
                <div
                  className={`${card.shape ?? "rounded-full"} ${card.width ?? "max-w-64"} h-64 w-full flex flex-col gap-2 justify-center items-center  ${card.position} shadow-[0_0_60px_rgba(0,0,0,0.25)] shadow-blue-600`}
                >
                  <h1 className="text-6xl font-semibold text-white">
                    {card.numbers}
                  </h1>
                  <p className="text-white text-2xl">{card.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full text-white h-full">
            <div className="max-w-150 w-full h-full mx-auto px-10 text-center rounded-t-[150px] shadow-[0_0_60px_rgba(0,0,0,0.25)] shadow-blue-600 space-y-5 bg-black flex flex-col items-center justify-center relative">
              <div className="bg-blue-800 absolute blur-2xl max-w-[576px] h-[576px] rounded-full border border-white"></div>
              <div>
                <h1 className="text-9xl font-semibold">150M+</h1>
                <p className="text-4xl">Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { CustomBtn } from "@/components/shared/customBtn";
import { statsCards } from "./data";
import { LightBlob } from "@/components/ui/LightBlob";

export function StatisticsSection() {
  return (
    <div className="bg-black w-full rounded-t-[150px] min-h-fit pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="p-5 flex items-center justify-between mb-30 relative">
          <h1 className="text-6xl font-semibold text-white">
            The Magical Numbers
          </h1>
          <CustomBtn lable="Learn More" color="bg-white hover:bg-gray-100" />
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
            <div
              className="max-w-150 w-full h-full mx-auto px-10 text-center rounded-t-[150px] space-y-5 bg-black flex flex-col items-center justify-center relative overflow-hidden"
              style={{
                boxShadow:
                  "0 -40px 80px -20px rgba(37, 99, 235, 1), 0 -20px 40px -10px rgba(0,0,0,0.5)",
              }}
            >
              <div className="relative z-10">
                <h1 className="text-9xl font-semibold">150M+</h1>
                <p className="text-4xl">Downloads</p>
              </div>
              <LightBlob
                bottom="-100px"
                left="50%"
                width="400px"
                height="400px"
                blur="blur-3xl"
                backgroundColor="bg-blue-600"
                className="-translate-x-1/2 opacity-70 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

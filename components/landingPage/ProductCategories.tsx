"use client";
import { LightBlob } from "@/components/ui/LightBlob";

const productCategories = [
  {
    name: "Photo Editing",
    image:
      "https://framerusercontent.com/images/6RNu9KgaFa7EtVC1HuZJVDqLOI.png",
  },
  {
    name: "Generative AI",
    image:
      "https://framerusercontent.com/images/VestAN1Nbmcdxx3nu8Jug3KJyc.png",
  },
];

export function ProductCategories() {
  return (
    <div className="h-screen max-w-250 w-full mx-auto">
      <div className="space-y-10 py-10">
        <div className="text-center space-y-5">
          <div className="bg-black/10 rounded-full inline-block py-2 px-10">
            <h4 className="text-xl ">Product Categories</h4>
          </div>
          <h1 className="text-[68px] leading-tight">
            Immerse Yourself in the Art of Photo Editing and Generative AI.
          </h1>
        </div>
        <div className="flex items-center justify-center gap-20">
          {productCategories.map((category) => (
            <div className="relative bg-[#070809] rounded-2xl pb-10 max-w-[370px] w-full overflow-hidden hover:scale-101 transition-all duration-300 cursor-pointer shadow-[0_0_60px_rgba(0,0,0,0.25)] hover:shadow-blue-600">
              <LightBlob
                bottom="-150px"
                left="50%"
                width="350px"
                height="350px"
                backgroundColor="bg-blue-600"
                className="-translate-x-1/2 opacity-50 pointer-events-none"
              />
              <div className="relative z-10">
                <img src={category.image} alt="thumbnail" />
              </div>
              <h4 className="text-center text-2xl text-white relative z-10 ">
                {category.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

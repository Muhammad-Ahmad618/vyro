interface HeroCard {
  id: number;
  title: string;
  gradient: string;
  image: string;
  shadow?: string;
  delay: number;
  invisible?: boolean;
}

export const heroCards: HeroCard[] = [
  {
    id: 1,
    title: "Smart Editor",
    gradient: "from-black via-gray-900 to-indigo-500",
    image: "/Avif/project_image.avif",
    delay: 0,
  },
  {
    id: 2,
    title: "Text to Image",
    gradient: "from-black via-gray-900 to-cyan-500",
    image: "/Avif/project_image2.avif",
    delay: 100,
  },
  {
    id: 3,
    title: "AI Art Generator",
    gradient: "from-black via-gray-900 to-rose-500",
    shadow: "shadow-purple-700",
    image: "",
    delay: 200,
    invisible: true,
  },
  {
    id: 4,
    title: "Prompt Studio",
    gradient: "from-black via-gray-900 to-teal-500",
    image: "/Avif/project_image.avif",
    delay: 300,
  },
  {
    id: 5,
    title: "AI Upscaler",
    gradient: "from-black via-gray-900 to-amber-500",
    image: "/Avif/project_image2.avif",
    delay: 400,
  },
];

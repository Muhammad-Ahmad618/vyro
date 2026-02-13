import Link from "next/link";

export function Links({ label, link }: { label: string; link: string }) {
  return (
    <li className="group font-medium">
      <Link href={link}>{label}</Link>
      <div className="transition-all duration-300 ease-in-out group-hover:w-[50%] w-0 h-[2px] bg-gray-300 rounded-full"></div>
    </li>
  );
}

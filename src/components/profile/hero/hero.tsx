import { ReactElement } from "react";
import { ColourfulText } from "../../ui/colourful-text";

import Image from "next/image";
import { Spotlight } from "../../ui/spotlight-new";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoDocument } from "react-icons/io5";
import { PaperclipIcon } from "lucide-react";
export default function Hero(): ReactElement {
  return (
    <section className="h-[25rem] w-full flex p-2 rounded-md  items-center border-[1px] dark:bg-inherit  bg-[#bebebe] bg-opacity-5 border-opacity-5 dark:border-[#4b4b4b] justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="flex w-auto items-center justify-center gap-8">
        <div className=" w-full gap-1 flex flex-col items-center justify-center  mx-auto relative z-10 ">
          <h1 className="text-6xl h-full md:text-7xl font-bold text-center bg-clip-text text-transparent bg-black dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">
            <div className="relative group w-fit">
              <span className="text-blue-600 hover:underline cursor-pointer">
                <ColourfulText text="Ajay Singh" />
              </span>
            </div>
          </h1>

          <div className="relative w-fit mx-auto">
            <p className="mt-4 mb-1 font-base text-base dark:text-neutral-300 text-neutral-700 text-center max-w-lg">
              Aspiring Software Engineer proficient in the MERN stack, Next JS &
              backend technologies like Node.js, Golang, Java.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
              <div className="shine-line w-1/3 h-[2px] bg-[#555] dark:bg-gradient-to-r dark:from-transparent from-transparent via-black/70 dark:via-white/70 to-transparent animation-shineLine-black dark:animate-shineLine"></div>
            </div>
          </div>
          <span className=""> 📍 Thane, Maharashtra</span>
          <div className="mt-2">
          </div>
            
        </div>
      </div>
    </section>
  );
}

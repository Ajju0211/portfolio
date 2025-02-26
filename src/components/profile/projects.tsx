"use client";
import projects from "./constance";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Image from 'next/image';
import {
  SiMongodb,
  SiExpress,
  SiEthereum,
  SiJavascript,
  SiCss3,
  SiSocketdotio,
  SiWebrtc,
  SiOpenai,
} from "react-icons/si";
import { MdOutlineArrowOutward } from "react-icons/md";

// Map tech stack names to icons
const techIcons: { [key: string]: ReactElement } = {
  NodeJS: <FaNodeJs size={20} />,
  React: <FaReact size={20} />,
  MongoDB: <SiMongodb size={20} />,
  Express: <SiExpress size={20} />,
  EtherJS: <SiEthereum size={20} />,
  JavaScript: <SiJavascript size={20} />,
  CSS: <SiCss3 size={20} />,
  "Socket IO": <SiSocketdotio size={20} />,
  WebRTC: <SiWebrtc size={20} />,
  API: <SiOpenai size={20} />,
  ChatGPT: <SiOpenai size={20} />,
  Deepseek: <SiOpenai size={20} />,
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReactElement } from "react";

const ProjectList: React.FC = () => {
  const handleRedirect = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full flex flex-col items-start">
      <span className="text-xl uppercase font-bold">projects</span>
      <Carousel className="w-full cursor-pointer">
        <CarouselContent className="p-3">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2  border-[1px] rounded-[12px] m-1 w-28 sm:w-40 h-90 p-3"
            >
              <div
                className="h-full w-full flex overflow-hidden flex-col items-start rounded-[10px] justify-start"
                onClick={() => {
                  handleRedirect(project.link);
                }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-50 object-cover transition-transform duration-300 hover:scale-102 rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex w-full justify-between items-center">
                    <h2 className="text-md font-semibold mt-3">
                      {project.title}{" "}
                    </h2>
                    <MdOutlineArrowOutward size={12} />
                  </div>
                  <p className="text-gray-300 w-full text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex w-full  mt-2 p-2 flex-wrap">
                    {project.techStack && project.techStack.length > 0 ? (
                      project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-1 text-sm border px-2 py-1 rounded-md"
                        >
                          {techIcons[tech] || tech}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500">
                        No Tech Stack Available
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectList;

"use client";
import {  useRef, useState } from "react";
import { projects } from "../../lib/constance";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
import { ReactElement } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Menu, XIcon } from "lucide-react";

const techIcons: { [key: string]: ReactElement } = {
  NodeJS: <FaNodeJs size={16} />,
  React: <FaReact size={16} />,
  MongoDB: <SiMongodb size={16} />,
  Express: <SiExpress size={16} />,
  EtherJS: <SiEthereum size={16} />,
  JavaScript: <SiJavascript size={16} />,
  CSS: <SiCss3 size={16} />,
  "Socket IO": <SiSocketdotio size={16} />,
  WebRTC: <SiWebrtc size={16} />,
  API: <SiOpenai size={16} />,
  Deepseek: <SiOpenai size={16} />,
};

const allTechs = Array.from(
  new Set(projects.flatMap((p) => p.techStack || []))
);

const ProjectList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showTechFilter, setShowTechFilter] = useState(false);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const filterRef = useRef<HTMLDivElement | null>(null);

  const handleRedirect = (link: string) => {
    window.open(link, "_blank");
  };

  const handleTechToggle = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();
    const titleMatch = project.title.toLowerCase().includes(search);
    const techMatch = project.techStack?.some((tech) =>
      tech.toLowerCase().includes(search)
    );
    const searchMatch = titleMatch || techMatch;
    const techFilterMatch =
      selectedTechs.length === 0 ||
      selectedTechs.every((selected) => project.techStack?.includes(selected));
    return searchMatch && techFilterMatch;
  });

  // close filter menu when clicking outside

  return (
    <div className="w-full flex flex-col items-start justify-center  relative">
      <h3 className="text-2xl md:text-2xl font-bold font-jakarta uppercase mb-2">
        Projects
      </h3>

      <div className="flex flex-col sm:flex-row gap-2 justify-between items-center h-full w-full">
        <Input
          type="text"
          placeholder="Search by title or tech (e.g. React, NodeJS)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-[#6d6d6d] w-full"
        />

        <Button
          variant="outline"
          onClick={() => setShowTechFilter((prev) => !prev)}
          className="px-4 border-dashed border-gray-600 rounded-md hover:bg-gray-800 transition"
        >
          {!showTechFilter ? <Menu /> : <XIcon />}
          {showTechFilter ? "Tech" : "Filters"}
        </Button>
      </div>

      {/* Filter Dropdown */}
      <AnimatePresence>
        {showTechFilter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            ref={filterRef}
            className="absolute top-[80px]  right-0 z-50 w-[160px]  bg-[#111] rounded-sm  border border-gray-700 shadow-md"
          >
            <div className="flex flex-col max-h-[300px] w-full overflow-auto">
              {allTechs.map((tech) => (
                <div key={tech} className="w-full">
                  <label className="flex items-center pl p-2 hover:bg-gray-400 gap-6 w-full text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTechs.includes(tech)}
                      onChange={() => handleTechToggle(tech)}
                      className="accent-blue-500"
                    />
                    <span>{tech}</span>
                  </label>
                  <div className="border-b w-full border-[#c6c5c5]"></div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-7xl mt-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={index}
              className="border border-gray-700 hover:shadow-xl transition-shadow rounded-xl p-3 gap-2 flex flex-col"
            >
              <div className="w-full cursor-grab h-full overflow-hidden rounded-md">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-center w-full mt-2">
                <h3 className="text-md font-semibold">{project.title}</h3>
                <MdOutlineArrowOutward size={14} />
              </div>
              <p className="text-sm text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack?.length > 0 ? (
                  project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 text-xs dark:text-gray-300 border border-gray-600 px-2 py-1 rounded-md"
                    >
                      {techIcons[tech] || tech}
                      <span>{tech}</span>
                    </span>
                  ))
                ) : (
                  <span className="text-xs dark:text-gray-500">
                    No Tech Stack Available
                  </span>
                )}
              </div>
              <button
                onClick={() => handleRedirect(project.link)}
                className="cursor-pointer border-gray-400 px-4 py-2 mt-1 rounded-md border hover:border-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 dark:hover:border-white/30 text-gray-800 dark:text-white transition duration-200"
              >
                Live Demo
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 text-sm mt-6">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectList;

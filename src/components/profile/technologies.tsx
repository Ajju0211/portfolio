import { FaNodeJs, FaReact, FaDocker, FaJava, FaPython } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCss3, SiExpress, SiSocketdotio, SiWebrtc, SiReact, SiTypescript, SiNextdotjs, SiMysql, SiPostgresql, SiCplusplus, SiGo } from "react-icons/si";

const techStack = [
  { name: "NodeJS", icon: <FaNodeJs className="hover:text-[#539E43]" /> },
  { name: "React", icon: <FaReact className="hover:text-[#61DAFB]" /> },
  { name: "Go (basic)", icon: <SiGo className="hover:text-[#00ADD8]" /> },
  { name: "MongoDB", icon: <SiMongodb className="hover:text-[#47A248]" /> },
  { name: "JavaScript", icon: <SiJavascript className="hover:text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="hover:text-[#3178C6]" /> },
  { name: "CSS", icon: <SiCss3 className="hover:text-[#1572B6]" /> },
  { name: "Express", icon: <SiExpress className="hover:text-[#000000]" /> },
  { name: "Socket.IO", icon: <SiSocketdotio className="hover:text-[#010101]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="hover:text-[#000000]" /> },
  { name: "Docker", icon: <FaDocker className="hover:text-[#2496ED]" /> },
  { name: "Java", icon: <FaJava className="hover:text-[#007396]" /> },
  { name: "Python", icon: <FaPython className="hover:text-[#3776AB]" /> },
  { name: "MySQL", icon: <SiMysql className="hover:text-[#4479A1]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="hover:text-[#336791]" /> },
];




const Technologies: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <h2 className="text-xl font-bold uppercase mb-6">Technologies</h2>
      <div className="flex flex-wrap w-full justify-normal gap-1">
        {techStack.map((tech, index) => (
          <div key={index} className="flex courser-pointer flex-col border-[1px] justify-center rounded-[8px] w-20 p-2 gap-1 items-center">
            <span className={`text-4xl`}>{tech.icon}</span>
            <span className="text-[12px]">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

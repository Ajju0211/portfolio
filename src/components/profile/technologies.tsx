import {
  FaNodeJs, FaReact, FaDocker, FaJava, FaPython
} from "react-icons/fa";
import {
  SiMongodb, SiJavascript, SiCss3, SiExpress, SiSocketdotio, SiWebrtc,
  SiTypescript, SiNextdotjs, SiMysql, SiPostgresql, SiCplusplus, SiGo
} from "react-icons/si";

const techStack = [

  { name: "MongoDB", icon: <SiMongodb className="hover:text-[#47A248]" /> },
  { name: "Express", icon: <SiExpress className="hover:text-[#000000]" /> },
  { name: "React", icon: <FaReact className="hover:text-[#61DAFB]" /> },
  { name: "NodeJS", icon: <FaNodeJs className="hover:text-[#539E43]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="hover:text-[#000000]" /> },


  { name: "JavaScript", icon: <SiJavascript className="hover:text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="hover:text-[#3178C6]" /> },
  { name: "CSS", icon: <SiCss3 className="hover:text-[#1572B6]" /> },


  { name: "Socket.IO", icon: <SiSocketdotio className="hover:text-[#010101]" /> },
  { name: "WebRTC", icon: <SiWebrtc className="hover:text-[#333333]" /> },


  { name: "MySQL", icon: <SiMysql className="hover:text-[#4479A1]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="hover:text-[#336791]" /> },


  { name: "Docker", icon: <FaDocker className="hover:text-[#2496ED]" /> },


  { name: "Java", icon: <FaJava className="hover:text-[#007396]" /> },
  { name: "Python", icon: <FaPython className="hover:text-[#3776AB]" /> },
  { name: "C++", icon: <SiCplusplus className="hover:text-[#00599C]" /> },
  { name: "Go (basic)", icon: <SiGo className="hover:text-[#00ADD8]" /> },
];





const Technologies: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <span className="text-xl font-bold font-sans mb-4 uppercase dark:text-[#c8c8c8]">Technologies</span>
      <div className="flex flex-grow-0 flex-wrap w-full justify-normal gap-1">
        
        {techStack.map((tech, index) => (
          <div key={index} className="flex courser-pointer flex-col group-[]: border-[1px] dark:border-[#5a5a5a] justify-center rounded-[4px] w-20 p-2 gap-1 items-center">
            <span className={`text-4xl`}>{tech.icon}</span>
            <span className="text-[12px] ">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

import { FaNodeJs, FaReact, FaDocker, FaJava, FaPython } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCss3, SiExpress, SiSocketdotio, SiWebrtc, SiOpenai, SiReact, SiTypescript, SiNextdotjs, SiMysql, SiPostgresql, SiCplusplus } from "react-icons/si";

const techStack = [
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "ReactNative", icon: <SiReact /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Socket.IO", icon: <SiSocketdotio /> },
  { name: "WebRTC", icon: <SiWebrtc /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

const Technologies: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <h2 className="text-xl font-bold uppercase mb-6">Technologies</h2>
      <div className="flex flex-wrap w-full justify-normal gap-1">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col border-[1px] justify-center rounded-[8px] w-20 p-2 gap-1 items-center">
            <span className="text-4xl">{tech.icon}</span>
            <span className="text-[12px]">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

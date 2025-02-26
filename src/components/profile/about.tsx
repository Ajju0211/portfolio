import { ReactElement } from "react";

export default function About(): ReactElement {
  return (
    <div className="flex  w-full items-center justify">
      <div className="flex flex-col items-start gap-2 justify-evenly">
        <span className="text-xl uppercase font-bold">About</span>
        <p className="tracking-tight font-normal">
         Aspiring Software Engineer skilled in the MERN stack, React Native,
          and Next.js, with knowledge of Docker products. I enjoy solving
          real-world problems through technology and continuously learning new
          skills. My goal is to build scalable and efficient applications while
          growing as a developer.
        </p>
      </div>
    </div>
  );
}

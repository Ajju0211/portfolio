import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const ExperienceCard = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="space-y-2  flex flex-col items-start justify-start">
      <div
        className="uppercase flex gap-2 cursor-pointer font-bold "
        onClick={() => setOpen((prev) => !prev)}
      >
       
        <span className="text-xl uppercase dark:text-[#c8c8c8]">Experience</span>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: "auto" }}
          exit={{ opacity: 0, y: 0 }}
          transition={{
            duration: 1,
            type: "decay",
            stiffness: 88,
            ease: [0.25, 0.8, 0.25, 1],
            damping: 10,
          }}
          className="w-full h-full"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            
            exit={{ opacity: 0, x: -20 }}
            transition={{
              duration: 0.6,
              type: "spring",
              ease: [0.25, 0.8, 0.25, 1],
              stiffness: 88,
              damping: 10,
            }}
            className="w-full h-full"
          >
            <div className=" w-full flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold font-jakarta  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 ">
                  Frontend Developer
                </h1>
                <h2 className="text-md font-light ">JAN - 2025 | MARCH 2025</h2>
              </div>
              <a href="https://www.supportfoundation.co.in/"   className="font-base font-jakarta font-medium cursor-pointer ">
               SupportFoundation <br /> Remote{" "}
              </a>
            </div>

            <p className="leading-normal">
              React and Next.js application development for student , focused on
              education, improvement..
            </p>
            <div className="flex gap-2 mt-2">
              <FaReact className="hover:text-[#61DAFB] w-6 h-6" />
              <SiNextdotjs className="w-6 h-6" />
              <SiTailwindcss className=" w-6 h-6" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ExperienceCard;

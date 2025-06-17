"use client";
import { motion, useScroll } from "framer-motion";
import Hero from "@/components/profile/hero/hero";
import Header from "@/components/profile/header";
import ExperienceCard from "@/components/profile/experience";
import About from "@/components/profile/about";
import ProjectList from "@/components/profile/projects";
import Technologies from "@/components/profile/technologies";
import Education from "@/components/profile/education";
import Footer from "@/components/profile/footer";


export default function Home() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(8px)" }} // Start: Hidden, above, blurry
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} // End: Visible, normal position, sharp
      transition={{ duration: 0.9, ease: [0, 0.71, 0.2, 1.01] }} // Smooth transition
      className="h-screen w-screen  flex flex-col items-center"
    >
      
      <div className="flex justify-center max-w-4xl w-full z-20
        scroll-smooth antialiased  items-center">
        <div className="flex flex-col w-full p-2 ">
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="w-full h-full flex flex-col gap-2"
          >
            <div className="w-full h-full flex flex-col gap-2">
              <Header />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 40,
              damping: 10,
            }}
            className="w-full h-full p-2 flex flex-col gap-2"
          >
            <Hero />
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 40,
              damping: 10,
            }}
            className="w-full h-full p-2 mt-2 mb-2 flex flex-col gap-2"
          >
            <ExperienceCard />
          </motion.div>
          

          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 40,
              damping: 10,
            }}
            className="w-full h-full p-2 flex flex-col gap-2"
          >
            <ProjectList />
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 40,
              damping: 10,
            }}
            className="w-full h-full p-2 flex flex-col gap-2"
          >
            <Technologies />
          </motion.div>

          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 40,
              damping: 10,
            }}
            className="w-full h-full p-2 mt-2 mb-2 flex flex-col gap-2"
          >
            <Education />
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 40,
              damping: 10,
            }}
            className="w-full h-full p-2 mt-2 mb-2 flex flex-col gap-2"
          >
            <Footer/>
          </motion.div>

        </div>
      </div>
      
    </motion.div>
  );
}

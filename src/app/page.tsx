"use client";
import { motion } from "framer-motion";
import Hero from "@/components/profile/hero";
import Header from "@/components/profile/header";
import About from "@/components/profile/about";
import ProjectList from "@/components/profile/projects";
import Technologies from "@/components/profile/technologies";
import Education from "@/components/profile/education";
import Footer from "@/components/profile/footer";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }} // Start: Hidden, above, blurry
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} // End: Visible, normal position, sharp
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
      className="m-6"
    >
      <div className="flex justify-center scroll-smooth items-center">
        <div className="flex flex-col  h-full w-[90%] sm:w-[680px] mt-10 gap-8 items-center justify-center">
          <motion.div
            initial={{ y: -200, opacity: 0, rotate: -10 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="w-full flex flex-col gap-2"
          >
            <div className="w-full flex flex-col gap-2">
              <Header />
              <div className="border-b-[2px] w-full"></div>
            </div>
          </motion.div>

          <Hero />
          <Education />
          <About />
         <ProjectList />
          <Technologies />
          <Footer />
        </div>
      </div>
    </motion.div>
  );
}

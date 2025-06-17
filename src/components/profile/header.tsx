"use client";

import { ModeToggle } from "@/components/toggleButton";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/constance";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon, Menu } from "lucide-react";
export default function Header() {
  const [open, setOpen] = useState(true);
    const originalText = 'AY SINGH';
    const chars = 'LKDJNG';
    const [displayed, setDisplayed] = useState(originalText);


    function scrambleText(text: string, duration = 1000, fps = 60) {
      const letters = text.split('');
      const totalFrames = Math.floor((duration / 1000) * fps);
      const updates = new Array(totalFrames).fill('');

      for (let frame = 0; frame < totalFrames; frame++) {
        updates[frame] = letters
          .map((char, i) => {
            const shouldChange = Math.random() < frame / totalFrames;
            return shouldChange ? chars[Math.floor(Math.random() * chars.length)] : char;
          })
          .join('');
      }

      updates.push(text); // final text
      return updates;
    }

    const handleHover = () => {
      const frames = scrambleText(originalText, 800);
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(frames[i]);
        i++;
        if (i >= frames.length) clearInterval(interval);
      }, 1000 / 40);
    };


    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 640) {
          setOpen(false); // Close menu if screen size is sm or larger
        }
      };

      // Listen for resize
      window.addEventListener("resize", handleResize);

      // Initial check
      handleResize();

      // Cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <>
        <header className="flex  rounded-lg h-[50px] mt-2 p-2 w-full items-center flex-row justify-between ">
          <div className="flex h-full  w-full p-3 items-center justify-between gap-3">
              <span
                onMouseEnter={handleHover}
                className=" subpixel-antialiased text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-500 dark:via-white dark:to-white cursor-pointer font-serif  transition-all duration-300 "
              >
                AJ{displayed}
              </span>
            <div className="w-auto hidden sm:flex flex-row gap-4 font-semibold font-sans">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  whileHover="hover"
                  className="flex cursor-pointer flex-col items-center justify-center "
                >
                  <motion.span
                    className=" font-normal text-wrap"
                    variants={{
                      hover: { scale: 1.2 },
                    }}
                    transition={{ stiffness: 400 }}
                    onClick={() => window.open(link.link, '_blank')}
                  >
                    {link.name}
                  </motion.span>

                  <motion.span
                    className="h-[1px] w-full mt-1 dark:bg-white bg-black origin-center"
                    initial={{ scaleX: 0 }}
                    variants={{
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    style={{ scaleX: 0 }}
                  />
                </motion.div>
              ))}
              <ModeToggle />
            </div>
            {!open ? (
              <Menu className="block sm:hidden" onClick={() => setOpen(true)} />
            ) : (
              <XIcon className="z-30" onClick={() => setOpen(false)} />
            )}

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 z-20  flex h-screen w-full flex-col items-center justify-center gap-8 bg-black bg-opacity-80 sm:hidden"
                >
                  <ModeToggle className="scale-110" />

                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="relative cursor-pointer text-xl uppercase font-light"
                    >
                      {link.name}
                      <motion.span
                        className="absolute bottom-[-4px] left-1/2 h-[1px] w-0"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        style={{ originX: 0.5 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>
      </>
    );
  }

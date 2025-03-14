import { ReactElement, useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLink } from "react-icons/io5";
import { motion } from "framer-motion";
const Footer = (): ReactElement => {

  return (
    <section
      id="footer"
      className="w-full flex flex-col gap-5 items-start justify-between"
    >
      <div className="w-full flex gap-5 flex-col">
        <div className="border-b-[2px] w-full"></div>
        <div className="flex items-center justify-start gap-3 mb-10 w-full">
        
            <motion.div
              initial={{ opacity: 0, x: -20, filter: "" }} // Start: Hidden, above, blurry
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} // End: Visible, normal position, sharp
              exit={{ x: 100, opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.8 }} // Smooth transition
              className=""
            >
              <div className="flex items-center w-full justify-normal gap-3">
                <a href="https://github.com/Ajju0211">
                <div className="flex items-center justify-center gap-2">
                  <FaGithubSquare size={18} />
                  <span>Github</span>
                </div>
                </a>
                <div className="flex items-center justify-center gap-2">
                  <a href="https://www.linkedin.com/in/ajay-singh-689143253/" className="flex items-center justify-center gap-2">
                  <FaLinkedin size={18} />
                  <span>Linkedin</span>
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href="mailto:your@email.com?subject=Hello&body=I%20want%20to%20contact%20you"
                    className="flex items-center justify-center gap-2"
                  >
                     <MdMarkEmailUnread size={18} />
                     <span>Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
      <span></span>
    </section>
  );
};

export default Footer;

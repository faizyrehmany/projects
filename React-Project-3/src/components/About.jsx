import { motion } from "framer-motion";
import React, { useState } from "react";

function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-.15" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-[ochi4] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, 
        sell products, explain complex ideas, and hire great people.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl font-[ochi4]">Our approach:</h1>

          {/* Animated Button */}
          <motion.button
            className="font-[ochi4] text-[18px] flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ scale: isHovered ? 1.1 : 1, backgroundColor: isHovered ? "#000" : "#27272a" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Read more
            <motion.div 
              className="w-3 h-3 bg-zinc-100 rounded-full"
              animate={{ scale: isHovered ? 1.5 : 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Animated Image */}
        <motion.img
          className="w-1/2 h-[70vh] rounded-3xl"
          src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          alt=""
          animate={{ scale: isHovered ? 0.9 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default About;

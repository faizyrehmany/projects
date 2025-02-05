import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp } from "react-icons/fa";


function LandingPage() {



  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-.90" className='w-full h-screen bg-zinc-900 pt-28'>
      <div className='space-y-16 mt-32'>
        {["We Create", "Eye Opening", "Presentations"].map((items, index) => {
          return (
            <div key={index} className='masker'>
              <div className='w-fit flex items-center px-20'>
                {index === 1 && (
                  <motion.img
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt="Eye Opening"
                    className="mr-5 w-[10vw] h-[5.8vw] top-[0.4vw] relative rounded-md object-cover"
                  />
                )}
                <h1 className='uppercase font-[ochi2] text-[9vw] leading-[1vw]'>{items}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-44 flex justify-between items-center py-5 px-20 font-[ochi4]'>
        {["For public and private companies", "From the first pitch to IPO"].map((items, index) => (
          <p className='text-[1.2vw] font-light tracking-tight leading-none'>{items}</p>
        ))}
        <div className='start flex items-center gap-2'>
          <div className='px-5 py-2 border-[2px] text-lg border-zinc-500 rounded-full'>START THE PROJECT</div>
          <div className='w-10 h-10 px-4 flex items center justify-center border-[2px] text-lg border-zinc-500 rounded-full'>
            <span className='py-2 rotate-[45deg]'>
              <FaArrowUp />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LandingPage;

import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {


  return (
    <div data-scroll data-scroll-section data-scroll-speed = ".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-400 flex gap-10 overflow-hidden whitespace-nowrap mt-10'>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-90%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}

          className="text-[28vw] font-[ochi2] leading-[0.85] mt-[-60px]">WE ARE OCHI</motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-90%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[28vw] font-[ochi2] leading-[0.85] mt-[-60px]">WE ARE OCHI</motion.h1>


      </div>

    </div>
  )
}

export default Marquee


import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page4 = () => {

  useGSAP(function () {
    gsap.to('#rotate img', {
      rotate: 360,
      duration: 15,
      repeat: -1,
      ease: 'linear',
      

    })
  })

  return (
    <div className='h-screen bg-white p-10 relative' >
      <div className='bg-black overflow-hidden h-full w-full rounded-[50px]'>
        <video autoplay='true' loop muted className='h-full w-full object-cover rounded-[50px]' src="/src/assets/bg.mp4"></video>
        <div id='rotate' >
          <img src="/src/assets/mn.avif" alt="" className="absolute bottom-[9vw] left-60 w-[30%] h-auto"  />
        </div>

        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <h1 className='font-[anzo3] text-[12vw] leading-none mt-10'>PERSONAL</h1>
          <p className='text-gray-400 text-[40px] mt-[-2vw]'>Intuition, Imagination, Discipline</p>
          <h1 className=' font-[anzo3] leading-none mt-10 text-[12vw]'>PROFESSIONAL</h1>
          <p className='text-gray-400 text-[40px] mt-[-2vw]'>Time Management, Multitasking, Creativity</p>
          <h1 className='font-[anzo3] leading-none mt-10 text-[12vw]'>ADDITIONAL</h1>
          <p className='text-gray-400 text-[40px] mt-[-2vw]'> Business Development, Branding, SEO</p>
        </div>
      </div>

    </div>
  )
}

export default Page4

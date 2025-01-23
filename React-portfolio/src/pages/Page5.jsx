import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page5 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
        gsap.from('.rotateText1', {
             transform: 'rotateX(-80deg)',
             opacity: 0,
             duration:1,
             stagger: 1,
             scrollTrigger: {
                trigger: '.rotateText1',
                // markers: true,
                start: 'top 700vh',
                end: 'top -350%',
                scrub: 2
             }
             
        })
    })



    return (
        <div id='section3' className='bg-white text-center p-28 text-black'>

            <div className='rotateText1 mt-40'>
                <h1 className='text-[42vw] text-black font-[anzo3] leading-[35vw]'>HELPING</h1>
            </div>
            <div className='rotateText1'>
                <h1 className='text-[42vw] text-gray-400 font-[anzo3] leading-[35vw]'>MY</h1>
            </div>
            <div className='rotateText1'>
                <h1 className='text-[42vw] text-black font-[anzo3] leading-[35vw]'>CLIENTS</h1>
            </div>
            <div className='rotateText1'>
                <h1 className='text-[42vw] text-black font-[anzo3] leading-[35vw]'>TO ACHIEVE</h1>
            </div>
            <div className='rotateText1'>
                <h1 className='text-[42vw] text-gray-400 font-[anzo3] leading-[35vw]'>THEIR</h1>
            </div>
            <div className='rotateText1'>
                <h1 className='text-[42vw] text-black font-[anzo3] leading-[35vw]'>DREAMS!</h1>
            </div>
        </div>
    )
}

export default Page5

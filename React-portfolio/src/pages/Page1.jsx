import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import Page1Bottom from '../components/Page1Bottom';
import TiltText from '../components/TiltText';

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setxVal] = useState(0)
  const [yVal, setyVal] = useState(0)

  const mouseMoving = (e) => {

    setxVal(
      (e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 70
    );

    setyVal(
      -(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 20
    );



  }

  useGSAP(function () {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 2,
      ease: "power4.out"

    })
  },[xVal,yVal])





  return (
    <div onMouseMove={(e) => {
      mouseMoving(e)
    }} className='relative h-screen p-7 bg-white'>
      <div id='page1-in' className='relative shadow-xl p-20 shadow-gray-700 h-full bg-cover w-full rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_624,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]'>
        <img className='h-32' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  )
}

export default Page1

import React from 'react'

const Page6 = () => {
  return (
    <div className='h-screen bg-white p-10 relative' >
        <div className='bg-black overflow-hidden h-full w-full rounded-[50px]'>
            <video autoplay='true' loop muted className='h-full w-full object-cover' src="/src/assets/moon.mp4"></video>
            <h1 className='font-[anzo3] text-[40vw] absolute -bottom-10 top-[1vw] text-white left-40'>ABOUT</h1>
        </div>
      
    </div>
  )
}

export default Page6

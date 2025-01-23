import React from 'react'

const Page3 = () => {
    return (
        <div className="h-screen relative flex items-center justify-center bg-white">
            <img className="absolute z-20 object-contain h-[75vh] w-[95vw]" src="/src/assets/try.avif" />
            <video
                loop
                muted
                autoplay="true"
                className="z-10 h-[60vh] w-[50vw] relative object-cover" src='/src/assets/file.mp4'
            ></video>
            <div className="h-0.5 w-3/5 top-[40%] absolute z-0 bg-gray-600"></div>
            <div className="h-0.5 w-4/5 top-[58%] absolute z-0 bg-gray-600"></div>
            <div className="h-0.5 w-full top-[76%] absolute z-0 bg-gray-600"></div>
        </div>

    )
}

export default Page3

import React from 'react'

const TiltText = (props) => {
    return (
        <div>
            <div id='tiltdiv' ref={props.abc} className='mt-60'>

                <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo5] text-white'>I AM <span className='text-black'>DARK MODE</span>™</h1>
                <h1 className='text-[8.2vw] leading-[7vw] uppercase font-[anzo1] text-white'>DESIGNER</h1>
                <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo5] text-white'>TO HIRE</h1>

            </div>
        </div>
    )
}

export default TiltText

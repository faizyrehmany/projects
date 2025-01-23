import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 p-20 mt-10'>
        <button className='bg-black border-8 text-3xl text-white px-20 py-6 hover:bg-gray-500 rounded-full'>Hire me</button>
        <i class=" text-7xl ml-3 text-gray-700 ri-menu-line"></i>
    </div>
  )
}

export default Header




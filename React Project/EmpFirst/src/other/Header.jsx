import React from 'react'

const Header = (props) => {

  
const logOutUser = () => {
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  // window.location.reload()

}

  return (
    <div className='flex items-end justify-between'>
        <h2 className='text-2xl font-medium'>Hello<br /> <span className='text-3xl font-semibold'></span>username 👋</h2>
        <button onClick={logOutUser} className='bg-red-600 text-lg px-5 py-2 font-medium rounded-xl'>Log out</button>
      
    </div>
  )
}

export default Header

import React from 'react'
import Logo from '../assets/images/download-removebg-preview.png'
function NavBar() {
  return (
    <div className='w-full h-[13%] bg-black fixed top-0 left-0 z-50 p-5'>
      {/* logo */}
      <div className='flex justify-start items-center gap-3'>
        <img src={Logo} alt="" className='w-24 h-24' />
        <p>ATL</p>
      </div>
      {/* links */}
      {/* auth */}
    </div>
  )
}

export default NavBar
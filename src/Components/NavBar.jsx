import React from 'react'
import Logo from '../assets/images/download-removebg-preview.png'
function NavBar() {
  const Links = [
    {
      name: 'FAQ',
      path: '/FAQ'
    }, {
      name: 'NewProduct',
      path: '/NewProduct',
    }
  ]
  return (
    <div className='w-full h-[10%] bg-white fixed flex justify-between items-center top-0 left-0 z-50 p-5 shadow-lg'>
      {/* logo */}
      <div className='flex justify-start items-center gap-3'>
        <img src={Logo} alt="" className='w-28' />
        <p>ATL</p>
      </div>
      {/* links */}
      <ul></ul>
      {/* auth */}
      <div>
        <button className='w-32 p-3 bg-blue-500 text-white text-xl rounded-[8px] transition-all duration-300 hover:scale-105'>Login</button>
      </div>
    </div>
  )
}

export default NavBar
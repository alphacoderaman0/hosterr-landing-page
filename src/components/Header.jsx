import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <div className='flex justify-between'>
     <div className='flex justify-center items-center gap-2'>
        <img src="./assets/Logo.svg" alt="Loading..." />
        <button className='bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl text-xs text-white px-2.5 py-1.5'>Hosterr is Hiring</button>
     </div>
     <div>
     <GiHamburgerMenu />
     </div>
    </div>
  )
}

export default Header

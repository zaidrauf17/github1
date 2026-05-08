import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='w-full h-20 bg-gray-800 text-white flex items-center justify-center'>
        <ul className='flex gap-10'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/help"}>Help</Link></li>
           
        </ul>
   </nav>
  )
}

export default Navbar
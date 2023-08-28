import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-blue-600 py-4 px-4'>
      <div className='container flex justify-between items-center mx-auto'>
        <div className="logo font-bold text-3xl text-white h-[40px] flex items-center justify-center"><Link  to='Movies'>Movies</Link></div>
        <ul className='flex'>
            <li><Link className='hover:opacity-70 duration-300 text-white h-[40px] flex items-center justify-center  px-4' to='/'>watchList</Link></li>
            <li><Link className='hover:opacity-70 duration-300 text-white h-[40px] flex items-center justify-center  px-4' to='/watched'>watched</Link></li>
            <li><Link className=' h-[40px] flex items-center justify-center bg-green-400 px-4 text-white rounded-lg hover:bg-green-500 duration-300' to='/add'>Add</Link></li>
        </ul>
    </div>
    </div>
  )
}

export default Header
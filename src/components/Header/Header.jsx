import React from 'react'
import Logo from '../../assets/img/logo.svg'
import {HiMenu} from 'react-icons/hi'
import Navbar from '../../components/Header/Navbar'
const Header = ({setNavMobile}) => {
  return (
    <header className='py-6'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <a href="#">
            <img className='h-[30px]' src={Logo} alt="" />
          </a>
          <Navbar/>
          <HiMenu 
            onClick={()=>setNavMobile(true)}
            className='lg:hidden text-3xl cursor-pointer'/>
        </div>
      </div>
    </header>
  )
}

export default Header
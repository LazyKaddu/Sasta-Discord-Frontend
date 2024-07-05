import React from 'react'
import Li from '../components/Li'
import {HiOutlineHome} from 'react-icons/hi';

const Nav = () => {
  return (
    <nav className='w-[16vw] h-[32vw] bg-[#13192B] rounded-md flex justify-center items-center overflow-hidden'>
      <ul className='flex items-start flex-col justify-evenly w-[100%] h-[100%]'>
        <Li data={"Home"} href={'/'} icon={<HiOutlineHome/>}/>
        <Li data={"Chat"} href={'/chat'} icon={<HiOutlineHome/>}/>
        <Li data={"AboutUS"} href={'/'} icon={<HiOutlineHome/>}/>
        <Li data={"ContactUs"} href={'/'} icon={<HiOutlineHome/>}/>
        <Li data={"DevCom"} href={'/'} icon={<HiOutlineHome/>}/>
        <Li data={"Support"} href={'/'} icon={<HiOutlineHome/>}/>
        <Li data={"Logout"} href={'/'} icon={<HiOutlineHome/>}/>
      </ul>
    </nav>
  )
}

export default Nav

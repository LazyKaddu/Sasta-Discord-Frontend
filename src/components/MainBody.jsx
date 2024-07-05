import React from 'react'
import UserName from './UserName'
import Nav from './Nav'

const MainBody = ({data}) => {
  return (
    <>
    <div className='w-[100vw] h-[5vw] bg-[#AB9AFF]'></div>
    <div className='flex'>
        <div className='flex flex-col w-[22vw] justify-evenly items-center h-[40vw] bg-[#131A35]'>
            <UserName username={"Aashish"}/>
            <Nav/>
        </div>
        <div className='flex flex-col w-[78vw] bg-[#343A50] overflow-hidden'>
            {data}
        </div>    
    </div> 
    <div className='w-[100vw] h-[5vw] bg-[#242332]'></div>
    </>
  )
}

export default MainBody

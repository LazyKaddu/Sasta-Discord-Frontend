import React from 'react'

const UserName = ({image,username}) => {
  return (
    <div className='flex justify-around  items-center bg-green-200 w-[16vw] h-[4vw] rounded-lg'>
      <img src={image} className='rounded-[100%] w-[20%] h-[75%] drop-shadow-sm bg-blue-400'/>
      <p className='font-sans w-[50%] h-[70%] text-[1.6vw] text-center overflow-hidden scroll-auto'>{username}</p>
    </div>
  )
}

export default UserName

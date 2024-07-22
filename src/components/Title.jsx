import React from 'react'

const Title = ({title}) => {
  return (
    <div className='w-[100%] bg-[#3b20b4] h-[4vw] flex items-center justify-between px-4'>
      <p className='text-gray-400'>{title}</p>
      <div></div>
    </div>
  )
}

export default Title

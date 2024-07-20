import React from 'react'

const Message = ({sender,message,time}) => {
  return (
    <div className='flex flex-col bg-[rgba(241,245,249,0.95)] rounded-t-2xl rounded-br-2xl px-4 pt-2 mt-2 max-w-[40vw] w-[auto] h-[auto]'>
      <p className='text-blue-500 font-mono text-md font-medium'>{sender}</p>
      <p className='text-gray-600'>{message}</p>
      <div>
        <p className='text-right text-sm text-pretty font-thin'>{time}</p>
      </div>
    </div>
  )
}

export default Message

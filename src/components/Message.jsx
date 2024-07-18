import React from 'react'

const Message = ({sender,message,time}) => {
  return (
    <div className='flex flex-col gap-1 bg-[rgba(241,245,249,0.95)] rounded-t-2xl rounded-br-2xl p-4 max-w-[40vw] h-[auto]'>
      <p className='text-blue-500 font-mono text-md font-medium'>{sender}</p>
      <p className='text-gray-600'>{message}</p>
      <div>
        <p className='text-right text-sm text-pretty font-thin'>{Date.now()}</p>
      </div>
    </div>
  )
}

export default Message

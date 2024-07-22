import React from 'react';
import Cookies from 'js-cookie';

const Message = ({sender,message,time,scrollDiv,setHeight}) => {

  const currUser = Cookies.get('userName');
  console.log(currUser,sender);

  setHeight(scrollDiv.current.scrollHeight);
  return (
    <div className={(currUser === sender ? "ml-auto bg-purple-200 ":"mr-auto bg-[rgba(241,245,249,0.95)] ")+'flex flex-col  rounded-2xl px-4 pt-2 mt-2 max-w-[40vw] min-w-[30vw] h-[auto]'}>
      <p className='text-blue-500 font-mono text-md font-medium'>{sender}</p>
      <p className='text-gray-600'>{message}</p>
      <div>
        <p className='text-right text-sm text-pretty font-thin'>{time}</p>
      </div>
    </div>
  )
}

export default Message

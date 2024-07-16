import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from '../socket';
import Cookies from 'js-cookie';

const socket = io;

const Chatbox = ({userId,serverId}) => {

  const userName = Cookies.get("userName")
    const [message, setmessage] = useState('');
    const changeData = (e)=>{
        setmessage(e.target.value);
    };
    const submit = (e)=>{
      e.preventDefault();
      socket.emit('chat message', {userId,userName, serverId, message});
      setmessage(''); 
      }

  return (
    <form onSubmit={submit} method="get" className='flex items-center gap-2 bg-sky-50 border-blue-400 w-[98%] h-[7%] rounded m-4 text-[1vw] border-2'>
    <input type="text" name="chatbox" id="chatbox" value={message} placeholder='start a convo...' onChange={changeData} className='w-[97%] h-[100%] p-4 bg-transparent FocusOn' autoComplete='off'/>
    <button type='submit' className='text-blue-800'>-&gt;</button>
    </form>
  )
}

export default Chatbox

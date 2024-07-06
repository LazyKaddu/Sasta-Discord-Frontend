import React, { useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('https://localhost:4000');

const Chatbox = ({userId,channelId}) => {
    const [message, setmessage] = useState('');
    const changeData = (e)=>{
        setmessage(e.target.value);
    };
    const submit = async (e)=>{
        e.preventDefault();
        if(input){
          socket.emit('chat message', {userId, groupId: channelId, message});
          setmessage('');
        }

    }
  return (
    <form onSubmit={submit} method="get">
    <input type="text" name="chatbox" id="chatbox" value={message} placeholder='start a convo...' onChange={changeData} onKeyDown={submit} className='w-[98%] h-[6.5%] rounded m-4 p-4 text-[1vw] border-2 border-blue-400'/>
    </form>
  )
}

export default Chatbox

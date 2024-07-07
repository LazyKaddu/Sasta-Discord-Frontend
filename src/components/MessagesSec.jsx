import React, { useEffect, useState } from 'react';
import Message from './Message';
import axios from 'axios';
import io from '../socket';

const socket = io;


const MessagesSec = ({userId, channelId}) => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");

  useEffect(()=>{
    if(channelId){
      socket.emit('join group',{userId,channelId})

      socket.on('existing messages',(msgs)=>{
        setData(msgs);
      });
      socket.on('chat message',(msg)=>{
        setData([...Data,msg]);
      })
    }
    else{
      setError('failed to connect');
    };

    return ()=>{
      socket.emit('leave group',{ userId, channelId});
      socket.off('existing messages');
      socket.off('chat messages')
    }
  },[channelId,userId])

  return (
    <div className='h-[70vh] w-[60vw] border-gray-950'>
      {Data.map((item,index)=>{
        return (<Message key={index} sender={item.sender} message={item.message} time={item.time}/>)
      })}
      {Error && <p>{Error}</p>}
    </div>
  )
}

export default MessagesSec

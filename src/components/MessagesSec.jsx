import React, { useEffect } from 'react';
import Message from './Message';
import { useState } from 'react';
import io from 'socket.io-client';



const socket = io('https://localhost:4000');

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
    <div>
      {Data.map((item,index)=>{
        return (<Message key={index} sender={item.sender} message={item.message} time={item.time}/>)
      })}
      <p>{Error}</p>
    </div>
  )
}

export default MessagesSec

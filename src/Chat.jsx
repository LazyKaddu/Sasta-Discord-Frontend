import React, { useState } from 'react';
import MainBody from './components/MainBody';
import MessagesSec from './components/MessagesSec';
import Chatbox from './components/Chatbox';
import Title from './components/Title';
import axios from 'axios';


const ChatSection = (userId,channelId,chanelName)=>{

    return(
        <>
        <Title title={chanelName}/>
        <MessagesSec userId={userId} channelId={channelId}/>
        <Chatbox userId={userId} channelId={channelId}/>
        </>
    )
}

const Chat = () => {

  const [Chats, setChats] = useState([]);
  const [Error, setError] = useState(null)
  axios.get("./api/channels",{
    parms:{
      userId:userId,
    }
  }).then((response)=>{
    setChats(response.data)
  }
  ).catch((error)=>{
    setError(error);
  }
)

  return (
    <MainBody data={<ChatSection />} userName={"local host se lana hai"} open={false}/>
  )
}

export default Chat

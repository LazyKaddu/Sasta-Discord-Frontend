import React, { useState } from 'react';
import MainBody from './components/MainBody';
import MessagesSec from './components/MessagesSec';
import Chatbox from './components/Chatbox';
import Title from './components/Title';
import axios from 'axios';
import Cookies from 'js-cookie';

const ChatSection = (userId,channelId,chanelName)=>{

    return(
        <>
        <Title title={chanelName}/>
        {/* <MessagesSec userId={userId} channelId={channelId}/> */}
        <Chatbox userId={userId} channelId={channelId}/>
        </>
    )
}

const Chat = () => {
  const userId = Cookies.get('userId');
  
  return (<>
    <MainBody data={<ChatSection userId={userId}/>} userName={"local host se lana hai"} open={false}/>
  </>)
}

export default Chat

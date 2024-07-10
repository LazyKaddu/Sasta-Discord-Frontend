import React, { useState } from 'react';
import MainBody from './components/MainBody';
import MessagesSec from './components/MessagesSec';
import Chatbox from './components/Chatbox';
import Title from './components/Title';
import Cookies from 'js-cookie';

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
  const userId = Cookies.get('userId');
  const userName = Cookies.get('userName');
  
  return (<>
    <MainBody data={<ChatSection userId={userId}/>} userName={userName} open={false}/>
  </>)
}

export default Chat

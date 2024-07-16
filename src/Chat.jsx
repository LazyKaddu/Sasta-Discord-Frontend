import React, { useState } from 'react';
import MainBody from './components/MainBody';
import MessagesSec from './components/MessagesSec';
import Chatbox from './components/Chatbox';
import Title from './components/Title';
import Cookies from 'js-cookie';

const ChatSection = ()=>{
    const [Server, setServer] = useState('');
    const userId = Cookies.get('userId');
    return(
        <>
        <Title title={Server.name}/>
        <MessagesSec userId={userId} channelId={Server._id}/>
        <Chatbox userId={userId} channelId={Server._id}/>
        </>
    )
}

const Chat = () => {
  
  return (<>
    <MainBody data={<ChatSection/>} open={false}/>
  </>)
}

export default Chat

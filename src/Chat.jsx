import React, { useState } from 'react';
import MainBody from './components/MainBody';
import MessagesSec from './components/MessagesSec';
import Chatbox from './components/Chatbox';
import Title from './components/Title';
import Cookies from 'js-cookie';

const ChatSection = ({currentserver})=>{
    const userId = Cookies.get('userId');
    return(
        <>
        <Title title={currentserver.name}/>
        <MessagesSec userId={userId} serverId={currentserver._id}/>
        <Chatbox userId={userId} serverId={currentserver._id}/>
        </>
    )
}

const Chat = () => {
  const [currentserver, setcurrentserver] = useState({})
  return (<>
    <MainBody data={<ChatSection currentserver={currentserver}/>} currentserver={currentserver} setcurrentserver = {setcurrentserver} open={false}/>
  </>)
}

export default Chat

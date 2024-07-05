import React from 'react';
import MainBody from './components/MainBody';
import MessagesSec from './components/MessagesSec';
import Chatbox from './components/Chatbox';
import Title from './components/Title';


const ChatSection = ()=>{
    return(
        <>
        <Title title={'GroupChat-1'}/>
        <MessagesSec/>
        <Chatbox/>
        </>
    )
}

const Chat = () => {
  return (
    <MainBody data={<ChatSection/>} open={false}/>
  )
}

export default Chat

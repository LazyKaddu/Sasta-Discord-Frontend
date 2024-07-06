import React from 'react';
import MainBody from './components/MainBody';
import AboutSection from './components/AboutSection';

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
    <MainBody data={<AboutSection/>} open={false}/>
  )
}

export default Chat

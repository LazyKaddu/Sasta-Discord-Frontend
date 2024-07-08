import React from 'react';
import MainBody from './components/MainBody';
import AboutSection from './components/AboutSection';


const Chat = () => {
  return (
    <MainBody data={<AboutSection/>} open={true}/>
  )
}

export default Chat

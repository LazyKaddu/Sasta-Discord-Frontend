import React from 'react';
import MainBody from './components/MainBody';
import AboutSection from './components/AboutSection';


const About = () => {
  return (
    <MainBody data={<AboutSection/>} open={true}/>
  )
}

export default About

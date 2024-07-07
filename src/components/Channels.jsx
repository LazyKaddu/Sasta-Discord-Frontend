import React from 'react'
import Cookies from 'js-cookie'

const Channels = ({channelName, chanelLogo, channelId}) => {
  
  const setChannel =()=>{
    Cookies.remove('currentChannel')
    Cookies.set('currentChannel',channelId)
  }

  return (
    <div onClick={setChannel}>
      <img src={chanelLogo} alt="" srcset="" />
      <p>{channelName}</p>
    </div>
  )
}

export default Channels

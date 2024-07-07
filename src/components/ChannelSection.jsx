import React, { useState } from 'react';
import axios from 'axios';
import Channels from './Channels';
import Cookies from 'js-cookie';

const ChannelSection = () => {
  const userId = Cookies.get('userId');
  const [Chats, setChats] = useState([]);
  const [Error, setError] = useState(null);
  axios.get("./api/channels",{
    parms:{
      userId:userId,
    }
  }).then((response)=>{
    //setChats(response.data)
  }
  ).catch((error)=>{
    setError(error);
  }
)

  return (
    <div className='h-[98%] overflow-auto rounded p-4 w-[10vw] bg-slate-50'>
      {Chats.map((items,index)=>{
        return(<Channels chanelLogo={items.chanelLogo} channelId={items.channelId} channelName={items.channelName}/>)
      })}
      {Error&&<p className='text-red-700'>{Error}</p>}
    </div>
  )
}

export default ChannelSection;
import {React, useState} from 'react'
import Message from './Message'
import axios from 'axios'

const MessagesSec = ({MessageId, Userid}) => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  axios.get('./api/messages',{
    params:{
      messageid:MessageId,
      username:Userid,

    }
  }).then((response)=>{
    setData(response.data);
  }).catch((error)=>{
    setError(error);
  })
  return (
    <div>
      {Data.map(({sender,message,time})=>{
        <Message sender={sender} message={message} time={time}/>
      })}
      <p>{Error}</p>
    </div>
  )
}

export default MessagesSec

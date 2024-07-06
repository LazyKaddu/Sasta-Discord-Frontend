import React from 'react'
import Message from './Message'
import axios from 'axios'

const MessagesSec = ({MessageId, Username, Password}) => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  axios.get('./api/messages',{
    params:{
      id:MessageId,
      username:Username,
      password:Password,
    }
  }).then((response)=>{
    setData(response.data);
  }).catch((error)=>{
    setError(error);
  })
  return (
    <div>
      <Message/>
      <p>{Error}</p>
    </div>
  )
}

export default MessagesSec

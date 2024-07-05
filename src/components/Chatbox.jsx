import React, { useState } from 'react'

const Chatbox = () => {
    const [message, setmessage] = useState('');
    const changeData = (e)=>{
        setmessage(e.target.value);
    };
    const submit = async (e)=>{
        e.preventDefault();
    }
  return (
    <input type="text" name="chatbox" id="chatbox" value={message} placeholder='start a convo...' onChange={changeData} onSubmit={submit} className='w-[98%] h-[6.5%] rounded m-4 p-4 text-[1vw] border-2 border-blue-400'/>
  )
}

export default Chatbox

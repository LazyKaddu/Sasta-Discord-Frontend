import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServerItem from './serverItem';
import Cookies from 'js-cookie';




const JoinServer = () => {
  const [Search, setSearch] = useState("");
  const [Result, setResult] = useState([]);
  const [Servers, setServers] = useState({});
  const [Error, setError] = useState("")
  console.log(Servers);
  const userid = Cookies.get('userId');
  const ChangeData = (e) => {
    setSearch(e.target.value)
    if(Servers.length>0) {
      const inp = Search.toLowerCase();

      setResult(Servers.filter((item) => item.name.toLowerCase().startsWith(inp)))
      console.log(Result)
    } else {
      console.log('ayo what the fuck it is not an array ')
    }
  }


  useEffect(() => {
    axios
      .get("http://localhost:4000/api/server/all")
      .then((response) => {
        console.log(response.data.allServers);
        setServers(response.data.allServers);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);


return (
  <div className='bg-white w-[30vw] h-[100%] p-4 rounded'>
    <div className='text-pretty font-mono font-thin flex justify-evenly items-center'>
      <h1 className='text-xl'>server</h1>
      <input type="text" value={Search} className='outline-none border-2 rounded h-[2.5vw] p-2 border-green-600 w-[20vw]' placeholder='search here' onChange={ChangeData} />
    </div>
    <hr className='mt-2' />
    <div className='overflow-y-scroll h-[30vh] mt-1 rounded serversScrollbar'>
      {Result.map((item) => (
        <ServerItem server={item} userId={userid} />
      ))}</div>
  </div>
)
}

export default JoinServer

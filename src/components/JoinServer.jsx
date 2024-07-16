import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ServerItem from './ServerItem';




const JoinServer = () => {
  const [Search, setSearch] = useState("");
  const [Result, setResult] = useState([]);
  const [Servers, setServers] = useState(Cookies.get('allserver'));

  const ChangeData = (e) => {
    setSearch(e.target.value)
  }

  // useEffect(() => {
  //   try {
  //     setResult(() => {
  //       const inp = Search.toLowerCase();
  //       return Servers.filter((item) =>
  //         item.toLowerCase().startsWith(inp));
  //     }
  //     )
  //   } catch {
  //     console.log('error')
  //   };
  //   return () => {
  //     setResult([])
  //   }
  // }, [Search, Servers]);


  return (
    <div className='bg-white w-[30vw] h-[100%] p-4 rounded'>
      <div className='text-pretty font-mono font-thin flex justify-evenly items-center'>
        <h1 className='text-xl'>server</h1>
        <input type="text" value={Search} className='outline-none border-2 rounded h-[2.5vw] p-2 border-green-600 w-[20vw]' placeholder='search here' onChange={ChangeData} />
      </div>
      <hr className='mt-2'/>
      <div className='overflow-y-scroll h-[80%] mt-1 rounded '>
      {Result.map((item) => {
        <ServerItem/>
      })}</div>
    </div>
  )
}

export default JoinServer

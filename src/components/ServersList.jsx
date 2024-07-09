import React from 'react';
import {HiOutlineServer, HiOutlinePlus} from "react-icons/hi";

function ServersList({ server, idx }) {
  return (
    <div key={idx} className='flex gap-2 items-center bg-slate-700 h-fit w-full py-2 px-2 text-white '>
        <div className='h-full text-lg text-center px-2 py-1 flex items-center'><HiOutlineServer /></div>
        <div> 
          <div className='leading-5 font-semibold text-lg tracking-wide line-clamp-1'>{server.name}</div>
          <div className='leading-5 text-sm opacity-85'>members- {server.members.length}/{server.maxMembers}</div>
        </div>
        <div className='h-full'>
            <button className='h-full text-lg px-2 py-1'><HiOutlinePlus/></button>
        </div>
    </div>
  )
}

export default ServersList
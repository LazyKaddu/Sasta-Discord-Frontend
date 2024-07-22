import React, { useState } from "react";
import { HiOutlineServer, HiOutlinePlus } from "react-icons/hi";
import Cookies from 'js-cookie';
import io from '../socket';
const socket = io;

function ServersList({ server, idx, setcurrentserver, currentserver }) {
  const userId = Cookies.get('userId');

  const setServer = ()=>{
    Cookies.set("currentServerName", server.name);
    Cookies.set("currentServerId",server._id);
    socket.emit('leave group',{userId:userId,serverId:currentserver});
    setcurrentserver(server)
  }

  return (
    <div onClick={setServer}
      key={idx}
      className={((Cookies.get("currentServerId")!=server._id)?"bg-slate-800 hover:bg-slate-700 ":"bg-green-600 hover:bg-green-500 ") +"flex gap-2 rounded-sm justify-center items-center h-fit w-full py-2 px-2 text-white cursor-pointer"}>
      <div className="h-full text-lg text-center px-2 flex items-center">
        <HiOutlineServer />
      </div>
      <div className="w-[50%] grow">
        <div className=" leading-7 font-semibold text-sm overflow-x-hidden tracking-wide ">
          <p className=" truncate">{server.name}</p>
        </div>
        <div className=" text-xs opacity-85">
          members: {server.members.length}/{server.maxMembers}
        </div>
      </div>
      <div className="h-full">
        <button className="h-full text-lg px-2">
          <HiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default ServersList;

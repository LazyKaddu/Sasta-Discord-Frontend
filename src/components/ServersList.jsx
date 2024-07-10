import React from "react";
import { HiOutlineServer, HiOutlinePlus } from "react-icons/hi";

function ServersList({ server, idx }) {
  return (
    <div
      key={idx}
      className="flex gap-2 rounded-sm justify-center items-center
      bg-slate-800 hover:bg-slate-700 h-fit w-full py-2 px-2 text-white "
    >
      <div className="h-full text-lg text-center px-2 flex items-center">
        <HiOutlineServer />
      </div>
      <div className="w-[50%] grow">
        <div className=" leading-7 font-semibold text-lg tracking-wide ">
          <p className=" truncate">{server.name}</p>
        </div>
        <div className=" text-sm opacity-85">
          members: {server.members.length}/{server.maxMembers}
        </div>
      </div>
      <div className="h-full">
        <button className="h-full text-xl px-2">
          <HiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default ServersList;

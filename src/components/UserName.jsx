import React from "react";
import { HiOutlineUser } from "react-icons/hi";

const UserName = ({ image, username }) => {
  return (
    <div className="flex justify-center gap-2 items-center bg-white w-[16vw] py-4 mt-3 rounded-lg">
      {/* <img
        src={image}
        className="rounded-[100%] w-[20%] h-[75%] drop-shadow-sm bg-[#cdc3fc]"
      /> */}
      <span className="rounded-full text-center p-2 text-2xl drop-shadow-sm bg-[#e1daf7]"><HiOutlineUser/></span>
      <p className="font-sans w-[50%] text-2xl text-center overflow-hidden scroll-auto">
        {username}
      </p>
    </div>
  );
};

export default UserName;

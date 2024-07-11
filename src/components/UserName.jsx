import React from "react";
import { HiOutlineUser, HiOutlineMenu } from "react-icons/hi";

const UserName = ({ image, userName, styles, createServer, setCreateServer }) => {
  return (
    <div
      className="flex justify-evenly gap-2 text-2xl items-center bg-white w-[100%] py-4 mt-3 rounded-lg"
      style={styles}
    >
      {/* <img
        src={image}
        className="rounded-[100%] w-[20%] h-[75%] drop-shadow-sm bg-[#cdc3fc]"
      /> */}
      <span className="rounded-full text-center p-2 drop-shadow-sm bg-[#e1daf7]">
        <HiOutlineUser />
      </span>
      {!styles && <p className="font-sans w-[50%] text-center overflow-hidden scroll-auto">
        {userName}
      </p>}
    </div >
  );
};

export default UserName;

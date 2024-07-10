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
      
      {!styles && (
        <>
        <span className="rounded-full text-center p-2 drop-shadow-sm bg-[#e1daf7]">
        <HiOutlineUser />
      </span>
        <p className="font-sans w-[50%] text-center overflow-hidden scroll-auto">
          {userName}
        </p>
        
      </>
      )}
      {styles &&
      <details className="relative text-xl bg-[#e1daf7] hover:bg-[#c1c4de] open:bg-[#c1c4de] p-2 rounded-md">
        <summary className="size-full">
          <HiOutlineMenu />
        </summary>
        <div
          className="bg-[#c1c4de] w-[10vw] h-fit flex flex-col gap-1 py-1 px-2 border-2 
        absolute left-[200%] top-[-45%] text-md rounded-lg divide-y-2 divide-blue-600"
        >
          <button
            onClick={() => setCreateServer(!createServer)}
            className="text-sm tracking-wide leading-6 text-center"
          >
            Create Server
          </button>
          <button className="text-sm tracking-wide leading-6 text-center pt-1">
            Setting
          </button>
        </div>
      </details>
      }
    </div>
  );
};

export default UserName;

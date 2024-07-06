import React from "react";
import UserName from "./UserName";
import Nav from "./Nav";

const MainBody = ({ data ,userName}) => {
  return (
    <>
      {/* header */}
      <div className="w-[100vw] h-[9vh] bg-[#9b88fc] flex justify-between"></div>
      {/* main */}
      <div className="h-[84vh] flex">
        {/* sidebar */}
        <div className="flex flex-col w-[22vw] justify-evenly items-center min-h-fit bg-[#cdc3fc]">
          <UserName username={userName} />
          <Nav />
        </div>
        {/* chatbox */}
        <div className="flex flex-col w-[78vw] bg-[#343A50] overflow-hidden">
          {data}
        </div>
      </div>
      {/* footer */}
      <div className="w-[100vw] h-[7vh] bg-[#242332]"></div>
    </>
  );
};

export default MainBody;

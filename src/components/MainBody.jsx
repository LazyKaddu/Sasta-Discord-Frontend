import React from "react";
import UserName from "./UserName";
import Nav from "./Nav";

const MainBody = ({ data ,userName}) => {
  return (
    <div className="w-full h-screen bg-[#5865F2]">
      {/* header */}
      <div className="w-[100vw] h-[9vh] flex justify-start">
        <div className="h-full w-[20vw] ">
          <a href="/home">
          <img className="w-full h-full" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg" /></a>
        </div>
      </div>
      {/* main */}
      <div className="h-[84vh] flex">
        {/* sidebar */}
        <div className="flex flex-col w-[22vw] rounded-r-lg justify-evenly items-center min-h-fit bg-[#afb3e0]">
          <UserName username={"Aashish"} />
          <Nav />
        </div>
        {/* chatbox */}
        <div className="flex flex-col w-[78vw] bg-[#afb3e0] rounded-l-lg overflow-hidden border-l-8 border-[#5865F2]">
          {data}
        </div>
      </div>
      {/* footer */}
      <div className="w-[100vw] h-[7vh] bg-[#5865F2]">
        Sasta footer
      </div>
    </div>
  );
};

export default MainBody;

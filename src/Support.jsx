import React from "react";
import MainBody from "./components/MainBody";
import EatingMonster from "./assets/eatingMonster.png";
import RedMonster from "./assets/redmonster.png";

const SupportSec = () => {
  return (
    <div className="bg-[#5865F2] h-full w-full flex">
      <div className="w-[30%]">
        <img
          className="relative left-[18vw] top-[5vw] rotate-[-45deg] w-[10vw] h-[auto] z-[1]"
          src={EatingMonster}
        />
        <img
          className="relative fill-transparent"
          src={RedMonster}
        />
      </div>
      <div className="w-[70%] h-[90%] flex flex-col justify-center z-[2] text-[#5865F2]">
        <div className="text-6xl text-white mb-14 font-serif ">Support</div>
        <div className="h-[80%] bg-white rounded-l-xl px-3 py-2">
          <div className="flex w-full h-[57%]">
            <div className="h-full w-[70%]">
              <h1 className="text-[#5865F2] text-6xl font-mono m-4">
                Enjoyed Using Mehenga Discord?
              </h1>
              <p className="text-[#5865F2] text-xl m-4 opacity-90 font">
                you can Support us by following us on linkedin or instagram!
              </p>
            </div>
            <div className="w-[30%] h-">
              <img className="w-full h-full" src="https://imgs.search.brave.com/mxZvYUwkFttDet6g2AgQMC1Amg-3fhYQkYygsm3DpRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y2FydG9vbi1wZW9w/bGUtbG9va2luZy11/cF8yMy0yMTQ4OTc1/MTg2LmpwZw" alt="" />
            </div>
          </div>
          <div className="flex gap-2 justify-start w-full h-[37%] px-5">
            <div className="flex justify-around w-[35%] mt-2">
              <img
                className="h-[75%] rounded-[23%] Shadow-[#d946ef] transition ease-in-out object-cover"
                src="https://imgs.search.brave.com/gPZT1daGnqAjIB8yW5fG0cUuGqNhb3ZbYQqVY8Gy6S8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzIy/MHB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw"
              />
              <img
                className="h-[75%] rounded-[23%] object-cover shadow-2xl shadow-blue-400 hover:shadow-blue-500 transition ease-in-out"
                src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
              />
            </div>
            <div className="w-[45%] flex flex-col text-center">
              <div className="font-mono w-full text-center text-2xl font-black my-1 tracking-wide shadow-md">
                Developed by-
              </div>
              <div className="w-full h-full flex justify-center gap-8 px-5 py-2">
                <div className="w-full h-full ">
                  <div className="text-xl font-semibold tracking-wide mb-1 shadow-lg ">
                    Nikhil Bhatt
                  </div>
                  <div className="opacity-95">
                    <a href="https://www.instagram.com/nikhill.py/">
                      Instagram
                    </a>
                  </div>
                  <div className="opacity-95">
                    <a href="https://www.linkedin.com/in/nikhilbhatt69/">
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="w-full h-full ">
                  <div className="text-xl font-semibold tracking-wide mb-1 shadow-lg">
                    Aashish Negi
                  </div>
                  <div className=" opacity-95">
                    <a href="https://www.instagram.com/nikhill.py/">
                      Instagram
                    </a>
                  </div>
                  <div className=" opacity-95">
                    <a href="https://www.linkedin.com/in/nikhilbhatt69/">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Support = () => {
  return <MainBody data={<SupportSec />} open={true} />;
};

export default Support;

import React from "react";

function AboutSection() {
  return (
    <>
      <div className="h-full w-full flex bg-[#5865F2]">
        <div className="h-full w-[50%] px-6">
          <div className="flex flex-col gap-2 justify-center w-full h-full text-white">
            <h3 className="text-6xl text-wrap font-serif font-semibold">
              CREATE SPACE FOR EVERYONE TO FIND BELONGING
            </h3>
            <h3 className="text-[1.1rem]">
              It's where your world hangs out. Discord is a voice, video and
              text communication service used by over a hundred million people
              to hang out and talk with their friends and communities.
            </h3>
          </div>
        </div>
        <div className="h-full w-[60%]">
          <img
            className="size-[100%]"
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/62a342dbc52104327ccc2ee5_hero.svg"
          />
        </div>
      </div>
    </>
  );
}

export default AboutSection;

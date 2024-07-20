import React, { useState, useEffect } from "react";
import MainBody from "./components/MainBody";
import CreateServerForm from "./components/CreateServer";
import JoinServer from "./components/JoinServer";
import Message from "./components/Message";
// import TD from './components/TD';
import TD from './components/TD';
import Discord from './assets/Discord.glb';

const Hero = ({ createServer, server, joinServer, join }) => {
  if (createServer) {
    return <CreateServerForm server={server}/>;
  } else if (joinServer) {
    return <JoinServer join={join}/>;
  } else {
    return <TD url={Discord} scale={1.8} rotate={[0, Math.PI/2, 0]} movable={true} color="white"/>;
  }
};

const HomeElem = () => {
  const [createServer, setcreateServer] = useState(false);
  const [joinServer, setjoinServer] = useState(false);

  const server = () => {
    setcreateServer(!createServer);
    if (joinServer) {
      setjoinServer(!joinServer);
    }
  };

  const join = () => {
    setjoinServer(!joinServer);
    if (createServer) {
      setcreateServer(!createServer);
    }
  };

  return (
    <>
      <header className="flex flex-col justify-center gap-4 items-start bg-[#5865F2] min-h-[83vh] w-full z-0">
        {/* <TD/> */}
        <div className="w-full flex justify-evenly items-center">
          <div className="h-[90%] flex flex-col justify-center gap-6">
            <div className="flex flex-col Hero items-start justify-center gap-5 text-white w-[40vw] ml-10">
              <h1 className="text-6xl font-bold font-serif">
                Welcome to Mehenge Discord
              </h1>
              <h3 className="text-2xl font-mono font-thin">
                A place where you connect with peoples of same intrest
              </h3>
            </div>

            <div className="flex gap-4 ml-10 text-white items-center">
              <button
                className="bg-white text-indigo-600 border-white
                hover:bg-indigo-500 hover:text-white border-2 p-2 rounded transition-all font-semibold"
                onClick={server}
              >
                Create Server
              </button>
              <button
                className="bg-white text-indigo-600 border-white
                hover:bg-indigo-500 hover:text-white border-2 p-2 rounded transition-all font-semibold"
                onClick={join}
              >
                Join Server
              </button>
            </div>
          </div>
          <Hero createServer={createServer} server={server} joinServer={joinServer} join={join} />
        </div>
      </header>
      <main>
        <div className="w-full bg-[#5865F2] h-[100vh]"></div>
        <div className="w-full bg-[#5865F2] h-[100vh]"></div>
      </main>
    </>
  );
};

const Home = () => {
  return <MainBody data={<HomeElem />} open={true} />;
};

export default Home;

import React, { useState, useEffect } from "react";
import MainBody from "./components/MainBody";
import CreateServerForm from "./components/CreateServer";
import JoinServer from "./components/JoinServer";
// import TD from './components/TD';
// import Discord from './assets/Discord.glb';

const Hero = ({ createServer, server, joinServer, join }) => {
  if (createServer) {
    return <CreateServerForm server={server}/>;
  } else if (joinServer) {
    return <JoinServer join={join}/>;
  } else {
    // return <TD url={Discord} scale={3} rotate={[0,0,Math.PI/2]} movable={true}/>;
    return <div className="w-full">hello bro this is the 3d object</div>;
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
      <header className="flex flex-col justify-center gap-4 items-start bg-[#5865F2] min-h-[83vh] w-full">
        {/* <TD/> */}
        <div className="w-full flex justify-evenly items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col Hero items-start justify-center gap-4 text-white w-[40vw] ml-10">
              <h1 className="text-6xl font-bold font-serif">
                Welcome to Mehenge Discord
              </h1>
              <p className="text-2xl font-mono font-thin">
                A place where you connect with peoples of same intrest
              </p>
            </div>

            <div className="flex gap-4 ml-10 text-white justify-start items-center">
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

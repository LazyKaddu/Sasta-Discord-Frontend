import React, { useState, useEffect } from "react";
import MainBody from "./components/MainBody";
import CreateServerForm from "./components/CreateServer";
import JoinServer from "./components/JoinServer";
// import TD from './components/TD'

const Hero = ({ createServer, joinServer }) => {
  if (createServer) {
    return <CreateServerForm />;
  } else if (joinServer) {
    return <JoinServer />;
  } else {
    return <p>hello</p>;
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
        <div className="flex justify-evenly items-center">
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
                className="bg-transparent border-green-500 border-2 hover:bg-green-500 p-2 rounded transition-all"
                onClick={server}
              >
                Create Server
              </button>
              <button
                className="bg-transparent rounded border-green-500 border-2 transition-all hover:bg-green-500 p-2"
                onClick={join}
              >
                Join Server
              </button>
            </div>
          </div>
          <Hero createServer={createServer} joinServer={joinServer} />
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

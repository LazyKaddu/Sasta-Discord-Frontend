import React, { useState, useEffect } from "react";
import UserName from "./UserName";
import Nav from "./Nav";
import ServerSection from "./ServerSection";
import CreateServerForm from "./CreateServer";
import Cookies from "js-cookie";
import axios from "axios";

const MainBody = ({ data, open }) => {
  const styles = {
    width: "35%",
  };
  const userName = Cookies.get("userName");
  const [error, setError] = useState(null);
  const [allServers, setAllServers] = useState([]);
  const [createServer, setCreateServer] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/server/all")
      .then((response) => {
        console.log("response from /server/all- ", response.data);
        setAllServers(response.data.allServers);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  console.log("allservers in Mainbody.jsx-", allServers);

  return (
    <div className="w-full h-screen bg-[#5865F2]">
      {createServer && (
        <CreateServerForm
          createServer={createServer}
          setCreateServer={setCreateServer}
          allServers={allServers}
          setAllServers={setAllServers}
        />
      )}
      {/* header */}
      <div className="w-[100vw] h-[9vh] flex justify-start">
        <div className="h-full w-[20vw] ">
          <a href="/home">
            <img
              className="w-full h-[110%]"
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
            />
          </a>
        </div>
      </div>
      {/* main */}
      <div className="h-[84vh] flex">
        <div className="flex flex-col w-[22vw] rounded-r-lg justify-evenly items-center min-h-fit bg-[#afb3e0]">
          <div className={(
            allServers.length===0 && "w-[75%] "
            ) + "flex flex-col items-center justify-between gap-2"}>
            <div className="w-full h-fit flex justify-center">
              {/* USER'S PROFILE */}
              {open?<UserName
                userName={userName}
                createServer={createServer}
                setCreateServer={setCreateServer}
              />:
              <UserName
                userName={userName}
                createServer={createServer}
                setCreateServer={setCreateServer}
                styles={styles}
              />}
              
            </div>
            <div className="flex justify-center gap-3 w-full py-1">
              {/* SIDEBAR */}
              <div className={allServers.length === 0 ? "w-full" : "min-w-fit"}>
                {allServers.length === 0 ? <Nav styles={undefined} /> : <Nav styles={styles} />}
              </div>
              <div
                className={
                  allServers.length === 0 && open
                    ? "hidden"
                    : " p-1 rounded bg-slate-300 w-full"
                }
              >
                {/* CHANNEL SECTION */}
                {allServers.length > 0 && (
                  <ServerSection allServers={allServers} />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col w-[78vw] bg-[#afb3e0] rounded-l-lg overflow-y-scroll border-l-8 border-[#5865F2]">
          {data}
        </div>
      </div>
      {/* footer */}
      <div className="w-[100vw] h-[7vh] bg-[#5865F2] flex justify-center items-center">
        <p>sasta footer</p>
      </div>
    </div>
  );
};

export default MainBody;

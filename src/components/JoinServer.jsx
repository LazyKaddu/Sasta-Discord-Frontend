import React, { useEffect, useState } from "react";
import axios from "axios";
import ServerItem from "./serverItem";
import Cookies from "js-cookie";
import { HiOutlineX } from "react-icons/hi";

const JoinServer = ({ join }) => {
  const [Search, setSearch] = useState("");
  const [Result, setResult] = useState([]);
  const [Servers, setServers] = useState([]);
  const [Error, setError] = useState("");
  console.log(Servers);
  const userid = Cookies.get("userId");

  const ChangeData = (e) => {
    let new_search = e.target.value;
    setSearch(new_search.toLowerCase());
    if (Servers.length > 0) {
      const inp = new_search.toLowerCase();
      setResult(
        Servers.filter((item) => item.name.toLowerCase().includes(inp))
      );
      console.log(Result);
    } else {
      console.log("ayo what the fuck it is not an array ");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/server/all")
      .then((response) => {
        setServers(response.data.allServers);
        setResult(response.data.allServers);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div
        className="bg-slate-300 border-2 border-slate-400
        w-[25vw] h-full py-2 px-4 rounded-md shadow-lg hover:shadow-zinc-800 transition-all"
      >
        <div className="flex justify-between py-2 mb-1 text-center text-2xl opacity-90 h-[15%]">
          <h3 className="grow font-medium uppercase tracking-wider text-center">
            search Servers
          </h3>
          <button className="h-[90%] mr-2 flex items-center border-2 border-zinc-500 hover:border-zinc-600 rounded p-1 opacity-90">
            <div onClick={join} className="opacity-100">
              <HiOutlineX />
            </div>
          </button>
        </div>
        <div className="-mt-1">
          <input
            type="text"
            value={Search}
            className="outline-none border-2 rounded h-full p-2 border-zinc-600 w-full"
            placeholder="Look for servers here..."
            onChange={ChangeData}
          />
        </div>
        <hr className="mt-1" />
        <div className="overflow-y-scroll h-[30vh] mt-1 rounded serversScrollbar">
          {Result.map((item, idx) => (
            <ServerItem server={item} userId={userid} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinServer;

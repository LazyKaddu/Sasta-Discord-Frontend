import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function CreateServerForm({
  createServer,
  setCreateServer,
  allServers,
  setAllServers,
}) {
  const [serverName, setServerName] = useState("");
  const [serverMembers, setServerMembers] = useState("");
  const userId = Cookies.get('userId');

  const handleCreateServer = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/server/create", {
        name: serverName,
        maxMembers: serverMembers,
        userId
      })
      .then((response) => {
        console.log("response from /server/create- ", response.data);
        console.log("all servers- ", allServers);
        setAllServers([...allServers, response.data.server]);
        setCreateServer(!createServer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="size-fit z-[3] absolute top-[45vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form
          onSubmit={handleCreateServer}
          method="post"
          className="size-full flex flex-col items-center justify-center gap-5
          bg-slate-900 MorphismShadow rounded-2xl text-white px-6 py-4"
        >
          <h1 className="text-3xl font-semibold tracking-wide py-1 opacity-90">
            Create new server
          </h1>
          <div className="flex flex-col gap-1 items-stretch w-full">
            <label className="font-semibold text-sm tracking-wider opacity-95 text-zinc-400 uppercase">
              SERVER NAME{" "}
              {!serverName && <span className="text-red-500 text-md">*</span>}
            </label>
            <input
              onChange={(e) => setServerName(e.target.value)}
              className="text-lg px-3 py-1 rounded text-white bg-[#1f1e1e] outline-none tracking-wide"
              type="text" required
            />
          </div>
          <div className="flex flex-col gap-1 items-stretch w-full">
            <label className="font-semibold text-sm tracking-wider opacity-95 text-zinc-400 uppercase">
              MEMBERS LIMIT{" "}
              {!serverMembers && (
                <span className="text-red-500 text-md">*</span>
              )}
            </label>
            <input
              onChange={(e) => setServerMembers(e.target.value)}
              className="text-lg px-3 py-1 rounded text-white bg-[#1f1e1e] outline-none tracking-wide"
              type="number" required
              min={2} max={10}
            />
          </div>
          <div className="w-full flex justify-around gap-">
            <div
              className="w-[45%] px-3 py-2 bg-red-500 hover:bg-red-600
           text-white rounded font-semibold tracking-wide text-center cursor-pointer"
              onClick={() => setCreateServer(!createServer)}
            >
              Close
            </div>
            <button
              className="w-[45%] px-3 py-2 bg-indigo-500 hover:bg-indigo-600
           text-white rounded font-semibold tracking-wide"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateServerForm;

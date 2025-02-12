import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateServerForm({ allServers, setAllServers, server }) {
  const [serverName, setServerName] = useState("");
  const [serverMembers, setServerMembers] = useState(2);

  const notifySuccess = () => toast.success("server created successfully!");
  const notifyError = () => toast.error("sorry error occured!");

  const setThings = (response) => {
    setServerName("");
    setServerMembers(2);
    setAllServers([...allServers, response.data.server]);
    console.log("response from /server/create- ", response.data);
    console.log("all servers- ", allServers);
  };

  const handleCreateServer = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/server/create", {
        name: serverName,
        maxMembers: serverMembers,
      })
      .then((response) => {
        if (response.data.success) {
          notifySuccess();
          setThings(response);
        } else {
          notifyError();
        }
      })
      .catch((err) => {
        notifyError();
        console.log(err);
      });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[25vw] h-full ">
        <form
          onSubmit={handleCreateServer}
          method="post"
          className="size-full flex flex-col items-center justify-center gap-5
          bg-slate-300 rounded px-6 pt-4 pb-8"
        >
          <h1 className="text-3xl font-semibold tracking-wide py-1 opacity-90">
            Create new server
          </h1>
          <div className="flex flex-col gap-1 items-stretch w-full">
            <label className="font-semibold text-sm tracking-wider opacity-95 text-green-600 uppercase">
              SERVER NAME{" "}
              {!serverName && <span className="text-red-500 text-md">*</span>}
            </label>
            <input
              onChange={(e) => setServerName(e.target.value)}
              value={serverName}
              className="text-lg px-3 py-1 rounded text-green-500 bg-white border-2 outline-none border-green-300 tracking-wide"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-1 items-stretch w-full">
            <label className="font-semibold text-sm tracking-wider opacity-95 text-green-600 uppercase">
              MEMBERS LIMIT{" "}
              {!serverMembers && (
                <span className="text-red-500 text-md">*</span>
              )}
            </label>
            <input
              onChange={(e) => setServerMembers(e.target.value)}
              value={serverMembers}
              className="text-lg px-3 py-1 rounded text-green-500 bg-white border-2 outline-none border-green-300 tracking-wide"
              type="number"
              required
              min={2}
              max={10}
            />
          </div>
          <div className="w-full flex justify-around gap-">
            <div
              className="w-[45%] px-3 py-2 bg-red-500 hover:bg-red-600 transition-all
           text-white rounded font-semibold tracking-wide text-center cursor-pointer"
              onClick={server}
            >
              Close
            </div>
            <button
              className="w-[45%] px-3 py-2 bg-indigo-500 hover:bg-indigo-600
           text-white rounded font-semibold tracking-wide transition-all"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
        <ToastContainer position="top-right" />
      </div>
    </div>
  );
}

export default CreateServerForm;

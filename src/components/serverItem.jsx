import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServerItem = ({ server }) => {
  const [joined, setjoined] = useState(false);
  const [members, setMembers] = useState(server.members.length);
  const success = (msg) => toast.success(msg);
  const error = (msg) => toast.error(msg);
  const userId = Cookies.get("userId");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/server/get-joined-status", {
        params: {
          serverId: server._id,
        },
      })
      .then((response) => {
        console.log(server.name, " joined is ", response.data.is_joined);
        response.data.is_joined ? setjoined(true) : setjoined(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  const deleteServer = ()=>{
    axios
    .post("http://localhost:4000/api/server/delete",{
      serverId: server._id,
    })
    .then(()=>{
      success('deleted server Successfully!')
    })
    .catch((e)=>{
      console.log('error in leaving group '+ e);
      error("an error occured while deleting")
    })
  };

  const changejoined = () => {
    if (server.owner._id === userId) {
      error("Owner cannot leave the Server!");
      return;
    }

    const joinRequest = () => {
      axios
        .post("http://localhost:4000/api/server/join", {
          serverId: server._id,
        })
        .then((response) => {
          console.log("response from /server/join ", response.data);

          if (response.data.success) {
            success(`Joined the '${server.name}' server!`);
            setMembers(members + 1);
            setjoined(true);
          } else if (response.data.failure) {
            error(`Left the '${server.name}' server`);
            setMembers(members - 1);
            setjoined(false);
          } else {
            error("Error occured! Try Again");
          }
        })
        .catch((e) => {
          console.log(e);
          error("sorry an error occured!");
        });
    };
    if (joined && server.members.length >= server.maxMembers) {
      joinRequest();
      return;
    }
    if (server.members.length >= server.maxMembers) {
      error("This Server is Full!");
      return;
    }
    joinRequest();
  };

  return (
    <div className="bg-slate-200 hover:bg-slate-300 transition-all border-2 border-slate-200 rounded mb-2 last:mb-0 flex justify-start p-2 items-center w-full h-fit ">
      <div className="grow">
        <h3 className="capitalize text-lg tracking-wide font-medium opacity-90">
          {server.name}
        </h3>
        <h3 className="capitailize tracking-wide leading-4">
          owner:{" "}
          <span className="font-normal capitalize">
            {server.owner.username}
          </span>
        </h3>
      </div>
      <div className="w-[20%]">
        {members}/{server.maxMembers}
      </div>
      
      {/* TO DO - Owner can delete his own server here  - done bro*/}
      {server.owner._id === userId
        ?<button onClick={deleteServer} className="text-white bg-red-700 rounded border-0 w-[6vw] h-[2vw]">
          Delete
          </button>
          :<button
          className={
            (server.members.length >= server.maxMembers
              ? !joined
                ? "bg-red-500"
                : "bg-gray-500"
              : joined
              ? "bg-gray-500"
              : "bg-green-500") + " rounded text-white w-[6vw] h-[2vw]"
          }
          onClick={changejoined}
        >
          {server.members.length >= server.maxMembers
            ? !joined
              ? "Full"
              : "joined"
            : !joined
            ? "join"
            : "joined"}
        </button>}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default ServerItem;

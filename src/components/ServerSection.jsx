import React, { useEffect, useState } from "react";
import ServersList from "./ServersList";
import axios from "axios";
import Cookies from "js-cookie";
import { HiOutlineServer, HiOutlinePlus } from "react-icons/hi";

axios.defaults.withCredentials = true;

const ServerSection = () => {

  const userId = Cookies.get("userId");
  const [Error, setError] = useState(null);
  const [allServers, setAllServers] = useState([]);
  const [createServer, setCreateServer] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/server/all")
      .then((response) => {
        console.log("response from /server/all- ", response.data);
        console.log("allservers in Mainbody.jsx-", allServers);
        setAllServers(response.data.allServers);
        Cookies.set("allservers", response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  useEffect(() => {
  
    axios
      .get("./api/channels", {
        withCredentials:true,
        params: {
          userId: userId,
        },
        headers:{
          Authorization:`Bearer ${Cookies.get("token")}`},
      })
      .then((response) => {
        //setChats(response.data)
      })
      .catch((error) => {
        setError(error);
      });

  }, [])
  


  return (
    <div className="h-full flex flex-col items-center gap-1 p">
      {allServers.map((server, idx) => {
        return <ServersList server={server} key={idx} />;
      })}
      {Error && <p className="text-red-700">{Error}</p>}
    </div>
  );
};

export default ServerSection;

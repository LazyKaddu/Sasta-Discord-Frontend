import React, { useEffect, useState } from "react";
import ServersList from "./ServersList";
import axios from "axios";
import Cookies from "js-cookie";
import { HiOutlineServer, HiOutlinePlus } from "react-icons/hi";

axios.defaults.withCredentials = true;

const ServerSection = ({ allServers }) => {
  const userId = Cookies.get("userId");
  const [Error, setError] = useState(null);

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

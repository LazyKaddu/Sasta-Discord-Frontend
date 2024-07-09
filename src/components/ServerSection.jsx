import React, { useState } from "react";
import ServersList from "./ServersList";
import axios from "axios";
import Cookies from "js-cookie";
import {HiOutlineServer, HiOutlinePlus} from "react-icons/hi";

const ServerSection = ({ allServers }) => {
  const userId = Cookies.get("userId");
  const [Error, setError] = useState(null);
  // axios
  //   .get("./api/channels", {
  //     params: {
  //       userId: userId,
  //     },
  //   })
  //   .then((response) => {
  //     //setChats(response.data)
  //   })
  //   .catch((error) => {
  //     setError(error);
  //   });

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

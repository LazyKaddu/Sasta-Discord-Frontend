import React, { useEffect, useState } from "react";
import ServersList from "./ServersList";
import axios from "axios";
import Cookies from "js-cookie";
import { HiOutlineServer, HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

const ServerSection = ({ setcurrentserver, currentserver }) => {

  const userId = Cookies.get("userId");
  const [Error, setError] = useState(null);
  const [allServers, setAllServers] = useState([]);
  const [createServer, setCreateServer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/server/all")
      .then((response) => {
        console.log("response from /server/all- ", response.data);
        if (response.data.allServers) {
          setAllServers(response.data.allServers);
        }
        else{
          navigate('/');
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);


  return (
    <div className="max-h-[51.5vh] w-[75%] flex flex-col items-center gap-1 overflow-y-scroll rounded Scrollbar">
      {allServers.map((server, idx) => {
        return <ServersList server={server} currentserver={currentserver} setcurrentserver={setcurrentserver} key={idx} />;
      })}
      {Error && <p className="text-red-700">{Error}</p>}
    </div>
  );
};

export default ServerSection;

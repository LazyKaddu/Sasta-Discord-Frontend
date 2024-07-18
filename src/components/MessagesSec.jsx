import React, { useEffect, useState } from "react";
import Message from "./Message";
import io from "../socket";

const socket = io;
 
const MessagesSec = ({ userId, serverId }) => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");

  
  useEffect(() => {
    if (serverId!==null) {
      console.log('inside useEffect')
      socket.emit("join group", { userId, serverId });

      socket.on("existing messages", (message) => {
        console.log(message);
        setData(message);
      });
      socket.on("chat message", (msg) => {
        setData([...Data, msg]);
        console.log(Array.isArray(Data));
      });
    } else {
      setError("failed to connect");
    }

    return () => {
      socket.emit("leave group", { userId, serverId });
      socket.off("existing messages");
      socket.off("chat messages");
    };
  }, [serverId, userId]);

  return (
    <div className="h-[70vh] w-[60vw] border-gray-950">
      {Data.map((item, index) => {
        return (
          <Message
            key={index}
            sender={item.sender}
            message={item.content}
            time={item.createdAt}
          />
        );
      })}
      {Error && <p>{Error}</p>}
    </div>
  );
};

export default MessagesSec;

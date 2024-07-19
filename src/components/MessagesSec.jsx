import React, { useEffect, useState } from "react";
import Message from "./Message";
import io from "../socket";

const socket = io;

const MessagesSec = ({ userId, serverId }) => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");


  if (serverId !== null) {
    console.log('inside useEffect')
    socket.emit("join group", { userId, serverId });

    socket.on("existing messages", (message) => {
      console.log(message);
      setData(message);
    });

  } else {
    setError("failed to connect");
  }


  socket.on("chat message", (msg) => {
    setData([...Data, msg]);
    console.log(Data);
  });
  console.log('hello')
  socket.on('leave group', ({ }) => {
    setData([]);
  })


  return (
    <div className="h-[70vh] w-[60vw] overflow-y-scroll border-gray-950">
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

import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import io from "../socket";

const socket = io;

const MessagesSec = ({ userId, serverId }) => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const scrollDiv = useRef(null);
  const [Height, setHeight] = useState(0);
  

  useEffect(() => {
    if (serverId !== null) {
      socket.emit("join group", { userId, serverId });
      socket.on("existing message", (message) => {
        setData(message);

      })

    } else {
      setError("failed to connect");
    }
  }, [serverId, userId])

  if (scrollDiv.current) {
    scrollDiv.current.scrollTop = Height;

  }

  socket.on("chat message", (msg) => {
    setData([...Data, msg]);
    if (scrollDiv.current) {
      scrollDiv.current.scrollTop = Height;
    }
  });
 
  socket.on('leave group', ({ }) => {
    setData([]);
  })


  return (
    <div ref={scrollDiv} className="flex flex-col h-[70vh] w-full overflow-y-scroll p-4 messageScrollbar border-gray-950">
      {Data.map((item, index) => {
        return (
          <Message
            key={index}
            sender={item.sender}
            message={item.content}
            time={item.createdAt}
            scrollDiv={scrollDiv}
            setHeight={setHeight}
          />
        );
      })}
      {Error && <p>{Error}</p>}
    </div>
  );
};

export default MessagesSec;

import React from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./ChatBox";
import Input from "./Input";
import { useState, useEffect } from "react";
import { socket } from "../socket";

const MainBox = () => {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    //Emit a message to the server
    socket.emit("chatMessage", message);
  };

  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("connected");

      socket.on("message", (msg) => {
        setChat((prev) => [...prev, msg])
      });
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);
  return (
    <div className=" grid place-items-center">
      <div className="mt-5">
        <div>
          <h1 className="text-5xl font-bold text-center text-blue-500 mb-5">
            Chat Box
          </h1>
        </div>
        <div className=" bg-violet-600 rounded-lg p-1 m-2">
          <div className=" flex mt-7 space-x-3 w-auto p-2">
            <Sidebar />
            <ChatBox chat={chat} />
          </div>
          <div className="p-1">
            <Input
              message={message}
              setMessage={setMessage}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;

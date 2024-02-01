import React from "react";
import TextMessage from "./TextMessage";

const ChatBox = () => {
  return (
    <div className="bg-white rounded-lg overflow-auto p-1">
      <div className=" flex flex-col h-72 w-96 p-2">
        <TextMessage />
        <TextMessage />
        <TextMessage />
        <TextMessage />
        <TextMessage />
        <TextMessage />
      </div>
    </div>
  );
};

export default ChatBox;

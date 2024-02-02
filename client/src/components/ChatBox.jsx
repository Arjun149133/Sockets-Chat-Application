import React, { useRef, useEffect } from "react";
import TextMessage from "./TextMessage";

const ChatBox = ({ chat }) => {
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat box when chat updates
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [chat]);

  return (
    <div className="bg-white rounded-lg overflow-auto p-1">
      <div
        ref={chatBoxRef}
        className="flex flex-col h-72 w-96 p-2 overflow-y-auto"
      >
        {chat.map((msg, index) => (
          <TextMessage key={index} message={msg} user={"arjun"} />
        ))}
      </div>
    </div>
  );
};

export default ChatBox;

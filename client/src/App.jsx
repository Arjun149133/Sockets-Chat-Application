import { useState, useEffect } from "react";
import MainBox from "./components/MainBox.jsx";
import { socket } from "./socket.js";

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      setIsConnected(true);
      console.log("connected");
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
      console.log("disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <>
      <MainBox />
    </>
  );
};

export default App;

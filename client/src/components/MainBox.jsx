import React from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./ChatBox";
import Input from "./Input";

const MainBox = () => {
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
            <ChatBox />
          </div>
          <div className="p-1">
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;

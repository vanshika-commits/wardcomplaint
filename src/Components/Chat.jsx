import React from "react";
import chat from "../assets/complain/cha.png";
import leave from "../assets/complain/leav.png";

const Chat = () => {
  return (
    <div className="h-[580px] flex mt-[100px] bg-white w-full">
      <div>
        <img className=" ml-[50px] h-[380px]" src={chat} alt="chat" />
      </div>
      <div>
        <img className=" ml-[350px] h-[380px]" src={leave} alt="chat" />
      </div>
    </div>
  );
};

export default Chat;
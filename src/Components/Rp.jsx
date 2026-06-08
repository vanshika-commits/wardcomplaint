import React from "react";
import room from "../assets/complain/room.jpg";
import m1 from "../assets/complain/m1.png";
import m2 from "../assets/complain/m2.png";
import m3 from "../assets/complain/m3.png";

const Rp = () => {
  return (
   <div className="  flex justify-between  bg-pink-200 mt-2 h-[500px]">
    <div className="   ml-2 mt-[70px] h-[300px]  w-[200px]   bg-white-100"><img className="w-[200px]" src={m1}/></div>
    <div className="  mt-[70px] h-[300px]  w-[200px]     bg-white-100"><img className="w-[200px]" src={m2}/></div>
    <div className=" mt-[70px] h-[300px]  w-[200px]   bg-white-100"><img className="w-[200px]" src={m3}/></div>
    <div className=" mt-[70px] h-[300px]  w-[200px]   bg-white-100"><img className="w-[200px]" src={m1}/></div>
    <div className=" mr-2 mt-[70px] h-[300px]  w-[200px]   bg-white-100"><img className="w-[200px]" src={m1}/></div>
   </div>
  );
};

export default Rp;
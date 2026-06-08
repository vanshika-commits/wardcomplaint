import React from "react";
import logo1 from "../assets/download.png";
import logo from "../assets/download.jpg";
import insta from "../assets/insta1.png";
import you from "../assets/you-tube.png";
import twit from "../assets/Twitter-Logо_png.png";
import fb from "../assets/fb.png";
import swach from "../assets/Government_of_India_logo.svg";
import india from "../assets/1550659425swachh-bharat-abhiyan-logo-vector-file.jpg"
import satya from "../assets/div2.jpg";
const Navigation = () => {
  return (
    <>
    {/* first dib */}
    
     <div className="text-white flex  justify-between  px-4 bg-gray-300 h-[40px] w-full">
        <div className="text-black flex gap-4 mt-2 ml-3">
       <h2 className="border-2 border-transparent active:border-blue-500 active:rounded-lg active:border-2" >भारत सरकार</h2>
       <h2>Goverment Of India</h2>
        </div>
        <div className="flex flex-row items-center gap-1  flex-nowrap">
          <h2 className="text-black ">Skip To Main Content</h2>
          <img className="h-7 hover:box-border border-4" src={insta} alt="insta" />
          <img className="h-7" src={you} alt="youtube" />
          <img className="h-7" src={twit} alt="twitter" />
          <img className="h-7" src={fb} alt="facebook" />
         
        </div>
        <div >
          <img  className="h-9"src={logo}/>
        </div>
      </div>
      {/* 2nd div */}
      <div className="ml-30 flex ">
        <div className="flex gap-[120px] bg-white h-[90px] w-full">
          <img  className="h-20 w-40" src={swach} alt="swach"/>
          </div> 
          <img  className="h-20 w-40" src={india} alt="india"/>
         <div >
           <img className="h-20 w-40" src={satya} alt="facebook" />
        </div>
      </div>
      {/* thired div */}
      <div className="flex items-center h-[50px] gap-5 bg-green-800 pl-5 text-black px-4">
      <div className="flex items-center h-[50px] gap-5 bg-green-800 pl-5 text-black px-4">
          <h1 className="border border-white px-3 py-1 rounded-md"> Home </h1>
          <h1 className="border border-white px-3 py-1 hover:bg-green-800 rounded-md">About</h1>
          <h1 className="border border-white px-3 py-1 hover:bg-green-800 rounded-md">Documents</h1>
          <h1 className="border border-white px-3 py-1  hover:bg-green-800 rounded-md">Media Corner</h1>
          <h1 className="border border-white px-3 py-1 hover:bg-green-800 rounded-md">Citizen Corner</h1>
          <h1 className="border border-white px-3 py-1 hover:bg-green-800 rounded-md">Dashboard</h1>
        </div>
        
        </div>
    </>
  );
};

export default Navigation;
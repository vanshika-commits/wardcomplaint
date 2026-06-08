import React from "react";
import india from "../assets/india.jpg";

const Footer = () => {
  return (
    <div className=" text-sm text-gray-800 px-10 py-6">
      
    
      <p className="mb-2">
        SBM Academy Toll Free:{" "}
        <span className="font-bold">18001800404</span>
      </p>

   
      <div className="flex flex-wrap gap-3 mb-3">
        <a href="#" className="hover:underline">Archives</a> |
        <a href="#" className="hover:underline">Privacy Policy</a> |
        <a href="#" className="hover:underline">Hyperlinking Policy</a> |
        <a href="#" className="hover:underline">Copyright Policy</a> |
        <a href="#" className="hover:underline">Accessibility Statement</a> |
        <a href="#" className="hover:underline">Help</a> |
        <a href="#" className="hover:underline">Feedback</a> |
        <a href="#" className="hover:underline">Contact Us</a>
      </div>

      {/* Content + Image Row */}
      <div className="flex justify-between items-center flex-wrap">
        
        {/* Left Text */}
        <div className="max-w-[70%]">
          <p>
            Website Content Managed by{" "}
            <span className="font-semibold">
              Swachh Bharat Mission - Grameen, Department of Drinking Water and
              Sanitation, Ministry of Jal Shakti
            </span>
            , Designed, Developed and Hosted by{" "}
            <span className="text-blue-600 font-semibold">NIC</span>
          </p>

          <p className="mt-2">
            Visitors: <span className="font-bold">22789597</span> | Page last
            updated on: <span className="font-bold">16/4/2026</span>
          </p>
        </div>

        {/* Right Image */}
        <div>
          <a href="/">
            <img
              src={india}
              alt="india"
              className="h-[100px] cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
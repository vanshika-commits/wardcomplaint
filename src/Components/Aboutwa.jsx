import React from "react";
import mann from "../assets/mann.jpg";
import { useNavigate } from "react-router-dom";

const Aboutwa = () => {
  const navigate = useNavigate();   

const handle = () => {
  navigate("/Register");         
};
  return (
    <div className="flex mt-10 gap-6 relative">
      
      {/* LEFT CONTENT */}
      <div className="flex-1 ml-20 h-[320px] overflow-y-auto pr-3">
        
        <h2 className="text-green-700 font-extrabold text-3xl mb-2">
          Ward Members Complaints System: Empowering Local Governance
        </h2>

        <p className="text-gray-700 mb-3">
          The Ward Members Complaints System is designed to streamline the process of reporting,
          managing, and resolving civic issues at the grassroots level.
        </p>

        <p className="text-gray-700 mb-3">
          Ward members can report issues using images or voice recordings. The voice input is
          automatically converted into text.
        </p>

        <h3 className="text-green-700 font-bold mt-4 mb-2">
          Key Areas Where Complaints Can Be Raised:
        </h3>

        <ul className="list-disc pl-5 text-gray-700 marker:text-green-600">
          <li>Sanitation issues</li>
          <li>Drainage problems</li>
          <li>Water supply issues</li>
          <li>Electricity problems</li>
          <li>Road damage</li>
          <li>Public place maintenance</li>
        </ul>

        <h3 className="text-green-700 font-bold mt-4 mb-2">
          How to Register a Complaint:
        </h3>

        <ul className="list-disc pl-5 text-gray-700 marker:text-green-600">
          <li>Upload image</li>
          <li>Record voice (auto text)</li>
          <li>Enter details</li>
          <li>Submit</li>
        </ul>

        <h3 className="text-green-700 font-bold mt-4 mb-2">
          Benefits of the System:
        </h3>

        <ul className="list-disc pl-5 text-gray-700 marker:text-green-600">
          <li>Fast response</li>
          <li>Better communication</li>
          <li>Transparent tracking</li>
          <li>Quick resolution</li>
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex justify-center items-start">
        <img
          className="h-[320px] object-cover rounded-lg"
          src={mann}
          alt="ward"
        />
      </div>

      {/* 🔥 BUTTON (proper fixed inside section) */}
      <div className="absolute bottom-2 right-190">
        <button  onClick={handle}  className="bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-800 hover:scale-105 transition-all">
          🚨 Register a Complaint
        </button>
      </div>

    </div>
  );
};

export default Aboutwa;
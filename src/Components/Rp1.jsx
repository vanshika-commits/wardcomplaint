import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/complain/jago.png";

const Rp1 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 flex items-center justify-end pr-20">
        
        <div className="flex flex-col gap-6">

          {/* Heading */}
          <div className="text-white">
            <h1 className="text-3xl font-semibold">
              आपकी शिकायतें, हमारा निवारण
            </h1>
            <p className="text-sm mt-2">
              हम यहाँ आपकी शिकायतों का समाधान करने के लिए हैं
            </p>
          </div>

          {/* CARD 1 */}
          <div className="bg-gray-200 w-[420px] h-[80px] flex justify-between items-center px-4 rounded-md">
            <h2 className="text-xl">शिकायत दर्ज करें</h2>
            <button
              onClick={() => navigate("/register/complaint")}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              रजिस्टर करें
            </button>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-200 w-[420px] h-[80px] flex justify-between items-center px-4 rounded-md">
            <h2 className="text-xl">अपनी शिकायत पर नज़र रखें</h2>
            <button
              onClick={() => navigate("/register/See")}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              ट्रैक करें
            </button>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-200 w-[420px] h-[80px] flex justify-between items-center px-4 rounded-md">
            <h2 className="text-xl">दस्तावेज़ अपलोड करें</h2>
            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              अपलोड करें
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rp1;
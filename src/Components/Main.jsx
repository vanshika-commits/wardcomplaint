import React, { useState, useEffect } from "react";
import im from "../assets/Banner_for_Veer_Bal_Diwas.png";
import im1 from "../assets/vande_mataram_banner.jpg";
import im2 from "../assets/InterNational_wash.jpg";
import im3 from "../assets/SSG_banner.png";

const Main = () => {
  const images = [im, im1, im2, im3];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className=" bg-white flex flex-col  justify-center">
        <img
          className="h-[400px] w-full object-cover transition-all duration-500"
          src={images[index]} 
          alt="slider"
        />
         </div>
         
    <div className="overflow-hidden whitespace-nowrap h-[50px] bg-green-800 text-white py-2">
  <div className="flex animate-marquee">
    <span className="mx-6">Swachhata Samachar August-2025 (Hindi)</span>
    <span className="mx-6">Stop Diarrhoea Campaign 2025</span>
    <span className="mx-6">Swachh Survekshan Grameen 2025</span>
    <span className="mx-6">Clean India, Green India 🌱</span>
    <span className="mx-6">Say No to Open Defecation 🚫</span>
    <span className="mx-6">Use Dustbin, Keep Surroundings Clean 🗑️</span>
    <span className="mx-6">स्वच्छ भारत, स्वस्थ भारत 🇮🇳</span>
    <span className="mx-6">हर घर शौचालय, हर घर सम्मान</span>
    <span className="mx-6">Water Conservation is Our Responsibility 💧</span>
    <span className="mx-6">Plastic Free India ♻️</span>

    {/* Repeat for smooth loop */}
    <span className="mx-6">Swachhata Samachar August-2025 (Hindi)</span>
    <span className="mx-6">Stop Diarrhoea Campaign 2025</span>
    <span className="mx-6">Swachh Survekshan Grameen 2025</span>
  </div>
</div>
           
        
      
    </>
  );
};

export default Main;
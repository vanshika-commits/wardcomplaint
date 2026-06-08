import React from "react";
import g1 from "../assets/guide1.jpg";
import g2 from "../assets/guide2.jpg";
import g3 from "../assets/guide3.jpg";
import g4 from "../assets/guide4.jpg";
import g5 from "../assets/guide5.jpg";
import pdf from "../assets/10Years_of_SBM_Brochure.pdf";

const Pink = () => {
  const data = [
    { img: g1, title: "10 years of SBM-G", file: pdf },
    { img: g2, title: "Voices from the State", file: pdf },
    { img: g3, title: "SSG Framework", file: pdf },
    { img: g4, title: "Swachhata Chronicles", file: pdf },
    { img: g5, title: "Compendium of LWM", file: pdf },
  ];

  return (
    <div className="bg-pink-200 mt-10 mb-20 py-12 min-h-[600px]">
      
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-green-700 mb-8">
        Important Resources
      </h2>

      {/* Cards */}
      <div className="flex justify-center gap-6 flex-wrap">
        {data.map((item, index) => (
          
          <a
            key={index}
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[230px] bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.img}
              alt="card"
              className="h-[280px] w-full object-cover"
            />

            {/* Bottom Text */}
            <div className="p-4 text-center transition-all duration-300 group-hover:bg-green-700">
              <p className="text-gray-700 group-hover:text-white font-medium">
                {item.title}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-end mt-6 mr-10">
        <button className="bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Pink;
import React from "react";

const ProjectCard = ({ image1, image2 }) => {
  return (
    <div className="flex lg:flex-row flex-col w-full gap-6">
      {/* First Image (Left) */}
      <div className="group relative overflow-hidden w-full lg:w-1/2 h-[500px] cursor-pointer rounded-2xl border-2 border-gray-300">
        <img
          src={image1}
          alt="Project 1"
          className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
          <span className="text-white text-3xl lg:text-4xl font-bold uppercase tracking-wide border-2 border-white px-8 py-3 rounded-full">
            Show Project
          </span>
        </div>
      </div>

      {/* Second Image (Right) */}
      <div className="group relative overflow-hidden w-full lg:w-1/2 h-[500px] cursor-pointer rounded-2xl border-2 border-gray-300">
        <img
          src={image2}
          alt="Project 2"
          className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
          <span className="text-white text-3xl lg:text-4xl font-bold uppercase tracking-wide border-2 border-white px-8 py-3 rounded-full">
            Show Project
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

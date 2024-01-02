import React from "react";

export const CardItems = ({ imageData }) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white"
        src={imageData}
        alt="/"
      />
      <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
      <p className="text-center text-4xl font-bold">$149</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
        <p className="py-2 border-b mx-8">1 Granted User</p>
        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
      </div>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
        Start Trial
      </button>
    </div>
  );
};

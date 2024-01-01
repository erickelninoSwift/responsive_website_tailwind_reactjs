import React from "react";
import { Typewriter } from "react-simple-typewriter";
export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          Grow with Data
        </h1>
        <div className="flex justify-center items-center space-x-3">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-2">
            Fast , flexible financing for{" "}
          </p>
          <div className="md:text-4xl sm:text-3xl text-xl font-semibold">
            <Typewriter
              words={["BTB", "BTC", "SAAS"]}
              typeSpeed={100}
              loop={Infinity}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </div>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600 pt-2">
          Monitor your data analytics to increase revenue for BTB , BTC & SAAS
          platforms
        </p>
        <button
          className="w-[200px] rounded-md bg-[#00df9a] text-black p-2 my-6 mx-auto py-3"
          onClick={() => console.log("Get Started Pressed")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

import React from "react";
import Laptop from "../assets/laptop.jpg";
export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="Laptop" />
        <div>
          <p>DATA ANALYTICS DASHBOARD</p>
          <h1>Manage Data Analytics Centrally</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
        </div>
      </div>
    </div>
  );
};

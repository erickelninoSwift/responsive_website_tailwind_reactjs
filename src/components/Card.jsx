import React from "react";
import Single from "../assets/single.png";
import Triple from "../assets/triple.png";
import Double from "../assets/double.png";
import { CardItems } from "./CardItems";

export const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-[white]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <CardItems imageData={Single} />
        <CardItems imageData={Double} />
        <CardItems imageData={Triple} />
      </div>
    </div>
  );
};

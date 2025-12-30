import React from "react";
import Img from "../../assets/banner images/Banner-2.jpg";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const TopSellingCard = () => {
  return (
    // todo: convert the whole card as link
    <div className="">
      <div className="card border border-slate-300 shadow-sm rounded-xl">
        <figure className="h-44 md:h-54 w-full overflow-hidden rounded-t-xl">
          <img
            src={Img}
            alt="Shoes"
            className="object-cover w-full h-full overflow-hidden"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl md:text-2xl">Iphone 17 pro Max</h2>
          <h1 className="flex items-center text-lg md:text-xl gap-1"><FaBangladeshiTakaSign className=""/>170,000</h1>
          
        </div>
      </div>
    </div>
  );
};

export default TopSellingCard;

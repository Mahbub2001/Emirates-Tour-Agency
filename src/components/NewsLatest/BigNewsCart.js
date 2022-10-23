import React from "react";
import './NewsLatest.Module.css'

const BigNewsCart = ({ data }) => {
  const { author, date, details, image, place } = data;
  return (
    <div className="shadow-lg">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="p-5">
        <p className="date bg-blue-400 w-36 py-1 px-3">{date}</p>
        <p className=" text-1xl font-bold text-gray-800">{place}</p>
        <p className="mt-2 mb-2 font-semibold ">TRAVEL | BY {author}</p>
        <h3>{details}</h3>
      </div>
    </div>
  );
};

export default BigNewsCart;

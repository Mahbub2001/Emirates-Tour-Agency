import React from "react";
import { Link } from "react-router-dom";
import "./SpecialOffers.Module.css";

const SpecialCart = ({data}) => {
    const {place,price,title,image} = data;
  return (
    <div className="max-w-sm bg-white rounded-lg  border-gray-200 shadow-md dark:border-gray-700">
      <div>
        <img className="rounded-t-lg w-full h-72" src={image} alt="" />
      </div>
      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
            {title}
          </h5>
        </Link>
        <div className="flex justify-between">
            <div>
                {place}
            </div>
            <div className="bg-blue-200 px-4 py-1 text-blue-600 font-semibold">
            ${price}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCart;

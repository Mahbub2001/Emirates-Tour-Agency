import React from "react";
import "./FeaturePlaces.Module.css";

const FeatureCart = ({data}) => {
    const {place,people,rating,image} = data
  return (
    <div className=" antialiased">
      <div>
        <img
          src={image}
          alt=" random imgee"
          className="w-full h-60 object-cover object-center rounded-lg shadow-md"
        />

        <div className="relative px-4 -mt-12 ">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="mt-4">
              <p className="text-teal-600 text-md font-semibold text-center">
                {rating} ratings{" "}
              </p>
              <p className="text-sm text-center text-gray-600 mt-2">(based on <span className="text-lime-800 font-bold">{people}k</span> ratings)</p>
              <p className="mt-4 text-center">{place}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCart;

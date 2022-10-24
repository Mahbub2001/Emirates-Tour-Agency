import React, { useState } from "react";
import "./Home.Module.css";
import HomePicture from "../../assets/coxsBajar.png";
import SpecialOffers from "../../components/SpecialOffers";
import Benefit from "../../components/benefit/Benefit";
import FeaturePlaces from "../../components/FeaturePlaces/FeaturePlaces";
import Gallery from "../../components/Gallery/Gallery";
import NewsLatest from "../../components/NewsLatest/NewsLatest";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [date, setDate] = useState();
  console.log(date);

  return (
    <div>
      <div className="home-container mb-4 relative">
        <img className="home-picture" src={HomePicture} alt="" />
        <div className="text-white header-details">
          <h1 className="text-4xl">Cox's Bazar</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio
            veritatis libero odit nihil, et provident magni fuga cupiditate quos
            eius corrupti similique non! Sed inventore cupiditate minus
            accusamus unde!
          </p>
          <button
            type="button"
            class=" mt-5 text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
          >
            Book Now<FaArrowRight className="ml-2" />
          </button>
        </div>
        <div>
          
        </div>
      </div>
      <div className="flex flex-row justify-center destination-container">
        <div className="shadow-xl destination-inner">
          <form className="destination-form grid lg:grid-cols-4 md:grid-cols-1 lg:justify-center lg:justify-items-center items-center md:pl-10">
            <div className="rln">
              <h4>From</h4>
              <input
                className="destination"
                name="destination"
                type="text"
                placeholder="Destination"
              />
              <hr className="hr" />
            </div>

            <div className="rln">
              <h4 className="mt-2">To</h4>
              <input
                className="destination"
                name="destination"
                type="text"
                placeholder="Destination"
              />
              <hr className="hr" />
            </div>

            <div className="date-pickerdiv rln">
              <h4>Date:</h4>
              <input
                className="destination date-picker"
                type="date"
                name="date-picker"
                onChange={(e) => setDate(e.target.value)}
              />
              <hr className="hr" />
            </div>

            <div className="">
              <p>Persons</p>
              <input
                type="number"
                className="destination"
                placeholder="Write here"
              />
            </div>
          </form>
        </div>
      </div>
      <SpecialOffers />
      <Benefit />
      <FeaturePlaces />
      <Gallery />
      <NewsLatest />
    </div>
  );
};

export default Home;

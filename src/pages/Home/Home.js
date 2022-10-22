import React, { useState } from "react";
import "./Home.Module.css";
import HomePicture from "../../assets/coxsBajar.png";
import SpecialOffers from "../../components/SpecialOffers";
import Benefit from "../../components/benefit/Benefit";
import FeaturePlaces from "../../components/FeaturePlaces/FeaturePlaces";

const Home = () => {
  const [date, setDate] = useState();
  console.log(date);

  return (
    <div>
      <div className="home-container mb-4">
        <img className="home-picture" src={HomePicture} alt="" />
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
             <hr  className="hr"/>
            </div>

            <div className="rln">
              <h4 className="mt-2">To</h4>
              <input
                className="destination"
                name="destination"
                type="text"
                placeholder="Destination"
              />
              <hr  className="hr"/>
            </div>

            <div className="date-pickerdiv rln">
              <h4>Date:</h4>
              <input
                className="destination date-picker"
                type="date"
                name="date-picker"
                onChange={(e) => setDate(e.target.value)}
              />
              <hr  className="hr"/>
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
     <SpecialOffers/>
     <Benefit/>
     <FeaturePlaces/>
    </div>
  );
};

export default Home;

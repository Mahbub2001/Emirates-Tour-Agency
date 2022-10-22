import React, { useState } from "react";
import "./Home.Module.css";
import HomePicture from "../../assets/coxsBajar.png";

const Home = () => {
  const [date, setDate] = useState();
  console.log(date);

  return (
    <div>
      <div className="home-container mb-4">
        <img className="home-picture" src={HomePicture} alt="" />
      </div>
      <div className="flex justify-center destination-container">
        <div className="shadow-xl destination-inner">
          <form className="destination-form grid lg:grid-cols-4 md:grid-cols-1 lg:justify-center lg:justify-items-center items-center md:pl-10">

            <div className="relative">
              <h4>From</h4>
              <input
                className="destination"
                name="destination"
                type="text"
                placeholder="Destination"
              />
              <h4 className="mt-2">To</h4>
              <input
                className="destination"
                name="destination"
                type="text"
                placeholder="Destination"
              />
              <span className="vertical-1"></span>
            </div>

            <div className="date-pickerdiv relative">
              <h4>Date:</h4>
              <input
                className="destination date-picker"
                type="date"
                name="date-picker"
                onChange={(e) => setDate(e.target.value)}
              />
              <span className="vertical-2"></span>
            </div>

            <div className="relative">
              <p>Persons</p>
              <input type="text" className="destination" placeholder="Write here"/>
              <span className="vertical-2"></span>
            </div>

            <div className=""></div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

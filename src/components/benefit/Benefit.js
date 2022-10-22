import React from "react";
import "./Benefit.Module.css";
import icon1 from "../../assets/icons/icon1.webp"
import icon2 from "../../assets/icons/icon2.webp"
import icon3 from "../../assets/icons/icon3.webp"
import icon4 from "../../assets/icons/icon4.webp"

const Benefit = () => {
  return (
    <div className="mt-20 benefit-container flex flex-row justify-center">
      <div className="benefit-inner mb-28 pt-10">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div>
            <h1 className="text-5xl text-slate-800 font-semibold">
              Our Benefit
            </h1>
            <hr className="bg-blue-800 w-24 h-2 mt-2 mb-5" />
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
                <div>
                    <h3 className="text-3xl text-slate-700 font-semibold mt-5">Personal Schedule</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt maiores molestias beatae quaerat saepe alias mollitia ducimus earum, voluptatibus consequatur minima et, labore enim itaque nam non. Hic, ad tempora.</p>
                </div>
                <div>
                    <h3 className="text-3xl text-slate-700 font-semibold mt-5">Luxury Interiors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet obcaecati autem veniam ducimus nostrum corporis excepturi est voluptatum repellendus quaerat. Debitis dolor vitae iusto quo eligendi vel, est quibusdam a!</p>
                </div>
                <div>
                    <h3 className="text-3xl text-slate-700 font-semibold mt-5">Safe & Confidential</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem vel fugiat aspernatur voluptatum quae? Aliquam non ex cum eum cupiditate voluptates facilis libero neque, deserunt nulla quibusdam enim, inventore itaque?</p>
                </div>
                <div>
                    <h3 className="text-3xl text-slate-700 font-semibold mt-5">Professional Crew</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quibusdam. Ducimus velit maiores corporis maxime? Maxime obcaecati consequatur deserunt in facilis sapiente dolore, quia nemo, nulla dolor molestiae voluptate quod.</p>
                </div>
            </div>
          </div>
          <div>
          <div className="grid md:grid-cols-2 gap-5 md:mt-5 lg:mt-0 ">
                <div>
                    <img src={icon1} alt="" />
                </div>
                <div>
                <img src={icon2} alt="" />
                </div>
                <div>
                <img src={icon3} alt="" />
                </div>
                <div>
                <img src={icon4} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;

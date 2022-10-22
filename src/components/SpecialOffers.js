import React, { useEffect, useState } from "react";
import SpecialCart from "./SpecialCart";
import "./SpecialOffers.Module.css"

const SpecialOffers = () => {

    const [datas,setData] = useState([]);

    useEffect(()=>{
        fetch('https://emirates-agency-server.vercel.app/special-offers')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

  return (
    <div className="flex flex-row justify-center">
      <div className="special-inner">
        <div className="lg:flex sm:block justify-between ">
            <div>
                <h1 className="text-5xl font-bold mt-5 mb-10">Special Offers</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br/> elit. Quibusdam, veniam. Obcaecati totam soluta <br/> iusto, exercitationem laborum quas consectetur commodi</p>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center justify-items-center sm:grid-cols-1 gap-5">
        {
            datas.map(data=> <SpecialCart data={data} key={data.id}></SpecialCart>)
        }
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;

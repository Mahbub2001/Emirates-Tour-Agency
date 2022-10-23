import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BigNewsCart from "../../components/NewsLatest/BigNewsCart";
import "./Blogs.Module.css";
import { FaSearch } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import NewsCart from "../../components/NewsLatest/NewsCart";

const Blogs = () => {
  const data = useLoaderData();
  //   const [cart,setCart] = useState(data);

  return (
    <div className="">
      <div className="blogs text-white flex justify-center items-center text-center">
        <p className="absolute">Home {">"} Blog </p>
        <h1 className="absolute text-5xl font-bold">Our Blogs</h1>
      </div>
      <div className="flex justify-center justify-items-center items-center flex-row mt-10">
        <div className="blog-container">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 lg:col-span-3 md:col-span-2">
              {data.map((cart) => (
                <BigNewsCart key={cart.id} data={cart}></BigNewsCart>
              ))}
            </div>
            <div className="lg:w-64">
              <form className="border flex gap-8 items-center w-64 p-2 h-10">
                <input className=" outline-none " type="text" />
                <FaSearch className="cursor-pointer" />
              </form>
              <div className="mt-8">
                <h3 className="text-2xl font-bold">Categories</h3>
                <div className="mt-3">
                  <div className="flex justify-between mb-2">
                    <div className="flex gap-2 items-center">
                      <MdDoubleArrow />
                      <p>Travel</p>
                    </div>
                    <div>
                      <p>(3)</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div className="flex gap-2 items-center">
                      <MdDoubleArrow />
                      <p>Music</p>
                    </div>
                    <div>
                      <p>(9)</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div className="flex gap-2 items-center">
                      <MdDoubleArrow />
                      <p>Fassion</p>
                    </div>
                    <div>
                      <p>(7)</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div className="flex gap-2 items-center">
                      <MdDoubleArrow />
                      <p>Life Style</p>
                    </div>
                    <div>
                      <p>(8)</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div className="flex gap-2 items-center">
                      <MdDoubleArrow />
                      <p>Music</p>
                    </div>
                    <div>
                      <p>(12)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                  <h3 className="font-bold text-2xl text-slate-800">Recent Music</h3>
                  <div className="mt-4">
                    {
                      data.slice(0,3).map(cart=>(
                        <div className="flex gap-2 mb-2 items-center">
                          <div>
                            <img className="w-28 h-20" src={cart.image} alt="" />
                          </div>
                          <div>
                            <h3 className="text-blue-700">{cart.date}</h3>
                            <small>{cart.details.slice(0,40)}</small>
                          </div>
                        </div>
                      ))
                    }
                  </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold">Archives</h3>
                <p className="mb-3 mt-3">August 2020</p>
                <p className="mb-3">September 2020</p>
                <p className="mb-3">October 2020</p>
                <p className="mb-3">November 2020</p>
                <p className="mb-3">December 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

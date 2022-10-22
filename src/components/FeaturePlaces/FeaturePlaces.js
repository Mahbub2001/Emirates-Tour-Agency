import React, { useEffect, useState } from "react";
import "./FeaturePlaces.Module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, FreeMode,Autoplay,Navigation } from "swiper";
import FeatureCart from "./FeatureCart";


const FeaturePlaces = () => {


    const [datas,setDatas] = useState([]);

    useEffect(()=>{
        fetch('https://emirates-agency-server.vercel.app/feature-places')
        .then(res=>res.json())
        .then(data=>setDatas(data));
    },[])

  return (
    <div className="flex flex-row justify-center mt-10 mb-20">
      <div className="feature-inner">
        <h3 className="text-5xl text-gray-800 font-semibold text-center ">
          Feature Places
        </h3>
        <p className="m-auto pt-5 w-20 text-center">
          <hr className="text-center bg-blue-800 h-2" />
        </p>
        <div className="lg:flex swiper-main sm:hidden justify-center mt-10  md:hidden">
          <div className=" container-swiper">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              freeMode={true}
              autoplay={{delay:2000}}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination,Navigation, FreeMode,Autoplay]}
              className="mySwiper"
            >
              {
                datas.map((data,index)=><SwiperSlide><FeatureCart key={data.id} data={data}></FeatureCart> </SwiperSlide>)
              }
            </Swiper>
          </div>
        </div>
        <div className="swiper-main sm:hidden md:flex justify-center  mt-10 lg:hidden">
          <div className=" container-swiper">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              freeMode={true}
              autoplay={{delay:2000}}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination,Navigation, FreeMode,Autoplay]}
              className="mySwiper"
            >
              {
                datas.map((data,index)=><SwiperSlide><FeatureCart key={data.id} data={data}></FeatureCart> </SwiperSlide>)
              }
            </Swiper>
          </div>
        </div>
        <div className="md:hidden sm:flex justify-center justify-items-center items-center mt-10 lg:hidden">
          <div className=" container-swiper">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              freeMode={true}
              autoplay={{delay:2000}}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination,Navigation, FreeMode,Autoplay]}
              className="mySwiper"
            >
              {
                datas.map((data,index)=><SwiperSlide><FeatureCart key={data.id} data={data}></FeatureCart> </SwiperSlide>)
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePlaces;

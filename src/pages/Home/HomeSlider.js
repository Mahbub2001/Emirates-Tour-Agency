import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.Module.css"
import image1 from "../../assets/sld/Sajek.png"
import image2 from "../../assets/sld/Sreemongol.png"
import image3 from "../../assets/sld/sundorbon.png"
import image4 from "../../assets/sld/Rectangle.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const HomeSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper md:hidden lg:block sm:hidden"
      >
        <SwiperSlide className="cursor-pointer rounded-2xl border-4 border-cyan-900"><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide className="cursor-pointer rounded-2xl border-4 border-cyan-900"><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide className="cursor-pointer rounded-2xl border-4 border-cyan-900"><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide className="cursor-pointer rounded-2xl border-4 border-cyan-900"><img className="h-72 rounded-2xl" src={image4} alt="" /></SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-96  w-64 md:block lg:hidden sm:hidden"
      >
        <SwiperSlide className="cursor-pointer rounded-2xl border-4 border-cyan-900"><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide className="cursor-pointer rounded-2xl border-4 border-cyan-900"><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide className="cursor-pointer rounded-2xl border-4 border-cyan-900"><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide className="cursor-pointer rounded-2xl border-4 border-cyan-900"><img className="h-72 rounded-2xl" src={image4} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;

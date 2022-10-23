import "./Gallery.Module.css";
import gp from "../../assets/icons/gp-1.jpeg";
import icon1 from '../../assets/icons/icon1.webp'
import icon2 from '../../assets/icons/icon2.webp'
import icon3 from '../../assets/icons/icon3.webp'
import ImageSlider from "./Slider/ImageSlider";
import { SliderData } from "./Slider/SliderData";


const Gallery = () => {

  return (
    <div>
      <div className="relative">
        <img className=" z-0 w-full gallery-pic" src={gp} alt="" />
        <div className="text-gallery">
          <h5 className="lg:text-5xl text-white font-semibold text-center">
            Destination Gallery
          </h5>
          <p className="lg:mt-5 lg:text-2xl text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            facere fuga quibusdam eius maxime quia.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center lg:-mt-96 md:-mt-28 sm:-mt-0">
        <div className="special-inner">
          <div className="flex justify-center justify-items-center">
          <div className="">
           <ImageSlider slides={SliderData}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// import React, { useState } from "react";
// import "./Gallery.Module.css";
// import gp from "../../assets/icons/gp-1.jpeg";
// import icon1 from '../../assets/icons/icon1.webp'
// import icon2 from '../../assets/icons/icon2.webp'
// import icon3 from '../../assets/icons/icon3.webp'

// const Gallery = () => {
//   const imgs = [
//     { id: 0, value: icon1 },
//     { id: 1, value: icon2 },
//     { id: 2, value: icon3 },
//   ];
//   const [wordData, setWordData] = useState(imgs[0]);
//   const handleClick = (index) => {
//     console.log(index);
//     const wordSlider = imgs[index];
//     setWordData(wordSlider);
//   };

//   return (
//     <div>
//       <div className="relative">
//         <img className=" z-0 w-full gallery-pic" src={gp} alt="" />
//         <div className="text-gallery">
//           <h5 className="lg:text-5xl text-white font-semibold text-center">
//             Destination Gallery
//           </h5>
//           <p className="lg:mt-5 lg:text-2xl text-white">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
//             facere fuga quibusdam eius maxime quia.
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-row justify-center mt-20">
//         <div className="special-inner">
//           <div className="flex justify-center justify-items-center">
//             <div>
//               <div className="main">
//                 <img src={wordData.value} height="300" width="500" />
//                 <div className="flex_row">
//                   {imgs.map((data, i) => (
//                     <div className="thumbnail" key={i}>
//                       <img
//                         className={wordData.id == i ? "clicked" : ""}
//                         src={data.value}
//                         onClick={() => handleClick(i)}
//                         height="70"
//                         width="100"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

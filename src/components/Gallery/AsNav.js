import React, { Component } from "react";
import Slider from "react-slick";
import icon2 from "../../assets/icons/icon2.webp"
import icon3 from "../../assets/icons/icon3.webp"
import icon4 from "../../assets/icons/icon4.webp"
import Ratargul from "../../assets/icons/ratargulLarge.jpg"
import Japan from "../../assets/icons/Japan.jpg"
import "./Gallery.Module.css"

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        delay:5000,
        autoplay: true,
        // speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
      const settings1={
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        delay:5000,
        autoplay: true,
        // speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:4,
                    infinite:true,
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1,
                    infinite:true,
                }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:1,
                    infinite:true,
                }
            },
        ]
      }
  
    return (
      <div className="slider-wrap shadow-lg">
        <Slider {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <img className="w-full img-slide" src={Ratargul} alt="" />
          </div>
          <div>
           <img className="w-full img-slide" src={Japan} alt="" />
          </div>
          <div>
            <img className="w-full img-slide" src={icon3} alt="" />
          </div>
          <div>
           <img className="w-full img-slide" src={icon4} alt="" />
          </div>
          <div>
           <img className="w-full img-slide" src={icon4} alt="" />
          </div>
          <div>
           <img className="w-full img-slide" src={icon4} alt="" />
          </div>
          <div>
           <img className="w-full img-slide" src={icon4} alt="" />
          </div>
          <div>
           <img className="w-full img-slide" src={icon4} alt="" />
          </div>
          <div>
           <img className="w-full img-slide" src={icon4} alt="" />
          </div>
          <div>
           <img className="w-full img-slide" src={icon4} alt="" />
          </div>
        </Slider>
        <div className="text-center py-10">
        <Slider {...settings1}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
        //   slidesToShow={7}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className="w-10">
            <h3 className="cursor-pointer ">Bangladesh</h3>
          </div>
          <div className="w-10">
            <h3 className="cursor-pointer ">Japan</h3>
          </div>
          <div className="w-10">
            <h3 className="cursor-pointer ">China</h3>
          </div>
          <div className="w-10">
            <h3 className="cursor-pointer ">Australia</h3>
          </div>
          <div className="w-10">
            <h3 className="cursor-pointer ">Spain</h3>
          </div>
          <div className="w-10">
            <h3 className="cursor-pointer ">Italy</h3>
          </div>
          <div className="w-10">
            <h3 className="cursor-pointer ">America</h3>
          </div>
          <div className="w-10">
            <h3 className="cursor-pointer ">Switzerland</h3>
          </div>
          <div className="w-10">
            <h3 className="cursor-pointer ">Singapur</h3>
          </div>
          <div className="w-10">
            <h3 className="cursor-pointer ">France</h3>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}
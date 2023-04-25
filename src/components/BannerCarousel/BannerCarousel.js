import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./BannerCarousel.css";
import Slider from "react-slick";

const BannerCarousel = ({ data }) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      arrows:false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className="BannerCarousel">
        <Slider  {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.Imgsrc} alt="" className="BannerCarousel-Image" />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default BannerCarousel;
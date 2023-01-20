import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from '../../../Photos/banner/banner1.jpg';
import banner2 from '../../../Photos/banner/banner2.jpg';
import banner3 from '../../../Photos/banner/banner3.jpg';
import '../Banner/Banner.css'

const Banner = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius:"50%" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius:"50%" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div>
            <div className=' w-11/12 mx-auto'>
            <Slider {...settings}>
            <div className=' h-screen'>
            <div className='background-1 my-10 bg-no-repeat bg-cover block h-5/6'>
              <h1>ss</h1>
            </div>
            </div>

            <div className=' h-screen'>
            <div className='background-2 my-10 bg-no-repeat bg-cover block h-5/6'>
              <h1>ss</h1>
            </div>
            </div>

            <div className=' h-screen'>
            <div className='background-3 my-10 bg-no-repeat bg-cover block h-5/6'>
              <h1>ss</h1>
            </div>
            </div>
            
          </Slider>
            </div>
        </div>
      );
};

export default Banner;
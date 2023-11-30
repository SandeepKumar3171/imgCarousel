import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../src/image/img-1.jpg'
import img2 from '../src/image/img-2.jpg'
import img3 from '../src/image/img-3.jpg'
import img4 from '../src/image/pic-4.jpg'
import Navbar from "./Navbar";



function App() {

  const settings={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  }
  return (
    <>
   <div className=" grid place-items-center bg-gradient-to-r from-sky-600 to-indigo-600 p-5">
   <Navbar/>
   </div>

<div className="p-5">
     <Slider {...settings} className="">
      <div>
        <img src={img1} alt="Image 1" />
       
      </div>
      <div>
        <img src={img2} alt="Image 2" />
      </div>
      <div>
        <img src={img3} alt="Image 3" />
      </div>
      <div>
        <img src={img4} alt="Image 4" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
    </div>
    </>



    
  );
}

export default App;

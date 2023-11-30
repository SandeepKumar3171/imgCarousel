import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../src/image/img-1.jpg'
import img2 from '../src/image/img-2.jpg'
import img3 from '../src/image/img-3.jpg'
import img4 from '../src/image/pic-4.jpg'

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
    <div>
     <Slider {...settings}>
      <div>
        <img src={img1} alt="Image 1" />
       
      </div>
      <div>
        <img src={img2} alt="Image 2" />
      </div>
      <div>
        <img src={img3} alt="Image 2" />
      </div>
      <div>
        <img src={img4} alt="Image 2" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
    </div>
  );
}

export default App;

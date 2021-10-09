import React, { Component } from 'react'
import Slider from "react-slick";
import './slider.css';

function SliderEffect() {

    const slider = React.useRef(null);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
     };
    return (
        <div className="container">
        <Slider  ref={slider} {...settings}>
            <div className="slide">
                <img src="https://www3.hilton.com/resources/media/hi/BDOHIHI/en_US/img/shared/full_page_image_gallery/main/HL_purnabreakfast_7_675x359_FitToBoxSmallDimension_Center.jpg" alt="" />
                <h1>Serving Best Restaurant, Catering & Banquet Services in Makassar</h1>
            </div>
            <div className="slide">
                <img src="/images/slide2.jpg" alt="" />
                <h1>Serving Best Restaurant, Catering & Banquet Services in Makassar</h1>
            </div>
            <div className="slide">
                <img src="/images/slide3.jpg" alt="" />
                <h1>Serving Best Restaurant, Catering & Banquet Services in Makassar</h1>
            </div>
            <div className="slide">
                <img src="/images/slide4.jpg" alt="" />
                <h1>Serving Best Restaurant, Catering & Banquet Services in Makassar</h1>
            </div>
        </Slider>
            <div className="arrows">
                <span onClick={() => slider?.current?.slickPrev()} className="left"><i class="fas fa-chevron-left"></i></span>
                <span onClick={() => slider?.current?.slickNext()} className="right"><i class="fas fa-chevron-right"></i></span>
            </div>
        </div>
    )
}

export default SliderEffect

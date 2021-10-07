import React from 'react'
import Slider from "react-slick";
import './slider.css';
import { LoginIcon, KeyboardArrowLeftIcon } from '@material-ui/icons';

function SliderEffect() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
     };
    return (
        <div className="container">
        <Slider {...settings}>
            <div className="slide">
                <img src="/images/slide1.jpg" alt="" />
            </div>
            <div className="slide">
                <img src="/images/slide2.jpg" alt="" />
            </div>
            <div className="slide">
                <img src="/images/slide3.jpg" alt="" />
            </div>
            <div className="slide">
                <img src="/images/slide4.jpg" alt="" />
            </div>
        </Slider>
            <div className="arrows">
                {/* <LoginIcon /> */}
                <KeyboardArrowLeftIcon />
            </div>
        </div>
    )
}

export default SliderEffect

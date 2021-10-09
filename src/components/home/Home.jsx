import React from 'react'
import Slide from '../slider/Slider';
import Serving from '../serving/Serving';
import Story from '../story/Story';
import Cater from '../cater/Cater';
import Menu from '../manu/Menu';
import Map from '../map/Map';
import Footer from '../footer/Footer';
import End from '../end/End';

function Home() {
    return (
        <div className="home" style={{ overflow:"hidden"}}>
            <Slide />
            <Serving />
            <Story />
            <Cater />
            <Menu />
            <Map />
            <Footer /> 
            <End />
        </div>
    )
}

export default Home

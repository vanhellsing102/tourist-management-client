import React from 'react';
import Slider from './Slider';
import TouristSpotVideo from './TouristSpotVideo';
import RecommandedDay from './RecommandedDay';
import Footer from './Footer';
import Countries from './Countries';
import Typing from './Typing';

const Home = () => {
    return (
        <div>
            <Typing></Typing>
            <Slider></Slider>
            <Countries></Countries>
            <TouristSpotVideo></TouristSpotVideo>
            <RecommandedDay></RecommandedDay>
            <Footer></Footer>
        </div>
    );
};

export default Home;
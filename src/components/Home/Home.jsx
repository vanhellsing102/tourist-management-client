import React from 'react';
import Slider from './Slider';
import TouristSpotVideo from './TouristSpotVideo';
import RecommandedDay from './RecommandedDay';
import Footer from './Footer';
import Countries from './Countries';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Countries></Countries>
            <TouristSpotVideo></TouristSpotVideo>
            <RecommandedDay></RecommandedDay>
            <Footer></Footer>
        </div>
    );
};

export default Home;
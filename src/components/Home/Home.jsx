import React from 'react';
import Slider from './Slider';
import TouristSpot from './TouristSpot';
import TouristSpotVideo from './TouristSpotVideo';
import RecommandedDay from './RecommandedDay';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TouristSpot></TouristSpot>
            <TouristSpotVideo></TouristSpotVideo>
            <RecommandedDay></RecommandedDay>
            <Footer></Footer>
        </div>
    );
};

export default Home;
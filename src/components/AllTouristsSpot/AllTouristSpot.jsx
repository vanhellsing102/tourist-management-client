import React from 'react';
import TouristSpotCard from './TouristSpotCard';
import 'animate.css';
import { useLoaderData } from 'react-router-dom';

const AllTouristSpot = () => {
    const allSpot = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl py-2 font-bold text-center mt-7 animate__rubberBand animate__animated'>Your Fouvarite Tourist Spot is Here</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    allSpot.map(spot => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;
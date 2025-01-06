import React, { useState } from 'react';
import TouristSpotCard from './TouristSpotCard';
import 'animate.css';
import { useLoaderData } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";

const AllTouristSpot = () => {

    const loaderSpots = useLoaderData();
    const [spots, setSpots] = useState(loaderSpots);
    const [option, setOption] = useState(false);


    const handleShortBy = (type) =>{
        if(type === "ascending"){
            const ascendingSpots = loaderSpots.sort((a, b) => a.average_cost - b.average_cost);
            setSpots(ascendingSpots);
        }
        else if(type === "descending"){
            const descendingSpots = loaderSpots.sort((a,b) => a.average_cost - b.average_cost);
            descendingSpots.reverse();
            setSpots(descendingSpots);
        }
        
        
    }

    return (
        <div>
            <h1 className='text-4xl py-2 font-bold text-center mt-7 animate__rubberBand animate__animated'>Your Fouvarite Tourist Spot is Here</h1>
            <div onClick={() => setOption(!option)} className='flex items-center text-xl hover:cursor-pointer ml-5 border-2 border-pink-500 rounded-xl px-2 font-semibold py-1 gap-5 w-36 text-center relative'>
                <h3>Short By</h3>
                <FaArrowDown></FaArrowDown>
                {
                    option && 
                        <ul className='absolute top-9 left-0 rounded-xl text-white font-thin text-sm bg-[#0F4471] w-full'>
                            <li onClick={() => handleShortBy('ascending')} className='hover:border-b hover:border-2 hover:border-white rounded-xl'><button>Ascending</button></li>
                            <li onClick={() => handleShortBy('descending')} className='hover:border-b hover:border-2 hover:border-white rounded-xl'><button>Descending</button></li>
                    </ul>
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    spots.map(spot => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;
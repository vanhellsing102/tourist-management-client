import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryCardSection = () => {

    const country = useLoaderData();
    const countryName = country.country_name.toLowerCase();
    
    const [spots, setSpots] = useState();

    useEffect(() =>{
        fetch(`http://localhost:5000/spots`)
        .then(res => res.json())
        .then(data =>{
            const remainingSpot = data.filter(spot => spot.country_name.toLowerCase() == countryName);
            setSpots(remainingSpot);
        })
    }, [])
    // console.log(spots);
    
    return (
        <div className='bg-[#A5BFDD]'>
            <h1 className='text-[#F60C86] text-center text-5xl font-semibold py-3'>{countryName.toUpperCase()}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    spots.map(spot => <div>
                        <h1>{spot.country_name}</h1>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default CountryCardSection;
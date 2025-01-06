import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CountryCardSection = () => {

    const country = useLoaderData();
    const countryName = country.country_name.toLowerCase();
    
    const [spots, setSpots] = useState();

    useEffect(() =>{
        fetch(`https://tourist-management-server-5kv3ldbcf-murads-projects-e024a269.vercel.app`)
        .then(res => res.json())
        .then(data =>{
            const remainingSpot = data.filter(spot => spot.country_name.toLowerCase() == countryName);
            setSpots(remainingSpot);
        })
    }, [spots])
    if(!spots){
        return <p>Loading...</p>
    }

    return (
        <div className='bg-[#A5BFDD]'>
            <h1 className='text-[#F60C86] text-center text-5xl font-semibold py-3'>{countryName.toUpperCase()}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-5 px-3 md:px-5 lg:px-7'>
                {
                    spots.map(spot => <div className='bg-[#000957] text-white p-7 rounded-xl flex flex-col justify-between' data-aos="fade-down" data-aos-duration="3000">
                        <h1 className='flex gap-1 '><span className='font-semibold text-[#FC3C3C]'>Spot Name:</span>{spot.tourists_spot_name}</h1>
                        <p className='flex gap-1 '> <span className='font-semibold text-[#FC3C3C]'>Country Name:</span>{spot.country_name}</p>
                        <p className='flex gap-2 '><span className='font-semibold text-[#FC3C3C]'>Location:</span>{spot.location}</p>
                        <p className=''><span className='font-semibold text-[#FC3C3C]'>Description</span>{spot.short_description}</p>
                        <p><span className='font-semibold text-[#FC3C3C]'>Cost: </span>{spot.average_cost}</p>
                        <p><span className='font-semibold text-[#FC3C3C]'>Season</span>{spot.seasonality}</p>
                        <Link to={`/details/${spot._id}`}><button className='w-full mt-2 bg-[#0F4471] py-2 hover:bg-[#2E89BA] rounded-xl duration-700'>View Details</button></Link>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default CountryCardSection;
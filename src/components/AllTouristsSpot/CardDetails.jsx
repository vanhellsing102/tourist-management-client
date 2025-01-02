import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const spot = useLoaderData();
    const { image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year, user_name, user_email } = spot;
    return (
        <div>
            <div className='px-5 md:px-9 lg:px-16 py-5 md:py-9 lg:py-12'>
                <div className='bg-[#A5BFDD] p-7 rounded-xl text-[#000]'>
                    <h1 className='text-5xl text-center font-semibold text-[#FC3C3C] mb-5 uppercase'>{tourists_spot_name}</h1>
                    <div className='flex justify-center'>
                        <img className='rounded-xl hover:border-2 hover:border-[#0F4471] w-full  lg:h-96 md:h-96 h-auto mb-3' src={image} alt="" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-medium'>Country name: {country_name}</p>
                        <p className='font-medium'>Location: {location}</p>
                        <p className='font-medium'>Seasonality: {seasonality}</p>
                        <p className='font-medium'>Average cost: {average_cost}</p>
                        <p className='font-medium'>Travel time: {travel_time}</p>
                    </div>
                    <div className=' mt-2'>
                        <p className='font-medium'>Total visitors: {total_visitors_per_year}</p>
                    </div>
                    <div className='flex justify-center mb-3'>
                        <p className='font-light'><span className='font-bold'>Description: </span>{short_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
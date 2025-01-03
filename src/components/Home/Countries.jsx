import React from 'react';
import CountryCard from './CountryCard';
import { useLoaderData } from 'react-router-dom';

const Countries = () => {

    const countries = useLoaderData();

    return (
        <div className='px-4 md:px-7 lg:px-9'>
            <h1 className='text-4xl my-5 font-semibold text-center text-[#F60C86]'>Tourist Spot</h1>
            <p className='text-center font-extralight text-[#083358]'>A tourist spot is a location or attraction that draws visitors for its natural beauty, cultural significance, historical importance, recreational opportunities, or unique features. <br /> These spots can include landmarks, national parks, museums, beaches, monuments, or entertainment hubs, offering visitors memorable experiences <br /> and insights into local culture and heritage.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7'>
                {
                    countries.map(country => <CountryCard key={country.id} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;
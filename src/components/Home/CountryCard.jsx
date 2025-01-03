import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {

    const { country_name, image, short_description } = country;

    const [seeMore, setSeeMore] = useState(null);
    console.log(seeMore);
    
    
    return (
        <Link className='bg-[#0F4471] p-7 rounded-xl hover:scale-105 duration-700'>
            <div>
                <img className='rounded-xl' src={image} alt="" />
            </div>
            <h1 className='text-4xl text-[#FC3C3C] text-center font-semibold mt-3'>{country_name}</h1>
            {
                short_description.length > 150 
                && 
                <div>
                    <p className='text-white font-thin'> 
                        {
                            seeMore ? short_description.slice(0,short_description.length) : short_description.slice(0,150)
                        }
                    </p>
                    {
                        seeMore ? <button onClick={() => setSeeMore(false)} className='text-red-400 font-bold'>Hide</button> : <button onClick={() => setSeeMore(true)} className='text-red-400 font-bold'>...see more</button>
                    }
                </div>
            }
            <p className='mt-3'>{short_description.length > 200 }</p>
        </Link>
    );
};

export default CountryCard;
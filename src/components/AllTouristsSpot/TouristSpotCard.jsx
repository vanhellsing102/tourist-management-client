import React from 'react';
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { IoManSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const TouristSpotCard = ({spot}) => {

    const {image, tourists_spot_name, average_cost, travel_time, total_visitors_per_year, seasonality} = spot;

    return (
        <div className='py-5 px-3'>
            <div className='bg-[#083358] p-5 rounded-xl hover:scale-105' data-aos="fade-down-right" data-aos-duration="1000">
                <div className='flex justify-center items-center'>
                    <img className='border-2 border-[#0F4471] w-full h-60 rounded-xl' src={image} alt="" />
                </div>
                <div className='text-md font-light flex justify-between text-white mt-2'>
                    <p className=''>Spot Name: {tourists_spot_name}</p>
                    <p>Seasonality: {seasonality}</p>
                </div>
                <div className='text-md font-light flex justify-between text-white mt-2'>
                    <p className='flex items-center'>Cost:<MdOutlineAttachMoney></MdOutlineAttachMoney><span>{average_cost}</span></p>
                    <p className='flex items-center'>Travel Time:<IoTimeOutline></IoTimeOutline><span>{travel_time}</span></p>
                    <p className='flex gap-1 items-center'>Total Visitors<IoManSharp></IoManSharp><span>{total_visitors_per_year}</span></p>
                </div>
                <Link to={'/details'}><button className='w-full bg-[#2E89BA] hover:bg-[#A5BFDD] py-2 mt-2 rounded-xl duration-1000'>View Details</button></Link>
            </div>
        </div>
    );
};

export default TouristSpotCard;
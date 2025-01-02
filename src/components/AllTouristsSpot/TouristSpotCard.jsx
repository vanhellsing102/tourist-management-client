import React, { useContext } from 'react';
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { IoManSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { AuthContext } from '../../ContextProviders/ContextProviders';
AOS.init();

const TouristSpotCard = ({spot}) => {

    const {user} = useContext(AuthContext);
    const { _id,image, tourists_spot_name, average_cost, travel_time, total_visitors_per_year, seasonality} = spot;

    return (
        <div className='py-5 px-3'>
            <div className='bg-[#083358] p-5 rounded-xl' data-aos="fade-down-right" data-aos-duration="1000">
                <div className='flex justify-center items-center'>
                    <img className='border-2 border-[#0F4471] w-full h-60 rounded-xl hover:scale-105 duration-1000' src={image} alt="" />
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
                {
                    user ? <Link to={`/details/${_id}`}><button className='w-full bg-[#2E89BA] hover:bg-[#A5BFDD] hover:scale-105 duration-700 py-2 mt-2 rounded-xl'>View Details</button></Link>
                    : <Link to={'/login'}><button className='w-full bg-[#2E89BA] hover:bg-[#A5BFDD] hover:scale-105 duration-700 py-2 mt-2 rounded-xl'>Please Login First</button></Link>
                }
            </div>
        </div>
    );
};

export default TouristSpotCard;
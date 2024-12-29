import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaAlignJustify } from "react-icons/fa";
import { PiTextAlignJustifyFill } from "react-icons/pi";

const Navbar = () => {
    const [collapse, setCollapse] = useState(true);
    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/allTouristsSpot'}>All Tourists Spot</NavLink>
        <NavLink to={'/addTouristSpot'}>Add Tourist Spot</NavLink>
        <NavLink to={'/myList'}>My List</NavLink>
    </>
    return (
        <div className='px-4 md:px-7 lg:px-9 py-3 flex justify-between items-center bg-[#2E89BA]'>
            <div className=''>
                <h1 className='text-[#083358] text-4xl font-bold'>Journey <span className='text-[#FC3C3C]'>Horizon</span></h1>
            </div>
            <div className='lg:flex md:flex hidden gap-7 text-md font-semibold justify-between items-center'>
                {
                    links
                }
            </div>
            <div className='block md:hidden lg:hidden'>
                <button onClick={() => setCollapse(!collapse)}><FaAlignJustify /></button>
                {
                    collapse && <div className='flex-col flex bg-[#A5BFDD] absolute w-auto top-20 right-0 px-3 py-1'>
                        { links }
                    </div>
                    
                }
            </div>
        </div>
    );
};

export default Navbar;
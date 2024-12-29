import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <div className='bg-[#F9F6D8]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
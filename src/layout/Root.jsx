import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className={toggle ?" bg-black" : "bg-white"}>
            <Navbar setToggle={setToggle} toggle={toggle}></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
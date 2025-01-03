import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaAlignJustify } from "react-icons/fa";
import 'animate.css';
import { AuthContext } from '../../ContextProviders/ContextProviders';
import { Tooltip } from 'react-tooltip'
import { Bounce, toast } from 'react-toastify';

const Navbar = () => {

    const [collapse, setCollapse] = useState(false);
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then(result =>{
            toast.success('Logout Successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            }); 
        })
        .catch(error =>{
            toast.error(`${error}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        })  
    }
    
    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/allTouristSpot'}>All Tourists Spot</NavLink>
        {
            user && <NavLink to={'/addTouristSpot'}>Add Tourist Spot</NavLink>
        }
        {
            user && <NavLink to={'/list'}>My List</NavLink>
        }
        {
            user ? <button onClick={handleLogout} className='bg-[#0F4471] py-1 px-3 text-white rounded-md'>Logout</button> :
             <NavLink to={'/register'}><button className='bg-[#0F4471] py-1 px-3 text-white rounded-md'>Register</button></NavLink>
        }
    </>
    return (
        <div className='px-4 md:px-7 lg:px-9 py-3 flex justify-between items-center bg-[#2E89BA]'>
            <div className=''>
                <h1 className='text-[#083358] text-4xl font-bold animate__animated animate__bounce'>Journey <span className='text-[#FC3C3C]'>Horizon</span></h1>
            </div>
            <div className='lg:flex md:flex hidden gap-7 text-md font-semibold justify-between items-center'>
                {
                    links
                }
            </div>
            <div className='block md:hidden lg:hidden'>
                <button onClick={() => setCollapse(!collapse)}><FaAlignJustify /></button>
                {
                    collapse && <div className='flex-col flex bg-[#A5BFDD] absolute w-auto top-20 right-0 px-3 py-1 z-10'>
                        { links }
                    </div>
                    
                }
            </div>
            {
                user &&
                <div>
                {
                    user && <div className='flex gap-3'>
                        <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place='left'>
                            <img className="w-12 rounded-full border-[3px] border-[#FC3C3C]" src={user.photoURL} alt="" />
                        </div>
                        <Tooltip id="my-tooltip" />
                    </div>
                    
                }
                </div>
            }
        </div>
    );
};

export default Navbar;
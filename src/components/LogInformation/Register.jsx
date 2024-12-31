import React, { useState } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useContext } from 'react';
import { AuthContext } from '../../ContextProviders/ContextProviders';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {

    const [showPassword, setShowPassword] = useState(true);
    const { createUser} = useContext(AuthContext);
    const naviGate = useNavigate();
     
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        const expression = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!expression.test(password)){
            return toast.error('You need must 6 character and one Uppercase letter and one Lowercase letter', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });;
        }
        createUser(email, password)
        .then(result =>{
            const newUser = result.user;
            naviGate('/');
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            })
            toast.success('🦄 Registered Successfully!', {
                position: "top-center",
                autoClose: 5000,
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
                autoClose: 5000,
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
    return (
        <div className='lg:p-18 md:p-18 p-16 min-h-fit'>
            <h1 className='text-6xl font-semibold text-center text-black mb-4'>Register Now</h1>
            <form onSubmit={handleRegister} className='flex gap-5 flex-col  bg-[#0F4471] p-20 rounded-xl relative'>
                <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-2'>
                    <label className='label-text text-white'>
                        <span>Name</span>
                    </label>
                   <input type="text" name='name' className='w-full border-2 border-[#FC3C3C] outline-none px-3' />
                   <label className='label-text text-white'>
                        <span>Photo</span>
                    </label>
                   <input type="url" name='photo' className='w-full border-2 border-[#FC3C3C] outline-none px-3' />
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-2'>
                    <label className='label-text text-white'>
                        <span>Email</span>
                    </label>
                   <input type="email" name='email' className='w-full border-2 border-[#FC3C3C] outline-none px-3' />
                   <label className='label-text text-white'>
                        <span>Password</span>
                    </label>
                   <input type={ showPassword ? 'text' : 'password'} name='password' className='w-full border-2 border-[#FC3C3C] outline-none px-3' />
                   <button onClick={() =>setShowPassword(!showPassword)} className='absolute right-[90px] lg:top-[135px] md:top-[135px] top-[320px]'>{
                        showPassword ? <IoIosEye></IoIosEye> : <IoIosEyeOff></IoIosEyeOff>
                    }</button>
                </div>
                <div>
                    <p className='text-white'>Already have an accout ? <Link to={'/login'}><button className='font-bold text-[#FC3C3C]'>Login</button></Link></p>
                </div>
                <div>
                    <input type="submit" value={"Register"} className='w-full bg-[#FC3C3C] py-2 rounded-lg btn hover:bg-[#083358] hover:text-white text-2xl duration-1000' />
                </div>
            </form>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}/>
        </div>
    );
};

export default Register;
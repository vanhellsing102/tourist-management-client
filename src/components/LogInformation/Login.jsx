import React, { useContext, useState } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../ContextProviders/ContextProviders';

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const { logIn, googleLogin, twitterLogin, githubLogin } = useContext(AuthContext);
    const naviGate = useNavigate();

    const handleGithubLogin = () =>{
        githubLogin()
        .then(result =>{
            naviGate('/');
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            naviGate('/');
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error); 
        })
    }
    const handleTwitterLogin = () =>{
        twitterLogin()
        .then(result =>{
            naviGate('/');
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        logIn(email, password)
        .then(result =>{
            toast.success('Login Successfully!', {
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
            naviGate('/');
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
    return (
        <div className='lg:p-18 md:p-18 p-16 min-h-fit'>
            <h1 className='text-6xl font-semibold text-center text-black mb-4'>Login Now</h1>
            <form onSubmit={handleLogin} className='flex gap-5 flex-col  bg-[#0F4471] p-16 rounded-xl relative'>
                <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-2'>
                    <label className='label-text text-white'>
                        <span>Email</span>
                    </label>
                   <input type="email" name='email' className='w-full border-2 border-[#FC3C3C] outline-none px-3' />
                   <label className='label-text text-white'>
                        <span>Password</span>
                    </label>
                   <input type={ showPassword ? 'text' : 'password'} name='password' className='w-full border-2 border-[#FC3C3C] outline-none px-3' />
                   <button onClick={() =>setShowPassword(!showPassword)} className='absolute right-[80px] lg:top-[73px] md:top-[71px] top-[164px]'>{
                        showPassword ? <IoIosEye></IoIosEye> : <IoIosEyeOff q></IoIosEyeOff>
                    }</button>
                </div>
                <div>
                    <p className='text-white'>Don't have an accout ? <Link to={'/register'}><button className='font-bold text-[#FC3C3C]'>Register</button></Link></p>
                </div>
                <div>
                    <input type="submit" value={"Login"} className='w-full bg-[#FC3C3C] py-2 rounded-lg btn hover:bg-[#083358] hover:text-white text-2xl duration-1000' />
                </div>
            </form>
            <div className="divider divider-error"></div>
                <div className='flex justify-center gap-10 text-3xl text-orange-500'>
                    <button onClick={handleGithubLogin}><FaGithub></FaGithub></button>
                    <button onClick={handleGoogleLogin}><FaGoogle></FaGoogle></button>
                    <button onClick={handleTwitterLogin}><FaTwitter></FaTwitter></button>
                </div>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}/>
        </div>
    );
};

export default Login;
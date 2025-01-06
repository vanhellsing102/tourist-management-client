import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Typing = () => {
    return (
        <div className='text-center text-pink-500 mt-5 text-4xl py-2 font-bold'>
             <Typewriter cursor cursorBlinking delaySpeed={1000} deleteSpeed={200} loop={0} typeSpeed={200} words={['Zourney Horizon','Welcome to my website','React Simple website']}/>
        </div>
    );
};

export default Typing;
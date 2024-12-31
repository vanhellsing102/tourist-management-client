import React from 'react';
import img1 from '../../assets/recommanded/free-photo-of-tranquil-tram-station-in-mendoza-argentina.jpeg';
import img2 from '../../assets/recommanded/pexels-photo-237272.jpeg';
import img3 from '../../assets/recommanded/pexels-photo-5531582.jpeg';
import img4 from '../../assets/recommanded/skytrain-thailand-transportation-sky-50689.jpeg';

const RecommandedDay = () => {
    return (
        <div className='bg-[#083358] mt-14 mb-10 lg:px-20 px-10 pb-20'>
            <h1 className='text-5xl font-bold text-white text-center pt-7'>Recommanded <span className='text-[#FC3C3C]'>Day Tour</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-6 gap-40'>
                <div className='bg-white p-7 text-center hover:scale-105 hover:-rotate-6 duration-300'>
                    <h2 className='text-3xl font-semibold border-x-2 border-t-2 border-black'>Cox's Bazar</h2>
                    <p className='text-xl mb-5'>LUXURY CATAMARAN</p>
                    <img src={img2} alt="" className='rotate-6' />
                </div>
                <div className='bg-white p-7 text-center hover:scale-105 hover:-rotate-6 duration-300'>
                    <h2 className='text-3xl font-semibold border-x-2 border-t-2 border-black'>Kep</h2>
                    <p className='text-xl mb-5'>SPEED CATAMARAN</p>
                    <img src={img1} alt="" className='rotate-6' />
                </div>
                <div className='bg-white p-7 text-center hover:scale-105 hover:-rotate-6 duration-300'>
                    <h2 className='text-3xl font-semibold border-x-2 border-t-2 border-black'>Bangkok</h2>
                    <p className='text-xl mb-5'>PARTY CRUISE</p>
                    <img src={img4} alt="" className='rotate-6' />
                </div>
                <div className='bg-white p-7 text-center hover:scale-105 hover:-rotate-6 duration-300'>
                    <h2 className='text-3xl font-semibold border-x-2 border-t-2 border-black'>Kuala Lumpur</h2>
                    <p className='text-xl mb-5'>LUXURY CATAMARAN</p>
                    <img src={img3} alt="" className='rotate-6' />
                </div>
            </div>
        </div>
    );
};

export default RecommandedDay;
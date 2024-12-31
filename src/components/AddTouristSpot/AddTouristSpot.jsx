import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const AddTouristSpot = () => {
    const handleAddTouristSpot = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const image = form.get('image');
        const name = form.get('name');
        const countryName = form.get('country-name');
        const location = form.get('location');
        const seasonality = form.get('seasonality');
        const averageCost = form.get('cost');
        const travelTime = form.get('time');
        const visit = form.get('visit');
        const description = form.get('description');
        const userName = form.get('user');
        const userEmail = form.get('email');

        const spot = { image: image, tourists_spot_name: name, country_name: countryName, location: location, short_description: description, average_cost: averageCost, seasonality: seasonality, travel_time: travelTime, total_visitors_per_year: visit, user_name: userName, user_email: userEmail };
        fetch('http://localhost:5000/spots', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(spot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Added Successfully!",
                    icon: "success",
                    draggable: true
                  });
            }
        })
    }
    return (
        <div className='px-10 pb-10'>
            <h1 className='text-5xl font-bold text-center py-3'>Add Tourist Spot</h1>
            <form onSubmit={handleAddTouristSpot} className='px-5 lg:px-10 md:px-7 bg-[#083358] rounded-xl pb-3'>
                {/* row 1 */}
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-2 lg:gap-12 md:gap-2'>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Image</span>
                        </label>
                        <input type="url" name='image' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                    <div className='flex flex-col w-full'>
                    <label className='label'>
                        <span className='font-medium text-white'>Tourist Spot Name</span>
                    </label>
                    <input type="text" name='name' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                </div>
                {/* row 2 */}
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-2 lg:gap-12 md:gap-2'>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Country Name</span>
                        </label>
                        <input type="text" name='country-name' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className='label'>
                            <span className='font-medium text-white'>Location</span>
                        </label>
                        <input type="text" name='location' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                </div>
                {/* row 3 */}
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-2 lg:gap-12 md:gap-2'>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Seasonality</span>
                        </label>
                        <input type="text" name='seasonality' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Average Cost</span>
                        </label>
                        <input type="number" name='cost' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                </div>
                {/* row 4 */}
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-2 lg:gap-12 md:gap-2'>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Travel Time</span>
                        </label>
                        <input type="time" name='time' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Total Visit Per Year</span>
                        </label>
                        <input type="number" name='visit' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                </div>
                {/* row 5 */}
                <div className='w-full'>
                    <label className='label'> 
                        <span className='text-white font-medium'>Short Description</span>
                    </label>
                    <textarea name="description" id="" className='w-full h-20 rounded-xl px-3 outline-slate-600 py-2 border-2 border-[#2E89BA]'></textarea>
                </div>
                {/* row 6 */}
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-2 lg:gap-12 md:gap-2'>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>User Name</span>
                        </label>
                        <input type="text" name='user' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>User Email</span>
                        </label>
                        <input type="email" name='email' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                </div>
                {/* row 7 */}
                <div className='flex justify-center items-center'>
                    <input type="submit" value={'Add Tourist Spot'} className='text-center text-white w-1/2 bg-[#0F4471] py-3 mt-2 btn hover:bg-[#FC3C3C] duration-1000 text-md font-medium' />
                </div>
            </form>
        </div>
    );
};

export default AddTouristSpot;
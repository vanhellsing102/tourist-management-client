import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    
    const spot = useLoaderData();
    const { _id,image, tourists_spot_name, country_name, location, seasonality, average_cost, travel_time, total_visitors_per_year, short_description, user_name, user_email } = spot;
    
    const handleUpdate = e =>{
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

        fetch(`http://localhost:5000/spots/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(spot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data.matchedCount);
            if (data.matchedCount > 0) {
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                      confirmButton: "btn btn-success",
                      cancelButton: "btn btn-danger"
                    },
                    buttonsStyling: false
                  });
                  swalWithBootstrapButtons.fire({
                    title: "Are you sure?",
                    text: "You will want to be updated this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, Update it!",
                    cancelButtonText: "No, cancel!",
                    reverseButtons: true
                  }).then((result) => {
                    if (result.isConfirmed) {
                      swalWithBootstrapButtons.fire({
                        title: "Updated!",
                        text: "Your spot has been updated.",
                        icon: "success"
                      });
                    } else if (
                      /* Read more about handling dismissals below */
                      result.dismiss === Swal.DismissReason.cancel
                    ) {
                      swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary spot is safe :)",
                        icon: "error"
                      });
                    }
                  });
            }
        }) 
    }
    
    return (
        <div>
            <div className='px-10 pb-10'>
            <h1 className='text-5xl font-bold text-center py-3'>Update Tourist Spot</h1>
            <form onSubmit={handleUpdate} className='px-5 lg:px-10 md:px-7 bg-[#083358] rounded-xl pb-3'>
                {/* row 1 */}
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-2 lg:gap-12 md:gap-2'>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Image</span>
                        </label>
                        <input defaultValue={image} type="url" name='image' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                    <div className='flex flex-col w-full'>
                    <label className='label'>
                        <span className='font-medium text-white'>Tourist Spot Name</span>
                    </label>
                    <input defaultValue={tourists_spot_name} type="text" name='name' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                </div>
                {/* row 2 */}
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-2 lg:gap-12 md:gap-2'>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Country Name</span>
                        </label>
                        <input defaultValue={country_name} type="text" name='country-name' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className='label'>
                            <span className='font-medium text-white'>Location</span>
                        </label>
                        <input defaultValue={location} type="text" name='location' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                </div>
                {/* row 3 */}
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-2 lg:gap-12 md:gap-2'>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Seasonality</span>
                        </label>
                        <input defaultValue={seasonality} type="text" name='seasonality' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Average Cost</span>
                        </label>
                        <input defaultValue={average_cost} type="number" name='cost' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                </div>
                {/* row 4 */}
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-2 lg:gap-12 md:gap-2'>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Travel Time</span>
                        </label>
                        <input defaultValue={travel_time}  type="time" name='time' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>Total Visit Per Year</span>
                        </label>
                        <input defaultValue={total_visitors_per_year} type="number" name='visit' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                </div>
                {/* row 5 */}
                <div className='w-full'>
                    <label className='label'> 
                        <span className='text-white font-medium'>Short Description</span>
                    </label>
                    <textarea defaultValue={short_description} name="description" id="" className='w-full h-20 rounded-xl px-3 outline-slate-600 py-2 border-2 border-[#2E89BA]'></textarea>
                </div>
                {/* row 6 */}
                <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-2 lg:gap-12 md:gap-2'>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>User Name</span>
                        </label>
                        <input defaultValue={user_name} required type="text" name='user' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='label'>
                            <span className='font-medium text-white'>User Email</span>
                        </label>
                        <input defaultValue={user_email} required type="email" name='email' className='w-full outline-slate-600 py-2 border-2 border-[#2E89BA] rounded-xl px-3' />
                    </div>
                </div>
                {/* row 7 */}
                <div className='flex justify-center items-center'>
                    <input type="submit" value={'Update Tourist Spot'} className='text-center text-white w-1/2 bg-[#0F4471] py-3 mt-2 btn hover:bg-[#FC3C3C] duration-1000 text-md font-medium' />
                </div>
            </form>
        </div>
        </div>
    );
};

export default Update;
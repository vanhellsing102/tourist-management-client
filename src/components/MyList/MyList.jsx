import React, { useContext, useState } from 'react';
import { AuthContext } from '../../ContextProviders/ContextProviders';
import { data, Link, useLoaderData } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { RiUpload2Fill } from "react-icons/ri";
import Swal from 'sweetalert2';

const MyList = () => {

    const { user } = useContext(AuthContext);
    const email = user.email;

    const loadedSpot = useLoaderData();
    const remainingSpot = loadedSpot.filter(spot => spot.user_email === email);
    const [deletedSpot, setDeletedSpot] = useState(remainingSpot);

    const handleDelete = id =>{    
        fetch(`http://localhost:5000/spots/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            Swal.fire({
                title: "Are you sure?",
                text: "You will want to detete this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your tourist spot has been deleted.",
                    icon: "success"
                  });
                  const exitSpot = deletedSpot.filter(spot => spot._id !== id);
                  setDeletedSpot(exitSpot);
                }
              });
        })
        
    }
    return (
        <div className='mt-10 px-3 md:px-7 lg:px-14'>
            <div>
                {
                    deletedSpot.map(spot => <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center gap-y-4 pb-3'>
                        <div className='flex flex-col'>
                            <th>Tourist Spot Name</th>
                            <td>{spot.tourists_spot_name}</td>
                        </div>
                        <div className='flex flex-col'>
                            <th>Country Name</th>
                            <td>{spot.country_name}</td>
                        </div>
                        <div className='flex flex-col'>
                            <th>Seasonality</th>
                            <td>{spot.seasonality}</td>
                        </div>
                        <div className='flex flex-col'>
                            <th>Average Cost</th>
                            <td>{spot.average_cost}</td>
                        </div>
                        <div className='flex flex-col'>
                            <th></th>
                            <td><Link to={`/update/${spot._id}`}><RiUpload2Fill className='text-xl'></RiUpload2Fill></Link></td>
                        </div>
                        <div className='flex flex-col'>
                            <th></th>
                            <td><button onClick={() => handleDelete(spot._id)}><MdDeleteForever className='text-xl'></MdDeleteForever></button></td>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
    // return (
    //     <div className='mt-10 px-3 md:px-7 lg:px-14'>
    //         <div className="overflow-x-auto">
    //             <table className="table">
    //                 <thead className='text-[16px] text-black'>
    //                     <tr>
    //                         <th></th>
    //                         <th>Tourist Spot Name</th>
    //                         <th>Country Name</th>
    //                         <th>Seasonality</th>
    //                         <th>Average Cost</th>
    //                         <th></th>
    //                         <th></th>
    //                     </tr>
    //                 </thead>
    //                 {
    //                     deletedSpot.map(spot => 
    //                             <tbody className='text-sm font-medium text-[#0F4471'>
    //                             <tr className='hover'>
    //                                 <th>1</th>
    //                                 <td>{spot.tourists_spot_name}</td>
    //                                 <td>{spot.country_name}</td>
    //                                 <td>{spot.seasonality}</td>
    //                                 <td>{spot.average_cost}</td>
    //                                 <td><Link to={`/update/${spot._id}`}><RiUpload2Fill className='text-xl'></RiUpload2Fill></Link></td>
    //                                 <td><button onClick={() => handleDelete(spot._id)}><MdDeleteForever className='text-xl'></MdDeleteForever></button></td>
    //                             </tr>
    //                         </tbody>
    //                     )
    //                 }
    //             </table>
    //         </div>
    //     </div>
    // );
};

export default MyList;
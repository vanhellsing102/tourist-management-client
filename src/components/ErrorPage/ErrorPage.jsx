import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const err = useRouteError();
    // console.log(error.error, error.status, error.statusText);
    const errorMessage = err.data;
    const errorStatus = err.status;
    const errorStatusText = err.statusText;
    console.log(err.data);
    
    
    return (
        <div className='text-[#083358] flex flex-col justify-center items-center min-h-screen'>
            <h3 className='text-3xl tracking-[10px]'>{errorMessage}</h3>
            <h2 className='text-5xl font-bold mt-3 text-red-700'>{errorStatus} !!!</h2>
            <h3 className='text-3xl tracking-[20px] mt-3'>{errorStatusText}</h3>
        </div>
    );
};

export default ErrorPage;
import React, { useContext } from 'react';
import { AuthContext } from '../ContextProviders/ContextProviders';
import { Vortex } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { user, loading} = useContext(AuthContext);
    if(loading){
        return <div className='flex justify-center h-screen items-center'><Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;
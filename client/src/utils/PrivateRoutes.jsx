import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';


const PrivateRoutes = () => {
    const { user } = useContext(AuthContext)

    return (
        user.accessToken
            ? <Outlet />
            : <Navigate to="/login" />
    )
}

export default PrivateRoutes;
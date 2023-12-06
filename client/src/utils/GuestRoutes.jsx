import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';


const AuthRoutes = () => {
    const { user } = useContext(AuthContext)

    return (
        !user.accessToken
            ? <Outlet />
            : <Navigate to="/" />
    )
}

export default AuthRoutes;
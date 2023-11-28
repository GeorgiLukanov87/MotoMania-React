import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const PrivateRoutes = () => {
    const { user } = useContext(AuthContext)

    return (
        user.accessToken
            ? <Outlet />
            : <Navigate to="/login" />
    )
}

export default PrivateRoutes;
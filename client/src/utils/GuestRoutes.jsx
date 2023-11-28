import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const AuthRoutes = () => {
    const { user } = useContext(AuthContext)

    return (
        !user.accessToken
            ? <Outlet />
            : <Navigate to="/" />
    )
}

export default AuthRoutes;
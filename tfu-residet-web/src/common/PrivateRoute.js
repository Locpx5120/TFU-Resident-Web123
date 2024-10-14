import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = () => {
    const isAuthenticated = Cookies.get("accessToken") || true;
    return !!isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
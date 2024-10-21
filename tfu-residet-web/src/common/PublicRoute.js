import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const PublicRoute = () => {
    const isAuthenticated = Cookies.get("accessToken");
    const isNew = localStorage.getItem('isNew') || false;
    return !isNew && !!isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
    const isAuthenticated = true;
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
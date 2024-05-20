import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstance from './api';
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ element }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuthenticated(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem('refresh_token');
        try {
            const res = await axiosInstance.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem('access_token', res.data.access);
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false)
            }
        } catch (error) {
            console.log(error);
            setIsAuthenticated(false);
        }
    };


    const auth = async () => {
        const access_token = localStorage.getItem('access_token');
        if (!access_token) {
            setIsAuthenticated(false);
            return;
        }
        const decoded = jwtDecode(access_token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthenticated(true);
        }
    };

    if (isAuthenticated=== null) {
        return <div>Loading...</div>;
    }


  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;

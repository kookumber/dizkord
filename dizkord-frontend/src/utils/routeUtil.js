import React from "react";
import {
    Outlet, 
    Navigate,
} from "react-router-dom"


export const AuthRoutes = () => {
    const user = localStorage.getItem('user')
    return (
        !user ? <Outlet /> : <Navigate to="/conversations/@me"/>
    )
}

export const ProtectedRoutes = () => {
    const user = localStorage.getItem('user')
    return (
        user ? <Outlet /> : <Navigate to="/login" />
    )
}


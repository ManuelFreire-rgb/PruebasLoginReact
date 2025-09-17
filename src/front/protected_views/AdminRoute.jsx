import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const role = localStorage.getItem("Administrador");

    if (!role) {
        return <Navigate to="/" />;
    }

    return children;
};

export default AdminRoute;
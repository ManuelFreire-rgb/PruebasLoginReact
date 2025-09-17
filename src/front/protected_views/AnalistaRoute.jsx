import React from "react";
import { Navigate } from "react-router-dom";

const AnalistaRoute = ({ children }) => {
    const role = localStorage.getItem("Analista");

    if (!role) {
        return <Navigate to="/" />;
    }

    return children;
};

export default AnalistaRoute;
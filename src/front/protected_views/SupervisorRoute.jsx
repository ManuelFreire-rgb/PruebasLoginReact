import React from "react";
import { Navigate } from "react-router-dom";

const SupervisorRoute = ({ children }) => {
    const role = localStorage.getItem("Supervisor");

    if (!role) {
        return <Navigate to="/" />;
    }

    return children;
};

export default SupervisorRoute;

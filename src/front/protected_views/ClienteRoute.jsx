import React from "react";
import { Navigate } from "react-router-dom";

const ClienteRoute = ({ children }) => {
    const role = localStorage.getItem("Cliente");

    if (!role) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ClienteRoute;

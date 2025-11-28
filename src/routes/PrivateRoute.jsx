// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const authed = isAuthenticated();

    if (!authed) {
        // Chưa đăng nhập → đá về /login, nhớ vị trí cũ nếu sau này muốn dùng
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;

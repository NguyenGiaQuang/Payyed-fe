// src/routes/PrivateRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import api from "../api/client";
import { clearAuth } from "../utils/auth";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const [checking, setChecking] = useState(true);
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        let cancelled = false;

        const checkAuth = async () => {
            try {
                // Gọi /api/auth/me – nếu cookie hợp lệ thì sẽ 200
                await api.get("/api/auth/me");
                if (!cancelled) {
                    setAuthed(true);
                    setChecking(false);
                }
            } catch (err) {
                // Bị 401/403 -> coi như chưa đăng nhập
                console.warn("Auth check failed", err?.response?.status);
                clearAuth(); // nếu bạn có lưu gì trong localStorage thì dọn dẹp
                if (!cancelled) {
                    setAuthed(false);
                    setChecking(false);
                }
            }
        };

        checkAuth();

        return () => {
            cancelled = true;
        };
    }, [location.pathname]);

    // Trong lúc đang check với server -> hiển thị loading
    if (checking) {
        return <div>Đang kiểm tra phiên đăng nhập...</div>;
    }

    // Nếu không authed -> đá về login
    if (!authed) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    // Ngược lại -> render children
    return children;
};

export default PrivateRoute;

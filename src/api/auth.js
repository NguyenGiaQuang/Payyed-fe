// src/api/auth.js
import api from "./client";

export const register = (data) => {
    // data: { email, password, full_name }
    return api.post("/api/auth/register", data);
};

export const login = (data) => {
    // data: { email, password }
    return api.post("/api/auth/login", data);
};

export const changeEmail = (data) => {
    // data = { current_password, new_email }
    return api.patch("/api/auth/email", data);
};

export const changePassword = (data) => {
    // data = { current_password, new_password, confirm_password }
    return api.patch("/api/auth/password", data);
};

export const getMe = () => api.get("/api/auth/me");

export const logout = () => api.post("/api/auth/logout");
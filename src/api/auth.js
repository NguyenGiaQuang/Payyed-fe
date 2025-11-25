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

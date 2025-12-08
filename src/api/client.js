// src/api/client.js
import axios from "axios";
// Nếu muốn xử lý 401 thì có thể import clearAuth sau:
// import { clearAuth } from "../utils/auth";

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true, // ⬅️ bắt buộc nếu dùng cookie
});

function getCsrfTokenFromCookie() {
    const match = document.cookie.match(/(?:^|;\s*)csrf_token=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : null;
}

api.interceptors.request.use(
    (config) => {
        const method = (config.method || "get").toLowerCase();
        const safe = ["get", "head", "options"];

        // Với method nguy hiểm -> đính kèm CSRF token
        if (!safe.includes(method)) {
            const csrf = getCsrfTokenFromCookie();
            if (csrf) {
                config.headers["X-CSRF-Token"] = csrf;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status;
        if (status === 401) {
            clearAuth(); // xoá flag login (localStorage)
            if (
                window.location.pathname !== "/login" &&
                window.location.pathname !== "/signup"
            ) {
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default api;

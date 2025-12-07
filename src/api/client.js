// src/api/client.js
import axios from "axios";
// Nếu muốn xử lý 401 thì có thể import clearAuth sau:
// import { clearAuth } from "../utils/auth";

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true, // ⬅️ bắt buộc nếu dùng cookie
});

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

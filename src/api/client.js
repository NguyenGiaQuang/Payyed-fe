// src/api/client.js
import axios from "axios";
import { getToken, logout } from "../utils/auth";

const api = axios.create({
    baseURL: "http://localhost:5000",
    // Nếu dùng cookie thay vì Bearer token thì mới cần:
    // withCredentials: true,
});

// ====== REQUEST INTERCEPTOR ======
api.interceptors.request.use(
    (config) => {
        const token = getToken();

        // Nếu có token thì gắn vào header Authorization
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Nếu muốn bỏ qua cho 1 số endpoint (VD: login / register) thì cũng không sao,
        // backend thường sẽ ignore token dư thừa, nên mình để chung cho đơn giản.

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// ====== (TUỲ CHỌN) RESPONSE INTERCEPTOR CHO 401 ======
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token hết hạn / không hợp lệ → logout & chuyển về login
            logout();
            // tránh loop vô hạn: chỉ redirect nếu hiện không ở trang login/signup
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

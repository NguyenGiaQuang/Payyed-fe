// src/utils/auth.js

export const getToken = () => {
    return localStorage.getItem("authToken");
};

export const isAuthenticated = () => {
    return !!getToken();
};

export const logout = () => {
    try {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser"); // nếu sau này bạn lưu thêm thông tin user
    } catch (e) {
        console.error("Lỗi khi xoá token:", e);
    }
};

// Lưu token vào localStorage và tuỳ chọn lưu thêm thông tin user
export const saveToken = (token, user = null) => {
    try {
        localStorage.setItem("authToken", token);
        if (user) {
            // lưu dạng JSON để có thể đọc lại sau
            localStorage.setItem("authUser", JSON.stringify(user));
        }
    } catch (e) {
        console.error("Lỗi khi lưu token:", e);
    }
};

export const getAuthUser = () => {
    try {
        const raw = localStorage.getItem("authUser");
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
};

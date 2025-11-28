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

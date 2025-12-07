// src/utils/auth.js

const AUTH_KEY = "bank_logged_in";
const USER_KEY = "bank_user"; // optional – nếu bạn muốn lưu info user

// Gọi sau khi login thành công (+ đã gọi /me)
export function setAuth(userData) {
    localStorage.setItem(AUTH_KEY, "1");

    if (userData) {
        try {
            localStorage.setItem(USER_KEY, JSON.stringify(userData));
        } catch (e) {
            console.error("Save user failed", e);
        }
    }
}

export function clearAuth() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY);
}

export function isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === "1";
}

export function getUser() {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

// src/api/account.js
import api from "./client"; // dùng chung axios instance có interceptor + token

// Lấy danh sách tài khoản
export const getAccounts = async () => {
    const res = await api.get("/api/accounts");
    // Backend trả { accounts: [...] }
    return res.data.accounts || res.data;
};

// Đặt tài khoản mặc định
export const setDefaultAccount = async (accountId) => {
    const res = await api.patch("/api/accounts/default", {
        account_id: accountId,
    });
    return res.data;
};

// Tạo tài khoản mới – chỉ cần account_no
export const createAccount = async ({ customer_id, account_no }) => {
    const res = await api.post("/api/accounts", {
        customer_id,
        account_no,
        type: "CURRENT",
        currency: "VND",
    });
    return res.data;
};
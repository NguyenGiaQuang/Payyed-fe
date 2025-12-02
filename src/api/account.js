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

export const getDefaultAccount = async () => {
    const res = await api.get("/api/accounts/default");
    // Có thể trả { account: {...} } hoặc trả thẳng {...}
    return res.data.account || res.data;
};

// ===== HOẠT ĐỘNG GẦN ĐÂY CỦA TÀI KHOẢN =====
export const getRecentTransactions = async ({ accountId, limit = 6 }) => {
    const res = await api.post("/api/accounts/recent", {
        account_id: accountId,
        limit,
    });
    // Backend trả { account, limit, items: [...] }
    return res.data;
};

export const getAccountStatement = async ({ accountId, from, to }) => {
    const res = await api.post("/api/accounts/statement", {
        account_id: accountId,
        from,
        to,
    });
    // Backend trả: { account, filter, opening_balance, closing_balance, items: [...] }
    return res.data;
};

export const requestCashDeposit = async ({ accountId, amount, description }) => {
    const res = await api.post("/api/cash-transactions/request", {
        account_id: accountId,
        type: "DEPOSIT",
        amount, // số, ví dụ 500000
        description,
    });
    // Backend trả object request: { id, customer_id, account_id, type, amount, status, ... }
    return res.data;
};
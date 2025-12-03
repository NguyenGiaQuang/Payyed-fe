// src/api/cashTransactions.js
import api from "./client";

// Lấy danh sách giao dịch tiền mặt (nạp/rút)
export const getTransactions = (params) => {
    // params optional for filtering/pagination
    return api.get("/api/cash-transactions", { params });
};

// Duyệt hoặc từ chối giao dịch tiền mặt
// payload = { transaction_id, approve: true|false, reason }
export const approveTransaction = (payload) => {
    return api.patch("/api/cash-transactions/approve", payload);
};

export default { getTransactions, approveTransaction };

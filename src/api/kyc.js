// src/api/kyc.js
import api from "./client";

// Lấy hồ sơ KYC của chính user đang đăng nhập
export const getMyKyc = () => {
    return api.get("/api/kyc/me");
};

// Gửi / cập nhật hồ sơ KYC
// payload = { customer_id, documents: [{ doc_type, url }, ...] }
export const submitKyc = (payload) => {
    return api.post("/api/customers/kyc", payload);
};

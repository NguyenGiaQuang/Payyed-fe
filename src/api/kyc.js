// src/api/kyc.js
import api from "./client";

// Lấy danh sách hồ sơ KYC đang chờ duyệt (admin)
export const getPending = () => api.get("/api/kyc/pending");

// Duyệt hoặc từ chối hồ sơ KYC
// data: { customer_id, status: 'APPROVED'|'REJECTED' }
export const reviewKyc = (data) => api.patch("/api/kyc/approve", data);

// Lấy hồ sơ KYC của chính user đang đăng nhập
export const getMyKyc = () => api.get("/api/kyc/me");

// Gửi / cập nhật hồ sơ KYC (customer)
// payload = { customer_id, documents: [{ doc_type, url }, ...] }
export const submitKyc = (payload) => api.post("/api/customers/kyc", payload);

export default { getPending, reviewKyc, getMyKyc, submitKyc };

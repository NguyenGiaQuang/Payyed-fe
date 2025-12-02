// src/api/otp.js
import api from "./client";

// Gửi yêu cầu OTP
export const requestOtp = async ({ channel, purpose, email }) => {
    const res = await api.post("/api/otp/request", {
        channel,  // "EMAIL"
        purpose,  // "TRANSFER"
        email,
    });
    // { request_id, purpose, channel, expires_in, otp_debug? }
    return res.data;
};

// Xác thực OTP
export const verifyOtp = async ({ request_id, otp_code }) => {
    const res = await api.post("/api/otp/verify", {
        request_id,
        otp_code,
    });
    // { ok: true, purpose, channel }
    return res.data;
};

// src/api/upload.js
import api from "./client";

// Upload 1 file KYC (CCCD_FRONT / SELFIE)
// Backend của bạn trả về { url: "http://localhost:5000/uploads/kyc/....png" }
export const uploadKycFile = (file, docType) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("doc_type", docType);

    return api.post("/api/uploads/kyc", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

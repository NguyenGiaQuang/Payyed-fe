// src/api/ledger.js
import api from "./client"; // dùng chung axios instance + token :contentReference[oaicite:0]{index=0}

// Lấy số dư tổng hợp theo từng GL Account
export const getLedgerBalance = async () => {
    const res = await api.get("/api/ledger/balance");
    // backend trả mảng [{ gl_code, gl_name, debit, credit, ... }]
    return res.data;
};

export default { getLedgerBalance };

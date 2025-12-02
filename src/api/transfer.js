// src/api/transfer.js
import api from "./client";

// Tính phí chuyển tiền nội bộ
export const calcInternalTransferFee = async (amount) => {
    const res = await api.post("/api/transfers/fee", {
        type: "INTERNAL",
        amount, // số, ví dụ 7000000
    });
    // { type, amount, fee, total_debit }
    return res.data;
};

// Thực hiện chuyển tiền nội bộ
export const createInternalTransfer = async ({
    from_account_no,
    to_account_no,
    amount,
    fee,
    description,
    idem_key,
}) => {
    const res = await api.post("/api/transfers", {
        from_account_no,
        to_account_no,
        amount,
        fee,
        description,
        idem_key,
    });
    // { id, from_account_id, to_account_id, amount, fee, status, ... }
    return res.data;
};

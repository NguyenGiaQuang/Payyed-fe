// src/api/journals.js (SAU KHI SỬA)
import api from "./client";

export const getJournals = (params) => {
    return api.get("/api/journals", { params });
};

// Gửi entry_id dạng query ?entry_id=...
export const getJournalDetail = (entry_id) => {
    return api.get("/api/journals/detail", {
        params: { entry_id },
    });
};

export default { getJournals, getJournalDetail };

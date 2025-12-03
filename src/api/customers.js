// src/api/customers.js
import api from "./client";

export const getCustomers = (params) => {
    return api.get("/api/customers", { params });
};

export default { getCustomers };

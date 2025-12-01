// src/api/customer.js
import api from "./client";

// Cập nhật thông tin khách hàng hiện tại
export const updateCustomer = (data) => {
    // data = { full_name, dob, national_id, address }
    return api.post("/api/customers", data);
};

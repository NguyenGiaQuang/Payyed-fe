// src/api/notification.js
import api from "./client";

// Lấy danh sách thông báo
export const getNotifications = async () => {
    const res = await api.get("/api/notifications");
    return res.data; // mảng [{id, title, body, is_read, created_at, ...}]
};

// Đánh dấu đã đọc
export const markNotificationRead = async (notificationId) => {
    const res = await api.patch("/api/notifications/read", {
        notification_id: notificationId,
    });
    return res.data;
};

// Xoá thông báo
export const deleteNotification = async (notificationId) => {
    const res = await api.delete("/api/notifications", {
        data: { notification_id: notificationId },
    });
    return res.data;
};

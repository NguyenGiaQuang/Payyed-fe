// src/pages/NotificationsPage.jsx
import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import Footer from "../components/layout/Footer.jsx";
import {
    getNotifications,
    markNotificationRead,
    deleteNotification,
} from "../api/notification";

const formatDateTime = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);

    // số lượng thông báo hiển thị
    const [visibleCount, setVisibleCount] = useState(10);

    // ====== LOAD LIST ======
    const loadNotifications = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await getNotifications();
            setNotifications(Array.isArray(data) ? data : []);
            setVisibleCount(10); // reset về 10 mỗi lần load lại
        } catch (err) {
            console.error("Lỗi tải thông báo:", err);
            setError("Không thể tải danh sách thông báo.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadNotifications();
    }, []);

    // ====== OPEN DETAIL ======
    const handleOpenDetail = async (notification) => {
        setSelected(notification);
        setShowModal(true);

        if (!notification.is_read) {
            try {
                setModalLoading(true);
                await markNotificationRead(notification.id);

                setNotifications((prev) =>
                    prev.map((n) =>
                        n.id === notification.id ? { ...n, is_read: true } : n
                    )
                );
                setSelected((prev) =>
                    prev ? { ...prev, is_read: true } : prev
                );
            } catch (err) {
                console.error("Lỗi đánh dấu đã đọc:", err);
            } finally {
                setModalLoading(false);
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelected(null);
        setModalLoading(false);
    };

    // ====== DELETE ======
    const handleDelete = async () => {
        if (!selected) return;
        const id = selected.id;

        if (!window.confirm("Bạn chắc chắn muốn xoá thông báo này?")) return;

        try {
            setModalLoading(true);
            await deleteNotification(id);
            setNotifications((prev) => prev.filter((n) => n.id !== id));
            handleCloseModal();
        } catch (err) {
            console.error("Lỗi xoá thông báo:", err);
            alert("Không thể xoá thông báo. Vui lòng thử lại.");
        } finally {
            setModalLoading(false);
        }
    };

    // ====== LOAD MORE ======
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 10);
    };

    const visibleNotifications = notifications.slice(0, visibleCount);
    const hasMore = visibleCount < notifications.length;

    return (
        <div id="main-wrapper">
            <DashboardHeader active="notifications" />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <DashboardSidebar />

                        <div className="col-lg-9">
                            <div className="bg-white shadow-sm rounded py-4 mb-4">
                                <h3 className="text-5 fw-400 px-4 mb-4">
                                    Thông báo
                                </h3>
                                <hr className="mb-0" />

                                <div className="notifications-list">
                                    {loading && (
                                        <p className="px-4 py-3 mb-0">
                                            Đang tải thông báo...
                                        </p>
                                    )}

                                    {!loading && error && (
                                        <p className="px-4 py-3 text-danger mb-0">
                                            {error}
                                        </p>
                                    )}

                                    {!loading &&
                                        !error &&
                                        notifications.length === 0 && (
                                            <p className="px-4 py-3 mb-0">
                                                Hiện chưa có thông báo nào.
                                            </p>
                                        )}

                                    {!loading &&
                                        !error &&
                                        visibleNotifications.map((n) => (
                                            <div
                                                key={n.id}
                                                className={`notifications-item px-4 py-3 ${n.is_read ? "" : "unread"
                                                    }`}
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    handleOpenDetail(n)
                                                }
                                            >
                                                <div className="row align-items-center flex-row">
                                                    <div className="col-2 col-sm-1 text-center text-8 icon-bell">
                                                        <i className="far fa-bell" />
                                                    </div>
                                                    <div className="col col-sm-10">
                                                        <h4 className="text-3 mb-1">
                                                            {n.title}
                                                        </h4>
                                                        <span className="text-muted">
                                                            {formatDateTime(
                                                                n.created_at
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="col-1 text-end text-muted">
                                                        <i className="fas fa-chevron-right" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>

                                {/* Nút Tải thêm */}
                                {!loading && !error && hasMore && (
                                    <div className="text-center mt-4">
                                        <button
                                            className="btn btn-sm btn-outline-secondary shadow-none"
                                            onClick={handleLoadMore}
                                        >
                                            Tải thêm
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL CHI TIẾT */}
            {selected && (
                <div
                    className={`modal fade ${showModal ? "show d-block" : ""
                        }`}
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden={!showModal}
                    style={
                        showModal
                            ? { backgroundColor: "rgba(0,0,0,0.5)" }
                            : {}
                    }
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title d-flex align-items-center fw-400">
                                    <span className="text-6 me-2">
                                        <i className="far fa-bell" />
                                    </span>
                                    Chi tiết thông báo
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal}
                                    aria-label="Đóng"
                                />
                            </div>

                            <div className="modal-body p-4 text-3">
                                <h4 className="text-5">{selected.title}</h4>
                                <p className="text-muted">
                                    {formatDateTime(selected.created_at)}
                                </p>
                                <p>{selected.body}</p>
                            </div>

                            <div className="modal-footer">
                                <div className="btn-group m-0 w-100 row">
                                    <button
                                        type="button"
                                        className="btn btn-secondary shadow-none col-6"
                                        disabled={
                                            modalLoading || selected.is_read
                                        }
                                        onClick={() =>
                                            !selected.is_read &&
                                            handleOpenDetail(selected)
                                        }
                                    >
                                        <span className="me-1">
                                            <i className="far fa-eye-slash" />
                                        </span>
                                        {selected.is_read
                                            ? "Đã đọc"
                                            : "Đánh dấu đã đọc"}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger shadow-none col-6"
                                        disabled={modalLoading}
                                        onClick={handleDelete}
                                    >
                                        <span className="me-1">
                                            <i className="far fa-trash-alt" />
                                        </span>
                                        Xoá thông báo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default NotificationsPage;

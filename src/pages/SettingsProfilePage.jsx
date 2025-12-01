// src/pages/SettingsProfilePage.jsx
import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SettingsSecondNavigation from "../components/navigation/SettingsSecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";
import { getMe } from "../api/auth";
import { updateCustomer } from "../api/customer";

// Hiển thị "2002-05-20" -> "20-05-2002"
const formatDisplayDate = (iso) => {
    if (!iso) return "";
    const [year, month, day] = iso.split("-");
    return `${day}-${month}-${year}`;
};

const SettingsProfilePage = () => {
    const [data, setData] = useState({
        user: null,
        customer: null,
        roles: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // --- state cho modal chỉnh sửa thông tin cá nhân ---
    const [showEditModal, setShowEditModal] = useState(false);
    const [editForm, setEditForm] = useState({
        full_name: "",
        dob: "",
        national_id: "",
        address: "",
    });
    const [editSaving, setEditSaving] = useState(false);
    const [editError, setEditError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const res = await getMe();
                setData(res.data); // { user, customer, roles }
            } catch (err) {
                console.error(err);
                const msg =
                    err.response?.data?.message ||
                    err.response?.data?.error ||
                    "Không tải được thông tin hồ sơ.";
                setError(msg);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const { user, customer } = data;
    const fullName = customer?.full_name || "—";
    const dobDisplay = customer?.dob ? formatDisplayDate(customer.dob) : "—";
    const address = customer?.address || "—";
    const nationalId = customer?.national_id || "—";
    const email = user?.email || "—";
    const isActive = user?.is_active;
    const kycStatus = customer?.kyc || "PENDING";

    // Mở modal và fill form từ dữ liệu hiện tại
    const handleOpenEdit = () => {
        if (customer) {
            setEditForm({
                full_name: customer.full_name || "",
                dob: customer.dob || "",
                national_id: customer.national_id || "",
                address: customer.address || "",
            });
        }
        setEditError("");
        setShowEditModal(true);
    };

    const handleCloseEdit = () => {
        if (editSaving) return;
        setShowEditModal(false);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    // Gọi API cập nhật customer
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setEditSaving(true);
        setEditError("");

        try {
            // Gọi API cập nhật bằng axios, token đã được interceptor gắn sẵn
            const res = await updateCustomer({
                full_name: editForm.full_name,
                dob: editForm.dob,           // YYYY-MM-DD
                national_id: editForm.national_id,
                address: editForm.address,
            });

            // Nếu backend trả về customer mới:
            const updatedCustomer = res.data?.customer || {
                ...(customer || {}),
                ...editForm,
            };

            setData((prev) => ({
                ...prev,
                customer: updatedCustomer,
            }));

            setShowEditModal(false);
        } catch (err) {
            console.error(err);
            const msg =
                err.response?.data?.message ||
                err.response?.data?.error ||
                "Có lỗi xảy ra khi cập nhật thông tin.";
            setEditError(msg);
        } finally {
            setEditSaving(false);
        }
    };


    return (
        <div id="main-wrapper">
            <DashboardHeader active="settings" />
            <SettingsSecondNavigation />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <DashboardSidebar />

                        <div className="col-lg-9">
                            {/* Thông báo loading / lỗi */}
                            {loading && (
                                <div className="alert alert-info py-2">
                                    Đang tải thông tin hồ sơ...
                                </div>
                            )}
                            {error && (
                                <div className="alert alert-danger py-2">{error}</div>
                            )}

                            {/* THÔNG TIN CÁ NHÂN */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Thông tin cá nhân
                                    <button
                                        type="button"
                                        onClick={handleOpenEdit}
                                        className="ms-auto text-2 text-uppercase btn-link border-0 bg-transparent p-0"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </button>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row gx-3 align-items-center mb-2">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Họ và tên:
                                    </p>
                                    <p className="col-sm-9 text-3">{fullName}</p>
                                </div>

                                <div className="row gx-3 align-items-center mb-2">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Ngày sinh:
                                    </p>
                                    <p className="col-sm-9 text-3">{dobDisplay}</p>
                                </div>

                                <div className="row gx-3 align-items-center mb-2">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Địa chỉ:
                                    </p>
                                    <p className="col-sm-9 text-3">{address}</p>
                                </div>

                                <div className="row gx-3 align-items-center mb-2">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        CMND/CCCD:
                                    </p>
                                    <p className="col-sm-9 text-3">{nationalId}</p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Trạng thái KYC:
                                    </p>
                                    <p className="col-sm-9 text-3">
                                        <span
                                            className={`badge rounded-pill px-3 py-1 ${kycStatus === "APPROVED"
                                                ? "bg-success"
                                                : kycStatus === "REJECTED"
                                                    ? "bg-danger"
                                                    : "bg-warning text-dark"
                                                }`}
                                        >
                                            {kycStatus}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* CÀI ĐẶT TÀI KHOẢN */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Cài đặt tài khoản
                                    <a
                                        href="#edit-account-settings"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Ngôn ngữ:
                                    </p>
                                    <p className="col-sm-9 text-3">Tiếng Việt (Vietnamese)</p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Múi giờ:
                                    </p>
                                    <p className="col-sm-9 text-3">
                                        (GMT+07:00) Bangkok, Hanoi, Jakarta
                                    </p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Trạng thái tài khoản:
                                    </p>
                                    <p className="col-sm-9 text-3">
                                        <span
                                            className={`rounded-pill d-inline-block px-2 ${isActive
                                                ? "bg-success text-white"
                                                : "bg-danger text-white"
                                                }`}
                                        >
                                            <i className="fas fa-check-circle me-1" />
                                            {isActive ? "Đang hoạt động" : "Ngừng hoạt động"}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Địa chỉ email
                                    <a
                                        href="#edit-email"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />
                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Email:
                                    </p>
                                    <p className="col-sm-9 text-3 d-sm-inline-flex align-items-center">
                                        {email}
                                        <span className="badge bg-info text-1 fw-500 rounded-pill px-2 py-1 ms-2">
                                            Chính
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* ĐIỆN THOẠI – giữ nguyên static */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Điện thoại
                                    <a
                                        href="#edit-phone"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Di động:
                                    </p>
                                    <p className="col-sm-9 text-3 d-sm-inline-flex align-items-center">
                                        +1 202-555-0125
                                        <span className="badge bg-info text-1 fw-500 rounded-pill px-2 py-1 ms-2">
                                            Chính
                                        </span>
                                    </p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Di động:
                                    </p>
                                    <p className="col-sm-9 text-3">+1 303-666-0512</p>
                                </div>
                            </div>
                        </div>
                        {/* end col-lg-9 */}
                    </div>
                </div>
            </div>

            <Footer />

            {/* MODAL CHỈNH SỬA THÔNG TIN CÁ NHÂN – dùng state showEditModal */}
            {showEditModal && (
                <>
                    <div
                        className="modal fade show"
                        role="dialog"
                        style={{ display: "block" }}
                        aria-modal="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title fw-400">Thông tin cá nhân</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={handleCloseEdit}
                                        aria-label="Đóng"
                                    />
                                </div>
                                <div className="modal-body p-4">
                                    <form onSubmit={handleEditSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Họ và tên</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="full_name"
                                                value={editForm.full_name}
                                                onChange={handleEditChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Ngày sinh</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="dob"
                                                value={editForm.dob || ""}
                                                onChange={handleEditChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">CMND/CCCD</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="national_id"
                                                value={editForm.national_id}
                                                onChange={handleEditChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Địa chỉ</label>
                                            <textarea
                                                className="form-control"
                                                name="address"
                                                rows={3}
                                                value={editForm.address}
                                                onChange={handleEditChange}
                                                required
                                            />
                                        </div>

                                        {editError && (
                                            <div className="alert alert-danger py-2">
                                                {editError}
                                            </div>
                                        )}

                                        <div className="d-grid mt-3">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={editSaving}
                                            >
                                                {editSaving ? "Đang lưu..." : "Lưu thay đổi"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* backdrop */}
                    <div className="modal-backdrop fade show" />
                </>
            )}
        </div>
    );
};

export default SettingsProfilePage;

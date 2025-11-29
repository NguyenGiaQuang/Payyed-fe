// src/pages/SettingsProfilePage.jsx
import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SettingsSecondNavigation from "../components/navigation/SettingsSecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";
import { getMe } from "../api/auth";

// Hàm nhỏ để format "2002-05-20" -> "20-05-2002"
const formatDate = (iso) => {
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

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const res = await getMe();
                // res.data có dạng { user, customer, roles }
                setData(res.data);
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

    const { user, customer, roles } = data;

    const fullName = customer?.full_name || "—";
    const dob = customer?.dob ? formatDate(customer.dob) : "—";
    const address = customer?.address || "—";
    const email = user?.email || "—";
    const isActive = user?.is_active;
    const kycStatus = customer?.kyc || "PENDING";

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
                                    <a
                                        href="#edit-personal-details"
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
                                    <p className="col-sm-9 text-3">{dob}</p>
                                </div>

                                <div className="row gx-3 align-items-center mb-2">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Địa chỉ:
                                    </p>
                                    <p className="col-sm-9 text-3">{address}</p>
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

                            {/* Modal chỉnh sửa thông tin cá nhân – vẫn là mock, chưa connect API update */}
                            <div
                                id="edit-personal-details"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">
                                                Thông tin cá nhân
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            {/* TODO: sau này nối API update profile */}
                                            <p className="text-muted mb-0">
                                                Chức năng chỉnh sửa hồ sơ sẽ được kết nối API sau.
                                            </p>
                                        </div>
                                    </div>
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
                                    <p className="col-sm-9 text-3">
                                        Tiếng Việt (Vietnamese)
                                    </p>
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

                            {/* Modal cài đặt tài khoản – vẫn mock */}
                            <div
                                id="edit-account-settings"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">
                                                Cài đặt tài khoản
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            <p className="text-muted mb-0">
                                                Cài đặt tài khoản (ngôn ngữ, múi giờ, trạng thái) hiện
                                                đang để mặc định; sẽ được kết nối API cấu hình sau.
                                            </p>
                                        </div>
                                    </div>
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

                            {/* Modal email – placeholder */}
                            <div
                                id="edit-email"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">
                                                Địa chỉ email
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            <p className="text-muted mb-0">
                                                Chức năng thay đổi email sẽ được kết nối API sau.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ĐIỆN THOẠI – tạm giữ nguyên static */}
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

                            {/* Modal điện thoại – placeholder */}
                            <div
                                id="edit-phone"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">Điện thoại</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            <p className="text-muted mb-0">
                                                Thay đổi số điện thoại sẽ được hỗ trợ sau.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end col-lg-9 */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SettingsProfilePage;

// src/pages/SettingsSecurityPage.jsx
import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SettingsSecondNavigation from "../components/navigation/SettingsSecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";
import { getMe, changeEmail, changePassword } from "../api/auth";

const SettingsSecurityPage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // --- state cho modal đổi email ---
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [emailForm, setEmailForm] = useState({
        new_email: "",
    });
    const [emailSaving, setEmailSaving] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [emailSuccess, setEmailSuccess] = useState("");

    // --- state cho modal đổi mật khẩu ---
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordForm, setPasswordForm] = useState({
        current_password: "",
        new_password: "",
        confirm_password: "",
    });
    const [passwordSaving, setPasswordSaving] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [passwordSuccess, setPasswordSuccess] = useState("");

    useEffect(() => {
        const fetchMe = async () => {
            try {
                setLoading(true);
                const res = await getMe();
                setUser(res.data.user); // { id, email, ... }
            } catch (err) {
                console.error(err);
                const msg =
                    err.response?.data?.message ||
                    err.response?.data?.error ||
                    "Không tải được thông tin bảo mật.";
                setError(msg);
            } finally {
                setLoading(false);
            }
        };

        fetchMe();
    }, []);

    const emailValue = user?.email || "—";

    // ====== EMAIL ======
    const openEmailModal = () => {
        setEmailForm({
            new_email: user?.email || "",
        });
        setEmailError("");
        setEmailSuccess("");
        setShowEmailModal(true);
    };

    const closeEmailModal = () => {
        if (emailSaving) return;
        setShowEmailModal(false);
    };

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setEmailForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setEmailSaving(true);
        setEmailError("");
        setEmailSuccess("");

        try {
            const res = await changeEmail({
                new_email: emailForm.new_email,
            });

            // Lưu token mới nếu backend trả về
            if (res.data?.token) {
                localStorage.setItem("authToken", res.data.token);
            }

            const newEmail =
                res.data?.user?.email || res.data?.new_email || emailForm.new_email;

            setUser((prev) => (prev ? { ...prev, email: newEmail } : prev));

            setEmailSuccess("Cập nhật email thành công.");
            setTimeout(() => {
                setShowEmailModal(false);
            }, 600);
        } catch (err) {
            console.error(err);
            const msg =
                err.response?.data?.message ||
                err.response?.data?.error ||
                "Có lỗi xảy ra khi cập nhật email.";
            setEmailError(msg);
        } finally {
            setEmailSaving(false);
        }
    };

    // ====== PASSWORD ======
    const openPasswordModal = () => {
        setPasswordForm({
            current_password: "",
            new_password: "",
            confirm_password: "",
        });
        setPasswordError("");
        setPasswordSuccess("");
        setShowPasswordModal(true);
    };

    const closePasswordModal = () => {
        if (passwordSaving) return;
        setShowPasswordModal(false);
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordForm((prev) => ({ ...prev, [name]: value }));
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setPasswordSaving(true);
        setPasswordError("");
        setPasswordSuccess("");

        if (passwordForm.new_password !== passwordForm.confirm_password) {
            setPasswordError("Mật khẩu mới và xác nhận mật khẩu không trùng khớp.");
            setPasswordSaving(false);
            return;
        }

        try {
            await changePassword({
                current_password: passwordForm.current_password,
                new_password: passwordForm.new_password,
                confirm_password: passwordForm.confirm_password,
            });

            setPasswordSuccess("Đổi mật khẩu thành công.");
            setTimeout(() => {
                setShowPasswordModal(false);
            }, 600);
        } catch (err) {
            console.error(err);
            const msg =
                err.response?.data?.message ||
                err.response?.data?.error ||
                "Có lỗi xảy ra khi đổi mật khẩu.";
            setPasswordError(msg);
        } finally {
            setPasswordSaving(false);
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
                            {loading && (
                                <div className="alert alert-info py-2">
                                    Đang tải thông tin bảo mật...
                                </div>
                            )}
                            {error && (
                                <div className="alert alert-danger py-2">{error}</div>
                            )}

                            {/* ĐỊA CHỈ EMAIL */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Địa chỉ email
                                    <button
                                        type="button"
                                        onClick={openEmailModal}
                                        className="ms-auto text-2 text-uppercase btn-link border-0 bg-transparent p-0"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </button>
                                </h3>
                                <hr className="mx-n4 mb-4" />
                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Email:
                                    </p>
                                    <p className="col-sm-9 text-3 d-sm-inline-flex align-items-center">
                                        {emailValue}
                                        <span className="badge bg-info text-1 fw-500 rounded-pill px-2 py-1 ms-2">
                                            Chính
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* MẬT KHẨU */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Mật khẩu
                                    <button
                                        type="button"
                                        onClick={openPasswordModal}
                                        className="ms-auto text-2 text-uppercase btn-link border-0 bg-transparent p-0"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Đổi mật khẩu
                                    </button>
                                </h3>
                                <hr className="mx-n4 mb-4" />
                                <p className="text-3">
                                    Tạo hoặc cập nhật mật khẩu đăng nhập của bạn. Đảm bảo mật
                                    khẩu đủ mạnh và không sử dụng lại trên nhiều dịch vụ.
                                    <br />
                                    <span className="text-muted">
                                        Lần thay đổi gần nhất: 15 March, 2021
                                    </span>
                                </p>
                            </div>

                            {/* XÁC THỰC 2 BƯỚC (demo tĩnh) */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Xác thực 2 bước (2FA)
                                    <span className="badge bg-success text-1 fw-500 rounded-pill ms-2">
                                        Đang bật
                                    </span>
                                </h3>
                                <hr className="mx-n4 mb-4" />
                                <p className="text-3">
                                    Tăng cường bảo mật bằng cách yêu cầu mã xác thực khi đăng nhập
                                    từ thiết bị lạ hoặc trình duyệt mới.
                                </p>
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="twoStepSwitch"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="twoStepSwitch">
                                        Bật xác thực 2 bước
                                    </label>
                                </div>
                            </div>

                            {/* THIẾT BỊ & PHIÊN ĐĂNG NHẬP – demo tĩnh */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Thiết bị & Phiên đăng nhập
                                </h3>
                                <hr className="mx-n4 mb-4" />
                                <p className="text-3">
                                    Danh sách các thiết bị gần đây đã đăng nhập vào tài khoản của
                                    bạn.
                                </p>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div>
                                            <div className="fw-500">Chrome trên Windows</div>
                                            <div className="text-muted text-2">
                                                Hà Nội, Việt Nam • Hôm nay, 10:21
                                            </div>
                                        </div>
                                        <span className="badge bg-success text-1 fw-500">
                                            Đang hoạt động
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div>
                                            <div className="fw-500">Safari trên iPhone</div>
                                            <div className="text-muted text-2">
                                                Hồ Chí Minh • 2 ngày trước
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-danger">
                                            Đăng xuất
                                        </button>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between py-2">
                                        <div>
                                            <div className="fw-500">Edge trên Windows</div>
                                            <div className="text-muted text-2">
                                                Đà Nẵng • 1 tuần trước
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-danger">
                                            Đăng xuất
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* end col-lg-9 */}
                    </div>
                </div>
            </div>

            <Footer />

            {/* MODAL ĐỔI EMAIL */}
            {showEmailModal && (
                <>
                    <div
                        className="modal fade show"
                        style={{ display: "block" }}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title fw-400">Đổi địa chỉ email</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Đóng"
                                        onClick={closeEmailModal}
                                    />
                                </div>
                                <div className="modal-body p-4">
                                    <form onSubmit={handleEmailSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Email mới</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="new_email"
                                                value={emailForm.new_email}
                                                onChange={handleEmailChange}
                                                placeholder="Nhập email mới"
                                                required
                                            />
                                        </div>

                                        {emailError && (
                                            <div className="alert alert-danger py-2">
                                                {emailError}
                                            </div>
                                        )}
                                        {emailSuccess && (
                                            <div className="alert alert-success py-2">
                                                {emailSuccess}
                                            </div>
                                        )}

                                        <div className="d-grid mt-3">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={emailSaving}
                                            >
                                                {emailSaving ? "Đang cập nhật..." : "Cập nhật email"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show" />
                </>
            )}

            {/* MODAL ĐỔI MẬT KHẨU */}
            {showPasswordModal && (
                <>
                    <div
                        className="modal fade show"
                        style={{ display: "block" }}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title fw-400">Đổi mật khẩu</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Đóng"
                                        onClick={closePasswordModal}
                                    />
                                </div>
                                <div className="modal-body p-4">
                                    <form onSubmit={handlePasswordSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Xác nhận mật khẩu hiện tại
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="current_password"
                                                value={passwordForm.current_password}
                                                onChange={handlePasswordChange}
                                                placeholder="Nhập mật khẩu hiện tại"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Mật khẩu mới</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="new_password"
                                                value={passwordForm.new_password}
                                                onChange={handlePasswordChange}
                                                placeholder="Nhập mật khẩu mới"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Nhập lại mật khẩu mới
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="confirm_password"
                                                value={passwordForm.confirm_password}
                                                onChange={handlePasswordChange}
                                                placeholder="Nhập lại mật khẩu mới"
                                                required
                                            />
                                        </div>

                                        {passwordError && (
                                            <div className="alert alert-danger py-2">
                                                {passwordError}
                                            </div>
                                        )}
                                        {passwordSuccess && (
                                            <div className="alert alert-success py-2">
                                                {passwordSuccess}
                                            </div>
                                        )}

                                        <div className="d-grid mt-3">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={passwordSaving}
                                            >
                                                {passwordSaving ? "Đang cập nhật..." : "Lưu mật khẩu mới"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show" />
                </>
            )}
        </div>
    );
};

export default SettingsSecurityPage;

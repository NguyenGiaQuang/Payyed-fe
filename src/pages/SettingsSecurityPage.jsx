import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SettingsSecondNavigation from "../components/navigation/SettingsSecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

const SettingsSecurityPage = () => {
    return (
        <div id="main-wrapper">
            <DashboardHeader />
            <SettingsSecondNavigation />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <DashboardSidebar />

                        <div className="col-lg-9">
                            {/* MẬT KHẨU */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Mật khẩu
                                    <a
                                        href="#change-password"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Đổi mật khẩu
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />
                                <p className="text-3">
                                    Tạo hoặc cập nhật mật khẩu đăng nhập của bạn. Đảm bảo mật khẩu
                                    đủ mạnh và không sử dụng lại trên nhiều dịch vụ.
                                    <br />
                                    <span className="text-muted">
                                        Lần thay đổi gần nhất: 15 March, 2021
                                    </span>
                                </p>
                            </div>

                            {/* Modal đổi mật khẩu */}
                            <div
                                id="change-password"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">Đổi mật khẩu</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            <form id="changePassword" method="post">
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="existingPassword"
                                                        className="form-label"
                                                    >
                                                        Xác nhận mật khẩu hiện tại
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="existingPassword"
                                                        placeholder="Nhập mật khẩu hiện tại"
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="newPassword" className="form-label">
                                                        Mật khẩu mới
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="newPassword"
                                                        placeholder="Nhập mật khẩu mới"
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="confirmPassword"
                                                        className="form-label"
                                                    >
                                                        Nhập lại mật khẩu mới
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="confirmPassword"
                                                        placeholder="Nhập lại mật khẩu mới"
                                                        required
                                                    />
                                                </div>

                                                <div className="d-grid">
                                                    <button className="btn btn-primary" type="submit">
                                                        Lưu mật khẩu mới
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* XÁC THỰC 2 BƯỚC */}
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
                                    <label
                                        className="form-check-label"
                                        htmlFor="twoStepSwitch"
                                    >
                                        Bật xác thực 2 bước
                                    </label>
                                </div>
                            </div>

                            {/* THIẾT BỊ ĐÃ ĐĂNG NHẬP */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Thiết bị & Phiên đăng nhập
                                </h3>
                                <hr className="mx-n4 mb-4" />
                                <p className="text-3">
                                    Danh sách các thiết bị gần đây đã đăng nhập vào tài khoản
                                    của bạn.
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
        </div>
    );
};

export default SettingsSecurityPage;

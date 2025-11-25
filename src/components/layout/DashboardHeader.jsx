import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = ({ active = "dashboard" }) => {
    return (
        <header id="header">
            <div className="container">
                <div className="header-row">
                    {/* Logo + Menu chính */}
                    <div className="header-column justify-content-start">
                        {/* Logo */}
                        <div className="logo me-3">
                            <Link className="d-flex" to="/dashboard" title="Payyed">
                                <img src="/images/logo.png" alt="Payyed" />
                            </Link>
                        </div>

                        {/* Nút toggle mobile */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#header-nav"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        {/* Menu chính */}
                        <nav className="primary-menu navbar navbar-expand-lg">
                            <div id="header-nav" className="collapse navbar-collapse">
                                <ul className="navbar-nav me-auto">
                                    <li className={active === "dashboard" ? "active" : ""}>
                                        <Link to="/dashboard">Tổng quan</Link>
                                    </li>

                                    <li className={active === "transactions" ? "active" : ""}>
                                        <Link to="/transactions">Giao dịch</Link>
                                    </li>

                                    <li className={active === "send-request" ? "active" : ""}>
                                        <Link to="/send-money">Gửi / Yêu cầu thanh toán</Link>
                                    </li>

                                    <li className={active === "help" ? "active" : ""}>
                                        <Link to="/help">Trợ giúp</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* Bên phải: ngôn ngữ + thông báo + hồ sơ */}
                    <div className="header-column justify-content-end">
                        <nav className="login-signup navbar navbar-expand">
                            <ul className="navbar-nav">
                                {/* Ngôn ngữ */}
                                <li className="dropdown language">
                                    <a className="dropdown-toggle" href="#!" data-bs-toggle="dropdown">
                                        VN
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#!">
                                                Tiếng Việt
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#!">
                                                English
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Thông báo */}
                                <li className="dropdown notifications">
                                    <a
                                        className="dropdown-toggle"
                                        href="#!"
                                        data-bs-toggle="dropdown"
                                    >
                                        <span className="text-5">
                                            <i className="far fa-bell"></i>
                                        </span>
                                        <span className="count">3</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="text-center text-3 py-2">Thông báo (3)</li>
                                        <li className="dropdown-divider mx-n3"></li>

                                        <li>
                                            <a className="dropdown-item" href="#!">
                                                <i className="fas fa-bell"></i> Có tài liệu FIRC mới
                                                <span className="text-1 text-muted d-block">
                                                    22 Tháng 7 2021
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a className="dropdown-item" href="#!">
                                                <i className="fas fa-bell"></i> Cập nhật chính sách bảo mật
                                                <span className="text-1 text-muted d-block">
                                                    04 Tháng 3 2021
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a className="dropdown-item" href="#!">
                                                <i className="fas fa-bell"></i> Cập nhật phí Payyed
                                                <span className="text-1 text-muted d-block">
                                                    18 Tháng 2 2021
                                                </span>
                                            </a>
                                        </li>

                                        <li className="dropdown-divider mx-n3"></li>
                                        <li>
                                            <Link
                                                to="/notifications"
                                                className="dropdown-item text-center text-primary px-0"
                                            >
                                                Xem tất cả
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Hồ sơ */}
                                <li className="dropdown profile ms-2">
                                    <a
                                        className="px-0 dropdown-toggle"
                                        href="#!"
                                        data-bs-toggle="dropdown"
                                    >
                                        <img
                                            className="rounded-circle"
                                            src="/images/profile-thumb-sm.jpg"
                                            alt="Hồ sơ"
                                        />
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="text-center text-3 py-2">
                                            Xin chào, Smith Rhodes
                                        </li>
                                        <li className="dropdown-divider mx-n3"></li>

                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/settings-profile"
                                            >
                                                <i className="fas fa-user"></i> Hồ sơ cá nhân
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/settings-security"
                                            >
                                                <i className="fas fa-shield-alt"></i> Bảo mật
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/settings-payment-methods"
                                            >
                                                <i className="fas fa-credit-card"></i> Phương thức thanh toán
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/settings-notifications"
                                            >
                                                <i className="fas fa-bell"></i> Cài đặt thông báo
                                            </Link>
                                        </li>

                                        <li className="dropdown-divider mx-n3"></li>

                                        <li>
                                            <Link className="dropdown-item" to="/logout">
                                                <i className="fas fa-sign-out-alt"></i> Đăng xuất
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;

// src/components/layout/DashboardHeader.jsx
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";
import logo from "../../assets/images/logo.png";

const DashboardHeader = ({ active = "dashboard" }) => {
    const navigate = useNavigate();

    const [langOpen, setLangOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    };

    const toggleLang = (e) => {
        e.preventDefault();
        setLangOpen((v) => !v);
        setNotifOpen(false);
        setProfileOpen(false);
    };

    const toggleNotif = (e) => {
        e.preventDefault();
        setNotifOpen((v) => !v);
        setLangOpen(false);
        setProfileOpen(false);
    };

    const toggleProfile = (e) => {
        e.preventDefault();
        setProfileOpen((v) => !v);
        setLangOpen(false);
        setNotifOpen(false);
    };

    return (
        <header id="header">
            <div className="container">
                <div className="header-row">
                    {/* LEFT: logo + main menu */}
                    <div className="header-column justify-content-start">
                        {/* Logo */}
                        <div className="logo me-3">
                            <Link className="d-flex" to="/dashboard" title="Payyed">
                                <img src={logo} alt="Payyed" />
                            </Link>
                        </div>

                        {/* Mobile toggle (giữ nguyên, nếu sau dùng) */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-target="#header-nav"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        {/* Primary navigation */}
                        <nav className="primary-menu navbar navbar-expand-lg">
                            <div id="header-nav" className="collapse navbar-collapse show">
                                <ul className="navbar-nav me-auto">
                                    <li className={active === "dashboard" ? "active" : ""}>
                                        <NavLink to="/dashboard" className="nav-link">
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className={active === "transactions" ? "active" : ""}>
                                        <NavLink to="/transactions" className="nav-link">
                                            Transactions
                                        </NavLink>
                                    </li>
                                    <li className={active === "send-request" ? "active" : ""}>
                                        <NavLink to="/send-money" className="nav-link">
                                            Send / Request
                                        </NavLink>
                                    </li>
                                    <li className={active === "help" ? "active" : ""}>
                                        <NavLink to="/help" className="nav-link">
                                            Help
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* RIGHT: language + notifications + profile */}
                    <div className="header-column justify-content-end">
                        <nav className="login-signup navbar navbar-expand">
                            <ul className="navbar-nav">
                                {/* Language dropdown */}
                                <li
                                    className={`dropdown language ${langOpen ? "show" : ""}`}
                                >
                                    <a
                                        href="#!"
                                        className="dropdown-toggle"
                                        onClick={toggleLang}
                                    >
                                        VN
                                    </a>
                                    <ul
                                        className={`dropdown-menu${langOpen ? " show" : ""}`}
                                    >
                                        <li>
                                            <a href="#!" className="dropdown-item">
                                                Tiếng Việt
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="dropdown-item">
                                                English
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Notifications dropdown */}
                                <li
                                    className={`dropdown notifications ${notifOpen ? "show" : ""
                                        }`}
                                >
                                    <a
                                        href="#!"
                                        className="dropdown-toggle"
                                        onClick={toggleNotif}
                                    >
                                        <span className="text-5">
                                            <i className="far fa-bell" />
                                        </span>
                                        <span className="count">3</span>
                                    </a>
                                    <ul
                                        className={`dropdown-menu${notifOpen ? " show" : ""}`}
                                        style={{ right: 0, left: "auto" }}
                                    >
                                        <li className="text-center text-3 py-2">
                                            Notifications (3)
                                        </li>
                                        <li className="dropdown-divider mx-n3" />
                                        <li>
                                            <a href="#!" className="dropdown-item">
                                                <i className="fas fa-bell" />
                                                A new digital FIRC document is available for you to
                                                download
                                                <span className="text-1 text-muted d-block">
                                                    22 Jul 2021
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="dropdown-item">
                                                <i className="fas fa-bell" />
                                                Updates to our privacy policy. Please read.
                                                <span className="text-1 text-muted d-block">
                                                    04 March 2021
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="dropdown-item">
                                                <i className="fas fa-bell" />
                                                Update about Payyed fees
                                                <span className="text-1 text-muted d-block">
                                                    18 Feb 2021
                                                </span>
                                            </a>
                                        </li>
                                        <li className="dropdown-divider mx-n3" />
                                        <li>
                                            <Link
                                                to="/notifications"
                                                className="dropdown-item text-center text-primary px-0"
                                            >
                                                See all Notifications
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Profile dropdown – giống CSS cũ */}
                                <li
                                    className={`dropdown profile ms-2 ${profileOpen ? "show" : ""
                                        }`}
                                >
                                    <a
                                        href="#!"
                                        className="px-0 dropdown-toggle"
                                        onClick={toggleProfile}
                                    >
                                        <img
                                            className="rounded-circle"
                                            src="/images/profile-thumb-sm.jpg"
                                            alt="Profile"
                                        />
                                    </a>
                                    <ul
                                        className={`dropdown-menu${profileOpen ? " show" : ""}`}
                                        style={{ right: 0, left: "auto" }}
                                    >
                                        <li className="text-center text-3 py-2">
                                            Hi, Smith Rhodes
                                        </li>
                                        <li className="dropdown-divider mx-n3" />
                                        <li>
                                            <Link className="dropdown-item" to="/settings-profile">
                                                <i className="fas fa-user me-2" />
                                                My Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/settings-security">
                                                <i className="fas fa-shield-alt me-2" />
                                                Security
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/settings-payment-methods"
                                            >
                                                <i className="fas fa-credit-card me-2" />
                                                Payment Methods
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/settings-notifications"
                                            >
                                                <i className="fas fa-bell me-2" />
                                                Notifications
                                            </Link>
                                        </li>
                                        <li className="dropdown-divider mx-n3" />
                                        <li>
                                            <Link className="dropdown-item" to="/help">
                                                <i className="fas fa-life-ring me-2" />
                                                Need Help?
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="#!"
                                                className="dropdown-item text-danger"
                                                onClick={handleLogout}
                                            >
                                                <i className="fas fa-sign-out-alt me-2" />
                                                Sign Out
                                            </a>
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

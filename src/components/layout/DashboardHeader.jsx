// src/components/layout/DashboardHeader.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout, getToken } from "../../utils/auth";
import api from "../../api/client";
import logo from "../../assets/images/logo.png";

const DashboardHeader = ({ active = "dashboard" }) => {
    const navigate = useNavigate();

    const [langOpen, setLangOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const [userName, setUserName] = useState("User");
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        loadUser();
        loadNotifications();
    }, []);

    // =============================
    // 🔹 Get user info
    // =============================
    const loadUser = async () => {
        try {
            const res = await api.get("/api/auth/me");
            setUserName(res.data.customer.full_name || "User");
        } catch (err) {
            console.error("Load user failed", err);
        }
    };

    // =============================
    // 🔹 Get notifications (limit 3)
    // =============================
    const loadNotifications = async () => {
        try {
            const res = await api.get("/api/notifications");
            const list = res.data || [];

            // Lấy 3 thông báo mới nhất
            const latest = list.slice(0, 3);

            setNotifications(latest);

            // Đếm số chưa đọc
            const unread = list.filter((n) => !n.is_read).length;
            setUnreadCount(unread);

        } catch (err) {
            console.error("Load notifications failed", err);
        }
    };

    // =============================
    // 🔹 Toggle dropdown
    // =============================
    const toggleLang = (e) => {
        e.preventDefault();
        setLangOpen(v => !v);
        setNotifOpen(false);
        setProfileOpen(false);
    };

    const toggleNotif = (e) => {
        e.preventDefault();
        setNotifOpen(v => !v);
        setLangOpen(false);
        setProfileOpen(false);
    };

    const toggleProfile = (e) => {
        e.preventDefault();
        setProfileOpen(v => !v);
        setLangOpen(false);
        setNotifOpen(false);
    };

    // =============================
    // 🔹 Logout
    // =============================
    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    };

    return (
        <header id="header">
            <div className="container">
                <div className="header-row">
                    {/* LEFT: Logo + main menu */}
                    <div className="header-column justify-content-start">
                        <div className="logo me-3">
                            <Link className="d-flex" to="/dashboard">
                                <img src={logo} alt="Payyed" />
                            </Link>
                        </div>

                        <nav className="primary-menu navbar navbar-expand-lg">
                            <div id="header-nav" className="collapse navbar-collapse show">
                                <ul className="navbar-nav me-auto">
                                    <li className={active === "dashboard" ? "active" : ""}>
                                        <NavLink to="/dashboard" className="nav-link">Trang chủ</NavLink>
                                    </li>
                                    <li className={active === "transactions" ? "active" : ""}>
                                        <NavLink to="/transactions" className="nav-link">Lịch sử giao dịch</NavLink>
                                    </li>
                                    <li className={active === "send-request" ? "active" : ""}>
                                        <NavLink to="/send-money" className="nav-link">Chuyển tiền</NavLink>
                                    </li>
                                    {/* <li className={active === "help" ? "active" : ""}>
                                        <NavLink to="/help" className="nav-link">Help</NavLink>
                                    </li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* RIGHT: language + notifications + profile */}
                    <div className="header-column justify-content-end">
                        <nav className="login-signup navbar navbar-expand">
                            <ul className="navbar-nav">

                                {/* LANGUAGE */}
                                <li className={`dropdown language ${langOpen ? "show" : ""}`}>
                                    <a href="#!" className="dropdown-toggle" onClick={toggleLang}>VN</a>
                                    <ul className={`dropdown-menu${langOpen ? " show" : ""}`}>
                                        <li><a href="#!" className="dropdown-item">Tiếng Việt</a></li>
                                        <li><a href="#!" className="dropdown-item">English</a></li>
                                    </ul>
                                </li>

                                {/* NOTIFICATIONS */}
                                <li className={`dropdown notifications ${notifOpen ? "show" : ""}`}>
                                    <a href="#!" className="dropdown-toggle" onClick={toggleNotif}>
                                        <span className="text-5"><i className="far fa-bell" /></span>
                                        {unreadCount > 0 && <span className="count">{unreadCount}</span>}
                                    </a>

                                    <ul className={`dropdown-menu${notifOpen ? " show" : ""}`} style={{ right: 0 }}>
                                        <li className="text-center text-3 py-2">
                                            Notifications ({unreadCount})
                                        </li>
                                        <li className="dropdown-divider mx-n3" />

                                        {/* Render notifications */}
                                        {notifications.length === 0 && (
                                            <li className="text-center text-muted py-2">No notifications</li>
                                        )}

                                        {notifications.map((n) => (
                                            <li key={n.id}>
                                                <Link
                                                    to={`/notifications?id=${n.id}`}
                                                    className="dropdown-item"
                                                >
                                                    <i className="fas fa-bell" /> {n.title}
                                                    <span className="text-1 text-muted d-block">
                                                        {new Date(n.created_at).toLocaleString()}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}

                                        <li className="dropdown-divider mx-n3" />
                                        <li>
                                            <Link to="/notifications" className="dropdown-item text-center text-primary px-0">
                                                See all Notifications
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* PROFILE */}
                                <li className={`dropdown profile ms-2 ${profileOpen ? "show" : ""}`}>
                                    <a href="#!" className="px-0 dropdown-toggle" onClick={toggleProfile}>
                                        <img className="rounded-circle" src="/images/profile-thumb-sm.jpg" alt="Profile" />
                                    </a>

                                    <ul className={`dropdown-menu${profileOpen ? " show" : ""}`} style={{ right: 0 }}>
                                        <li className="text-center text-3 py-2">Hi, {userName}</li>
                                        <li className="dropdown-divider mx-n3" />

                                        <li><Link className="dropdown-item" to="/settings-profile"><i className="fas fa-user me-2" />My Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/settings-security"><i className="fas fa-shield-alt me-2" />Security</Link></li>
                                        <li><Link className="dropdown-item" to="/settings-payment-methods"><i className="fas fa-credit-card me-2" />Payment Methods</Link></li>
                                        <li><Link className="dropdown-item" to="/settings-notifications"><i className="fas fa-bell me-2" />Notifications</Link></li>

                                        <li className="dropdown-divider mx-n3" />
                                        <li><Link className="dropdown-item" to="/help"><i className="fas fa-life-ring me-2" />Need Help?</Link></li>

                                        <li>
                                            <a href="#!" className="dropdown-item text-danger" onClick={handleLogout}>
                                                <i className="fas fa-sign-out-alt me-2" />Sign Out
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

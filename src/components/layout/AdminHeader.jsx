// src/components/layout/AdminHeader.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";
import api from "../../api/client";
import logo from "../../assets/images/logo.png";

const AdminHeader = ({ active = "admin" }) => {
    const navigate = useNavigate();

    const [langOpen, setLangOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const [userName, setUserName] = useState("Admin");
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        loadUser();
        loadNotifications();
    }, []);

    const loadUser = async () => {
        try {
            const res = await api.get("/api/auth/me");
            // support multiple shapes
            const me = res.data || {};
            const name = me.user?.full_name || me.customer?.full_name || me.full_name || "Admin";
            setUserName(name);
        } catch (err) {
            console.error("Load admin user failed", err);
        }
    };

    const loadNotifications = async () => {
        try {
            const res = await api.get("/api/notifications");
            const list = res.data || [];
            setNotifications(list.slice(0, 3));
            setUnreadCount(list.filter((n) => !n.is_read).length);
        } catch (err) {
            // silently ignore if notifications endpoint not available for admin
            console.debug("Notifications not available for this role", err);
        }
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

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    };

    return (
        <header id="header">
            <div className="container">
                <div className="header-row">
                    <div className="header-column justify-content-start">
                        <div className="logo me-3">
                            <Link className="d-flex" to="/admin">
                                <img src={logo} alt="Payyed" />
                            </Link>
                        </div>

                        <nav className="primary-menu navbar navbar-expand-lg">
                            <div id="header-nav" className="collapse navbar-collapse show">
                                <ul className="navbar-nav me-auto">
                                    <li className={active === "admin" ? "active" : ""}>
                                        <NavLink to="/admin" className="nav-link">Tổng quan</NavLink>
                                    </li>
                                    <li className={active === "kyc" ? "active" : ""}>
                                        <NavLink to="/admin/kyc" className="nav-link">Duyệt KYC</NavLink>
                                    </li>
                                    <li className={active === "requests" ? "active" : ""}>
                                        <NavLink to="/admin/requests" className="nav-link">Duyệt yêu cầu</NavLink>
                                    </li>
                                    <li className={active === "transactions" ? "active" : ""}>
                                        <NavLink to="/admin/transactions" className="nav-link">Danh sách bút toán</NavLink>
                                    </li>
                                    <li className={active === "balances" ? "active" : ""}>
                                        <NavLink to="/admin/system-balance" className="nav-link">Tổng hợp số dư</NavLink>
                                    </li>
                                    <li className={active === "debt" ? "active" : ""}>
                                        <NavLink to="/admin/debt-balance" className="nav-link">Kiểm tra cân bằng nợ</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="header-column justify-content-end">
                        <nav className="login-signup navbar navbar-expand">
                            <ul className="navbar-nav">
                                <li className={`dropdown language ${langOpen ? "show" : ""}`}>
                                    <a href="#!" className="dropdown-toggle" onClick={toggleLang}>VN</a>
                                    <ul className={`dropdown-menu${langOpen ? " show" : ""}`}>
                                        <li><a href="#!" className="dropdown-item">Tiếng Việt</a></li>
                                        <li><a href="#!" className="dropdown-item">English</a></li>
                                    </ul>
                                </li>

                                <li className={`dropdown notifications ${notifOpen ? "show" : ""}`}>
                                    <a href="#!" className="dropdown-toggle" onClick={toggleNotif}>
                                        <span className="text-5"><i className="far fa-bell" /></span>
                                        {unreadCount > 0 && <span className="count">{unreadCount}</span>}
                                    </a>

                                    <ul className={`dropdown-menu${notifOpen ? " show" : ""}`} style={{ right: 0 }}>
                                        <li className="text-center text-3 py-2">Notifications ({unreadCount})</li>
                                        <li className="dropdown-divider mx-n3" />
                                        {notifications.length === 0 && <li className="text-center text-muted py-2">No notifications</li>}
                                        {notifications.map((n) => (
                                            <li key={n.id}>
                                                <Link to={`/notifications?id=${n.id}`} className="dropdown-item">
                                                    <i className="fas fa-bell" /> {n.title}
                                                    <span className="text-1 text-muted d-block">{new Date(n.created_at).toLocaleString()}</span>
                                                </Link>
                                            </li>
                                        ))}
                                        <li className="dropdown-divider mx-n3" />
                                        <li><Link to="/notifications" className="dropdown-item text-center text-primary px-0">See all Notifications</Link></li>
                                    </ul>
                                </li>

                                <li className={`dropdown profile ms-2 ${profileOpen ? "show" : ""}`}>
                                    <a href="#!" className="px-0 dropdown-toggle" onClick={toggleProfile}>
                                        <img className="rounded-circle" src="/images/profile-thumb-sm.jpg" alt="Profile" />
                                    </a>

                                    <ul className={`dropdown-menu${profileOpen ? " show" : ""}`} style={{ right: 0 }}>
                                        <li className="text-center text-3 py-2">Hi, {userName}</li>
                                        <li className="dropdown-divider mx-n3" />
                                        <li><Link className="dropdown-item" to="/settings-profile"><i className="fas fa-user me-2" />My Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/help"><i className="fas fa-life-ring me-2" />Need Help?</Link></li>
                                        <li className="dropdown-divider mx-n3" />
                                        <li><a href="#!" className="dropdown-item text-danger" onClick={handleLogout}><i className="fas fa-sign-out-alt me-2" />Sign Out</a></li>
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

export default AdminHeader;

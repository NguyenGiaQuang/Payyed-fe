// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavigationDropDown from '../navigation/NavigationDropDown';
import logo from '../../assets/images/logo.png';

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNav = () => setIsCollapsed(p => !p);

    return (
        <header id="header">
            <div className="container">
                <div className="header-row">
                    {/* Logo */}
                    <div className="header-column justify-content-start">
                        <div className="logo me-3">
                            <Link className="d-flex" to="/">
                                <img src={logo} width="121" height="33" alt="Payyed" />
                            </Link>
                        </div>

                        {/* Nút thu gọn menu (Mobile) */}
                        <button
                            className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`}
                            type="button"
                            onClick={toggleNav}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        {/* Menu chính */}
                        <nav
                            className={`primary-menu navbar navbar-expand-lg ${isCollapsed ? '' : 'show'
                                }`}
                        >
                            <div
                                id="header-nav"
                                className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'
                                    }`}
                            >
                                <ul className="navbar-nav me-auto">
                                    <li>
                                        <NavLink to="/landing-send" className="nav-link">
                                            Gửi tiền
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/landing-receive" className="nav-link">
                                            Nhận tiền
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about-us" className="nav-link">
                                            Về chúng tôi
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/fees" className="nav-link">
                                            Biểu phí
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/help" className="nav-link">
                                            Hỗ trợ
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* Đăng nhập / Đăng ký */}
                    <div className="header-column justify-content-end">
                        <nav className="login-signup navbar navbar-expand">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link">
                                        Đăng nhập
                                    </NavLink>
                                </li>
                                <li className="align-items-center h-auto ms-sm-3">
                                    <NavLink to="/signup" className="btn btn-primary">
                                        Đăng ký
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

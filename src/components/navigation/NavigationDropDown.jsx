// src/components/navigation/NavigationDropDown.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationDropDown = () => {
    return (
        <li className="dropdown">
            <a className="dropdown-toggle" href="#features" data-bs-toggle="dropdown">
                Features
            </a>
            <ul className="dropdown-menu">
                {/* Headers */}
                <li className="dropdown">
                    <span className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                        Headers
                    </span>
                    <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/">
                                Light Version (Default)
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/header-dark">
                                Dark Version
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/header-primary">
                                Primary Version
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/header-transparent">
                                Transparent Version
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* Navigation DropDown */}
                <li className="dropdown">
                    <span className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                        Navigation DropDown
                    </span>
                    <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/">
                                Light Version (Default)
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/nav-dropdown-dark">
                                Dark Version
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/nav-dropdown-primary">
                                Primary Version
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* Second Navigation */}
                <li className="dropdown">
                    <span className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                        Second Navigation
                    </span>
                    <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/send">
                                Default Version
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/deposit">
                                Alternate Version
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* Page Headers */}
                <li className="dropdown">
                    <span className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                        Page Headers
                    </span>
                    <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/feature/page-header-left">
                                Left Alignment
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/page-header-center">
                                Center Alignment
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/page-header-light">
                                Light Version
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/page-header-dark">
                                Dark Version
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/page-header-primary">
                                Primary Version
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/page-header-bg-1">
                                Custom Background
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/page-header-bg-2">
                                Custom Background 2
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* Footer */}
                <li className="dropdown">
                    <span className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
                        Footer
                    </span>
                    <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/">
                                Light Version Default
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/footer-alt">
                                Alternate Version
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/footer-dark">
                                Dark Version
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/feature/footer-primary">
                                Primary Version
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* Layout Boxed */}
                <li>
                    <Link className="dropdown-item" to="/feature/layout-boxed">
                        Layout Boxed
                    </Link>
                </li>
            </ul>
        </li>
    );
};

export default NavigationDropDown;

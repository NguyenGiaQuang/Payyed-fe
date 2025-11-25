// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                {/* Links trên */}
                <div className="row">
                    <div className="col-lg d-lg-flex align-items-center">
                        <ul className="nav justify-content-center justify-content-lg-start text-3">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/support">
                                    Support
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/help">
                                    Help
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/careers">
                                    Careers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/affiliate">
                                    Affiliate
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/fees">
                                    Fees
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social icons giữ nguyên class từ template */}
                    <div className="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
                        <ul className="social-icons justify-content-center">
                            <li className="social-icons-facebook">
                                <a href="#!" title="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="social-icons-twitter">
                                <a href="#!" title="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="social-icons-google">
                                <a href="#!" title="Google">
                                    <i className="fab fa-google"></i>
                                </a>
                            </li>
                            <li className="social-icons-youtube">
                                <a href="#!" title="Youtube">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-copyright pt-3 pt-lg-2 mt-2">
                    <div className="row">
                        <div className="col-lg">
                            <p className="text-center text-lg-start mb-2 mb-lg-0">
                                Copyright &copy; {new Date().getFullYear()}{' '}
                                <Link to="/">Payyed</Link>. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/security">
                                        Security
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/terms">
                                        Terms
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/privacy">
                                        Privacy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

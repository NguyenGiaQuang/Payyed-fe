// src/pages/AdminPage.jsx
import React from "react";
import AdminHeader from "../components/layout/AdminHeader";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function AdminPage() {
    return (
        <div id="main-wrapper">
            <AdminHeader active="admin" />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-3">Trang quản trị</h3>
                                <p className="text-muted mb-4">Chào mừng Admin / Nhân viên! Chọn chức năng để bắt đầu quản trị hệ thống.</p>

                                <div className="row gy-4">
                                    <div className="col-sm-6 col-md-4">
                                        <Link to="/admin/kyc" className="text-decoration-none">
                                            <div className="border rounded p-4 h-100">
                                                <div className="text-4 mb-2"><i className="fas fa-id-card" /></div>
                                                <h5 className="mb-1">Duyệt hồ sơ KYC</h5>
                                                <p className="text-muted mb-0">Xem và xử lý yêu cầu xác thực danh tính của khách hàng.</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <Link to="/admin/requests" className="text-decoration-none">
                                            <div className="border rounded p-4 h-100">
                                                <div className="text-4 mb-2"><i className="fas fa-tasks" /></div>
                                                <h5 className="mb-1">Duyệt yêu cầu</h5>
                                                <p className="text-muted mb-0">Duyệt các yêu cầu rút/gửi/khác từ người dùng.</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <Link to="/admin/transactions" className="text-decoration-none">
                                            <div className="border rounded p-4 h-100">
                                                <div className="text-4 mb-2"><i className="fas fa-list" /></div>
                                                <h5 className="mb-1">Danh sách bút toán</h5>
                                                <p className="text-muted mb-0">Xem nhật ký bút toán hệ thống theo filter.</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <Link to="/admin/system-balance" className="text-decoration-none">
                                            <div className="border rounded p-4 h-100">
                                                <div className="text-4 mb-2"><i className="fas fa-balance-scale" /></div>
                                                <h5 className="mb-1">Tổng hợp số dư hệ thống</h5>
                                                <p className="text-muted mb-0">Tổng hợp số dư theo tài khoản và loại tiền tệ.</p>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* <div className="col-sm-6 col-md-4">
                                        <Link to="/admin/debt-balance" className="text-decoration-none">
                                            <div className="border rounded p-4 h-100">
                                                <div className="text-4 mb-2"><i className="fas fa-file-invoice-dollar" /></div>
                                                <h5 className="mb-1">Kiểm tra cân bằng nợ</h5>
                                                <p className="text-muted mb-0">So sánh nợ phải thu và nợ phải trả, kiểm tra cân đối.</p>
                                            </div>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

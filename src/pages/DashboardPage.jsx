import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import RecentActivity from "../components/dashboard/RecentActivity";
import Footer from "../components/layout/Footer";

const DashboardPage = () => {
    return (
        <div id="main-wrapper">
            {/* Header sau đăng nhập */}
            <DashboardHeader active="dashboard" />

            {/* CONTENT */}
            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        {/* LEFT SIDEBAR */}
                        <DashboardSidebar />

                        {/* MAIN PANEL */}
                        <div className="col-lg-9">
                            {/* MỨC HOÀN THÀNH HỒ SƠ */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Mức độ hoàn thành hồ sơ
                                    <span className="border text-success rounded-pill fw-500 text-2 px-3 py-1 ms-2">
                                        50%
                                    </span>
                                </h3>

                                <hr className="mb-4 mx-n4" />

                                <div className="row gy-4 profile-completeness">
                                    <div className="col-sm-6 col-md-3">
                                        <div className="border rounded text-center px-3 py-4">
                                            <span className="d-block text-10 text-light mt-2 mb-3">
                                                <i className="fas fa-mobile-alt"></i>
                                            </span>
                                            <span className="d-block text-5 text-success mt-4 mb-3">
                                                <i className="fas fa-check-circle"></i>
                                            </span>
                                            <p className="mb-0">Đã thêm số điện thoại</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3">
                                        <div className="border rounded text-center px-3 py-4">
                                            <span className="d-block text-10 text-light mt-2 mb-3">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                            <span className="d-block text-5 text-success mt-4 mb-3">
                                                <i className="fas fa-check-circle"></i>
                                            </span>
                                            <p className="mb-0">Đã liên kết email</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3">
                                        <div className="position-relative border rounded text-center px-3 py-4">
                                            <span className="d-block text-10 text-light mt-2 mb-3">
                                                <i className="fas fa-credit-card"></i>
                                            </span>
                                            <span className="d-block text-5 text-light mt-4 mb-3">
                                                <i className="far fa-circle"></i>
                                            </span>
                                            <p className="mb-0">
                                                <a className="btn-link stretched-link" href="#!">
                                                    Thêm thẻ
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3">
                                        <div className="position-relative border rounded text-center px-3 py-4">
                                            <span className="d-block text-10 text-light mt-2 mb-3">
                                                <i className="fas fa-university"></i>
                                            </span>
                                            <span className="d-block text-5 text-light mt-4 mb-3">
                                                <i className="far fa-circle"></i>
                                            </span>
                                            <p className="mb-0">
                                                <a className="btn-link stretched-link" href="#!">
                                                    Thêm tài khoản ngân hàng
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* HOẠT ĐỘNG GẦN ĐÂY */}
                            <RecentActivity
                                title="Hoạt động gần đây"
                                items={undefined} // dùng default items
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DashboardPage;

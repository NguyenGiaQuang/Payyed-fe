import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import Footer from "../components/layout/Footer.jsx";

const NotificationsPage = () => {
    return (
        <div id="main-wrapper">
            <DashboardHeader active="notifications" />

            {/* CONTENT */}
            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        {/* LEFT SIDEBAR */}
                        <DashboardSidebar />

                        {/* MAIN CONTENT */}
                        <div className="col-lg-9">
                            <div className="bg-white shadow-sm rounded py-4 mb-4">

                                {/* PAGE TITLE */}
                                <h3 className="text-5 fw-400 px-4 mb-4">Thông báo</h3>
                                <hr className="mb-0" />

                                {/* NOTIFICATION LIST */}
                                <div className="notifications-list">

                                    {/* ITEM 1 */}
                                    <div
                                        className="notifications-item unread px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#notifications-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center text-8 icon-bell">
                                                <i className="far fa-bell"></i>
                                            </div>
                                            <div className="col col-sm-10">
                                                <h4 className="text-3 mb-1">
                                                    Tài liệu FIRC mới đã sẵn sàng tải xuống
                                                </h4>
                                                <span className="text-muted">Thứ ba trước • 23:00</span>
                                            </div>
                                            <div className="col-1 text-end text-muted">
                                                <i className="fas fa-chevron-right"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ITEM 2 */}
                                    <div
                                        className="notifications-item unread px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#notifications-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center text-8 icon-bell">
                                                <i className="far fa-bell"></i>
                                            </div>
                                            <div className="col col-sm-10">
                                                <h4 className="text-3 mb-1">Cập nhật phí Payoneer</h4>
                                                <span className="text-muted">4 Tháng 6 2021</span>
                                            </div>
                                            <div className="col-1 text-end text-muted">
                                                <i className="fas fa-chevron-right"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ITEM 3 */}
                                    <div
                                        className="notifications-item px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#notifications-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center text-8 icon-bell">
                                                <i className="far fa-bell"></i>
                                            </div>
                                            <div className="col col-sm-10">
                                                <h4 className="text-3 mb-1">
                                                    Cập nhật chính sách bảo mật — vui lòng đọc
                                                </h4>
                                                <span className="text-muted">22 Tháng 7 2021</span>
                                            </div>
                                            <div className="col-1 text-end text-muted">
                                                <i className="fas fa-chevron-right"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ITEM 4 */}
                                    <div
                                        className="notifications-item unread px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#notifications-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center text-8 icon-bell">
                                                <i className="far fa-bell"></i>
                                            </div>
                                            <div className="col col-sm-10">
                                                <h4 className="text-3 mb-1">Mật khẩu đã được thay đổi</h4>
                                                <span className="text-muted">15 Tháng 5 2021</span>
                                            </div>
                                            <div className="col-1 text-end text-muted">
                                                <i className="fas fa-chevron-right"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* LIST CONTINUES — giữ nguyên cấu trúc như file gốc */}
                                    {/* Bạn có thể thêm các item khác từ file HTML gốc nếu muốn đầy đủ */}
                                </div>

                                {/* LOAD MORE */}
                                <div className="text-center mt-4">
                                    <button className="btn btn-sm btn-outline-secondary shadow-none">
                                        Tải thêm
                                    </button>
                                </div>

                                {/* MODAL DETAIL */}
                                <div
                                    id="notifications-detail"
                                    className="modal fade"
                                    role="dialog"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">

                                            <div className="modal-header">
                                                <h5 className="modal-title d-flex align-items-center fw-400">
                                                    <span className="text-6 me-2">
                                                        <i className="far fa-bell"></i>
                                                    </span>
                                                    Chi tiết thông báo
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Đóng"
                                                ></button>
                                            </div>

                                            <div className="modal-body p-4 text-3">
                                                <h4 className="text-5">
                                                    Cập nhật chính sách bảo mật — vui lòng đọc
                                                </h4>
                                                <p className="text-muted">16 Tháng 10 2020</p>

                                                <p className="fw-500">Kính gửi Smith Rhodes,</p>

                                                <p>
                                                    Chúng tôi đã cập nhật{" "}
                                                    <a href="#">
                                                        <u>chính sách bảo mật</u>
                                                    </a>{" "}
                                                    để giúp bạn dễ dàng hiểu cách chúng tôi thu thập, sử dụng,
                                                    chia sẻ, lưu trữ và xử lý dữ liệu cá nhân. Các thay đổi cũng
                                                    phản ánh sự tuân thủ các luật bảo mật mới nhất.
                                                </p>

                                                <p>
                                                    Các thay đổi có hiệu lực từ{" "}
                                                    <strong className="fw-500">01/01/2021</strong>. Bằng cách tiếp
                                                    tục sử dụng dịch vụ, bạn đồng ý với chính sách cập nhật.
                                                </p>

                                                <p>
                                                    Trân trọng,<br />
                                                    Đội ngũ Payyed
                                                </p>
                                            </div>

                                            <div className="modal-footer">
                                                <div className="btn-group m-0 w-100 row">
                                                    <button className="btn btn-secondary shadow-none col-6">
                                                        <i className="far fa-eye-slash me-1"></i>
                                                        Đánh dấu chưa đọc
                                                    </button>
                                                    <button className="btn btn-danger shadow-none col-6">
                                                        <i className="far fa-trash-alt me-1"></i>
                                                        Xóa thông báo
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* END MODAL */}

                            </div>
                        </div>
                        {/* END MAIN CONTENT */}

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default NotificationsPage;

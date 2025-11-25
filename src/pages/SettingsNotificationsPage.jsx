import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SettingsSecondNavigation from "../components/navigation/SettingsSecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

const SettingsNotificationsPage = () => {
    return (
        <div id="main-wrapper">
            <DashboardHeader />
            <SettingsSecondNavigation />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <DashboardSidebar />

                        <div className="col-lg-9">
                            {/* THÔNG BÁO QUA EMAIL */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 mb-3">Thông báo qua email</h3>
                                <hr className="mx-n4 mb-4" />
                                <p className="text-3">
                                    Chọn các loại email bạn muốn nhận. Bạn có thể thay đổi bất
                                    cứ lúc nào.
                                </p>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="emailActivity"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="emailActivity"
                                    >
                                        Hoạt động đăng nhập, bảo mật & cảnh báo quan trọng
                                    </label>
                                </div>
                                <div className="form-check mt-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="emailPromotions"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="emailPromotions"
                                    >
                                        Khuyến mãi, ưu đãi, tin tức sản phẩm
                                    </label>
                                </div>
                                <div className="form-check mt-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="emailUpdates"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="emailUpdates"
                                    >
                                        Cập nhật khảo sát, nghiên cứu, phản hồi người dùng
                                    </label>
                                </div>
                            </div>

                            {/* THÔNG BÁO QUA SMS */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 mb-3">Thông báo qua SMS</h3>
                                <hr className="mx-n4 mb-4" />
                                <p className="text-3">
                                    Nhận tin nhắn SMS cho những sự kiện quan trọng về tài khoản.
                                </p>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="smsActivity"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="smsActivity"
                                    >
                                        Hoạt động bất thường & cảnh báo đăng nhập
                                    </label>
                                </div>
                                <div className="form-check mt-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="smsPayments"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="smsPayments"
                                    >
                                        Thông báo thanh toán & giao dịch lớn
                                    </label>
                                </div>
                            </div>

                            {/* THÔNG BÁO TRONG ỨNG DỤNG */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 mb-3">Thông báo trong ứng dụng</h3>
                                <hr className="mx-n4 mb-4" />
                                <p className="text-3">
                                    Thông báo hiển thị trong trung tâm thông báo của Payyed.
                                </p>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inappAll"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="inappAll">
                                        Nhận tất cả thông báo trong ứng dụng
                                    </label>
                                </div>
                                <div className="form-check mt-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inappTips"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="inappTips">
                                        Mẹo sử dụng, gợi ý tính năng, hướng dẫn
                                    </label>
                                </div>
                            </div>

                            <div className="d-grid d-sm-flex justify-content-sm-end">
                                <button className="btn btn-primary" type="button">
                                    Lưu cài đặt thông báo
                                </button>
                            </div>
                        </div>
                        {/* end col-lg-9 */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SettingsNotificationsPage;

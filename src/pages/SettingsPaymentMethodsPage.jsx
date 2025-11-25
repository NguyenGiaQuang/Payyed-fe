// src/pages/SettingsPaymentMethodsPage.jsx
import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SettingsSecondNavigation from "../components/navigation/SettingsSecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

const SettingsPaymentMethodsPage = () => {
    return (
        <div id="main-wrapper">
            <DashboardHeader />
            <SettingsSecondNavigation active="paymentMethods" />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        {/* Sidebar bên trái */}
                        <DashboardSidebar />

                        {/* Nội dung chính */}
                        <div className="col-lg-9">
                            {/* THẺ TÍN DỤNG / GHI NỢ */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Thẻ tín dụng / ghi nợ
                                    <a
                                        href="#add-card"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-plus-circle" />
                                        </span>
                                        Thêm thẻ
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="border rounded p-3">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="fw-500">Visa •••• 4890</span>
                                                <span className="badge bg-success text-1 fw-500">
                                                    Mặc định
                                                </span>
                                            </div>
                                            <p className="mb-1 text-muted text-2">
                                                Hết hạn: 12/2025
                                            </p>
                                            <p className="mb-0 text-muted text-2">
                                                Tên: Smith Rhodes
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="border rounded p-3">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="fw-500">Mastercard •••• 3011</span>
                                            </div>
                                            <p className="mb-1 text-muted text-2">
                                                Hết hạn: 08/2024
                                            </p>
                                            <p className="mb-0 text-muted text-2">
                                                Tên: Smith Rhodes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal thêm thẻ */}
                            <div
                                id="add-card"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">
                                                Thêm thẻ tín dụng / ghi nợ
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            <form id="addCard" method="post">
                                                <div className="mb-3">
                                                    <label htmlFor="cardName" className="form-label">
                                                        Tên chủ thẻ
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cardName"
                                                        placeholder="Nhập tên trên thẻ"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="cardNumber" className="form-label">
                                                        Số thẻ
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cardNumber"
                                                        placeholder="•••• •••• •••• ••••"
                                                        required
                                                    />
                                                </div>
                                                <div className="row g-3">
                                                    <div className="col-sm-6">
                                                        <label htmlFor="expiry" className="form-label">
                                                            Ngày hết hạn
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="expiry"
                                                            placeholder="MM/YY"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label htmlFor="cvv" className="form-label">
                                                            CVV
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="cvv"
                                                            placeholder="•••"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-check form-switch mt-3">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="setDefaultCard"
                                                        defaultChecked
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="setDefaultCard"
                                                    >
                                                        Đặt làm thẻ mặc định
                                                    </label>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary" type="submit">
                                                        Lưu thẻ
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TÀI KHOẢN NGÂN HÀNG */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Tài khoản ngân hàng
                                    <a
                                        href="#add-bank"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-plus-circle" />
                                        </span>
                                        Thêm tài khoản
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="border rounded p-3">
                                            <div className="fw-500 mb-1">HDFC Bank</div>
                                            <p className="mb-1 text-muted text-2">
                                                Số tài khoản: ••••9025
                                            </p>
                                            <p className="mb-0 text-muted text-2">
                                                Tên: Smith Rhodes
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="border rounded p-3">
                                            <div className="fw-500 mb-1">Bank of America</div>
                                            <p className="mb-1 text-muted text-2">
                                                Số tài khoản: ••••1211
                                            </p>
                                            <p className="mb-0 text-muted text-2">
                                                Tên: Smith Rhodes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal thêm tài khoản ngân hàng */}
                            <div
                                id="add-bank"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">
                                                Thêm tài khoản ngân hàng
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            <form id="addBank" method="post">
                                                <div className="mb-3">
                                                    <label htmlFor="bankName" className="form-label">
                                                        Tên ngân hàng
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="bankName"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="accountName" className="form-label">
                                                        Tên chủ tài khoản
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="accountName"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="accountNumber"
                                                        className="form-label"
                                                    >
                                                        Số tài khoản
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="accountNumber"
                                                        required
                                                    />
                                                </div>
                                                <div className="d-grid mt-3">
                                                    <button className="btn btn-primary" type="submit">
                                                        Lưu tài khoản
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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

export default SettingsPaymentMethodsPage;

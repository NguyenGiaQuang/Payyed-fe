import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DepositWithdrawNavigation from "../components/navigation/DepositWithdrawNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

const DepositMoneyPage = () => {
    return (
        <div id="main-wrapper">
            {/* Header sau đăng nhập */}
            <DashboardHeader active="dashboard" />

            {/* Second navigation riêng cho Nạp/Rút tiền */}
            <DepositWithdrawNavigation active="deposit" />

            {/* CONTENT */}
            <div id="content" className="py-4">
                <div className="container">
                    {/* Steps Progress bar */}
                    <div className="row mt-4 mb-5">
                        <div className="col-lg-11 mx-auto">
                            <div className="row widget-steps">
                                <div className="col-4 step active">
                                    <div className="step-name">Chi tiết</div>
                                    <div className="progress">
                                        <div className="progress-bar" />
                                    </div>
                                    <a href="#!" className="step-dot" />
                                </div>
                                <div className="col-4 step disabled">
                                    <div className="step-name">Xác nhận</div>
                                    <div className="progress">
                                        <div className="progress-bar" />
                                    </div>
                                    <a href="#!" className="step-dot" />
                                </div>
                                <div className="col-4 step disabled">
                                    <div className="step-name">Thành công</div>
                                    <div className="progress">
                                        <div className="progress-bar" />
                                    </div>
                                    <a href="#!" className="step-dot" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="fw-400 text-center mt-3 mb-4">Nạp tiền</h2>

                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 pt-sm-5 pb-sm-5 px-sm-5 mb-4">
                                {/* Form nạp tiền */}
                                <form id="form-deposit-money" method="post">
                                    {/* Số tiền */}
                                    <div className="mb-3">
                                        <label htmlFor="youSend" className="form-label">
                                            Số tiền
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="youSend"
                                                defaultValue="1,000"
                                                placeholder=""
                                            />
                                            <span className="input-group-text p-0">
                                                <select
                                                    id="youSendCurrency"
                                                    className="selectpicker form-control bg-transparent"
                                                    data-style="form-select bg-transparent border-0"
                                                    data-container="body"
                                                    data-live-search="true"
                                                    required
                                                    defaultValue="USD"
                                                >
                                                    <optgroup label="Popular Currency">
                                                        <option
                                                            data-icon="currency-flag currency-flag-usd me-1"
                                                            data-subtext="United States dollar"
                                                            value="USD"
                                                        >
                                                            USD
                                                        </option>
                                                        <option
                                                            data-icon="currency-flag currency-flag-aud me-1"
                                                            data-subtext="Australian dollar"
                                                            value="AUD"
                                                        >
                                                            AUD
                                                        </option>
                                                        <option
                                                            data-icon="currency-flag currency-flag-inr me-1"
                                                            data-subtext="Indian rupee"
                                                            value="INR"
                                                        >
                                                            INR
                                                        </option>
                                                    </optgroup>
                                                    <option value="" data-divider="true">
                                                        divider
                                                    </option>
                                                    <optgroup label="Other Currency">
                                                        <option
                                                            data-icon="currency-flag currency-flag-eur me-1"
                                                            data-subtext="Euro"
                                                            value="EUR"
                                                        >
                                                            EUR
                                                        </option>
                                                        <option
                                                            data-icon="currency-flag currency-flag-gbp me-1"
                                                            data-subtext="British pound"
                                                            value="GBP"
                                                        >
                                                            GBP
                                                        </option>
                                                        <option
                                                            data-icon="currency-flag currency-flag-vnd me-1"
                                                            data-subtext="Vietnamese dong"
                                                            value="VND"
                                                        >
                                                            VND
                                                        </option>
                                                        {/* Có thể bổ sung thêm các option khác giống file gốc nếu cần */}
                                                    </optgroup>
                                                </select>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Phương thức thanh toán */}
                                    <div className="mb-3">
                                        <label htmlFor="paymentMethod" className="form-label">
                                            Phương thức thanh toán
                                        </label>
                                        <select
                                            id="paymentMethod"
                                            className="form-select"
                                            required
                                            defaultValue=""
                                        >
                                            <option value="">Chọn phương thức</option>
                                            <option>Thẻ tín dụng / ghi nợ</option>
                                            <option>Tài khoản ngân hàng</option>
                                        </select>
                                    </div>

                                    {/* Phí & tổng tiền */}
                                    <p className="text-muted mt-4">
                                        Phí giao dịch{" "}
                                        <span className="float-end d-flex align-items-center">
                                            <del>1.00 USD</del>
                                            <span className="badge bg-info text-1 text-white fw-500 ms-2">
                                                Miễn phí
                                            </span>
                                        </span>
                                    </p>
                                    <hr />
                                    <p className="text-4 fw-500">
                                        Bạn sẽ nạp{" "}
                                        <span className="float-end">1,000.00 USD</span>
                                    </p>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">
                                            Tiếp tục
                                        </button>
                                    </div>
                                </form>
                                {/* Form nạp tiền end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DepositMoneyPage;

import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SecondNavigation from "../components/navigation/SecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

const SendMoneyPage = () => {
    return (
        <div id="main-wrapper">
            {/* Header sau đăng nhập */}
            <DashboardHeader active="send-request" />

            {/* Second navigation: Send / Request */}
            <SecondNavigation active="send" />

            {/* CONTENT */}
            <div id="content" className="py-4">
                <div className="container">
                    {/* Thanh bước tiến trình */}
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

                    <h2 className="fw-400 text-center mt-3">Gửi tiền</h2>
                    <p className="lead text-center mb-4">
                        Gửi tiền mọi lúc, mọi nơi trên thế giới.
                    </p>

                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                                <h3 className="text-5 fw-400 mb-3 mb-sm-4">
                                    Thông tin người nhận
                                </h3>
                                <hr className="mx-n3 mx-sm-n5 mb-4" />

                                {/* FORM GỬI TIỀN */}
                                <form id="form-send-money" method="post">
                                    {/* Người nhận */}
                                    <div className="mb-3">
                                        <label htmlFor="emailID" className="form-label">
                                            Người nhận
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="emailID"
                                            required
                                            placeholder="Nhập email hoặc số điện thoại người nhận"
                                        />
                                    </div>

                                    {/* Bạn gửi */}
                                    <div className="mb-3">
                                        <label htmlFor="youSend" className="form-label">
                                            Bạn gửi
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="youSend"
                                                defaultValue="1,000"
                                            />
                                            <span className="input-group-text p-0">
                                                <select
                                                    id="youSendCurrency"
                                                    className="selectpicker form-control bg-transparent"
                                                    data-style="form-select bg-transparent border-0"
                                                    data-container="body"
                                                    data-live-search="true"
                                                    required
                                                >
                                                    <optgroup label="Popular Currency">
                                                        <option
                                                            data-icon="currency-flag currency-flag-usd me-1"
                                                            data-subtext="United States dollar"
                                                            value="USD"
                                                            defaultValue="USD"
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
                                                    {/* Giữ nguyên danh sách Other Currency như template */}
                                                    <optgroup label="Other Currency">
                                                        <option
                                                            data-icon="currency-flag currency-flag-aed me-1"
                                                            data-subtext="United Arab Emirates dirham"
                                                            value="AED"
                                                        >
                                                            AED
                                                        </option>
                                                        <option
                                                            data-icon="currency-flag currency-flag-ars me-1"
                                                            data-subtext="Argentine peso"
                                                            value="ARS"
                                                        >
                                                            ARS
                                                        </option>
                                                        <option
                                                            data-icon="currency-flag currency-flag-aud me-1"
                                                            data-subtext="Australian dollar"
                                                            value="AUD2"
                                                        >
                                                            AUD
                                                        </option>
                                                        {/* ...các option khác giữ nguyên nếu cần, có thể rút bớt cho ngắn mã */}
                                                    </optgroup>
                                                </select>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Người nhận nhận được */}
                                    <div className="mb-3">
                                        <label htmlFor="recipientGets" className="form-label">
                                            Người nhận sẽ nhận
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="recipientGets"
                                                defaultValue="1,410.06"
                                            />
                                            <span className="input-group-text p-0">
                                                <select
                                                    id="recipientCurrency"
                                                    className="selectpicker form-control bg-transparent"
                                                    data-style="form-select bg-transparent border-0"
                                                    data-container="body"
                                                    data-live-search="true"
                                                    required
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
                                                            defaultValue="AUD"
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
                                                    {/* Giữ nguyên nhóm Other Currency nếu muốn đầy đủ */}
                                                </select>
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-muted text-center">
                                        Tỷ giá hiện tại:{" "}
                                        <span className="fw-500">1 USD = 1.42030 AUD</span>
                                    </p>

                                    <hr />
                                    <p>
                                        Tổng phí
                                        <span className="float-end">7.21 USD</span>
                                    </p>
                                    <hr />
                                    <p className="text-4 fw-500">
                                        Tổng số tiền phải trả
                                        <span className="float-end">1,000.00 USD</span>
                                    </p>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">
                                            Tiếp tục
                                        </button>
                                    </div>
                                </form>
                                {/* END FORM */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SendMoneyPage;

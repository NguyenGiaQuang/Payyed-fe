import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SecondNavigation from "../components/navigation/SecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

const RequestMoneyPage = () => {
    return (
        <div id="main-wrapper">
            {/* Header */}
            <DashboardHeader active="send-request" />

            {/* Second navigation: Send / Request */}
            <SecondNavigation active="request" />

            {/* CONTENT */}
            <div id="content" className="py-4">
                <div className="container">
                    {/* Steps */}
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

                    <h2 className="fw-400 text-center mt-3">Yêu cầu thanh toán</h2>
                    <p className="lead text-center mb-4">
                        Gửi yêu cầu thanh toán của bạn mọi lúc, mọi nơi trên thế giới.
                    </p>

                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                                <h3 className="text-5 fw-400 mb-3 mb-sm-4">
                                    Thông tin người trả tiền
                                </h3>
                                <hr className="mx-n3 mx-sm-n5 mb-4" />

                                {/* FORM YÊU CẦU THANH TOÁN */}
                                <form id="form-request-money" method="post">
                                    {/* Tên người trả */}
                                    <div className="mb-3">
                                        <label htmlFor="payerName" className="form-label">
                                            Họ tên
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="payerName"
                                            required
                                            placeholder="Nhập họ tên người trả"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="emailID" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailID"
                                            required
                                            placeholder="Nhập email người trả"
                                        />
                                    </div>

                                    {/* Quốc gia */}
                                    <div className="mb-3">
                                        <label htmlFor="inputCountry" className="form-label">
                                            Quốc gia
                                        </label>
                                        <select
                                            className="form-select"
                                            id="inputCountry"
                                            name="country_id"
                                            defaultValue=""
                                        >
                                            <option value="">Chọn quốc gia</option>
                                            {/* Có thể rút gọn bớt list cho nhẹ; nếu muốn đầy đủ thì copy toàn bộ option từ HTML gốc */}
                                            <option value="230">Viet Nam</option>
                                            <option value="223">United States</option>
                                            <option value="222">United Kingdom</option>
                                            <option value="221">United Arab Emirates</option>
                                            {/* ...các quốc gia khác giống file gốc */}
                                        </select>
                                    </div>

                                    {/* Số tiền */}
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">
                                            Số tiền yêu cầu
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="amount"
                                                defaultValue="1,000.00"
                                            />
                                            <span className="input-group-text p-0">
                                                <select
                                                    id="requestCurrency"
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
                                                    {/* nhóm Other Currency tương tự như file gốc nếu cần */}
                                                </select>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Mô tả */}
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">
                                            Mô tả
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={4}
                                            id="description"
                                            required
                                            placeholder="Mô tả nội dung thanh toán"
                                        />
                                    </div>

                                    {/* Hạn thanh toán */}
                                    <div className="mb-3">
                                        <label htmlFor="paymentDue" className="form-label">
                                            Hạn thanh toán
                                        </label>
                                        <div className="position-relative">
                                            <input
                                                id="paymentDue"
                                                type="text"
                                                className="form-control"
                                                placeholder="Chọn ngày hết hạn"
                                            />
                                            <span className="icon-inside">
                                                <i className="fas fa-calendar-alt" />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="d-grid mt-4">
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

export default RequestMoneyPage;

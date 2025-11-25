import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DepositWithdrawNavigation from "../components/navigation/DepositWithdrawNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

const WithdrawMoneyPage = () => {
    return (
        <div id="main-wrapper">
            {/* Header */}
            <DashboardHeader active="dashboard" />

            {/* Second navigation Nạp/Rút tiền */}
            <DepositWithdrawNavigation active="withdraw" />

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

                    <h2 className="fw-400 text-center mt-3 mb-4">Rút tiền</h2>

                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 pt-sm-5 pb-sm-5 px-sm-5 mb-4">
                                {/* Thông tin số dư */}
                                <div className="text-center bg-primary p-4 rounded mb-4">
                                    <h3 className="text-10 text-white fw-400">$2956.00</h3>
                                    <p className="text-white mb-3">Số dư khả dụng</p>
                                    <button
                                        type="button"
                                        className="btn btn-outline-light btn-sm shadow-none text-uppercase rounded-pill text-1"
                                    >
                                        Rút toàn bộ số dư
                                    </button>
                                </div>

                                {/* Form rút tiền */}
                                <form id="form-withdraw-money" method="post">
                                    {/* Rút về đâu */}
                                    <div className="mb-3">
                                        <label htmlFor="withdrawto" className="form-label">
                                            Rút về
                                        </label>
                                        <select
                                            id="withdrawto"
                                            className="form-select"
                                            required
                                            defaultValue=""
                                        >
                                            <option value="">
                                                HDFC Bank - XXXXXXXXXXXX-9025
                                            </option>
                                            <option>Bank A/c 2 - XXXXXX-1211</option>
                                            <option>Bank A/c 3 - XXXXXX-2011</option>
                                            <option>Bank A/c 4 - XXXXXX-2011</option>
                                        </select>
                                    </div>

                                    {/* Số tiền */}
                                    <div className="mb-3">
                                        <label htmlFor="withdrawAmount" className="form-label">
                                            Số tiền
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="withdrawAmount"
                                                defaultValue="1,000"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>

                                    {/* Phí & tổng tiền rút */}
                                    <p className="text-muted mt-4">
                                        Phí giao dịch{" "}
                                        <span className="float-end d-flex align-items-center">
                                            5.00 USD
                                        </span>
                                    </p>
                                    <hr />
                                    <p className="text-3 fw-500">
                                        Số tiền rút{" "}
                                        <span className="float-end">1,000.00 USD</span>
                                    </p>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">
                                            Tiếp tục
                                        </button>
                                    </div>
                                </form>
                                {/* Form rút tiền end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default WithdrawMoneyPage;

import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import Footer from "../components/layout/Footer";

const TransactionsPage = () => {
    return (
        <div id="main-wrapper">
            {/* Header sau đăng nhập */}
            <DashboardHeader active="transactions" />

            {/* CONTENT */}
            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        {/* LEFT SIDEBAR */}
                        <DashboardSidebar />

                        {/* MIDDLE PANEL */}
                        <div className="col-lg-9">
                            <h2 className="fw-400 mb-3">Lịch sử giao dịch</h2>

                            {/* BỘ LỌC */}
                            <div className="row">
                                <div className="col mb-2">
                                    <form id="filterTransactions" method="post">
                                        <div className="row g-3 mb-3">
                                            {/* Date Range */}
                                            <div className="col-sm-6 col-md-5">
                                                <div className="position-relative">
                                                    <input
                                                        id="dateRange"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Khoảng thời gian"
                                                    />
                                                    <span className="icon-inside">
                                                        <i className="fas fa-calendar-alt" />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Link “Tất cả bộ lọc” */}
                                            <div className="col-auto d-flex align-items-center me-auto">
                                                <a
                                                    className="btn-link"
                                                    data-bs-toggle="collapse"
                                                    href="#allFilters"
                                                    aria-expanded="false"
                                                    aria-controls="allFilters"
                                                >
                                                    Tất cả bộ lọc
                                                    <i className="fas fa-sliders-h text-3 ms-1" />
                                                </a>
                                            </div>

                                            {/* Statements dropdown */}
                                            <div className="col-auto d-flex align-items-center ms-auto">
                                                <div className="dropdown">
                                                    <a
                                                        className="text-muted btn-link"
                                                        href="#!"
                                                        role="button"
                                                        id="statements"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-file-download text-3 me-1" />
                                                        Xuất sao kê
                                                    </a>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="statements"
                                                    >
                                                        <a className="dropdown-item" href="#!">
                                                            CSV
                                                        </a>
                                                        <a className="dropdown-item" href="#!">
                                                            PDF
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* KHỐI CÁC RADIO FILTER */}
                                            <div className="col-12 collapse" id="allFilters">
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="allTransactions"
                                                        name="allFilters"
                                                        defaultChecked
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="allTransactions"
                                                    >
                                                        Tất cả giao dịch
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="paymentsSend"
                                                        name="allFilters"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="paymentsSend"
                                                    >
                                                        Giao dịch gửi đi
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="paymentsReceived"
                                                        name="allFilters"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="paymentsReceived"
                                                    >
                                                        Giao dịch nhận
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="refunds"
                                                        name="allFilters"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="refunds"
                                                    >
                                                        Hoàn tiền
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="withdrawal"
                                                        name="allFilters"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="withdrawal"
                                                    >
                                                        Rút tiền
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="deposit"
                                                        name="allFilters"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="deposit"
                                                    >
                                                        Nạp tiền
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* DANH SÁCH GIAO DỊCH */}
                            <div className="bg-white shadow-sm rounded py-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center px-4 mb-4">
                                    Tất cả giao dịch
                                </h3>

                                {/* Tiêu đề cột */}
                                <div className="transaction-title py-2 px-4">
                                    <div className="row">
                                        <div className="col-2 col-sm-1 text-center">
                                            <span>Ngày</span>
                                        </div>
                                        <div className="col col-sm-7">Mô tả</div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center">
                                            Trạng thái
                                        </div>
                                        <div className="col-3 col-sm-2 text-end">Số tiền</div>
                                    </div>
                                </div>

                                {/* LIST ITEM – giữ nguyên các hàng demo của template */}
                                <div className="transaction-list">
                                    {/* 1 */}
                                    <div
                                        className="transaction-item px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#transaction-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center">
                                                <span className="d-block text-4 fw-300">16</span>
                                                <span className="d-block text-1 fw-300 text-uppercase">
                                                    APR
                                                </span>
                                            </div>
                                            <div className="col col-sm-7">
                                                <span className="d-block text-4">HDFC Bank</span>
                                                <span className="text-muted">
                                                    Rút tiền về tài khoản ngân hàng
                                                </span>
                                            </div>
                                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                                                <span
                                                    className="text-warning"
                                                    data-bs-toggle="tooltip"
                                                    title="Đang xử lý"
                                                >
                                                    <i className="fas fa-ellipsis-h" />
                                                </span>
                                            </div>
                                            <div className="col-3 col-sm-2 text-end text-4">
                                                <span className="text-nowrap">- $562</span>{" "}
                                                <span className="text-2 text-uppercase">(USD)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2 */}
                                    <div
                                        className="transaction-item px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#transaction-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center">
                                                <span className="d-block text-4 fw-300">15</span>
                                                <span className="d-block text-1 fw-300 text-uppercase">
                                                    APR
                                                </span>
                                            </div>
                                            <div className="col col-sm-7">
                                                <span className="d-block text-4">Envato Pty Ltd</span>
                                                <span className="text-muted">Thanh toán nhận</span>
                                            </div>
                                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                                                <span
                                                    className="text-success"
                                                    data-bs-toggle="tooltip"
                                                    title="Hoàn tất"
                                                >
                                                    <i className="fas fa-check-circle" />
                                                </span>
                                            </div>
                                            <div className="col-3 col-sm-2 text-end text-4">
                                                <span className="text-nowrap">+ $562</span>{" "}
                                                <span className="text-2 text-uppercase">(USD)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3 */}
                                    <div
                                        className="transaction-item px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#transaction-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center">
                                                <span className="d-block text-4 fw-300">04</span>
                                                <span className="d-block text-1 fw-300 text-uppercase">
                                                    APR
                                                </span>
                                            </div>
                                            <div className="col col-sm-7">
                                                <span className="d-block text-4">HDFC Bank</span>
                                                <span className="text-muted">
                                                    Rút tiền về tài khoản ngân hàng
                                                </span>
                                            </div>
                                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                                                <span
                                                    className="text-success"
                                                    data-bs-toggle="tooltip"
                                                    title="Hoàn tất"
                                                >
                                                    <i className="fas fa-check-circle" />
                                                </span>
                                            </div>
                                            <div className="col-3 col-sm-2 text-end text-4">
                                                <span className="text-nowrap">- $106</span>{" "}
                                                <span className="text-2 text-uppercase">(USD)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 4 */}
                                    <div
                                        className="transaction-item px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#transaction-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center">
                                                <span className="d-block text-4 fw-300">28</span>
                                                <span className="d-block text-1 fw-300 text-uppercase">
                                                    MAR
                                                </span>
                                            </div>
                                            <div className="col col-sm-7">
                                                <span className="d-block text-4">Patrick Cary</span>
                                                <span className="text-muted">Hoàn tiền</span>
                                            </div>
                                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                                                <span
                                                    className="text-success"
                                                    data-bs-toggle="tooltip"
                                                    title="Hoàn tất"
                                                >
                                                    <i className="fas fa-check-circle" />
                                                </span>
                                            </div>
                                            <div className="col-3 col-sm-2 text-end text-4">
                                                <span className="text-nowrap">+ $60</span>{" "}
                                                <span className="text-2 text-uppercase">(USD)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 5 */}
                                    <div
                                        className="transaction-item px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#transaction-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center">
                                                <span className="d-block text-4 fw-300">28</span>
                                                <span className="d-block text-1 fw-300 text-uppercase">
                                                    MAR
                                                </span>
                                            </div>
                                            <div className="col col-sm-7">
                                                <span className="d-block text-4">Patrick Cary</span>
                                                <span className="text-muted">Thanh toán gửi đi</span>
                                            </div>
                                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                                                <span
                                                    className="text-danger"
                                                    data-bs-toggle="tooltip"
                                                    title="Đã hủy"
                                                >
                                                    <i className="fas fa-times-circle" />
                                                </span>
                                            </div>
                                            <div className="col-3 col-sm-2 text-end text-4">
                                                <span className="text-nowrap">- $60</span>{" "}
                                                <span className="text-2 text-uppercase">(USD)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 6 */}
                                    <div
                                        className="transaction-item px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#transaction-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center">
                                                <span className="d-block text-4 fw-300">16</span>
                                                <span className="d-block text-1 fw-300 text-uppercase">
                                                    FEB
                                                </span>
                                            </div>
                                            <div className="col col-sm-7">
                                                <span className="d-block text-4">HDFC Bank</span>
                                                <span className="text-muted">
                                                    Rút tiền về tài khoản ngân hàng
                                                </span>
                                            </div>
                                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                                                <span
                                                    className="text-success"
                                                    data-bs-toggle="tooltip"
                                                    title="Hoàn tất"
                                                >
                                                    <i className="fas fa-check-circle" />
                                                </span>
                                            </div>
                                            <div className="col-3 col-sm-2 text-end text-4">
                                                <span className="text-nowrap">- $1498</span>{" "}
                                                <span className="text-2 text-uppercase">(USD)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 7 */}
                                    <div
                                        className="transaction-item px-4 py-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#transaction-detail"
                                    >
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center">
                                                <span className="d-block text-4 fw-300">15</span>
                                                <span className="d-block text-1 fw-300 text-uppercase">
                                                    FEB
                                                </span>
                                            </div>
                                            <div className="col col-sm-7">
                                                <span className="d-block text-4">Envato Pty Ltd</span>
                                                <span className="text-muted">Thanh toán nhận</span>
                                            </div>
                                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                                                <span
                                                    className="text-success"
                                                    data-bs-toggle="tooltip"
                                                    title="Hoàn tất"
                                                >
                                                    <i className="fas fa-check-circle" />
                                                </span>
                                            </div>
                                            <div className="col-3 col-sm-2 text-end text-4">
                                                <span className="text-nowrap">+ $1498</span>{" "}
                                                <span className="text-2 text-uppercase">(USD)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* MODAL CHI TIẾT GIAO DỊCH */}
                                <div
                                    id="transaction-detail"
                                    className="modal fade"
                                    role="dialog"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog modal-dialog-centered transaction-details">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <div className="row g-0">
                                                    <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-start py-4">
                                                        <div className="my-auto text-center text-white">
                                                            <div className="text-17 my-3">
                                                                <i className="fas fa-building" />
                                                            </div>
                                                            <h3 className="text-4 fw-400 my-3">
                                                                Envato Pty Ltd
                                                            </h3>
                                                            <div className="text-8 fw-500 my-4">
                                                                $557.20
                                                            </div>
                                                            <p>15 March 2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-7">
                                                        <h5 className="text-5 fw-400 m-3">
                                                            Chi tiết giao dịch
                                                            <button
                                                                type="button"
                                                                className="btn-close text-2 float-end"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Đóng"
                                                            />
                                                        </h5>
                                                        <hr />
                                                        <div className="px-3">
                                                            <ul className="list-unstyled">
                                                                <li className="mb-2">
                                                                    Số tiền thanh toán
                                                                    <span className="float-end text-3">
                                                                        $562.00
                                                                    </span>
                                                                </li>
                                                                <li className="mb-2">
                                                                    Phí
                                                                    <span className="float-end text-3">
                                                                        -$4.80
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <hr className="mb-2" />
                                                            <p className="d-flex align-items-center fw-500 mb-0">
                                                                Tổng cộng
                                                                <span className="text-3 ms-auto">
                                                                    $557.20
                                                                </span>
                                                            </p>
                                                            <hr className="mb-4 mt-2" />

                                                            <ul className="list-unstyled">
                                                                <li className="fw-500">Người thanh toán:</li>
                                                                <li className="text-muted">
                                                                    Envato Pty Ltd
                                                                </li>
                                                            </ul>
                                                            <ul className="list-unstyled">
                                                                <li className="fw-500">Mã giao dịch:</li>
                                                                <li className="text-muted">
                                                                    26566689645685976589
                                                                </li>
                                                            </ul>
                                                            <ul className="list-unstyled">
                                                                <li className="fw-500">Mô tả:</li>
                                                                <li className="text-muted">
                                                                    Envato March 2021 Member Payment
                                                                </li>
                                                            </ul>
                                                            <ul className="list-unstyled">
                                                                <li className="fw-500">Trạng thái:</li>
                                                                <li className="text-muted">
                                                                    Hoàn tất
                                                                    <span className="text-success text-3 ms-1">
                                                                        <i className="fas fa-check-circle" />
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* PHÂN TRANG */}
                                <ul className="pagination justify-content-center mt-4 mb-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#!" tabIndex={-1}>
                                            <i className="fas fa-angle-left" />
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#!">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item d-flex align-content-center flex-wrap text-muted text-5 mx-1">
                                        ……
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">
                                            15
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">
                                            <i className="fas fa-angle-right" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* END MIDDLE */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TransactionsPage;

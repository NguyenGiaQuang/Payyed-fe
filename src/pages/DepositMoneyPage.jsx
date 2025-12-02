// src/pages/DepositMoneyPage.jsx
import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DepositWithdrawNavigation from "../components/navigation/DepositWithdrawNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

import { getDefaultAccount, requestCashDeposit } from "../api/account";

const DepositMoneyPage = () => {
    const [loadingAccount, setLoadingAccount] = useState(true);
    const [accountError, setAccountError] = useState(null);
    const [account, setAccount] = useState(null);

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("Nạp tiền mặt 500k");
    const [submitLoading, setSubmitLoading] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [requestResult, setRequestResult] = useState(null);

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                setLoadingAccount(true);
                setAccountError(null);
                const acc = await getDefaultAccount();
                if (!acc || !acc.id) {
                    setAccountError(
                        "Bạn chưa có tài khoản mặc định. Hãy tạo tài khoản và chọn tài khoản mặc định trước khi nạp tiền."
                    );
                } else {
                    setAccount(acc);
                }
            } catch (err) {
                console.error(err);
                setAccountError("Không tải được tài khoản mặc định.");
            } finally {
                setLoadingAccount(false);
            }
        };

        fetchAccount();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!account || !account.id) {
            setSubmitError("Không tìm thấy tài khoản mặc định.");
            return;
        }

        const numericAmount = Number(amount);
        if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
            setSubmitError("Số tiền nạp phải là số dương hợp lệ.");
            return;
        }

        try {
            setSubmitLoading(true);
            setSubmitError(null);

            const data = await requestCashDeposit({
                accountId: account.id,
                amount: numericAmount,
                description: description.trim() || "Nạp tiền mặt",
            });

            setRequestResult(data);
        } catch (err) {
            console.error(err);
            setSubmitError(
                err.response?.data?.message ||
                "Gửi yêu cầu nạp tiền thất bại."
            );
        } finally {
            setSubmitLoading(false);
        }
    };

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
                    {/* <div className="row mt-4 mb-5">
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
                    </div> */}

                    <h2 className="fw-400 text-center mt-3 mb-4">Nạp tiền mặt vào tài khoản</h2>

                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 pt-sm-5 pb-sm-5 px-sm-5 mb-4">
                                {/* Thông tin tài khoản */}
                                <div className="mb-4">
                                    {loadingAccount ? (
                                        <p className="text-muted mb-0">
                                            Đang tải tài khoản mặc định...
                                        </p>
                                    ) : accountError ? (
                                        <p className="text-danger mb-0">
                                            {accountError}
                                        </p>
                                    ) : account ? (
                                        <>
                                            <div className="text-muted text-2">
                                                Tài khoản nạp tiền
                                            </div>
                                            <div className="fw-500">
                                                {account.account_no} (
                                                {account.currency || "VND"})
                                            </div>
                                            <div className="text-muted text-2">
                                                Trạng thái: {account.status}
                                            </div>
                                        </>
                                    ) : null}
                                </div>

                                {/* Form nạp tiền */}
                                <form
                                    id="form-deposit-money"
                                    method="post"
                                    onSubmit={handleSubmit}
                                >
                                    {/* Số tiền */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="amount"
                                            className="form-label"
                                        >
                                            Số tiền nạp (VND)
                                        </label>
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="amount"
                                                min="1000"
                                                step="1000"
                                                placeholder="Nhập số tiền, ví dụ 500000"
                                                value={amount}
                                                onChange={(e) =>
                                                    setAmount(e.target.value)
                                                }
                                                required
                                                disabled={submitLoading}
                                            />
                                            <span className="input-group-text">
                                                VND
                                            </span>
                                        </div>
                                    </div>

                                    {/* Mô tả */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="description"
                                            className="form-label"
                                        >
                                            Ghi chú / Mô tả
                                        </label>
                                        <textarea
                                            id="description"
                                            className="form-control"
                                            rows="2"
                                            value={description}
                                            onChange={(e) =>
                                                setDescription(e.target.value)
                                            }
                                            disabled={submitLoading}
                                        />
                                    </div>

                                    {/* Thông tin phí & tổng tiền (hiện hiển thị đơn giản) */}
                                    <p className="text-muted mt-4 mb-1">
                                        Phí giao dịch{" "}
                                        <span className="float-end d-flex align-items-center">
                                            <del>5.000 VND</del>
                                            <span className="badge bg-info text-1 text-white fw-500 ms-2">
                                                Miễn phí
                                            </span>
                                        </span>
                                    </p>
                                    <hr />
                                    <p className="text-4 fw-500">
                                        Bạn sẽ gửi yêu cầu nạp{" "}
                                        <span className="float-end">
                                            {amount
                                                ? new Intl.NumberFormat(
                                                    "vi-VN"
                                                ).format(
                                                    Number(amount) || 0
                                                )
                                                : "0"}{" "}
                                            VND
                                        </span>
                                    </p>

                                    {/* Lỗi submit */}
                                    {submitError && (
                                        <div className="alert alert-danger py-2">
                                            {submitError}
                                        </div>
                                    )}

                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={
                                                submitLoading ||
                                                !account ||
                                                !!accountError
                                            }
                                        >
                                            {submitLoading
                                                ? "Đang gửi yêu cầu..."
                                                : "Gửi yêu cầu nạp tiền"}
                                        </button>
                                    </div>
                                </form>
                                {/* Form nạp tiền end */}
                            </div>

                            {/* Thông tin yêu cầu sau khi gửi */}
                            {requestResult && (
                                <div className="bg-white shadow-sm rounded p-4 mb-4">
                                    <h4 className="fw-500 mb-3">
                                        Thông tin yêu cầu nạp tiền
                                    </h4>
                                    <p className="mb-1">
                                        <strong>Mã yêu cầu:</strong>{" "}
                                        {requestResult.id}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Trạng thái:</strong>{" "}
                                        <span className="badge bg-warning text-dark">
                                            {requestResult.status}
                                        </span>
                                    </p>
                                    <p className="mb-1">
                                        <strong>Số tiền:</strong>{" "}
                                        {new Intl.NumberFormat("vi-VN").format(
                                            Number(
                                                requestResult.amount || 0
                                            )
                                        )}{" "}
                                        {requestResult.currency || "VND"}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Ghi chú khách hàng:</strong>{" "}
                                        {requestResult.customer_note}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Thời gian yêu cầu:</strong>{" "}
                                        {requestResult.requested_at
                                            ? new Date(
                                                requestResult.requested_at
                                            ).toLocaleString("vi-VN")
                                            : "-"}
                                    </p>
                                    <p className="mb-0 text-muted text-2">
                                        Yêu cầu của bạn đang ở trạng thái{" "}
                                        <strong>
                                            {requestResult.status}
                                        </strong>
                                        . Nhân viên ngân hàng sẽ xử lý và
                                        cập nhật số dư tài khoản của bạn sau
                                        khi nạp tiền thành công.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DepositMoneyPage;

// src/pages/WithdrawMoneyPage.jsx
import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DepositWithdrawNavigation from "../components/navigation/DepositWithdrawNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

import {
    getDefaultAccount,
    requestCashWithdraw,
    getAccountStatement,
} from "../api/account";

const WithdrawMoneyPage = () => {
    const [loadingAccount, setLoadingAccount] = useState(true);
    const [accountError, setAccountError] = useState(null);
    const [account, setAccount] = useState(null);

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("Rút tiền mặt 300k");
    const [submitLoading, setSubmitLoading] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [requestResult, setRequestResult] = useState(null);

    // Lấy tài khoản + số dư từ statement
    useEffect(() => {
        const fetchAccountWithBalance = async () => {
            try {
                setLoadingAccount(true);
                setAccountError(null);

                // 1. Lấy tài khoản mặc định
                const acc = await getDefaultAccount();
                if (!acc || !acc.id) {
                    setAccountError(
                        "Bạn chưa có tài khoản mặc định. Hãy tạo tài khoản và chọn tài khoản mặc định trước khi rút tiền."
                    );
                    return;
                }

                // 2. Lấy statement để lấy current_balance chính xác
                const now = new Date();
                const toIso = now.toISOString();
                // from có thể là một ngày rất sớm, vì current_balance không phụ thuộc filter
                const fromIso = "2024-11-02T00:00:00.000Z";

                const statement = await getAccountStatement({
                    accountId: acc.id,
                    from: fromIso,
                    to: toIso,
                });

                const stmtAcc = statement.account || {};
                const currentBalance =
                    stmtAcc.current_balance ??
                    statement.closing_balance ??
                    acc.current_balance ??
                    0;

                const accountWithBalance = {
                    ...acc,
                    current_balance: currentBalance,
                    currency: acc.currency || stmtAcc.currency || "VND",
                    status: acc.status || stmtAcc.status,
                };

                setAccount(accountWithBalance);
            } catch (err) {
                console.error(err);
                setAccountError("Không tải được tài khoản hoặc số dư.");
            } finally {
                setLoadingAccount(false);
            }
        };

        fetchAccountWithBalance();
    }, []);

    const handleWithdrawAll = () => {
        if (!account) return;
        const balance = Number(account.current_balance || 0);
        if (balance > 0) {
            setAmount(String(Math.floor(balance)));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!account || !account.id) {
            setSubmitError("Không tìm thấy tài khoản mặc định.");
            return;
        }

        const numericAmount = Number(amount);
        if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
            setSubmitError("Số tiền rút phải là số dương hợp lệ.");
            return;
        }

        try {
            setSubmitLoading(true);
            setSubmitError(null);

            const data = await requestCashWithdraw({
                accountId: account.id,
                amount: numericAmount,
                description: description.trim() || "Rút tiền mặt",
            });

            setRequestResult(data);
        } catch (err) {
            console.error(err);
            setSubmitError(
                err.response?.data?.message ||
                "Gửi yêu cầu rút tiền thất bại."
            );
        } finally {
            setSubmitLoading(false);
        }
    };

    const currentBalanceNumber = Number(account?.current_balance || 0);

    return (
        <div id="main-wrapper">
            {/* Header */}
            <DashboardHeader active="dashboard" />

            {/* Second navigation Nạp/Rút tiền */}
            <DepositWithdrawNavigation active="withdraw" />

            {/* CONTENT */}
            <div id="content" className="py-4">
                <div className="container">
                    {/* Bỏ thanh steps Chi tiết - Xác nhận - Thành công */}

                    <h2 className="fw-400 text-center mt-3 mb-4">
                        Rút tiền mặt từ tài khoản
                    </h2>

                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 pt-sm-5 pb-sm-5 px-sm-5 mb-4">
                                {/* Thông tin số dư thực tế */}
                                <div className="text-center bg-primary p-4 rounded mb-4">
                                    {loadingAccount ? (
                                        <>
                                            <h3 className="text-10 text-white fw-400">
                                                ...
                                            </h3>
                                            <p className="text-white mb-0">
                                                Đang tải số dư...
                                            </p>
                                        </>
                                    ) : accountError ? (
                                        <>
                                            <h3 className="text-6 text-white fw-400">
                                                Lỗi
                                            </h3>
                                            <p className="text-white mb-0">
                                                {accountError}
                                            </p>
                                        </>
                                    ) : account ? (
                                        <>
                                            <h3 className="text-10 text-white fw-400">
                                                {new Intl.NumberFormat(
                                                    "vi-VN"
                                                ).format(
                                                    currentBalanceNumber
                                                )}{" "}
                                                {account.currency || "VND"}
                                            </h3>
                                            <p className="text-white mb-3">
                                                Số dư khả dụng
                                            </p>
                                            <button
                                                type="button"
                                                className="btn btn-outline-light btn-sm shadow-none text-uppercase rounded-pill text-1"
                                                onClick={handleWithdrawAll}
                                                disabled={submitLoading}
                                            >
                                                Rút toàn bộ số dư
                                            </button>
                                        </>
                                    ) : null}
                                </div>

                                {/* Thông tin tài khoản */}
                                {account && !accountError && (
                                    <div className="mb-3 text-center text-muted text-2">
                                        Tài khoản rút tiền:{" "}
                                        <strong>{account.account_no}</strong>{" "}
                                        ({account.currency || "VND"}) –{" "}
                                        {account.status}
                                    </div>
                                )}

                                {/* Form rút tiền */}
                                <form
                                    id="form-withdraw-money"
                                    method="post"
                                    onSubmit={handleSubmit}
                                >
                                    {/* Số tiền */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="withdrawAmount"
                                            className="form-label"
                                        >
                                            Số tiền rút (VND)
                                        </label>
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="withdrawAmount"
                                                min="1000"
                                                step="1000"
                                                placeholder="Nhập số tiền, ví dụ 300000"
                                                value={amount}
                                                onChange={(e) =>
                                                    setAmount(e.target.value)
                                                }
                                                required
                                                disabled={
                                                    submitLoading ||
                                                    !!accountError
                                                }
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
                                            disabled={
                                                submitLoading ||
                                                !!accountError
                                            }
                                        />
                                    </div>

                                    {/* Phí & tổng tiền (demo giống nạp tiền) */}
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
                                        Bạn sẽ gửi yêu cầu rút{" "}
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
                                                : "Gửi yêu cầu rút tiền"}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Thông tin yêu cầu sau khi gửi */}
                            {requestResult && (
                                <div className="bg-white shadow-sm rounded p-4 mb-4">
                                    <h4 className="fw-500 mb-3">
                                        Thông tin yêu cầu rút tiền
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
                                        Yêu cầu rút tiền của bạn đang ở trạng
                                        thái{" "}
                                        <strong>
                                            {requestResult.status}
                                        </strong>
                                        . Nhân viên ngân hàng sẽ xử lý và liên
                                        hệ để bạn nhận tiền mặt.
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

export default WithdrawMoneyPage;

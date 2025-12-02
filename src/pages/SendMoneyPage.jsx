// src/pages/SendMoneyPage.jsx
import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SecondNavigation from "../components/navigation/SecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

import { getDefaultAccount } from "../api/account";
import { getMe } from "../api/auth";
import {
    calcInternalTransferFee,
    createInternalTransfer,
} from "../api/transfer";
import { requestOtp, verifyOtp } from "../api/otp";

const SendMoneyPage = () => {
    const [step, setStep] = useState(1); // 1: Chi tiết, 2: OTP, 3: Thành công

    const [loadingInit, setLoadingInit] = useState(true);
    const [initError, setInitError] = useState(null);

    const [fromAccount, setFromAccount] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    // Form dữ liệu
    const [toAccountNo, setToAccountNo] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("Chuyển tiền nội bộ");

    // Phí & tổng tiền
    const [feeInfo, setFeeInfo] = useState(null); // { amount, fee, total_debit }

    // OTP
    const [processingFeeAndOtp, setProcessingFeeAndOtp] = useState(false);
    const [otpRequestId, setOtpRequestId] = useState(null);
    const [otpCode, setOtpCode] = useState("");
    const [otpExpiresIn, setOtpExpiresIn] = useState(null);
    const [otpError, setOtpError] = useState(null);

    // Chuyển tiền
    const [processingTransfer, setProcessingTransfer] = useState(false);
    const [transferResult, setTransferResult] = useState(null);

    const [globalError, setGlobalError] = useState(null);

    useEffect(() => {
        const fetchInit = async () => {
            try {
                setLoadingInit(true);
                setInitError(null);

                const [acc, meRes] = await Promise.all([
                    getDefaultAccount().catch(() => null),
                    getMe().catch(() => null),
                ]);

                if (!acc || !acc.account_no) {
                    setInitError(
                        "Bạn chưa có tài khoản mặc định. Hãy tạo và chọn tài khoản mặc định trước khi chuyển tiền."
                    );
                } else {
                    setFromAccount(acc);
                }

                if (
                    meRes &&
                    meRes.data &&
                    meRes.data.user &&
                    meRes.data.user.email
                ) {
                    setUserEmail(meRes.data.user.email);
                } else {
                    // fallback email test
                    setUserEmail("gaconhamnam113@gmail.com");
                }
            } catch (err) {
                console.error(err);
                setInitError("Không tải được thông tin tài khoản hoặc người dùng.");
            } finally {
                setLoadingInit(false);
            }
        };

        fetchInit();
    }, []);

    const handleCalculateFeeAndRequestOtp = async (e) => {
        e.preventDefault();
        if (!fromAccount || !fromAccount.account_no) {
            setGlobalError("Không tìm thấy tài khoản nguồn.");
            return;
        }
        const numericAmount = Number(amount);
        if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
            setGlobalError("Số tiền chuyển phải là số dương hợp lệ.");
            return;
        }
        if (!toAccountNo.trim()) {
            setGlobalError("Vui lòng nhập số tài khoản đích.");
            return;
        }

        try {
            setProcessingFeeAndOtp(true);
            setGlobalError(null);
            setOtpError(null);

            // 1. Tính phí
            const feeRes = await calcInternalTransferFee(numericAmount);
            setFeeInfo({
                amount: feeRes.amount,
                fee: feeRes.fee,
                total_debit: feeRes.total_debit,
            });

            // 2. Gửi OTP
            const otpRes = await requestOtp({
                channel: "EMAIL",
                purpose: "TRANSFER",
                email: userEmail || "gaconhamnam113@gmail.com",
            });

            setOtpRequestId(otpRes.request_id);
            setOtpExpiresIn(otpRes.expires_in);
            setOtpCode("");
            setStep(2);
        } catch (err) {
            console.error(err);
            setGlobalError(
                err.response?.data?.message ||
                "Không tính được phí hoặc gửi OTP. Vui lòng thử lại."
            );
        } finally {
            setProcessingFeeAndOtp(false);
        }
    };

    const handleVerifyOtpAndTransfer = async (e) => {
        e.preventDefault();
        if (!otpRequestId) {
            setOtpError("Chưa có yêu cầu OTP hợp lệ. Vui lòng quay lại bước 1.");
            return;
        }
        if (!otpCode.trim()) {
            setOtpError("Vui lòng nhập mã OTP.");
            return;
        }
        if (!fromAccount || !fromAccount.account_no) {
            setOtpError("Không tìm thấy tài khoản nguồn.");
            return;
        }

        const numericAmount = Number(amount);
        const fee = Number(feeInfo?.fee || 0);

        try {
            setProcessingTransfer(true);
            setOtpError(null);
            setGlobalError(null);

            // 1. Xác thực OTP
            const verifyRes = await verifyOtp({
                request_id: otpRequestId,
                otp_code: otpCode.trim(),
            });

            if (!verifyRes.ok) {
                setOtpError("Mã OTP không chính xác.");
                setProcessingTransfer(false);
                return;
            }

            // 2. Thực hiện chuyển tiền
            const transferRes = await createInternalTransfer({
                from_account_no: fromAccount.account_no,
                to_account_no: toAccountNo.trim(),
                amount: numericAmount,
                fee,
                description: description.trim() || "Chuyển tiền nội bộ",
                idem_key: `transfer-${Date.now()}`,
            });

            setTransferResult(transferRes);
            setStep(3);
        } catch (err) {
            console.error(err);
            setOtpError(
                err.response?.data?.message ||
                "Thực hiện chuyển tiền thất bại. Vui lòng thử lại."
            );
        } finally {
            setProcessingTransfer(false);
        }
    };

    const renderStepsBar = () => (
        <div className="row mt-4 mb-5">
            <div className="col-lg-11 mx-auto">
                <div className="row widget-steps">
                    <div
                        className={`col-4 step ${step >= 1 ? "active" : "disabled"
                            }`}
                    >
                        <div className="step-name">Chi tiết</div>
                        <div className="progress">
                            <div className="progress-bar" />
                        </div>
                        <a href="#!" className="step-dot" />
                    </div>
                    <div
                        className={`col-4 step ${step >= 2 ? "active" : "disabled"
                            }`}
                    >
                        <div className="step-name">Xác nhận OTP</div>
                        <div className="progress">
                            <div className="progress-bar" />
                        </div>
                        <a href="#!" className="step-dot" />
                    </div>
                    <div
                        className={`col-4 step ${step >= 3 ? "active" : "disabled"
                            }`}
                    >
                        <div className="step-name">Thành công</div>
                        <div className="progress">
                            <div className="progress-bar" />
                        </div>
                        <a href="#!" className="step-dot" />
                    </div>
                </div>
            </div>
        </div>
    );

    const renderStep1Form = () => (
        <form id="form-send-money" onSubmit={handleCalculateFeeAndRequestOtp}>
            {/* Tài khoản nguồn */}
            <div className="mb-3">
                <label className="form-label">Tài khoản nguồn</label>
                <input
                    type="text"
                    className="form-control"
                    value={
                        fromAccount
                            ? `${fromAccount.account_no} (${fromAccount.currency || "VND"})`
                            : ""
                    }
                    disabled
                />
            </div>

            {/* Tài khoản đích */}
            <div className="mb-3">
                <label htmlFor="toAccountNo" className="form-label">
                    Số tài khoản đích
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="toAccountNo"
                    placeholder="Nhập số tài khoản người nhận"
                    value={toAccountNo}
                    onChange={(e) => setToAccountNo(e.target.value)}
                    required
                />
            </div>

            {/* Số tiền */}
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Số tiền chuyển (VND)
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
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                    <span className="input-group-text">VND</span>
                </div>
            </div>

            {/* Mô tả */}
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Ghi chú / Mô tả
                </label>
                <textarea
                    id="description"
                    className="form-control"
                    rows="2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            {/* Thông tin phí (nếu đã có từ lần trước) */}
            {feeInfo && step === 1 && (
                <div className="alert alert-info py-2">
                    Phí dự kiến:{" "}
                    <strong>
                        {new Intl.NumberFormat("vi-VN").format(
                            Number(feeInfo.fee || 0)
                        )}{" "}
                        VND
                    </strong>
                    , tổng ghi nợ:{" "}
                    <strong>
                        {new Intl.NumberFormat("vi-VN").format(
                            Number(feeInfo.total_debit || 0)
                        )}{" "}
                        VND
                    </strong>
                    .
                </div>
            )}

            {/* Lỗi chung */}
            {globalError && (
                <div className="alert alert-danger py-2">{globalError}</div>
            )}

            <div className="d-grid">
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={processingFeeAndOtp || loadingInit || !!initError}
                >
                    {processingFeeAndOtp
                        ? "Đang tính phí & gửi OTP..."
                        : "Tính phí & gửi OTP"}
                </button>
            </div>
        </form>
    );

    const renderStep2Otp = () => (
        <form onSubmit={handleVerifyOtpAndTransfer}>
            {/* Tóm tắt giao dịch */}
            <div className="border rounded p-3 mb-3">
                <h5 className="fw-500 mb-3">Xác nhận giao dịch</h5>
                <p className="mb-1">
                    <strong>Từ tài khoản:</strong>{" "}
                    {fromAccount?.account_no} ({fromAccount?.currency || "VND"})
                </p>
                <p className="mb-1">
                    <strong>Đến tài khoản:</strong> {toAccountNo}
                </p>
                <p className="mb-1">
                    <strong>Số tiền:</strong>{" "}
                    {new Intl.NumberFormat("vi-VN").format(
                        Number(amount || 0)
                    )}{" "}
                    VND
                </p>
                <p className="mb-1">
                    <strong>Phí giao dịch:</strong>{" "}
                    {new Intl.NumberFormat("vi-VN").format(
                        Number(feeInfo?.fee || 0)
                    )}{" "}
                    VND
                </p>
                <p className="mb-1">
                    <strong>Tổng ghi nợ:</strong>{" "}
                    {new Intl.NumberFormat("vi-VN").format(
                        Number(feeInfo?.total_debit || 0)
                    )}{" "}
                    VND
                </p>
                <p className="mb-0">
                    <strong>Ghi chú:</strong> {description}
                </p>
            </div>

            {/* Nhập OTP */}
            <div className="mb-3">
                <label htmlFor="otpCode" className="form-label">
                    Mã OTP (gửi qua email: {userEmail})
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="otpCode"
                    placeholder="Nhập mã OTP"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    required
                />
                {otpExpiresIn && (
                    <small className="text-muted">
                        Mã OTP có hiệu lực trong khoảng{" "}
                        {Math.round(otpExpiresIn / 60)} phút.
                    </small>
                )}
            </div>

            {otpError && (
                <div className="alert alert-danger py-2">{otpError}</div>
            )}
            {globalError && (
                <div className="alert alert-danger py-2">{globalError}</div>
            )}

            <div className="d-grid">
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={processingTransfer}
                >
                    {processingTransfer
                        ? "Đang thực hiện chuyển tiền..."
                        : "Xác nhận chuyển tiền"}
                </button>
            </div>
        </form>
    );

    const renderStep3Success = () => (
        <div className="text-center">
            <div className="mb-4">
                <span className="text-success display-4">
                    <i className="fas fa-check-circle" />
                </span>
            </div>
            <h3 className="mb-3">Giao dịch thành công!</h3>
            {transferResult && (
                <div className="border rounded p-3 text-start mx-auto" style={{ maxWidth: "420px" }}>
                    <p className="mb-1">
                        <strong>Mã giao dịch:</strong> {transferResult.id}
                    </p>
                    <p className="mb-1">
                        <strong>Trạng thái:</strong>{" "}
                        <span className="badge bg-success">
                            {transferResult.status}
                        </span>
                    </p>
                    <p className="mb-1">
                        <strong>Số tiền:</strong>{" "}
                        {new Intl.NumberFormat("vi-VN").format(
                            Number(transferResult.amount || 0)
                        )}{" "}
                        {transferResult.currency || "VND"}
                    </p>
                    <p className="mb-1">
                        <strong>Phí:</strong>{" "}
                        {new Intl.NumberFormat("vi-VN").format(
                            Number(transferResult.fee || 0)
                        )}{" "}
                        {transferResult.currency || "VND"}
                    </p>
                    <p className="mb-1">
                        <strong>Thời gian:</strong>{" "}
                        {transferResult.completed_at
                            ? new Date(
                                transferResult.completed_at
                            ).toLocaleString("vi-VN")
                            : transferResult.created_at
                                ? new Date(
                                    transferResult.created_at
                                ).toLocaleString("vi-VN")
                                : "-"}
                    </p>
                </div>
            )}
        </div>
    );

    return (
        <div id="main-wrapper">
            {/* Header sau đăng nhập */}
            <DashboardHeader active="send-request" />

            {/* Second navigation: Send / Request */}
            <SecondNavigation active="send" />

            {/* CONTENT */}
            <div id="content" className="py-4">
                <div className="container">
                    {renderStepsBar()}

                    <h2 className="fw-400 text-center mt-3">Gửi tiền</h2>
                    <p className="lead text-center mb-4">
                        Chuyển tiền nội bộ an toàn, nhanh chóng.
                    </p>

                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                                <h3 className="text-5 fw-400 mb-3 mb-sm-4">
                                    {step === 1
                                        ? "Nhập thông tin chuyển tiền"
                                        : step === 2
                                            ? "Xác nhận giao dịch & OTP"
                                            : "Kết quả giao dịch"}
                                </h3>
                                <hr className="mx-n3 mx-sm-n5 mb-4" />

                                {loadingInit ? (
                                    <p className="text-muted mb-0">
                                        Đang tải dữ liệu...
                                    </p>
                                ) : initError ? (
                                    <p className="text-danger mb-0">
                                        {initError}
                                    </p>
                                ) : (
                                    <>
                                        {step === 1 && renderStep1Form()}
                                        {step === 2 && renderStep2Otp()}
                                        {step === 3 && renderStep3Success()}
                                    </>
                                )}
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

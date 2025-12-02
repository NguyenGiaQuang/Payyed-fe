// src/pages/DashboardPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 👈 THÊM
import DashboardHeader from "../components/layout/DashboardHeader";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import Footer from "../components/layout/Footer";

import { getMe } from "../api/auth";
import { getDefaultAccount, getRecentTransactions } from "../api/account";

const DashboardPage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 3 phần dùng để tính độ hoàn thiện
    const [hasEmail, setHasEmail] = useState(false);
    const [kycStatus, setKycStatus] = useState(null); // APPROVED / PENDING / null
    const [defaultAccount, setDefaultAccount] = useState(null);

    // Hoạt động gần đây
    const [recentAccount, setRecentAccount] = useState(null);
    const [recentItems, setRecentItems] = useState([]);
    const [recentLoading, setRecentLoading] = useState(false);

    // Tính % hoàn thành hồ sơ từ 3 tiêu chí: email, KYC (APPROVED), tài khoản mặc định
    const completionPercent = (() => {
        let done = 0;
        if (hasEmail) done += 1;
        if (kycStatus === "APPROVED") done += 1;
        if (defaultAccount) done += 1;
        return Math.round((done / 3) * 100);
    })();

    // Lấy hoạt động gần đây cho tài khoản mặc định
    const fetchRecent = async (accountId) => {
        try {
            setRecentLoading(true);
            const data = await getRecentTransactions({
                accountId,
                limit: 6,
            });
            setRecentAccount(data.account || null);
            setRecentItems(data.items || []);
        } catch (err) {
            console.error("Lỗi lấy hoạt động gần đây:", err);
        } finally {
            setRecentLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                // getMe() trả Axios response → phải .data
                const [meRes, defaultAcc] = await Promise.all([
                    getMe(),
                    getDefaultAccount().catch(() => null),
                ]);

                const meData = meRes.data; // data thực từ /api/auth/me

                // /api/auth/me trả:
                // {
                //   user: { id, email, ... },
                //   customer: { ..., kyc: "APPROVED" | "PENDING" | null },
                //   roles: [...]
                // }
                const user = meData.user || {};
                const customer = meData.customer || {};

                // 1) Email từ user.email
                setHasEmail(!!user.email);

                // 2) KYC status từ customer.kyc
                setKycStatus(customer.kyc || null);

                // 3) Tài khoản mặc định
                if (defaultAcc && defaultAcc.id) {
                    setDefaultAccount(defaultAcc);
                    await fetchRecent(defaultAcc.id);
                } else {
                    setDefaultAccount(null);
                }
            } catch (err) {
                console.error(err);
                setError("Không tải được dữ liệu tổng quan.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // ----- Render phần KYC dựa trên kycStatus -----
    const renderKycLabel = () => {
        if (!kycStatus) {
            // Chưa có hồ sơ
            return (
                <>
                    <span className="d-block text-5 text-warning mt-4 mb-3">
                        <i className="fas fa-exclamation-circle" />
                    </span>
                    <p className="mb-0">
                        <Link to="/kyc" className="btn-link">
                            {/* 👆 ĐỔI TỪ <a href="/kyc"> */}
                            Chưa có hồ sơ KYC – Bắt đầu ngay
                        </Link>
                    </p>
                </>
            );
        }

        if (kycStatus === "APPROVED") {
            // Đã duyệt
            return (
                <>
                    <span className="d-block text-5 text-success mt-4 mb-3">
                        <i className="fas fa-check-circle" />
                    </span>
                    <p className="mb-0">Hồ sơ KYC đã được duyệt</p>
                </>
            );
        }

        if (kycStatus === "PENDING") {
            // Đang chờ xác nhận
            return (
                <>
                    <span className="d-block text-5 text-warning mt-4 mb-3">
                        <i className="fas fa-clock" />
                    </span>
                    <p className="mb-0">
                        Hồ sơ KYC đang chờ xác nhận
                    </p>
                </>
            );
        }

        // Các trạng thái khác: REJECTED, ...
        return (
            <>
                <span className="d-block text-5 text-warning mt-4 mb-3">
                    <i className="fas fa-clock" />
                </span>
                <p className="mb-0">
                    Hồ sơ KYC đang ở trạng thái{" "}
                    <strong>{kycStatus}</strong>
                </p>
            </>
        );
    };

    const renderDefaultAccountLabel = () => {
        if (!defaultAccount) {
            return (
                <>
                    <span className="d-block text-5 text-light mt-4 mb-3">
                        <i className="far fa-circle" />
                    </span>
                    <p className="mb-0">
                        <Link to="/settings-payment-methods" className="btn-link">
                            {/* 👆 ĐỔI TỪ <a href="/accounts"> */}
                            Chưa có tài khoản mặc định – Chọn ngay
                        </Link>
                    </p>
                </>
            );
        }

        return (
            <>
                <span className="d-block text-5 text-success mt-4 mb-3">
                    <i className="fas fa-check-circle" />
                </span>
                <p className="mb-0">
                    Tài khoản mặc định:{" "}
                    <strong>{defaultAccount.account_no}</strong>
                </p>
            </>
        );
    };

    const renderRecentActivityRows = () => {
        if (!defaultAccount) {
            return (
                <div className="px-4 py-3 text-muted">
                    Bạn chưa có tài khoản mặc định, nên chưa thể hiển thị
                    hoạt động gần đây.
                </div>
            );
        }

        if (recentLoading && recentItems.length === 0) {
            return (
                <div className="px-4 py-3 text-muted">
                    Đang tải hoạt động gần đây...
                </div>
            );
        }

        if (!recentItems || recentItems.length === 0) {
            return (
                <div className="px-4 py-3 text-muted">
                    Chưa có giao dịch nào cho tài khoản này.
                </div>
            );
        }

        return recentItems.map((item) => {
            const dateObj = item.date ? new Date(item.date) : null;
            const day = dateObj
                ? String(dateObj.getDate()).padStart(2, "0")
                : "--";
            const monthNames = [
                "TH1",
                "TH2",
                "TH3",
                "TH4",
                "TH5",
                "TH6",
                "TH7",
                "TH8",
                "TH9",
                "TH10",
                "TH11",
                "TH12",
            ];
            const month = dateObj
                ? monthNames[dateObj.getMonth()]
                : "";

            const isOut = item.direction === "OUT";
            const sign = isOut ? "-" : "+";

            const rawAmount =
                typeof item.delta === "number"
                    ? Math.abs(item.delta)
                    : Number(item.amount || 0);

            const formattedAmount =
                new Intl.NumberFormat("vi-VN").format(rawAmount);
            const amountClass = isOut ? "text-danger" : "text-success";

            return (
                <div
                    key={item.id}
                    className="transaction-item px-4 py-3"
                    style={{ cursor: "pointer" }}
                >
                    <div className="row align-items-center flex-row">
                        <div className="col-2 col-sm-1 text-center">
                            <span className="d-block text-4 fw-300">
                                {day}
                            </span>
                            <span className="d-block text-1 fw-300 text-uppercase">
                                {month}
                            </span>
                        </div>

                        <div className="col col-sm-7">
                            <span className="d-block text-4">
                                {item.description || "Giao dịch"}
                            </span>
                            <span className="text-muted">
                                {item.dc === "DEBIT"
                                    ? "Ghi nợ tài khoản"
                                    : item.dc === "CREDIT"
                                        ? "Ghi có tài khoản"
                                        : ""}
                            </span>
                        </div>

                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                            <span
                                className="text-success"
                                title="Hoàn tất"
                            >
                                <i className="fas fa-check-circle" />
                            </span>
                        </div>

                        <div className="col-3 col-sm-2 text-end text-4">
                            <span className={`${amountClass} text-nowrap`}>
                                {sign} {formattedAmount}
                            </span>{" "}
                            <span className="text-2 text-uppercase">
                                ({recentAccount?.currency || "VND"})
                            </span>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div id="main-wrapper">
            <DashboardHeader active="dashboard" />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <DashboardSidebar />

                        <div className="col-lg-9">
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            {/* MỨC HOÀN THÀNH HỒ SƠ */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Mức độ hoàn thành hồ sơ
                                    <span className="border text-success rounded-pill fw-500 text-2 px-3 py-1 ms-2">
                                        {completionPercent}%
                                    </span>
                                </h3>

                                <hr className="mb-4 mx-n4" />

                                {loading ? (
                                    <div className="text-muted">
                                        Đang tải thông tin hồ sơ...
                                    </div>
                                ) : (
                                    <div className="row gy-4 profile-completeness">
                                        {/* EMAIL */}
                                        <div className="col-sm-6 col-md-4">
                                            <div className="border rounded text-center px-3 py-4">
                                                <span className="d-block text-10 text-light mt-2 mb-3">
                                                    <i className="fas fa-envelope" />
                                                </span>
                                                {hasEmail ? (
                                                    <>
                                                        <span className="d-block text-5 text-success mt-4 mb-3">
                                                            <i className="fas fa-check-circle" />
                                                        </span>
                                                        <p className="mb-0">
                                                            Đã liên kết
                                                            email
                                                        </p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="d-block text-5 text-light mt-4 mb-3">
                                                            <i className="far fa-circle" />
                                                        </span>
                                                        <p className="mb-0">
                                                            <Link
                                                                to="/settings-profile"
                                                                className="btn-link"
                                                            >
                                                                {/* 👆 ĐỔI TỪ <a href="/settings-profile"> */}
                                                                Chưa liên
                                                                kết email
                                                            </Link>
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* KYC */}
                                        <div className="col-sm-6 col-md-4">
                                            <div className="border rounded text-center px-3 py-4">
                                                <span className="d-block text-10 text-light mt-2 mb-3">
                                                    <i className="fas fa-id-card" />
                                                </span>
                                                {renderKycLabel()}
                                            </div>
                                        </div>

                                        {/* TÀI KHOẢN MẶC ĐỊNH */}
                                        <div className="col-sm-6 col-md-4">
                                            <div className="border rounded text-center px-3 py-4">
                                                <span className="d-block text-10 text-light mt-2 mb-3">
                                                    <i className="fas fa-university" />
                                                </span>
                                                {renderDefaultAccountLabel()}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* HOẠT ĐỘNG GẦN ĐÂY */}
                            <div className="bg-white shadow-sm rounded py-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center px-4 mb-4">
                                    Hoạt động gần đây
                                </h3>

                                <div className="transaction-title py-2 px-4">
                                    <div className="row fw-00">
                                        <div className="col-2 col-sm-1 text-center">
                                            <span>Ngày</span>
                                        </div>
                                        <div className="col col-sm-7">
                                            Mô tả
                                        </div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center">
                                            Trạng thái
                                        </div>
                                        <div className="col-3 col-sm-2 text-end">
                                            Số tiền
                                        </div>
                                    </div>
                                </div>

                                <div className="transaction-list">
                                    {renderRecentActivityRows()}
                                </div>

                                <div className="text-center mt-4">
                                    <Link
                                        to="/transactions"
                                        className="btn-link text-3"
                                    >
                                        {/* 👆 ĐỔI TỪ <a href="/transactions"> */}
                                        Xem tất cả giao dịch
                                        <i className="fas fa-chevron-right text-2 ms-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* MAIN PANEL END */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DashboardPage;

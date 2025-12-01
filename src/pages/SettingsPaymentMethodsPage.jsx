// src/pages/SettingsPaymentMethodsPage.jsx
import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SettingsSecondNavigation from "../components/navigation/SettingsSecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";
import { getAccounts, setDefaultAccount, createAccount } from "../api/account";
import { getMe } from "../api/auth";

const SettingsPaymentMethodsPage = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [showAddModal, setShowAddModal] = useState(false);
    const [newAccountNo, setNewAccountNo] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState("");

    const [settingDefaultId, setSettingDefaultId] = useState(null);

    const [customerId, setCustomerId] = useState(null);

    // Lấy thông tin user (customer_id) và danh sách tài khoản
    useEffect(() => {
        const loadCustomer = async () => {
            try {
                const res = await getMe();
                // backend trả: { user: {...}, customer: {...}, roles: [...] }
                setCustomerId(res.data.customer?.id || null);
            } catch (err) {
                console.error("Lỗi tải thông tin người dùng:", err);
            }
        };

        const loadAccountsWrapper = async () => {
            await loadAccounts();
        };

        loadCustomer();
        loadAccountsWrapper();
    }, []);

    // Lấy danh sách tài khoản
    const loadAccounts = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await getAccounts();
            setAccounts(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error(err);
            if (err.response?.status === 401) {
                setError("Bạn cần đăng nhập để xem danh sách tài khoản ngân hàng.");
            } else {
                setError("Không thể tải danh sách tài khoản. Vui lòng thử lại.");
            }
        } finally {
            setLoading(false);
        }
    };

    const formatCurrency = (amount, currency) => {
        if (amount == null) return "0";
        try {
            return Number(amount).toLocaleString("vi-VN", {
                style: "currency",
                currency: currency || "VND",
            });
        } catch {
            return `${amount} ${currency || "VND"}`;
        }
    };

    const handleSetDefault = async (accountId) => {
        try {
            setSettingDefaultId(accountId);
            await setDefaultAccount(accountId);
            await loadAccounts();
        } catch (err) {
            console.error(err);
            alert("Không thể đặt tài khoản mặc định. Vui lòng thử lại.");
        } finally {
            setSettingDefaultId(null);
        }
    };

    const openAddModal = () => {
        setNewAccountNo("");
        setFormError("");
        setShowAddModal(true);
    };

    const closeAddModal = () => {
        if (submitting) return;
        setShowAddModal(false);
    };

    const handleAddAccountSubmit = async (e) => {
        e.preventDefault();
        setFormError("");

        if (!newAccountNo.trim()) {
            setFormError("Vui lòng nhập số tài khoản.");
            return;
        }

        if (!customerId) {
            setFormError(
                "Không tìm thấy mã khách hàng (customer_id). Vui lòng tải lại trang."
            );
            return;
        }

        try {
            setSubmitting(true);

            await createAccount({
                customer_id: customerId,
                account_no: newAccountNo.trim(),
            });

            await loadAccounts();
            setShowAddModal(false);
        } catch (err) {
            console.error(err);

            const msg =
                err.response?.data?.message ||
                err.response?.data?.error ||
                "Có lỗi xảy ra từ phía máy chủ. Vui lòng thử lại.";
            setFormError(msg);
        } finally {
            setSubmitting(false);
        }
    };

    const renderStatusBadge = (status) => {
        if (!status) return null;
        const upper = status.toUpperCase();

        if (upper === "ACTIVE") {
            return (
                <span className="badge bg-success text-1 fw-500 ms-2">
                    Đang hoạt động
                </span>
            );
        }

        if (upper === "FROZEN") {
            return (
                <span className="badge bg-warning text-1 fw-500 ms-2 text-dark">
                    Đang tạm khóa
                </span>
            );
        }

        if (upper === "CLOSED") {
            return (
                <span className="badge bg-danger text-1 fw-500 ms-2">
                    Đã đóng
                </span>
            );
        }

        return (
            <span className="badge bg-secondary text-1 fw-500 ms-2">{status}</span>
        );
    };

    const canSetDefault = (account) => {
        const status = (account.status || "").toUpperCase();
        return status === "ACTIVE" && !account.is_default;
    };

    return (
        <div id="main-wrapper">
            <DashboardHeader active="settings" />
            <SettingsSecondNavigation active="paymentMethods" />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <DashboardSidebar />

                        <div className="col-lg-9">
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Tài khoản ngân hàng
                                    <button
                                        type="button"
                                        className="ms-auto text-2 text-uppercase btn btn-link p-0 border-0"
                                        onClick={openAddModal}
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-plus-circle" />
                                        </span>
                                        Thêm tài khoản
                                    </button>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                {loading && (
                                    <p className="text-3 mb-0">Đang tải danh sách tài khoản...</p>
                                )}

                                {!loading && error && (
                                    <p className="text-3 text-danger mb-0">{error}</p>
                                )}

                                {!loading && !error && accounts.length === 0 && (
                                    <p className="text-3 mb-0">
                                        Bạn chưa có tài khoản nào. Hãy bấm{" "}
                                        <strong>“Thêm tài khoản”</strong> để tạo tài khoản mới.
                                    </p>
                                )}

                                {!loading && !error && accounts.length > 0 && (
                                    <div className="row g-3">
                                        {accounts.map((acc) => {
                                            const accountNo = acc.account_no;
                                            const currency = acc.currency || "VND";
                                            const type = acc.type || "CURRENT";
                                            const status = acc.status || "ACTIVE";

                                            const displayName = (() => {
                                                const upperType = type.toUpperCase();
                                                if (upperType === "CURRENT") {
                                                    return `Tài khoản thanh toán ${currency}`;
                                                }
                                                if (upperType === "SAVINGS") {
                                                    return `Tài khoản tiết kiệm ${currency}`;
                                                }
                                                return `Tài khoản ${currency}`;
                                            })();

                                            return (
                                                <div className="col-md-6" key={acc.id}>
                                                    <div className="border rounded p-3 h-100 d-flex flex-column">
                                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                                            <span className="fw-500">
                                                                {displayName}
                                                                {renderStatusBadge(status)}
                                                            </span>

                                                            {acc.is_default && (
                                                                <span className="badge bg-success text-1 fw-500">
                                                                    Mặc định
                                                                </span>
                                                            )}
                                                        </div>

                                                        {accountNo && (
                                                            <p className="mb-1 text-muted text-2">
                                                                Số tài khoản:{" "}
                                                                <span className="fw-500">{accountNo}</span>
                                                            </p>
                                                        )}

                                                        <p className="mb-2 text-muted text-2">
                                                            Số dư:{" "}
                                                            <span className="fw-500">
                                                                {formatCurrency(acc.balance, currency)}
                                                            </span>
                                                        </p>

                                                        {canSetDefault(acc) && (
                                                            <div className="mt-auto pt-2">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-sm btn-outline-primary"
                                                                    onClick={() => handleSetDefault(acc.id)}
                                                                    disabled={settingDefaultId === acc.id}
                                                                >
                                                                    {settingDefaultId === acc.id
                                                                        ? "Đang cập nhật..."
                                                                        : "Đặt làm mặc định"}
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* end col-lg-9 */}
                    </div>
                </div>
            </div>

            <Footer />

            {/* MODAL THÊM TÀI KHOẢN */}
            {showAddModal && (
                <>
                    <div
                        className="modal fade show"
                        role="dialog"
                        aria-modal="true"
                        style={{ display: "block" }}
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
                                        onClick={closeAddModal}
                                        aria-label="Đóng"
                                    />
                                </div>

                                <div className="modal-body p-4">
                                    <form onSubmit={handleAddAccountSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="accountNo" className="form-label">
                                                Số tài khoản
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="accountNo"
                                                placeholder="Nhập số tài khoản (vd: 10000010)"
                                                value={newAccountNo}
                                                onChange={(e) => setNewAccountNo(e.target.value)}
                                                required
                                            />
                                        </div>

                                        {formError && (
                                            <div className="alert alert-danger py-2">
                                                {formError}
                                            </div>
                                        )}

                                        <div className="d-grid mt-3">
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                                disabled={submitting}
                                            >
                                                {submitting ? "Đang lưu..." : "Lưu tài khoản"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-backdrop fade show" />
                </>
            )}
        </div>
    );
};

export default SettingsPaymentMethodsPage;

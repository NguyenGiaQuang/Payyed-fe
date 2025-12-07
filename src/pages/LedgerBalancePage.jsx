// src/pages/LedgerBalancePage.jsx
import React, { useEffect, useState } from "react";
import AdminHeader from "../components/layout/AdminHeader";
import Footer from "../components/layout/Footer";
import { getLedgerBalance } from "../api/ledger";

const LedgerBalancePage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [forbidden, setForbidden] = useState(false);

    // format số kiểu VN
    const fmt = (n) => new Intl.NumberFormat("vi-VN").format(Number(n || 0));

    const totalDebit = items.reduce(
        (sum, row) => sum + Number(row.debit || 0),
        0
    );
    const totalCredit = items.reduce(
        (sum, row) => sum + Number(row.credit || 0),
        0
    );
    const totalDiff = totalDebit - totalCredit;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError("");
                setForbidden(false);

                const data = await getLedgerBalance();
                setItems(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Load ledger balance failed", err);
                const status = err?.response?.status;

                if (status === 403) {
                    setForbidden(true);
                    setError(
                        "Bạn không có quyền xem trang Tổng hợp số dư. Hãy đăng nhập bằng tài khoản Admin hoặc người dùng có quyền phù hợp."
                    );
                } else {
                    setError("Không tải được dữ liệu tổng hợp số dư.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="main-wrapper">
            <AdminHeader active="admin" />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                {/* TIÊU ĐỀ */}
                                <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                    <div>
                                        <h3 className="text-5 fw-400 mb-1">
                                            Tổng hợp số dư hệ thống (GL Ledger)
                                        </h3>
                                        <p className="text-muted mb-0">
                                            Tổng hợp số dư theo từng tài khoản kế toán (GL) để kiểm
                                            tra <strong>tổng Nợ = tổng Có</strong> toàn hệ thống.
                                        </p>
                                    </div>

                                    {!forbidden && (
                                        <div className="mt-3 mt-md-0">
                                            {totalDebit === totalCredit ? (
                                                <span className="badge bg-success">
                                                    Cân đối: Tổng Nợ = Tổng Có
                                                </span>
                                            ) : (
                                                <span className="badge bg-danger">
                                                    Không cân đối: vui lòng kiểm tra lại bút toán
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* KHU TỔNG QUAN – chỉ hiển thị nếu không bị 403 */}
                                {!forbidden && (
                                    <div className="row text-center mb-4">
                                        <div className="col-sm-4 mb-3 mb-sm-0">
                                            <div className="border rounded py-3 h-100">
                                                <div className="text-muted small mb-1">Tổng Nợ</div>
                                                <div className="text-4 text-success fw-600">
                                                    {fmt(totalDebit)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-3 mb-sm-0">
                                            <div className="border rounded py-3 h-100">
                                                <div className="text-muted small mb-1">Tổng Có</div>
                                                <div className="text-4 text-danger fw-600">
                                                    {fmt(totalCredit)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="border rounded py-3 h-100">
                                                <div className="text-muted small mb-1">
                                                    Chênh lệch (Nợ - Có)
                                                </div>
                                                <div
                                                    className={
                                                        "text-4 fw-600 " +
                                                        (totalDiff === 0
                                                            ? "text-muted"
                                                            : totalDiff > 0
                                                                ? "text-success"
                                                                : "text-danger")
                                                    }
                                                >
                                                    {fmt(totalDiff)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* LOADING + ERROR */}
                                {loading && <p>Đang tải dữ liệu…</p>}

                                {error && (
                                    <div className="alert alert-danger mb-0">
                                        {error}
                                        {forbidden && (
                                            <div className="mt-2 small">
                                                Gợi ý: đăng xuất và đăng nhập lại bằng tài khoản Admin
                                                (ROLE_ADMIN) rồi mở lại trang{" "}
                                                <code>/admin/system-balance</code>.
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* BẢNG CHI TIẾT – chỉ hiển thị khi có data và không bị 403 */}
                                {!loading && !forbidden && !error && (
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>GL Account (Mã/Tên)</th>
                                                    <th className="text-end">Tổng Nợ</th>
                                                    <th className="text-end">Tổng Có</th>
                                                    <th className="text-end">Chênh lệch (Nợ - Có)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map((row) => {
                                                    const debit = Number(row.debit || 0);
                                                    const credit = Number(row.credit || 0);
                                                    const diff = debit - credit;

                                                    let diffClass = "text-muted";
                                                    if (diff > 0) diffClass = "text-success";
                                                    if (diff < 0) diffClass = "text-danger";

                                                    return (
                                                        <tr key={row.gl_account_id}>
                                                            <td>
                                                                <div className="fw-semibold">
                                                                    {row.gl_code} - {row.gl_name}
                                                                </div>
                                                            </td>
                                                            <td className="text-end text-success">
                                                                {fmt(debit)}
                                                            </td>
                                                            <td className="text-end text-danger">
                                                                {fmt(credit)}
                                                            </td>
                                                            <td className={"text-end " + diffClass}>
                                                                {fmt(diff)}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}

                                                {/* HÀNG TỔNG CỘNG */}
                                                <tr className="fw-semibold border-top">
                                                    <td>Tổng cộng</td>
                                                    <td className="text-end text-success">
                                                        {fmt(totalDebit)}
                                                    </td>
                                                    <td className="text-end text-danger">
                                                        {fmt(totalCredit)}
                                                    </td>
                                                    <td
                                                        className={
                                                            "text-end " +
                                                            (totalDebit === totalCredit
                                                                ? "text-success"
                                                                : "text-danger")
                                                        }
                                                    >
                                                        {fmt(totalDiff)}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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

export default LedgerBalancePage;

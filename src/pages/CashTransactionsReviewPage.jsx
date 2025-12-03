// src/pages/CashTransactionsReviewPage.jsx
import React, { useEffect, useState } from "react";
import AdminHeader from "../components/layout/AdminHeader";
import Footer from "../components/layout/Footer";
import { getTransactions, approveTransaction } from "../api/cashTransactions";
import { getCustomers } from "../api/customers";

const CashTransactionsReviewPage = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("PENDING");

    const [modalOpen, setModalOpen] = useState(false);
    const [modalTx, setModalTx] = useState(null);
    const [approveLoading, setApproveLoading] = useState(false);
    const [approveDecision, setApproveDecision] = useState(true);
    const [reason, setReason] = useState("");
    const [customersById, setCustomersById] = useState({});
    const [userIdToCustomerName, setUserIdToCustomerName] = useState({});

    const load = async (opts = {}) => {
        try {
            setLoading(true);
            setError(null);
            // pass status filter to API if provided
            const params = {};
            const statusToUse = opts.status ?? statusFilter;
            if (statusToUse && statusToUse !== "ALL") params.status = statusToUse;
            const [txRes, custRes] = await Promise.all([getTransactions(params), getCustomers()]);
            const txs = txRes.data || [];
            const customers = custRes.data || [];

            // build lookup maps
            const byId = {};
            const byUserId = {};
            customers.forEach((c) => {
                byId[c.id] = c;
                if (c.user_id) byUserId[c.user_id] = c.full_name || c.user_id;
            });

            setItems(txs);
            setCustomersById(byId);
            setUserIdToCustomerName(byUserId);
        } catch (err) {
            console.error("Load transactions failed", err);
            setError("Không tải được danh sách yêu cầu.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // load when component mounts and whenever statusFilter changes
        load({ status: statusFilter });
    }, [statusFilter]);

    const openModal = (tx, approve) => {
        setModalTx(tx);
        setApproveDecision(approve);
        setReason(approve ? "Xác nhận thành công" : "Không hợp lệ");
        setModalOpen(true);
    };

    const perform = async () => {
        if (!modalTx) return;
        try {
            setApproveLoading(true);
            await approveTransaction({ transaction_id: modalTx.id, approve: approveDecision, reason });
            // remove or update item status locally
            setItems((prev) => prev.map((it) => it.id === modalTx.id ? { ...it, status: approveDecision ? 'APPROVED' : 'REJECTED' } : it));
            setModalOpen(false);
        } catch (err) {
            console.error("Approve failed", err);
            alert("Thao tác thất bại. Vui lòng thử lại.");
        } finally {
            setApproveLoading(false);
        }
    };

    const normalizedSearch = (searchTerm || "").trim().toLowerCase();
    const filteredItems = items.filter((it) => {
        if (!normalizedSearch) return true;
        const customer = customersById[it.customer_id];
        const customerName = customer ? (customer.full_name || it.customer_id) : it.customer_id;
        const requesterName = userIdToCustomerName[it.requested_by_user_id] || it.requested_by_user_id;

        const candidates = [
            String(it.id || ""),
            String(it.customer_id || ""),
            String(it.requested_by_user_id || ""),
            String(it.customer_note || ""),
            String(it.staff_note || ""),
            String(customerName || ""),
            String(requesterName || ""),
        ].map((s) => s.toLowerCase());

        return candidates.some((c) => c.includes(normalizedSearch));
    });

    return (
        <div id="main-wrapper">
            <AdminHeader active="requests" />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 mb-3">Duyệt yêu cầu</h3>

                                {loading && <div className="text-muted">Đang tải...</div>}
                                {error && <div className="alert alert-danger">{error}</div>}

                                <div className="row mb-3">
                                    <div className="col-md-4 mb-2 mb-md-0">
                                        <select className="form-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                                            <option value="PENDING">Pending</option>
                                            <option value="APPROVED">Approved</option>
                                            <option value="REJECTED">Rejected</option>
                                            <option value="ALL">All</option>
                                        </select>
                                    </div>
                                    <div className="col-md-5 mb-2 mb-md-0">
                                        <div className="input-group">
                                            <input className="form-control" placeholder="Tìm theo ID, user, ghi chú..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                            {searchTerm && <button className="btn btn-outline-secondary" type="button" onClick={() => setSearchTerm("")}>X</button>}
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-md-end">
                                        <button className="btn btn-sm btn-outline-primary" onClick={() => load({ status: statusFilter })}>Làm mới</button>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Khách hàng</th>
                                                <th>Loại</th>
                                                <th>Số tiền</th>
                                                <th>Trạng thái</th>
                                                <th>Yêu cầu bởi</th>
                                                <th>Thời gian</th>
                                                <th>Ghi chú</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredItems.map((it) => {
                                                const customer = customersById[it.customer_id];
                                                const customerName = customer ? (customer.full_name || it.customer_id) : it.customer_id;
                                                const requesterName = userIdToCustomerName[it.requested_by_user_id] || it.requested_by_user_id;

                                                return (
                                                    <tr key={it.id}>
                                                        <td className="text-truncate" style={{ maxWidth: 200 }}>{it.id}</td>
                                                        <td>{customerName}</td>
                                                        <td>{it.type}</td>
                                                        <td>{new Intl.NumberFormat('vi-VN').format(Number(it.amount || 0))} {it.currency}</td>
                                                        <td>{it.status}</td>
                                                        <td>{requesterName}</td>
                                                        <td>{it.requested_at ? new Date(it.requested_at).toLocaleString() : ''}</td>
                                                        <td className="text-truncate" style={{ maxWidth: 240 }}>{it.customer_note}</td>
                                                        <td className="text-end">
                                                            {it.status === 'PENDING' ? (
                                                                <>
                                                                    <button className="btn btn-sm btn-success me-2" onClick={() => openModal(it, true)}>Phê duyệt</button>
                                                                    <button className="btn btn-sm btn-outline-danger" onClick={() => openModal(it, false)}>Từ chối</button>
                                                                </>
                                                            ) : (
                                                                <span className="text-muted">Đã xử lý</span>
                                                            )}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            {modalOpen && (
                <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{approveDecision ? 'Phê duyệt yêu cầu' : 'Từ chối yêu cầu'}</h5>
                                <button type="button" className="btn-close" onClick={() => setModalOpen(false)} />
                            </div>
                            <div className="modal-body">
                                <p>ID: <strong>{modalTx?.id}</strong></p>
                                <p>Loại: <strong>{modalTx?.type}</strong> — Số tiền: <strong>{new Intl.NumberFormat('vi-VN').format(Number(modalTx?.amount || 0))} {modalTx?.currency}</strong></p>
                                <div className="mb-2">
                                    <label className="form-label">Lý do</label>
                                    <textarea className="form-control" rows={3} value={reason} onChange={(e) => setReason(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setModalOpen(false)} disabled={approveLoading}>Huỷ</button>
                                <button className={"btn " + (approveDecision ? 'btn-success' : 'btn-danger')} onClick={perform} disabled={approveLoading}>
                                    {approveLoading ? 'Đang xử lý...' : (approveDecision ? 'Phê duyệt' : 'Từ chối')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CashTransactionsReviewPage;

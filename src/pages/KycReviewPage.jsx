// src/pages/KycReviewPage.jsx
import React, { useEffect, useState } from "react";
import AdminHeader from "../components/layout/AdminHeader";
import Footer from "../components/layout/Footer";
import { getPending, reviewKyc } from "../api/kyc";

const KycReviewPage = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [processingId, setProcessingId] = useState(null);

    const loadPending = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await getPending();
            const data = res.data || [];
            setItems(data);
        } catch (err) {
            console.error("Load pending KYC failed", err);
            setError("Không tải được danh sách hồ sơ KYC chờ duyệt.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPending();
    }, []);

    // Open confirm modal instead of native confirm
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmAction, setConfirmAction] = useState(null); // 'APPROVED'|'REJECTED'
    const [confirmCustomer, setConfirmCustomer] = useState(null);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleReview = (customerId, status, customerName) => {
        setConfirmCustomer({ id: customerId, name: customerName });
        setConfirmAction(status);
        setConfirmOpen(true);
    };

    const performReview = async () => {
        if (!confirmCustomer || !confirmAction) return;

        try {
            setConfirmLoading(true);
            setProcessingId(confirmCustomer.id);
            await reviewKyc({ customer_id: confirmCustomer.id, status: confirmAction });
            // remove from list
            setItems((prev) => prev.filter((i) => i.id !== confirmCustomer.id));
            setConfirmOpen(false);
        } catch (err) {
            console.error("Review failed", err);
            alert("Duyệt hồ sơ thất bại. Vui lòng thử lại.");
        } finally {
            setConfirmLoading(false);
            setProcessingId(null);
        }
    };

    // Image preview modal
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const openPreview = (url) => {
        setPreviewUrl(url);
        setPreviewOpen(true);
    };
    const closePreview = () => {
        setPreviewOpen(false);
        setPreviewUrl(null);
    };

    // Search / filter
    const [searchTerm, setSearchTerm] = useState("");
    const normalizedSearch = (searchTerm || "").trim().toLowerCase();
    const filteredItems = items.filter((it) => {
        if (!normalizedSearch) return true;
        const candidates = [
            String(it.full_name || ""),
            String(it.national_id || ""),
            String(it.id || ""),
            String(it.address || ""),
        ].map((s) => s.toLowerCase());

        return candidates.some((c) => c.includes(normalizedSearch));
    });

    return (
        <div id="main-wrapper">
            <AdminHeader active="kyc" />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-3">Duyệt hồ sơ KYC</h3>

                                {loading && <div className="text-muted">Đang tải danh sách...</div>}
                                {error && <div className="alert alert-danger">{error}</div>}

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                placeholder="Tìm theo tên, CMT/CCCD, ID hoặc địa chỉ..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                            {searchTerm && (
                                                <button className="btn btn-outline-secondary" type="button" onClick={() => setSearchTerm("")}>X</button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-md-end mt-2 mt-md-0">
                                        <button className="btn btn-sm btn-outline-primary" onClick={loadPending}>Làm mới</button>
                                    </div>
                                </div>

                                {!loading && filteredItems.length === 0 && (
                                    <div className="text-center text-muted py-4">Không tìm thấy hồ sơ nào.</div>
                                )}

                                <div className="row gy-3">
                                    {filteredItems.map((it) => (
                                        <div key={it.id} className="col-12">
                                            <div className="border rounded p-3 d-flex flex-column flex-md-row align-items-start">
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-1">{it.full_name}</h5>
                                                    <div className="text-muted mb-2">ID: {it.id} • Trạng thái: {it.kyc}</div>

                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <p className="mb-1"><strong>Ngày sinh:</strong> {it.dob}</p>
                                                            <p className="mb-1"><strong>Số CMT/CCCD:</strong> {it.national_id}</p>
                                                            <p className="mb-1"><strong>Địa chỉ:</strong> {it.address}</p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p className="mb-1"><strong>Files:</strong></p>
                                                            <div className="d-flex flex-wrap">
                                                                {Array.isArray(it.kyc_documents) && it.kyc_documents.length > 0 ? (
                                                                    it.kyc_documents.map((d) => (
                                                                        <button key={d.id} type="button" className="btn btn-link p-0 me-3 mb-2" onClick={() => openPreview(d.url)}>
                                                                            <img src={d.url} alt={d.doc_type} style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 6, border: '1px solid #eee' }} />
                                                                            <div className="text-2 text-muted">{d.doc_type}</div>
                                                                        </button>
                                                                    ))
                                                                ) : (
                                                                    <div className="text-muted">Không có tập tin đính kèm</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ms-0 ms-md-3 mt-3 mt-md-0 text-end">
                                                    <button
                                                        className="btn btn-success me-2"
                                                        onClick={() => handleReview(it.id, 'APPROVED', it.full_name)}
                                                        disabled={processingId === it.id}
                                                    >
                                                        {processingId === it.id ? 'Đang...' : 'Phê duyệt'}
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-danger"
                                                        onClick={() => handleReview(it.id, 'REJECTED', it.full_name)}
                                                        disabled={processingId === it.id}
                                                    >
                                                        {processingId === it.id ? 'Đang...' : 'Từ chối'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            {/* Image preview modal */}
            {previewOpen && (
                <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Xem ảnh</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={closePreview} />
                            </div>
                            <div className="modal-body text-center p-0">
                                <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closePreview}>Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirm modal */}
            {confirmOpen && (
                <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}>
                    <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Xác nhận</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setConfirmOpen(false)} />
                            </div>
                            <div className="modal-body">
                                <p>Bạn có chắc muốn <strong>{confirmAction === 'APPROVED' ? 'phê duyệt' : 'từ chối'}</strong> hồ sơ của</p>
                                <p className="fw-600">{confirmCustomer?.name}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setConfirmOpen(false)} disabled={confirmLoading}>Huỷ</button>
                                <button type="button" className={"btn " + (confirmAction === 'APPROVED' ? 'btn-success' : 'btn-danger')} onClick={performReview} disabled={confirmLoading}>
                                    {confirmLoading ? 'Đang xử lý...' : (confirmAction === 'APPROVED' ? 'Phê duyệt' : 'Từ chối')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KycReviewPage;


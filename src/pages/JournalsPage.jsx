// src/pages/JournalsPage.jsx
import React, { useEffect, useState } from "react";
import AdminHeader from "../components/layout/AdminHeader";
import Footer from "../components/layout/Footer";
import { getJournals, getJournalDetail } from "../api/journals";

const JournalsPage = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const [detailOpen, setDetailOpen] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [detailLoading, setDetailLoading] = useState(false);

    const load = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await getJournals();
            setItems(res.data || []);
        } catch (err) {
            console.error("Load journals failed", err);
            setError("Không tải được danh sách bút toán.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, []);

    const openDetail = async (entryId) => {
        try {
            setDetailLoading(true);
            const res = await getJournalDetail(entryId);
            setDetailData(res.data || null);
            setDetailOpen(true);
        } catch (err) {
            console.error("Load detail failed", err);
            alert("Không tải được chi tiết bút toán.");
        } finally {
            setDetailLoading(false);
        }
    };

    const normalizedSearch = (searchTerm || "").trim().toLowerCase();
    const filteredItems = items.filter((it) => {
        if (!normalizedSearch) return true;
        const candidates = [
            String(it.id || ""),
            String(it.ref || ""),
            String(it.description || ""),
        ].map((s) => s.toLowerCase());

        return candidates.some((c) => c.includes(normalizedSearch));
    });

    return (
        <div id="main-wrapper">
            <AdminHeader active="transactions" />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 mb-3">Danh sách bút toán</h3>

                                {loading && <div className="text-muted">Đang tải...</div>}
                                {error && <div className="alert alert-danger">{error}</div>}

                                <div className="row mb-3">
                                    <div className="col-md-8">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                placeholder="Tìm theo ID, Ref, mô tả..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                            {searchTerm && (
                                                <button className="btn btn-outline-secondary" type="button" onClick={() => setSearchTerm("")}>X</button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-md-end">
                                        <button className="btn btn-sm btn-outline-primary" onClick={load}>Làm mới</button>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Ref</th>
                                                <th>Mô tả</th>
                                                <th>Thời gian</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredItems.length === 0 ? (
                                                <tr>
                                                    <td colSpan="5" className="text-center text-muted py-4">Không tìm thấy dữ liệu</td>
                                                </tr>
                                            ) : (
                                                filteredItems.map((it) => (
                                                    <tr key={it.id}>
                                                        <td className="text-truncate" style={{ maxWidth: 150 }}>{it.id}</td>
                                                        <td>{it.ref}</td>
                                                        <td>{it.description}</td>
                                                        <td>{it.created_at ? new Date(it.created_at).toLocaleString() : ''}</td>
                                                        <td className="text-end">
                                                            <button className="btn btn-sm btn-info" onClick={() => openDetail(it.id)}>Chi tiết</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            {/* Detail Modal */}
            {detailOpen && (
                <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Chi tiết bút toán</h5>
                                <button type="button" className="btn-close" onClick={() => setDetailOpen(false)} />
                            </div>
                            <div className="modal-body">
                                {detailLoading ? (
                                    <div className="text-muted">Đang tải...</div>
                                ) : detailData ? (
                                    <>
                                        <div className="mb-3">
                                            <p className="mb-1"><strong>ID:</strong> {detailData.id}</p>
                                            <p className="mb-1"><strong>Ref:</strong> {detailData.ref}</p>
                                            <p className="mb-1"><strong>Mô tả:</strong> {detailData.description}</p>
                                            <p className="mb-1"><strong>Thời gian:</strong> {new Date(detailData.created_at).toLocaleString()}</p>
                                        </div>

                                        <hr />

                                        <h6>Các bút toán chi tiết</h6>
                                        <div className="table-responsive">
                                            <table className="table table-sm table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>GL Account (Mã/Tên)</th>
                                                        <th>DC</th>
                                                        <th>Số tiền</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Array.isArray(detailData.lines) && detailData.lines.length > 0 ? (
                                                        detailData.lines.map((line) => (
                                                            <tr key={line.id}>
                                                                <td>
                                                                    {line.gl_account ? (
                                                                        <>
                                                                            <strong>{line.gl_account.code}</strong> - {line.gl_account.name}
                                                                            <br />
                                                                            <span className="text-muted text-1">{line.gl_account.type}</span>
                                                                        </>
                                                                    ) : (
                                                                        'N/A'
                                                                    )}
                                                                </td>
                                                                <td>{line.dc}</td>
                                                                <td className="text-end">{new Intl.NumberFormat('vi-VN').format(Number(line.amount || 0))}</td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="3" className="text-center text-muted">Không có dữ liệu</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-muted">Không tìm thấy dữ liệu</div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setDetailOpen(false)}>Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JournalsPage;

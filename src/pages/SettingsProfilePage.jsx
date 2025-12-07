// src/pages/SettingsProfilePage.jsx
import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SettingsSecondNavigation from "../components/navigation/SettingsSecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";
import { getMe } from "../api/auth";
import { updateCustomer } from "../api/customer";
import { getMyKyc, submitKyc } from "../api/kyc";
import { uploadKycFile } from "../api/upload";

// Hiển thị "2002-05-20" -> "20-05-2002"
const formatDisplayDate = (iso) => {
    if (!iso) return "";
    const [year, month, day] = iso.split("-");
    return `${day}-${month}-${year}`;
};

const SettingsProfilePage = () => {
    const [data, setData] = useState({
        user: null,
        customer: null,
        roles: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // --- state cho modal chỉnh sửa thông tin cá nhân ---
    const [showEditModal, setShowEditModal] = useState(false);
    const [editForm, setEditForm] = useState({
        full_name: "",
        dob: "",
        national_id: "",
        address: "",
    });
    const [editSaving, setEditSaving] = useState(false);
    const [editError, setEditError] = useState("");

    // --- state cho KYC ---
    const [kycInfo, setKycInfo] = useState(null);
    const [kycLoading, setKycLoading] = useState(false);
    const [kycError, setKycError] = useState("");
    const [showKycModal, setShowKycModal] = useState(false);
    const [kycForm, setKycForm] = useState({
        customer_id: "",
    });
    const [kycFiles, setKycFiles] = useState({
        cccd_front: null,
        selfie: null,
    });
    const [kycSaving, setKycSaving] = useState(false);
    const [kycSubmitError, setKycSubmitError] = useState("");
    const [kycSubmitSuccess, setKycSubmitSuccess] = useState("");

    // --- state cho modal xem ảnh KYC ---
    const [previewImageUrl, setPreviewImageUrl] = useState("");
    const [showPreviewModal, setShowPreviewModal] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const res = await getMe();
                setData(res.data); // { user, customer, roles }
            } catch (err) {
                console.error(err);
                const msg =
                    err.response?.data?.message ||
                    err.response?.data?.error ||
                    "Không tải được thông tin hồ sơ.";
                setError(msg);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    // Lấy hồ sơ KYC bằng GET /api/kyc/me để hiển thị tài liệu KYC đã gửi
    useEffect(() => {
        const fetchKyc = async () => {
            try {
                setKycLoading(true);
                const res = await getMyKyc(); // GET http://localhost:5000/api/kyc/me
                setKycInfo(res.data);
            } catch (err) {
                console.error(err);
                if (err.response?.status === 404) {
                    // Chưa có hồ sơ KYC
                    setKycInfo(null);
                } else {
                    const msg =
                        err.response?.data?.message ||
                        err.response?.data?.error ||
                        "Không tải được hồ sơ KYC.";
                    setKycError(msg);
                }
            } finally {
                setKycLoading(false);
            }
        };

        fetchKyc();
    }, []);

    const { user, customer } = data;
    const fullName = customer?.full_name || "—";
    const dobDisplay = customer?.dob ? formatDisplayDate(customer.dob) : "—";
    const address = customer?.address || "—";
    const nationalId = customer?.national_id || "—";
    const isActive = user?.is_active;
    const kycStatus = customer?.kyc || "PENDING";

    // Helper: lấy URL tài liệu KYC hiện tại theo doc_type
    const getExistingDocUrl = (docType) => {
        if (!kycInfo || !Array.isArray(kycInfo.kyc_documents)) return "";
        const doc = kycInfo.kyc_documents.find((d) => d.doc_type === docType);
        return doc?.url || "";
    };

    // Mở modal chỉnh sửa thông tin cá nhân
    const handleOpenEdit = () => {
        if (customer) {
            setEditForm({
                full_name: customer.full_name || "",
                dob: customer.dob || "",
                national_id: customer.national_id || "",
                address: customer.address || "",
            });
        }
        setEditError("");
        setShowEditModal(true);
    };

    const handleCloseEdit = () => {
        if (editSaving) return;
        setShowEditModal(false);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setEditSaving(true);
        setEditError("");

        try {
            const res = await updateCustomer({
                full_name: editForm.full_name,
                dob: editForm.dob, // YYYY-MM-DD
                national_id: editForm.national_id,
                address: editForm.address,
            });

            const updatedCustomer = res.data?.customer || {
                ...(customer || {}),
                ...editForm,
            };

            setData((prev) => ({
                ...prev,
                customer: updatedCustomer,
            }));

            setShowEditModal(false);
        } catch (err) {
            console.error(err);
            const msg =
                err.response?.data?.message ||
                err.response?.data?.error ||
                "Có lỗi xảy ra khi cập nhật thông tin.";
            setEditError(msg);
        } finally {
            setEditSaving(false);
        }
    };

    // ====== KYC handlers ======

    const handleOpenKycModal = async () => {
        try {
            const res = await getMyKyc();
            setKycInfo(res.data);
        } catch (err) {
            console.error(err);
            if (err.response?.status === 404) {
                setKycInfo(null);
            }
        }

        const customerId = kycInfo?.id || customer?.id || "";
        setKycForm({
            customer_id: customerId,
        });
        setKycFiles({
            cccd_front: null,
            selfie: null,
        });
        setKycSubmitError("");
        setKycSubmitSuccess("");
        setShowKycModal(true);
    };

    const handleCloseKycModal = () => {
        if (kycSaving) return;
        setShowKycModal(false);
    };

    const handleKycFormChange = (e) => {
        const { name, value } = e.target;
        setKycForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleKycFileChange = (e) => {
        const { name, files } = e.target;
        const file = files && files[0] ? files[0] : null;

        setKycFiles((prev) => ({
            ...prev,
            [name]: file,
        }));
    };

    // 🔧 SỬA TẠI ĐÂY: luôn refetch GET /api/kyc/me sau khi submit thành công
    const handleKycSubmit = async (e) => {
        e.preventDefault();
        setKycSaving(true);
        setKycSubmitError("");
        setKycSubmitSuccess("");

        try {
            if (!kycForm.customer_id) {
                throw new Error("Vui lòng nhập Customer ID.");
            }

            const documents = [];
            const existingDocs = Array.isArray(kycInfo?.kyc_documents)
                ? kycInfo.kyc_documents
                : [];

            // Xử lý CCCD_FRONT
            if (kycFiles.cccd_front) {
                const resUpload = await uploadKycFile(
                    kycFiles.cccd_front,
                    "CCCD_FRONT"
                );
                const url = resUpload.data?.url;
                if (!url) {
                    throw new Error("Không lấy được URL ảnh CCCD mặt trước từ server.");
                }
                documents.push({
                    doc_type: "CCCD_FRONT",
                    url,
                });
            } else {
                const old = existingDocs.find((d) => d.doc_type === "CCCD_FRONT");
                if (old) {
                    documents.push({
                        doc_type: "CCCD_FRONT",
                        url: old.url,
                    });
                }
            }

            // Xử lý SELFIE
            if (kycFiles.selfie) {
                const resUpload = await uploadKycFile(kycFiles.selfie, "SELFIE");
                const url = resUpload.data?.url;
                if (!url) {
                    throw new Error("Không lấy được URL ảnh selfie từ server.");
                }
                documents.push({
                    doc_type: "SELFIE",
                    url,
                });
            } else {
                const old = existingDocs.find((d) => d.doc_type === "SELFIE");
                if (old) {
                    documents.push({
                        doc_type: "SELFIE",
                        url: old.url,
                    });
                }
            }

            if (documents.length === 0) {
                throw new Error(
                    "Chưa có tài liệu KYC nào. Vui lòng chọn ít nhất một ảnh để gửi."
                );
            }

            const payload = {
                customer_id: kycForm.customer_id,
                documents,
            };

            // Gửi hồ sơ KYC
            await submitKyc(payload);

            setKycSubmitSuccess("Gửi / cập nhật hồ sơ KYC thành công.");

            // 🔁 Luôn refetch lại từ GET /api/kyc/me để có dữ liệu đúng format
            try {
                const refetch = await getMyKyc();
                setKycInfo(refetch.data);
            } catch (err2) {
                console.error("Lỗi khi refetch KYC sau submit:", err2);
            }

            setKycFiles({
                cccd_front: null,
                selfie: null,
            });

            setTimeout(() => {
                setShowKycModal(false);
            }, 800);
        } catch (err) {
            console.error(err);
            const msg =
                err.response?.data?.message ||
                err.response?.data?.error ||
                err.message ||
                "Có lỗi xảy ra khi gửi hồ sơ KYC.";
            setKycSubmitError(msg);
        } finally {
            setKycSaving(false);
        }
    };

    // Xem ảnh KYC trong modal
    const handleOpenPreview = (url) => {
        setPreviewImageUrl(url);
        setShowPreviewModal(true);
    };

    const handleClosePreview = () => {
        setShowPreviewModal(false);
        setPreviewImageUrl("");
    };

    // --------- RENDER ---------
    return (
        <div id="main-wrapper">
            <DashboardHeader active="settings" />
            <SettingsSecondNavigation />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <DashboardSidebar />

                        <div className="col-lg-9">
                            {loading && (
                                <div className="alert alert-info py-2">
                                    Đang tải thông tin hồ sơ...
                                </div>
                            )}
                            {error && (
                                <div className="alert alert-danger py-2">{error}</div>
                            )}

                            {/* THÔNG TIN CÁ NHÂN */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Thông tin cá nhân
                                    <button
                                        type="button"
                                        onClick={handleOpenEdit}
                                        className="ms-auto text-2 text-uppercase btn-link border-0 bg-transparent p-0"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </button>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row gx-3 align-items-center mb-2">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Họ và tên:
                                    </p>
                                    <p className="col-sm-9 text-3">{fullName}</p>
                                </div>

                                <div className="row gx-3 align-items-center mb-2">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Ngày sinh:
                                    </p>
                                    <p className="col-sm-9 text-3">{dobDisplay}</p>
                                </div>

                                <div className="row gx-3 align-items-center mb-2">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Địa chỉ:
                                    </p>
                                    <p className="col-sm-9 text-3">{address}</p>
                                </div>

                                <div className="row gx-3 align-items-center mb-2">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        CMND/CCCD:
                                    </p>
                                    <p className="col-sm-9 text-3">{nationalId}</p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Trạng thái KYC:
                                    </p>
                                    <p className="col-sm-9 text-3">
                                        <span
                                            className={`badge rounded-pill px-3 py-1 ${kycStatus === "APPROVED"
                                                    ? "bg-success"
                                                    : kycStatus === "REJECTED"
                                                        ? "bg-danger"
                                                        : "bg-warning text-dark"
                                                }`}
                                        >
                                            {kycStatus}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* HỒ SƠ KYC */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Hồ sơ KYC
                                    <button
                                        type="button"
                                        onClick={handleOpenKycModal}
                                        className="ms-auto text-2 text-uppercase btn-link border-0 bg-transparent p-0"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-upload" />
                                        </span>
                                        Gửi / Cập nhật
                                    </button>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                {kycLoading && (
                                    <div className="alert alert-info py-2">
                                        Đang tải hồ sơ KYC...
                                    </div>
                                )}
                                {kycError && (
                                    <div className="alert alert-danger py-2">{kycError}</div>
                                )}

                                {!kycLoading && !kycError && !kycInfo && (
                                    <p className="text-3 mb-0">
                                        Bạn chưa có hồ sơ KYC. Vui lòng nhấn &quot;Gửi / Cập nhật&quot;
                                        để bổ sung tài liệu.
                                    </p>
                                )}

                                {kycInfo && (
                                    <div className="mt-3">
                                        {kycInfo.kyc === "PENDING" ? (
                                            <p className="text-3 mb-0">
                                                Hồ sơ KYC của bạn đang chờ xác nhận. Vui lòng quay lại
                                                sau khi hệ thống hoặc quản trị viên phê duyệt.
                                            </p>
                                        ) : (
                                            <>
                                                <h4 className="text-4 fw-400 mb-3">Tài liệu KYC</h4>

                                                {Array.isArray(kycInfo.kyc_documents) &&
                                                    kycInfo.kyc_documents.length > 0 ? (
                                                    <ul className="list-unstyled mb-0">
                                                        {kycInfo.kyc_documents.map((doc) => (
                                                            <li
                                                                key={doc.id}
                                                                className="d-flex align-items-center justify-content-between py-2 border-bottom"
                                                            >
                                                                <div>
                                                                    <div className="fw-500">
                                                                        {doc.doc_type === "CCCD_FRONT"
                                                                            ? "Ảnh CCCD mặt trước"
                                                                            : doc.doc_type === "SELFIE"
                                                                                ? "Ảnh selfie"
                                                                                : doc.doc_type}
                                                                    </div>
                                                                    <div className="text-muted text-2">
                                                                        Tải lên:{" "}
                                                                        {doc.uploaded_at
                                                                            ? new Date(
                                                                                doc.uploaded_at
                                                                            ).toLocaleString("vi-VN")
                                                                            : ""}
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-sm btn-outline-primary"
                                                                    onClick={() => handleOpenPreview(doc.url)}
                                                                >
                                                                    Xem ảnh
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-3 mb-0">
                                                        Chưa có tài liệu KYC nào được tải lên.
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* CÀI ĐẶT TÀI KHOẢN */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Cài đặt tài khoản
                                    <a
                                        href="#edit-account-settings"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Ngôn ngữ:
                                    </p>
                                    <p className="col-sm-9 text-3">Tiếng Việt (Vietnamese)</p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Múi giờ:
                                    </p>
                                    <p className="col-sm-9 text-3">
                                        (GMT+07:00) Bangkok, Hanoi, Jakarta
                                    </p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Trạng thái tài khoản:
                                    </p>
                                    <p className="col-sm-9 text-3">
                                        <span
                                            className={`rounded-pill d-inline-block px-2 ${isActive
                                                    ? "bg-success text-white"
                                                    : "bg-danger text-white"
                                                }`}
                                        >
                                            <i className="fas fa-check-circle me-1" />
                                            {isActive ? "Đang hoạt động" : "Ngừng hoạt động"}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* ĐIỆN THOẠI – demo tĩnh */}
                            {/* <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Điện thoại
                                    <a
                                        href="#edit-phone"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Di động:
                                    </p>
                                    <p className="col-sm-9 text-3 d-sm-inline-flex align-items-center">
                                        +1 202-555-0125
                                        <span className="badge bg-info text-1 fw-500 rounded-pill px-2 py-1 ms-2">
                                            Chính
                                        </span>
                                    </p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Di động:
                                    </p>
                                    <p className="col-sm-9 text-3">+1 303-666-0512</p>
                                </div>
                            </div> */}
                        </div>
                        {/* end col-lg-9 */}
                    </div>
                </div>
            </div>

            <Footer />

            {/* MODAL CHỈNH SỬA THÔNG TIN CÁ NHÂN */}
            {showEditModal && (
                <>
                    <div
                        className="modal fade show"
                        role="dialog"
                        style={{ display: "block" }}
                        aria-modal="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title fw-400">Thông tin cá nhân</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={handleCloseEdit}
                                        aria-label="Đóng"
                                    />
                                </div>
                                <div className="modal-body p-4">
                                    <form onSubmit={handleEditSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Họ và tên</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="full_name"
                                                value={editForm.full_name}
                                                onChange={handleEditChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Ngày sinh</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="dob"
                                                value={editForm.dob || ""}
                                                onChange={handleEditChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">CMND/CCCD</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="national_id"
                                                value={editForm.national_id}
                                                onChange={handleEditChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Địa chỉ</label>
                                            <textarea
                                                className="form-control"
                                                name="address"
                                                rows={3}
                                                value={editForm.address}
                                                onChange={handleEditChange}
                                                required
                                            />
                                        </div>

                                        {editError && (
                                            <div className="alert alert-danger py-2">
                                                {editError}
                                            </div>
                                        )}

                                        <div className="d-grid mt-3">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={editSaving}
                                            >
                                                {editSaving ? "Đang lưu..." : "Lưu thay đổi"}
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

            {/* MODAL GỬI / CẬP NHẬT HỒ SƠ KYC */}
            {showKycModal && (
                <>
                    <div
                        className="modal fade show"
                        role="dialog"
                        style={{ display: "block" }}
                        aria-modal="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title fw-400">Gửi / Cập nhật hồ sơ KYC</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={handleCloseKycModal}
                                        aria-label="Đóng"
                                    />
                                </div>
                                <div className="modal-body p-4">
                                    <form onSubmit={handleKycSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Customer ID</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="customer_id"
                                                value={kycForm.customer_id}
                                                onChange={handleKycFormChange}
                                                placeholder="Nhập customer_id"
                                                required
                                            />
                                            <small className="form-text text-muted">
                                                Mặc định lấy từ hồ sơ KYC / khách hàng hiện tại, chỉ chỉnh nếu
                                                được admin cung cấp ID khác.
                                            </small>
                                        </div>

                                        {/* Trường chọn ảnh CCCD mặt trước */}
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Ảnh CCCD mặt trước (CCCD_FRONT)
                                            </label>

                                            {getExistingDocUrl("CCCD_FRONT") && (
                                                <div className="mb-2">
                                                    <div className="text-muted text-2 mb-1">
                                                        Ảnh hiện tại:
                                                    </div>
                                                    <img
                                                        src={getExistingDocUrl("CCCD_FRONT")}
                                                        alt="CCCD hiện tại"
                                                        className="img-fluid rounded border"
                                                        style={{ maxHeight: "150px", objectFit: "cover" }}
                                                    />
                                                </div>
                                            )}

                                            <input
                                                type="file"
                                                className="form-control"
                                                name="cccd_front"
                                                accept="image/*"
                                                onChange={handleKycFileChange}
                                            />
                                            <small className="form-text text-muted">
                                                Chọn ảnh mới nếu muốn thay thế. Nếu để trống, hệ thống sẽ giữ
                                                nguyên ảnh hiện tại (nếu đã có).
                                            </small>
                                        </div>

                                        {/* Trường chọn ảnh SELFIE */}
                                        <div className="mb-3">
                                            <label className="form-label">Ảnh selfie (SELFIE)</label>

                                            {getExistingDocUrl("SELFIE") && (
                                                <div className="mb-2">
                                                    <div className="text-muted text-2 mb-1">
                                                        Ảnh hiện tại:
                                                    </div>
                                                    <img
                                                        src={getExistingDocUrl("SELFIE")}
                                                        alt="Selfie hiện tại"
                                                        className="img-fluid rounded border"
                                                        style={{ maxHeight: "150px", objectFit: "cover" }}
                                                    />
                                                </div>
                                            )}

                                            <input
                                                type="file"
                                                className="form-control"
                                                name="selfie"
                                                accept="image/*"
                                                onChange={handleKycFileChange}
                                            />
                                            <small className="form-text text-muted">
                                                Chọn ảnh mới nếu muốn thay thế. Nếu để trống, hệ thống sẽ giữ
                                                nguyên ảnh hiện tại (nếu đã có).
                                            </small>
                                        </div>

                                        {kycSubmitError && (
                                            <div className="alert alert-danger py-2">
                                                {kycSubmitError}
                                            </div>
                                        )}
                                        {kycSubmitSuccess && (
                                            <div className="alert alert-success py-2">
                                                {kycSubmitSuccess}
                                            </div>
                                        )}

                                        <div className="d-grid mt-3">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={kycSaving}
                                            >
                                                {kycSaving ? "Đang gửi..." : "Gửi / Cập nhật hồ sơ KYC"}
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

            {/* MODAL XEM ẢNH KYC */}
            {showPreviewModal && previewImageUrl && (
                <>
                    <div
                        className="modal fade show"
                        role="dialog"
                        style={{ display: "block" }}
                        aria-modal="true"
                    >
                        <div
                            className="modal-dialog modal-dialog-centered modal-lg"
                            role="document"
                        >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title fw-400">Xem tài liệu KYC</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={handleClosePreview}
                                        aria-label="Đóng"
                                    />
                                </div>
                                <div className="modal-body p-3 text-center">
                                    <img
                                        src={previewImageUrl}
                                        alt="Tài liệu KYC"
                                        className="img-fluid"
                                        style={{ maxHeight: "70vh", objectFit: "contain" }}
                                    />
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

export default SettingsProfilePage;

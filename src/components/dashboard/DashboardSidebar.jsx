import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
    return (
        <aside className="col-lg-3">
            {/* Thông tin hồ sơ */}
            <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                <div className="profile-thumb mt-3 mb-4 position-relative d-inline-block">
                    <img
                        className="rounded-circle"
                        src="/images/profile-thumb.jpg"
                        alt="Ảnh đại diện"
                    />

                    {/* Nút đổi ảnh (chỉ là giao diện, chưa xử lý upload) */}
                    <div
                        className="profile-thumb-edit bg-primary text-white rounded-circle p-2 position-absolute"
                        style={{ right: 0, bottom: 0, cursor: "pointer" }}
                    >
                        <i className="fas fa-camera position-absolute top-50 start-50 translate-middle"></i>
                        <input
                            type="file"
                            className="custom-file-input"
                            id="profilePictureInput"
                            style={{
                                opacity: 0,
                                position: "absolute",
                                inset: 0,
                                cursor: "pointer",
                            }}
                        />
                    </div>
                </div>

                <p className="text-3 fw-500 mb-2">Xin chào, Smith Rhodes</p>

                <p className="mb-2">
                    <Link className="btn-link text-2" to="/settings-profile">
                        <i className="fas fa-edit me-1"></i>Chỉnh sửa hồ sơ
                    </Link>
                </p>
            </div>

            {/* Số dư tài khoản */}
            <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                <div className="text-17 text-primary my-3">
                    <i className="fas fa-wallet"></i>
                </div>
                <h3 className="text-9 fw-400">$2,956.00</h3>
                <p className="mb-2 text-muted opacity-75">Số dư khả dụng</p>

                <hr className="mx-n3" />

                <div className="d-flex">
                    <Link to="/withdraw-money" className="btn-link text-3">
                        Rút tiền
                    </Link>
                    <Link to="/deposit-money" className="btn-link text-3 ms-auto">
                        Nạp tiền
                    </Link>
                </div>
            </div>

            {/* Hỗ trợ khách hàng */}
            <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                <div className="text-17 text-primary my-3">
                    <i className="fas fa-comments"></i>
                </div>

                <h3 className="text-5 fw-400 my-4">Cần hỗ trợ?</h3>

                <p className="text-muted opacity-75 mb-4">
                    Nếu bạn có thắc mắc hoặc vấn đề liên quan đến tài khoản,
                    đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp bạn.
                </p>

                <div className="d-grid">
                    <Link to="/help" className="btn btn-primary">
                        Liên hệ hỗ trợ
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export default DashboardSidebar;

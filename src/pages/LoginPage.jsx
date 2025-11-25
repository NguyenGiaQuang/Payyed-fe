import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as loginApi } from "../api/auth";

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Vui lòng nhập email và mật khẩu.");
            return;
        }

        try {
            setLoading(true);

            // GỌI API ĐĂNG NHẬP
            const res = await loginApi({ email, password });

            // Backend response:
            // { token: "..." }
            const token = res.data?.token;

            if (!token) {
                setError("Không tìm thấy token từ máy chủ.");
                return;
            }

            // Lưu token vào localStorage
            localStorage.setItem("authToken", token);

            // Điều hướng sang Dashboard
            navigate("/dashboard");
        } catch (err) {
            console.log(err);
            const msg =
                err.response?.data?.message ||
                err.response?.data?.error ||
                "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="main-wrapper">
            <div className="container-fluid px-0">
                <div className="row g-0 min-vh-100">
                    {/* LEFT WELCOME SECTION */}
                    <div className="col-md-6">
                        <div className="hero-wrap d-flex align-items-center h-100">
                            <div className="hero-mask opacity-8 bg-primary"></div>

                            <div
                                className="hero-bg hero-bg-scroll"
                                style={{ backgroundImage: "url('/images/bg/image-3.jpg')" }}
                            ></div>

                            <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                                <div className="row g-0">
                                    <div className="col-10 col-lg-9 mx-auto">
                                        <div className="logo mt-5 mb-5 mb-md-0">
                                            <Link className="d-flex" to="/" title="Payyed">
                                                <img src="/images/logo-light.png" alt="Payyed" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-0 my-auto">
                                    <div className="col-10 col-lg-9 mx-auto">
                                        <h1 className="text-11 text-white mb-4">Chào mừng quay trở lại!</h1>
                                        <p className="text-4 text-white lh-base mb-5">
                                            Gửi tiền, nhận tiền và thanh toán an toàn chỉ với vài thao tác.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT LOGIN FORM */}
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="container my-4">
                            <div className="row g-0">
                                <div className="col-11 col-lg-9 col-xl-8 mx-auto">

                                    <h3 className="fw-400 mb-4">Đăng nhập</h3>

                                    {/* Lỗi */}
                                    {error && <div className="alert alert-danger">{error}</div>}

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Nhập email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Mật khẩu</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Nhập mật khẩu"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-sm">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" id="remember-me" type="checkbox" />
                                                    <label className="form-check-label" htmlFor="remember-me">
                                                        Ghi nhớ đăng nhập
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm text-end">
                                                <Link to="/forgot-password" className="btn-link">
                                                    Quên mật khẩu?
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="d-grid mb-3">
                                            <button className="btn btn-primary" type="submit" disabled={loading}>
                                                {loading ? "Đang xử lý..." : "Đăng nhập"}
                                            </button>
                                        </div>
                                    </form>

                                    <p className="text-3 text-center text-muted">
                                        Chưa có tài khoản?{" "}
                                        <Link to="/signup" className="btn-link">
                                            Đăng ký ngay
                                        </Link>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END RIGHT FORM */}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

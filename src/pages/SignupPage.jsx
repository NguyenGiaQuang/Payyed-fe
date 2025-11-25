import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register as registerApi } from "../api/auth";

const SignupPage = () => {
    const navigate = useNavigate();

    const [full_name, setFullName] = useState(""); // backend dùng full_name
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!full_name || !email || !password) {
            setError("Vui lòng nhập đầy đủ họ tên, email và mật khẩu.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp.");
            return;
        }

        try {
            setLoading(true);

            await registerApi({
                email,
                password,
                full_name, // KHỚP body backend
            });

            setSuccess("Đăng ký thành công! Đang chuyển sang đăng nhập...");
            setTimeout(() => navigate("/login"), 1000);
        } catch (err) {
            console.log(err);
            const msg =
                err.response?.data?.message ||
                err.response?.data?.error ||
                "Đăng ký thất bại. Vui lòng thử lại.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="main-wrapper">
            <div className="container-fluid px-0">
                <div className="row g-0 min-vh-100">

                    {/* LEFT SIDE */}
                    <div className="col-md-6">
                        <div className="hero-wrap d-flex align-items-center h-100">
                            <div className="hero-mask opacity-8 bg-primary" />
                            <div
                                className="hero-bg hero-bg-scroll"
                                style={{ backgroundImage: "url('/images/bg/image-3.jpg')" }}
                            ></div>

                            <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                                <div className="row g-0">
                                    <div className="col-10 col-lg-9 mx-auto">
                                        <div className="logo mt-5 mb-5 mb-md-0">
                                            <Link className="d-flex" to="/">
                                                <img src="/images/logo-light.png" alt="Payyed" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-0 my-auto">
                                    <div className="col-10 col-lg-9 mx-auto">
                                        <h1 className="text-11 text-white mb-4">Xác thực tài khoản ngay!</h1>
                                        <p className="text-4 text-white lh-base mb-5">
                                            Trải nghiệm chuyển – nhận tiền quốc tế nhanh chóng và an toàn.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE (FORM) */}
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="container my-4">
                            <div className="row g-0">
                                <div className="col-11 col-lg-9 col-xl-8 mx-auto">

                                    <h3 className="fw-400 mb-4">Đăng ký</h3>

                                    {error && <div className="alert alert-danger">{error}</div>}
                                    {success && <div className="alert alert-success">{success}</div>}

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Họ và tên</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={full_name}
                                                onChange={(e) => setFullName(e.target.value)}
                                                placeholder="Nhập họ và tên"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Nhập email"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Mật khẩu</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Nhập mật khẩu"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Xác nhận mật khẩu</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="Nhập lại mật khẩu"
                                                required
                                            />
                                        </div>

                                        <div className="d-grid mt-4">
                                            <button className="btn btn-primary" type="submit" disabled={loading}>
                                                {loading ? "Đang xử lý..." : "Đăng ký"}
                                            </button>
                                        </div>
                                    </form>

                                    <p className="text-center text-muted text-3 mt-3">
                                        Bạn đã có tài khoản?{" "}
                                        <Link to="/login" className="btn-link">
                                            Đăng nhập ngay
                                        </Link>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignupPage;

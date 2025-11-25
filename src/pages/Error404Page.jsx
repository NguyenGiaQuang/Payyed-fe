import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Error404Page = () => {
    return (
        <div id="main-wrapper">
            <Header />

            {/* PAGE HEADER / HERO 404 */}
            <section className="hero-wrap section">
                <div className="hero-mask opacity-8 bg-dark"></div>
                <div
                    className="hero-bg hero-bg-scroll"
                    style={{ backgroundImage: "url('/images/bg/image-2.jpg')" }}
                ></div>

                <div className="hero-content py-5">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-16 text-white fw-600 mb-3">404</h1>
                                <h2 className="text-8 text-white mb-3">
                                    Ôi, trang này không tồn tại!
                                </h2>
                                <p className="text-4 text-white-50 mb-4">
                                    Có thể liên kết đã cũ, bị sai hoặc trang đã được di chuyển.
                                    <br className="d-none d-md-block" />
                                    Hãy quay lại trang chủ hoặc thử một đường dẫn khác.
                                </p>

                                <a href="/" className="btn btn-primary m-2">
                                    Về trang chủ
                                </a>
                                <a href="/contact-us" className="btn btn-outline-light m-2">
                                    Liên hệ hỗ trợ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT (OPTIONAL EXTRA INFO) */}
            <div id="content">
                <section className="section bg-white py-5">
                    <div className="container text-center">
                        <h3 className="text-6 mb-3">Bạn có thể thử:</h3>
                        <p className="text-3 mb-4">
                            • Kiểm tra lại đường dẫn URL<br />
                            • Quay về <a href="/">trang chủ</a><br />
                            • Hoặc truy cập <a href="/help">Trung tâm trợ giúp</a> để được hỗ trợ thêm
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default Error404Page;

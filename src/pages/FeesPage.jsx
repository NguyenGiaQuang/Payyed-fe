import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const FeesPage = () => {
    return (
        <div id="main-wrapper">
            <Header />

            {/* HERO BANNER */}
            <section className="hero-wrap section">
                <div
                    className="hero-bg hero-bg-scroll"
                    style={{ backgroundImage: "url('/images/bg/image-3.jpg')" }}
                ></div>

                <div className="hero-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-7 col-xl-6 text-center text-lg-start">
                                <h1 className="text-11 text-white mb-4">
                                    Chúng tôi cam kết mức phí thấp
                                    <br />
                                    và không thu phụ phí
                                </h1>

                                <p className="text-5 text-white lh-base mb-4">
                                    Đăng ký tài khoản Payyed hoàn toàn MIỄN PHÍ.
                                    <br />
                                    Tạo tài khoản ngay hôm nay và trải nghiệm!
                                </p>

                                <a href="#!" className="btn btn-primary my-2 me-2">
                                    Mở tài khoản miễn phí
                                </a>

                                <a
                                    className="btn btn-link text-light video-btn my-2"
                                    href="#!"
                                    data-src="https://www.youtube.com/embed/7e90gBu4pas"
                                    data-bs-toggle="modal"
                                    data-bs-target="#videoModal"
                                >
                                    <span className="me-2">
                                        <i className="fas fa-play-circle"></i>
                                    </span>
                                    Xem cách hoạt động
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <div id="content">
                <section className="section py-5">
                    <div className="container">
                        <div className="row g-5">
                            {/* WITHDRAWAL */}
                            <div className="col-md-6">
                                <div className="bg-white shadow-sm rounded p-5 text-center">
                                    <div className="featured-box style-4">
                                        <div className="featured-box-icon text-light border rounded-circle shadow-none">
                                            <i className="fas fa-download"></i>
                                        </div>
                                        <h3 className="text-body text-7 mb-3">Rút tiền</h3>

                                        <p className="text-4 lh-base">
                                            Bạn có thể rút tiền về tài khoản ngân hàng nội địa với
                                            tỷ giá tốt và quy trình nhanh chóng.
                                        </p>

                                        <div className="text-primary text-10 pt-3 pb-4 mb-2">
                                            lên đến 1.5%
                                        </div>

                                        <a href="#!" className="text-muted btn-link text-4">
                                            Xem chi tiết <i className="fas fa-chevron-right text-2 ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* DEPOSIT */}
                            <div className="col-md-6">
                                <div className="bg-white shadow-sm rounded p-5 text-center">
                                    <div className="featured-box style-4">
                                        <div className="featured-box-icon text-light border rounded-circle shadow-none">
                                            <i className="fas fa-upload"></i>
                                        </div>
                                        <h3 className="text-body text-7 mb-3">Nạp tiền</h3>

                                        <p className="text-4 lh-base">
                                            Nhiều phương thức nạp tiền linh hoạt – luôn có lựa chọn
                                            phù hợp cho bạn.
                                        </p>

                                        <div className="text-primary text-10 pt-3 pb-4 mb-2">
                                            lên đến 1.0%
                                        </div>

                                        <a href="#!" className="text-muted btn-link text-4">
                                            Xem chi tiết <i className="fas fa-chevron-right text-2 ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* RECEIVE MONEY */}
                            <div className="col-md-6">
                                <div className="bg-white shadow-sm rounded p-5 text-center">
                                    <div className="featured-box style-4">
                                        <div className="featured-box-icon text-light border rounded-circle shadow-none">
                                            <i className="fas fa-hand-holding-usd"></i>
                                        </div>
                                        <h3 className="text-body text-7 mb-3">Nhận tiền</h3>

                                        <p className="text-4 lh-base">Nhận tiền luôn MIỄN PHÍ.</p>

                                        <div className="text-primary text-10 pt-3 pb-4 mb-2">
                                            Miễn phí
                                        </div>

                                        <a href="#!" className="text-muted btn-link text-4">
                                            Xem chi tiết <i className="fas fa-chevron-right text-2 ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* SEND MONEY */}
                            <div className="col-md-6">
                                <div className="bg-white shadow-sm rounded p-5 text-center">
                                    <div className="featured-box style-4">
                                        <div className="featured-box-icon text-light border rounded-circle shadow-none">
                                            <i className="fas fa-file-invoice-dollar"></i>
                                        </div>
                                        <h3 className="text-body text-7 mb-3">Gửi tiền</h3>

                                        <p className="text-4 lh-base">
                                            Gửi tiền quốc tế ngay lập tức với mức phí tốt.
                                        </p>

                                        <div className="text-primary text-10 pt-3 pb-4 mb-2">
                                            lên đến 1.0%
                                        </div>

                                        <a href="#!" className="text-muted btn-link text-4">
                                            Xem chi tiết <i className="fas fa-chevron-right text-2 ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* CURRENCY CONVERSION */}
                            <div className="col-md-6">
                                <div className="bg-white shadow-sm rounded p-5 text-center">
                                    <div className="featured-box style-4">
                                        <div className="featured-box-icon text-light border rounded-circle shadow-none">
                                            <i className="fas fa-exchange-alt"></i>
                                        </div>
                                        <h3 className="text-body text-7 mb-3">Chuyển đổi tiền tệ</h3>

                                        <p className="text-4 lh-base">
                                            Luôn áp dụng tỷ giá giữa thị trường – mức tỷ giá minh
                                            bạch nhất.
                                        </p>

                                        <div className="text-primary text-10 pt-3 pb-4 mb-2">
                                            lên đến 0.4%
                                        </div>

                                        <a href="#!" className="text-muted btn-link text-4">
                                            Xem chi tiết <i className="fas fa-chevron-right text-2 ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ADMIN FEE */}
                            <div className="col-md-6">
                                <div className="bg-white shadow-sm rounded p-5 text-center">
                                    <div className="featured-box style-4">
                                        <div className="featured-box-icon text-light border rounded-circle shadow-none">
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <h3 className="text-body text-7 mb-3">Phí duy trì</h3>

                                        <p className="text-4 lh-base">
                                            Sử dụng Payyed thường xuyên, bạn sẽ không bị tính phí duy
                                            trì tài khoản!
                                        </p>

                                        <div className="text-primary text-10 pt-3 pb-4 mb-2">
                                            Miễn phí
                                        </div>

                                        <a href="#!" className="text-muted btn-link text-4">
                                            Xem chi tiết <i className="fas fa-chevron-right text-2 ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA SECTION */}
                        <section className="section bg-primary mt-5">
                            <div className="container text-center">
                                <h2 className="text-9 text-white">
                                    Mở tài khoản miễn phí chỉ trong vài phút
                                </h2>
                                <p className="text-5 text-white mb-4">
                                    Gửi – nhận – yêu cầu tiền dễ dàng.
                                    Hỗ trợ hơn 180 quốc gia và 80 loại tiền tệ.
                                </p>
                                <a href="#!" className="btn btn-light">
                                    Mở tài khoản miễn phí
                                </a>
                            </div>
                        </section>

                        {/* APP DOWNLOAD */}
                        <section className="section py-5">
                            <div className="container text-center">
                                <h2 className="text-9">Tải ứng dụng</h2>
                                <p className="text-4 mb-4">
                                    Tải ứng dụng Payyed để gửi và nhận tiền nhanh hơn, tiện lợi hơn.
                                </p>

                                <a className="d-inline-flex mx-3" href="#!">
                                    <img src="/images/app-store.png" alt="App Store" />
                                </a>
                                <a className="d-inline-flex mx-3" href="#!">
                                    <img src="/images/google-play-store.png" alt="Google Play Store" />
                                </a>
                            </div>
                        </section>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default FeesPage;

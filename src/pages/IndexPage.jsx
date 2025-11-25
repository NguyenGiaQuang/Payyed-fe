import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const IndexPage = () => {
    return (
        <div id="main-wrapper">
            <Header />

            {/* CONTENT */}
            <div id="content">

                {/* SLIDESHOW */}
                <div
                    className="owl-carousel owl-theme single-slideshow"
                    data-autoplay="true"
                    data-loop="true"
                    data-autoheight="true"
                    data-nav="true"
                    data-items="1"
                >

                    {/* SLIDE 1 */}
                    <div className="item">
                        <section className="hero-wrap">
                            <div className="hero-mask opacity-7 bg-dark"></div>
                            <div
                                className="hero-bg"
                                style={{
                                    backgroundImage: "url('/src/assets/images/bg/image-1.jpg')",
                                }}
                            />
                            <div className="hero-content d-flex fullscreen-with-header py-5">
                                <div className="container my-auto text-center">
                                    <h2 className="text-16 text-white">Gửi & Nhận Tiền</h2>

                                    <p className="text-5 text-white mb-4">
                                        Gửi, nhận và yêu cầu thanh toán trực tuyến một cách nhanh chóng và dễ dàng với Payyed.
                                        <br className="d-none d-lg-block" />
                                        Hỗ trợ hơn 180 quốc gia và 120 loại tiền tệ.
                                    </p>

                                    <a href="#!" className="btn btn-primary m-2">Mở tài khoản miễn phí</a>

                                    <a
                                        className="btn btn-outline-light video-btn m-2"
                                        href="#!"
                                        data-src="https://www.youtube.com/embed/7e90gBu4pas"
                                        data-bs-toggle="modal"
                                        data-bs-target="#videoModal"
                                    >
                                        <span className="text-2 me-3"><i className="fas fa-play"></i></span>
                                        Xem cách hoạt động
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* SLIDE 2 */}
                    <div className="item">
                        <section className="hero-wrap">
                            <div
                                className="hero-bg"
                                style={{ backgroundImage: "url('/src/assets/images/bg/image-3.jpg')" }}
                            />
                            <div className="hero-content d-flex fullscreen-with-header py-5">
                                <div className="container my-auto">
                                    <div className="row">
                                        <div className="col-12 col-lg-8 col-xl-7 text-center text-lg-start">
                                            <h2 className="text-13 text-white">
                                                Được hơn 50.000 doanh nghiệp trên toàn thế giới tin dùng
                                            </h2>

                                            <p className="text-5 text-white mb-4">
                                                Hỗ trợ hơn 180 quốc gia và 120 loại tiền tệ.
                                            </p>

                                            <a href="#!" className="btn btn-primary me-3">Bắt đầu miễn phí</a>

                                            <a
                                                className="btn btn-link text-light video-btn"
                                                href="#!"
                                                data-src="https://www.youtube.com/embed/7e90gBu4pas"
                                                data-bs-toggle="modal"
                                                data-bs-target="#videoModal"
                                            >
                                                <span className="me-2"><i className="fas fa-play-circle"></i></span>
                                                Xem demo
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>

                {/* WHY CHOOSE */}
                <section className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center">Tại sao bạn nên chọn Payyed?</h2>

                        <p className="lead text-center mb-5">
                            Dưới đây là 4 lý do hàng đầu để bạn nên dùng Payyed để quản lý tài chính.
                        </p>

                        <div className="row gy-5">

                            <div className="col-sm-6 col-lg-3">
                                <div className="featured-box">
                                    <div className="featured-box-icon text-primary"><i className="fas fa-hand-pointer"></i></div>
                                    <h3>Dễ sử dụng</h3>
                                    <p className="text-3">
                                        Giao diện trực quan, dễ thao tác, phù hợp với mọi người dùng.
                                    </p>
                                    <a href="#!" className="btn-link text-3">
                                        Xem chi tiết <i className="fas fa-chevron-right text-1 ms-2"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="featured-box">
                                    <div className="featured-box-icon text-primary"><i className="fas fa-share"></i></div>
                                    <h3>Thanh toán nhanh</h3>
                                    <p className="text-3">
                                        Gửi – nhận tiền chỉ trong vài giây, giao dịch 24/7.
                                    </p>
                                    <a href="#!" className="btn-link text-3">
                                        Xem chi tiết <i className="fas fa-chevron-right text-1 ms-2"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="featured-box">
                                    <div className="featured-box-icon text-primary"><i className="fas fa-dollar-sign"></i></div>
                                    <h3>Phí thấp</h3>
                                    <p className="text-3">
                                        Mức phí minh bạch và thấp hơn so với các ngân hàng truyền thống.
                                    </p>
                                    <a href="#!" className="btn-link text-3">
                                        Xem chi tiết <i className="fas fa-chevron-right text-1 ms-2"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="featured-box">
                                    <div className="featured-box-icon text-primary"><i className="fas fa-lock"></i></div>
                                    <h3>Bảo mật tuyệt đối</h3>
                                    <p className="text-3">
                                        Bảo mật chuẩn ngân hàng, mã hóa nhiều lớp.
                                    </p>
                                    <a href="#!" className="btn-link text-3">
                                        Xem chi tiết <i className="fas fa-chevron-right text-1 ms-2"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* PAYMENT SOLUTIONS */}
                <section className="section">
                    <div className="container overflow-hidden">
                        <div className="row g-5">

                            <div className="col-lg-5 col-xl-6 d-flex">
                                <div className="my-auto">
                                    <h2 className="text-9">Giải pháp thanh toán cho mọi đối tượng</h2>

                                    <p className="text-4">
                                        Payyed mang đến các giải pháp thanh toán tiện lợi cho freelancer, người bán hàng online, khách mua sắm và các nhà tiếp thị liên kết.
                                    </p>

                                    <a href="#!" className="btn-link text-4">
                                        Xem thêm giải pháp <i className="fas fa-chevron-right text-2 ms-2"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-7 col-xl-6">
                                <div className="row g-4 banner style-2 justify-content-center">

                                    <div className="col-12 col-sm-6 text-center">
                                        <div className="item rounded shadow d-inline-block">
                                            <a href="#!">
                                                <div className="caption rounded-bottom"><h2 className="text-5 fw-400 mb-0">Freelancer</h2></div>
                                                <div className="banner-mask"></div>
                                                <img className="img-fluid" src="/src/assets/images/anyone-freelancer.jpg" alt="Freelancer" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 text-center">
                                        <div className="item rounded shadow d-inline-block">
                                            <a href="#!">
                                                <div className="caption rounded-bottom"><h2 className="text-5 fw-400 mb-0">Mua sắm online</h2></div>
                                                <div className="banner-mask"></div>
                                                <img className="img-fluid" src="/src/assets/images/anyone-online-shopping.jpg" alt="Online Shopping" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 text-center">
                                        <div className="item rounded shadow d-inline-block">
                                            <a href="#!">
                                                <div className="caption rounded-bottom"><h2 className="text-5 fw-400 mb-0">Người bán online</h2></div>
                                                <div className="banner-mask"></div>
                                                <img className="img-fluid" src="/src/assets/images/anyone-online-sellers.jpg" alt="Online Seller" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 text-center">
                                        <div className="item rounded shadow d-inline-block">
                                            <a href="#!">
                                                <div className="caption rounded-bottom"><h2 className="text-5 fw-400 mb-0">Tiếp thị liên kết</h2></div>
                                                <div className="banner-mask"></div>
                                                <img className="img-fluid" src="/src/assets/images/anyone-affiliate-marketing.jpg" alt="Affiliate Marketing" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHAT CAN YOU DO */}
                <section className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center">Bạn có thể làm gì với Payyed?</h2>

                        <p className="lead text-center mb-5">
                            Payyed hỗ trợ đầy đủ các tính năng thanh toán hiện đại, tiện lợi và an toàn.
                        </p>

                        <div className="row g-4">

                            <div className="col-sm-6 col-lg-3">
                                <a href="#!">
                                    <div className="featured-box style-5 rounded">
                                        <div className="featured-box-icon text-primary"><i className="fas fa-share-square"></i></div>
                                        <h3>Gửi tiền</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <a href="#!">
                                    <div className="featured-box style-5 rounded">
                                        <div className="featured-box-icon text-primary"><i className="fas fa-check-square"></i></div>
                                        <h3>Nhận tiền</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <a href="#!">
                                    <div className="featured-box style-5 rounded">
                                        <div className="featured-box-icon text-primary"><i className="fas fa-user-friends"></i></div>
                                        <h3>Thanh toán bạn bè</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <a href="#!">
                                    <div className="featured-box style-5 rounded">
                                        <div className="featured-box-icon text-primary"><i className="fas fa-shopping-bag"></i></div>
                                        <h3>Mua sắm online</h3>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <div className="text-center mt-5">
                            <a href="#!" className="btn-link text-4">
                                Xem thêm tính năng <i className="fas fa-chevron-right text-2 ms-2"></i>
                            </a>
                        </div>

                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="section">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="card bg-dark-3 shadow-sm border-0">
                                    <img
                                        className="card-img img-fluid opacity-8"
                                        src="/src/assets/images/how-work.jpg"
                                        alt="How it works"
                                    />
                                    <div className="card-img-overlay p-0">
                                        <a
                                            className="d-flex h-100 video-btn"
                                            href="#!"
                                            data-src="https://www.youtube.com/embed/7e90gBu4pas"
                                            data-bs-toggle="modal"
                                            data-bs-target="#videoModal"
                                        >
                                            <span className="playButton playButton-pulsing bg-white m-auto">
                                                <i className="fas fa-play"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-5 mt-lg-0">
                                <div className="ms-4">
                                    <h2 className="text-9">Hệ thống hoạt động như thế nào?</h2>

                                    <p className="text-4">
                                        Payyed được xây dựng với quy trình đơn giản, minh bạch và dễ tiếp cận.
                                    </p>

                                    <ul className="list-unstyled text-3 lh-lg">
                                        <li><i className="fas fa-check me-2"></i>Đăng ký tài khoản</li>
                                        <li><i className="fas fa-check me-2"></i>Gửi & nhận tiền xuyên quốc gia</li>
                                        <li><i className="fas fa-check me-2"></i>Chuyển về tài khoản ngân hàng nội địa</li>
                                    </ul>

                                    <a href="#!" className="btn btn-outline-primary shadow-none mt-2">
                                        Mở tài khoản miễn phí
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL */}
                <section className="section bg-white">
                    <div className="container">

                        <h2 className="text-9 text-center">Khách hàng nói gì về Payyed</h2>

                        <p className="lead text-center mb-4">
                            Trải nghiệm thanh toán mà ai cũng muốn chia sẻ.
                        </p>

                        <div
                            className="owl-carousel owl-theme"
                            data-autoplay="true"
                            data-nav="true"
                            data-loop="true"
                            data-margin="30"
                            data-slideby="2"
                            data-items-xs="1"
                            data-items-sm="1"
                            data-items-md="2"
                            data-items-lg="2"
                        >

                            <div className="item">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-9 text-muted opacity-2 lh-base mb-0">
                                        <i className="fa fa-quote-left"></i>
                                    </p>

                                    <p className="text-4">
                                        “Dễ sử dụng, giá cả hợp lý, giao diện trực quan. Payyed thực sự giúp tôi xử lý thanh toán nhanh chóng.”
                                    </p>

                                    <strong className="d-block fw-500">Jay Shah</strong>
                                    <span className="text-muted">Founder tại Icomatic Pvt Ltd</span>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>

                                    <p className="text-4">
                                        “Trải nghiệm tuyệt vời. Giao dịch nhanh, bảo mật tốt, rất phù hợp cho freelancer.”
                                    </p>

                                    <strong className="d-block fw-500">Patrick Cary</strong>
                                    <span className="text-muted">Freelancer (USA)</span>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>

                                    <p className="text-4">
                                        “Chuyển tiền nhanh, tiện lợi và tỷ giá tốt hơn ngân hàng. Rất đáng để sử dụng.”
                                    </p>

                                    <strong className="d-block fw-500">De Mortel</strong>
                                    <span className="text-muted">Nhà bán lẻ trực tuyến</span>
                                </div>
                            </div>

                        </div>

                        <div className="text-center mt-4">
                            <a href="#!" className="btn-link text-4">
                                Xem thêm đánh giá <i className="fas fa-chevron-right text-2 ms-2"></i>
                            </a>
                        </div>

                    </div>
                </section>

                {/* SUPPORT */}
                <section className="hero-wrap section shadow-md">
                    <div className="hero-mask opacity-9 bg-primary"></div>

                    <div
                        className="hero-bg"
                        style={{ backgroundImage: "url('/src/assets/images/bg/image-2.jpg')" }}
                    ></div>

                    <div className="hero-content py-5">
                        <div className="container text-center">
                            <h2 className="text-9 text-white">Hỗ trợ khách hàng tuyệt vời</h2>

                            <p className="lead text-white mb-4">
                                Bạn có câu hỏi? Đừng lo — đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng 24/7.
                            </p>

                            <a href="#!" className="btn btn-light">Tìm hiểu thêm</a>
                        </div>
                    </div>
                </section>

                {/* APP DOWNLOAD */}
                <section className="section py-5">
                    <div className="container text-center">
                        <h2 className="text-9">Tải ứng dụng ngay</h2>

                        <p className="lead mb-4">
                            Tải ứng dụng Payyed để gửi và nhận tiền nhanh hơn, tiện lợi hơn.
                        </p>

                        <a className="d-inline-flex mx-3" href="#!">
                            <img alt="App Store" src="/src/assets/images/app-store.png" width="168" />
                        </a>

                        <a className="d-inline-flex mx-3" href="#!">
                            <img alt="Google Play" src="/src/assets/images/google-play-store.png" width="166" />
                        </a>
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    );
};

export default IndexPage;

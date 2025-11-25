import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const AboutPage = () => {
    return (
        <div id="main-wrapper">
            <Header />

            {/* PAGE HEADER + HERO */}
            <section className="page-header page-header-text-light py-0 mb-0">
                <section className="hero-wrap section">
                    <div className="hero-mask opacity-7 bg-dark"></div>
                    <div
                        className="hero-bg hero-bg-scroll"
                        style={{ backgroundImage: "url('/images/bg/image-2.jpg')" }}
                    ></div>
                    <div className="hero-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="text-11 fw-500 text-white mb-3">
                                        Về Payyed
                                    </h1>
                                    <p className="text-5 text-white lh-base mb-4">
                                        Sứ mệnh của chúng tôi là giúp bạn tiết kiệm phí chuyển tiền
                                        và hưởng tỷ giá tốt hơn!
                                    </p>
                                    <a href="#!" className="btn btn-primary m-2">
                                        Mở tài khoản miễn phí
                                    </a>
                                    <a
                                        className="btn btn-outline-light video-btn m-2"
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
            </section>

            {/* CONTENT */}
            <div id="content">
                {/* WHO WE ARE */}
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex">
                                <div className="my-auto px-0 px-lg-5 mx-2">
                                    <h2 className="text-9 mb-4">Chúng tôi là ai</h2>
                                    <p className="text-4">
                                        Payyed là nền tảng thanh toán số được xây dựng để đơn giản
                                        hóa việc chuyển tiền và thanh toán trực tuyến. Chúng tôi hỗ
                                        trợ đa dạng quốc gia và loại tiền tệ, giúp người dùng tiết
                                        kiệm thời gian và chi phí khi giao dịch quốc tế.
                                    </p>
                                    <p className="text-4 mb-0">
                                        Từ cá nhân, freelancer, doanh nghiệp nhỏ đến các tổ chức
                                        lớn – Payyed đều cung cấp giải pháp phù hợp, minh bạch và
                                        dễ sử dụng.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 my-auto text-center">
                                <img
                                    className="img-fluid shadow-lg rounded-3"
                                    src="/images/who-we-are.jpg"
                                    alt="Who we are"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* OUR VALUES */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="row">
                                    <div className="col-6 col-lg-7 ms-auto mb-lg-n5">
                                        <img
                                            className="img-fluid rounded-3 shadow-lg"
                                            src="/images/our-values-vision.jpg"
                                            alt="Tầm nhìn"
                                        />
                                    </div>
                                    <div className="col-6 col-lg-8 mt-lg-n5">
                                        <img
                                            className="img-fluid rounded-3 shadow-lg"
                                            src="/images/our-values-mission.jpg"
                                            alt="Sứ mệnh"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 d-flex order-1 order-lg-2">
                                <div className="my-auto px-0 px-lg-5">
                                    <h2 className="text-9 mb-4">Giá trị cốt lõi</h2>

                                    <h4 className="text-4 fw-500">Sứ mệnh</h4>
                                    <p className="tex-3">
                                        Mang đến giải pháp chuyển tiền và thanh toán trực tuyến
                                        nhanh chóng, an toàn và chi phí hợp lý, giúp mọi người dễ
                                        dàng tiếp cận các dịch vụ tài chính toàn cầu.
                                    </p>

                                    <h4 className="text-4 fw-500 mb-2">Tầm nhìn</h4>
                                    <p className="tex-3">
                                        Trở thành nền tảng thanh toán số được tin dùng hàng đầu,
                                        nơi mọi giao dịch được thực hiện chỉ trong vài thao tác,
                                        minh bạch và bảo mật tuyệt đối.
                                    </p>

                                    <h4 className="text-4 fw-500 mb-2">Mục tiêu</h4>
                                    <p className="tex-3 mb-0">
                                        Không ngừng cải tiến sản phẩm, mở rộng mạng lưới đối tác và
                                        nâng cao trải nghiệm người dùng để mỗi giao dịch với Payyed
                                        đều là một trải nghiệm tích cực.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LEADERSHIP */}
                <section className="section">
                    <div className="container">
                        <h2 className="text-9 text-center">Ban lãnh đạo</h2>
                        <p className="lead text-center mb-5">
                            Đội ngũ lãnh đạo giàu kinh nghiệm trong lĩnh vực tài chính và
                            công nghệ.
                        </p>

                        <div className="row g-4">
                            <div className="col-sm-6 col-md-3 text-center">
                                <div className="team rounded d-inline-block">
                                    <img
                                        className="img-fluid rounded"
                                        alt="Neil Patel"
                                        src="/images/team/leader.jpg"
                                    />
                                    <h3>Neil Patel</h3>
                                    <p className="text-muted">CEO &amp; Nhà sáng lập</p>
                                    <ul className="social-icons social-icons-sm d-inline-flex">
                                        <li className="social-icons-facebook">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Facebook"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="social-icons-twitter">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Twitter"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="social-icons-google">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Google"
                                            >
                                                <i className="fab fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 text-center">
                                <div className="team rounded d-inline-block">
                                    <img
                                        className="img-fluid rounded"
                                        alt="James Maxwell"
                                        src="/images/team/leader-2.jpg"
                                    />
                                    <h3>James Maxwell</h3>
                                    <p className="text-muted">Đồng sáng lập</p>
                                    <ul className="social-icons social-icons-sm d-inline-flex">
                                        <li className="social-icons-facebook">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Facebook"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="social-icons-twitter">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Twitter"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="social-icons-google">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Google"
                                            >
                                                <i className="fab fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 text-center">
                                <div className="team rounded d-inline-block">
                                    <img
                                        className="img-fluid rounded"
                                        alt="Ruby Clinton"
                                        src="/images/team/leader-3.jpg"
                                    />
                                    <h3>Ruby Clinton</h3>
                                    <p className="text-muted">Giám đốc Marketing</p>
                                    <ul className="social-icons social-icons-sm d-inline-flex">
                                        <li className="social-icons-facebook">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Facebook"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="social-icons-twitter">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Twitter"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="social-icons-google">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Google"
                                            >
                                                <i className="fab fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 text-center">
                                <div className="team rounded d-inline-block">
                                    <img
                                        className="img-fluid rounded"
                                        alt="Miky Sheth"
                                        src="/images/team/leader-4.jpg"
                                    />
                                    <h3>Miky Sheth</h3>
                                    <p className="text-muted">Tổng giám đốc vận hành</p>
                                    <ul className="social-icons social-icons-sm d-inline-flex">
                                        <li className="social-icons-facebook">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Facebook"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="social-icons-twitter">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Twitter"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="social-icons-google">
                                            <a
                                                data-bs-toggle="tooltip"
                                                href="#!"
                                                target="_blank"
                                                title="Google"
                                            >
                                                <i className="fab fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* OUR INVESTORS */}
                <section className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center">Nhà đầu tư</h2>
                        <p className="lead text-center mb-5">
                            Payyed nhận được sự đồng hành của nhiều đối tác và nhà đầu tư uy tín.
                        </p>

                        <div className="brands-grid separator-border">
                            <div className="row align-items-center text-center">
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-1.png"
                                            alt="Brand 1"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-2.png"
                                            alt="Brand 2"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-3.png"
                                            alt="Brand 3"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-4.png"
                                            alt="Brand 4"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-5.png"
                                            alt="Brand 5"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-6.png"
                                            alt="Brand 6"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-7.png"
                                            alt="Brand 7"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-8.png"
                                            alt="Brand 8"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-9.png"
                                            alt="Brand 9"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-10.png"
                                            alt="Brand 10"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-11.png"
                                            alt="Brand 11"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="#!">
                                        <img
                                            className="img-fluid"
                                            src="/images/partner/partner-1.png"
                                            alt="Brand 12"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="section">
                    <div className="container">
                        <h2 className="text-9 text-center">
                            Mọi người nói gì về Payyed
                        </h2>
                        <p className="lead text-center mb-4">
                            Trải nghiệm thanh toán mà người dùng yêu thích và sẵn sàng chia sẻ.
                        </p>

                        <div
                            className="owl-carousel owl-theme"
                            data-autoplay="true"
                            data-nav="true"
                            data-loop="true"
                            data-margin="30"
                            data-slideby="2"
                            data-stagepadding="5"
                            data-items-xs="1"
                            data-items-sm="1"
                            data-items-md="2"
                            data-items-lg="2"
                        >
                            <div className="item">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-9 text-muted opacity-2 mb-0">
                                        <i className="fa fa-quote-left"></i>
                                    </p>
                                    <p className="text-4">
                                        “Dễ sử dụng, chi phí hợp lý. Mình rất hài lòng với trải
                                        nghiệm chuyển tiền qua Payyed.”
                                    </p>
                                    <strong className="d-block fw-500">Jay Shah</strong>
                                    <span className="text-muted">
                                        Founder tại Icomatic Pvt Ltd
                                    </span>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-9 text-muted opacity-2 mb-0">
                                        <i className="fa fa-quote-left"></i>
                                    </p>
                                    <p className="text-4">
                                        “Dịch vụ tốt, quy trình rõ ràng. Việc nhận thanh toán từ
                                        khách hàng trở nên đơn giản hơn rất nhiều.”
                                    </p>
                                    <strong className="d-block fw-500">Patrick Cary</strong>
                                    <span className="text-muted">Freelancer (USA)</span>
                                </div>
                            </div>

                            <div className="item mh-100">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-9 text-muted opacity-2 mb-0">
                                        <i className="fa fa-quote-left"></i>
                                    </p>
                                    <p className="text-4">
                                        “Chuyển tiền nhanh, đổi tiền tệ tiện lợi. Giá trị nhận được
                                        tốt hơn nhiều so với ngân hàng.”
                                    </p>
                                    <strong className="d-block fw-500">De Mortel</strong>
                                    <span className="text-muted">Nhà bán lẻ online</span>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-9 text-muted opacity-2 mb-0">
                                        <i className="fa fa-quote-left"></i>
                                    </p>
                                    <p className="text-4">
                                        “Mình đã dùng Payyed nhiều lần, tỷ giá tốt, dịch vụ hiệu
                                        quả. Rất đáng để sử dụng lâu dài.”
                                    </p>
                                    <strong className="d-block fw-500">Chris Tom</strong>
                                    <span className="text-muted">Người dùng tại UK</span>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-9 text-muted opacity-2 mb-0">
                                        <i className="fa fa-quote-left"></i>
                                    </p>
                                    <p className="text-4">
                                        “Quản lý tiền qua Payyed rất tiện, mọi giao dịch đều rõ
                                        ràng, minh bạch.”
                                    </p>
                                    <strong className="d-block fw-500">Mauri Lindberg</strong>
                                    <span className="text-muted">Freelancer (Australia)</span>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-9 text-muted opacity-2 mb-0">
                                        <i className="fa fa-quote-left"></i>
                                    </p>
                                    <p className="text-4">
                                        “Mới sử dụng nhưng đến giờ mọi thứ đều hoạt động rất ổn.
                                        Đặc biệt là việc gửi tiền cho bạn bè.”
                                    </p>
                                    <strong className="d-block fw-500">Dennis Jacques</strong>
                                    <span className="text-muted">Người dùng tại USA</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <a href="#!" className="btn-link text-4">
                                Xem thêm đánh giá
                                <i className="fas fa-chevron-right text-2 ms-2"></i>
                            </a>
                        </div>
                    </div>
                </section>

                {/* JOIN US STATS */}
                <section className="section bg-primary py-5">
                    <div className="container text-center">
                        <div className="row gy-4">
                            <div className="col-sm-6 col-md-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon text-light mb-2">
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <h4 className="text-12 text-white mb-0">180+</h4>
                                    <p className="text-4 text-white mb-0">Quốc gia</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon text-light mb-2">
                                        <i className="fas fa-dollar-sign"></i>
                                    </div>
                                    <h4 className="text-12 text-white mb-0">120</h4>
                                    <p className="text-4 text-white mb-0">Loại tiền tệ</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon text-light mb-2">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <h4 className="text-12 text-white mb-0">2.5M</h4>
                                    <p className="text-4 text-white mb-0">Người dùng</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon text-light mb-2">
                                        <i className="far fa-life-ring"></i>
                                    </div>
                                    <h4 className="text-12 text-white mb-0">24/7</h4>
                                    <p className="text-4 text-white mb-0">Hỗ trợ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;

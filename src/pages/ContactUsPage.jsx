import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const ContactUsPage = () => {
    return (
        <div id="main-wrapper">
            <Header />

            {/* PAGE HEADER */}
            <section className="page-header page-header-text-light bg-dark-3 py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <ul className="breadcrumb mb-2">
                                <li><a href="/">Trang chủ</a></li>
                                <li className="active">Liên hệ</li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <h1 className="text-white">Liên hệ với chúng tôi</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <div id="content">
                <div className="container my-5">
                    <div className="row g-4">

                        {/* ADDRESS */}
                        <div className="col-md-4">
                            <div className="bg-white shadow-md rounded h-100 p-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon text-primary mt-4">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <h3>Payyed Inc.</h3>
                                    <p>
                                        Tầng 4, Lô 22, Trên công viên trung tâm<br />
                                        145 Murphy Canyon Rd.<br />
                                        Suite 100-18<br />
                                        San Diego, CA 2028
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* TELEPHONE */}
                        <div className="col-md-4">
                            <div className="bg-white shadow-md rounded h-100 p-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon text-primary mt-4">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <h3>Điện thoại</h3>
                                    <p className="mb-0">(+060) 9898980098</p>
                                    <p>(+060) 8898880088</p>
                                </div>
                            </div>
                        </div>

                        {/* BUSINESS INQUIRIES */}
                        <div className="col-md-4">
                            <div className="bg-white shadow-md rounded h-100 p-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon text-primary mt-4">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <h3>Liên hệ đối tác</h3>
                                    <p>info@payyed.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SOCIAL + TITLE */}
                    <div className="text-center py-5">
                        <h2 className="text-8">Kết nối với chúng tôi</h2>
                        <p className="lead">
                            Hãy liên hệ với chúng tôi qua các kênh mạng xã hội dưới đây.
                        </p>

                        <ul className="social-icons social-icons-lg social-icons-colored justify-content-center">
                            <li className="social-icons-facebook">
                                <a href="http://www.facebook.com/" target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="social-icons-twitter">
                                <a href="http://www.twitter.com/" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="social-icons-google">
                                <a href="http://www.google.com/" target="_blank">
                                    <i className="fab fa-google"></i>
                                </a>
                            </li>
                            <li className="social-icons-linkedin">
                                <a href="http://www.linkedin.com/" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="social-icons-youtube">
                                <a href="http://www.youtube.com/" target="_blank">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li className="social-icons-instagram">
                                <a href="http://www.instagram.com/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SUPPORT SECTION */}
                <section className="hero-wrap section shadow-md">
                    <div className="hero-mask opacity-9 bg-primary"></div>

                    <div
                        className="hero-bg"
                        style={{ backgroundImage: "url('/images/bg/image-2.jpg')" }}
                    ></div>

                    <div className="hero-content py-5">
                        <div className="container text-center">
                            <h2 className="text-9 text-white">Hỗ trợ khách hàng tuyệt vời</h2>
                            <p className="text-4 text-white mb-4">
                                Bạn có câu hỏi? Đừng lo. Đội ngũ hỗ trợ luôn sẵn sàng để giúp bạn.
                            </p>
                            <a href="#!" className="btn btn-light">
                                Tìm hiểu thêm
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUsPage;

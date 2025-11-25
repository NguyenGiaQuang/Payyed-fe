import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const LandingReceivePage = () => {
    return (
        <div id="main-wrapper">
            <Header />

            {/* CONTENT */}
            <div id="content">
                {/* HERO – NHẬN TIỀN */}
                <section className="hero-wrap">
                    <div className="hero-mask opacity-9 bg-primary"></div>
                    <div
                        className="hero-bg"
                        style={{
                            backgroundImage: "url('/src/assets/images/bg/image-5.jpg')",
                        }}
                    ></div>

                    <div className="hero-content d-flex flex-column fullscreen-with-header">
                        <div className="container my-auto py-5 text-center">
                            <h2 className="text-14 text-white">
                                Nhận tiền từ khắp nơi trên thế giới với Payyed
                            </h2>
                            <p className="text-5 text-white mb-4">
                                Nhanh chóng và dễ dàng nhận hoặc yêu cầu thanh toán trực tuyến
                                với Payyed.
                                <br className="d-none d-lg-block" />
                                Hỗ trợ hơn 180 quốc gia và 120 loại tiền tệ.
                            </p>
                            <a
                                className="btn btn-light video-btn"
                                href="#!"
                                data-src="https://www.youtube.com/embed/7e90gBu4pas"
                                data-bs-toggle="modal"
                                data-bs-target="#videoModal"
                            >
                                <span className="text-2 me-3">
                                    <i className="fas fa-play"></i>
                                </span>
                                Xem cách hoạt động
                            </a>
                        </div>
                    </div>
                </section>

                {/* CÁCH NHẬN TIỀN ĐƠN GIẢN */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 mx-auto">
                                <div className="row">
                                    {/* Ảnh minh họa */}
                                    <div className="col-md-5 col-lg-6 text-center my-auto order-2 order-md-1">
                                        <img
                                            className="img-fluid shadow"
                                            src="/src/assets/images/request-money.png"
                                            alt="Yêu cầu nhận tiền"
                                        />
                                    </div>

                                    {/* Nội dung chữ + 3 bước */}
                                    <div className="col-md-7 col-lg-6 order-1 order-md-2">
                                        <h2 className="text-9">
                                            Cách đơn giản để nhận tiền với Payyed
                                        </h2>
                                        <p className="text-3 mb-4">
                                            Chỉ với vài bước đơn giản, bạn có thể yêu cầu thanh toán
                                            và nhận tiền từ bất kỳ ai.
                                        </p>

                                        <div className="row gy-4">
                                            <div className="col-12">
                                                <div className="featured-box style-3">
                                                    <div className="featured-box-icon text-light">
                                                        <span className="w-100 text-20 fw-500">1</span>
                                                    </div>
                                                    <h3>Đăng ký tài khoản</h3>
                                                    <p>
                                                        Đăng ký tài khoản Payyed, đăng nhập và thêm thông
                                                        tin thẻ hoặc tài khoản ngân hàng của bạn.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="featured-box style-3">
                                                    <div className="featured-box-icon text-light">
                                                        <span className="w-100 text-20 fw-500">2</span>
                                                    </div>
                                                    <h3>Nhập thông tin người trả</h3>
                                                    <p>
                                                        Nhập tên, email của người sẽ thanh toán, cùng số
                                                        tiền và loại tiền tệ mà bạn muốn yêu cầu.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="featured-box style-3">
                                                    <div className="featured-box-icon text-light">
                                                        <span className="w-100 text-20 fw-500">3</span>
                                                    </div>
                                                    <h3>Nhận tiền</h3>
                                                    <p>
                                                        Sau khi yêu cầu thanh toán, người trả sẽ nhận được
                                                        email thông báo và thực hiện thanh toán. Bạn sẽ nhận
                                                        được tiền khi giao dịch hoàn tất.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* col-md-7 */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VÌ SAO CHỌN PAYYED? */}
                <section className="section">
                    <div className="container">
                        <h2 className="text-9 text-center">Vì sao nên chọn Payyed?</h2>
                        <p className="lead text-center mb-4">
                            Dưới đây là những lý do khiến Payyed là lựa chọn tốt để quản lý
                            và nhận tiền của bạn.
                        </p>

                        <div className="row">
                            <div className="col-xl-10 mx-auto">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="featured-box style-1">
                                            <div className="featured-box-icon text-primary">
                                                <i className="far fa-check-circle"></i>
                                            </div>
                                            <h3>Hơn 180 quốc gia</h3>
                                            <p>
                                                Hỗ trợ nhận tiền từ nhiều quốc gia khác nhau trên thế
                                                giới.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="featured-box style-1">
                                            <div className="featured-box-icon text-primary">
                                                <i className="far fa-check-circle"></i>
                                            </div>
                                            <h3>Phí thấp</h3>
                                            <p>
                                                Mức phí cạnh tranh, giúp bạn nhận được nhiều tiền hơn
                                                sau mỗi giao dịch.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="featured-box style-1">
                                            <div className="featured-box-icon text-primary">
                                                <i className="far fa-check-circle"></i>
                                            </div>
                                            <h3>Dễ sử dụng</h3>
                                            <p>
                                                Giao diện thân thiện, quy trình yêu cầu thanh toán rất
                                                đơn giản.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="featured-box style-1">
                                            <div className="featured-box-icon text-primary">
                                                <i className="far fa-check-circle"></i>
                                            </div>
                                            <h3>Thanh toán nhanh</h3>
                                            <p>
                                                Tiền thường về tài khoản của bạn trong thời gian ngắn,
                                                tùy phương thức thanh toán.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="featured-box style-1">
                                            <div className="featured-box-icon text-primary">
                                                <i className="far fa-check-circle"></i>
                                            </div>
                                            <h3>Bảo mật 100%</h3>
                                            <p>
                                                Công nghệ mã hóa hiện đại, đảm bảo an toàn cho tài khoản
                                                và giao dịch của bạn.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="featured-box style-1">
                                            <div className="featured-box-icon text-primary">
                                                <i className="far fa-check-circle"></i>
                                            </div>
                                            <h3>Hỗ trợ 24/7</h3>
                                            <p>
                                                Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ mọi
                                                thắc mắc của bạn.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-4">
                                    <a
                                        href="#!"
                                        className="btn btn-outline-primary shadow-none text-uppercase"
                                    >
                                        Đăng ký ngay
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VIDEO – HOW DOES IT WORK */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="row">
                            {/* Video tròn bên trái */}
                            <div className="col-lg-7 order-2 order-lg-1">
                                <div className="hero-wrap section h-100 p-5 mx-4 rounded-pill">
                                    <div className="hero-mask rounded-pill opacity-7 bg-dark"></div>
                                    <div
                                        className="hero-bg rounded-pill"
                                        style={{
                                            backgroundImage:
                                                "url('/src/assets/images/bg/image-6.jpg')",
                                        }}
                                    ></div>
                                    <div className="hero-content text-center py-5 my-5">
                                        <a
                                            className="video-btn d-inline-flex"
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

                            {/* Text bên phải */}
                            <div className="col-lg-5 my-auto text-center text-lg-start order-1 order-lg-2 mb-5 mb-lg-0">
                                <h2 className="text-9">Nhận tiền hoạt động như thế nào?</h2>
                                <p className="lead">
                                    Những lý do khiến việc nhận tiền với Payyed trở nên đơn giản
                                    và hiệu quả.
                                </p>
                                <p className="text-3">
                                    Bạn chỉ cần tạo yêu cầu thanh toán, gửi link hoặc email cho
                                    người trả. Họ có thể thanh toán bằng nhiều phương thức khác
                                    nhau, và bạn theo dõi được trạng thái giao dịch theo thời
                                    gian thực.
                                </p>
                                <p className="text-3">
                                    Mọi giao dịch đều được mã hóa và lưu vết, giúp bạn dễ dàng
                                    tra cứu lịch sử cũng như quản lý dòng tiền nhận vào tài khoản.
                                </p>
                                <a href="#!" className="btn-link text-4">
                                    Tìm hiểu thêm
                                    <i className="fas fa-chevron-right text-2 ms-2"></i>
                                </a>
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
                        <p className="lead text-center mb-5">
                            Trải nghiệm nhận và gửi tiền mà người dùng yêu thích và sẵn sàng
                            chia sẻ.
                        </p>

                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-4">
                                        “Dễ dùng, chi phí hợp lý. Mình dùng Payyed để nhận tiền công
                                        việc, mọi thứ chạy rất mượt, không gặp vấn đề gì.”
                                    </p>
                                    <strong className="d-block fw-500">Jay Shah</strong>
                                    <span className="text-muted">
                                        Founder tại Icomatic Pvt Ltd
                                    </span>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-4">
                                        “Mình hài lòng với trải nghiệm khi dùng Payyed. Nhận tiền từ
                                        đối tác quốc tế nhanh và minh bạch.”
                                    </p>
                                    <strong className="d-block fw-500">Patrick Cary</strong>
                                    <span className="text-muted">Freelancer (USA)</span>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-4">
                                        “Mới dùng thử vài ngày nhưng thấy rất ổn. Nhận tiền từ bạn
                                        bè rất nhanh và thuận tiện.”
                                    </p>
                                    <strong className="d-block fw-500">Dennis Jacques</strong>
                                    <span className="text-muted">Người dùng tại USA</span>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testimonial rounded text-center p-4">
                                    <p className="text-4">
                                        “Tỷ giá tốt, dịch vụ nhanh. Mình dùng để nhận tiền từ nước
                                        ngoài, cảm giác an tâm hơn so với ngân hàng truyền thống.”
                                    </p>
                                    <strong className="d-block fw-500">Chris Tom</strong>
                                    <span className="text-muted">Người dùng tại UK</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <a href="#!" className="btn-link text-4">
                                Xem thêm đánh giá
                                <i className="fas fa-chevron-right text-2 ms-2"></i>
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center">Câu hỏi thường gặp</h2>
                        <p className="lead text-center mb-4 mb-sm-5">
                            Không tìm thấy câu trả lời? Hãy xem thêm tại{" "}
                            <a className="btn-link" href="/help">
                                Trung tâm trợ giúp
                            </a>
                        </p>

                        <div className="row">
                            <div className="col-md-10 col-lg-8 mx-auto">
                                <hr className="mb-0" />

                                <div
                                    className="accordion accordion-flush arrow-end"
                                    id="popularTopics"
                                >
                                    {/* FAQ 1 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                Payyed là gì?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#popularTopics"
                                        >
                                            <div className="accordion-body">
                                                Payyed là nền tảng thanh toán số giúp bạn gửi, nhận và
                                                yêu cầu tiền trực tuyến một cách nhanh chóng, an toàn và
                                                minh bạch.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 2 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                Làm sao để nhận tiền online?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#popularTopics"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Bạn tạo yêu cầu thanh toán, nhập thông tin người trả
                                                    và số tiền. Hệ thống sẽ gửi email hoặc thông báo cho
                                                    họ để thực hiện thanh toán.
                                                </p>
                                                Sau khi người trả xác nhận và thanh toán, tiền sẽ được
                                                chuyển về số dư Payyed hoặc tài khoản ngân hàng mà bạn
                                                đã liên kết.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 3 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                Tiền của tôi có an toàn khi dùng Payyed không?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#popularTopics"
                                        >
                                            <div className="accordion-body">
                                                Tất cả giao dịch đều được mã hóa và bảo vệ bằng nhiều
                                                lớp bảo mật. Hệ thống cũng ghi lại lịch sử chi tiết giúp
                                                bạn dễ dàng kiểm tra và đối soát.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 4 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                Phí nhận tiền qua Payyed là bao nhiêu?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#popularTopics"
                                        >
                                            <div className="accordion-body">
                                                Phí phụ thuộc vào quốc gia, loại tiền tệ và phương thức
                                                thanh toán. Tuy nhiên, mức phí luôn được hiển thị rõ
                                                trước khi bạn xác nhận giao dịch.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 5 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive"
                                                aria-expanded="false"
                                                aria-controls="collapseFive"
                                            >
                                                Cách nhanh nhất để nhận tiền từ nước ngoài là gì?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFive"
                                            data-bs-parent="#popularTopics"
                                        >
                                            <div className="accordion-body">
                                                Cách nhanh nhất thường là nhận tiền vào ví Payyed hoặc
                                                qua thẻ đã liên kết. Sau đó bạn có thể rút về tài khoản
                                                ngân hàng nội địa nếu cần.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 6 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix"
                                                aria-expanded="false"
                                                aria-controls="collapseSix"
                                            >
                                                Tôi có thể mở tài khoản Payyed cho doanh nghiệp không?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSix"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSix"
                                            data-bs-parent="#popularTopics"
                                        >
                                            <div className="accordion-body">
                                                Hoàn toàn có thể. Bạn có thể đăng ký tài khoản doanh
                                                nghiệp để nhận thanh toán từ khách hàng, đối tác trên
                                                toàn thế giới và quản lý doanh thu tập trung.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-0" />
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <a href="#!" className="btn-link text-4">
                                Xem thêm câu hỏi thường gặp
                                <i className="fas fa-chevron-right text-2 ms-2"></i>
                            </a>
                        </div>
                    </div>
                </section>

                {/* ƯU ĐÃI ĐĂNG KÝ */}
                <section className="hero-wrap py-5">
                    <div className="hero-mask opacity-8 bg-dark"></div>
                    <div
                        className="hero-bg"
                        style={{
                            backgroundImage: "url('/src/assets/images/bg/image-2.jpg')",
                        }}
                    ></div>
                    <div className="hero-content">
                        <div className="container d-md-flex text-center text-md-start align-items-center justify-content-center">
                            <h2 className="text-6 fw-400 text-white mb-3 mb-md-0">
                                Đăng ký ngay hôm nay và nhận ưu đãi miễn phí phí giao dịch đầu
                                tiên!
                            </h2>
                            <a
                                href="#!"
                                className="btn btn-outline-light text-nowrap ms-0 ms-md-4"
                            >
                                Đăng ký ngay
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default LandingReceivePage;

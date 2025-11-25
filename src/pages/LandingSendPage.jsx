import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const LandingSendPage = () => {
    return (
        <div id="main-wrapper">
            <Header />

            {/* CONTENT */}
            <div id="content">
                {/* HERO + FORM GỬI TIỀN */}
                <section className="hero-wrap">
                    <div className="hero-mask opacity-7 bg-dark"></div>
                    <div
                        className="hero-bg"
                        style={{ backgroundImage: "url('/src/assets/images/bg/image-6.jpg')" }}
                    ></div>

                    <div className="hero-content d-flex flex-column fullscreen-with-header">
                        <div className="container my-auto py-5">
                            <div className="row">
                                {/* Text bên trái */}
                                <div className="col-lg-6 col-xl-7 my-auto text-center text-lg-start pb-5 pb-lg-0">
                                    <h2 className="text-17 text-white">
                                        <span className="fw-400 text-15">Cách tốt hơn để</span>
                                        <br />
                                        Gửi Tiền
                                    </h2>
                                    <p className="text-4 text-white mb-4">
                                        Gửi tiền với tỷ giá tốt hơn và tránh các khoản phí cao của ngân hàng
                                        truyền thống.
                                    </p>
                                    <a
                                        className="btn btn-outline-light video-btn"
                                        href="#!"
                                        data-src="https://www.youtube.com/embed/7e90gBu4pas"
                                        data-bs-toggle="modal"
                                        data-bs-target="#videoModal"
                                    >
                                        <span className="me-2">
                                            <i className="fas fa-play" />
                                        </span>
                                        Xem cách hoạt động
                                    </a>
                                </div>

                                {/* Form bên phải */}
                                <div className="col-lg-6 col-xl-5 my-auto">
                                    <div className="bg-white rounded shadow-md p-4">
                                        <h3 className="text-5 mb-4 text-center">Gửi tiền</h3>
                                        <hr className="mb-4 mx-n4" />

                                        <form>
                                            {/* Bạn gửi */}
                                            <div className="mb-3">
                                                <label htmlFor="youSend" className="form-label">
                                                    Bạn gửi
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">₫</span>
                                                    <input
                                                        id="youSend"
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="1.000.000"
                                                        placeholder="Số tiền muốn gửi"
                                                    />
                                                    <span className="input-group-text p-0">
                                                        <select
                                                            className="form-select bg-transparent border-0"
                                                            defaultValue="VND"
                                                        >
                                                            <option value="VND">VND – Việt Nam đồng</option>
                                                            <option value="USD">USD – Đô la Mỹ</option>
                                                            <option value="EUR">EUR – Euro</option>
                                                            <option value="AUD">AUD – Đô la Úc</option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Người nhận nhận */}
                                            <div className="mb-3">
                                                <label htmlFor="recipientGets" className="form-label">
                                                    Người nhận nhận
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">$</span>
                                                    <input
                                                        id="recipientGets"
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="40"
                                                        placeholder="Số tiền người nhận nhận được"
                                                    />
                                                    <span className="input-group-text p-0">
                                                        <select
                                                            className="form-select bg-transparent border-0"
                                                            defaultValue="USD"
                                                        >
                                                            <option value="USD">USD – Đô la Mỹ</option>
                                                            <option value="EUR">EUR – Euro</option>
                                                            <option value="GBP">GBP – Bảng Anh</option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Quốc gia nhận */}
                                            <div className="mb-3">
                                                <label htmlFor="country" className="form-label">
                                                    Gửi tới quốc gia
                                                </label>
                                                <select id="country" className="form-select">
                                                    <option>Hoa Kỳ</option>
                                                    <option>Vương quốc Anh</option>
                                                    <option>Úc</option>
                                                    <option>Nhật Bản</option>
                                                    <option>Ấn Độ</option>
                                                </select>
                                            </div>

                                            {/* Thông tin phí & thời gian */}
                                            <div className="row g-3 mb-3">
                                                <div className="col-6">
                                                    <small className="text-muted d-block">Phí ước tính</small>
                                                    <span className="fw-500">~ 50.000₫</span>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <small className="text-muted d-block">Thời gian xử lý</small>
                                                    <span className="fw-500">Trong ngày</span>
                                                </div>
                                            </div>

                                            <div className="d-grid">
                                                <button type="button" className="btn btn-primary">
                                                    Tính toán &amp; gửi tiền
                                                </button>
                                            </div>

                                            <p className="text-2 text-muted mt-3 mb-0">
                                                Bằng việc tiếp tục, bạn đồng ý với{" "}
                                                <a href="#!">Điều khoản &amp; Điều kiện</a> của chúng tôi.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mũi tên xuống nhỏ cho đẹp */}
                        <div className="hero-scroll-down text-center">
                            <a href="#how-it-works" className="text-white-50">
                                <i className="fas fa-chevron-down fa-2x" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* CÁCH GỬI TIỀN ĐƠN GIẢN */}
                <section id="how-it-works" className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center">Cách đơn giản để gửi tiền</h2>
                        <p className="lead text-center mb-5">
                            Chỉ với ba bước cơ bản, bạn có thể gửi tiền tới bất kỳ ai, ở bất kỳ đâu.
                        </p>

                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="featured-box style-3">
                                    <div className="featured-box-icon text-light">
                                        <span className="w-100 text-20 fw-500">1</span>
                                    </div>
                                    <h3>Tạo tài khoản</h3>
                                    <p className="text-3">
                                        Đăng ký tài khoản Payyed miễn phí, xác thực thông tin cá nhân và
                                        thêm phương thức thanh toán của bạn (thẻ hoặc tài khoản ngân hàng).
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="featured-box style-3">
                                    <div className="featured-box-icon text-light">
                                        <span className="w-100 text-20 fw-500">2</span>
                                    </div>
                                    <h3>Nhập thông tin người nhận</h3>
                                    <p className="text-3">
                                        Chọn quốc gia, nhập số tiền, thông tin tài khoản hoặc ví của người
                                        nhận. Hệ thống tự động hiển thị tỷ giá và phí.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="featured-box style-3">
                                    <div className="featured-box-icon text-light">
                                        <span className="w-100 text-20 fw-500">3</span>
                                    </div>
                                    <h3>Gửi tiền</h3>
                                    <p className="text-3">
                                        Xác nhận giao dịch. Người nhận sẽ được thông báo khi tiền về tài
                                        khoản. Bạn có thể theo dõi trạng thái trong lịch sử giao dịch.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-3">
                            <a href="#!" className="btn btn-outline-primary shadow-none text-uppercase">
                                Đăng ký ngay
                            </a>
                        </div>
                    </div>
                </section>

                {/* TẠI SAO CHỌN PAYYED */}
                <section className="section">
                    <div className="container">
                        <h2 className="text-9 text-center">Vì sao nên gửi tiền với Payyed?</h2>
                        <p className="lead text-center mb-5">
                            Payyed mang lại trải nghiệm gửi tiền nhanh, an toàn và minh bạch.
                        </p>

                        <div className="row gy-4">
                            <div className="col-md-6">
                                <div className="hero-wrap section h-100 p-5 rounded">
                                    <div className="hero-mask rounded opacity-6 bg-dark"></div>
                                    <div
                                        className="hero-bg rounded"
                                        style={{ backgroundImage: "url('/src/assets/images/bg/image-6.jpg')" }}
                                    ></div>
                                    <div className="hero-content">
                                        <h2 className="text-6 text-white mb-3">Tại sao là Payyed?</h2>
                                        <p className="text-light mb-5">
                                            Từ giao diện web đến ứng dụng di động, mọi thứ đều được thiết kế
                                            để bạn có thể gửi tiền trong vài cú nhấp chuột, theo dõi giao dịch
                                            và quản lý tài chính dễ dàng.
                                        </p>

                                        <h2 className="text-6 text-white mb-3">
                                            Gửi tiền quốc tế đơn giản
                                        </h2>
                                        <p className="text-light mb-0">
                                            Hỗ trợ nhiều loại tiền tệ, tỷ giá cạnh tranh, không cần xếp hàng
                                            tại quầy giao dịch. Tất cả xử lý trực tuyến, an toàn và minh bạch.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="featured-box style-1 mb-4">
                                    <div className="featured-box-icon text-primary">
                                        <i className="far fa-check-circle" />
                                    </div>
                                    <h3>Dễ sử dụng</h3>
                                    <p>Giao diện đơn giản, phù hợp cả với người mới dùng dịch vụ tài chính số.</p>
                                </div>

                                <div className="featured-box style-1 mb-4">
                                    <div className="featured-box-icon text-primary">
                                        <i className="far fa-check-circle" />
                                    </div>
                                    <h3>Thanh toán nhanh</h3>
                                    <p>Tiền thường đến tài khoản người nhận chỉ trong vài phút hoặc vài giờ.</p>
                                </div>

                                <div className="featured-box style-1 mb-4">
                                    <div className="featured-box-icon text-primary">
                                        <i className="far fa-check-circle" />
                                    </div>
                                    <h3>Bảo mật 100%</h3>
                                    <p>Chuẩn bảo mật ngân hàng, mã hóa nhiều lớp và xác thực đa yếu tố.</p>
                                </div>

                                <div className="featured-box style-1 mb-0">
                                    <div className="featured-box-icon text-primary">
                                        <i className="far fa-check-circle" />
                                    </div>
                                    <h3>Hỗ trợ 24/7</h3>
                                    <p>Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ qua chat, email.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center">Khách hàng nói gì về dịch vụ gửi tiền</h2>
                        <p className="lead text-center mb-4">
                            Những câu chuyện thực tế từ người dùng đang gửi tiền mỗi ngày với Payyed.
                        </p>

                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="testimonial rounded text-center p-4 h-100">
                                    <p className="text-9 text-muted opacity-2 mb-2">
                                        <i className="fa fa-quote-left" />
                                    </p>
                                    <p className="text-4">
                                        “Mình thường xuyên gửi tiền cho gia đình ở nước ngoài. Tỷ giá tốt,
                                        phí rõ ràng, giao dịch chưa lần nào lỗi.”
                                    </p>
                                    <strong className="d-block fw-500">Anh Tuấn</strong>
                                    <span className="text-muted">Người dùng tại Việt Nam</span>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonial rounded text-center p-4 h-100">
                                    <p className="text-9 text-muted opacity-2 mb-2">
                                        <i className="fa fa-quote-left" />
                                    </p>
                                    <p className="text-4">
                                        “Là freelancer nhận tiền từ khách hàng quốc tế, mình rất thích vì
                                        tiền về nhanh và theo dõi được từng giao dịch.”
                                    </p>
                                    <strong className="d-block fw-500">Lan Phương</strong>
                                    <span className="text-muted">Freelancer</span>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonial rounded text-center p-4 h-100">
                                    <p className="text-9 text-muted opacity-2 mb-2">
                                        <i className="fa fa-quote-left" />
                                    </p>
                                    <p className="text-4">
                                        “Giao diện rõ ràng, mọi thứ đều minh bạch, gửi tiền cho đối tác ở
                                        nhiều nước khác nhau khá thuận tiện.”
                                    </p>
                                    <strong className="d-block fw-500">Minh Khoa</strong>
                                    <span className="text-muted">Chủ shop online</span>
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

export default LandingSendPage;

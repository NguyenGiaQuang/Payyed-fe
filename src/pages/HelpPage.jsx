import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const HelpPage = () => {
    return (
        <div id="main-wrapper">
            <Header />

            {/* PAGE HEADER / HERO */}
            <section className="hero-wrap section">
                <div className="hero-mask opacity-9 bg-primary"></div>
                <div
                    className="hero-bg"
                    style={{ backgroundImage: "url('/images/bg/image-2.jpg')" }}
                ></div>
                <div className="hero-content">
                    <div className="container">
                        <div className="row align-items-center text-center">
                            <div className="col-12">
                                <h1 className="text-11 text-white mb-4">
                                    Chúng tôi có thể giúp gì cho bạn?
                                </h1>
                            </div>
                            <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                                <div className="input-group">
                                    <input
                                        className="form-control shadow-none border-0"
                                        type="search"
                                        id="search-input"
                                        placeholder="Tìm kiếm câu trả lời..."
                                    />
                                    <span className="input-group-text bg-white border-0 p-0">
                                        <button
                                            className="btn text-muted shadow-none px-3 border-0"
                                            type="button"
                                        >
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <div id="content">
                {/* MAIN TOPICS */}
                <section className="section py-3 my-3 py-sm-5 my-sm-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-sm-6 col-lg-3">
                                <div className="bg-white shadow-sm rounded p-4 text-center">
                                    <span className="d-block text-17 text-primary mt-2 mb-3">
                                        <i className="fas fa-user-circle"></i>
                                    </span>
                                    <h3 className="text-body text-4">Tài khoản của tôi</h3>
                                    <p className="mb-0">
                                        <a className="text-muted btn-link" href="#!">
                                            Xem các bài viết
                                            <span className="text-1 ms-1">
                                                <i className="fas fa-chevron-right"></i>
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="bg-white shadow-sm rounded p-4 text-center">
                                    <span className="d-block text-17 text-primary mt-2 mb-3">
                                        <i className="fas fa-money-check-alt"></i>
                                    </span>
                                    <h3 className="text-body text-4">Thanh toán</h3>
                                    <p className="mb-0">
                                        <a className="text-muted btn-link" href="#!">
                                            Xem các bài viết
                                            <span className="text-1 ms-1">
                                                <i className="fas fa-chevron-right"></i>
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="bg-white shadow-sm rounded p-4 text-center">
                                    <span className="d-block text-17 text-primary mt-2 mb-3">
                                        <i className="fas fa-shield-alt"></i>
                                    </span>
                                    <h3 className="text-body text-4">Bảo mật</h3>
                                    <p className="mb-0">
                                        <a className="text-muted btn-link" href="#!">
                                            Xem các bài viết
                                            <span className="text-1 ms-1">
                                                <i className="fas fa-chevron-right"></i>
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="bg-white shadow-sm rounded p-4 text-center">
                                    <span className="d-block text-17 text-primary mt-2 mb-3">
                                        <i className="fas fa-credit-card"></i>
                                    </span>
                                    <h3 className="text-body text-4">Phương thức thanh toán</h3>
                                    <p className="mb-0">
                                        <a className="text-muted btn-link" href="#!">
                                            Xem các bài viết
                                            <span className="text-1 ms-1">
                                                <i className="fas fa-chevron-right"></i>
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* POPULAR TOPICS */}
                <section className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center">Chủ đề phổ biến</h2>
                        <p className="text-4 text-center mb-5">
                            Một số câu hỏi thường gặp liên quan đến tài khoản và giao dịch.
                        </p>

                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <div className="row gx-5">
                                    {/* LEFT COLUMN ACCORDION */}
                                    <div className="col-md-6">
                                        <div className="accordion accordion-flush" id="popularTopics">
                                            {/* 1 */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading1">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse1"
                                                        aria-expanded="false"
                                                        aria-controls="collapse1"
                                                    >
                                                        Tôi quên mật khẩu tài khoản thì làm thế nào?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse1"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading1"
                                                    data-bs-parent="#popularTopics"
                                                >
                                                    <div className="accordion-body">
                                                        Bạn có thể sử dụng chức năng “Quên mật khẩu” tại
                                                        màn hình đăng nhập. Chúng tôi sẽ gửi email hướng dẫn
                                                        đặt lại mật khẩu mới cho bạn.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 2 */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading2">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse2"
                                                        aria-expanded="false"
                                                        aria-controls="collapse2"
                                                    >
                                                        Làm sao để rút tiền từ tài khoản Payyed?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse2"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading2"
                                                    data-bs-parent="#popularTopics"
                                                >
                                                    <div className="accordion-body">
                                                        Bạn vào mục <strong>Rút tiền</strong>, chọn tài
                                                        khoản ngân hàng đã liên kết, nhập số tiền và xác
                                                        nhận giao dịch. Thời gian xử lý tùy theo ngân hàng
                                                        của bạn.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 3 */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading3">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse3"
                                                        aria-expanded="false"
                                                        aria-controls="collapse3"
                                                    >
                                                        Làm sao để liên kết tài khoản ngân hàng?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse3"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading3"
                                                    data-bs-parent="#popularTopics"
                                                >
                                                    <div className="accordion-body">
                                                        Vào phần <strong>Cài đặt &gt; Phương thức thanh toán</strong>,
                                                        chọn “Thêm tài khoản ngân hàng” và nhập đầy đủ thông
                                                        tin theo hướng dẫn. Một số ngân hàng có thể yêu cầu
                                                        xác thực bổ sung.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 4 */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading4">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse4"
                                                        aria-expanded="false"
                                                        aria-controls="collapse4"
                                                    >
                                                        Làm sao để xác nhận email cho tài khoản?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse4"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading4"
                                                    data-bs-parent="#popularTopics"
                                                >
                                                    <div className="accordion-body">
                                                        Sau khi đăng ký, chúng tôi sẽ gửi cho bạn một email
                                                        chứa đường dẫn xác minh. Hãy kiểm tra hộp thư (và
                                                        cả thư rác) và nhấn vào link để hoàn tất việc kích
                                                        hoạt tài khoản.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 5 */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading5">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse5"
                                                        aria-expanded="false"
                                                        aria-controls="collapse5"
                                                    >
                                                        Làm sao để nhận tiền qua Payyed?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse5"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading5"
                                                    data-bs-parent="#popularTopics"
                                                >
                                                    <div className="accordion-body">
                                                        Bạn có thể nhận tiền khi người khác gửi trực tiếp
                                                        tới email hoặc tài khoản Payyed của bạn, hoặc khi
                                                        bạn tạo yêu cầu thanh toán và họ hoàn tất giao dịch
                                                        qua link yêu cầu đó.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT COLUMN ACCORDION */}
                                    <div className="col-md-6">
                                        <div
                                            className="accordion accordion-flush"
                                            id="popularTopics2"
                                        >
                                            {/* 6 */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading6">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse6"
                                                        aria-expanded="false"
                                                        aria-controls="collapse6"
                                                    >
                                                        Làm sao xem lịch sử thanh toán của tôi?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse6"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading6"
                                                    data-bs-parent="#popularTopics2"
                                                >
                                                    <div className="accordion-body">
                                                        Vào mục <strong>Giao dịch</strong> trong ứng dụng
                                                        hoặc trang web. Tại đây bạn có thể lọc theo thời
                                                        gian, loại giao dịch và tải về bản sao kê nếu cần.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 7 */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading7">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse7"
                                                        aria-expanded="false"
                                                        aria-controls="collapse7"
                                                    >
                                                        Hoàn tiền của tôi đang ở đâu?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse7"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading7"
                                                    data-bs-parent="#popularTopics2"
                                                >
                                                    <div className="accordion-body">
                                                        Sau khi yêu cầu hoàn tiền được chấp nhận, thời gian
                                                        hoàn trả tùy thuộc vào ngân hàng hoặc nhà phát hành
                                                        thẻ. Thông thường mất từ 3–7 ngày làm việc.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 8 */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading8">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse8"
                                                        aria-expanded="false"
                                                        aria-controls="collapse8"
                                                    >
                                                        Làm sao để yêu cầu thanh toán hoặc gửi hóa đơn?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse8"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading8"
                                                    data-bs-parent="#popularTopics2"
                                                >
                                                    <div className="accordion-body">
                                                        Bạn có thể tạo yêu cầu thanh toán trong mục{" "}
                                                        <strong>Yêu cầu tiền</strong>, nhập email hoặc ID
                                                        Payyed của người trả, số tiền và nội dung. Họ sẽ
                                                        nhận được thông báo cùng đường dẫn để thanh toán.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 9 */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading9">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse9"
                                                        aria-expanded="false"
                                                        aria-controls="collapse9"
                                                    >
                                                        Tôi quên mật khẩu! Phải làm gì tiếp theo?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse9"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading9"
                                                    data-bs-parent="#popularTopics2"
                                                >
                                                    <div className="accordion-body">
                                                        Chỉ cần nhấn “Quên mật khẩu” trên màn hình đăng nhập
                                                        và làm theo hướng dẫn. Nếu không nhận được email,
                                                        hãy kiểm tra thư rác hoặc liên hệ bộ phận hỗ trợ.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 10 */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading10">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse10"
                                                        aria-expanded="false"
                                                        aria-controls="collapse10"
                                                    >
                                                        Đóng tài khoản Payyed như thế nào?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapse10"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="heading10"
                                                    data-bs-parent="#popularTopics2"
                                                >
                                                    <div className="accordion-body">
                                                        Bạn có thể yêu cầu đóng tài khoản trong mục{" "}
                                                        <strong>Cài đặt tài khoản</strong>. Hãy đảm bảo số
                                                        dư trong tài khoản đã được rút hết trước khi đóng.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /RIGHT */}
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <a href="#!" className="btn-link text-4">
                                Xem thêm chủ đề
                                <i className="fas fa-chevron-right text-2 ms-2"></i>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CAN'T FIND / TECH SUPPORT */}
                <section className="section py-4 my-4 py-sm-5 my-sm-5">
                    <div className="container">
                        <div className="row g-4">
                            {/* Block 1 */}
                            <div className="col-lg-6">
                                <div className="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
                                    <div className="row g-0">
                                        <div className="col-12 col-sm-auto text-13 text-light d-flex align-items-center justify-content-center">
                                            <span className="px-4 ms-3 me-2 mb-4 mb-sm-0">
                                                <i className="far fa-envelope"></i>
                                            </span>
                                        </div>
                                        <div className="col text-center text-sm-start">
                                            <div>
                                                <h5 className="text-3 text-body">
                                                    Không tìm thấy câu trả lời bạn cần?
                                                </h5>
                                                <p className="text-muted mb-0">
                                                    Chúng tôi luôn sẵn sàng hỗ trợ. Hãy liên hệ với chúng
                                                    tôi và đội ngũ hỗ trợ sẽ phản hồi sớm nhất có thể.{" "}
                                                    <a className="btn-link" href="#!">
                                                        Liên hệ ngay
                                                        <span className="text-1 ms-1">
                                                            <i className="fas fa-chevron-right"></i>
                                                        </span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Block 2 */}
                            <div className="col-lg-6">
                                <div className="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
                                    <div className="row g-0">
                                        <div className="col-12 col-sm-auto text-13 text-light d-flex align-items-center justify-content-center">
                                            <span className="px-4 ms-3 me-2 mb-4 mb-sm-0">
                                                <i className="far fa-comment-alt"></i>
                                            </span>
                                        </div>
                                        <div className="col text-center text-sm-start">
                                            <div>
                                                <h5 className="text-3 text-body">
                                                    Câu hỏi kỹ thuật
                                                </h5>
                                                <p className="text-muted mb-0">
                                                    Nếu bạn gặp vấn đề kỹ thuật, hãy trò chuyện với chúng
                                                    tôi qua live chat hoặc kênh hỗ trợ.{" "}
                                                    <a className="btn-link" href="#!">
                                                        Bấm vào đây
                                                        <span className="text-1 ms-1">
                                                            <i className="fas fa-chevron-right"></i>
                                                        </span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Block 2 */}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default HelpPage;

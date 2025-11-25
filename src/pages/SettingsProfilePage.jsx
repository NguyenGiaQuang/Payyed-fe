import React from "react";
import DashboardHeader from "../components/layout/DashboardHeader.jsx";
import DashboardSidebar from "../components/dashboard/DashboardSidebar.jsx";
import SettingsSecondNavigation from "../components/navigation/SettingsSecondNavigation.jsx";
import Footer from "../components/layout/Footer.jsx";

const SettingsProfilePage = () => {
    return (
        <div id="main-wrapper">
            <DashboardHeader />
            <SettingsSecondNavigation />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <DashboardSidebar />

                        <div className="col-lg-9">
                            {/* THÔNG TIN CÁ NHÂN */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Thông tin cá nhân
                                    <a
                                        href="#edit-personal-details"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Họ và tên:
                                    </p>
                                    <p className="col-sm-9 text-3">Smith Rhodes</p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Ngày sinh:
                                    </p>
                                    <p className="col-sm-9 text-3">12-09-1982</p>
                                </div>

                                <div className="row gx-3 align-items-baseline">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Địa chỉ:
                                    </p>
                                    <p className="col-sm-9 text-3">
                                        Tầng 4, Lô số 22, phía trên Công viên công cộng, 145 Murphy
                                        Canyon Rd, Suite 100-18,
                                        <br />
                                        San Ditego,
                                        <br />
                                        California - 22434,
                                        <br />
                                        Hoa Kỳ.
                                    </p>
                                </div>
                            </div>

                            {/* Modal chỉnh sửa thông tin cá nhân */}
                            <div
                                id="edit-personal-details"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">Thông tin cá nhân</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            <form id="personaldetails" method="post">
                                                <div className="row g-3">
                                                    <div className="col-sm-6">
                                                        <label htmlFor="firstName" className="form-label">
                                                            Tên
                                                        </label>
                                                        <input
                                                            type="text"
                                                            defaultValue="Smith"
                                                            className="form-control"
                                                            id="firstName"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label htmlFor="lastName" className="form-label">
                                                            Họ
                                                        </label>
                                                        <input
                                                            type="text"
                                                            defaultValue="Rhodes"
                                                            className="form-control"
                                                            id="lastName"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="birthDate" className="form-label">
                                                            Ngày sinh
                                                        </label>
                                                        <div className="position-relative">
                                                            <input
                                                                id="birthDate"
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="12-09-1982"
                                                            />
                                                            <span className="icon-inside">
                                                                <i className="fas fa-calendar-alt" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h3 className="text-5 fw-400 mt-4">Địa chỉ</h3>
                                                <hr />

                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <label htmlFor="address" className="form-label">
                                                            Địa chỉ
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="address"
                                                            defaultValue="4th Floor, Plot No.22, Above Public Park"
                                                        />
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label htmlFor="city" className="form-label">
                                                            Thành phố
                                                        </label>
                                                        <input
                                                            id="city"
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="San Ditego"
                                                        />
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label htmlFor="input-zone" className="form-label">
                                                            Bang / Tỉnh
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="input-zone"
                                                            name="zone_id"
                                                            defaultValue="3624"
                                                        >
                                                            <option value="">--- Chọn ---</option>
                                                            <option value="3613">Alabama</option>
                                                            <option value="3624">California</option>
                                                            {/* ...các bang khác... */}
                                                        </select>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label htmlFor="zipCode" className="form-label">
                                                            Mã bưu điện
                                                        </label>
                                                        <input
                                                            id="zipCode"
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="22434"
                                                        />
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label htmlFor="inputCountry" className="form-label">
                                                            Quốc gia
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="inputCountry"
                                                            name="country_id"
                                                            defaultValue="223"
                                                        >
                                                            <option value="">--- Chọn ---</option>
                                                            <option value="223">United States</option>
                                                            <option value="230">Viet Nam</option>
                                                            {/* ...các quốc gia khác... */}
                                                        </select>
                                                    </div>

                                                    <div className="col-12 mt-4 d-grid">
                                                        <button className="btn btn-primary" type="submit">
                                                            Lưu thay đổi
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CÀI ĐẶT TÀI KHOẢN */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Cài đặt tài khoản
                                    <a
                                        href="#edit-account-settings"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Ngôn ngữ:
                                    </p>
                                    <p className="col-sm-9 text-3">English (United States)</p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Múi giờ:
                                    </p>
                                    <p className="col-sm-9 text-3">
                                        (GMT-06:00) Central America
                                    </p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Trạng thái tài khoản:
                                    </p>
                                    <p className="col-sm-9 text-3">
                                        <span className="bg-success text-white rounded-pill d-inline-block px-2">
                                            <i className="fas fa-check-circle me-1" />
                                            Đang hoạt động
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Modal cài đặt tài khoản */}
                            <div
                                id="edit-account-settings"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">
                                                Cài đặt tài khoản
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            <form id="accountSettings" method="post">
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <label htmlFor="language" className="form-label">
                                                            Ngôn ngữ
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="language"
                                                            defaultValue="1"
                                                        >
                                                            <option value="1">
                                                                English (United States)
                                                            </option>
                                                            <option value="2">Tiếng Tây Ban Nha</option>
                                                            <option value="3">Tiếng Trung</option>
                                                            <option value="4">Tiếng Nga</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-12">
                                                        <label
                                                            htmlFor="input-timezone"
                                                            className="form-label"
                                                        >
                                                            Múi giờ
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="input-timezone"
                                                            defaultValue="-6"
                                                        >
                                                            <option value="-12">
                                                                (GMT-12:00) International Date Line West
                                                            </option>
                                                            <option value="-10">
                                                                (GMT-10:00) Hawaii
                                                            </option>
                                                            <option value="-8">
                                                                (GMT-08:00) Pacific Time (US &amp; Canada)
                                                            </option>
                                                            <option value="-6">
                                                                (GMT-06:00) Central America
                                                            </option>
                                                            <option value="7">
                                                                (GMT+07:00) Bangkok, Hanoi, Jakarta
                                                            </option>
                                                            {/* ...múi giờ khác... */}
                                                        </select>
                                                    </div>

                                                    <div className="col-12">
                                                        <label
                                                            htmlFor="accountStatus"
                                                            className="form-label"
                                                        >
                                                            Trạng thái tài khoản
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="accountStatus"
                                                            defaultValue="1"
                                                        >
                                                            <option value="1">Đang hoạt động</option>
                                                            <option value="2">Ngừng hoạt động</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-12 d-grid mt-4">
                                                        <button className="btn btn-primary" type="submit">
                                                            Lưu thay đổi
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Địa chỉ email
                                    <a
                                        href="#edit-email"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Email:
                                    </p>
                                    <p className="col-sm-9 text-3 d-sm-inline-flex align-items-center">
                                        smithrhodes1982@gmail.com
                                        <span className="badge bg-info text-1 fw-500 rounded-pill px-2 py-1 ms-2">
                                            Chính
                                        </span>
                                    </p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Email:
                                    </p>
                                    <p className="col-sm-9 text-3">smith.rhodes@outlook.com</p>
                                </div>
                            </div>

                            {/* Modal email */}
                            <div
                                id="edit-email"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">Địa chỉ email</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            <form id="emailAddresses" method="post">
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="emailID"
                                                        className="form-label d-inline-flex align-items-center"
                                                    >
                                                        Email
                                                        <span className="badge bg-info text-1 fw-500 rounded-pill px-2 py-1 ms-2">
                                                            Chính
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="emailID"
                                                        defaultValue="smithrhodes1982@gmail.com"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="emailID2" className="form-label">
                                                        Email 2 –{" "}
                                                        <a
                                                            href="#!"
                                                            className="btn-link text-uppercase text-1"
                                                        >
                                                            Đặt làm chính
                                                        </a>
                                                    </label>
                                                    <div className="input-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="emailID2"
                                                            defaultValue="smith.rhodes@outlook.com"
                                                        />
                                                        <a
                                                            href="#!"
                                                            className="input-group-text text-muted text-2"
                                                            data-bs-toggle="tooltip"
                                                            title="Xoá"
                                                        >
                                                            <i className="fas fa-times" />
                                                        </a>
                                                    </div>
                                                </div>

                                                <a
                                                    href="#!"
                                                    className="btn-link text-uppercase d-flex align-items-center text-1 float-end mb-3"
                                                >
                                                    <span className="text-3 me-1">
                                                        <i className="fas fa-plus-circle" />
                                                    </span>
                                                    Thêm email khác
                                                </a>

                                                <div className="d-grid">
                                                    <button className="btn btn-primary" type="submit">
                                                        Lưu thay đổi
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ĐIỆN THOẠI */}
                            <div className="bg-white shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                                    Điện thoại
                                    <a
                                        href="#edit-phone"
                                        data-bs-toggle="modal"
                                        className="ms-auto text-2 text-uppercase btn-link"
                                    >
                                        <span className="me-1">
                                            <i className="fas fa-edit" />
                                        </span>
                                        Chỉnh sửa
                                    </a>
                                </h3>
                                <hr className="mx-n4 mb-4" />

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Di động:
                                    </p>
                                    <p className="col-sm-9 text-3 d-sm-inline-flex align-items-center">
                                        +1 202-555-0125
                                        <span className="badge bg-info text-1 fw-500 rounded-pill px-2 py-1 ms-2">
                                            Chính
                                        </span>
                                    </p>
                                </div>

                                <div className="row gx-3 align-items-center">
                                    <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                        Di động:
                                    </p>
                                    <p className="col-sm-9 text-3">+1 303-666-0512</p>
                                </div>
                            </div>

                            {/* Modal điện thoại – rút gọn list mã quốc gia */}
                            <div
                                id="edit-phone"
                                className="modal fade"
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-400">Điện thoại</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Đóng"
                                            />
                                        </div>
                                        <div className="modal-body p-4">
                                            <form id="phone" method="post">
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="mobileNumber"
                                                        className="form-label d-inline-flex align-items-center"
                                                    >
                                                        Di động
                                                        <span className="badge bg-info text-1 fw-500 rounded-pill px-2 py-1 ms-2">
                                                            Chính
                                                        </span>
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text p-0">
                                                            <select
                                                                className="form-select border-0 bg-transparent"
                                                                id="selectedCountry1"
                                                                defaultValue="US,1"
                                                            >
                                                                <option value="US,1">US +1</option>
                                                                <option value="VN,84">VN +84</option>
                                                            </select>
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="mobileNumber"
                                                            defaultValue="2025550125"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="mobileNumber2"
                                                        className="form-label"
                                                    >
                                                        Di động 2 –{" "}
                                                        <a
                                                            href="#!"
                                                            className="btn-link text-uppercase text-1"
                                                        >
                                                            Đặt làm chính
                                                        </a>
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text p-0">
                                                            <select
                                                                className="form-select border-0 bg-transparent"
                                                                id="selectedCountry2"
                                                                defaultValue="US,1"
                                                            >
                                                                <option value="US,1">US +1</option>
                                                                <option value="VN,84">VN +84</option>
                                                            </select>
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="mobileNumber2"
                                                            defaultValue="3036660512"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-grid">
                                                    <button className="btn btn-primary" type="submit">
                                                        Lưu thay đổi
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* end col-lg-9 */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SettingsProfilePage;

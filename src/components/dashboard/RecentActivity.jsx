import React from "react";

const defaultItems = [
    {
        id: 1,
        day: "16",
        month: "THÁNG 4",
        description: "Envato Pty Ltd",
        detail: "Thanh toán đã nhận",
        status: "Hoàn tất",
        statusType: "success",
        amount: "+$562.00",
        currency: "USD",
    },
    {
        id: 2,
        day: "15",
        month: "THÁNG 4",
        description: "Chuyển đến ngân hàng",
        detail: "Rút tiền về tài khoản ngân hàng",
        status: "Đang xử lý",
        statusType: "warning",
        amount: "-$120.00",
        currency: "USD",
    },
    {
        id: 3,
        day: "14",
        month: "THÁNG 4",
        description: "Themeforest",
        detail: "Thanh toán đã gửi",
        status: "Hoàn tất",
        statusType: "success",
        amount: "-$80.00",
        currency: "USD",
    },
    {
        id: 4,
        day: "13",
        month: "THÁNG 4",
        description: "Figma License",
        detail: "Thanh toán đã gửi",
        status: "Thất bại",
        statusType: "danger",
        amount: "-$19.00",
        currency: "USD",
    },
];

const getStatusIcon = (statusType) => {
    switch (statusType) {
        case "success":
            return <i className="fas fa-check-circle"></i>;
        case "warning":
            return <i className="fas fa-clock"></i>;
        case "danger":
            return <i className="fas fa-times-circle"></i>;
        default:
            return <i className="far fa-circle"></i>;
    }
};

const RecentActivity = ({ title = "Hoạt động gần đây", items = defaultItems }) => {
    return (
        <div className="bg-white shadow-sm rounded py-4 mb-4">
            <h3 className="text-5 fw-400 d-flex align-items-center px-4 mb-4">
                {title}
            </h3>

            {/* Table header */}
            <div className="transaction-title py-2 px-4">
                <div className="row fw-00">
                    <div className="col-2 col-sm-1 text-center">
                        <span className="text-muted">Ngày</span>
                    </div>
                    <div className="col col-sm-7">
                        <span className="text-muted">Mô tả</span>
                    </div>
                    <div className="col-auto col-sm-2 d-none d-sm-block text-center">
                        <span className="text-muted">Trạng thái</span>
                    </div>
                    <div className="col-3 col-sm-2 text-end">
                        <span className="text-muted">Số tiền</span>
                    </div>
                </div>
            </div>

            <div className="transaction-list">
                {items.map((item) => {
                    const isNegative = item.amount.startsWith("-");
                    const amountClass = isNegative ? "text-danger" : "text-success";

                    let statusClass = "text-muted";
                    if (item.statusType === "success") statusClass = "text-success";
                    if (item.statusType === "warning") statusClass = "text-warning";
                    if (item.statusType === "danger") statusClass = "text-danger";

                    return (
                        <div
                            key={item.id}
                            className="transaction-item px-4 py-3"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="row align-items-center flex-row">
                                <div className="col-2 col-sm-1 text-center">
                                    <span className="d-block text-4 fw-500">{item.day}</span>
                                    <span className="d-block text-1 fw-300">{item.month}</span>
                                </div>

                                <div className="col col-sm-7">
                                    <span className="d-block text-4">{item.description}</span>
                                    <span className="text-muted">{item.detail}</span>
                                </div>

                                <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                                    <span className={statusClass} title={item.status}>
                                        {getStatusIcon(item.statusType)}
                                    </span>
                                    <div className="text-muted text-2">{item.status}</div>
                                </div>

                                <div className="col-3 col-sm-2 text-end text-4">
                                    <span className={amountClass}>{item.amount}</span>{" "}
                                    <span className="text-2 text-uppercase">({item.currency})</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="text-center mt-3">
                <a href="/transactions" className="btn-link text-3">
                    Xem tất cả giao dịch
                    <i className="fas fa-chevron-right text-2 ms-1"></i>
                </a>
            </div>
        </div>
    );
};

export default RecentActivity;
